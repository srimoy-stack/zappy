export type UserRole = 'ADMIN' | 'STORE_MANAGER' | 'EMPLOYEE' | 'POS_USER' | 'KDS_USER';
export type UserType = 'BACKEND_USER' | 'POS_USER' | 'KDS_USER';

export interface User {
    id: string;
    name: string;
    role: UserRole;
    storeIds: string[];
    tenantId: string;
    avatarUrl?: string;
}

export interface Session {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export interface Tenant {
    id: string;
    name: string;
    slug: string;
    logoUrl?: string;
}

export interface Store {
    id: string;
    name: string;
    code: string;
    tenantId: string;
    timezone: string;
}

export interface TenantStoreContextType {
    tenant: Tenant | null;
    store: Store | null;
    allStores: Store[];
    setTenant: (tenant: Tenant) => void;
    setStore: (store: Store) => void;
    isLoading: boolean;
}
