'use client';

/**
 * [slug] Layout — Slug-Based Tenant Shell
 *
 * Wraps all pages under /{tenant-slug}/* with the standard backoffice
 * layout (sidebar, header) and validates the slug against the authenticated
 * user's tenant context.
 *
 * If the slug doesn't match the JWT tenant, non-super-admin users are
 * redirected to their correct tenant URL.
 */

import React, { Suspense, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Sidebar } from '@/modules/m9/components/Sidebar/Sidebar';
import { Header } from '@/modules/m9/components/Header/Header';
import { RouteGuard } from '@/shared/guards/RouteGuard';
import { ImpersonationBanner } from '@/modules/m9/components/Auth/ImpersonationBanner';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils';
import { CartProvider } from '@/modules/shop/context/CartContext';
import { ToastProvider } from '@/modules/shop/context/ToastContext';
import { getNavigationByUserType } from '@/shared/config/navigation';
import { useEntitlements } from '@/shared/entitlements';
import { useAuth } from '@/shared/contexts';
import { useImpersonation } from '@/app/providers/ImpersonationProvider';
import { TenantStoreProvider } from '@/app/providers/TenantStoreProvider';
import { UserType } from '@/shared/types/auth';
import { Loader2 } from 'lucide-react';

export default function SlugTenantLayout({ children }: { children: React.ReactNode }) {
    const params = useParams();
    const slug = params?.slug as string;
    const pathname = usePathname();
    const router = useRouter();
    const { entitlementPaths } = useEntitlements();
    const { permissions, userType, isSuperAdmin, tenantSlug, isLoading, isAuthenticated } = useAuth();
    const { isImpersonating } = useImpersonation();

    const isLoginPage = pathname?.endsWith('/login');
    const isShop = pathname?.includes('/shop');

    // ── Login page: render without shell (standalone branded page) ────
    if (isLoginPage) {
        return <>{children}</>;
    }

    // ── Slug validation ─────────────────────────────────────────────────
    // Super admins can access any tenant slug (impersonation).
    // Brand admins must match their own tenant slug.
    const [slugValid, setSlugValid] = useState(true);

    useEffect(() => {
        if (isLoading || !isAuthenticated) return;

        // Super admins can access any slug
        if (isSuperAdmin) {
            setSlugValid(true);
            return;
        }

        // Brand users: slug must match their tenant
        if (tenantSlug && slug !== tenantSlug) {
            router.replace(`/${tenantSlug}/home`);
            setSlugValid(false);
            return;
        }

        setSlugValid(true);
    }, [slug, tenantSlug, isSuperAdmin, isLoading, isAuthenticated, router]);

    // ── Navigation (reuse backoffice nav with slug-aware hrefs) ──────────
    const filteredNav = getNavigationByUserType(userType, {
        entitlementPaths,
        permissions,
        isSuperAdmin,
    }).map(item => ({
        ...item,
        href: item.href.replace('/backoffice', `/${slug}`),
        children: item.children?.map(child => ({
            ...child,
            href: child.href.replace('/backoffice', `/${slug}`),
        })),
    }));

    const canShowNewSale = (isImpersonating || !isSuperAdmin) &&
        userType && [UserType.BRAND_ADMIN, UserType.ADMIN, UserType.MANAGER].includes(userType);

    if (isLoading || !slugValid) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
                    <span className="text-sm font-bold text-slate-400">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <RouteGuard allowedPrefix={`/${slug}`}>
            <TenantStoreProvider>
                <ToastProvider>
                    <CartProvider>
                        <Suspense fallback={null}>
                            <div className="min-h-screen bg-slate-50 flex flex-col">
                                <ImpersonationBanner />
                                <div className="flex flex-1">
                                    <Sidebar
                                        navItems={filteredNav}
                                        variant="backoffice"
                                        showNewSale={!!canShowNewSale}
                                        logoHref={`/${slug}/home`}
                                    />
                                    <div className="flex-1 flex flex-col min-h-screen ml-64 transition-all duration-300 min-w-0">
                                        <Header />
                                        <main className={cn(
                                            "flex-1 overflow-y-auto overflow-x-hidden",
                                            isShop ? "p-0" : "p-6"
                                        )}>
                                            <div className="animate-in fade-in duration-500">
                                                {children}
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        </Suspense>
                    </CartProvider>
                </ToastProvider>
            </TenantStoreProvider>
        </RouteGuard>
    );
}
