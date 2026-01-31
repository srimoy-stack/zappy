(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/m9/mock/items.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockCategories",
    ()=>mockCategories,
    "mockItems",
    ()=>mockItems
]);
const mockCategories = [
    {
        id: 'cat-1',
        name: 'Signature Pizza',
        description: 'Our chef special pizzas'
    },
    {
        id: 'cat-2',
        name: 'Traditional Pizza',
        description: 'Classic favorites'
    },
    {
        id: 'cat-3',
        name: 'Combos',
        description: 'Meal deals and family packs'
    },
    {
        id: 'cat-4',
        name: 'Drinks',
        description: 'Soft drinks and water'
    }
];
const mockItems = [
    {
        id: 'item-1',
        productType: 'SINGLE',
        name: 'Veggie Supreme',
        description: 'Loaded with fresh vegetables and mozzarella cheese.',
        imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
        categoryId: 'cat-1',
        isAvailable: true,
        variantGroups: [
            {
                id: 'vg-1',
                name: 'Size',
                isRequired: true,
                defaultVariantId: 'v-2',
                sortOrder: 1,
                variants: [
                    {
                        id: 'v-1',
                        name: 'Small (10")',
                        basePrice: 9.99,
                        isAvailable: true
                    },
                    {
                        id: 'v-2',
                        name: 'Medium (12")',
                        basePrice: 12.99,
                        isAvailable: true
                    },
                    {
                        id: 'v-3',
                        name: 'Large (14")',
                        basePrice: 15.99,
                        isAvailable: true
                    }
                ]
            },
            {
                id: 'vg-2',
                name: 'Dough',
                isRequired: true,
                defaultVariantId: 'v-4',
                sortOrder: 2,
                variants: [
                    {
                        id: 'v-4',
                        name: 'Regular Dough',
                        basePrice: 0,
                        isAvailable: true
                    },
                    {
                        id: 'v-5',
                        name: 'Thin Crust',
                        basePrice: 0,
                        isAvailable: true
                    },
                    {
                        id: 'v-6',
                        name: 'Whole Wheat',
                        basePrice: 1.50,
                        isAvailable: true
                    }
                ]
            }
        ],
        modifierGroups: [
            {
                id: 'mg-1',
                name: 'Sauce Options',
                isRequired: true,
                minSelection: 1,
                maxSelection: 1,
                isToppingGroup: false,
                isHalfAndHalfEnabled: false,
                isPremiumRuleEnabled: false,
                options: [
                    {
                        id: 'opt-1',
                        name: 'Tomato Sauce',
                        price: 0,
                        subOptions: [
                            {
                                id: 'sub-1',
                                name: 'Regular',
                                price: 0
                            },
                            {
                                id: 'sub-2',
                                name: 'Easy on Sauce',
                                price: 0
                            },
                            {
                                id: 'sub-3',
                                name: 'Extra Sauce',
                                price: 0.50
                            }
                        ]
                    },
                    {
                        id: 'opt-2',
                        name: 'BBQ Sauce',
                        price: 1.00
                    },
                    {
                        id: 'opt-3',
                        name: 'White Garlic',
                        price: 1.00
                    }
                ]
            },
            {
                id: 'mg-2',
                name: 'Toppings',
                isRequired: false,
                minSelection: 0,
                maxSelection: 15,
                isToppingGroup: true,
                isHalfAndHalfEnabled: true,
                isPremiumRuleEnabled: true,
                options: [
                    {
                        id: 'opt-4',
                        name: 'Onions',
                        price: 0.99,
                        isTopping: true
                    },
                    {
                        id: 'opt-5',
                        name: 'Pepperoni',
                        price: 1.50,
                        isTopping: true,
                        isPremium: true
                    },
                    {
                        id: 'opt-6',
                        name: 'Mushrooms',
                        price: 1.25,
                        isTopping: true
                    }
                ]
            }
        ],
        storeOverrides: [],
        auditLog: [
            {
                timestamp: '2024-01-20T10:00:00Z',
                user: 'Admin',
                action: 'Created Item'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/mock/employeesData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_EMPLOYEES",
    ()=>MOCK_EMPLOYEES,
    "MOCK_SHIFTS",
    ()=>MOCK_SHIFTS
]);
const MOCK_EMPLOYEES = [
    {
        id: '1',
        name: 'John Admin',
        email: 'john.admin@zyappy.com',
        role: 'ADMIN',
        stores: [
            'All Stores'
        ],
        status: 'ACTIVE',
        lastLogin: '2024-03-20T10:00:00Z',
        type: 'BACKEND_USER'
    },
    {
        id: '2',
        name: 'Jane Manager',
        email: 'jane.manager@zyappy.com',
        role: 'STORE_MANAGER',
        stores: [
            'Main Street Store',
            'Downtown Store'
        ],
        status: 'ACTIVE',
        lastLogin: '2024-03-20T09:30:00Z',
        type: 'BACKEND_USER'
    },
    {
        id: '3',
        name: 'Alice Cashier',
        email: 'alice.cashier@zyappy.com',
        role: 'EMPLOYEE',
        stores: [
            'Main Street Store'
        ],
        status: 'ACTIVE',
        lastLogin: '2024-03-20T08:00:00Z',
        type: 'POS_USER'
    },
    {
        id: '6',
        name: 'Diana Host',
        email: 'diana.host@zyappy.com',
        role: 'EMPLOYEE',
        stores: [
            'Main Street Store'
        ],
        status: 'ACTIVE',
        lastLogin: '2024-03-20T14:00:00Z',
        type: 'POS_USER'
    },
    {
        id: '7',
        name: 'Edward Manager',
        email: 'edward@zyappy.com',
        role: 'STORE_MANAGER',
        stores: [
            'Downtown Store'
        ],
        status: 'INACTIVE',
        lastLogin: '2024-03-19T11:00:00Z',
        type: 'BACKEND_USER'
    }
];
const MOCK_SHIFTS = [
    {
        id: 's1',
        date: '2024-03-20T08:00:00Z',
        userId: '3',
        userName: 'Alice Cashier',
        storeId: 'store-1',
        storeName: 'Main Street Store',
        openingCash: 500.00,
        closingCash: 1250.50,
        cashVariance: 0.50,
        notes: 'Busy morning session but balanced well.'
    },
    {
        id: 's2',
        date: '2024-03-19T08:00:00Z',
        userId: '3',
        userName: 'Alice Cashier',
        storeId: 'store-1',
        storeName: 'Main Street Store',
        openingCash: 500.00,
        closingCash: 1100.00,
        cashVariance: -2.00,
        notes: 'Minor variance due to coin shortage.'
    },
    {
        id: 's3',
        date: '2024-03-20T09:00:00Z',
        userId: '5',
        userName: 'Charlie Driver',
        storeId: 'store-2',
        storeName: 'Downtown Store',
        openingCash: 300.00,
        closingCash: 850.00,
        cashVariance: 0.00
    },
    {
        id: 's4',
        date: '2024-03-21T08:30:00Z',
        userId: '2',
        userName: 'Jane Manager',
        storeId: 'store-1',
        storeName: 'Main Street Store',
        openingCash: 500.00,
        closingCash: 1500.00,
        cashVariance: 0.00
    },
    {
        id: 's5',
        date: '2024-03-18T07:00:00Z',
        userId: '3',
        userName: 'Alice Cashier',
        storeId: 'store-1',
        storeName: 'Main Street Store',
        openingCash: 500.00,
        closingCash: 1195.00,
        cashVariance: -5.00,
        notes: 'Customer dispute over change.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/mock/customers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockCustomerDetails",
    ()=>mockCustomerDetails,
    "mockCustomers",
    ()=>mockCustomers
]);
const mockCustomers = [
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
const mockCustomerDetails = {
    'cust-1': {
        ...mockCustomers[0],
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/mock/cash-variance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockCashVarianceData",
    ()=>mockCashVarianceData
]);
const mockCashVarianceData = [
    {
        id: 'VAR-001',
        date: new Date().toISOString().split('T')[0],
        userName: 'John Doe',
        userId: 'user-001',
        storeName: 'Downtown Store',
        storeId: 'store-01',
        openingCash: 500.00,
        closingCash: 1250.00,
        expectedCash: 1250.00,
        variance: 0.00,
        status: 'Balanced',
        currency: 'USD',
        shiftId: 'SHIFT-101',
        timestamp: new Date().toISOString(),
        paymentBreakdown: {
            cash: 750.00,
            card: 500.00,
            other: 0.00
        }
    },
    {
        id: 'VAR-002',
        date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0],
        userName: 'Jane Smith',
        userId: 'user-002',
        storeName: 'Downtown Store',
        storeId: 'store-01',
        openingCash: 500.00,
        closingCash: 1100.00,
        expectedCash: 1120.00,
        variance: -20.00,
        status: 'Short',
        currency: 'USD',
        shiftId: 'SHIFT-102',
        timestamp: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
        paymentBreakdown: {
            cash: 600.00,
            card: 450.00,
            other: 70.00
        }
    },
    {
        id: 'VAR-003',
        date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString().split('T')[0],
        userName: 'Mike Wilson',
        userId: 'user-003',
        storeName: 'Westside Mall',
        storeId: 'store-02',
        openingCash: 300.00,
        closingCash: 955.50,
        expectedCash: 940.00,
        variance: 15.50,
        status: 'Over',
        currency: 'USD',
        shiftId: 'SHIFT-103',
        timestamp: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
        paymentBreakdown: {
            cash: 640.00,
            card: 300.00,
            other: 15.50
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/mock/inventory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mock Data for Inventory Module
 * Development-only data following strict schema
 */ __turbopack_context__.s([
    "mockInventoryEntries",
    ()=>mockInventoryEntries,
    "mockInventoryItems",
    ()=>mockInventoryItems,
    "mockInventoryLedger",
    ()=>mockInventoryLedger,
    "mockInventoryReturns",
    ()=>mockInventoryReturns,
    "mockRecipes",
    ()=>mockRecipes,
    "mockVendors",
    ()=>mockVendors
]);
const mockVendors = [
    {
        id: 'VEN001',
        name: 'Fresh Produce Co.',
        contactPerson: 'John Smith',
        phone: '+1-555-0101',
        email: 'john@freshproduce.com',
        address: '123 Market Street, City, State 12345',
        totalPurchases: 45000,
        totalPaid: 40000,
        totalDue: 5000,
        lastInventoryDate: '2026-01-28T10:30:00Z',
        status: 'Active',
        createdAt: '2025-06-01T00:00:00Z',
        updatedAt: '2026-01-28T10:30:00Z'
    },
    {
        id: 'VEN002',
        name: 'Dairy Delights Ltd.',
        contactPerson: 'Sarah Johnson',
        phone: '+1-555-0202',
        email: 'sarah@dairydelights.com',
        address: '456 Dairy Lane, City, State 12345',
        totalPurchases: 32000,
        totalPaid: 32000,
        totalDue: 0,
        lastInventoryDate: '2026-01-27T14:00:00Z',
        status: 'Active',
        createdAt: '2025-07-15T00:00:00Z',
        updatedAt: '2026-01-27T14:00:00Z'
    },
    {
        id: 'VEN003',
        name: 'Spice World Suppliers',
        contactPerson: 'Mike Chen',
        phone: '+1-555-0303',
        email: 'mike@spiceworld.com',
        address: '789 Spice Road, City, State 12345',
        totalPurchases: 18500,
        totalPaid: 15000,
        totalDue: 3500,
        lastInventoryDate: '2026-01-25T09:00:00Z',
        status: 'Active',
        createdAt: '2025-08-20T00:00:00Z',
        updatedAt: '2026-01-25T09:00:00Z'
    }
];
const mockInventoryItems = [
    {
        id: 'INV001',
        name: 'Tomatoes',
        sku: 'VEG-TOM-001',
        baseUnit: 'Kilogram',
        currentStock: 45.5,
        averageCost: 3.50,
        lowStockThreshold: 20,
        status: 'Active',
        description: 'Fresh red tomatoes',
        tenantId: 'TENANT001',
        createdAt: '2025-06-01T00:00:00Z',
        updatedAt: '2026-01-28T10:30:00Z'
    },
    {
        id: 'INV002',
        name: 'Mozzarella Cheese',
        sku: 'DAI-MOZ-001',
        baseUnit: 'Kilogram',
        currentStock: 12.0,
        averageCost: 8.75,
        lowStockThreshold: 10,
        status: 'Active',
        description: 'Premium mozzarella cheese',
        tenantId: 'TENANT001',
        createdAt: '2025-06-01T00:00:00Z',
        updatedAt: '2026-01-27T14:00:00Z'
    },
    {
        id: 'INV003',
        name: 'Pizza Dough',
        sku: 'BAK-DOU-001',
        baseUnit: 'Kilogram',
        currentStock: 8.5,
        averageCost: 2.25,
        lowStockThreshold: 15,
        status: 'Active',
        description: 'Fresh pizza dough',
        tenantId: 'TENANT001',
        createdAt: '2025-06-01T00:00:00Z',
        updatedAt: '2026-01-26T11:00:00Z'
    },
    {
        id: 'INV004',
        name: 'Olive Oil',
        sku: 'OIL-OLI-001',
        baseUnit: 'Liter',
        currentStock: 5.2,
        averageCost: 12.50,
        lowStockThreshold: 3,
        status: 'Active',
        description: 'Extra virgin olive oil',
        tenantId: 'TENANT001',
        createdAt: '2025-06-01T00:00:00Z',
        updatedAt: '2026-01-25T09:00:00Z'
    },
    {
        id: 'INV005',
        name: 'Basil Leaves',
        sku: 'HRB-BAS-001',
        baseUnit: 'Gram',
        currentStock: 250,
        averageCost: 0.15,
        lowStockThreshold: 100,
        status: 'Active',
        description: 'Fresh basil leaves',
        tenantId: 'TENANT001',
        createdAt: '2025-06-01T00:00:00Z',
        updatedAt: '2026-01-24T16:00:00Z'
    }
];
const mockInventoryEntries = [
    {
        id: 'IE001',
        referenceNo: 'PO-2026-001',
        supplierId: 'VEN001',
        supplierName: 'Fresh Produce Co.',
        storeId: 'STORE001',
        storeName: 'Main Store',
        inventoryDate: '2026-01-28T10:30:00Z',
        inventoryStatus: 'Received',
        paymentStatus: 'Partial',
        payTerm: 'Net 30',
        products: [
            {
                id: 'IEP001',
                inventoryItemId: 'INV001',
                inventoryItemName: 'Tomatoes',
                sku: 'VEG-TOM-001',
                purchaseQuantity: 50,
                unitCostBeforeTax: 3.00,
                subtotal: 150.00,
                taxPercentage: 10,
                taxAmount: 15.00,
                unitCostAfterTax: 3.30,
                lineTotal: 165.00
            }
        ],
        purchaseTax: 15.00,
        shippingCharges: 10.00,
        additionalNotes: 'Delivery received in good condition',
        subtotal: 150.00,
        totalTax: 15.00,
        grandTotal: 175.00,
        paymentDue: 75.00,
        createdBy: 'USER001',
        createdByName: 'Admin User',
        createdAt: '2026-01-28T10:30:00Z',
        updatedAt: '2026-01-28T10:30:00Z'
    },
    {
        id: 'IE002',
        referenceNo: 'PO-2026-002',
        supplierId: 'VEN002',
        supplierName: 'Dairy Delights Ltd.',
        storeId: 'STORE001',
        storeName: 'Main Store',
        inventoryDate: '2026-01-27T14:00:00Z',
        inventoryStatus: 'Received',
        paymentStatus: 'Paid',
        payTerm: 'Cash on Delivery',
        products: [
            {
                id: 'IEP002',
                inventoryItemId: 'INV002',
                inventoryItemName: 'Mozzarella Cheese',
                sku: 'DAI-MOZ-001',
                purchaseQuantity: 15,
                unitCostBeforeTax: 8.00,
                subtotal: 120.00,
                taxPercentage: 5,
                taxAmount: 6.00,
                unitCostAfterTax: 8.40,
                lineTotal: 126.00
            }
        ],
        purchaseTax: 6.00,
        shippingCharges: 5.00,
        subtotal: 120.00,
        totalTax: 6.00,
        grandTotal: 131.00,
        paymentDue: 0,
        createdBy: 'USER001',
        createdByName: 'Admin User',
        createdAt: '2026-01-27T14:00:00Z',
        updatedAt: '2026-01-27T14:00:00Z'
    },
    {
        id: 'IE003',
        referenceNo: 'PO-2026-003',
        supplierId: 'VEN001',
        supplierName: 'Fresh Produce Co.',
        storeId: 'STORE001',
        storeName: 'Main Store',
        inventoryDate: '2026-01-26T09:00:00Z',
        inventoryStatus: 'Draft',
        paymentStatus: 'Unpaid',
        products: [
            {
                id: 'IEP003',
                inventoryItemId: 'INV003',
                inventoryItemName: 'Pizza Dough',
                sku: 'BAK-DOU-001',
                purchaseQuantity: 20,
                unitCostBeforeTax: 2.00,
                subtotal: 40.00,
                taxPercentage: 8,
                taxAmount: 3.20,
                unitCostAfterTax: 2.16,
                lineTotal: 43.20
            }
        ],
        purchaseTax: 3.20,
        shippingCharges: 0,
        subtotal: 40.00,
        totalTax: 3.20,
        grandTotal: 43.20,
        paymentDue: 43.20,
        createdBy: 'USER002',
        createdByName: 'Store Manager',
        createdAt: '2026-01-26T09:00:00Z',
        updatedAt: '2026-01-26T09:00:00Z'
    }
];
const mockRecipes = [
    {
        id: 'REC001',
        name: 'Margherita Pizza Base',
        description: 'Classic margherita pizza recipe',
        status: 'Active',
        ingredients: [
            {
                id: 'RI001',
                inventoryItemId: 'INV003',
                inventoryItemName: 'Pizza Dough',
                baseUnit: 'Gram',
                quantityUsed: 250,
                unitCost: 2.25,
                wastagePercentage: 5,
                effectiveQuantity: 262.5,
                lineCost: 0.59
            },
            {
                id: 'RI002',
                inventoryItemId: 'INV001',
                inventoryItemName: 'Tomatoes',
                baseUnit: 'Gram',
                quantityUsed: 100,
                unitCost: 3.50,
                wastagePercentage: 10,
                effectiveQuantity: 110,
                lineCost: 0.39
            },
            {
                id: 'RI003',
                inventoryItemId: 'INV002',
                inventoryItemName: 'Mozzarella Cheese',
                baseUnit: 'Gram',
                quantityUsed: 150,
                unitCost: 8.75,
                wastagePercentage: 2,
                effectiveQuantity: 153,
                lineCost: 1.34
            },
            {
                id: 'RI004',
                inventoryItemId: 'INV005',
                inventoryItemName: 'Basil Leaves',
                baseUnit: 'Gram',
                quantityUsed: 10,
                unitCost: 0.15,
                wastagePercentage: 15,
                effectiveQuantity: 11.5,
                lineCost: 0.02
            }
        ],
        totalRecipeCost: 2.34,
        usedByProductCount: 3,
        tenantId: 'TENANT001',
        createdAt: '2025-06-15T00:00:00Z',
        updatedAt: '2026-01-20T10:00:00Z'
    },
    {
        id: 'REC002',
        name: 'Garlic Bread',
        description: 'Simple garlic bread recipe',
        status: 'Active',
        ingredients: [
            {
                id: 'RI005',
                inventoryItemId: 'INV003',
                inventoryItemName: 'Pizza Dough',
                baseUnit: 'Gram',
                quantityUsed: 150,
                unitCost: 2.25,
                wastagePercentage: 3,
                effectiveQuantity: 154.5,
                lineCost: 0.35
            },
            {
                id: 'RI006',
                inventoryItemId: 'INV004',
                inventoryItemName: 'Olive Oil',
                baseUnit: 'Milliliter',
                quantityUsed: 20,
                unitCost: 12.50,
                wastagePercentage: 0,
                effectiveQuantity: 20,
                lineCost: 0.25
            }
        ],
        totalRecipeCost: 0.60,
        usedByProductCount: 1,
        tenantId: 'TENANT001',
        createdAt: '2025-07-01T00:00:00Z',
        updatedAt: '2026-01-15T14:00:00Z'
    }
];
const mockInventoryReturns = [
    {
        id: 'IR001',
        referenceNo: 'RET-2026-001',
        returnType: 'Damaged',
        supplierId: 'VEN001',
        supplierName: 'Fresh Produce Co.',
        storeId: 'STORE001',
        storeName: 'Main Store',
        returnDate: '2026-01-29T11:00:00Z',
        products: [
            {
                id: 'IRP001',
                inventoryItemId: 'INV001',
                inventoryItemName: 'Tomatoes',
                sku: 'VEG-TOM-001',
                returnQuantity: 5,
                unitCost: 3.30,
                lineTotal: 16.50
            }
        ],
        totalAmount: 16.50,
        reason: 'Received damaged goods',
        createdBy: 'USER001',
        createdByName: 'Admin User',
        createdAt: '2026-01-29T11:00:00Z'
    },
    {
        id: 'IR002',
        referenceNo: 'RET-2026-002',
        returnType: 'Expired',
        storeId: 'STORE001',
        storeName: 'Main Store',
        returnDate: '2026-01-28T16:00:00Z',
        products: [
            {
                id: 'IRP002',
                inventoryItemId: 'INV002',
                inventoryItemName: 'Mozzarella Cheese',
                sku: 'DAI-MOZ-001',
                returnQuantity: 2,
                unitCost: 8.40,
                lineTotal: 16.80
            }
        ],
        totalAmount: 16.80,
        reason: 'Expired product',
        createdBy: 'USER002',
        createdByName: 'Store Manager',
        createdAt: '2026-01-28T16:00:00Z'
    }
];
const mockInventoryLedger = [
    {
        id: 'LED001',
        inventoryItemId: 'INV001',
        inventoryItemName: 'Tomatoes',
        changeQuantity: 50,
        sourceType: 'inventory',
        sourceId: 'IE001',
        sourceReference: 'PO-2026-001',
        storeId: 'STORE001',
        storeName: 'Main Store',
        balanceAfter: 50,
        createdAt: '2026-01-28T10:30:00Z'
    },
    {
        id: 'LED002',
        inventoryItemId: 'INV001',
        inventoryItemName: 'Tomatoes',
        changeQuantity: -5,
        sourceType: 'return',
        sourceId: 'IR001',
        sourceReference: 'RET-2026-001',
        storeId: 'STORE001',
        storeName: 'Main Store',
        balanceAfter: 45,
        createdAt: '2026-01-29T11:00:00Z'
    },
    {
        id: 'LED003',
        inventoryItemId: 'INV002',
        inventoryItemName: 'Mozzarella Cheese',
        changeQuantity: 15,
        sourceType: 'inventory',
        sourceId: 'IE002',
        sourceReference: 'PO-2026-002',
        storeId: 'STORE001',
        storeName: 'Main Store',
        balanceAfter: 15,
        createdAt: '2026-01-27T14:00:00Z'
    },
    {
        id: 'LED004',
        inventoryItemId: 'INV002',
        inventoryItemName: 'Mozzarella Cheese',
        changeQuantity: -2,
        sourceType: 'return',
        sourceId: 'IR002',
        sourceReference: 'RET-2026-002',
        storeId: 'STORE001',
        storeName: 'Main Store',
        balanceAfter: 13,
        createdAt: '2026-01-28T16:00:00Z'
    },
    {
        id: 'LED005',
        inventoryItemId: 'INV002',
        inventoryItemName: 'Mozzarella Cheese',
        changeQuantity: -1,
        sourceType: 'sale',
        sourceId: 'SALE001',
        sourceReference: 'ORD-2026-045',
        storeId: 'STORE001',
        storeName: 'Main Store',
        balanceAfter: 12,
        createdAt: '2026-01-29T12:30:00Z'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/services/inventoryService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Inventory Service - Mock Backend Simulation
 * Provides realistic backend behavior with state management
 * 
 * STRICT RULES:
 * - Simulates real backend responses
 * - Enforces business rules
 * - Maintains data consistency
 * - No UI shortcuts
 */ __turbopack_context__.s([
    "inventoryItemService",
    ()=>inventoryItemService,
    "inventoryService",
    ()=>inventoryService,
    "recipeService",
    ()=>recipeService,
    "resetMockData",
    ()=>resetMockData,
    "returnService",
    ()=>returnService,
    "vendorService",
    ()=>vendorService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/m9/mock/inventory.ts [app-client] (ecmascript)");
;
// In-memory state (simulates database)
let inventoryEntries = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockInventoryEntries"]
];
let inventoryItems = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockInventoryItems"]
];
let recipes = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRecipes"]
];
let vendors = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockVendors"]
];
let inventoryReturns = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockInventoryReturns"]
];
let inventoryLedger = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockInventoryLedger"]
];
// Helper: Generate ID
const generateId = (prefix)=>`${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
// Helper: Generate Reference Number
const generateReferenceNo = (prefix)=>{
    const year = new Date().getFullYear();
    const timestamp = Date.now().toString().slice(-6);
    return `${prefix}-${year}-${timestamp}`;
};
const inventoryService = {
    // Get all entries with filters
    getEntries: (filters)=>{
        let filtered = [
            ...inventoryEntries
        ];
        if (filters?.storeId) {
            filtered = filtered.filter((e)=>e.storeId === filters.storeId);
        }
        if (filters?.supplierId) {
            filtered = filtered.filter((e)=>e.supplierId === filters.supplierId);
        }
        if (filters?.status) {
            filtered = filtered.filter((e)=>e.inventoryStatus === filters.status);
        }
        if (filters?.dateFrom) {
            filtered = filtered.filter((e)=>new Date(e.inventoryDate) >= new Date(filters.dateFrom));
        }
        if (filters?.dateTo) {
            filtered = filtered.filter((e)=>new Date(e.inventoryDate) <= new Date(filters.dateTo));
        }
        return Promise.resolve(filtered);
    },
    // Get single entry
    getEntry: (id)=>{
        const entry = inventoryEntries.find((e)=>e.id === id);
        return Promise.resolve(entry || null);
    },
    // Create entry
    createEntry: (data, userId, userName)=>{
        const newEntry = {
            id: generateId('IE'),
            referenceNo: data.referenceNo || generateReferenceNo('PO'),
            supplierId: data.supplierId,
            supplierName: vendors.find((v)=>v.id === data.supplierId)?.name || '',
            storeId: data.storeId,
            storeName: 'Main Store',
            inventoryDate: data.inventoryDate,
            inventoryStatus: data.inventoryStatus,
            paymentStatus: 'Unpaid',
            payTerm: data.payTerm,
            attachedDocument: data.attachedDocument,
            products: data.products.map((p)=>({
                    ...p,
                    id: generateId('IEP'),
                    inventoryItemName: inventoryItems.find((i)=>i.id === p.inventoryItemId)?.name || ''
                })),
            purchaseTax: data.purchaseTax,
            shippingCharges: data.shippingCharges,
            additionalNotes: data.additionalNotes,
            subtotal: data.products.reduce((sum, p)=>sum + p.subtotal, 0),
            totalTax: data.products.reduce((sum, p)=>sum + p.taxAmount, 0) + data.purchaseTax,
            grandTotal: 0,
            paymentDue: 0,
            createdBy: userId,
            createdByName: userName,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        newEntry.grandTotal = newEntry.subtotal + newEntry.totalTax + newEntry.shippingCharges;
        newEntry.paymentDue = newEntry.grandTotal;
        inventoryEntries.push(newEntry);
        return Promise.resolve(newEntry);
    },
    // Receive inventory (update stock)
    receiveInventory: (id)=>{
        const entry = inventoryEntries.find((e)=>e.id === id);
        if (!entry) return Promise.reject(new Error('Entry not found'));
        if (entry.inventoryStatus === 'Received') return Promise.reject(new Error('Already received'));
        // Update entry status
        entry.inventoryStatus = 'Received';
        entry.updatedAt = new Date().toISOString();
        // Update inventory quantities
        entry.products.forEach((product)=>{
            const item = inventoryItems.find((i)=>i.id === product.inventoryItemId);
            if (item) {
                // Increment stock
                item.currentStock += product.purchaseQuantity;
                // Recalculate average cost
                const totalValue = (item.currentStock - product.purchaseQuantity) * item.averageCost + product.purchaseQuantity * product.unitCostAfterTax;
                item.averageCost = totalValue / item.currentStock;
                item.updatedAt = new Date().toISOString();
                // Create ledger entry
                const ledgerEntry = {
                    id: generateId('LED'),
                    inventoryItemId: item.id,
                    inventoryItemName: item.name,
                    changeQuantity: product.purchaseQuantity,
                    sourceType: 'inventory',
                    sourceId: entry.id,
                    sourceReference: entry.referenceNo,
                    storeId: entry.storeId,
                    storeName: entry.storeName,
                    balanceAfter: item.currentStock,
                    createdAt: new Date().toISOString()
                };
                inventoryLedger.push(ledgerEntry);
            }
        });
        return Promise.resolve(entry);
    },
    // Update entry
    updateEntry: (id, data)=>{
        const entry = inventoryEntries.find((e)=>e.id === id);
        if (!entry) return Promise.reject(new Error('Entry not found'));
        // Only allow edit if Draft or Ordered
        if (entry.inventoryStatus !== 'Draft' && entry.inventoryStatus !== 'Ordered') {
            return Promise.reject(new Error('Cannot edit received inventory'));
        }
        // Update fields
        Object.assign(entry, {
            ...data,
            updatedAt: new Date().toISOString()
        });
        return Promise.resolve(entry);
    },
    // Delete entry
    deleteEntry: (id, userRole)=>{
        const entry = inventoryEntries.find((e)=>e.id === id);
        if (!entry) return Promise.reject(new Error('Entry not found'));
        // Admin only
        if (userRole !== 'ADMIN') {
            return Promise.reject(new Error('Only admins can delete entries'));
        }
        // Only before received
        if (entry.inventoryStatus === 'Received' || entry.inventoryStatus === 'Partial') {
            return Promise.reject(new Error('Cannot delete received inventory'));
        }
        inventoryEntries = inventoryEntries.filter((e)=>e.id !== id);
        return Promise.resolve(true);
    }
};
const inventoryItemService = {
    getAll: (filters)=>{
        let filtered = [
            ...inventoryItems
        ];
        if (filters?.status) {
            filtered = filtered.filter((i)=>i.status === filters.status);
        }
        if (filters?.lowStockOnly) {
            filtered = filtered.filter((i)=>i.currentStock <= i.lowStockThreshold);
        }
        return Promise.resolve(filtered);
    },
    getById: (id)=>{
        const item = inventoryItems.find((i)=>i.id === id);
        return Promise.resolve(item || null);
    },
    create: (data, tenantId)=>{
        const newItem = {
            id: generateId('INV'),
            ...data,
            status: data.status || 'Active',
            currentStock: 0,
            averageCost: 0,
            tenantId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        inventoryItems.push(newItem);
        return Promise.resolve(newItem);
    },
    update: (id, data)=>{
        const item = inventoryItems.find((i)=>i.id === id);
        if (!item) return Promise.reject(new Error('Item not found'));
        Object.assign(item, {
            ...data,
            updatedAt: new Date().toISOString()
        });
        return Promise.resolve(item);
    },
    adjustStock: (id, quantity, reason, userId)=>{
        const item = inventoryItems.find((i)=>i.id === id);
        if (!item) return Promise.reject(new Error('Item not found'));
        item.currentStock += quantity;
        item.updatedAt = new Date().toISOString();
        // Create ledger entry
        const ledgerEntry = {
            id: generateId('LED'),
            inventoryItemId: item.id,
            inventoryItemName: item.name,
            changeQuantity: quantity,
            sourceType: 'adjustment',
            sourceId: userId,
            sourceReference: reason,
            storeId: 'STORE001',
            storeName: 'Main Store',
            balanceAfter: item.currentStock,
            createdAt: new Date().toISOString()
        };
        inventoryLedger.push(ledgerEntry);
        return Promise.resolve(item);
    },
    getLedger: (itemId)=>{
        const entries = inventoryLedger.filter((l)=>l.inventoryItemId === itemId);
        return Promise.resolve(entries);
    }
};
const recipeService = {
    getAll: (filters)=>{
        let filtered = [
            ...recipes
        ];
        if (filters?.status) {
            filtered = filtered.filter((r)=>r.status === filters.status);
        }
        return Promise.resolve(filtered);
    },
    getById: (id)=>{
        const recipe = recipes.find((r)=>r.id === id);
        return Promise.resolve(recipe || null);
    },
    create: (data, tenantId)=>{
        // Calculate costs
        const ingredientsWithCosts = data.ingredients.map((ing)=>{
            const item = inventoryItems.find((i)=>i.id === ing.inventoryItemId);
            const effectiveQty = ing.quantityUsed + ing.quantityUsed * ing.wastagePercentage / 100;
            const lineCost = effectiveQty * (item?.averageCost || 0);
            return {
                id: generateId('RI'),
                ...ing,
                inventoryItemName: item?.name || '',
                baseUnit: item?.baseUnit || 'Piece',
                unitCost: item?.averageCost || 0,
                effectiveQuantity: effectiveQty,
                lineCost
            };
        });
        const totalCost = ingredientsWithCosts.reduce((sum, ing)=>sum + ing.lineCost, 0);
        const newRecipe = {
            id: generateId('REC'),
            ...data,
            ingredients: ingredientsWithCosts,
            totalRecipeCost: totalCost,
            usedByProductCount: 0,
            tenantId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        recipes.push(newRecipe);
        return Promise.resolve(newRecipe);
    },
    update: (id, data)=>{
        const recipe = recipes.find((r)=>r.id === id);
        if (!recipe) return Promise.reject(new Error('Recipe not found'));
        // Recalculate if ingredients changed
        if (data.ingredients) {
            const ingredientsWithCosts = data.ingredients.map((ing)=>{
                const item = inventoryItems.find((i)=>i.id === ing.inventoryItemId);
                const effectiveQty = ing.quantityUsed + ing.quantityUsed * ing.wastagePercentage / 100;
                const lineCost = effectiveQty * (item?.averageCost || 0);
                return {
                    id: generateId('RI'),
                    ...ing,
                    inventoryItemName: item?.name || '',
                    baseUnit: item?.baseUnit || 'Piece',
                    unitCost: item?.averageCost || 0,
                    effectiveQuantity: effectiveQty,
                    lineCost
                };
            });
            const totalCost = ingredientsWithCosts.reduce((sum, ing)=>sum + ing.lineCost, 0);
            Object.assign(recipe, {
                ...data,
                ingredients: ingredientsWithCosts,
                totalRecipeCost: totalCost,
                updatedAt: new Date().toISOString()
            });
        } else {
            Object.assign(recipe, {
                ...data,
                updatedAt: new Date().toISOString()
            });
        }
        return Promise.resolve(recipe);
    },
    delete: (id)=>{
        const recipe = recipes.find((r)=>r.id === id);
        if (!recipe) return Promise.reject(new Error('Recipe not found'));
        // Cannot delete if attached to products
        if (recipe.usedByProductCount > 0) {
            return Promise.reject(new Error('Cannot delete recipe attached to products'));
        }
        recipes = recipes.filter((r)=>r.id !== id);
        return Promise.resolve(true);
    },
    duplicate: (id)=>{
        const recipe = recipes.find((r)=>r.id === id);
        if (!recipe) return Promise.reject(new Error('Recipe not found'));
        const newRecipe = {
            ...recipe,
            id: generateId('REC'),
            name: `${recipe.name} (Copy)`,
            usedByProductCount: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        recipes.push(newRecipe);
        return Promise.resolve(newRecipe);
    }
};
const vendorService = {
    getAll: ()=>Promise.resolve([
            ...vendors
        ]),
    getById: (id)=>{
        const vendor = vendors.find((v)=>v.id === id);
        return Promise.resolve(vendor || null);
    },
    create: (data)=>{
        const newVendor = {
            id: generateId('VEN'),
            ...data,
            totalPurchases: 0,
            totalPaid: 0,
            totalDue: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        vendors.push(newVendor);
        return Promise.resolve(newVendor);
    },
    update: (id, data)=>{
        const vendor = vendors.find((v)=>v.id === id);
        if (!vendor) return Promise.reject(new Error('Vendor not found'));
        Object.assign(vendor, {
            ...data,
            updatedAt: new Date().toISOString()
        });
        return Promise.resolve(vendor);
    },
    delete: (id)=>{
        // Check if vendor has any entries
        const hasEntries = inventoryEntries.some((e)=>e.supplierId === id);
        if (hasEntries) {
            return Promise.reject(new Error('Cannot delete vendor with existing entries'));
        }
        vendors = vendors.filter((v)=>v.id !== id);
        return Promise.resolve(true);
    },
    getVendorEntries: (vendorId)=>{
        const entries = inventoryEntries.filter((e)=>e.supplierId === vendorId);
        return Promise.resolve(entries);
    }
};
const returnService = {
    getAll: (filters)=>{
        let filtered = [
            ...inventoryReturns
        ];
        if (filters?.returnType) {
            filtered = filtered.filter((r)=>r.returnType === filters.returnType);
        }
        if (filters?.supplierId) {
            filtered = filtered.filter((r)=>r.supplierId === filters.supplierId);
        }
        if (filters?.dateFrom) {
            filtered = filtered.filter((r)=>new Date(r.returnDate) >= new Date(filters.dateFrom));
        }
        if (filters?.dateTo) {
            filtered = filtered.filter((r)=>new Date(r.returnDate) <= new Date(filters.dateTo));
        }
        return Promise.resolve(filtered);
    },
    getById: (id)=>{
        const ret = inventoryReturns.find((r)=>r.id === id);
        return Promise.resolve(ret || null);
    },
    create: (data, userId, userName)=>{
        const newReturn = {
            id: generateId('IR'),
            referenceNo: generateReferenceNo('RET'),
            returnType: data.returnType,
            supplierId: data.supplierId,
            supplierName: data.supplierId ? vendors.find((v)=>v.id === data.supplierId)?.name : undefined,
            storeId: data.storeId,
            storeName: 'Main Store',
            returnDate: data.returnDate,
            products: data.products.map((p)=>({
                    ...p,
                    id: generateId('IRP'),
                    inventoryItemName: inventoryItems.find((i)=>i.id === p.inventoryItemId)?.name || ''
                })),
            totalAmount: data.products.reduce((sum, p)=>sum + p.lineTotal, 0),
            reason: data.reason,
            createdBy: userId,
            createdByName: userName,
            createdAt: new Date().toISOString()
        };
        // Reduce stock immediately
        newReturn.products.forEach((product)=>{
            const item = inventoryItems.find((i)=>i.id === product.inventoryItemId);
            if (item) {
                item.currentStock -= product.returnQuantity;
                item.updatedAt = new Date().toISOString();
                // Create ledger entry
                const ledgerEntry = {
                    id: generateId('LED'),
                    inventoryItemId: item.id,
                    inventoryItemName: item.name,
                    changeQuantity: -product.returnQuantity,
                    sourceType: 'return',
                    sourceId: newReturn.id,
                    sourceReference: newReturn.referenceNo,
                    storeId: newReturn.storeId,
                    storeName: newReturn.storeName,
                    balanceAfter: item.currentStock,
                    createdAt: new Date().toISOString()
                };
                inventoryLedger.push(ledgerEntry);
            }
        });
        inventoryReturns.push(newReturn);
        return Promise.resolve(newReturn);
    }
};
const resetMockData = ()=>{
    inventoryEntries = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockInventoryEntries"]
    ];
    inventoryItems = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockInventoryItems"]
    ];
    recipes = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRecipes"]
    ];
    vendors = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockVendors"]
    ];
    inventoryReturns = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockInventoryReturns"]
    ];
    inventoryLedger = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$mock$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockInventoryLedger"]
    ];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/services/userService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVAILABLE_PERMISSIONS",
    ()=>AVAILABLE_PERMISSIONS,
    "PERMISSION_CATEGORIES",
    ()=>PERMISSION_CATEGORIES,
    "userService",
    ()=>userService
]);
const PERMISSION_CATEGORIES = [
    'User Roles',
    'Customers',
    'Items',
    'Inventory',
    'Finances',
    'Reports',
    'POS',
    'Online Ordering',
    'Kitchen (KDS)',
    'Taxes',
    'Settings',
    'Kiosk'
];
const AVAILABLE_PERMISSIONS = [
    {
        category: 'User Roles',
        actions: [
            'View users',
            'Add user',
            'Edit user',
            'Disable user',
            'Assign roles',
            'View roles',
            'Create role',
            'Edit role',
            'Delete role'
        ]
    },
    {
        category: 'Customers',
        actions: [
            'View customers',
            'Add customer',
            'Edit customer',
            'Delete customer',
            'View order history',
            'Add customer notes',
            'Block / blacklist customer'
        ]
    },
    {
        category: 'Items',
        actions: [
            'View items',
            'Add product',
            'Edit product',
            'Delete product',
            'Manage variants',
            'Manage modifiers',
            'Update pricing',
            'Assign categories'
        ]
    },
    {
        category: 'Inventory',
        actions: [
            'View inventory',
            'Add inventory item',
            'Edit inventory item',
            'Delete inventory item',
            'Stock adjustment',
            'Waste / damage entry',
            'Recipe management',
            'Low stock alerts'
        ]
    },
    {
        category: 'Finances',
        actions: [
            'View transactions',
            'Issue refund',
            'Partial refund',
            'Void transaction',
            'View payment methods',
            'Manage service charges',
            'View settlement reports'
        ]
    },
    {
        category: 'Reports',
        actions: [
            'View sales reports',
            'View tax reports',
            'View inventory reports',
            'View staff performance',
            'Export reports (CSV / Excel / PDF)'
        ]
    },
    {
        category: 'POS',
        actions: [
            'Access POS screen',
            'Create order',
            'Edit order',
            'Apply discount',
            'Override price',
            'Cancel order',
            'Reprint receipt',
            'Open cash drawer',
            'Split payment',
            'Hold / recall order'
        ]
    },
    {
        category: 'Online Ordering',
        actions: [
            'View online orders',
            'Accept / reject orders',
            'Edit online order',
            'Manage delivery / pickup status',
            'Pause online ordering',
            'Manage time slots'
        ]
    },
    {
        category: 'Kitchen (KDS)',
        actions: [
            'Access KDS screen',
            'View incoming orders',
            'Change item status (Preparing / Ready)',
            'Recall order',
            'Re-fire item',
            'Mark order complete',
            'View preparation time',
            'Route orders to stations'
        ]
    },
    {
        category: 'Taxes',
        actions: [
            'View tax rules',
            'Add tax',
            'Edit tax',
            'Delete tax',
            'Assign tax to items / locations'
        ]
    },
    {
        category: 'Settings',
        actions: [
            'View settings',
            'Edit store settings',
            'Manage payment settings',
            'Manage printers / hardware',
            'Manage integrations',
            'Access audit logs'
        ]
    },
    {
        category: 'Kiosk',
        actions: [
            'Enable / disable kiosk',
            'Configure kiosk menu',
            'Set kiosk pricing',
            'Restrict payment types',
            'View kiosk orders',
            'Reset kiosk session'
        ]
    }
];
// Initial Roles (Seed)
const INITIAL_ROLES = [
    {
        id: 'ROLE_ADMIN',
        name: 'Admin',
        description: 'Full system access',
        permissions: AVAILABLE_PERMISSIONS.flatMap((g)=>g.actions),
        isSystem: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'ROLE_MANAGER',
        name: 'Store Manager',
        description: 'Manage store operations',
        permissions: [
            'View users',
            'Add user',
            'Edit user',
            'View reports',
            'Access POS screen',
            'View inventory'
        ],
        createdAt: new Date().toISOString()
    },
    {
        id: 'ROLE_CASHIER',
        name: 'POS Cashier',
        description: 'Front of house staff',
        permissions: [
            'Access POS screen',
            'Create order',
            'View customers'
        ],
        createdAt: new Date().toISOString()
    },
    {
        id: 'ROLE_KITCHEN',
        name: 'Kitchen Staff',
        description: 'Back of house cooking staff',
        permissions: [
            'Access KDS screen',
            'View incoming orders',
            'Change item status (Preparing / Ready)'
        ],
        createdAt: new Date().toISOString()
    },
    {
        id: 'ROLE_CALL_CENTER',
        name: 'Call Agent',
        description: 'Remote order taking',
        permissions: [
            'Create order',
            'View customers',
            'View items'
        ],
        createdAt: new Date().toISOString()
    }
];
// Initial Users (Seed)
const INITIAL_USERS = [
    {
        id: 'USER_001',
        fullName: 'System Admin',
        email: 'admin@zyappy.com',
        type: 'Admin User',
        roleId: 'ROLE_ADMIN',
        roleName: 'Admin',
        assignedStores: [
            'All'
        ],
        status: 'Active',
        createdAt: new Date().toISOString()
    },
    {
        id: 'USER_002',
        fullName: 'Sarah Manager',
        email: 'sarah@store1.com',
        type: 'Manager User',
        roleId: 'ROLE_MANAGER',
        roleName: 'Store Manager',
        assignedStores: [
            'STORE_001'
        ],
        status: 'Active',
        createdAt: new Date().toISOString()
    },
    {
        id: 'USER_003',
        fullName: 'David Cashier',
        email: 'david@store1.com',
        type: 'POS User',
        roleId: 'ROLE_CASHIER',
        roleName: 'POS Cashier',
        assignedStores: [
            'STORE_001'
        ],
        status: 'Active',
        createdAt: new Date().toISOString()
    },
    {
        id: 'USER_004',
        fullName: 'Mike Chef',
        email: 'mike@kitchen.com',
        type: 'Kitchen User',
        roleId: 'ROLE_KITCHEN',
        roleName: 'Kitchen Staff',
        assignedStores: [
            'STORE_001'
        ],
        status: 'Active',
        createdAt: new Date().toISOString()
    }
];
// ============================================================================
// MOCK STATE (In-Memory)
// ============================================================================
let roles_store = [
    ...INITIAL_ROLES
];
let users_store = [
    ...INITIAL_USERS
];
let auditLogs_store = [];
const userService = {
    // USERS
    getUsers: async ()=>{
        await new Promise((resolve)=>setTimeout(resolve, 500));
        return [
            ...users_store
        ];
    },
    createUser: async (data)=>{
        await new Promise((resolve)=>setTimeout(resolve, 500));
        if (users_store.some((u)=>u.email === data.email)) {
            throw new Error('Email already exists');
        }
        const role = roles_store.find((r)=>r.id === data.roleId);
        if (!role) throw new Error('Invalid Role ID');
        const newUser = {
            id: `USER_${Date.now()}`,
            ...data,
            roleName: role.name,
            status: 'Active',
            createdAt: new Date().toISOString()
        };
        users_store = [
            newUser,
            ...users_store
        ];
        auditLogs_store.unshift({
            id: `LOG_${Date.now()}`,
            action: 'User User',
            details: `Created user ${newUser.fullName} (${newUser.type})`,
            performedBy: 'Current User',
            timestamp: new Date().toISOString()
        });
        return newUser;
    },
    updateUser: async (id, data)=>{
        await new Promise((resolve)=>setTimeout(resolve, 500));
        const idx = users_store.findIndex((u)=>u.id === id);
        if (idx === -1) throw new Error('User not found');
        const currentUser = users_store[idx];
        if (!currentUser) throw new Error('User not found');
        let roleName = currentUser.roleName;
        if (data.roleId) {
            const role = roles_store.find((r)=>r.id === data.roleId);
            if (role) roleName = role.name;
        }
        const updatedUser = {
            ...currentUser,
            ...data,
            roleName
        };
        users_store[idx] = updatedUser;
        auditLogs_store.unshift({
            id: `LOG_${Date.now()}`,
            action: 'User User',
            details: `Updated user ${updatedUser.fullName}`,
            performedBy: 'Current User',
            timestamp: new Date().toISOString()
        });
        return updatedUser;
    },
    toggleUserStatus: async (id)=>{
        await new Promise((resolve)=>setTimeout(resolve, 300));
        const idx = users_store.findIndex((u)=>u.id === id);
        if (idx === -1) throw new Error('User not found');
        const user = users_store[idx];
        if (!user) throw new Error('User not found');
        const newStatus = user.status === 'Active' ? 'Disabled' : 'Active';
        user.status = newStatus;
        auditLogs_store.unshift({
            id: `LOG_${Date.now()}`,
            action: 'User User',
            details: `${newStatus === 'Active' ? 'Enabled' : 'Disabled'} user ${user.fullName}`,
            performedBy: 'Current User',
            timestamp: new Date().toISOString()
        });
        return user;
    },
    // ROLES
    getRoles: async ()=>{
        await new Promise((resolve)=>setTimeout(resolve, 500));
        return [
            ...roles_store
        ];
    },
    createRole: async (data)=>{
        await new Promise((resolve)=>setTimeout(resolve, 500));
        const newRole = {
            id: `ROLE_${Date.now()}`,
            ...data,
            createdAt: new Date().toISOString()
        };
        roles_store = [
            newRole,
            ...roles_store
        ];
        auditLogs_store.unshift({
            id: `LOG_${Date.now()}`,
            action: 'User Role',
            details: `Created role ${newRole.name}`,
            performedBy: 'Current User',
            timestamp: new Date().toISOString()
        });
        return newRole;
    },
    updateRole: async (id, data)=>{
        await new Promise((resolve)=>setTimeout(resolve, 500));
        const idx = roles_store.findIndex((r)=>r.id === id);
        if (idx === -1) throw new Error('Role not found');
        const currentRole = roles_store[idx];
        if (!currentRole) throw new Error('Role not found');
        if (currentRole.isSystem) throw new Error('Cannot edit system roles');
        const updatedRole = {
            ...currentRole,
            ...data
        };
        roles_store[idx] = updatedRole;
        auditLogs_store.unshift({
            id: `LOG_${Date.now()}`,
            action: 'User Role',
            details: `Updated role ${updatedRole.name}`,
            performedBy: 'Current User',
            timestamp: new Date().toISOString()
        });
        return updatedRole;
    },
    deleteRole: async (id)=>{
        await new Promise((resolve)=>setTimeout(resolve, 500));
        const role = roles_store.find((r)=>r.id === id);
        if (!role) throw new Error('Role not found');
        if (role.isSystem) throw new Error('Cannot delete system roles');
        const assigned = users_store.some((u)=>u.roleId === id);
        if (assigned) throw new Error('Cannot delete role assigned to users');
        roles_store = roles_store.filter((r)=>r.id !== id);
        return true;
    },
    // AUDIT
    getAuditLogs: async ()=>{
        await new Promise((resolve)=>setTimeout(resolve, 300));
        return [
            ...auditLogs_store
        ];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/services/businessOperationsService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "businessOperationsService",
    ()=>businessOperationsService
]);
const INITIAL_DATA = {
    businessInfo: {
        businessName: 'Zyappy Demo',
        startDate: '2024-01-01',
        website: 'https://zyappy.com',
        isWebsitePublic: true,
        phone: '+1 (555) 000-1234',
        isPhonePublic: true,
        address: '123 Tech Avenue, Silicon Valley, CA',
        logoUrl: 'https://placehold.co/200x200/0f172a/ffffff?text=ZYAPPY'
    },
    localization: {
        currency: 'USD',
        decimalPrecision: 2,
        timezone: 'America/Los_Angeles',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: '12h'
    },
    taxes: [
        {
            id: 'tax_1',
            name: 'VAT',
            percentage: 5,
            type: 'Exclusive',
            applicableChannels: [
                'POS',
                'Online',
                'Kiosk'
            ],
            status: 'Active'
        },
        {
            id: 'tax_2',
            name: 'Service Charge',
            percentage: 10,
            type: 'Inclusive',
            applicableChannels: [
                'POS'
            ],
            status: 'Active'
        }
    ],
    smtp: {
        host: 'smtp.zyappy.com',
        port: 587,
        encryption: 'TLS',
        username: 'notifications@zyappy.com',
        password: '••••••••••••',
        senderName: 'Zyappy POS',
        senderEmail: 'noreply@zyappy.com'
    },
    sms: {
        provider: 'Twilio',
        accountSid: 'ACxxxxxxxxxxxxxxxxxxxxxxxx',
        authToken: '••••••••••••••••••••••••',
        senderNumber: '+1234567890'
    },
    loyalty: {
        isEnabled: true,
        earningRules: '1 point per $1 spent',
        redemptionRules: '100 points = $5 discount',
        expiryPeriodMonths: 12
    },
    modules: {
        pos: true,
        onlineOrdering: true,
        kiosk: true,
        inventory: true,
        pricing: true,
        kitchen: true,
        delivery: true,
        marketing: true,
        aiPhoneOrdering: false,
        analytics: true
    },
    locations: [
        {
            id: 'loc_1',
            name: 'Flagship Store',
            address: '123 Main St, Downtown',
            status: 'Active',
            timezone: 'America/Los_Angeles',
            timings: {
                pos: Array(7).fill(null).map((_, i)=>({
                        day: [
                            'Sunday',
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday'
                        ][i],
                        openTime: '09:00',
                        closeTime: '22:00',
                        isOpen: true
                    })),
                online: Array(7).fill(null).map((_, i)=>({
                        day: [
                            'Sunday',
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday'
                        ][i],
                        openTime: '10:00',
                        closeTime: '21:00',
                        isOpen: true
                    })),
                kiosk: Array(7).fill(null).map((_, i)=>({
                        day: [
                            'Sunday',
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday'
                        ][i],
                        openTime: '09:00',
                        closeTime: '22:00',
                        isOpen: true
                    }))
            }
        }
    ]
};
let store = {
    ...INITIAL_DATA
};
let auditLogs = [];
const businessOperationsService = {
    getSettings: async ()=>{
        await new Promise((resolve)=>setTimeout(resolve, 500));
        return {
            ...store
        };
    },
    updateBusinessInfo: async (data)=>{
        store.businessInfo = data;
        logAudit('Business Information Updated', data);
        return {
            ...store.businessInfo
        };
    },
    updateLocalization: async (data)=>{
        store.localization = data;
        logAudit('Localization Settings Updated', data);
        return {
            ...store.localization
        };
    },
    updateTaxes: async (data)=>{
        store.taxes = data;
        logAudit('Tax Configuration Updated', data);
        return [
            ...store.taxes
        ];
    },
    updateSmtp: async (data)=>{
        store.smtp = data;
        logAudit('SMTP Settings Updated', {
            ...data,
            password: '****'
        });
        return {
            ...store.smtp
        };
    },
    updateSms: async (data)=>{
        store.sms = data;
        logAudit('SMS Settings Updated', {
            ...data,
            authToken: '****'
        });
        return {
            ...store.sms
        };
    },
    updateLoyalty: async (data)=>{
        store.loyalty = data;
        logAudit('Loyalty Settings Updated', data);
        return {
            ...store.loyalty
        };
    },
    updateModules: async (data)=>{
        store.modules = data;
        logAudit('Module Toggles Updated', data);
        return {
            ...store.modules
        };
    },
    updateLocations: async (data)=>{
        store.locations = data;
        logAudit('Location Configuration Updated', data);
        return [
            ...store.locations
        ];
    },
    sendTestEmail: async (email)=>{
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        if (email.includes('error')) throw new Error('SMTP Connection Failed');
        return {
            success: true,
            message: `Test email sent successfully to ${email}`
        };
    },
    sendTestSms: async (phone)=>{
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        if (phone.includes('000')) throw new Error('SMS Provider Error');
        return {
            success: true,
            message: `Test SMS sent successfully to ${phone}`
        };
    },
    getAuditLogs: async ()=>{
        return [
            ...auditLogs
        ];
    }
};
function logAudit(action, details) {
    auditLogs.unshift({
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        action,
        details: JSON.stringify(details),
        user: 'Admin User'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_m9_a221568e._.js.map