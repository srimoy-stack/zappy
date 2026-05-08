'use client';

/**
 * ApiContextBridge — Syncs TenantContext/StoreContext → apiClient headers.
 *
 * Renders nothing. Place inside the provider tree after Tenant+Store providers.
 * NOTE: Module seeding is handled by AuthContext from /me response.
 *       This bridge ONLY syncs tenant/store IDs to API request headers.
 */

import { useEffect } from 'react';
import { useTenant } from './TenantContext';
import { useStore } from './StoreContext';
import { setApiTenantId, setApiStoreId } from '@/shared/api/apiClient';

export function ApiContextBridge() {
    const { tenantId } = useTenant();
    const { activeStore } = useStore();

    useEffect(() => {
        setApiTenantId(tenantId);
    }, [tenantId]);

    useEffect(() => {
        setApiStoreId(activeStore?.id ?? null);
    }, [activeStore]);

    return null;
}
