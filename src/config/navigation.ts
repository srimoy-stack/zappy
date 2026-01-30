import {
    Home,
    TrendingUp,
    FileText,
    DollarSign,
    Package,
    Users,
    UserCircle,
    MoreHorizontal,
    Warehouse,
    Settings,
    LayoutGrid
} from 'lucide-react';
import { UserRole } from '@/types';

export type AccessMode = 'full' | 'read-only' | 'hidden';

export interface MenuConfig {
    id: string;
    label: string;
    route: string;
    icon: string;
    allowedRoles: UserRole[];
    // Map role to its specific access mode on this page
    accessMode: Partial<Record<UserRole, AccessMode>>;
    requiresStoreScope: boolean;
}

/**
 * Production-grade Navigation Configuration
 */
export const navigationConfig: MenuConfig[] = [
    {
        id: 'home',
        label: 'Home',
        route: '/backoffice/home',
        icon: 'Home',
        allowedRoles: ['ADMIN', 'STORE_MANAGER'],
        accessMode: {
            ADMIN: 'full',
            STORE_MANAGER: 'full'
        },
        requiresStoreScope: false
    },
    {
        id: 'sales-activity',
        label: 'Sales Activity',
        route: '/backoffice/sales-activity',
        icon: 'TrendingUp',
        allowedRoles: ['ADMIN', 'STORE_MANAGER', 'EMPLOYEE'],
        accessMode: {
            ADMIN: 'full',
            STORE_MANAGER: 'full',
            EMPLOYEE: 'read-only'
        },
        requiresStoreScope: true
    },
    {
        id: 'reports',
        label: 'Reports',
        route: '/backoffice/reports',
        icon: 'FileText',
        allowedRoles: ['ADMIN', 'STORE_MANAGER'],
        accessMode: {
            ADMIN: 'full',
            STORE_MANAGER: 'read-only'
        },
        requiresStoreScope: true
    },
    {
        id: 'finances',
        label: 'Finances',
        route: '/backoffice/finances',
        icon: 'DollarSign',
        allowedRoles: ['ADMIN', 'STORE_MANAGER'],
        accessMode: {
            ADMIN: 'full',
            STORE_MANAGER: 'full'
        },
        requiresStoreScope: true
    },
    {
        id: 'items',
        label: 'Items',
        route: '/backoffice/items',
        icon: 'Package',
        allowedRoles: ['ADMIN', 'STORE_MANAGER', 'EMPLOYEE'],
        accessMode: {
            ADMIN: 'full',
            STORE_MANAGER: 'full',
            EMPLOYEE: 'read-only'
        },
        requiresStoreScope: true
    },
    {
        id: 'employees',
        label: 'Users',
        route: '/backoffice/users',
        icon: 'Users',
        allowedRoles: ['ADMIN', 'STORE_MANAGER', 'EMPLOYEE'],
        accessMode: {
            ADMIN: 'full',
            STORE_MANAGER: 'full',
            EMPLOYEE: 'read-only'
        },
        requiresStoreScope: true
    },
    {
        id: 'customers',
        label: 'Customers',
        route: '/backoffice/customers',
        icon: 'UserCircle',
        allowedRoles: ['ADMIN', 'STORE_MANAGER', 'EMPLOYEE'],
        accessMode: {
            ADMIN: 'full',
            STORE_MANAGER: 'full',
            EMPLOYEE: 'read-only'
        },
        requiresStoreScope: true
    },
    {
        id: 'inventory',
        label: 'Inventory',
        route: '/backoffice/inventory',
        icon: 'Warehouse',
        allowedRoles: ['ADMIN', 'STORE_MANAGER'],
        accessMode: {
            ADMIN: 'full',
            STORE_MANAGER: 'full'
        },
        requiresStoreScope: true
    },
    {
        id: 'business-operations',
        label: 'Settings',
        route: '/backoffice/settings/business-operations',
        icon: 'Settings',
        allowedRoles: ['ADMIN', 'STORE_MANAGER'],
        accessMode: {
            ADMIN: 'full',
            STORE_MANAGER: 'full'
        },
        requiresStoreScope: false
    },
    {
        id: 'more',
        label: 'More',
        route: '/backoffice/more',
        icon: 'MoreHorizontal',
        allowedRoles: ['ADMIN', 'STORE_MANAGER'],
        accessMode: {
            ADMIN: 'full',
            STORE_MANAGER: 'full'
        },
        requiresStoreScope: false
    }
];

// Icon mapping for dynamic rendering
export const iconMap = {
    Home,
    TrendingUp,
    FileText,
    DollarSign,
    Package,
    Users,
    UserCircle,
    MoreHorizontal,
    Warehouse,
    Settings,
    LayoutGrid,
};
