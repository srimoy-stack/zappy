module.exports = [
"[project]/src/modules/pos/mock/posData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VALID_CALL_CENTER_USERS",
    ()=>VALID_CALL_CENTER_USERS,
    "VALID_STORE_PINS",
    ()=>VALID_STORE_PINS,
    "mockIncomingCall",
    ()=>mockIncomingCall,
    "mockPOSAreas",
    ()=>mockPOSAreas,
    "mockPOSCategories",
    ()=>mockPOSCategories,
    "mockPOSCustomers",
    ()=>mockPOSCustomers,
    "mockPOSProducts",
    ()=>mockPOSProducts,
    "mockPOSTables",
    ()=>mockPOSTables,
    "mockPOSUsers",
    ()=>mockPOSUsers,
    "mockRecentOrders",
    ()=>mockRecentOrders,
    "mockStores",
    ()=>mockStores
]);
const mockPOSUsers = [
    {
        id: 'U001',
        name: 'John Store Manager',
        role: 'STORE_MANAGER',
        accessibleStores: [
            'S001',
            'S002'
        ]
    },
    {
        id: 'U002',
        name: 'Sarah Store Staff',
        role: 'STAFF',
        accessibleStores: [
            'S001'
        ]
    },
    {
        id: 'U003',
        name: 'Alex Call center',
        role: 'CALL_CENTER_AGENT',
        accessibleStores: [
            'S001',
            'S002',
            'S003'
        ]
    }
];
const mockStores = [
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
const VALID_STORE_PINS = {
    '1234': 'U001',
    '5678': 'U002'
};
const VALID_CALL_CENTER_USERS = {
    'alex@zyappy.com': {
        userId: 'U003',
        password: 'password123'
    }
};
const mockRecentOrders = [
    {
        id: 'ORD-5501',
        time: '10:45 AM',
        customer: 'Walk-in',
        amount: 45.50,
        status: 'Completed',
        type: 'Dine-In'
    },
    {
        id: 'ORD-5502',
        time: '11:15 AM',
        customer: 'Sarah Parker',
        amount: 22.00,
        status: 'Pending',
        type: 'Pickup'
    },
    {
        id: 'ORD-5503',
        time: '11:45 AM',
        customer: 'James Miller',
        amount: 68.25,
        status: 'Out for Delivery',
        type: 'Delivery'
    },
    {
        id: 'ORD-5504',
        time: '12:05 PM',
        customer: 'Walk-in',
        amount: 15.00,
        status: 'Completed',
        type: 'Dine-In'
    },
    {
        id: 'ORD-5505',
        time: '12:30 PM',
        customer: 'David Wilson',
        amount: 35.50,
        status: 'Cancelled',
        type: 'Phone Order'
    }
];
const mockIncomingCall = {
    number: '+1 (555) 012-3456',
    caller: 'Jessica Pearson',
    location: 'Central City',
    isLoyaltyMember: true,
    customerId: 'CUST-001'
};
const mockPOSCustomers = [
    {
        id: 'CUST-001',
        name: 'Jessica Pearson',
        phone: '+1 (555) 012-3456',
        email: 'jessica@pearsonhardman.com',
        loyaltyPoints: 1250,
        notes: 'Very Important Person. Prefers high-floor delivery.',
        addresses: [
            {
                id: 'addr1',
                label: 'Office',
                type: 'OFFICE',
                street: '601 5th Ave',
                text: '601 5th Ave, New York, NY 10017',
                isDefault: true
            },
            {
                id: 'addr2',
                label: 'Home',
                type: 'HOME',
                street: '78-10 34th Ave',
                text: '78-10 34th Ave, Jackson Heights, NY 11372',
                isDefault: false
            }
        ],
        recentOrders: [
            {
                id: 'ORD-4401',
                date: '2024-02-01',
                amount: 45.00,
                items: '2x Truffle Pizza, 1x Coke'
            },
            {
                id: 'ORD-4102',
                date: '2024-01-15',
                amount: 22.50,
                items: '1x Margherita'
            }
        ]
    },
    {
        id: 'CUST-002',
        name: 'Harvey Specter',
        phone: '+1 (555) 987-6543',
        email: 'harvey@specter.com',
        loyaltyPoints: 850,
        notes: 'Always orders extra sauce.',
        addresses: [
            {
                id: 'addr3',
                label: 'Office',
                type: 'OFFICE',
                street: '500 Madison Ave',
                text: '500 Madison Ave, New York, NY 10022',
                isDefault: true
            }
        ],
        recentOrders: [
            {
                id: 'ORD-4390',
                date: '2024-01-29',
                amount: 68.00,
                items: '3x Pepperoni Pizza'
            }
        ]
    },
    {
        id: 'CUST-003',
        name: 'Mike Ross',
        phone: '+1 (444) 123-4567',
        email: 'mross@psls.com',
        loyaltyPoints: 300,
        notes: 'Quick pickup customer.',
        addresses: [],
        recentOrders: []
    }
];
const mockPOSCategories = [
    {
        id: 'cat1',
        name: 'Pizza'
    },
    {
        id: 'cat5',
        name: 'Combos'
    },
    {
        id: 'cat2',
        name: 'Sides'
    },
    {
        id: 'cat3',
        name: 'Drinks'
    },
    {
        id: 'cat4',
        name: 'Desserts'
    },
    {
        id: 'cat6',
        name: 'Offers'
    }
];
const sharedPizzaModifiers = [
    {
        id: 'mod1',
        name: 'Extra Toppings',
        options: [
            {
                id: 'top1',
                name: 'Pepperoni',
                price: 2.50
            },
            {
                id: 'top2',
                name: 'Extra Cheese',
                price: 2.00
            },
            {
                id: 'top3',
                name: 'Mushrooms',
                price: 1.50
            },
            {
                id: 'top4',
                name: 'Onions',
                price: 1.00
            }
        ]
    }
];
const pizzaVariants = [
    {
        id: 'var1',
        name: 'Size',
        options: [
            {
                id: 's1',
                name: 'Small',
                additionalPrice: 0
            },
            {
                id: 's2',
                name: 'Medium',
                additionalPrice: 5
            },
            {
                id: 's3',
                name: 'Large',
                additionalPrice: 8
            },
            {
                id: 's4',
                name: 'Extra Large',
                additionalPrice: 12
            }
        ]
    },
    {
        id: 'var2',
        name: 'Crust / Style',
        options: [
            {
                id: 'c1',
                name: 'New York Style',
                additionalPrice: 0
            },
            {
                id: 'c2',
                name: 'Stuffed Crust',
                additionalPrice: 3
            },
            {
                id: 'c3',
                name: 'Thin Crust',
                additionalPrice: 0
            }
        ]
    },
    {
        id: 'var3',
        name: 'Portion Type',
        options: [
            {
                id: 'pt1',
                name: 'Full',
                additionalPrice: 0
            },
            {
                id: 'pt2',
                name: 'Half (Split)',
                additionalPrice: 0
            }
        ]
    }
];
const mockPOSProducts = [
    {
        id: 'p1',
        categoryId: 'cat1',
        name: 'Margherita Dream',
        sku: 'PIZ-001',
        price: 18.00,
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
        hasVariants: true,
        isVeg: true,
        isAvailable: true,
        variantGroups: pizzaVariants,
        modifierGroups: sharedPizzaModifiers
    },
    {
        id: 'p2',
        categoryId: 'cat1',
        name: 'Truffle Mushroom',
        sku: 'PIZ-002',
        price: 24.00,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        hasVariants: true,
        isVeg: true,
        isAvailable: true,
        variantGroups: pizzaVariants,
        modifierGroups: sharedPizzaModifiers
    },
    {
        id: 'p3',
        categoryId: 'cat1',
        name: 'Spicy Pepperoni',
        sku: 'PIZ-003',
        price: 21.00,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
        hasVariants: true,
        isVeg: false,
        isAvailable: true,
        variantGroups: pizzaVariants,
        modifierGroups: sharedPizzaModifiers
    },
    {
        id: 'p4',
        categoryId: 'cat2',
        name: 'Garlic Knots',
        sku: 'SID-001',
        price: 8.50,
        image: 'https://images.unsplash.com/photo-1619531003508-364e7978939c?auto=format&fit=crop&w=800&q=80',
        hasVariants: false,
        isVeg: true,
        isAvailable: true
    },
    {
        id: 'p5',
        categoryId: 'cat3',
        name: 'Craft Root Beer',
        sku: 'BEV-001',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&w=800&q=80',
        hasVariants: false,
        isVeg: true,
        isAvailable: true
    },
    {
        id: 'p6',
        categoryId: 'cat5',
        name: 'Triple Treat Combo',
        sku: 'COM-001',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        hasVariants: true,
        isVeg: false,
        isAvailable: true,
        isCombo: true,
        comboSlots: [
            {
                id: 'slot1',
                name: 'Pizza 1',
                allowedCategoryIds: [
                    'cat1'
                ]
            },
            {
                id: 'slot2',
                name: 'Pizza 2',
                allowedCategoryIds: [
                    'cat1'
                ]
            },
            {
                id: 'slot3',
                name: 'Side',
                allowedCategoryIds: [
                    'cat2'
                ]
            },
            {
                id: 'slot4',
                name: 'Drink',
                allowedCategoryIds: [
                    'cat3'
                ]
            }
        ]
    }
];
const mockPOSAreas = [
    {
        id: 'AREA1',
        name: 'Main Floor'
    },
    {
        id: 'AREA2',
        name: 'Outdoor'
    },
    {
        id: 'AREA3',
        name: 'Rooftop'
    }
];
const mockPOSTables = [
    {
        id: 'T1',
        name: 'Table 1',
        seats: 2,
        status: 'FREE',
        areaId: 'AREA1'
    },
    {
        id: 'T2',
        name: 'Table 2',
        seats: 2,
        status: 'OCCUPIED',
        orderId: 'ORD-5506',
        areaId: 'AREA1'
    },
    {
        id: 'T3',
        name: 'Table 3',
        seats: 4,
        status: 'FREE',
        areaId: 'AREA1'
    },
    {
        id: 'T4',
        name: 'Table 4',
        seats: 4,
        status: 'OCCUPIED',
        orderId: 'ORD-5507',
        areaId: 'AREA1'
    },
    {
        id: 'T5',
        name: 'Table 5',
        seats: 4,
        status: 'FREE',
        areaId: 'AREA1'
    },
    {
        id: 'T6',
        name: 'Table 6',
        seats: 6,
        status: 'FREE',
        areaId: 'AREA1'
    },
    {
        id: 'T7',
        name: 'Lounge 1',
        seats: 8,
        status: 'FREE',
        areaId: 'AREA1'
    },
    {
        id: 'T8',
        name: 'Group 1',
        seats: 10,
        status: 'FREE',
        areaId: 'AREA1'
    },
    {
        id: 'T9',
        name: 'Patio 1',
        seats: 2,
        status: 'FREE',
        areaId: 'AREA2'
    },
    {
        id: 'T10',
        name: 'Patio 2',
        seats: 4,
        status: 'FREE',
        areaId: 'AREA2'
    },
    {
        id: 'T11',
        name: 'Garden 1',
        seats: 6,
        status: 'OCCUPIED',
        orderId: 'ORD-5508',
        areaId: 'AREA2'
    },
    {
        id: 'T12',
        name: 'Garden 2',
        seats: 6,
        status: 'FREE',
        areaId: 'AREA2'
    },
    {
        id: 'T13',
        name: 'Sky 1',
        seats: 2,
        status: 'FREE',
        areaId: 'AREA3'
    },
    {
        id: 'T14',
        name: 'Sky 2',
        seats: 2,
        status: 'OCCUPIED',
        orderId: 'ORD-5509',
        areaId: 'AREA3'
    },
    {
        id: 'T15',
        name: 'Vantage 1',
        seats: 4,
        status: 'FREE',
        areaId: 'AREA3'
    },
    {
        id: 'T16',
        name: 'Vantage 2',
        seats: 4,
        status: 'FREE',
        areaId: 'AREA3'
    }
];
}),
];

//# sourceMappingURL=src_modules_pos_mock_posData_ts_979d6d03._.js.map