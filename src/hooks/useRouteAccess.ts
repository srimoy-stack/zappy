import { useAuth } from '@/app/providers/AuthProvider';
import { navigationConfig, MenuConfig, AccessMode } from '@/config/navigation';


/**
 * useRouteAccess Hook
 * Centralized, declarative role-based UI protection.
 * Drives visibility and behavior based on the production-grade session.
 */
export const useRouteAccess = () => {
    const { role, storeIds, user } = useAuth();

    /**
     * Gets visible menu items for the current role
     */
    const getVisibleMenuItems = (): MenuConfig[] => {
        if (!role) return [];
        return navigationConfig.filter(item =>
            item.allowedRoles.includes(role) &&
            item.accessMode[role] !== 'hidden'
        );
    };

    /**
     * Checks if a path is authorized
     */
    const isAuthorized = (path: string): boolean => {
        if (!role) return false;

        // If it's a direct backoffice subpath, check config
        const item = navigationConfig.find(m => m.route === path);
        if (!item) {
            // Check for index or parent paths
            if (path === '/backoffice' || path === '/backoffice/') return true;
            return true;
        }

        return item.allowedRoles.includes(role);
    };

    /**
     * Gets access mode for a specific page
     */
    const getAccessMode = (path: string): AccessMode => {
        if (!role) return 'hidden';
        const item = navigationConfig.find(m => m.route === path);
        if (!item) return 'full';
        return item.accessMode[role] || 'hidden';
    };

    /**
     * Checks if current user can switch stores
     */
    const canManageStores = (): boolean => {
        if (role === 'ADMIN') return true;
        if (role === 'STORE_MANAGER' && storeIds.length > 1) return true;
        return false;
    };

    /**
     * Checks if user is restricted to specific stores
     */
    const getManagedStoreIds = (): string[] | 'all' => {
        if (role === 'ADMIN') return 'all';
        return storeIds;
    };

    return {
        user,
        role,
        getVisibleMenuItems,
        isAuthorized,
        getAccessMode,
        canManageStores,
        getManagedStoreIds,
    };
};
