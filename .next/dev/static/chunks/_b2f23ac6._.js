(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/pos/mock/posData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/pos/context/POSContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSProvider",
    ()=>POSProvider,
    "usePOS",
    ()=>usePOS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/mock/posData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const POSContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const POSProvider = ({ children })=>{
    _s();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tables, setTables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOffline, setIsOffline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deviceId, setDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Check online status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSProvider.useEffect": ()=>{
            const updateStatus = {
                "POSProvider.useEffect.updateStatus": ()=>setIsOffline(!navigator.onLine)
            }["POSProvider.useEffect.updateStatus"];
            window.addEventListener('online', updateStatus);
            window.addEventListener('offline', updateStatus);
            updateStatus();
            return ({
                "POSProvider.useEffect": ()=>{
                    window.removeEventListener('online', updateStatus);
                    window.removeEventListener('offline', updateStatus);
                }
            })["POSProvider.useEffect"];
        }
    }["POSProvider.useEffect"], []);
    // Get or generate Device ID and persist session to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSProvider.useEffect": ()=>{
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
                setTables(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPOSTables"]);
            }
            if (savedCart) {
                try {
                    setCart(JSON.parse(savedCart));
                } catch (e) {
                    console.error('Failed to parse POS cart', e);
                }
            }
        }
    }["POSProvider.useEffect"], []);
    const updateSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "POSProvider.useCallback[updateSession]": (newSession)=>{
            setSession(newSession);
            if (newSession) {
                localStorage.setItem('pos_session', JSON.stringify(newSession));
            } else {
                localStorage.removeItem('pos_session');
            }
        }
    }["POSProvider.useCallback[updateSession]"], []);
    const updateTables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "POSProvider.useCallback[updateTables]": (newTables)=>{
            setTables(newTables);
            localStorage.setItem('pos_tables', JSON.stringify(newTables));
        }
    }["POSProvider.useCallback[updateTables]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSProvider.useEffect": ()=>{
            if (cart.length > 0) {
                localStorage.setItem('pos_cart', JSON.stringify(cart));
            } else {
                localStorage.removeItem('pos_cart');
            }
        }
    }["POSProvider.useEffect"], [
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
                    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VALID_STORE_PINS"][credentials.pin];
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
            userId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VALID_STORE_PINS"][credentials.pin];
        } else {
            if (!credentials.email || !credentials.password) throw new Error('Email and Password are required');
            const userAuth = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VALID_CALL_CENTER_USERS"][credentials.email];
            if (userAuth && userAuth.password === credentials.password) {
                userId = userAuth.userId;
            }
        }
        if (!userId) {
            throw new Error('Invalid credentials');
        }
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPOSUsers"].find((u)=>u.id === userId);
        if (!user) throw new Error('User not found');
        const accessibleStores = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockStores"].filter((s)=>user.accessibleStores.includes(s.id));
        if (accessibleStores.length === 0) throw new Error('User has no assigned stores');
        const initialSession = {
            user,
            posType: type,
            store: accessibleStores.length === 1 ? accessibleStores[0] : null,
            deviceId: credentials.deviceId,
            isOffline: false
        };
        updateSession(initialSession);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(POSContext.Provider, {
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
            setCart
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/modules/pos/context/POSContext.tsx",
        lineNumber: 202,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSProvider, "Rj0Yhym/Nep4nwSC7V898tVL7Oc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = POSProvider;
const usePOS = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(POSContext);
    if (!context) {
        throw new Error('usePOS must be used within a POSProvider');
    }
    return context;
};
_s1(usePOS, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "POSProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/shop/context/ToastContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ToastProvider = ({ children })=>{
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[showToast]": (message, type = 'success')=>{
            const id = Math.random().toString(36).substring(2, 9);
            setToasts({
                "ToastProvider.useCallback[showToast]": (prev)=>[
                        ...prev,
                        {
                            id,
                            message,
                            type
                        }
                    ]
            }["ToastProvider.useCallback[showToast]"]);
            setTimeout({
                "ToastProvider.useCallback[showToast]": ()=>{
                    setToasts({
                        "ToastProvider.useCallback[showToast]": (prev)=>prev.filter({
                                "ToastProvider.useCallback[showToast]": (t)=>t.id !== id
                            }["ToastProvider.useCallback[showToast]"])
                    }["ToastProvider.useCallback[showToast]"]);
                }
            }["ToastProvider.useCallback[showToast]"], 3000);
        }
    }["ToastProvider.useCallback[showToast]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-8 right-8 z-[100] flex flex-col gap-3 pointer-events-none",
                children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(ToastProvider, "bva7iOXLAgwOJBzZ6Hx6GD8IQA4=");
_c = ToastProvider;
const useToast = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
};
_s1(useToast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/pos/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>POSLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/context/POSContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$shop$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/shop/context/ToastContext.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function POSLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$shop$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POSProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-slate-900 overflow-x-hidden",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/pos/layout.tsx",
                lineNumber: 11,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/pos/layout.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/pos/layout.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = POSLayout;
var _c;
__turbopack_context__.k.register(_c, "POSLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_b2f23ac6._.js.map