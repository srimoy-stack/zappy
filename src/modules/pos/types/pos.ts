export type POSType = 'STORE' | 'CALL_CENTER';

export type OrderChannel = 'Dine-In' | 'Pickup' | 'Delivery' | 'Phone Order';

export interface POSUser {
    id: string;
    name: string;
    role: string;
    accessibleStores: string[]; // Store IDs
}

export interface POSStore {
    id: string;
    name: string;
    address: string;
}

export interface POSSession {
    user: POSUser;
    posType: POSType;
    store: POSStore;
    channel?: OrderChannel;
}

export interface POSContextType {
    session: POSSession | null;
    login: (type: POSType, credentials: { pin?: string; email?: string; password?: string }) => Promise<void>;
    setStore: (store: POSStore) => void;
    setChannel: (channel: OrderChannel) => void;
    logout: () => void;
}
