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
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/modules/pos/context/POSContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSProvider",
    ()=>POSProvider,
    "usePOS",
    ()=>usePOS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/mock/posData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const POSContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const POSProvider = ({ children })=>{
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tables, setTables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOffline, setIsOffline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSyncing, setIsSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deviceId, setDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Check online status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateStatus = ()=>setIsOffline(!navigator.onLine);
        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);
        updateStatus();
        return ()=>{
            window.removeEventListener('online', updateStatus);
            window.removeEventListener('offline', updateStatus);
        };
    }, []);
    // Get or generate Device ID and persist session to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let savedDeviceId = localStorage.getItem('pos_device_id');
        if (!savedDeviceId) {
            savedDeviceId = `POS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
            localStorage.setItem('pos_device_id', savedDeviceId);
        }
        setDeviceId(savedDeviceId);
        const savedSession = localStorage.getItem('pos_session');
        const savedTables = localStorage.getItem('pos_tables');
        const savedCart = localStorage.getItem('pos_cart');
        if (savedSession) {
            try {
                setSession(JSON.parse(savedSession));
            } catch (e) {
                console.error('Failed to parse POS session', e);
            }
        }
        if (savedTables) {
            try {
                setTables(JSON.parse(savedTables));
            } catch (e) {
                console.error('Failed to parse POS tables', e);
            }
        } else {
            setTables(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPOSTables"]);
        }
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to parse POS cart', e);
            }
        }
    }, []);
    const updateSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newSession)=>{
        setSession(newSession);
        if (newSession) {
            localStorage.setItem('pos_session', JSON.stringify(newSession));
        } else {
            localStorage.removeItem('pos_session');
        }
    }, []);
    const updateTables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newTables)=>{
        setTables(newTables);
        localStorage.setItem('pos_tables', JSON.stringify(newTables));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cart.length > 0) {
            localStorage.setItem('pos_cart', JSON.stringify(cart));
        } else {
            localStorage.removeItem('pos_cart');
        }
    }, [
        cart
    ]);
    const login = async (type, credentials)=>{
        // Offline logic
        if (!navigator.onLine) {
            const savedSessionStr = localStorage.getItem('pos_session');
            if (savedSessionStr) {
                const savedSession = JSON.parse(savedSessionStr);
                // Check if it's the same device and type
                if (type === 'STORE' && credentials.pin) {
                    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALID_STORE_PINS"][credentials.pin];
                    if (userId === savedSession.user.id) {
                        setSession({
                            ...savedSession,
                            isOffline: true
                        });
                        return;
                    }
                }
            }
            throw new Error('Offline: No previous session found on this device');
        }
        // Online authentication
        let userId;
        if (type === 'STORE') {
            if (!credentials.pin) throw new Error('PIN is required');
            userId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALID_STORE_PINS"][credentials.pin];
        } else {
            if (!credentials.email || !credentials.password) throw new Error('Email and Password are required');
            const userAuth = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALID_CALL_CENTER_USERS"][credentials.email];
            if (userAuth && userAuth.password === credentials.password) {
                userId = userAuth.userId;
            }
        }
        if (!userId) {
            throw new Error('Invalid credentials');
        }
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPOSUsers"].find((u)=>u.id === userId);
        if (!user) throw new Error('User not found');
        const accessibleStores = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockStores"].filter((s)=>user.accessibleStores.includes(s.id));
        if (accessibleStores.length === 0) throw new Error('User has no assigned stores');
        const initialSession = {
            user,
            posType: type,
            store: accessibleStores.length === 1 ? accessibleStores[0] : null,
            deviceId: credentials.deviceId,
            isOffline: false
        };
        setIsSyncing(true);
        setTimeout(()=>{
            updateSession(initialSession);
            setIsSyncing(false);
        }, 1500);
        // Return sync info for the caller to handle immediate redirection
        return {
            requiresStoreSelection: accessibleStores.length > 1 || accessibleStores.length === 0,
            hasSingleStore: accessibleStores.length === 1
        };
    };
    const setStore = (store)=>{
        if (!session) return;
        updateSession({
            ...session,
            store
        });
    };
    const setChannel = (channel)=>{
        if (!session) return;
        updateSession({
            ...session,
            channel
        });
    };
    const setTable = (table)=>{
        if (!session) return;
        updateSession({
            ...session,
            activeTable: table || undefined
        });
        if (table) {
            const updatedTables = tables.map((t)=>t.id === table.id ? {
                    ...t,
                    status: 'OCCUPIED',
                    orderId: t.orderId || `ORD-${Math.floor(Math.random() * 9000) + 1000}`
                } : t);
            updateTables(updatedTables);
        }
    };
    const moveTable = (sourceTableId, targetTableId)=>{
        if (!session) return;
        const sourceTable = tables.find((t)=>t.id === sourceTableId);
        if (!sourceTable) return;
        const updatedTables = tables.map((t)=>{
            if (t.id === sourceTableId) {
                return {
                    ...t,
                    status: 'FREE',
                    orderId: undefined
                };
            }
            if (t.id === targetTableId) {
                return {
                    ...t,
                    status: 'OCCUPIED',
                    orderId: sourceTable.orderId
                };
            }
            return t;
        });
        updateTables(updatedTables);
        if (session.activeTable?.id === sourceTableId) {
            const targetTable = updatedTables.find((t)=>t.id === targetTableId);
            updateSession({
                ...session,
                activeTable: targetTable
            });
        }
    };
    const setCustomer = (customer)=>{
        if (!session) return;
        updateSession({
            ...session,
            activeCustomer: customer || undefined
        });
    };
    const logout = ()=>{
        updateSession(null);
        router.push('/pos/login');
    };
    const addToCart = (item)=>{
        setCart((prev)=>{
            // Check if it's a simple product add or a full customized item
            const isFullItem = !!item.variants || !!item.pizzaModifiers || !!item.modifiers || !!item.isCombo;
            // Merging logic: Only merge simple items with no customizations
            if (!isFullItem) {
                const existing = prev.find((i)=>i.productId === item.id && !i.variants?.length && !i.modifiers?.length && !i.pizzaModifiers);
                if (existing) {
                    return prev.map((i)=>i.id === existing.id ? {
                            ...i,
                            quantity: i.quantity + 1
                        } : i);
                }
            }
            // Otherwise add as new item (or if it's already a full item with its own ID)
            return [
                ...prev,
                {
                    id: item.id || Math.random().toString(36).substr(2, 9),
                    productId: item.productId || item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity || 1,
                    variants: item.variants || [],
                    modifiers: item.modifiers || [],
                    pizzaModifiers: item.pizzaModifiers,
                    slots: item.slots,
                    isCombo: item.isCombo,
                    isPizza: item.isPizza,
                    notes: item.notes || ''
                }
            ];
        });
    };
    const removeFromCart = (itemId)=>{
        setCart((prev)=>prev.filter((item)=>item.id !== itemId));
    };
    const updateQuantity = (itemId, quantity)=>{
        if (quantity <= 0) {
            removeFromCart(itemId);
            return;
        }
        setCart((prev)=>prev.map((item)=>item.id === itemId ? {
                    ...item,
                    quantity
                } : item));
    };
    const updateCartItem = (itemId, updates)=>{
        setCart((prev)=>prev.map((item)=>item.id === itemId ? {
                    ...item,
                    ...updates
                } : item));
    };
    const clearCart = ()=>setCart([]);
    const cartTotal = cart.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    const [incomingCall, setIncomingCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const updateCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((customerId, data)=>{
        if (session?.activeCustomer?.id === customerId) {
            updateSession({
                ...session,
                activeCustomer: {
                    ...session.activeCustomer,
                    ...data
                }
            });
        }
    }, [
        session,
        updateSession
    ]);
    const setDeliveryAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((address)=>{
        if (!session) return;
        updateSession({
            ...session,
            deliveryAddress: address || undefined
        });
    }, [
        session,
        updateSession
    ]);
    const startShift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((openingCash, notes)=>{
        if (!session) return;
        setIsSyncing(true);
        const shift = {
            startTime: new Date().toISOString(),
            openingCash,
            notes
        };
        // Simulate sync delay
        setTimeout(()=>{
            updateSession({
                ...session,
                shift
            });
            setIsSyncing(false);
        }, 2000);
    }, [
        session,
        updateSession
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(POSContext.Provider, {
        value: {
            session,
            isOffline,
            deviceId,
            login,
            setStore,
            setChannel,
            setTable,
            moveTable,
            setCustomer,
            logout,
            cart,
            setCart,
            addToCart,
            removeFromCart,
            updateQuantity,
            updateCartItem,
            clearCart,
            cartTotal,
            selectedCustomer: session?.activeCustomer,
            deliveryAddress: session?.deliveryAddress,
            setDeliveryAddress,
            incomingCall,
            setIncomingCall,
            updateCustomer,
            startShift,
            isSyncing,
            setSyncing: setIsSyncing
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/modules/pos/context/POSContext.tsx",
        lineNumber: 297,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const usePOS = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(POSContext);
    if (!context) {
        throw new Error('usePOS must be used within a POSProvider');
    }
    return context;
};
}),
"[project]/src/modules/shop/context/ToastContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ToastProvider = ({ children })=>{
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, type = 'success')=>{
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev)=>[
                ...prev,
                {
                    id,
                    message,
                    type
                }
            ]);
        setTimeout(()=>{
            setToasts((prev)=>prev.filter((t)=>t.id !== id));
        }, 3000);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-8 right-8 z-[100] flex flex-col gap-3 pointer-events-none",
                children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `px-6 py-4 rounded-2xl shadow-2xl border text-sm font-black uppercase tracking-widest flex items-center gap-3 animate-in slide-in-from-right duration-300 pointer-events-auto ${toast.type === 'success' ? 'bg-emerald-600 text-white border-emerald-500' : toast.type === 'error' ? 'bg-rose-600 text-white border-rose-500' : 'bg-slate-900 text-white border-slate-800'}`,
                        children: toast.message
                    }, toast.id, false, {
                        fileName: "[project]/src/modules/shop/context/ToastContext.tsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/modules/shop/context/ToastContext.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/shop/context/ToastContext.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const useToast = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
};
}),
"[project]/src/modules/pos/components/ShiftOpeningModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShiftOpeningModal",
    ()=>ShiftOpeningModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/context/POSContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-ssr] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
'use client';
;
;
;
;
;
const ShiftOpeningModal = ()=>{
    const { session, startShift, isSyncing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePOS"])();
    const [openingCash, setOpeningCash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update clock every minute
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentTime(new Date().toLocaleString());
        const timer = setInterval(()=>{
            setCurrentTime(new Date().toLocaleString());
        }, 60000);
        return ()=>clearInterval(timer);
    }, []);
    if (isSyncing || !session || session.posType === 'CALL_CENTER' || session.shift || !session.store) {
        return null;
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const cash = parseFloat(openingCash);
        if (isNaN(cash) || cash < 0) return;
        startShift(cash, notes);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        },
        className: "jsx-6bb720e87ae90487",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    maxWidth: '500px',
                    background: 'var(--pos-bg-surface)',
                    borderRadius: '32px',
                    border: '1px solid var(--pos-border-subtle)',
                    boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12)',
                    overflow: 'hidden',
                    animation: 'posFadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                },
                className: "jsx-6bb720e87ae90487",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '40px 40px 32px',
                            textAlign: 'center',
                            borderBottom: '1px solid var(--pos-border-subtle)'
                        },
                        className: "jsx-6bb720e87ae90487",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '72px',
                                    height: '72px',
                                    background: 'var(--pos-action-primary)',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 24px',
                                    color: 'white',
                                    boxShadow: '0 12px 24px rgba(31, 164, 169, 0.3)'
                                },
                                className: "jsx-6bb720e87ae90487",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    size: 32,
                                    strokeWidth: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '28px',
                                    fontWeight: 900,
                                    color: 'var(--pos-text-primary)',
                                    marginBottom: '8px',
                                    letterSpacing: '-0.02em'
                                },
                                className: "jsx-6bb720e87ae90487",
                                children: "Shift Opening"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '14px',
                                    color: 'var(--pos-text-secondary)',
                                    fontWeight: 600
                                },
                                className: "jsx-6bb720e87ae90487",
                                children: [
                                    "Terminal readiness check for ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-6bb720e87ae90487" + " " + "text-brand",
                                        children: session.store.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                        lineNumber: 79,
                                        columnNumber: 54
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        style: {
                            padding: '40px'
                        },
                        className: "jsx-6bb720e87ae90487",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '28px'
                            },
                            className: "jsx-6bb720e87ae90487",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6bb720e87ae90487",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                fontSize: '11px',
                                                fontWeight: 900,
                                                color: 'var(--pos-text-muted)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.15em',
                                                marginBottom: '10px'
                                            },
                                            className: "jsx-6bb720e87ae90487",
                                            children: "System Handshake Time"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                            lineNumber: 88,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '100%',
                                                height: '60px',
                                                background: 'var(--pos-bg-main)',
                                                border: '1px solid var(--pos-border-subtle)',
                                                borderRadius: '16px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '0 20px',
                                                gap: '12px',
                                                color: 'var(--pos-text-primary)',
                                                fontSize: '16px',
                                                fontWeight: 700
                                            },
                                            className: "jsx-6bb720e87ae90487",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 18,
                                                    className: "text-brand"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                currentTime || 'Validating...'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                            lineNumber: 91,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6bb720e87ae90487",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                fontSize: '11px',
                                                fontWeight: 900,
                                                color: 'var(--pos-text-muted)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.15em',
                                                marginBottom: '10px'
                                            },
                                            className: "jsx-6bb720e87ae90487",
                                            children: "Initial Float (Cash) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                            lineNumber: 112,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'relative'
                                            },
                                            className: "jsx-6bb720e87ae90487",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'absolute',
                                                        left: '20px',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        color: 'var(--pos-text-muted)',
                                                        pointerEvents: 'none'
                                                    },
                                                    className: "jsx-6bb720e87ae90487",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    required: true,
                                                    value: openingCash,
                                                    onChange: (e)=>setOpeningCash(e.target.value),
                                                    placeholder: "0.00",
                                                    step: "0.01",
                                                    autoFocus: true,
                                                    style: {
                                                        width: '100%',
                                                        height: '60px',
                                                        padding: '0 20px 0 56px',
                                                        background: 'white',
                                                        border: '2px solid var(--pos-border-subtle)',
                                                        borderRadius: '16px',
                                                        fontSize: '20px',
                                                        fontWeight: 800,
                                                        color: 'var(--pos-text-primary)',
                                                        outline: 'none',
                                                        transition: 'all 0.2s'
                                                    },
                                                    className: "jsx-6bb720e87ae90487" + " " + "pos-input"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6bb720e87ae90487",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                fontSize: '11px',
                                                fontWeight: 900,
                                                color: 'var(--pos-text-muted)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.15em',
                                                marginBottom: '10px'
                                            },
                                            className: "jsx-6bb720e87ae90487",
                                            children: "Personnel Notes (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                            lineNumber: 154,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'relative'
                                            },
                                            className: "jsx-6bb720e87ae90487",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'absolute',
                                                        left: '20px',
                                                        top: '20px',
                                                        color: 'var(--pos-text-muted)',
                                                        pointerEvents: 'none'
                                                    },
                                                    className: "jsx-6bb720e87ae90487",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: notes,
                                                    onChange: (e)=>setNotes(e.target.value),
                                                    placeholder: "Add any shift notes here...",
                                                    style: {
                                                        width: '100%',
                                                        minHeight: '100px',
                                                        padding: '18px 20px 18px 56px',
                                                        background: 'white',
                                                        border: '2px solid var(--pos-border-subtle)',
                                                        borderRadius: '16px',
                                                        fontSize: '15px',
                                                        fontWeight: 600,
                                                        color: 'var(--pos-text-primary)',
                                                        outline: 'none',
                                                        transition: 'all 0.2s',
                                                        resize: 'none'
                                                    },
                                                    className: "jsx-6bb720e87ae90487"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                            lineNumber: 157,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    style: {
                                        width: '100%',
                                        height: '64px',
                                        background: 'var(--pos-action-primary)',
                                        color: 'white',
                                        borderRadius: '18px',
                                        fontSize: '16px',
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        boxShadow: '0 12px 24px rgba(31, 164, 169, 0.2)',
                                        transition: 'all 0.2s'
                                    },
                                    onMouseOver: (e)=>e.currentTarget.style.transform = 'translateY(-2px)',
                                    onMouseOut: (e)=>e.currentTarget.style.transform = 'translateY(0)',
                                    className: "jsx-6bb720e87ae90487",
                                    children: [
                                        "Open Shift Registry ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                            lineNumber: 213,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                                    lineNumber: 189,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6bb720e87ae90487",
                children: "@keyframes posFadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.pos-input.jsx-6bb720e87ae90487:focus{box-shadow:0 0 0 4px #1fa4a91a;border-color:var(--pos-action-primary)!important}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/components/ShiftOpeningModal.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/modules/pos/components/SyncingLoader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SyncingLoader",
    ()=>SyncingLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/context/POSContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
'use client';
;
;
;
;
const SyncingLoader = ()=>{
    const { isSyncing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePOS"])();
    if (!isSyncing) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '32px'
        },
        className: "jsx-5f9fff581f442a4c",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative'
                },
                className: "jsx-5f9fff581f442a4c",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '120px',
                            height: '120px',
                            borderRadius: '40px',
                            background: 'white',
                            border: '1px solid var(--pos-border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                            animation: 'pulse 2s infinite'
                        },
                        className: "jsx-5f9fff581f442a4c",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            size: 48,
                            color: "var(--pos-action-primary)",
                            style: {
                                animation: 'spin 2s linear infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: '-20px',
                            border: '2px dotted var(--pos-border-subtle)',
                            borderRadius: '50%',
                            animation: 'spin 15s linear infinite'
                        },
                        className: "jsx-5f9fff581f442a4c" + " " + "sync-orbit"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center'
                },
                className: "jsx-5f9fff581f442a4c",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '28px',
                            fontWeight: 900,
                            color: 'var(--pos-text-primary)',
                            marginBottom: '12px',
                            letterSpacing: '-0.02em'
                        },
                        className: "jsx-5f9fff581f442a4c",
                        children: "Synchronizing System"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '16px',
                            color: 'var(--pos-text-secondary)',
                            fontSize: '14px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em'
                        },
                        className: "jsx-5f9fff581f442a4c",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                },
                                className: "jsx-5f9fff581f442a4c",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                        size: 14,
                                        className: "text-brand"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " CATALOG"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: '4px',
                                    height: '4px',
                                    background: 'var(--pos-border-subtle)',
                                    borderRadius: '50%'
                                },
                                className: "jsx-5f9fff581f442a4c"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                },
                                className: "jsx-5f9fff581f442a4c",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 14,
                                        className: "text-brand"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " SECURITY"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: '4px',
                                    height: '4px',
                                    background: 'var(--pos-border-subtle)',
                                    borderRadius: '50%'
                                },
                                className: "jsx-5f9fff581f442a4c"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                },
                                className: "jsx-5f9fff581f442a4c",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 14,
                                        className: "text-brand"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ASSETS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '320px',
                    height: '8px',
                    background: 'var(--pos-border-subtle)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid white'
                },
                className: "jsx-5f9fff581f442a4c",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: '40%',
                        background: 'var(--pos-action-primary)',
                        borderRadius: '4px',
                        boxShadow: '0 0 20px rgba(31, 164, 169, 0.4)',
                        animation: 'syncProgress 2s ease-in-out infinite'
                    },
                    className: "jsx-5f9fff581f442a4c"
                }, void 0, false, {
                    fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                    lineNumber: 101,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "5f9fff581f442a4c",
                children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes syncProgress{0%{width:40%;left:-40%}50%{width:60%;left:30%}to{width:40%;left:100%}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/components/SyncingLoader.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/pos/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>POSLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/context/POSContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$shop$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/shop/context/ToastContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$ShiftOpeningModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/components/ShiftOpeningModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$SyncingLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/components/SyncingLoader.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function POSLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$shop$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["POSProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-slate-900 overflow-x-hidden",
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$ShiftOpeningModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShiftOpeningModal"], {}, void 0, false, {
                        fileName: "[project]/src/app/pos/layout.tsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$SyncingLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SyncingLoader"], {}, void 0, false, {
                        fileName: "[project]/src/app/pos/layout.tsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pos/layout.tsx",
                lineNumber: 14,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/pos/layout.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/pos/layout.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__26fe55cd._.js.map