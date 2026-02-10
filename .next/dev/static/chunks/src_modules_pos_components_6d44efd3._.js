(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/pos/components/POSDiscountModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSDiscountModal",
    ()=>POSDiscountModal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/percent.js [app-client] (ecmascript) <export default as Percent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const mockCoupons = [
    {
        code: 'SAVE10',
        description: '10% off orders above $50',
        type: 'percentage',
        value: 10,
        minOrder: 50
    },
    {
        code: 'FREESHIP',
        description: 'Free delivery',
        type: 'amount',
        value: 5.99,
        minOrder: 40
    },
    {
        code: 'COMBO20',
        description: '20% off combos',
        type: 'percentage',
        value: 20,
        minOrder: 0,
        disabled: true
    }
];
const POSDiscountModal = ({ isOpen, onClose, onApplyDiscount })=>{
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('COUPON');
    const [discountType, setDiscountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('percentage');
    const [discountValue, setDiscountValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [couponCode, setCouponCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [managerPin, setManagerPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPinInput, setShowPinInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    const handleNumpadClick = (value)=>{
        if (showPinInput) {
            if (value === 'C') setManagerPin('');
            else if (value !== '.') setManagerPin((prev)=>(prev + value).slice(0, 4));
            return;
        }
        if (value === 'C') {
            setDiscountValue('');
        } else if (value === '.') {
            if (!discountValue.includes('.')) {
                setDiscountValue((prev)=>prev + value);
            }
        } else {
            setDiscountValue((prev)=>prev + value);
        }
    };
    const handleApplyManual = ()=>{
        const val = parseFloat(discountValue);
        if (isNaN(val) || val <= 0) return;
        // Requirement: Manager Approval for >10% or Manual
        // "Manual discount: Manager PIN required" per spec
        if (!showPinInput) {
            setShowPinInput(true);
            return;
        }
        // Validate PIN (Mock check)
        if (managerPin === '1234') {
            onApplyDiscount(discountType, val);
            onClose();
        } else {
            alert('Invalid Manager PIN'); // In real app, toast
            setManagerPin('');
        }
    };
    const handleApplyCoupon = (coupon)=>{
        if (coupon.disabled) return;
        onApplyDiscount(coupon.type, coupon.value, coupon.code);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pos-modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pos-modal",
            style: {
                width: '700px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pos-title-md",
                            style: {
                                fontWeight: 700
                            },
                            children: "Apply Discount"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "pos-btn-secondary",
                            onClick: onClose,
                            style: {
                                width: '40px',
                                height: '40px',
                                padding: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-modal-body",
                    style: {
                        padding: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                borderBottom: '1px solid var(--pos-border-subtle)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMode('COUPON');
                                        setShowPinInput(false);
                                    },
                                    style: {
                                        flex: 1,
                                        padding: '16px',
                                        background: mode === 'COUPON' ? 'var(--pos-action-primary)' : 'transparent',
                                        color: mode === 'COUPON' ? 'white' : 'var(--pos-text-secondary)',
                                        border: 'none',
                                        fontWeight: 700,
                                        cursor: 'pointer'
                                    },
                                    children: "AVAILABLE COUPONS"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMode('MANUAL');
                                        setShowPinInput(false);
                                    },
                                    style: {
                                        flex: 1,
                                        padding: '16px',
                                        background: mode === 'MANUAL' ? 'var(--pos-action-primary)' : 'transparent',
                                        color: mode === 'MANUAL' ? 'white' : 'var(--pos-text-secondary)',
                                        border: 'none',
                                        fontWeight: 700,
                                        cursor: 'pointer'
                                    },
                                    children: "MANUAL DISCOUNT"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '24px'
                            },
                            children: mode === 'COUPON' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    mockCoupons.map((coupon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '16px',
                                                borderRadius: '12px',
                                                background: 'var(--pos-bg-card)',
                                                border: '1px solid var(--pos-border-subtle)',
                                                opacity: coupon.disabled ? 0.5 : 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '8px',
                                                                marginBottom: '4px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                    size: 16,
                                                                    color: "var(--pos-action-primary)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontWeight: 800,
                                                                        color: 'var(--pos-text-primary)'
                                                                    },
                                                                    children: coupon.code
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '13px',
                                                                color: 'var(--pos-text-secondary)'
                                                            },
                                                            children: coupon.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: 'right'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontWeight: 800,
                                                                color: 'var(--pos-action-primary)',
                                                                marginBottom: '8px'
                                                            },
                                                            children: [
                                                                coupon.type === 'amount' ? '-' : '',
                                                                "$",
                                                                coupon.value,
                                                                coupon.type === 'percentage' ? '%' : ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        !coupon.disabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleApplyCoupon(coupon),
                                                            className: "pos-btn-secondary",
                                                            style: {
                                                                padding: '4px 12px',
                                                                minHeight: '32px',
                                                                fontSize: '12px'
                                                            },
                                                            children: "APPLY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '10px',
                                                                color: 'var(--pos-state-error)'
                                                            },
                                                            children: "NOT APPLICABLE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, coupon.code, true, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 129,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '24px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    fontSize: '12px',
                                                    color: 'var(--pos-text-muted)',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase'
                                                },
                                                children: "Enter Coupon Code"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 169,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '12px',
                                                    marginTop: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "pos-input",
                                                        placeholder: "CODE",
                                                        value: couponCode,
                                                        onChange: (e)=>setCouponCode(e.target.value.toUpperCase())
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "pos-btn pos-btn-primary",
                                                        children: "APPLY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 170,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                        lineNumber: 168,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                lineNumber: 127,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : // MANUAL MODE
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: showPinInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center',
                                        maxWidth: '300px',
                                        margin: '0 auto'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            size: 48,
                                            className: "mb-4 text-warning",
                                            style: {
                                                margin: '0 auto 16px',
                                                color: '#F59E0B'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 187,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "pos-title-md",
                                            style: {
                                                marginBottom: '8px'
                                            },
                                            children: "Manager Approval Required"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 188,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--pos-text-muted)',
                                                marginBottom: '24px'
                                            },
                                            children: "Enter PIN to authorize manual discount."
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 189,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '32px',
                                                fontWeight: 800,
                                                letterSpacing: '8px',
                                                marginBottom: '24px',
                                                height: '48px'
                                            },
                                            children: managerPin.replace(/./g, '•')
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 191,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pos-grid-3",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6,
                                                7,
                                                8,
                                                9,
                                                '',
                                                0,
                                                'C'
                                            ].map((val, idx)=>val === '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, idx, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 62
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "pos-btn-secondary",
                                                    style: {
                                                        height: '56px',
                                                        fontSize: '20px'
                                                    },
                                                    onClick: ()=>handleNumpadClick(val.toString()),
                                                    children: val
                                                }, val, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 201,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pos-grid-2",
                                            style: {
                                                marginTop: '24px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "pos-btn-secondary",
                                                    onClick: ()=>setShowPinInput(false),
                                                    children: "CANCEL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "pos-btn-primary",
                                                    onClick: handleApplyManual,
                                                    disabled: managerPin.length < 4,
                                                    children: "AUTHORIZE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 214,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                    lineNumber: 186,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pos-grid-2",
                                            style: {
                                                marginBottom: '24px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `pos-btn ${discountType === 'percentage' ? 'pos-btn-primary' : 'pos-btn-secondary'}`,
                                                    onClick: ()=>setDiscountType('percentage'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
                                                            size: 20,
                                                            style: {
                                                                marginRight: '8px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Percentage"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `pos-btn ${discountType === 'amount' ? 'pos-btn-primary' : 'pos-btn-secondary'}`,
                                                    onClick: ()=>setDiscountType('amount'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                            size: 20,
                                                            style: {
                                                                marginRight: '8px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Amount"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 221,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '24px',
                                                textAlign: 'center',
                                                padding: '16px',
                                                background: 'var(--pos-bg-card)',
                                                borderRadius: '12px',
                                                border: '1px solid var(--pos-border-subtle)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '14px',
                                                        color: 'var(--pos-text-muted)',
                                                        marginBottom: '8px',
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: "Discount Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '48px',
                                                        fontWeight: 800,
                                                        color: 'var(--pos-text-primary)'
                                                    },
                                                    children: [
                                                        discountType === 'amount' ? '$' : '',
                                                        discountValue || '0',
                                                        discountType === 'percentage' ? '%' : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 236,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pos-grid-3",
                                            style: {
                                                maxWidth: '400px',
                                                margin: '0 auto',
                                                marginBottom: '24px'
                                            },
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6,
                                                7,
                                                8,
                                                9,
                                                '.',
                                                0,
                                                'C'
                                            ].map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "pos-btn-secondary",
                                                    style: {
                                                        height: '64px',
                                                        fontSize: '24px',
                                                        fontWeight: 700
                                                    },
                                                    onClick: ()=>handleNumpadClick(val.toString()),
                                                    children: val
                                                }, val, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 252,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "pos-btn-primary",
                                            style: {
                                                width: '100%'
                                            },
                                            onClick: handleApplyManual,
                                            disabled: !discountValue || parseFloat(discountValue) <= 0,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 20,
                                                    style: {
                                                        marginRight: '8px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Next: Authorize"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 265,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                lineNumber: 184,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
            lineNumber: 80,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSDiscountModal, "ePzbFbhVkEHwSjn4n+Fx94QLILg=");
_c = POSDiscountModal;
const __TURBOPACK__default__export__ = POSDiscountModal;
var _c;
__turbopack_context__.k.register(_c, "POSDiscountModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/pos/components/ProductCustomizationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCustomizationModal",
    ()=>ProductCustomizationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ProductCustomizationModal = ({ isOpen, product, initialItem, onClose, onAddToCart })=>{
    _s();
    // State
    const [selectedVariants, setSelectedVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // groupId -> optionId
    const [selectedModifiers, setSelectedModifiers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // optionId -> { optionId, quantity }
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Reset when product changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductCustomizationModal.useEffect": ()=>{
            if (isOpen && product) {
                if (initialItem) {
                    // Populate from existing item
                    const initialVariants = {};
                    initialItem.variants.forEach({
                        "ProductCustomizationModal.useEffect": (v)=>{
                            initialVariants[v.groupId] = v.optionId;
                        }
                    }["ProductCustomizationModal.useEffect"]);
                    setSelectedVariants(initialVariants);
                    const initialMods = {};
                    initialItem.modifiers.forEach({
                        "ProductCustomizationModal.useEffect": (m)=>{
                            initialMods[m.optionId] = {
                                optionId: m.optionId,
                                quantity: m.quantity
                            };
                        }
                    }["ProductCustomizationModal.useEffect"]);
                    setSelectedModifiers(initialMods);
                    setNotes(initialItem.notes || '');
                    setQuantity(initialItem.quantity);
                } else {
                    // Pre-select defaults if any (simplified)
                    const initialVariants = {};
                    setSelectedVariants(initialVariants);
                    setSelectedModifiers({});
                    setNotes('');
                    setQuantity(1);
                }
            }
        }
    }["ProductCustomizationModal.useEffect"], [
        isOpen,
        product,
        initialItem
    ]);
    if (!isOpen || !product) return null;
    // Logic
    const handleVariantSelect = (groupId, optionId)=>{
        setSelectedVariants((prev)=>({
                ...prev,
                [groupId]: optionId
            }));
    };
    const handleModifierToggle = (group, optionId)=>{
        const existing = selectedModifiers[optionId];
        if (existing) {
            // Remove
            const next = {
                ...selectedModifiers
            };
            delete next[optionId];
            setSelectedModifiers(next);
        } else {
            // Add
            // Check max selection limit for group
            const currentGroupCount = group.options.filter((o)=>selectedModifiers[o.id]).length;
            if (group.maxSelection && currentGroupCount >= group.maxSelection) {
                // Ideally show toast/error, for now ignore
                return;
            }
            setSelectedModifiers((prev)=>({
                    ...prev,
                    [optionId]: {
                        optionId,
                        quantity: 1
                    }
                }));
        }
    };
    const handleModifierQuantity = (optionId, delta)=>{
        const existing = selectedModifiers[optionId];
        if (!existing && delta > 0) return; // Should toggle first
        if (!existing) return;
        const newQty = existing.quantity + delta;
        if (newQty <= 0) {
            const next = {
                ...selectedModifiers
            };
            delete next[optionId];
            setSelectedModifiers(next);
        } else {
            setSelectedModifiers((prev)=>({
                    ...prev,
                    [optionId]: {
                        ...existing,
                        quantity: newQty
                    }
                }));
        }
    };
    // Calculate Price
    let totalPrice = product.price;
    // Add variants price
    product.variantGroups?.forEach((group)=>{
        const selectedId = selectedVariants[group.id];
        if (selectedId) {
            const option = group.options.find((o)=>o.id === selectedId);
            if (option) {
                totalPrice += option.additionalPrice; // Assuming additionalPrice in variants
            }
        }
    });
    // Add modifiers price
    Object.values(selectedModifiers).forEach((mod)=>{
        // Find modifier info
        let modInfo = null;
        product.modifierGroups?.forEach((g)=>{
            const found = g.options.find((o)=>o.id === mod.optionId);
            if (found) modInfo = found;
        });
        if (modInfo) {
            totalPrice += modInfo.price * mod.quantity;
        }
    });
    totalPrice *= quantity;
    // Validation
    const isComplete = product.variantGroups?.every((group)=>!!selectedVariants[group.id]) ?? true;
    const handleAddToOrder = ()=>{
        if (!isComplete) return;
        // Construct Cart Item
        const cartItem = {
            id: initialItem?.id || Math.random().toString(36).substr(2, 9),
            productId: product.id,
            name: product.name,
            price: totalPrice / quantity,
            quantity: quantity,
            variants: Object.entries(selectedVariants).map(([groupId, optionId])=>{
                const group = product.variantGroups?.find((g)=>g.id === groupId);
                const option = group?.options.find((o)=>o.id === optionId);
                return {
                    groupId,
                    optionId,
                    name: option?.name || ''
                };
            }),
            modifiers: Object.entries(selectedModifiers).map(([optId, mod])=>{
                let mInfo;
                product.modifierGroups?.forEach((g)=>{
                    const f = g.options.find((o)=>o.id === optId);
                    if (f) mInfo = f;
                });
                return {
                    optionId: optId,
                    name: mInfo?.name || '',
                    price: mInfo?.price || 0,
                    quantity: mod.quantity
                };
            }),
            notes: notes
        };
        onAddToCart(cartItem);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pos-modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pos-modal",
            style: {
                maxWidth: '800px',
                height: '90vh'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-modal-header",
                    style: {
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '20px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        color: 'var(--pos-text-muted)',
                                        textTransform: 'uppercase',
                                        marginBottom: '8px'
                                    },
                                    children: "Customize Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "pos-title-lg",
                                    style: {
                                        lineHeight: 1.2
                                    },
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                            lineNumber: 170,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "pos-btn-secondary",
                            style: {
                                width: '48px',
                                padding: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                lineNumber: 177,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                            lineNumber: 176,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                    lineNumber: 169,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-modal-body",
                    style: {
                        padding: '0'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '24px'
                        },
                        children: [
                            product.variantGroups?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '32px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginBottom: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: '16px',
                                                        fontWeight: 700,
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: group.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "pos-badge pos-badge-warning",
                                                    children: "REQUIRED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                            lineNumber: 188,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pos-grid-3",
                                            children: group.options.map((option)=>{
                                                const isSelected = selectedVariants[group.id] === option.id;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleVariantSelect(group.id, option.id),
                                                    style: {
                                                        padding: '20px',
                                                        borderRadius: '12px',
                                                        border: isSelected ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                        background: isSelected ? 'rgba(31, 164, 169, 0.1)' : 'var(--pos-bg-card)',
                                                        textAlign: 'left',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.15s'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontWeight: 700,
                                                                        color: isSelected ? 'var(--pos-action-primary)' : 'var(--pos-text-primary)'
                                                                    },
                                                                    children: option.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                    lineNumber: 212,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 16,
                                                                    color: "var(--pos-action-primary)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 68
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '13px',
                                                                color: 'var(--pos-text-muted)',
                                                                marginTop: '4px'
                                                            },
                                                            children: option.additionalPrice > 0 ? `+$${option.additionalPrice.toFixed(2)}` : 'Included'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, option.id, true, {
                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                            lineNumber: 194,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: '1px',
                                    background: 'var(--pos-border-subtle)',
                                    margin: '32px 0'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                lineNumber: 227,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            product.modifierGroups?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '32px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginBottom: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: '16px',
                                                        fontWeight: 700,
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: group.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '12px',
                                                        color: 'var(--pos-text-muted)',
                                                        fontWeight: 600
                                                    },
                                                    children: group.maxSelection ? `Max ${group.maxSelection}` : 'Optional'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                            lineNumber: 232,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pos-grid-2",
                                            children: group.options.map((option)=>{
                                                const selection = selectedModifiers[option.id];
                                                const isSelected = !!selection;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        padding: '16px',
                                                        borderRadius: '12px',
                                                        border: isSelected ? '1px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                        background: isSelected ? 'rgba(31, 164, 169, 0.05)' : 'var(--pos-bg-card)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: ()=>handleModifierToggle(group, option.id),
                                                            style: {
                                                                flex: 1,
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '12px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: '20px',
                                                                        height: '20px',
                                                                        borderRadius: '4px',
                                                                        border: isSelected ? 'none' : '2px solid var(--pos-text-muted)',
                                                                        background: isSelected ? 'var(--pos-action-primary)' : 'transparent',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center'
                                                                    },
                                                                    children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        size: 14,
                                                                        color: "white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                        lineNumber: 271,
                                                                        columnNumber: 72
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontWeight: 600,
                                                                                color: 'var(--pos-text-primary)'
                                                                            },
                                                                            children: option.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                            lineNumber: 274,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '12px',
                                                                                color: 'var(--pos-text-muted)'
                                                                            },
                                                                            children: [
                                                                                "+$",
                                                                                option.price.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                            lineNumber: 275,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pos-quantity-control",
                                                            style: {
                                                                background: 'var(--pos-bg-main)',
                                                                transform: 'scale(0.9)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "pos-qty-btn",
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        handleModifierQuantity(option.id, -1);
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                        lineNumber: 285,
                                                                        columnNumber: 61
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "pos-qty-value",
                                                                    style: {
                                                                        fontSize: '14px',
                                                                        minWidth: '24px'
                                                                    },
                                                                    children: selection.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "pos-qty-btn",
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        handleModifierQuantity(option.id, 1);
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                        lineNumber: 294,
                                                                        columnNumber: 61
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, option.id, true, {
                                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                            lineNumber: 240,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                    lineNumber: 231,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            marginBottom: '16px'
                                        },
                                        children: "Special Instructions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                        lineNumber: 307,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "pos-input",
                                        style: {
                                            minHeight: '100px',
                                            resize: 'none',
                                            padding: '16px'
                                        },
                                        placeholder: "E.g. Well done, extra crispy, no garlic...",
                                        value: notes,
                                        onChange: (e)=>setNotes(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                        lineNumber: 310,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                lineNumber: 306,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                        lineNumber: 183,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-modal-footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '16px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'var(--pos-text-muted)'
                                    },
                                    children: "TOTAL PRICE"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                    lineNumber: 325,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '32px',
                                        fontWeight: 800,
                                        color: 'var(--pos-text-primary)'
                                    },
                                    children: [
                                        "$",
                                        totalPrice.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                    lineNumber: 328,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                            lineNumber: 324,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '16px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pos-quantity-control",
                                    style: {
                                        height: '64px',
                                        padding: '8px 16px',
                                        background: 'var(--pos-bg-card)',
                                        border: '1px solid var(--pos-border-subtle)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "pos-qty-btn",
                                            onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                lineNumber: 335,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                            lineNumber: 334,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pos-qty-value",
                                            style: {
                                                fontSize: '24px',
                                                minWidth: '40px'
                                            },
                                            children: quantity
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                            lineNumber: 337,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "pos-qty-btn",
                                            onClick: ()=>setQuantity(quantity + 1),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                lineNumber: 339,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                            lineNumber: 338,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                    lineNumber: 333,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "pos-btn pos-btn-primary",
                                    style: {
                                        flex: 1
                                    },
                                    disabled: !isComplete,
                                    onClick: handleAddToOrder,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            lineHeight: 1.2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "ADD TO ORDER"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                lineNumber: 349,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '11px',
                                                    fontWeight: 500,
                                                    opacity: 0.8
                                                },
                                                children: "Select required options"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                                lineNumber: 350,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                        lineNumber: 348,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                                    lineNumber: 342,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                            lineNumber: 332,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
                    lineNumber: 323,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
            lineNumber: 166,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/modules/pos/components/ProductCustomizationModal.tsx",
        lineNumber: 165,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductCustomizationModal, "ta6IuTiSwo4UP4FJ0tXXnroGNOM=");
_c = ProductCustomizationModal;
var _c;
__turbopack_context__.k.register(_c, "ProductCustomizationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/pos/components/POSVariantModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSVariantModal",
    ()=>POSVariantModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const POSVariantModal = ({ isOpen, product, initialItem, onClose, onAddToCart })=>{
    _s();
    // State
    const [selectedVariants, setSelectedVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // groupId -> optionId
    const [attemptedSubmit, setAttemptedSubmit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isShaking, setIsShaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Reset or populate when product changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSVariantModal.useEffect": ()=>{
            if (isOpen && product) {
                if (initialItem) {
                    const initial = {};
                    initialItem.variants.forEach({
                        "POSVariantModal.useEffect": (v)=>{
                            initial[v.groupId] = v.optionId;
                        }
                    }["POSVariantModal.useEffect"]);
                    setSelectedVariants(initial);
                } else {
                    setSelectedVariants({});
                }
                setAttemptedSubmit(false);
            }
        }
    }["POSVariantModal.useEffect"], [
        isOpen,
        product,
        initialItem
    ]);
    const variantGroups = product?.variantGroups || [];
    // Calculate Current Total
    const currentPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSVariantModal.useMemo[currentPrice]": ()=>{
            if (!product) return 0;
            let total = product.price;
            variantGroups.forEach({
                "POSVariantModal.useMemo[currentPrice]": (group)=>{
                    const selectedId = selectedVariants[group.id];
                    if (selectedId) {
                        const option = group.options.find({
                            "POSVariantModal.useMemo[currentPrice].option": (o)=>o.id === selectedId
                        }["POSVariantModal.useMemo[currentPrice].option"]);
                        if (option) total += option.additionalPrice;
                    }
                }
            }["POSVariantModal.useMemo[currentPrice]"]);
            return total;
        }
    }["POSVariantModal.useMemo[currentPrice]"], [
        product,
        selectedVariants,
        variantGroups
    ]);
    if (!isOpen || !product) return null;
    const handleSelect = (groupId, optionId)=>{
        setSelectedVariants((prev)=>({
                ...prev,
                [groupId]: optionId
            }));
    };
    const isGroupSelected = (groupId)=>!!selectedVariants[groupId];
    const isComplete = variantGroups.every((group)=>isGroupSelected(group.id));
    const handleConfirm = ()=>{
        setAttemptedSubmit(true);
        if (!isComplete) {
            // Find first missing group and "shake" it
            const missing = variantGroups.find((g)=>!isGroupSelected(g.id));
            if (missing) {
                setIsShaking(missing.id);
                setTimeout(()=>setIsShaking(null), 500);
            }
            return;
        }
        const cartItem = {
            id: initialItem?.id || Math.random().toString(36).substr(2, 9),
            productId: product.id,
            name: product.name,
            price: currentPrice,
            quantity: initialItem?.quantity || 1,
            variants: Object.entries(selectedVariants).map(([groupId, optionId])=>{
                const group = variantGroups.find((g)=>g.id === groupId);
                const option = group?.options.find((o)=>o.id === optionId);
                return {
                    groupId,
                    optionId,
                    name: option?.name || ''
                };
            }),
            modifiers: initialItem?.modifiers || [],
            notes: initialItem?.notes || ''
        };
        onAddToCart(cartItem);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: '440px',
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            animation: 'posFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        },
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    maxWidth: '520px',
                    background: 'var(--pos-bg-surface)',
                    borderRadius: '32px',
                    boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    animation: 'posSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    margin: '20px'
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '32px',
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
                            borderBottom: '1px solid var(--pos-border-subtle)',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '12px',
                                    fontWeight: 900,
                                    color: 'var(--pos-action-primary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    marginBottom: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '8px',
                                            height: '8px',
                                            background: 'var(--pos-action-primary)',
                                            borderRadius: '50%'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                        lineNumber: 146,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Configure Item"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                lineNumber: 135,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '28px',
                                    fontWeight: 900,
                                    color: 'var(--pos-text-primary)',
                                    letterSpacing: '-0.02em'
                                },
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                lineNumber: 149,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    position: 'absolute',
                                    right: '24px',
                                    top: '32px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '14px',
                                    color: 'var(--pos-text-muted)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s'
                                },
                                className: "hover-scale",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                    lineNumber: 172,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px',
                            maxHeight: '55vh',
                            overflowY: 'auto'
                        },
                        className: "no-scrollbar",
                        children: variantGroups.map((group)=>{
                            const isGroupComplete = isGroupSelected(group.id);
                            const showError = attemptedSubmit && !isGroupComplete;
                            const shaking = isShaking === group.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: shaking ? 'posShake 0.4s cubic-bezier(.36,.07,.19,.97) both' : 'none',
                                    transition: 'all 0.3s ease'
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 900,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.05em',
                                                            color: showError ? 'var(--pos-state-error)' : 'var(--pos-text-secondary)'
                                                        },
                                                        children: group.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isGroupComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 16,
                                                        color: "var(--pos-state-success)",
                                                        strokeWidth: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 61
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                lineNumber: 201,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !isGroupComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px',
                                                    fontSize: '11px',
                                                    fontWeight: 800,
                                                    color: showError ? 'var(--pos-state-error)' : 'var(--pos-text-muted)',
                                                    background: showError ? 'rgba(239, 68, 68, 0.1)' : 'transparent',
                                                    padding: showError ? '4px 10px' : '0',
                                                    borderRadius: '6px'
                                                },
                                                children: [
                                                    showError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 59
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "REQUIRED"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                lineNumber: 215,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                        lineNumber: 195,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                                            gap: '12px'
                                        },
                                        children: group.options.map((option)=>{
                                            const isSelected = selectedVariants[group.id] === option.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleSelect(group.id, option.id),
                                                style: {
                                                    height: '72px',
                                                    borderRadius: '20px',
                                                    border: isSelected ? '2px solid var(--pos-action-primary)' : showError ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid var(--pos-border-subtle)',
                                                    background: isSelected ? 'linear-gradient(135deg, rgba(31, 164, 169, 0.2) 0%, rgba(31, 164, 169, 0.05) 100%)' : 'var(--pos-bg-card)',
                                                    color: isSelected ? 'var(--pos-text-primary)' : 'var(--pos-text-secondary)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '4px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                                                    boxShadow: isSelected ? '0 8px 20px -8px var(--pos-action-primary)' : 'none'
                                                },
                                                className: !isSelected ? 'hover-scale' : '',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '15px',
                                                            fontWeight: 800
                                                        },
                                                        children: option.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    option.additionalPrice > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 700,
                                                            color: isSelected ? 'var(--pos-action-primary)' : 'var(--pos-text-muted)'
                                                        },
                                                        children: [
                                                            "+$",
                                                            option.additionalPrice.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 700,
                                                            opacity: 0.4
                                                        },
                                                        children: "Included"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, option.id, true, {
                                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                lineNumber: 240,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                        lineNumber: 232,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, group.id, true, {
                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                lineNumber: 191,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                        lineNumber: 177,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '32px',
                            background: 'var(--pos-bg-card)',
                            borderTop: '1px solid var(--pos-border-subtle)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-end',
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    fontWeight: 900,
                                                    color: 'var(--pos-text-muted)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em'
                                                },
                                                children: "Total Price"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                lineNumber: 298,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '13px',
                                                    fontWeight: 700,
                                                    color: 'var(--pos-state-success)',
                                                    marginTop: '2px'
                                                },
                                                children: "Immediate selection impact"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                                lineNumber: 299,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                        lineNumber: 297,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '42px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-primary)',
                                            animation: 'posPriceUpdate 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                            letterSpacing: '-0.03em'
                                        },
                                        children: [
                                            "$",
                                            currentPrice.toFixed(2)
                                        ]
                                    }, currentPrice, true, {
                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                        lineNumber: 303,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                lineNumber: 291,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConfirm,
                                className: isComplete ? 'hover-scale' : '',
                                style: {
                                    width: '100%',
                                    height: '80px',
                                    borderRadius: '24px',
                                    background: isComplete ? 'linear-gradient(135deg, var(--pos-action-primary) 0%, #178d91 100%)' : 'var(--pos-bg-surface)',
                                    color: isComplete ? 'white' : 'var(--pos-text-muted)',
                                    border: isComplete ? 'none' : '1px solid var(--pos-border-subtle)',
                                    fontSize: '20px',
                                    fontWeight: 900,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '16px',
                                    cursor: isComplete ? 'pointer' : 'not-allowed',
                                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                    boxShadow: isComplete ? '0 20px 40px -12px rgba(31, 164, 169, 0.4)' : 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        size: 24,
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                        lineNumber: 340,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isComplete ? 'ADD TO BASKET' : 'SELECT OPTIONS'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                lineNumber: 317,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isComplete && attemptedSubmit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginTop: '16px',
                                    color: 'var(--pos-state-error)',
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    animation: 'posFadeIn 0.3s ease'
                                },
                                children: "Please complete all mandatory selections"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                                lineNumber: 345,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                        lineNumber: 286,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes posFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes posSlideIn {
                    from { transform: translateY(30px) scale(0.95); opacity: 0; }
                    to { transform: translateY(0) scale(1); opacity: 1; }
                }
                @keyframes posPriceUpdate {
                    0% { transform: translateY(5px); opacity: 0.5; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes posShake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }
                .hover-scale {
                    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .hover-scale:hover {
                    transform: scale(1.02);
                }
                .hover-scale:active {
                    transform: scale(0.98);
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
                lineNumber: 359,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/components/POSVariantModal.tsx",
        lineNumber: 98,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSVariantModal, "SpVPcICbj4ehndoXpAlaOpTKcyo=");
_c = POSVariantModal;
var _c;
__turbopack_context__.k.register(_c, "POSVariantModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/pos/components/POSModifierModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSModifierModal",
    ()=>POSModifierModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const POSModifierModal = ({ isOpen, product, variants = [], initialItem, onClose, onAddToCart })=>{
    _s();
    // State: optionId -> quantity (0 = removed/deselected, 1 = normal, 2 = extra, etc.)
    const [selectedModifiers, setSelectedModifiers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Reset when product changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSModifierModal.useEffect": ()=>{
            if (isOpen && product) {
                const initial = {};
                if (initialItem) {
                    initialItem.modifiers.forEach({
                        "POSModifierModal.useEffect": (m)=>{
                            initial[m.optionId] = m.quantity;
                        }
                    }["POSModifierModal.useEffect"]);
                    setNotes(initialItem.notes || '');
                } else {
                    // Pre-select defaults from product data
                    product.modifierGroups?.forEach({
                        "POSModifierModal.useEffect": (group)=>{
                            group.options.forEach({
                                "POSModifierModal.useEffect": (opt)=>{
                                    if (opt.isDefault) initial[opt.id] = 1;
                                }
                            }["POSModifierModal.useEffect"]);
                        }
                    }["POSModifierModal.useEffect"]);
                    setNotes('');
                }
                setSelectedModifiers(initial);
            }
        }
    }["POSModifierModal.useEffect"], [
        isOpen,
        product,
        initialItem
    ]);
    const modifierGroups = product?.modifierGroups || [];
    // Calculate Price Breakdown
    const priceBreakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSModifierModal.useMemo[priceBreakdown]": ()=>{
            if (!product) return {
                base: 0,
                variantsPrice: 0,
                modifiersPrice: 0,
                total: 0
            };
            const base = product.price;
            let variantsPrice = 0;
            variants.forEach({
                "POSModifierModal.useMemo[priceBreakdown]": (v)=>{
                    const group = product.variantGroups?.find({
                        "POSModifierModal.useMemo[priceBreakdown]": (g)=>g.id === v.groupId
                    }["POSModifierModal.useMemo[priceBreakdown]"]);
                    const option = group?.options.find({
                        "POSModifierModal.useMemo[priceBreakdown]": (o)=>o.id === v.optionId
                    }["POSModifierModal.useMemo[priceBreakdown]"]);
                    if (option) variantsPrice += option.additionalPrice;
                }
            }["POSModifierModal.useMemo[priceBreakdown]"]);
            let modifiersPrice = 0;
            Object.entries(selectedModifiers).forEach({
                "POSModifierModal.useMemo[priceBreakdown]": ([optId, qty])=>{
                    if (qty <= 0) return; // Removed ingredients or deselected
                    let optPrice = 0;
                    modifierGroups.forEach({
                        "POSModifierModal.useMemo[priceBreakdown]": (g)=>{
                            const found = g.options.find({
                                "POSModifierModal.useMemo[priceBreakdown].found": (o)=>o.id === optId
                            }["POSModifierModal.useMemo[priceBreakdown].found"]);
                            if (found) optPrice = found.price;
                        }
                    }["POSModifierModal.useMemo[priceBreakdown]"]);
                    // If qty is 1, it's normal price. If qty is 2 (Extra), we add the price again.
                    // Rule: Extra/Double increases price accordingly. 
                    // We assume mod price is for "one unit" of modification.
                    modifiersPrice += optPrice * qty;
                }
            }["POSModifierModal.useMemo[priceBreakdown]"]);
            return {
                base,
                variantsPrice,
                modifiersPrice,
                total: base + variantsPrice + modifiersPrice
            };
        }
    }["POSModifierModal.useMemo[priceBreakdown]"], [
        product,
        variants,
        selectedModifiers,
        modifierGroups
    ]);
    if (!isOpen || !product) return null;
    const handleModifierAction = (optionId, action)=>{
        setSelectedModifiers((prev)=>{
            const next = {
                ...prev
            };
            const currentQty = next[optionId] || 0;
            if (action === 'toggle') {
                next[optionId] = currentQty > 0 ? 0 : 1;
            } else if (action === 'increment') {
                next[optionId] = Math.min(currentQty + 1, 2); // Limit to "Double" for POS simplicity
            } else if (action === 'decrement') {
                next[optionId] = Math.max(currentQty - 1, 0);
            }
            return next;
        });
    };
    const handleConfirm = ()=>{
        const cartItem = {
            id: initialItem?.id || Math.random().toString(36).substr(2, 9),
            productId: product.id,
            name: product.name,
            price: priceBreakdown.total,
            quantity: initialItem?.quantity || 1,
            variants: variants,
            modifiers: Object.entries(selectedModifiers).filter(([_, qty])=>qty > 0).map(([optId, qty])=>{
                let mInfo;
                modifierGroups.forEach((g)=>{
                    const f = g.options.find((o)=>o.id === optId);
                    if (f) mInfo = f;
                });
                return {
                    optionId: optId,
                    name: mInfo?.name || '',
                    price: mInfo?.price || 0,
                    quantity: qty
                };
            }),
            notes: notes
        };
        onAddToCart(cartItem);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: '440px',
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            animation: 'posFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        },
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    maxWidth: '600px',
                    background: 'var(--pos-bg-surface)',
                    borderRadius: '32px',
                    boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    animation: 'posSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    margin: '20px'
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '32px',
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
                            borderBottom: '1px solid var(--pos-border-subtle)',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '12px',
                                    fontWeight: 900,
                                    color: 'var(--pos-action-primary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    marginBottom: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '8px',
                                            height: '8px',
                                            background: 'var(--pos-action-primary)',
                                            borderRadius: '50%'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                        lineNumber: 182,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Addons & Modifiers"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                lineNumber: 171,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '28px',
                                    fontWeight: 900,
                                    color: 'var(--pos-text-primary)',
                                    letterSpacing: '-0.02em'
                                },
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            variants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '8px',
                                    marginTop: '12px'
                                },
                                children: variants.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: 800,
                                            background: 'rgba(255,255,255,0.05)',
                                            color: 'var(--pos-text-muted)',
                                            padding: '4px 10px',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        },
                                        children: v.name
                                    }, v.groupId, false, {
                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                        lineNumber: 191,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                lineNumber: 189,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    position: 'absolute',
                                    right: '24px',
                                    top: '32px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '14px',
                                    color: 'var(--pos-text-muted)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                className: "hover-scale",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                    lineNumber: 216,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                lineNumber: 197,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                        lineNumber: 165,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px',
                            maxHeight: '55vh',
                            overflowY: 'auto'
                        },
                        className: "no-scrollbar",
                        children: [
                            modifierGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '14px',
                                                fontWeight: 900,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                                color: 'var(--pos-text-muted)',
                                                marginBottom: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            },
                                            children: [
                                                group.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1,
                                                        height: '1px',
                                                        background: 'var(--pos-border-subtle)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                            lineNumber: 231,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                                gap: '16px'
                                            },
                                            children: group.options.map((option)=>{
                                                const qty = selectedModifiers[option.id] || 0;
                                                const isSelected = qty > 0;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: isSelected ? 'rgba(31, 164, 169, 0.05)' : 'var(--pos-bg-card)',
                                                        borderRadius: '20px',
                                                        border: isSelected ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                        padding: '16px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '16px',
                                                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                                                        cursor: 'pointer'
                                                    },
                                                    onClick: ()=>handleModifierAction(option.id, 'toggle'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '28px',
                                                                height: '28px',
                                                                borderRadius: '8px',
                                                                border: isSelected ? 'none' : '2px solid var(--pos-border-subtle)',
                                                                background: isSelected ? 'var(--pos-action-primary)' : 'transparent',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                transition: 'all 0.2s'
                                                            },
                                                            children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 18,
                                                                color: "white",
                                                                strokeWidth: 3
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 64
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '15px',
                                                                        fontWeight: 800,
                                                                        color: isSelected ? 'var(--pos-text-primary)' : 'var(--pos-text-secondary)'
                                                                    },
                                                                    children: option.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                    lineNumber: 286,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '13px',
                                                                        fontWeight: 700,
                                                                        color: 'var(--pos-state-success)',
                                                                        marginTop: '2px'
                                                                    },
                                                                    children: option.price > 0 ? `+$${option.price.toFixed(2)}` : 'No Charge'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                background: 'var(--pos-bg-surface)',
                                                                borderRadius: '12px',
                                                                padding: '4px',
                                                                border: '1px solid var(--pos-border-subtle)'
                                                            },
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    style: {
                                                                        width: '32px',
                                                                        height: '32px',
                                                                        border: 'none',
                                                                        background: 'transparent',
                                                                        color: 'var(--pos-text-primary)',
                                                                        cursor: 'pointer',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center'
                                                                    },
                                                                    onClick: ()=>handleModifierAction(option.id, 'decrement'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                        size: 16,
                                                                        strokeWidth: 3
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                        lineNumber: 310,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        minWidth: '32px',
                                                                        textAlign: 'center',
                                                                        fontSize: '16px',
                                                                        fontWeight: 900
                                                                    },
                                                                    children: qty === 2 ? 'EXT' : qty
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    style: {
                                                                        width: '32px',
                                                                        height: '32px',
                                                                        border: 'none',
                                                                        background: 'transparent',
                                                                        color: 'var(--pos-text-primary)',
                                                                        cursor: 'pointer',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center'
                                                                    },
                                                                    onClick: ()=>handleModifierAction(option.id, 'increment'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        size: 16,
                                                                        strokeWidth: 3
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, option.id, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                            lineNumber: 246,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                    lineNumber: 230,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: 900,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            color: 'var(--pos-text-muted)',
                                            marginBottom: '16px'
                                        },
                                        children: "Special Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                        lineNumber: 332,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        style: {
                                            width: '100%',
                                            minHeight: '100px',
                                            background: 'var(--pos-bg-card)',
                                            border: '1px solid var(--pos-border-subtle)',
                                            borderRadius: '20px',
                                            padding: '20px',
                                            color: 'var(--pos-text-primary)',
                                            fontSize: '15px',
                                            fontWeight: 600,
                                            resize: 'none',
                                            outline: 'none'
                                        },
                                        placeholder: "Add specific instructions here (e.g. Extra spicy, No garlic...)",
                                        value: notes,
                                        onChange: (e)=>setNotes(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                        lineNumber: 342,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                lineNumber: 331,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                        lineNumber: 221,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '32px',
                            background: 'var(--pos-bg-card)',
                            borderTop: '1px solid var(--pos-border-subtle)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-end',
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    marginBottom: '8px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '4px 8px',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        borderRadius: '6px',
                                                        fontSize: '11px',
                                                        fontWeight: 800,
                                                        color: 'var(--pos-text-muted)'
                                                    },
                                                    children: "BREAKDOWN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                lineNumber: 376,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '4px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '13px',
                                                            fontWeight: 700,
                                                            color: 'var(--pos-text-secondary)',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            width: '200px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Base + Variants"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "$",
                                                                    (priceBreakdown.base + priceBreakdown.variantsPrice).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '13px',
                                                            fontWeight: 700,
                                                            color: 'var(--pos-state-success)',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            width: '200px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Modifiers Impact"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "+$",
                                                                    priceBreakdown.modifiersPrice.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                                lineNumber: 381,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                        lineNumber: 375,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '42px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-primary)',
                                            animation: 'posPriceUpdate 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                            letterSpacing: '-0.03em'
                                        },
                                        children: [
                                            "$",
                                            priceBreakdown.total.toFixed(2)
                                        ]
                                    }, priceBreakdown.total, true, {
                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                        lineNumber: 392,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                lineNumber: 369,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConfirm,
                                className: "hover-scale",
                                style: {
                                    width: '100%',
                                    height: '80px',
                                    borderRadius: '24px',
                                    background: 'linear-gradient(135deg, var(--pos-action-primary) 0%, #178d91 100%)',
                                    color: 'white',
                                    border: 'none',
                                    fontSize: '20px',
                                    fontWeight: 900,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '16px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                    boxShadow: '0 20px 40px -12px rgba(31, 164, 169, 0.4)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        size: 24,
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                        lineNumber: 427,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "ADD TO BASKET"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                                lineNumber: 406,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                        lineNumber: 364,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes posFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes posSlideIn {
                    from { transform: translateY(30px) scale(0.95); opacity: 0; }
                    to { transform: translateY(0) scale(1); opacity: 1; }
                }
                @keyframes posPriceUpdate {
                    0% { transform: translateY(5px); opacity: 0.5; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                .hover-scale {
                    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .hover-scale:hover {
                    transform: scale(1.02);
                }
                .hover-scale:active {
                    transform: scale(0.98);
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
                lineNumber: 433,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/components/POSModifierModal.tsx",
        lineNumber: 134,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSModifierModal, "aaRTHaWQy7rMAyYmiS0Zgg9DTyA=");
_c = POSModifierModal;
var _c;
__turbopack_context__.k.register(_c, "POSModifierModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/pos/components/CustomerProfilePanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomerProfilePanel",
    ()=>CustomerProfilePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pinned.js [app-client] (ecmascript) <export default as MapPinned>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const CustomerProfilePanel = ({ isOpen, onClose, customer, onUpdateNotes, onSelectAddress })=>{
    _s();
    const [isEditingNotes, setIsEditingNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editedNotes, setEditedNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedAddrId, setSelectedAddrId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerProfilePanel.useEffect": ()=>{
            if (customer) {
                setEditedNotes(customer.notes);
                const defaultAddr = customer.addresses.find({
                    "CustomerProfilePanel.useEffect.defaultAddr": (a)=>a.isDefault
                }["CustomerProfilePanel.useEffect.defaultAddr"]);
                if (defaultAddr) setSelectedAddrId(defaultAddr.id);
            }
        }
    }["CustomerProfilePanel.useEffect"], [
        customer
    ]);
    if (!isOpen || !customer) return null;
    const handleSaveNotes = ()=>{
        if (onUpdateNotes) {
            onUpdateNotes(editedNotes);
        }
        setIsEditingNotes(false);
    };
    const handleAddressClick = (addrId)=>{
        setSelectedAddrId(addrId);
        if (onSelectAddress) {
            onSelectAddress(addrId);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                style: {
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 100,
                    animation: 'fadeIn 0.2s ease-out'
                },
                className: "jsx-eb20d47c73946f5d"
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '450px',
                    background: 'var(--pos-bg-surface)',
                    borderLeft: '1px solid var(--pos-border-subtle)',
                    zIndex: 101,
                    boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                },
                className: "jsx-eb20d47c73946f5d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '24px',
                            background: 'var(--pos-bg-card)',
                            borderBottom: '1px solid var(--pos-border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        },
                        className: "jsx-eb20d47c73946f5d",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px'
                                },
                                className: "jsx-eb20d47c73946f5d",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '48px',
                                            height: '48px',
                                            background: 'var(--pos-action-primary)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        className: "jsx-eb20d47c73946f5d",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            size: 24,
                                            color: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                            lineNumber: 112,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-eb20d47c73946f5d",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: '18px',
                                                    fontWeight: 800,
                                                    color: 'var(--pos-text-primary)',
                                                    margin: 0
                                                },
                                                className: "jsx-eb20d47c73946f5d",
                                                children: "Customer Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 115,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    color: 'var(--pos-text-muted)',
                                                    fontWeight: 600
                                                },
                                                className: "jsx-eb20d47c73946f5d",
                                                children: customer.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                        lineNumber: 114,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: 'var(--pos-bg-main)',
                                    width: '40px',
                                    height: '40px'
                                },
                                className: "jsx-eb20d47c73946f5d" + " " + "pos-icon-btn",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20,
                                    color: "var(--pos-text-secondary)"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: 'auto',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px'
                        },
                        className: "jsx-eb20d47c73946f5d",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-eb20d47c73946f5d",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        marginBottom: '20px'
                                    },
                                    className: "jsx-eb20d47c73946f5d",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-eb20d47c73946f5d",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    style: {
                                                        fontSize: '24px',
                                                        fontWeight: 800,
                                                        color: 'var(--pos-text-primary)',
                                                        marginBottom: '4px'
                                                    },
                                                    className: "jsx-eb20d47c73946f5d",
                                                    children: customer.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        color: 'var(--pos-text-secondary)',
                                                        fontSize: '15px',
                                                        fontWeight: 600
                                                    },
                                                    className: "jsx-eb20d47c73946f5d",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 16,
                                                            color: "var(--pos-action-primary)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        customer.phone
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                            lineNumber: 138,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: 'rgba(245, 158, 11, 0.1)',
                                                border: '1px solid rgba(245, 158, 11, 0.2)',
                                                padding: '8px 12px',
                                                borderRadius: '8px',
                                                textAlign: 'center'
                                            },
                                            className: "jsx-eb20d47c73946f5d",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '10px',
                                                        fontWeight: 700,
                                                        color: 'var(--pos-state-warning)',
                                                        textTransform: 'uppercase'
                                                    },
                                                    className: "jsx-eb20d47c73946f5d",
                                                    children: "Loyalty"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '16px',
                                                        fontWeight: 800,
                                                        color: 'var(--pos-state-warning)'
                                                    },
                                                    className: "jsx-eb20d47c73946f5d",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 14,
                                                            fill: "currentColor",
                                                            style: {
                                                                marginRight: '4px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        customer.loyaltyPoints
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                lineNumber: 136,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-eb20d47c73946f5d",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            marginBottom: '16px'
                                        },
                                        className: "jsx-eb20d47c73946f5d",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"], {
                                                size: 18,
                                                color: "var(--pos-text-muted)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 166,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '12px',
                                                    fontWeight: 800,
                                                    color: 'var(--pos-text-muted)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    margin: 0
                                                },
                                                className: "jsx-eb20d47c73946f5d",
                                                children: "Saved Addresses"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 167,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                        lineNumber: 165,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px'
                                        },
                                        className: "jsx-eb20d47c73946f5d",
                                        children: customer.addresses.map((addr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleAddressClick(addr.id),
                                                style: {
                                                    width: '100%',
                                                    padding: '16px',
                                                    background: selectedAddrId === addr.id ? 'var(--pos-bg-card)' : 'transparent',
                                                    border: selectedAddrId === addr.id ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                    borderRadius: '12px',
                                                    textAlign: 'left',
                                                    display: 'flex',
                                                    gap: '12px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s'
                                                },
                                                className: "jsx-eb20d47c73946f5d",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '36px',
                                                            height: '36px',
                                                            background: selectedAddrId === addr.id ? 'var(--pos-action-primary)' : 'var(--pos-bg-card)',
                                                            borderRadius: '8px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0
                                                        },
                                                        className: "jsx-eb20d47c73946f5d",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            size: 18,
                                                            color: selectedAddrId === addr.id ? 'white' : 'var(--pos-text-muted)'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        className: "jsx-eb20d47c73946f5d",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                    marginBottom: '4px'
                                                                },
                                                                className: "jsx-eb20d47c73946f5d",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: '14px',
                                                                            fontWeight: 700,
                                                                            color: 'var(--pos-text-primary)'
                                                                        },
                                                                        className: "jsx-eb20d47c73946f5d",
                                                                        children: addr.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    addr.isDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: '10px',
                                                                            fontWeight: 700,
                                                                            color: 'var(--pos-text-muted)',
                                                                            background: 'var(--pos-bg-main)',
                                                                            padding: '2px 6px',
                                                                            borderRadius: '4px'
                                                                        },
                                                                        className: "jsx-eb20d47c73946f5d",
                                                                        children: "DEFAULT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 64
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    color: 'var(--pos-text-secondary)',
                                                                    lineHeight: 1.4
                                                                },
                                                                className: "jsx-eb20d47c73946f5d",
                                                                children: addr.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    selectedAddrId === addr.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        },
                                                        className: "jsx-eb20d47c73946f5d",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 20,
                                                            color: "var(--pos-state-success)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, addr.id, true, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 173,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                        lineNumber: 171,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-eb20d47c73946f5d",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            marginBottom: '16px'
                                        },
                                        className: "jsx-eb20d47c73946f5d",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                size: 18,
                                                color: "var(--pos-text-muted)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 223,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '12px',
                                                    fontWeight: 800,
                                                    color: 'var(--pos-text-muted)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    margin: 0
                                                },
                                                className: "jsx-eb20d47c73946f5d",
                                                children: "Recent Orders"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 224,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                        lineNumber: 222,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '2px',
                                            background: 'var(--pos-bg-card)',
                                            borderRadius: '12px',
                                            border: '1px solid var(--pos-border-subtle)',
                                            overflow: 'hidden'
                                        },
                                        className: "jsx-eb20d47c73946f5d",
                                        children: customer.recentOrders.slice(0, 3).map((order, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '16px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    borderBottom: idx < 2 ? '1px solid var(--pos-border-subtle)' : 'none'
                                                },
                                                className: "jsx-eb20d47c73946f5d",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-eb20d47c73946f5d",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '14px',
                                                                    fontWeight: 700,
                                                                    color: 'var(--pos-text-primary)',
                                                                    marginBottom: '4px'
                                                                },
                                                                className: "jsx-eb20d47c73946f5d",
                                                                children: order.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '12px',
                                                                    color: 'var(--pos-text-muted)'
                                                                },
                                                                className: "jsx-eb20d47c73946f5d",
                                                                children: [
                                                                    order.date,
                                                                    " • ",
                                                                    order.items
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'right'
                                                        },
                                                        className: "jsx-eb20d47c73946f5d",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '15px',
                                                                    fontWeight: 800,
                                                                    color: 'var(--pos-text-primary)'
                                                                },
                                                                className: "jsx-eb20d47c73946f5d",
                                                                children: [
                                                                    "$",
                                                                    order.amount.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '10px',
                                                                    color: 'var(--pos-text-muted)',
                                                                    fontWeight: 700
                                                                },
                                                                className: "jsx-eb20d47c73946f5d",
                                                                children: order.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, order.id, true, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 230,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                        lineNumber: 228,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                lineNumber: 221,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                style: {
                                    background: 'rgba(245, 158, 11, 0.05)',
                                    padding: '20px',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(245, 158, 11, 0.1)'
                                },
                                className: "jsx-eb20d47c73946f5d",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '12px'
                                        },
                                        className: "jsx-eb20d47c73946f5d",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                },
                                                className: "jsx-eb20d47c73946f5d",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        size: 18,
                                                        color: "var(--pos-state-warning)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: 800,
                                                            color: 'var(--pos-state-warning)',
                                                            textTransform: 'uppercase',
                                                            margin: 0
                                                        },
                                                        className: "jsx-eb20d47c73946f5d",
                                                        children: "Staff Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 264,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !isEditingNotes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsEditingNotes(true),
                                                style: {
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: 'var(--pos-text-muted)',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px',
                                                    fontSize: '12px',
                                                    fontWeight: 700
                                                },
                                                className: "jsx-eb20d47c73946f5d",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " EDIT"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 271,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSaveNotes,
                                                style: {
                                                    background: 'var(--pos-state-success)',
                                                    border: 'none',
                                                    color: 'white',
                                                    padding: '4px 8px',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px',
                                                    fontSize: '11px',
                                                    fontWeight: 700
                                                },
                                                className: "jsx-eb20d47c73946f5d",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " SAVE"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                                lineNumber: 278,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                        lineNumber: 263,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isEditingNotes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: editedNotes,
                                        onChange: (e)=>setEditedNotes(e.target.value),
                                        style: {
                                            width: '100%',
                                            minHeight: '100px',
                                            background: 'var(--pos-bg-card)',
                                            border: '1px solid var(--pos-border-subtle)',
                                            borderRadius: '8px',
                                            padding: '12px',
                                            color: 'var(--pos-text-primary)',
                                            fontSize: '14px',
                                            fontFamily: 'inherit',
                                            resize: 'none',
                                            outline: 'none',
                                            boxShadow: '0 0 0 2px rgba(31, 164, 169, 0.2)'
                                        },
                                        autoFocus: true,
                                        className: "jsx-eb20d47c73946f5d"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                        lineNumber: 288,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '14px',
                                            color: 'var(--pos-text-secondary)',
                                            lineHeight: 1.5,
                                            margin: 0,
                                            fontStyle: 'italic'
                                        },
                                        className: "jsx-eb20d47c73946f5d",
                                        children: [
                                            '"',
                                            customer.notes || 'No special instructions recorded.',
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                        lineNumber: 308,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                                lineNumber: 257,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '24px',
                            background: 'var(--pos-bg-card)',
                            borderTop: '1px solid var(--pos-border-subtle)'
                        },
                        className: "jsx-eb20d47c73946f5d",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                width: '100%',
                                height: '60px',
                                fontSize: '16px'
                            },
                            className: "jsx-eb20d47c73946f5d" + " " + "pos-btn pos-btn-primary",
                            children: "CONFIRM & CONTINUE"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                            lineNumber: 317,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                        lineNumber: 316,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/components/CustomerProfilePanel.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "eb20d47c73946f5d",
                children: "@keyframes slideInRight{0%{transform:translate(100%)}to{transform:translate(0)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CustomerProfilePanel, "W4evFmFXyCu+CFpJMKPskwYUlGo=");
_c = CustomerProfilePanel;
var _c;
__turbopack_context__.k.register(_c, "CustomerProfilePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_pos_components_6d44efd3._.js.map