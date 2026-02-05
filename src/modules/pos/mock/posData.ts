import { POSUser, POSStore } from '../types/pos';

export const mockPOSUsers: POSUser[] = [
    {
        id: 'U001',
        name: 'John Store Manager',
        role: 'STORE_MANAGER',
        accessibleStores: ['S001', 'S002']
    },
    {
        id: 'U002',
        name: 'Sarah Store Staff',
        role: 'STAFF',
        accessibleStores: ['S001']
    },
    {
        id: 'U003',
        name: 'Alex Call center',
        role: 'CALL_CENTER_AGENT',
        accessibleStores: ['S001', 'S002', 'S003']
    }
];

export const mockStores: POSStore[] = [
    {
        id: 'S001',
        name: 'Downtown Main Store',
        address: '123 Main St, Central City'
    },
    {
        id: 'S002',
        name: 'Westside Branch',
        address: '456 West Ave, Central City'
    },
    {
        id: 'S003',
        name: 'Eastside Express',
        address: '789 East Blvd, Central City'
    }
];

export const VALID_STORE_PINS: Record<string, string> = {
    '1234': 'U001',
    '5678': 'U002'
};

export const VALID_CALL_CENTER_USERS: Record<string, { userId: string; password: string }> = {
    'alex@zyappy.com': { userId: 'U003', password: 'password123' }
};
