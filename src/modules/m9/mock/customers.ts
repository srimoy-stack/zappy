import { Customer, CustomerDetails } from '../types/customers';

export const mockCustomers: Customer[] = [
    {
        id: 'cust-1',
        name: 'Parveen Singh',
        phone: '1122334455',
        email: 'parveen@example.com',
        totalOrders: 14,
        lastOrderDate: '2023-11-20',
        totalSpend: 450.50,
        loyaltyTier: 'GOLD',
        loyaltyPoints: 1250
    },
    {
        id: 'cust-2',
        name: 'Jasbir Kaur',
        phone: '9988776655',
        totalOrders: 8,
        lastOrderDate: '2023-11-18',
        totalSpend: 235.20,
        loyaltyTier: 'SILVER',
        loyaltyPoints: 540
    },
    {
        id: 'cust-3',
        name: 'John Doe',
        phone: '5544332211',
        totalOrders: 3,
        lastOrderDate: '2023-11-10',
        totalSpend: 85.00,
        loyaltyTier: 'BRONZE',
        loyaltyPoints: 120
    }
];

export const mockCustomerDetails: Record<string, CustomerDetails> = {
    'cust-1': {
        ...mockCustomers[0]!,
        orderHistory: [
            {
                id: 'ord-101',
                date: '2023-11-20T14:30:00Z',
                storeName: 'Downtown Store',
                storeId: 'store-01',
                channel: 'POS',
                itemsSummary: '1 Large Veggie Supreme, 2 Garlic Dips',
                totalAmount: 32.50,
                status: 'COMPLETED',
                canReorder: true
            },
            {
                id: 'ord-100',
                date: '2023-11-12T19:15:00Z',
                storeName: 'Online',
                storeId: 'online',
                channel: 'ONLINE',
                itemsSummary: '2 Medium Pepperoni, 1 Coke (1.5L)',
                totalAmount: 45.00,
                status: 'COMPLETED',
                canReorder: false
            },
            {
                id: 'ord-95',
                date: '2023-10-25T13:00:00Z',
                storeName: 'Uber Eats',
                storeId: 'uber',
                channel: 'UBER',
                itemsSummary: '1 Family Meal, 4 Dips',
                totalAmount: 65.20,
                status: 'COMPLETED',
                canReorder: false
            }
        ]
    }
};
