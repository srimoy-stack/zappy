import { POSCustomer } from '../mock/posData';
export type { POSCustomer };

export type POSType = 'STORE' | 'CALL_CENTER';

export type OrderChannel = 'Dine-In' | 'Pickup' | 'Delivery' | 'Phone Order';

export type TableStatus = 'FREE' | 'OCCUPIED' | 'RESERVED';

export interface POSTable {
    id: string;
    name: string;
    seats: number;
    status: TableStatus;
    orderId?: string; // ID of the active order on this table
    areaId: string;
}

export interface POSArea {
    id: string;
    name: string;
}

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
    activeTable?: POSTable;
    activeCustomer?: POSCustomer;
    deviceId: string;
    isOffline?: boolean;
}

export interface POSContextType {
    session: POSSession | null;
    isOffline: boolean;
    deviceId: string;
    login: (type: POSType, credentials: { pin?: string; email?: string; password?: string; deviceId: string }) => Promise<void>;
    setStore: (store: POSStore) => void;
    setChannel: (channel: OrderChannel) => void;
    setTable: (table: POSTable | null) => void;
    moveTable: (sourceTableId: string, targetTableId: string) => void;
    setCustomer: (customer: POSCustomer | null) => void;
    logout: () => void;
    cart: POSCartItem[];
    setCart: React.Dispatch<React.SetStateAction<POSCartItem[]>>;
}

export interface POSVariantGroup {
    id: string;
    name: string;
    options: {
        id: string;
        name: string;
        additionalPrice: number;
    }[];
}

export interface POSModifierGroup {
    id: string;
    name: string;
    minSelection?: number;
    maxSelection?: number;
    options: {
        id: string;
        name: string;
        price: number;
        isDefault?: boolean;
    }[];
}

export interface POSComboSlot {
    id: string;
    name: string;
    allowedCategoryIds: string[];
}

export interface POSProduct {
    id: string;
    categoryId: string;
    name: string;
    sku: string;
    price: number;
    image: string;
    hasVariants: boolean;
    isVeg: boolean;
    isAvailable: boolean;
    isCombo?: boolean;
    variantGroups?: POSVariantGroup[];
    modifierGroups?: POSModifierGroup[];
    comboSlots?: POSComboSlot[];
}

export interface POSCartItem {
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    variants: { groupId: string; optionId: string; name: string }[];
    modifiers: { optionId: string; name: string; price: number; quantity: number }[];
    comboSelections?: { [slotId: string]: POSCartItem };
}
