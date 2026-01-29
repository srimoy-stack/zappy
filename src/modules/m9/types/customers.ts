export type OrderChannel = 'POS' | 'ONLINE' | 'UBER';
export type OrderStatus = 'COMPLETED' | 'CANCELLED' | 'REFUNDED';

export interface Customer {
    id: string;
    name: string;
    phone: string;
    email?: string;
    totalOrders: number;
    lastOrderDate: string;
    totalSpend: number;
    loyaltyTier: 'BRONZE' | 'SILVER' | 'GOLD';
    loyaltyPoints: number;
}

export interface CustomerOrder {
    id: string;
    date: string;
    storeName: string;
    storeId: string;
    channel: OrderChannel;
    itemsSummary: string; // e.g., "1 Medium Pizza, 1 Coke"
    totalAmount: number;
    status: OrderStatus;
    canReorder: boolean; // Only true for most recent completed order
}

export interface CustomerDetails extends Customer {
    orderHistory: CustomerOrder[];
}

export interface CustomerFilters {
    searchQuery: string;
    channel?: OrderChannel;
    startDate?: string;
    endDate?: string;
}
