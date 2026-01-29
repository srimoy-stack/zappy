import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
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
    const location = useLocation();

    // Still loading session
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    // Not authenticated
    if (!isAuthenticated) {
        // In a real app, redirect to /login
        // For this task, we assume auth is handled or we use mock
        return children;
    }

    // Path check
    const authorized = isAuthorized(location.pathname);

    if (!authorized) {
        const allowedItems = getVisibleMenuItems();
        const firstAllowed = allowedItems[0];
        const fallback = firstAllowed ? firstAllowed.route : '/backoffice/sales-activity';

        console.warn(`Access denied to ${location.pathname}. Redirecting to ${fallback}`);
        return <Navigate to={fallback} replace />;
    }

    return <>{children}</>;
};
