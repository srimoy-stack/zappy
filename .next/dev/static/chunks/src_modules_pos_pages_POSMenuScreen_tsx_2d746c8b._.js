(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/pos/pages/POSMenuScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSMenuScreen",
    ()=>POSMenuScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tags.js [app-client] (ecmascript) <export default as Tags>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/context/POSContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSDiscountModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/components/POSDiscountModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSCustomizationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/components/POSCustomizationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSCartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/components/POSCartPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSPizzaModifierModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/components/POSPizzaModifierModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$ShiftOpeningModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/components/ShiftOpeningModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSCustomerManagementModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/components/POSCustomerManagementModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/mock/posData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSBackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/components/POSBackButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
// Enhanced Mock Data with more metadata
const MOCK_CATEGORIES = [
    {
        id: 'all',
        name: 'Trending',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__["Tags"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
            lineNumber: 31,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'offers',
        name: 'Discounts & Combos',
        icon: '🎁'
    },
    {
        id: 'pizza',
        name: 'Pizzas',
        icon: '🍕'
    },
    {
        id: 'burger',
        name: 'Burgers',
        icon: '🍔'
    },
    {
        id: 'drinks',
        name: 'Drinks',
        icon: '🥤'
    },
    {
        id: 'sides',
        name: 'Sides',
        icon: '🍟'
    },
    {
        id: 'dessert',
        name: 'Desserts',
        icon: '🍰'
    }
];
const MOCK_PRODUCTS = [
    {
        id: 'p1',
        name: 'Margherita Pizza',
        price: 12.99,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=800&q=80',
        sku: 'PZ-MAR-001',
        hasVariants: true,
        variantGroups: [
            {
                id: 'vg1',
                name: 'Size',
                options: [
                    {
                        id: 'vo1',
                        name: 'Regular 8"',
                        additionalPrice: 0
                    },
                    {
                        id: 'vo2',
                        name: 'Medium 10"',
                        additionalPrice: 3.50
                    },
                    {
                        id: 'vo3',
                        name: 'Large 12"',
                        additionalPrice: 6.00
                    }
                ]
            },
            {
                id: 'vg2',
                name: 'Crust',
                options: [
                    {
                        id: 'vo4',
                        name: 'Classic Thin',
                        additionalPrice: 0
                    },
                    {
                        id: 'vo5',
                        name: 'Cheese Burst',
                        additionalPrice: 2.50
                    },
                    {
                        id: 'vo6',
                        name: 'Wheat Crust',
                        additionalPrice: 1.50
                    }
                ]
            }
        ],
        modifierGroups: [
            {
                id: 'mg1',
                name: 'Premium Toppings',
                options: [
                    {
                        id: 'mo1',
                        name: 'Extra Cheese',
                        price: 1.50
                    },
                    {
                        id: 'mo2',
                        name: 'Pepperoni',
                        price: 2.00
                    },
                    {
                        id: 'mo3',
                        name: 'Mushrooms',
                        price: 1.20
                    },
                    {
                        id: 'mo4',
                        name: 'Grilled Chicken',
                        price: 2.50
                    },
                    {
                        id: 'mo5',
                        name: 'Black Olives',
                        price: 0.80
                    }
                ]
            },
            {
                id: 'mg2',
                name: 'Add-ons',
                options: [
                    {
                        id: 'mo6',
                        name: 'Dipping Sauce',
                        price: 0.50
                    },
                    {
                        id: 'mo7',
                        name: 'Coke 330ml',
                        price: 2.50
                    },
                    {
                        id: 'mo8',
                        name: 'Garlic Dip',
                        price: 0.75
                    }
                ]
            }
        ],
        isVeg: true,
        isAvailable: true,
        isFavorite: true,
        isTopItem: true,
        barcode: '12345678901'
    },
    {
        id: 'p2',
        name: 'Pepperoni Feast',
        price: 14.99,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
        sku: 'PZ-PEP-001',
        hasVariants: true,
        variantGroups: [
            {
                id: 'vg3',
                name: 'Portion Type',
                options: [
                    {
                        id: 'vo7',
                        name: 'Half (2 Slices)',
                        additionalPrice: 0
                    },
                    {
                        id: 'vo8',
                        name: 'Full (4 Slices)',
                        additionalPrice: 5.50
                    }
                ]
            }
        ],
        isVeg: false,
        isAvailable: true,
        isTopItem: true,
        barcode: '12345678902'
    },
    {
        id: 'p3',
        name: 'Veggie Supreme',
        price: 13.99,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        sku: 'PZ-VEG-001',
        hasVariants: true,
        variantGroups: [
            {
                id: 'vg1',
                name: 'Size',
                options: [
                    {
                        id: 'vo1',
                        name: 'Regular 8"',
                        additionalPrice: 0
                    },
                    {
                        id: 'vo2',
                        name: 'Medium 10"',
                        additionalPrice: 3.50
                    },
                    {
                        id: 'vo3',
                        name: 'Large 12"',
                        additionalPrice: 6.00
                    }
                ]
            },
            {
                id: 'vg2',
                name: 'Crust',
                options: [
                    {
                        id: 'vo4',
                        name: 'Classic Thin',
                        additionalPrice: 0
                    },
                    {
                        id: 'vo5',
                        name: 'Cheese Burst',
                        additionalPrice: 2.50
                    }
                ]
            }
        ],
        isVeg: true,
        isAvailable: true,
        isFavorite: true,
        ingredients: [
            'Tomato Sauce',
            'Mozzarella',
            'Bell Peppers',
            'Onions',
            'Olives',
            'Mushrooms'
        ],
        modifierGroups: [
            {
                id: 'mg1',
                name: 'Premium Toppings',
                options: [
                    {
                        id: 'mo1',
                        name: 'Extra Cheese',
                        price: 1.50
                    },
                    {
                        id: 'mo2',
                        name: 'Bell Peppers',
                        price: 1.20
                    },
                    {
                        id: 'mo3',
                        name: 'Baby Corn',
                        price: 1.80
                    },
                    {
                        id: 'mo4',
                        name: 'Jalapenos',
                        price: 1.00
                    }
                ]
            },
            {
                id: 'mg3',
                name: 'Crust Extras',
                options: [
                    {
                        id: 'mo10',
                        name: 'Garlic Butter Crust',
                        price: 0.75
                    },
                    {
                        id: 'mo11',
                        name: 'Sesame Crust',
                        price: 0.50
                    }
                ]
            }
        ]
    },
    {
        id: 'p10',
        name: 'Pizza Duo Combo',
        price: 24.99,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        sku: 'CB-PIZ-002',
        hasVariants: true,
        isCombo: true,
        isVeg: false,
        isAvailable: true,
        variantGroups: [
            {
                id: 'vg4',
                name: 'Shared Size',
                options: [
                    {
                        id: 'vo10',
                        name: 'Medium Duo',
                        additionalPrice: 0
                    },
                    {
                        id: 'vo11',
                        name: 'Large Duo',
                        additionalPrice: 8.00
                    }
                ]
            }
        ],
        comboSlots: [
            {
                id: 'cs1',
                name: 'Pizza 1',
                allowedCategoryIds: [
                    'pizza'
                ]
            },
            {
                id: 'cs2',
                name: 'Pizza 2',
                allowedCategoryIds: [
                    'pizza'
                ]
            }
        ]
    },
    {
        id: 'p4',
        name: 'Classic Burger',
        price: 8.99,
        categoryId: 'burger',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
        sku: 'BG-CLS-001',
        hasVariants: true,
        isVeg: false,
        isAvailable: true,
        barcode: '12345678904'
    },
    {
        id: 'p5',
        name: 'Cheese Burger',
        price: 9.99,
        categoryId: 'burger',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
        sku: 'BG-CHS-001',
        hasVariants: true,
        isVeg: false,
        isAvailable: true,
        barcode: '12345678904'
    },
    {
        id: 'p6',
        name: 'Coca Cola',
        price: 2.50,
        categoryId: 'drinks',
        image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80',
        sku: 'DR-COC-001',
        hasVariants: false,
        isVeg: true,
        isAvailable: true,
        isTopItem: true
    },
    {
        id: 'p7',
        name: 'French Fries',
        price: 3.99,
        categoryId: 'sides',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
        sku: 'SD-FRS-001',
        hasVariants: false,
        isVeg: true,
        isAvailable: true
    },
    {
        id: 'p8',
        name: 'Chocolate Cake',
        price: 5.99,
        categoryId: 'dessert',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
        sku: 'DS-CHC-001',
        hasVariants: false,
        isVeg: true,
        isAvailable: true
    },
    {
        id: 'p9',
        name: 'Spicy Paneer Burger',
        price: 10.99,
        categoryId: 'burger',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        sku: 'BG-PNR-001',
        hasVariants: false,
        isVeg: true,
        isAvailable: true
    },
    {
        id: 'p11',
        name: 'Garlic Bread',
        price: 4.99,
        categoryId: 'sides',
        image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80',
        sku: 'SD-GRL-001',
        hasVariants: false,
        isVeg: true,
        isAvailable: true,
        isOnHold: true
    },
    {
        id: 'p_combo1',
        name: 'Family Feast Combo',
        price: 49.99,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        sku: 'CB-FAM-001',
        isAvailable: true,
        isCombo: true,
        isTopItem: true,
        isVeg: true,
        hasVariants: false,
        ingredients: [
            '2 Large Pizzas',
            '1 Side',
            '1 Beverage'
        ],
        slots: [
            {
                id: 'SLOT1',
                name: 'Main Pizza',
                required: true,
                options: [
                    {
                        id: 'P1',
                        name: 'Margherita Pizza',
                        price: 0,
                        image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        id: 'P2',
                        name: 'Pepperoni Pizza',
                        price: 2.00,
                        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                variantGroups: [
                    {
                        id: 'SIZE1',
                        name: 'Size',
                        required: true,
                        options: [
                            {
                                id: 'S',
                                name: 'Small',
                                additionalPrice: -3.00
                            },
                            {
                                id: 'M',
                                name: 'Medium',
                                additionalPrice: 0
                            },
                            {
                                id: 'L',
                                name: 'Large',
                                additionalPrice: 3.00
                            }
                        ]
                    }
                ]
            },
            {
                id: 'SLOT2',
                name: 'Side Item',
                required: true,
                options: [
                    {
                        id: 'FRIES',
                        name: 'French Fries',
                        price: 0,
                        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        id: 'WINGS',
                        name: 'Chicken Wings',
                        price: 2.50,
                        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80'
                    }
                ]
            }
        ]
    },
    {
        id: 'o1',
        name: '10% Off Orders over $50',
        price: 0,
        categoryId: 'offers',
        sku: 'OFFER-10',
        isAvailable: true,
        image: '',
        isVeg: true,
        ingredients: [
            'Auto-applied at checkout',
            'Minimum value $50'
        ],
        hasVariants: false
    },
    {
        id: 'o2',
        name: 'BOGO Pizza (Monday Special)',
        price: 0,
        categoryId: 'offers',
        sku: 'OFFER-BOGO',
        isAvailable: true,
        image: '',
        isVeg: true,
        ingredients: [
            'Buy one get one free',
            'Select pizzas only'
        ],
        hasVariants: false
    }
];
const POSMenuScreen = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { cart, addToCart, removeFromCart, updateQuantity, updateCartItem, clearCart, cartTotal, selectedCustomer, isOffline, session, setStore, setChannel, deliveryAddress, setDeliveryAddress, incomingCall } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePOS"])();
    // UI States
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [isDiscountModalOpen, setIsDiscountModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customizationProduct, setCustomizationProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingCartItem, setEditingCartItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCustomizationModalOpen, setIsCustomizationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPizzaModalOpen, setIsPizzaModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCustomerManagementOpen, setIsCustomerManagementOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFulfillmentDropdownOpen, setIsFulfillmentDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSMenuScreen.useEffect": ()=>{
            const handleClickOutside = {
                "POSMenuScreen.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsFulfillmentDropdownOpen(false);
                    }
                }
            }["POSMenuScreen.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "POSMenuScreen.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["POSMenuScreen.useEffect"];
        }
    }["POSMenuScreen.useEffect"], []);
    // Pricing States
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-open on incoming call for Call Center
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSMenuScreen.useEffect": ()=>{
            if (session?.posType === 'CALL_CENTER' && incomingCall && incomingCall.customerId) {
            // setIsProfileOpen(true);
            }
        }
    }["POSMenuScreen.useEffect"], [
        incomingCall,
        session?.posType
    ]);
    // Validation: Require table for Dine-In
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSMenuScreen.useEffect": ()=>{
            if (session?.channel === 'Dine-In' && !session.activeTable) {
                router.push('/pos/table-selection');
            }
        }
    }["POSMenuScreen.useEffect"], [
        session?.channel,
        session?.activeTable,
        router
    ]);
    // Barcode Scanner Auto-Focus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSMenuScreen.useEffect": ()=>{
            const handleKeyDown = {
                "POSMenuScreen.useEffect.handleKeyDown": (e)=>{
                    // If not typing in another input, focus the search bar
                    if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
                        if (e.key.length === 1 || e.key === 'Enter') {
                            searchRef.current?.focus();
                        }
                    }
                }
            }["POSMenuScreen.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "POSMenuScreen.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["POSMenuScreen.useEffect"];
        }
    }["POSMenuScreen.useEffect"], []);
    /* 
    const handleUpdateNotes = (notes: string) => {
        if (selectedCustomer) {
            updateCustomer(selectedCustomer.id, { notes });
        }
    };

    const handleSelectAddress = (addressId: string) => {
        if (selectedCustomer) {
            const addr = selectedCustomer.addresses.find(a => a.id === addressId);
            if (addr) {
                setDeliveryAddress({ id: addr.id, text: addr.text, label: addr.label });
            }
        }
    };
    */ // Optimized filtering
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSMenuScreen.useMemo[filteredProducts]": ()=>{
            return MOCK_PRODUCTS.filter({
                "POSMenuScreen.useMemo[filteredProducts]": (product)=>{
                    const matchesCategory = activeCategory === 'all' || product.categoryId === activeCategory;
                    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.sku.toLowerCase().includes(searchQuery.toLowerCase()) || product.barcode && product.barcode.includes(searchQuery);
                    let matchesFilter = true;
                    if (activeFilter === 'favorites') matchesFilter = !!product.isFavorite;
                    if (activeFilter === 'top') matchesFilter = !!product.isTopItem;
                    if (activeFilter === 'hold') matchesFilter = !!product.isOnHold;
                    return matchesCategory && matchesSearch && matchesFilter;
                }
            }["POSMenuScreen.useMemo[filteredProducts]"]);
        }
    }["POSMenuScreen.useMemo[filteredProducts]"], [
        activeCategory,
        searchQuery,
        activeFilter
    ]);
    const handleProductClick = (product)=>{
        if (!product.isAvailable) return;
        if (product.isCombo || product.variantGroups && product.variantGroups.length > 0 || product.modifierGroups && product.modifierGroups.length > 0) {
            setCustomizationProduct(product);
            setEditingCartItem(null);
            if (product.categoryId === 'pizza' && !product.isCombo) {
                setIsPizzaModalOpen(true);
            } else {
                setIsCustomizationModalOpen(true);
            }
            return;
        }
        addToCart({
            ...product,
            productId: product.id,
            quantity: 1,
            variants: [],
            modifiers: [],
            notes: ''
        });
    };
    const handleCustomizedAddToCart = (cartItem)=>{
        if (editingCartItem) {
            const updatedItem = {
                ...cartItem,
                id: editingCartItem.id
            };
            updateCartItem(editingCartItem.id, updatedItem);
            setEditingCartItem(null);
        } else {
            addToCart(cartItem);
        }
        setCustomizationProduct(null);
        setIsCustomizationModalOpen(false);
    };
    const handleEditItem = (item)=>{
        const product = MOCK_PRODUCTS.find((p)=>p.id === item.productId);
        if (product) {
            setEditingCartItem(item);
            setCustomizationProduct(product);
            if (product.categoryId === 'pizza' && !product.isCombo) {
                setIsPizzaModalOpen(true);
            } else {
                setIsCustomizationModalOpen(true);
            }
        }
    };
    const handleCheckout = ()=>{
        router.push('/pos/payment');
    };
    const handleSearchKeyDown = (e)=>{
        if (e.key === 'Enter' && filteredProducts.length > 0) {
            handleProductClick(filteredProducts[0]);
            setSearchQuery('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pos-screen",
        style: {
            display: 'flex',
            height: '100vh',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '220px',
                    background: 'var(--pos-bg-surface)',
                    borderRight: '1px solid var(--pos-border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '16px',
                            borderBottom: '1px solid var(--pos-border-subtle)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSBackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POSBackButton"], {
                            label: "EXIT",
                            onClick: ()=>router.push('/pos/dashboard'),
                            style: {
                                width: '100%',
                                height: '60px',
                                justifyContent: 'center'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                            lineNumber: 546,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                        lineNumber: 545,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: 'auto',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        },
                        className: "no-scrollbar",
                        children: MOCK_CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCategory(cat.id),
                                style: {
                                    width: '100%',
                                    minHeight: '64px',
                                    padding: '12px 16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    borderRadius: '16px',
                                    transition: 'all 0.2s',
                                    background: activeCategory === cat.id ? 'var(--pos-action-primary)' : 'var(--pos-bg-card)',
                                    color: activeCategory === cat.id ? 'white' : 'var(--pos-text-primary)',
                                    border: '1px solid var(--pos-border-subtle)',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '20px',
                                            minWidth: '40px',
                                            height: '40px',
                                            background: activeCategory === cat.id ? 'rgba(255,255,255,0.2)' : 'var(--pos-bg-main)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '10px'
                                        },
                                        children: cat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 582,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.01em',
                                            flex: 1,
                                            lineHeight: 1.2
                                        },
                                        children: cat.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 594,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeCategory === cat.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '4px',
                                            height: '24px',
                                            background: 'white',
                                            borderRadius: '2px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 605,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, cat.id, true, {
                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                lineNumber: 563,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                        lineNumber: 554,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                lineNumber: 536,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--pos-bg-main)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '16px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '24px',
                            borderBottom: '1px solid var(--pos-border-subtle)',
                            background: 'var(--pos-bg-surface)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            width: '200px',
                                            height: '60px',
                                            padding: '0 16px',
                                            background: 'var(--pos-action-primary)',
                                            borderRadius: '14px',
                                            border: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '12px',
                                            cursor: 'pointer',
                                            color: 'white',
                                            transition: 'all 0.2s',
                                            boxShadow: '0 4px 12px rgba(31, 164, 169, 0.2)'
                                        },
                                        className: "hover-scale",
                                        onClick: ()=>setIsCustomerManagementOpen(true),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                size: 20,
                                                color: "white",
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 643,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    textAlign: 'left',
                                                    lineHeight: '1.2'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 800,
                                                            color: 'rgba(255,255,255,0.8)',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.02em'
                                                        },
                                                        children: "Current Order"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 900,
                                                            color: 'white',
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            maxWidth: '130px'
                                                        },
                                                        children: selectedCustomer?.name || 'SELECT CUSTOMER'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 648,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 644,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 625,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isOffline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pos-badge pos-badge-warning",
                                        children: "OFFLINE MODE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 662,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative'
                                        },
                                        ref: dropdownRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsFulfillmentDropdownOpen(!isFulfillmentDropdownOpen),
                                                style: {
                                                    width: '200px',
                                                    height: '60px',
                                                    padding: '0 16px',
                                                    background: 'var(--pos-bg-card)',
                                                    borderRadius: '14px',
                                                    border: '1px solid var(--pos-border-subtle)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    gap: '10px',
                                                    cursor: 'pointer',
                                                    boxShadow: 'var(--pos-shadow-sm)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '10px'
                                                        },
                                                        children: [
                                                            session?.channel === 'Dine-In' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                                size: 20,
                                                                color: "#22C55E"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                lineNumber: 684,
                                                                columnNumber: 72
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            session?.channel === 'Pickup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                size: 20,
                                                                color: "var(--pos-action-primary)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 71
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            session?.channel === 'Delivery' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                size: 20,
                                                                color: "#F59E0B"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 73
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            session?.channel === 'Phone Order' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                size: 20,
                                                                color: "#6366F1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 76
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    textAlign: 'left',
                                                                    lineHeight: '1.2'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: '10px',
                                                                            fontWeight: 800,
                                                                            color: 'var(--pos-text-muted)',
                                                                            textTransform: 'uppercase',
                                                                            letterSpacing: '0.02em'
                                                                        },
                                                                        children: "Fulfillment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                        lineNumber: 689,
                                                                        columnNumber: 41
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: '14px',
                                                                            fontWeight: 900,
                                                                            color: 'var(--pos-text-primary)'
                                                                        },
                                                                        children: session?.channel || 'SELECT...'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                        lineNumber: 692,
                                                                        columnNumber: 41
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                lineNumber: 688,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            transform: isFulfillmentDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                            transition: 'transform 0.2s',
                                                            color: 'var(--pos-text-muted)'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                            lineNumber: 702,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 666,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isFulfillmentDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: '70px',
                                                    left: 0,
                                                    width: '220px',
                                                    background: 'var(--pos-bg-surface)',
                                                    border: '1px solid var(--pos-border-subtle)',
                                                    borderRadius: '16px',
                                                    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                                                    zIndex: 100,
                                                    padding: '8px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '4px',
                                                    animation: 'posFadeInUp 0.2s ease-out'
                                                },
                                                children: [
                                                    'Dine-In',
                                                    'Pickup',
                                                    'Delivery',
                                                    'Phone Order'
                                                ].map((channel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setChannel(channel);
                                                            setIsFulfillmentDropdownOpen(false);
                                                        },
                                                        style: {
                                                            padding: '12px 16px',
                                                            borderRadius: '10px',
                                                            border: 'none',
                                                            background: session?.channel === channel ? 'var(--pos-action-primary)10' : 'transparent',
                                                            color: session?.channel === channel ? 'var(--pos-action-primary)' : 'var(--pos-text-primary)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px',
                                                            fontSize: '14px',
                                                            fontWeight: 800,
                                                            cursor: 'pointer',
                                                            textAlign: 'left'
                                                        },
                                                        className: "hover-scale",
                                                        children: [
                                                            channel === 'Dine-In' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                lineNumber: 746,
                                                                columnNumber: 71
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            channel === 'Pickup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                lineNumber: 747,
                                                                columnNumber: 70
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            channel === 'Delivery' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                lineNumber: 748,
                                                                columnNumber: 72
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            channel === 'Phone Order' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                lineNumber: 749,
                                                                columnNumber: 75
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            channel,
                                                            session?.channel === channel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 16,
                                                                style: {
                                                                    marginLeft: 'auto'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                                lineNumber: 751,
                                                                columnNumber: 78
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, channel, true, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 707,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 665,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    session?.channel === 'Dine-In' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/pos/table-selection'),
                                        style: {
                                            width: '180px',
                                            height: '60px',
                                            padding: '0 16px',
                                            background: session.activeTable ? 'rgba(16, 185, 129, 0.1)' : 'var(--pos-bg-card)',
                                            borderRadius: '14px',
                                            border: session.activeTable ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid var(--pos-border-subtle)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            cursor: 'pointer',
                                            boxShadow: 'var(--pos-shadow-sm)'
                                        },
                                        className: "hover-scale active-pop",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '8px',
                                                    background: session.activeTable ? '#10B981' : 'var(--pos-bg-main)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                    size: 16,
                                                    color: session.activeTable ? 'white' : 'var(--pos-text-muted)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 777,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    textAlign: 'left',
                                                    lineHeight: '1.2'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 800,
                                                            color: 'var(--pos-text-muted)',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.02em'
                                                        },
                                                        children: "Table"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 900,
                                                            color: session.activeTable ? '#10B981' : 'var(--pos-text-primary)'
                                                        },
                                                        children: session.activeTable?.name || 'SELECT TABLE'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 792,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 788,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 760,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    session?.deliveryAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '60px',
                                            padding: '0 20px',
                                            background: 'rgba(16, 185, 129, 0.1)',
                                            borderRadius: '14px',
                                            border: '1px solid rgba(16, 185, 129, 0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                size: 16,
                                                color: "#10B981"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 810,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 700,
                                                            color: '#10B981',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "Delivery To"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 812,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 700,
                                                            color: 'var(--pos-text-primary)'
                                                        },
                                                        children: session.deliveryAddress.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 813,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 811,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 800,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                lineNumber: 624,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    flex: 1,
                                    maxWidth: '800px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/pos/refund-management'),
                                        style: {
                                            width: '200px',
                                            height: '60px',
                                            padding: '0 16px',
                                            background: 'var(--pos-state-error)',
                                            color: 'white',
                                            borderRadius: '14px',
                                            border: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            fontSize: '15px',
                                            fontWeight: 900,
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)',
                                            whiteSpace: 'nowrap'
                                        },
                                        className: "hover-scale",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                size: 20,
                                                color: "white",
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 843,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    textAlign: 'left',
                                                    lineHeight: '1.2'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 800,
                                                            color: 'rgba(255,255,255,0.8)',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.02em'
                                                        },
                                                        children: "Terminal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 845,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 900,
                                                            color: 'white'
                                                        },
                                                        children: "REFUNDS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 848,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 844,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 820,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 22,
                                                color: "var(--pos-text-muted)",
                                                style: {
                                                    position: 'absolute',
                                                    left: '20px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 855,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: searchRef,
                                                type: "text",
                                                placeholder: "Search by Name / SKU / Barcode",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                onKeyDown: handleSearchKeyDown,
                                                className: "pos-input",
                                                style: {
                                                    height: '60px',
                                                    width: '100%',
                                                    paddingLeft: '56px',
                                                    paddingRight: '20px',
                                                    background: 'var(--pos-bg-card)',
                                                    borderRadius: '14px',
                                                    border: '1px solid var(--pos-border-subtle)',
                                                    fontSize: '18px',
                                                    fontWeight: 700,
                                                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
                                                    color: 'var(--pos-text-primary)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 856,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 854,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                lineNumber: 819,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                        lineNumber: 615,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '0 24px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: 'var(--pos-bg-surface)',
                            borderBottom: '1px solid var(--pos-border-subtle)'
                        },
                        children: [
                            {
                                id: 'all',
                                label: 'All Items'
                            },
                            {
                                id: 'favorites',
                                label: 'Favorites'
                            },
                            {
                                id: 'top',
                                label: 'Top Items'
                            },
                            {
                                id: 'hold',
                                label: 'On Hold'
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFilter(tab.id),
                                style: {
                                    padding: '12px 24px',
                                    borderRadius: '12px',
                                    background: activeFilter === tab.id ? 'var(--pos-action-primary)' : 'var(--pos-bg-card)',
                                    color: activeFilter === tab.id ? 'white' : 'var(--pos-text-secondary)',
                                    border: '1px solid var(--pos-border-subtle)',
                                    fontWeight: 800,
                                    fontSize: '14px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.02em',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    minWidth: '120px'
                                },
                                className: activeFilter === tab.id ? '' : 'hover-scale',
                                children: tab.label
                            }, tab.id, false, {
                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                lineNumber: 897,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                        lineNumber: 882,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            padding: '24px',
                            overflowY: 'auto'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pos-products-grid",
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                                gap: '20px'
                            },
                            children: filteredProducts.map((product)=>{
                                const isOutOfStock = !product.isAvailable;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: isOutOfStock,
                                    onClick: ()=>handleProductClick(product),
                                    className: `pos-card ${!isOutOfStock ? 'hover-scale' : ''}`,
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        background: isOutOfStock ? 'rgba(0,0,0,0.1)' : 'var(--pos-bg-surface)',
                                        border: '1px solid var(--pos-border-subtle)',
                                        borderRadius: '24px',
                                        textAlign: 'left',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        cursor: isOutOfStock ? 'not-allowed' : 'pointer',
                                        opacity: isOutOfStock ? 0.6 : 1,
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        padding: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '24px',
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '18px',
                                                            fontWeight: 900,
                                                            color: isOutOfStock ? 'var(--pos-text-muted)' : 'var(--pos-text-primary)',
                                                            margin: 0
                                                        },
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 955,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '18px',
                                                            fontWeight: 900,
                                                            color: isOutOfStock ? 'var(--pos-text-muted)' : 'var(--pos-action-primary)'
                                                        },
                                                        children: [
                                                            "$",
                                                            product.price.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 956,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 954,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    color: 'var(--pos-text-secondary)',
                                                    fontWeight: 600
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--pos-text-muted)',
                                                            fontWeight: 900,
                                                            textTransform: 'uppercase',
                                                            fontSize: '10px',
                                                            display: 'block',
                                                            marginBottom: '2px'
                                                        },
                                                        children: "Description:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 960,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    product.ingredients?.join(', ') || 'Standard recipe with high-quality ingredients'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 959,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    color: 'var(--pos-text-secondary)',
                                                    fontWeight: 600
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--pos-text-muted)',
                                                            fontWeight: 900,
                                                            textTransform: 'uppercase',
                                                            fontSize: '10px',
                                                            display: 'block',
                                                            marginBottom: '2px'
                                                        },
                                                        children: "Available Sizes:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    product.variantGroups?.find((g)=>g.name === 'Size')?.options.map((o)=>o.name).join(', ') || 'Regular'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 964,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: 'auto',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    paddingTop: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 900,
                                                            color: product.hasVariants ? 'var(--pos-action-primary)' : 'var(--pos-text-muted)',
                                                            textTransform: 'uppercase',
                                                            background: product.hasVariants ? 'rgba(31,164,169,0.1)' : 'transparent',
                                                            padding: '4px 8px',
                                                            borderRadius: '6px'
                                                        },
                                                        children: product.hasVariants ? 'Customizable' : 'Standard Item'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '11px',
                                                            color: 'var(--pos-text-muted)',
                                                            fontWeight: 700
                                                        },
                                                        children: product.sku
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                        lineNumber: 981,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 969,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isOutOfStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: '8px',
                                                    padding: '8px',
                                                    background: 'rgba(239, 68, 68, 0.1)',
                                                    color: '#EF4444',
                                                    borderRadius: '8px',
                                                    fontSize: '11px',
                                                    fontWeight: 900,
                                                    textAlign: 'center',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "Temporarily Unavailable"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                                lineNumber: 984,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                        lineNumber: 953,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, product.id, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                                    lineNumber: 932,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                            lineNumber: 924,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                        lineNumber: 923,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                lineNumber: 613,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSCartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POSCartPanel"], {
                cart: cart,
                onUpdateQuantity: updateQuantity,
                onRemoveItem: removeFromCart,
                onEditItem: handleEditItem,
                onClearCart: clearCart,
                onHoldOrder: ()=>{
                    // Logic to save order to 'Held' state would go here
                    clearCart();
                    router.push('/pos/dashboard');
                },
                total: cartTotal,
                onCheckout: handleCheckout,
                onUpdateItem: updateCartItem,
                channel: session?.channel,
                onChannelChange: setChannel,
                deliveryAddress: deliveryAddress,
                onAddressChange: setDeliveryAddress,
                selectedStore: session?.store,
                onStoreChange: setStore,
                availableStores: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockStores"]
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                lineNumber: 1007,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSDiscountModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isDiscountModalOpen,
                onClose: ()=>setIsDiscountModalOpen(false),
                subtotal: cartTotal,
                onApplyDiscount: (_type, _value)=>{
                    // Discount logic would be handled in the payment page
                    setIsDiscountModalOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                lineNumber: 1031,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSCustomizationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POSCustomizationModal"], {
                isOpen: isCustomizationModalOpen && !!customizationProduct,
                product: customizationProduct,
                initialItem: editingCartItem,
                onClose: ()=>{
                    setIsCustomizationModalOpen(false);
                    setCustomizationProduct(null);
                    setEditingCartItem(null);
                },
                onAddToCart: (item)=>{
                    handleCustomizedAddToCart(item);
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                lineNumber: 1041,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSPizzaModifierModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POSPizzaModifierModal"], {
                isOpen: isPizzaModalOpen && !!customizationProduct,
                product: customizationProduct,
                initialItem: editingCartItem,
                allProducts: MOCK_PRODUCTS,
                onClose: ()=>{
                    setIsPizzaModalOpen(false);
                    setCustomizationProduct(null);
                    setEditingCartItem(null);
                },
                onAddToCart: (item)=>{
                    if (editingCartItem) {
                        updateCartItem(editingCartItem.id, {
                            ...item,
                            id: editingCartItem.id
                        });
                    } else {
                        addToCart(item);
                    }
                    setIsPizzaModalOpen(false);
                    setCustomizationProduct(null);
                    setEditingCartItem(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                lineNumber: 1055,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSCustomerManagementModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POSCustomerManagementModal"], {
                isOpen: isCustomerManagementOpen,
                onClose: ()=>setIsCustomerManagementOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                lineNumber: 1077,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$ShiftOpeningModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShiftOpeningModal"], {}, void 0, false, {
                fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
                lineNumber: 1082,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/pages/POSMenuScreen.tsx",
        lineNumber: 533,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSMenuScreen, "RyMBW1d59ULrRR9VG6BV8rlrksc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePOS"]
    ];
});
_c = POSMenuScreen;
const __TURBOPACK__default__export__ = POSMenuScreen;
var _c;
__turbopack_context__.k.register(_c, "POSMenuScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_pos_pages_POSMenuScreen_tsx_2d746c8b._.js.map