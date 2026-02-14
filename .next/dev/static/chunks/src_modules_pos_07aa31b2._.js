(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/pos/components/POSBackButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSBackButton",
    ()=>POSBackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const POSBackButton = ({ onClick, label = 'BACK', style })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBack = ()=>{
        if (onClick) {
            onClick();
        } else {
            router.back();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleBack,
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '0 24px',
            height: '64px',
            background: 'var(--pos-bg-surface)',
            border: '1px solid var(--pos-border-subtle)',
            borderRadius: '16px',
            color: 'var(--pos-text-primary)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            fontWeight: 900,
            fontSize: '18px',
            textTransform: 'uppercase',
            zIndex: 100,
            ...style
        },
        className: "hover-scale",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                size: 28,
                strokeWidth: 3
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/POSBackButton.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/components/POSBackButton.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSBackButton, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = POSBackButton;
var _c;
__turbopack_context__.k.register(_c, "POSBackButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/pos/pages/RefundManagementPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefundManagementPage",
    ()=>RefundManagementPage,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSBackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/components/POSBackButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Mock data
const MOCK_ORDERS = [
    {
        id: 'ORD-5506',
        customer: 'Jessica Pearson',
        amount: 79.30,
        date: '2024-02-09',
        items: [
            {
                id: 'item-1',
                name: 'Large Pepperoni Pizza',
                price: 24.99,
                quantity: 2
            },
            {
                id: 'item-2',
                name: 'Chicken Wings',
                price: 12.99,
                quantity: 1
            },
            {
                id: 'item-3',
                name: 'Coca Cola',
                price: 2.50,
                quantity: 2
            },
            {
                id: 'item-4',
                name: 'Garlic Bread',
                price: 5.99,
                quantity: 1
            }
        ]
    },
    {
        id: 'ORD-5507',
        customer: 'Harvey Specter',
        amount: 45.50,
        date: '2024-02-09',
        items: [
            {
                id: 'item-5',
                name: 'Truffle Pizza',
                price: 28.50,
                quantity: 1
            },
            {
                id: 'item-6',
                name: 'Garlic Knots',
                price: 7.50,
                quantity: 2
            },
            {
                id: 'item-7',
                name: 'Sprite',
                price: 2.50,
                quantity: 1
            }
        ]
    },
    {
        id: 'ORD-5508',
        customer: 'Mike Ross',
        amount: 22.00,
        date: '2024-02-08',
        items: [
            {
                id: 'item-8',
                name: 'Margherita Pizza',
                price: 18.00,
                quantity: 1
            },
            {
                id: 'item-9',
                name: 'Iced Tea',
                price: 4.00,
                quantity: 1
            }
        ]
    }
];
const REFUND_REASONS = [
    'Incorrect Item',
    'Poor Quality',
    'Customer Changed Mind',
    'Order Cancelled',
    'Delayed Delivery',
    'Damaged Packaging',
    'Other'
];
const REFUND_METHODS = [
    'Original Payment Method',
    'Cash',
    'Store Credit (Gift Card)',
    'Bank Transfer'
];
const MOCK_REFUNDS = [
    {
        id: 'REF-001',
        orderId: 'ORD-5506',
        customer: 'Jessica Pearson',
        amount: 45.50,
        reason: 'Item Unavailable',
        approver: 'John Store Manager',
        date: '2024-02-09',
        items: [
            '2x Large Pepperoni Pizza'
        ],
        method: 'Original Payment Method'
    },
    {
        id: 'REF-002',
        orderId: 'ORD-5507',
        customer: 'Harvey Specter',
        amount: 22.00,
        reason: 'Customer Changed Mind',
        approver: 'Sarah Staff',
        date: '2024-02-08',
        items: [
            '1x Garlic Knots'
        ],
        method: 'Cash'
    }
];
const RefundManagementPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('create');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedOrder, setSelectedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRefund, setSelectedRefund] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [refundItems, setRefundItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [refundReason, setRefundReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(REFUND_REASONS[0]);
    const [refundMethod, setRefundMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(REFUND_METHODS[0]);
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refunds, setRefunds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MOCK_REFUNDS);
    // Get customer filter from URL
    const searchParams = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search) : "TURBOPACK unreachable";
    const filterCustomerId = searchParams?.get('customerId');
    const filterCustomerName = searchParams?.get('customerName');
    const totalRefundAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RefundManagementPage.useMemo[totalRefundAmount]": ()=>{
            if (!selectedOrder) return 0;
            return selectedOrder.items.reduce({
                "RefundManagementPage.useMemo[totalRefundAmount]": (acc, item)=>{
                    const qty = refundItems[item.id] || 0;
                    return acc + item.price * qty;
                }
            }["RefundManagementPage.useMemo[totalRefundAmount]"], 0);
        }
    }["RefundManagementPage.useMemo[totalRefundAmount]"], [
        selectedOrder,
        refundItems
    ]);
    const handleSelectOrder = (order)=>{
        setSelectedOrder(order);
        // Initialize with 0 items for refund (Partial Refund mode by default in many systems)
        // Or could initialize with all items for Full Refund
        const initialItems = {};
        setRefundItems(initialItems);
        setRefundReason(REFUND_REASONS[0]);
        setRefundMethod(REFUND_METHODS[0]);
    };
    const handleQuantityChange = (itemId, delta, max)=>{
        setRefundItems((prev)=>{
            const current = prev[itemId] || 0;
            const nextValue = Math.max(0, Math.min(max, current + delta));
            return {
                ...prev,
                [itemId]: nextValue
            };
        });
    };
    const handleFullRefund = ()=>{
        if (!selectedOrder) return;
        const allItems = {};
        selectedOrder.items.forEach((item)=>{
            allItems[item.id] = item.quantity;
        });
        setRefundItems(allItems);
    };
    // Filter orders by customer if customerId is provided
    const customerOrders = filterCustomerId ? MOCK_ORDERS.filter((order)=>order.customer === filterCustomerName) : MOCK_ORDERS;
    const filteredOrders = customerOrders.filter((order)=>order.id.toLowerCase().includes(searchQuery.toLowerCase()) || order.customer.toLowerCase().includes(searchQuery.toLowerCase()));
    // Filter refunds by customer if customerId is provided
    const customerRefunds = filterCustomerId ? refunds.filter((refund)=>refund.customer === filterCustomerName) : refunds;
    const filteredRefunds = customerRefunds.filter((refund)=>refund.orderId.toLowerCase().includes(searchQuery.toLowerCase()) || refund.customer.toLowerCase().includes(searchQuery.toLowerCase()) || refund.reason.toLowerCase().includes(searchQuery.toLowerCase()));
    const handleProcessRefund = ()=>{
        if (totalRefundAmount <= 0 || !refundReason || !selectedOrder) {
            alert('Please select items to refund and a reason');
            return;
        }
        const currentOrder = selectedOrder;
        setProcessing(true);
        setTimeout(()=>{
            const itemsSummary = currentOrder.items.filter((i)=>(refundItems[i.id] || 0) > 0).map((i)=>`${refundItems[i.id] || 0}x ${i.name}`);
            // Add new refund to state
            const newRefund = {
                id: `REF-${Math.floor(Math.random() * 90) + 100}`,
                orderId: currentOrder.id,
                customer: currentOrder.customer,
                amount: totalRefundAmount,
                reason: refundReason,
                approver: 'John Store Manager',
                date: new Date().toISOString().split('T')[0] ?? '',
                items: itemsSummary,
                method: refundMethod || 'Original Method'
            };
            setRefunds([
                newRefund,
                ...refunds
            ]);
            setProcessing(false);
            setShowSuccess(true);
            setTimeout(()=>{
                setShowSuccess(false);
                setSelectedOrder(null);
                setRefundItems({});
                setActiveTab('history');
            }, 2000);
        }, 1500);
    };
    if (showSuccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pos-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        maxWidth: '600px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '120px',
                                height: '120px',
                                background: 'var(--pos-bg-surface)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 32px',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                size: 70,
                                color: "var(--pos-state-success)"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 212,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                            lineNumber: 201,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: '48px',
                                fontWeight: 900,
                                color: 'var(--pos-text-primary)',
                                marginBottom: '16px'
                            },
                            children: "Refund Processed"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                            lineNumber: 214,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '18px',
                                color: 'var(--pos-text-secondary)',
                                fontWeight: 600,
                                marginBottom: '32px'
                            },
                            children: [
                                "$",
                                totalRefundAmount.toFixed(2),
                                " has been refunded successfully"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                            lineNumber: 217,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'var(--pos-bg-surface)',
                                borderRadius: '16px',
                                padding: '24px',
                                fontSize: '14px',
                                color: 'var(--pos-text-muted)',
                                fontWeight: 600
                            },
                            children: "Redirecting to refund history..."
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                            lineNumber: 220,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                    lineNumber: 200,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                lineNumber: 193,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
            lineNumber: 192,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pos-screen",
        style: {
            padding: '24px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$components$2f$POSBackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POSBackButton"], {}, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "pos-title-lg",
                                        children: "Refund Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 243,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '14px',
                                            color: 'var(--pos-text-secondary)',
                                            fontWeight: 600
                                        },
                                        children: "Process refunds and view history"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 244,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 242,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                        lineNumber: 240,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '8px',
                            background: 'var(--pos-bg-surface)',
                            padding: '4px',
                            borderRadius: '12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('create'),
                                style: {
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: activeTab === 'create' ? 'var(--pos-action-primary)' : 'transparent',
                                    color: activeTab === 'create' ? 'white' : 'var(--pos-text-secondary)',
                                    fontSize: '14px',
                                    fontWeight: 800,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                },
                                children: "CREATE REFUND"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 252,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('history'),
                                style: {
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: activeTab === 'history' ? 'var(--pos-action-primary)' : 'transparent',
                                    color: activeTab === 'history' ? 'white' : 'var(--pos-text-secondary)',
                                    fontSize: '14px',
                                    fontWeight: 800,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                },
                                children: "REFUND HISTORY"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 268,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                        lineNumber: 251,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                lineNumber: 239,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            filterCustomerId && filterCustomerName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '16px',
                    padding: '12px 20px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '2px solid var(--pos-action-primary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                size: 20,
                                color: "var(--pos-action-primary)"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 300,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '12px',
                                            fontWeight: 800,
                                            color: 'var(--pos-action-primary)',
                                            textTransform: 'uppercase'
                                        },
                                        children: "Viewing Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 302,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-primary)'
                                        },
                                        children: filterCustomerName
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 305,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 301,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                        lineNumber: 299,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/pos/refund-management'),
                        style: {
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: '2px solid var(--pos-action-primary)',
                            background: 'transparent',
                            color: 'var(--pos-action-primary)',
                            fontSize: '12px',
                            fontWeight: 800,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        },
                        className: "hover-scale",
                        children: "VIEW ALL"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                        lineNumber: 310,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                lineNumber: 289,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            activeTab === 'create' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '24px',
                    height: 'calc(100vh - 200px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 20,
                                        style: {
                                            position: 'absolute',
                                            left: '16px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: 'var(--pos-text-muted)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 337,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "pos-input",
                                        style: {
                                            paddingLeft: '48px',
                                            height: '56px'
                                        },
                                        placeholder: "Search by Order ID or Customer Name...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 338,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 336,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pos-card",
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: '16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: 800,
                                            color: 'var(--pos-text-muted)',
                                            marginBottom: '16px',
                                            textTransform: 'uppercase'
                                        },
                                        children: filterCustomerName ? `${filterCustomerName}'s Orders` : 'Recent Orders'
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 349,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '12px'
                                        },
                                        children: filteredOrders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleSelectOrder(order),
                                                style: {
                                                    padding: '16px',
                                                    borderRadius: '12px',
                                                    border: selectedOrder?.id === order.id ? '2px solid var(--pos-action-primary)' : '2px solid var(--pos-border-subtle)',
                                                    background: selectedOrder?.id === order.id ? 'rgba(59, 130, 246, 0.1)' : 'var(--pos-bg-surface)',
                                                    cursor: 'pointer',
                                                    textAlign: 'left',
                                                    transition: 'all 0.2s'
                                                },
                                                className: "hover-scale",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'start',
                                                            marginBottom: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '16px',
                                                                            fontWeight: 800,
                                                                            color: 'var(--pos-action-primary)'
                                                                        },
                                                                        children: order.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                        lineNumber: 370,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '14px',
                                                                            color: 'var(--pos-text-secondary)',
                                                                            fontWeight: 600
                                                                        },
                                                                        children: order.customer
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '18px',
                                                                    fontWeight: 900,
                                                                    color: 'var(--pos-text-primary)'
                                                                },
                                                                children: [
                                                                    "$",
                                                                    order.amount.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            color: 'var(--pos-text-muted)',
                                                            fontWeight: 600
                                                        },
                                                        children: order.items.map((i)=>`${i.quantity}x ${i.name}`).join(', ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, order.id, true, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 354,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 352,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 348,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                        lineNumber: 334,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pos-card",
                        style: {
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: selectedOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '24px',
                                        borderBottom: '1px solid var(--pos-border-subtle)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontSize: '20px',
                                                        fontWeight: 900,
                                                        color: 'var(--pos-text-primary)',
                                                        marginBottom: '8px'
                                                    },
                                                    children: "New Refund"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '14px',
                                                        color: 'var(--pos-text-secondary)',
                                                        fontWeight: 600
                                                    },
                                                    children: [
                                                        "Order: ",
                                                        selectedOrder.id,
                                                        " • ",
                                                        selectedOrder.customer
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                            lineNumber: 391,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleFullRefund,
                                            className: "pos-btn-secondary",
                                            style: {
                                                padding: '8px 16px',
                                                fontSize: '12px'
                                            },
                                            children: "FULL REFUND"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                            lineNumber: 399,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                    lineNumber: 390,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        padding: '24px',
                                        overflowY: 'auto'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '24px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '12px',
                                                        fontWeight: 800,
                                                        color: 'var(--pos-text-muted)',
                                                        marginBottom: '16px',
                                                        display: 'block',
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: "Select Items to Refund"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '12px'
                                                    },
                                                    children: selectedOrder.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                padding: '12px',
                                                                background: 'var(--pos-bg-surface)',
                                                                borderRadius: '12px',
                                                                border: (refundItems[item.id] || 0) > 0 ? '2px solid var(--pos-action-primary)' : '2px solid transparent'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        flex: 1
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                fontWeight: 800,
                                                                                color: 'var(--pos-text-primary)'
                                                                            },
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                            lineNumber: 429,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '12px',
                                                                                color: 'var(--pos-text-secondary)',
                                                                                fontWeight: 600
                                                                            },
                                                                            children: [
                                                                                "$",
                                                                                item.price.toFixed(2),
                                                                                " • Max: ",
                                                                                item.quantity
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                            lineNumber: 430,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                    lineNumber: 428,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '16px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: '8px',
                                                                                background: 'rgba(0,0,0,0.1)',
                                                                                padding: '4px',
                                                                                borderRadius: '8px'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleQuantityChange(item.id, -1, item.quantity),
                                                                                    style: {
                                                                                        width: '32px',
                                                                                        height: '32px',
                                                                                        borderRadius: '6px',
                                                                                        border: 'none',
                                                                                        background: 'var(--pos-bg-surface)',
                                                                                        color: 'var(--pos-text-primary)',
                                                                                        cursor: 'pointer'
                                                                                    },
                                                                                    children: "-"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                                    lineNumber: 437,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: '16px',
                                                                                        fontWeight: 900,
                                                                                        minWidth: '24px',
                                                                                        textAlign: 'center'
                                                                                    },
                                                                                    children: refundItems[item.id] || 0
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                                    lineNumber: 441,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleQuantityChange(item.id, 1, item.quantity),
                                                                                    style: {
                                                                                        width: '32px',
                                                                                        height: '32px',
                                                                                        borderRadius: '6px',
                                                                                        border: 'none',
                                                                                        background: 'var(--pos-bg-surface)',
                                                                                        color: 'var(--pos-text-primary)',
                                                                                        cursor: 'pointer'
                                                                                    },
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                                    lineNumber: 444,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                            lineNumber: 436,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '16px',
                                                                                fontWeight: 900,
                                                                                color: 'var(--pos-text-primary)',
                                                                                minWidth: '70px',
                                                                                textAlign: 'right'
                                                                            },
                                                                            children: [
                                                                                "$",
                                                                                ((refundItems[item.id] || 0) * item.price).toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                            lineNumber: 449,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                            lineNumber: 410,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: '20px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                fontSize: '12px',
                                                                fontWeight: 800,
                                                                color: 'var(--pos-text-muted)',
                                                                marginBottom: '8px',
                                                                display: 'block',
                                                                textTransform: 'uppercase'
                                                            },
                                                            children: "Refund Reason"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "pos-input",
                                                            value: refundReason,
                                                            onChange: (e)=>setRefundReason(e.target.value),
                                                            style: {
                                                                height: '48px'
                                                            },
                                                            children: REFUND_REASONS.map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: reason,
                                                                    children: reason
                                                                }, reason, false, {
                                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                fontSize: '12px',
                                                                fontWeight: 800,
                                                                color: 'var(--pos-text-muted)',
                                                                marginBottom: '8px',
                                                                display: 'block',
                                                                textTransform: 'uppercase'
                                                            },
                                                            children: "Refund Method"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "pos-input",
                                                            value: refundMethod,
                                                            onChange: (e)=>setRefundMethod(e.target.value),
                                                            style: {
                                                                height: '48px'
                                                            },
                                                            children: REFUND_METHODS.map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: method,
                                                                    children: method
                                                                }, method, false, {
                                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                            lineNumber: 458,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                    lineNumber: 408,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '24px',
                                        borderTop: '1px solid var(--pos-border-subtle)',
                                        background: 'rgba(0,0,0,0.05)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginBottom: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '16px',
                                                        fontWeight: 800,
                                                        color: 'var(--pos-text-secondary)'
                                                    },
                                                    children: "Total Refund"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '32px',
                                                        fontWeight: 900,
                                                        color: 'var(--pos-state-error)'
                                                    },
                                                    children: [
                                                        "$",
                                                        totalRefundAmount.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                            lineNumber: 496,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleProcessRefund,
                                            disabled: totalRefundAmount <= 0 || processing,
                                            className: "pos-btn pos-btn-primary",
                                            style: {
                                                width: '100%',
                                                background: totalRefundAmount > 0 ? 'var(--pos-state-error)' : 'var(--pos-bg-surface)',
                                                color: totalRefundAmount > 0 ? 'white' : 'var(--pos-text-muted)',
                                                cursor: totalRefundAmount > 0 ? 'pointer' : 'not-allowed',
                                                height: '64px',
                                                fontSize: '18px'
                                            },
                                            children: processing ? 'PROCESSING...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "CONFIRM REFUND"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                            lineNumber: 503,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                    lineNumber: 495,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '48px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 64,
                                    color: "var(--pos-text-muted)",
                                    style: {
                                        opacity: 0.3,
                                        marginBottom: '16px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                    lineNumber: 529,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '18px',
                                        fontWeight: 800,
                                        color: 'var(--pos-text-muted)',
                                        marginBottom: '8px'
                                    },
                                    children: "Select an Order"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                    lineNumber: 530,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '14px',
                                        color: 'var(--pos-text-muted)',
                                        textAlign: 'center'
                                    },
                                    children: "Choose an order from the list to process a refund"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                    lineNumber: 533,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                            lineNumber: 528,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                        lineNumber: 387,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                lineNumber: 332,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            activeTab === 'history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: selectedRefund ? '1fr 1fr' : '1fr',
                    gap: '24px',
                    height: 'calc(100vh - 200px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 20,
                                        style: {
                                            position: 'absolute',
                                            left: '16px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: 'var(--pos-text-muted)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 549,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "pos-input",
                                        style: {
                                            paddingLeft: '48px',
                                            height: '56px'
                                        },
                                        placeholder: "Search refunds...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 550,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 548,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pos-card",
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: '0'
                                },
                                children: filteredRefunds.map((refund, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedRefund(refund),
                                        style: {
                                            width: '100%',
                                            padding: '20px 24px',
                                            borderBottom: index < filteredRefunds.length - 1 ? '1px solid var(--pos-border-subtle)' : 'none',
                                            background: selectedRefund?.id === refund.id ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
                                            border: 'none',
                                            borderLeft: selectedRefund?.id === refund.id ? '4px solid var(--pos-action-primary)' : '4px solid transparent',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        },
                                        className: "hover-scale",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'start',
                                                    marginBottom: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '14px',
                                                                    fontWeight: 800,
                                                                    color: 'var(--pos-action-primary)'
                                                                },
                                                                children: refund.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 580,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    color: 'var(--pos-text-secondary)',
                                                                    fontWeight: 600
                                                                },
                                                                children: [
                                                                    "Order: ",
                                                                    refund.orderId
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 581,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'right'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '18px',
                                                                    fontWeight: 900,
                                                                    color: 'var(--pos-state-error)'
                                                                },
                                                                children: [
                                                                    "-$",
                                                                    refund.amount.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 584,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '12px',
                                                                    color: 'var(--pos-text-muted)',
                                                                    fontWeight: 600
                                                                },
                                                                children: refund.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 587,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 578,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '13px',
                                                    color: 'var(--pos-text-secondary)',
                                                    fontWeight: 600,
                                                    marginBottom: '4px'
                                                },
                                                children: refund.customer
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 592,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    color: 'var(--pos-text-muted)',
                                                    fontWeight: 600
                                                },
                                                children: refund.reason
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 595,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedRefund?.id !== refund.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 16,
                                                style: {
                                                    position: 'absolute',
                                                    right: '16px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    color: 'var(--pos-text-muted)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 599,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, refund.id, true, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 562,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 560,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                        lineNumber: 546,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    selectedRefund && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pos-card",
                        style: {
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px',
                                    borderBottom: '1px solid var(--pos-border-subtle)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'start'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: '20px',
                                                    fontWeight: 900,
                                                    color: 'var(--pos-text-primary)',
                                                    marginBottom: '8px'
                                                },
                                                children: "Refund Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 611,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '14px',
                                                    color: 'var(--pos-text-secondary)',
                                                    fontWeight: 600
                                                },
                                                children: selectedRefund.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 614,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 610,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedRefund(null),
                                        className: "pos-icon-btn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                            lineNumber: 622,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 618,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 609,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    padding: '24px',
                                    overflowY: 'auto'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(239, 68, 68, 0.1)',
                                            border: '2px solid var(--pos-state-error)',
                                            borderRadius: '16px',
                                            padding: '24px',
                                            textAlign: 'center',
                                            marginBottom: '24px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    color: 'var(--pos-state-error)',
                                                    fontWeight: 800,
                                                    marginBottom: '8px',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "Refunded Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 636,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '48px',
                                                    fontWeight: 900,
                                                    color: 'var(--pos-state-error)',
                                                    lineHeight: 1
                                                },
                                                children: [
                                                    "$",
                                                    selectedRefund.amount.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 639,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 628,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '16px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 800,
                                                            color: 'var(--pos-text-muted)',
                                                            marginBottom: '8px',
                                                            textTransform: 'uppercase',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 648,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Order ID"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 647,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '16px',
                                                            fontWeight: 700,
                                                            color: 'var(--pos-text-primary)'
                                                        },
                                                        children: selectedRefund.orderId
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 650,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 646,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 800,
                                                            color: 'var(--pos-text-muted)',
                                                            marginBottom: '8px',
                                                            textTransform: 'uppercase',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 657,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Customer"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '16px',
                                                            fontWeight: 700,
                                                            color: 'var(--pos-text-primary)'
                                                        },
                                                        children: selectedRefund.customer
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 655,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 800,
                                                            color: 'var(--pos-text-muted)',
                                                            marginBottom: '8px',
                                                            textTransform: 'uppercase',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 666,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Date"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 665,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '16px',
                                                            fontWeight: 700,
                                                            color: 'var(--pos-text-primary)'
                                                        },
                                                        children: selectedRefund.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 668,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 664,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 800,
                                                            color: 'var(--pos-text-muted)',
                                                            marginBottom: '8px',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "Reason"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 600,
                                                            color: 'var(--pos-text-secondary)',
                                                            padding: '12px',
                                                            background: 'var(--pos-bg-surface)',
                                                            borderRadius: '8px'
                                                        },
                                                        children: selectedRefund.reason
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 677,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 673,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 800,
                                                            color: 'var(--pos-text-muted)',
                                                            marginBottom: '8px',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "Refunded Items"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '8px'
                                                        },
                                                        children: selectedRefund.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '14px',
                                                                    fontWeight: 600,
                                                                    color: 'var(--pos-text-secondary)',
                                                                    padding: '12px',
                                                                    background: 'var(--pos-bg-surface)',
                                                                    borderRadius: '8px'
                                                                },
                                                                children: item
                                                            }, idx, false, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 688,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 686,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 682,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 800,
                                                            color: 'var(--pos-text-muted)',
                                                            marginBottom: '8px',
                                                            textTransform: 'uppercase',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                                lineNumber: 697,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Approved By"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '16px',
                                                            fontWeight: 700,
                                                            color: 'var(--pos-text-primary)'
                                                        },
                                                        children: selectedRefund.approver
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                        lineNumber: 699,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                                lineNumber: 695,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                        lineNumber: 645,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                                lineNumber: 626,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                        lineNumber: 608,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
                lineNumber: 544,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/pages/RefundManagementPage.tsx",
        lineNumber: 237,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RefundManagementPage, "9ezKDBTo4enaFyjONET6usepQ+Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RefundManagementPage;
const __TURBOPACK__default__export__ = RefundManagementPage;
var _c;
__turbopack_context__.k.register(_c, "RefundManagementPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_pos_07aa31b2._.js.map