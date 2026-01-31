'use client';

import React, { ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/providers/AuthProvider';
import { useRouteAccess } from '@/hooks/useRouteAccess';

interface RoleGuardProps {
    children: ReactNode;
}

/**
 * RoleGuard Component
 * UX-level protection for unauthorized routes.
 * Redirects unauthorized users to their first allowed screen.
 */
export const RoleGuard: React.FC<RoleGuardProps> = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const { isAuthorized, getVisibleMenuItems } = useRouteAccess();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            const authorized = isAuthorized(pathname || '');
            if (!authorized) {
                const allowedItems = getVisibleMenuItems();
                const firstAllowed = allowedItems[0];
                const fallback = firstAllowed ? firstAllowed.route : '/backoffice/home';

                console.warn(`Access denied to ${pathname}. Redirecting to ${fallback}`);
                router.replace(fallback);
            }
        } else if (!isLoading && !isAuthenticated) {
            router.replace('/api/auth/signin');
        }
    }, [isLoading, isAuthenticated, pathname, isAuthorized, getVisibleMenuItems, router]);

    // Still loading session
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    // Path check
    const authorized = isAuthorized(pathname || '');
    if (!isAuthenticated || !authorized) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    return <>{children}</>;
};
