/**
 * Next.js Middleware — Edge Auth + Role-Based Route Gate
 *
 * Runs BEFORE page render on the server/edge.
 * - Redirects unauthenticated users to /login
 * - Enforces role → route prefix mapping using canonical roles
 * - Supports slug-based tenant routing (/{slug}/*)
 * - Allows super admins cross-access (impersonation)
 * - Redirects legacy /backoffice/* to /{tenant-slug}/*
 * - Backend must still revalidate on every API call
 *
 * IMPORTANT: Uses the canonical role system from shared/types/auth.ts.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// ─── Canonical UserType System (inlined for edge compatibility) ─────────────

const enum CanonicalUserType {
    PLATFORM_SUPER_ADMIN = 'PLATFORM_SUPER_ADMIN',
    BRAND_ADMIN = 'BRAND_ADMIN',
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    POS_USER = 'POS_USER',
    KITCHEN_USER = 'KITCHEN_USER',
    CALL_CENTER = 'CALL_CENTER',
    DELIVERY = 'DELIVERY',
}

function resolveUserType(raw: string | null | undefined): CanonicalUserType | null {
    if (!raw) return null;
    const key = raw.toLowerCase();
    const map: Record<string, CanonicalUserType> = {
        'platform_super_admin': CanonicalUserType.PLATFORM_SUPER_ADMIN,
        'super_admin': CanonicalUserType.PLATFORM_SUPER_ADMIN,
        'brand_admin': CanonicalUserType.BRAND_ADMIN,
        'admin': CanonicalUserType.PLATFORM_SUPER_ADMIN,
        'manager': CanonicalUserType.MANAGER,
        'store_manager': CanonicalUserType.MANAGER,
        'pos_user': CanonicalUserType.POS_USER,
        'employee': CanonicalUserType.POS_USER,
        'kds_user': CanonicalUserType.KITCHEN_USER,
        'kitchen_user': CanonicalUserType.KITCHEN_USER,
        'call_center_user': CanonicalUserType.CALL_CENTER,
        'call_center': CanonicalUserType.CALL_CENTER,
        'delivery': CanonicalUserType.DELIVERY,
    };
    return map[key] ?? null;
}

// ─── Reserved Route Prefixes (NOT tenant slugs) ────────────────────────────

const RESERVED_PREFIXES = [
    '/platform', '/backoffice', '/pos', '/kds', '/callcenter',
    '/login', '/signup', '/forgot-password', '/reset-password',
    '/accept-invite', '/api', '/kiosk', '/track', '/unsubscribe',
    '/_next', '/favicon',
];

// ─── Public Routes ──────────────────────────────────────────────────────────

const PUBLIC_ROUTES = [
    '/login',
    '/signup',
    '/forgot-password',
    '/reset-password',
    '/accept-invite',
    '/api/auth',
    '/kiosk',
    '/track',
    '/unsubscribe',
];

// ─── UserType → Default Landing Page ─────────────────────────────────────────

const DEFAULT_PAGE: Record<CanonicalUserType, string> = {
    [CanonicalUserType.PLATFORM_SUPER_ADMIN]: '/platform/tenants',
    [CanonicalUserType.BRAND_ADMIN]: '/backoffice/home',       // Will redirect to /{slug}/home
    [CanonicalUserType.ADMIN]: '/backoffice/home',
    [CanonicalUserType.MANAGER]: '/backoffice/home',
    [CanonicalUserType.POS_USER]: '/pos',
    [CanonicalUserType.KITCHEN_USER]: '/kds/master',
    [CanonicalUserType.CALL_CENTER]: '/callcenter/dashboard',
    [CanonicalUserType.DELIVERY]: '/backoffice/home',
};

// ─── UserType → Allowed Route Prefixes ───────────────────────────────────────

const ALLOWED_PREFIXES: Record<CanonicalUserType, string[]> = {
    [CanonicalUserType.PLATFORM_SUPER_ADMIN]: ['/platform', '/backoffice', '/pos', '/kds', '/callcenter'],
    [CanonicalUserType.BRAND_ADMIN]: ['/backoffice', '/pos', '/kds', '/callcenter'],
    [CanonicalUserType.ADMIN]: ['/backoffice', '/pos', '/kds', '/callcenter'],
    [CanonicalUserType.MANAGER]: ['/backoffice', '/pos', '/kds', '/callcenter'],
    [CanonicalUserType.POS_USER]: ['/pos'],
    [CanonicalUserType.KITCHEN_USER]: ['/kds'],
    [CanonicalUserType.CALL_CENTER]: ['/callcenter'],
    [CanonicalUserType.DELIVERY]: ['/backoffice'],
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function isPublicRoute(pathname: string): boolean {
    return PUBLIC_ROUTES.some((route) => pathname.startsWith(route));
}

function isReservedPrefix(pathname: string): boolean {
    return RESERVED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function isSlugRoute(pathname: string): boolean {
    // A slug route is any path like /{something}/... that isn't a reserved prefix
    if (pathname === '/') return false;
    const firstSegment = '/' + pathname.split('/')[1];
    return !isReservedPrefix(firstSegment);
}

function isSlugLoginRoute(pathname: string): boolean {
    // /{slug}/login is public
    const parts = pathname.split('/');
    return parts.length >= 3 && parts[2] === 'login' && !isReservedPrefix('/' + parts[1]);
}

// ─── Middleware ──────────────────────────────────────────────────────────────

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Static assets and Next.js internals — skip
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/favicon') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // 2. Public routes — always allow (including /{slug}/login)
    if (isPublicRoute(pathname) || isSlugLoginRoute(pathname)) {
        return NextResponse.next();
    }

    // 3. Verify JWT via next-auth
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
        // Determine correct login URL
        if (isSlugRoute(pathname)) {
            // Redirect to branded login: /{slug}/login
            const slug = pathname.split('/')[1];
            const loginUrl = new URL(`/${slug}/login`, request.url);
            return NextResponse.redirect(loginUrl);
        }
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(loginUrl);
    }

    // 4. Extract and normalize UserType
    const rawRole = (token as any).role || (token as any).user_role || null;
    const userType = resolveUserType(rawRole as string);
    const tenantSlug = (token as any).tenantSlug || null;
    const isSuperAdmin = userType === CanonicalUserType.PLATFORM_SUPER_ADMIN;

    // 5. Root path → redirect to UserType's default page
    if (pathname === '/') {
        if (isSuperAdmin) {
            return NextResponse.redirect(new URL('/platform/tenants', request.url));
        }
        // Brand users → redirect to their slug-based dashboard
        if (tenantSlug) {
            return NextResponse.redirect(new URL(`/${tenantSlug}/home`, request.url));
        }
        const defaultPage = userType ? DEFAULT_PAGE[userType] : '/login';
        return NextResponse.redirect(new URL(defaultPage, request.url));
    }

    // 6. Legacy /backoffice/* → redirect to /{slug}/* for brand users
    if (pathname.startsWith('/backoffice') && tenantSlug) {
        const subPath = pathname.replace('/backoffice', '');
        return NextResponse.redirect(new URL(`/${tenantSlug}${subPath || '/home'}`, request.url));
    }

    // 7. Slug-based routes: /{slug}/*
    if (isSlugRoute(pathname)) {
        // Super admin can access any slug (impersonation)
        if (isSuperAdmin) {
            return NextResponse.next();
        }

        // Brand users: their slug must match the URL slug
        const urlSlug = pathname.split('/')[1];
        if (tenantSlug && urlSlug !== tenantSlug) {
            console.warn(
                `[Middleware] Tenant slug mismatch: URL="${urlSlug}" JWT="${tenantSlug}". Redirecting.`
            );
            return NextResponse.redirect(new URL(`/${tenantSlug}/home`, request.url));
        }

        // Tenant user accessing their own slug — allow
        return NextResponse.next();
    }

    // 8. Traditional role-based prefix enforcement for non-slug routes
    if (userType) {
        const allowed = ALLOWED_PREFIXES[userType] || [];
        const isAllowed = allowed.some((prefix) => pathname.startsWith(prefix));

        if (!isAllowed) {
            const defaultPage = userType ? DEFAULT_PAGE[userType] : '/login';
            console.warn(
                `[Middleware] UserType "${userType}" blocked from ${pathname}. → ${defaultPage}`
            );
            return NextResponse.redirect(new URL(defaultPage, request.url));
        }
    }

    // 9. Authenticated + authorized — proceed
    return NextResponse.next();
}

// ─── Matcher ────────────────────────────────────────────────────────────────

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
