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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
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
const MANAGER_PIN = '1234';
const DISCOUNT_LIMIT_PERCENT = 15; // >15% requires manager PIN
const POSDiscountModal = ({ isOpen, onClose, onApplyDiscount, subtotal })=>{
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('COUPON');
    const [discountType, setDiscountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('percentage');
    const [discountValue, setDiscountValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [couponCode, setCouponCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [managerPin, setManagerPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPinInput, setShowPinInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!isOpen) return null;
    const handleNumpadClick = (value)=>{
        setError(null);
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
        setError(null);
        const val = parseFloat(discountValue);
        if (isNaN(val) || val <= 0) {
            setError('Please enter a valid value');
            return;
        }
        if (discountType === 'percentage' && val > 100) {
            setError('Percentage cannot exceed 100%');
            return;
        }
        if (discountType === 'amount' && val > subtotal) {
            setError('Amount cannot exceed subtotal');
            return;
        }
        // Check if authorization is needed
        const needsAuth = discountType === 'percentage' ? val > DISCOUNT_LIMIT_PERCENT : val > subtotal * 0.15;
        if (needsAuth && !showPinInput) {
            setShowPinInput(true);
            return;
        }
        if (showPinInput) {
            if (managerPin === MANAGER_PIN) {
                onApplyDiscount(discountType, val);
                resetAndClose();
            } else {
                setError('Invalid Manager PIN');
                setManagerPin('');
            }
            return;
        }
        // No auth needed
        onApplyDiscount(discountType, val);
        resetAndClose();
    };
    const handleApplyCoupon = (coupon)=>{
        if (coupon.disabled) return;
        if (subtotal < coupon.minOrder) {
            setError(`Order must be at least $${coupon.minOrder}`);
            return;
        }
        onApplyDiscount(coupon.type, coupon.value, coupon.code);
        resetAndClose();
    };
    const handleCustomCouponId = ()=>{
        setError(null);
        const coupon = mockCoupons.find((c)=>c.code === couponCode.toUpperCase());
        if (coupon) {
            handleApplyCoupon(coupon);
        } else {
            setError('Invalid or expired coupon code');
        }
    };
    const resetAndClose = ()=>{
        setDiscountValue('');
        setCouponCode('');
        setManagerPin('');
        setShowPinInput(false);
        setError(null);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pos-modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pos-modal",
            style: {
                width: '600px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-modal-header",
                    style: {
                        background: 'var(--pos-bg-surface)',
                        borderBottom: '1px solid var(--pos-border-subtle)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pos-title-md",
                            style: {
                                fontWeight: 900
                            },
                            children: "Apply Discount"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "pos-btn-secondary",
                            onClick: resetAndClose,
                            style: {
                                width: '40px',
                                height: '40px',
                                padding: 0,
                                borderRadius: '12px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                lineNumber: 140,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                    lineNumber: 133,
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
                                borderBottom: '1px solid var(--pos-border-subtle)',
                                background: 'var(--pos-bg-surface)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMode('COUPON');
                                        setShowPinInput(false);
                                        setError(null);
                                    },
                                    style: {
                                        flex: 1,
                                        padding: '20px',
                                        background: mode === 'COUPON' ? 'rgba(31, 164, 169, 0.1)' : 'transparent',
                                        color: mode === 'COUPON' ? 'var(--pos-action-primary)' : 'var(--pos-text-muted)',
                                        border: 'none',
                                        fontWeight: 900,
                                        cursor: 'pointer',
                                        fontSize: '12px',
                                        letterSpacing: '0.1em',
                                        borderBottom: mode === 'COUPON' ? '2px solid var(--pos-action-primary)' : '2px solid transparent'
                                    },
                                    children: "COUPONS"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMode('MANUAL');
                                        setShowPinInput(false);
                                        setError(null);
                                    },
                                    style: {
                                        flex: 1,
                                        padding: '20px',
                                        background: mode === 'MANUAL' ? 'rgba(31, 164, 169, 0.1)' : 'transparent',
                                        color: mode === 'MANUAL' ? 'var(--pos-action-primary)' : 'var(--pos-text-muted)',
                                        border: 'none',
                                        fontWeight: 900,
                                        cursor: 'pointer',
                                        fontSize: '12px',
                                        letterSpacing: '0.1em',
                                        borderBottom: mode === 'MANUAL' ? '2px solid var(--pos-action-primary)' : '2px solid transparent'
                                    },
                                    children: "MANUAL"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                    lineNumber: 164,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '28px'
                            },
                            children: [
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '12px 16px',
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        border: '1px solid rgba(239, 68, 68, 0.2)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        color: '#EF4444',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 198,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        error
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                    lineNumber: 185,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                mode === 'COUPON' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '12px'
                                            },
                                            children: mockCoupons.map((coupon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>handleApplyCoupon(coupon),
                                                    style: {
                                                        flex: '1 1 calc(50% - 6px)',
                                                        padding: '20px',
                                                        borderRadius: '20px',
                                                        background: 'var(--pos-bg-card)',
                                                        border: '1px solid var(--pos-border-subtle)',
                                                        cursor: coupon.disabled ? 'not-allowed' : 'pointer',
                                                        opacity: coupon.disabled ? 0.5 : 1,
                                                        transition: 'all 0.2s',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '8px'
                                                    },
                                                    className: !coupon.disabled ? "hover-scale" : "",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        padding: '4px 10px',
                                                                        background: 'rgba(31, 164, 169, 0.1)',
                                                                        borderRadius: '8px',
                                                                        fontSize: '11px',
                                                                        fontWeight: 900,
                                                                        color: 'var(--pos-action-primary)',
                                                                        letterSpacing: '0.05em'
                                                                    },
                                                                    children: coupon.code
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '18px',
                                                                        fontWeight: 900,
                                                                        color: 'var(--pos-action-primary)'
                                                                    },
                                                                    children: [
                                                                        coupon.type === 'amount' ? '$' : '',
                                                                        coupon.value,
                                                                        coupon.type === 'percentage' ? '%' : ''
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '13px',
                                                                color: 'var(--pos-text-secondary)',
                                                                fontWeight: 600
                                                            },
                                                            children: coupon.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        subtotal < coupon.minOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '10px',
                                                                color: '#EF4444',
                                                                fontWeight: 800
                                                            },
                                                            children: [
                                                                "Min. Order: $",
                                                                coupon.minOrder
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, coupon.code, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 205,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: '28px',
                                                padding: '24px',
                                                background: 'var(--pos-bg-surface)',
                                                borderRadius: '24px',
                                                border: '1px solid var(--pos-border-subtle)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '11px',
                                                        color: 'var(--pos-text-muted)',
                                                        fontWeight: 900,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "Apply Custom Coupon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: '12px',
                                                        marginTop: '12px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "pos-input",
                                                            placeholder: "ENTER CODE",
                                                            style: {
                                                                flex: 1,
                                                                letterSpacing: '0.1em',
                                                                textAlign: 'center'
                                                            },
                                                            value: couponCode,
                                                            onChange: (e)=>setCouponCode(e.target.value.toUpperCase())
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleCustomCouponId,
                                                            className: "pos-btn-primary",
                                                            style: {
                                                                padding: '0 24px',
                                                                borderRadius: '16px'
                                                            },
                                                            children: "APPLY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                            lineNumber: 241,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                    lineNumber: 204,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)) : // MANUAL MODE
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: showPinInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'center',
                                            maxWidth: '340px',
                                            margin: '0 auto'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '64px',
                                                    height: '64px',
                                                    borderRadius: '20px',
                                                    background: 'rgba(245, 158, 11, 0.1)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 20px',
                                                    color: '#F59E0B'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    size: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 267,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '20px',
                                                    fontWeight: 900,
                                                    color: 'var(--pos-text-primary)',
                                                    marginBottom: '8px'
                                                },
                                                children: "Manager Approval"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 280,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'var(--pos-text-muted)',
                                                    marginBottom: '24px',
                                                    fontSize: '14px',
                                                    fontWeight: 600
                                                },
                                                children: "This discount requires authorization to proceed."
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 281,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '40px',
                                                    fontWeight: 900,
                                                    letterSpacing: '12px',
                                                    marginBottom: '28px',
                                                    height: '48px',
                                                    color: 'var(--pos-text-primary)'
                                                },
                                                children: managerPin ? managerPin.replace(/./g, '•') : '••••'
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 283,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pos-grid-3",
                                                style: {
                                                    gap: '12px'
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
                                                    '',
                                                    0,
                                                    'C'
                                                ].map((val, idx)=>val === '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, idx, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 62
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "pos-btn-secondary",
                                                        style: {
                                                            height: '60px',
                                                            fontSize: '20px',
                                                            fontWeight: 900,
                                                            borderRadius: '16px'
                                                        },
                                                        onClick: ()=>handleNumpadClick(val.toString()),
                                                        children: val
                                                    }, idx, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 294,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pos-grid-2",
                                                style: {
                                                    marginTop: '24px',
                                                    gap: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "pos-btn-secondary",
                                                        style: {
                                                            borderRadius: '16px',
                                                            height: '56px'
                                                        },
                                                        onClick: ()=>setShowPinInput(false),
                                                        children: "CANCEL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "pos-btn-primary",
                                                        style: {
                                                            borderRadius: '16px',
                                                            height: '56px'
                                                        },
                                                        onClick: handleApplyManual,
                                                        disabled: managerPin.length < 4,
                                                        children: "AUTHORIZE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 307,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                        lineNumber: 266,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pos-grid-2",
                                                style: {
                                                    marginBottom: '24px',
                                                    gap: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `pos-btn ${discountType === 'percentage' ? 'pos-btn-primary' : 'pos-btn-secondary'}`,
                                                        style: {
                                                            height: '60px',
                                                            borderRadius: '16px',
                                                            fontWeight: 900
                                                        },
                                                        onClick: ()=>setDiscountType('percentage'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
                                                                size: 20,
                                                                style: {
                                                                    marginRight: '8px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Percentage"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `pos-btn ${discountType === 'amount' ? 'pos-btn-primary' : 'pos-btn-secondary'}`,
                                                        style: {
                                                            height: '60px',
                                                            borderRadius: '16px',
                                                            fontWeight: 900
                                                        },
                                                        onClick: ()=>setDiscountType('amount'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                size: 20,
                                                                style: {
                                                                    marginRight: '8px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Amount"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 314,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '28px',
                                                    textAlign: 'center',
                                                    padding: '24px',
                                                    background: 'var(--pos-bg-surface)',
                                                    borderRadius: '24px',
                                                    border: '1px solid var(--pos-border-subtle)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '11px',
                                                            color: 'var(--pos-text-muted)',
                                                            marginBottom: '8px',
                                                            textTransform: 'uppercase',
                                                            fontWeight: 900,
                                                            letterSpacing: '0.1em'
                                                        },
                                                        children: "Discount Value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '56px',
                                                            fontWeight: 900,
                                                            color: 'var(--pos-text-primary)',
                                                            letterSpacing: '-0.02em'
                                                        },
                                                        children: [
                                                            discountType === 'amount' ? '$' : '',
                                                            discountValue || '0',
                                                            discountType === 'percentage' ? '%' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 331,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pos-grid-3",
                                                style: {
                                                    maxWidth: '400px',
                                                    margin: '0 auto',
                                                    marginBottom: '24px',
                                                    gap: '12px'
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
                                                ].map((val, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "pos-btn-secondary",
                                                        style: {
                                                            height: '72px',
                                                            fontSize: '24px',
                                                            fontWeight: 900,
                                                            borderRadius: '16px'
                                                        },
                                                        onClick: ()=>handleNumpadClick(val.toString()),
                                                        children: val
                                                    }, idx, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 347,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "pos-btn-primary",
                                                style: {
                                                    width: '100%',
                                                    height: '72px',
                                                    borderRadius: '20px',
                                                    fontSize: '18px',
                                                    fontWeight: 900
                                                },
                                                onClick: handleApplyManual,
                                                disabled: !discountValue || parseFloat(discountValue) <= 0,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 22,
                                                        style: {
                                                            marginRight: '10px'
                                                        },
                                                        strokeWidth: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "APPLY DISCOUNT"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                lineNumber: 360,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                    lineNumber: 264,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                    lineNumber: 144,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
            lineNumber: 132,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
        lineNumber: 131,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSDiscountModal, "4KGH0iUD3ZQWQbw+K4vCijpr9nM=");
_c = POSDiscountModal;
const __TURBOPACK__default__export__ = POSDiscountModal;
var _c;
__turbopack_context__.k.register(_c, "POSDiscountModal");
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
"[project]/src/modules/pos/components/POSComboModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSComboModal",
    ()=>POSComboModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const POSComboModal = ({ isOpen, product, onClose, onAddToCart })=>{
    _s();
    // State
    const [activeSlotIndex, setActiveSlotIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [slotSelections, setSlotSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // slotId -> selection details
    const [isShaking, setIsShaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attemptedSubmit, setAttemptedSubmit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset when product changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSComboModal.useEffect": ()=>{
            if (isOpen && product) {
                setActiveSlotIndex(0);
                setSlotSelections({});
                setAttemptedSubmit(false);
            }
        }
    }["POSComboModal.useEffect"], [
        isOpen,
        product
    ]);
    const slots = product?.slots || [];
    const activeSlot = slots[activeSlotIndex];
    // Calculate Total Price
    const currentPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSComboModal.useMemo[currentPrice]": ()=>{
            if (!product) return 0;
            let total = product.basePrice || 0;
            Object.values(slotSelections).forEach({
                "POSComboModal.useMemo[currentPrice]": (sel)=>{
                    if (sel.option) total += sel.option.price || 0;
                    if (sel.variants) {
                        Object.values(sel.variants).forEach({
                            "POSComboModal.useMemo[currentPrice]": (v)=>total += v.additionalPrice || 0
                        }["POSComboModal.useMemo[currentPrice]"]);
                    }
                    if (sel.modifiers) {
                        Object.values(sel.modifiers).forEach({
                            "POSComboModal.useMemo[currentPrice]": (m)=>total += (m.price || 0) * (m.quantity || 1)
                        }["POSComboModal.useMemo[currentPrice]"]);
                    }
                }
            }["POSComboModal.useMemo[currentPrice]"]);
            return total;
        }
    }["POSComboModal.useMemo[currentPrice]"], [
        product,
        slotSelections
    ]);
    if (!isOpen || !product) return null;
    const isSlotComplete = (slotId)=>{
        const selection = slotSelections[slotId];
        if (!selection || !selection.option) return false;
        // Check if required variants are selected for this slot's option
        const slot = slots.find((s)=>s.id === slotId);
        if (slot?.variantGroups) {
            const missingRequired = slot.variantGroups.some((g)=>g.required && !selection.variants?.[g.id]);
            if (missingRequired) return false;
        }
        return true;
    };
    const isAllComplete = slots.every((s)=>isSlotComplete(s.id));
    const handleOptionSelect = (option)=>{
        setSlotSelections((prev)=>({
                ...prev,
                [activeSlot.id]: {
                    ...prev[activeSlot.id],
                    option,
                    variants: {},
                    modifiers: {}
                }
            }));
    };
    const handleVariantSelect = (groupId, option)=>{
        setSlotSelections((prev)=>({
                ...prev,
                [activeSlot.id]: {
                    ...prev[activeSlot.id],
                    variants: {
                        ...prev[activeSlot.id]?.variants,
                        [groupId]: option
                    }
                }
            }));
    };
    const handleModifierAction = (modifierId, modifier, action)=>{
        setSlotSelections((prev)=>{
            const slotSel = prev[activeSlot.id] || {
                modifiers: {}
            };
            const mods = {
                ...slotSel.modifiers
            };
            const current = mods[modifierId] || {
                ...modifier,
                quantity: 0
            };
            if (action === 'increment') {
                current.quantity = Math.min((current.quantity || 0) + 1, 2);
            } else {
                current.quantity = Math.max((current.quantity || 0) - 1, 0);
            }
            if (current.quantity === 0) {
                delete mods[modifierId];
            } else {
                mods[modifierId] = current;
            }
            return {
                ...prev,
                [activeSlot.id]: {
                    ...slotSel,
                    modifiers: mods
                }
            };
        });
    };
    const handleConfirm = ()=>{
        setAttemptedSubmit(true);
        if (!isAllComplete) {
            const firstIncomplete = slots.find((s)=>!isSlotComplete(s.id));
            if (firstIncomplete) {
                setIsShaking(firstIncomplete.id);
                setTimeout(()=>setIsShaking(null), 500);
                setActiveSlotIndex(slots.indexOf(firstIncomplete));
            }
            return;
        }
        const cartItem = {
            id: Math.random().toString(36).substr(2, 9),
            productId: product.id,
            name: product.name,
            price: currentPrice,
            quantity: 1,
            isCombo: true,
            slots: Object.entries(slotSelections).map(([slotId, sel])=>{
                const slot = slots.find((s)=>s.id === slotId);
                return {
                    slotId,
                    slotName: slot.name,
                    option: sel.option,
                    variants: Object.entries(sel.variants || {}).map(([gId, opt])=>({
                            groupId: gId,
                            optionId: opt.id,
                            name: opt.name
                        })),
                    modifiers: Object.values(sel.modifiers || {}).map((m)=>({
                            optionId: m.id,
                            name: m.name,
                            price: m.price,
                            quantity: m.quantity
                        }))
                };
            })
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
                    maxWidth: '820px',
                    height: '85vh',
                    background: 'var(--pos-bg-surface)',
                    borderRadius: '32px',
                    boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    animation: 'posSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    margin: '20px'
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '240px',
                            background: 'var(--pos-bg-card)',
                            borderRight: '1px solid var(--pos-border-subtle)',
                            display: 'flex',
                            flexDirection: 'column',
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px',
                                    borderBottom: '1px solid var(--pos-border-subtle)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            color: 'var(--pos-action-primary)',
                                            marginBottom: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                size: 20,
                                                fontWeight: 900
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                lineNumber: 210,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '11px',
                                                    fontWeight: 900,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em'
                                                },
                                                children: "Combo Builder"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                lineNumber: 211,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                        lineNumber: 209,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '18px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-primary)'
                                        },
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                        lineNumber: 213,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                lineNumber: 208,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    padding: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                    overflowY: 'auto'
                                },
                                className: "no-scrollbar",
                                children: slots.map((slot, idx)=>{
                                    const active = activeSlotIndex === idx;
                                    const complete = isSlotComplete(slot.id);
                                    const selection = slotSelections[slot.id];
                                    const shaking = isShaking === slot.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSlotIndex(idx),
                                        style: {
                                            width: '100%',
                                            padding: '16px',
                                            borderRadius: '20px',
                                            background: active ? 'rgba(31, 164, 169, 0.1)' : 'transparent',
                                            border: active ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            animation: shaking ? 'posShake 0.4s both' : 'none'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '4px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 900,
                                                            color: active ? 'var(--pos-action-primary)' : 'var(--pos-text-muted)',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: [
                                                            "Slot ",
                                                            idx + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    complete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 14,
                                                        color: "var(--pos-state-success)",
                                                        strokeWidth: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 54
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                lineNumber: 239,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '14px',
                                                    fontWeight: 800,
                                                    color: active ? 'var(--pos-text-primary)' : 'var(--pos-text-secondary)'
                                                },
                                                children: slot.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                lineNumber: 245,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selection?.option && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    color: 'var(--pos-action-primary)',
                                                    fontWeight: 700,
                                                    marginTop: '4px',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                },
                                                children: selection.option.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                lineNumber: 249,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, slot.id, true, {
                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                        lineNumber: 224,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                lineNumber: 216,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px',
                                    background: 'rgba(0,0,0,0.1)',
                                    borderTop: '1px solid var(--pos-border-subtle)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-muted)',
                                            textTransform: 'uppercase',
                                            marginBottom: '4px'
                                        },
                                        children: "Base Total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                        lineNumber: 259,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '24px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-primary)'
                                        },
                                        children: [
                                            "$",
                                            currentPrice.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                        lineNumber: 260,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                lineNumber: 258,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                        lineNumber: 200,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '32px',
                                    borderBottom: '1px solid var(--pos-border-subtle)',
                                    position: 'relative'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontSize: '24px',
                                                        fontWeight: 900,
                                                        color: 'var(--pos-text-primary)'
                                                    },
                                                    children: [
                                                        "Select ",
                                                        activeSlot.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '14px',
                                                        color: 'var(--pos-text-muted)',
                                                        fontWeight: 600,
                                                        marginTop: '4px'
                                                    },
                                                    children: "Choose an item to fill this combo slot"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                            lineNumber: 269,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            style: {
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '12px',
                                                color: 'var(--pos-text-muted)',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                lineNumber: 278,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                            lineNumber: 277,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                    lineNumber: 268,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                lineNumber: 267,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: '32px'
                                },
                                className: "no-scrollbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '40px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontSize: '12px',
                                                    fontWeight: 900,
                                                    color: 'var(--pos-text-muted)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    marginBottom: '20px'
                                                },
                                                children: "Item Options"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                lineNumber: 287,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                                                    gap: '16px'
                                                },
                                                children: activeSlot.options.map((opt)=>{
                                                    const isSelected = slotSelections[activeSlot.id]?.option?.id === opt.id;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleOptionSelect(opt),
                                                        style: {
                                                            padding: '12px',
                                                            borderRadius: '24px',
                                                            background: isSelected ? 'rgba(31, 164, 169, 0.1)' : 'var(--pos-bg-card)',
                                                            border: isSelected ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                            transition: 'all 0.2s',
                                                            cursor: 'pointer',
                                                            textAlign: 'center'
                                                        },
                                                        className: !isSelected ? 'hover-scale' : '',
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '100%',
                                                                    height: '100px',
                                                                    borderRadius: '16px',
                                                                    overflow: 'hidden',
                                                                    marginBottom: '12px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: opt.image,
                                                                    alt: opt.name,
                                                                    style: {
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '14px',
                                                                    fontWeight: 800,
                                                                    color: 'var(--pos-text-primary)'
                                                                },
                                                                children: opt.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            opt.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '12px',
                                                                    color: 'var(--pos-state-success)',
                                                                    fontWeight: 700,
                                                                    marginTop: '4px'
                                                                },
                                                                children: [
                                                                    "+$",
                                                                    opt.price.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 63
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, opt.id, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                lineNumber: 288,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                        lineNumber: 286,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    slotSelections[activeSlot.id]?.option && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            animation: 'posFadeIn 0.3s ease-out'
                                        },
                                        children: [
                                            activeSlot.variantGroups?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: '32px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            style: {
                                                                fontSize: '12px',
                                                                fontWeight: 900,
                                                                color: 'var(--pos-text-muted)',
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.1em',
                                                                marginBottom: '16px'
                                                            },
                                                            children: [
                                                                group.name,
                                                                " ",
                                                                group.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: 'var(--pos-state-error)'
                                                                    },
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 77
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexWrap: 'wrap',
                                                                gap: '10px'
                                                            },
                                                            children: group.options.map((v)=>{
                                                                const isSelected = slotSelections[activeSlot.id]?.variants?.[group.id]?.id === v.id;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleVariantSelect(group.id, v),
                                                                    style: {
                                                                        padding: '14px 20px',
                                                                        borderRadius: '14px',
                                                                        background: isSelected ? 'var(--pos-action-primary)' : 'var(--pos-bg-card)',
                                                                        border: 'none',
                                                                        color: isSelected ? 'white' : 'var(--pos-text-secondary)',
                                                                        fontWeight: 800,
                                                                        fontSize: '13px',
                                                                        cursor: 'pointer',
                                                                        transition: 'all 0.1s'
                                                                    },
                                                                    children: [
                                                                        v.name,
                                                                        " ",
                                                                        v.price !== 0 && `(${v.price > 0 ? '+' : ''}${v.price})`
                                                                    ]
                                                                }, v.id, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, group.id, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            activeSlot.modifierGroups?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            style: {
                                                                fontSize: '12px',
                                                                fontWeight: 900,
                                                                color: 'var(--pos-text-muted)',
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.1em',
                                                                marginBottom: '16px'
                                                            },
                                                            children: group.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'grid',
                                                                gridTemplateColumns: '1fr 1fr',
                                                                gap: '12px'
                                                            },
                                                            children: group.options.map((m)=>{
                                                                const sel = slotSelections[activeSlot.id]?.modifiers?.[m.id];
                                                                const isSelected = !!sel;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        padding: '16px',
                                                                        background: 'var(--pos-bg-card)',
                                                                        borderRadius: '20px',
                                                                        border: isSelected ? '1px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        alignItems: 'center'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontSize: '14px',
                                                                                        fontWeight: 800,
                                                                                        color: 'var(--pos-text-primary)'
                                                                                    },
                                                                                    children: m.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                                    lineNumber: 377,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontSize: '12px',
                                                                                        color: 'var(--pos-state-success)',
                                                                                        fontWeight: 700
                                                                                    },
                                                                                    children: [
                                                                                        "+$",
                                                                                        m.price.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                                    lineNumber: 378,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                            lineNumber: 376,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                background: 'var(--pos-bg-surface)',
                                                                                borderRadius: '12px',
                                                                                padding: '4px'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    style: {
                                                                                        width: '28px',
                                                                                        height: '28px',
                                                                                        border: 'none',
                                                                                        background: 'transparent',
                                                                                        color: 'var(--pos-text-primary)',
                                                                                        cursor: 'pointer'
                                                                                    },
                                                                                    onClick: ()=>handleModifierAction(m.id, m, 'decrement'),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                        size: 14,
                                                                                        strokeWidth: 3
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                                        lineNumber: 385,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                                    lineNumber: 381,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: '14px',
                                                                                        fontWeight: 900,
                                                                                        minWidth: '24px',
                                                                                        textAlign: 'center'
                                                                                    },
                                                                                    children: sel?.quantity || 0
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                                    lineNumber: 387,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    style: {
                                                                                        width: '28px',
                                                                                        height: '28px',
                                                                                        border: 'none',
                                                                                        background: 'transparent',
                                                                                        color: 'var(--pos-text-primary)',
                                                                                        cursor: 'pointer'
                                                                                    },
                                                                                    onClick: ()=>handleModifierAction(m.id, m, 'increment'),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                        size: 14,
                                                                                        strokeWidth: 3
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                                        lineNumber: 394,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                                    lineNumber: 390,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                            lineNumber: 380,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, m.id, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                                    lineNumber: 364,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, group.id, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                        lineNumber: 319,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                lineNumber: 284,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '32px',
                                    background: 'var(--pos-bg-card)',
                                    borderTop: '1px solid var(--pos-border-subtle)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleConfirm,
                                            className: "hover-scale",
                                            style: {
                                                flex: 1,
                                                height: '80px',
                                                borderRadius: '24px',
                                                background: isAllComplete ? 'linear-gradient(135deg, var(--pos-action-primary) 0%, #178d91 100%)' : attemptedSubmit ? 'rgba(239, 68, 68, 0.1)' : 'var(--pos-bg-surface)',
                                                color: isAllComplete ? 'white' : attemptedSubmit ? 'var(--pos-state-error)' : 'var(--pos-text-muted)',
                                                border: isAllComplete ? 'none' : attemptedSubmit ? '1px solid var(--pos-state-error)' : '1px solid var(--pos-border-subtle)',
                                                fontSize: '20px',
                                                fontWeight: 900,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '16px',
                                                cursor: isAllComplete ? 'pointer' : 'not-allowed',
                                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                                boxShadow: isAllComplete ? '0 20px 40px -12px rgba(31, 164, 169, 0.4)' : 'none'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                    size: 24,
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isAllComplete ? 'ADD COMBO TO BASKET' : 'COMPLETE ALL SLOTS'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                            lineNumber: 410,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        activeSlotIndex < slots.length - 1 && isSlotComplete(activeStepId()) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveSlotIndex(activeSlotIndex + 1),
                                            style: {
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '24px',
                                                background: 'var(--pos-bg-surface)',
                                                border: '1px solid var(--pos-border-subtle)',
                                                color: 'var(--pos-text-primary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer'
                                            },
                                            className: "hover-scale",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 32
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                                lineNumber: 454,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                            lineNumber: 438,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                    lineNumber: 409,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                                lineNumber: 408,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                        lineNumber: 265,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes posFadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes posSlideIn {
                    from { transform: translateY(30px) scale(0.95); opacity: 0; }
                    to { transform: translateY(0) scale(1); opacity: 1; }
                }
                @keyframes posShake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }
                .hover-scale { transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .hover-scale:hover { transform: scale(1.02); }
                .hover-scale:active { transform: scale(0.98); }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
                lineNumber: 462,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/components/POSComboModal.tsx",
        lineNumber: 169,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
    //TURBOPACK unreachable
    ;
    function activeStepId() {
        return slots[activeSlotIndex]?.id;
    }
};
_s(POSComboModal, "pYyMRpn57A4TX3FF1BiR9KgEqmg=");
_c = POSComboModal;
var _c;
__turbopack_context__.k.register(_c, "POSComboModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/pos/components/POSCartPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSCartPanel",
    ()=>POSCartPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const POSCartPanel = ({ cart, onUpdateQuantity, onRemoveItem, onEditItem, onClearCart, onHoldOrder, onAddDiscount, onRemoveDiscount, activeRules = [], subtotal, tax, discounts, deliveryFee, tip, onUpdateTip, total, onCheckout })=>{
    _s();
    const [isConfirmingClear, setIsConfirmingClear] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '440px',
            background: 'var(--pos-bg-surface)',
            borderLeft: '1px solid var(--pos-border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.4)',
            zIndex: 10,
            height: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '24px',
                    borderBottom: '1px solid var(--pos-border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '44px',
                                height: '44px',
                                borderRadius: '14px',
                                background: 'linear-gradient(135deg, rgba(31, 164, 169, 0.2) 0%, rgba(31, 164, 169, 0.05) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid rgba(31, 164, 169, 0.2)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                size: 22,
                                color: "var(--pos-action-primary)",
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '18px',
                                        fontWeight: 900,
                                        color: 'var(--pos-text-primary)'
                                    },
                                    children: "Order Cart"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '12px',
                                        color: 'var(--pos-text-muted)',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    },
                                    children: [
                                        cart.length,
                                        " ",
                                        cart.length === 1 ? 'Item' : 'Items',
                                        " Selected"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                            lineNumber: 80,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: 'auto',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                },
                className: "no-scrollbar",
                children: cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--pos-text-muted)',
                        gap: '20px',
                        padding: '40px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'var(--pos-bg-card)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px dashed var(--pos-border-subtle)',
                                opacity: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                size: 48,
                                strokeWidth: 1
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 120,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                            lineNumber: 109,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: 900,
                                        color: 'var(--pos-text-primary)'
                                    },
                                    children: "Empty Cart"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                    lineNumber: 123,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '14px',
                                        marginTop: '8px',
                                        fontWeight: 600
                                    },
                                    children: "Start adding items to build an order"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                            lineNumber: 122,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                    lineNumber: 99,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : cart.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '20px',
                            background: 'var(--pos-bg-card)',
                            border: '1px solid var(--pos-border-subtle)',
                            borderRadius: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                            position: 'relative',
                            animation: 'posFadeInUp 0.3s ease-out forwards'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    gap: '16px'
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
                                                    marginBottom: '6px'
                                                },
                                                children: [
                                                    item.isCombo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                        size: 14,
                                                        color: "var(--pos-action-primary)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 58
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '17px',
                                                            fontWeight: 900,
                                                            color: 'var(--pos-text-primary)',
                                                            letterSpacing: '-0.01em'
                                                        },
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 144,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '6px'
                                                },
                                                children: [
                                                    item.variants?.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '10px',
                                                                color: 'var(--pos-action-primary)',
                                                                fontWeight: 900,
                                                                textTransform: 'uppercase',
                                                                background: 'rgba(31, 164, 169, 0.1)',
                                                                padding: '3px 8px',
                                                                borderRadius: '6px',
                                                                border: '1px solid rgba(31, 164, 169, 0.1)'
                                                            },
                                                            children: v.name
                                                        }, v.groupId, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    item.modifiers?.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '10px',
                                                                color: 'var(--pos-text-muted)',
                                                                fontWeight: 800,
                                                                background: 'rgba(255,255,255,0.03)',
                                                                padding: '3px 8px',
                                                                borderRadius: '6px',
                                                                border: '1px solid rgba(255,255,255,0.05)'
                                                            },
                                                            children: [
                                                                m.name,
                                                                " ",
                                                                m.quantity > 1 ? `x${m.quantity}` : ''
                                                            ]
                                                        }, m.optionId, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    item.isCombo && item.slots?.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '100%',
                                                                fontSize: '11px',
                                                                color: 'var(--pos-text-muted)',
                                                                fontWeight: 600,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '6px',
                                                                marginTop: '4px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: '4px',
                                                                        height: '4px',
                                                                        background: 'var(--pos-border-subtle)',
                                                                        borderRadius: '50%'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: 'var(--pos-text-secondary)'
                                                                    },
                                                                    children: [
                                                                        slot.slotName,
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                slot.option.name
                                                            ]
                                                        }, slot.slotId, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 152,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 143,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '18px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-primary)',
                                            letterSpacing: '-0.02em'
                                        },
                                        children: [
                                            "$",
                                            (item.price * item.quantity).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 188,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 142,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onEditItem(item),
                                                style: {
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '12px',
                                                    background: 'var(--pos-bg-surface)',
                                                    border: '1px solid var(--pos-border-subtle)',
                                                    color: 'var(--pos-text-secondary)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s'
                                                },
                                                className: "hover-scale",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                    size: 18,
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 196,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onRemoveItem(item.id),
                                                style: {
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '12px',
                                                    background: 'rgba(239, 68, 68, 0.05)',
                                                    border: '1px solid rgba(239, 68, 68, 0.15)',
                                                    color: '#EF4444',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s'
                                                },
                                                className: "hover-scale",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                    size: 18,
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 215,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 195,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'var(--pos-bg-surface)',
                                            height: '48px',
                                            borderRadius: '16px',
                                            border: '1px solid var(--pos-border-subtle)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    width: '40px',
                                                    height: '40px',
                                                    border: 'none',
                                                    background: 'transparent',
                                                    color: 'var(--pos-text-primary)',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                },
                                                onClick: ()=>onUpdateQuantity(item.id, item.quantity - 1),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                    size: 20,
                                                    strokeWidth: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 245,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '18px',
                                                    minWidth: '40px',
                                                    textAlign: 'center',
                                                    fontWeight: 900,
                                                    color: 'var(--pos-text-primary)'
                                                },
                                                children: item.quantity
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 261,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    width: '40px',
                                                    height: '40px',
                                                    border: 'none',
                                                    background: 'transparent',
                                                    color: 'var(--pos-text-primary)',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                },
                                                onClick: ()=>onUpdateQuantity(item.id, item.quantity + 1),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    size: 20,
                                                    strokeWidth: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 264,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 236,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 194,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `${item.id}-${idx}`, true, {
                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                        lineNumber: 129,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '32px',
                    background: 'var(--pos-bg-card)',
                    borderTop: '1px solid var(--pos-border-subtle)',
                    boxShadow: '0 -10px 30px rgba(0,0,0,0.2)'
                },
                children: [
                    activeRules.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '12px 16px',
                            background: 'rgba(31, 164, 169, 0.03)',
                            border: '1px solid rgba(31, 164, 169, 0.1)',
                            borderRadius: '16px',
                            marginBottom: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '10px',
                                    color: 'var(--pos-action-primary)',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        size: 12,
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 316,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Active Pricing Rules"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 306,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeRules.map((rule, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '12px',
                                        color: 'var(--pos-text-secondary)',
                                        fontWeight: 600
                                    },
                                    children: [
                                        "• ",
                                        rule
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                    lineNumber: 319,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                        lineNumber: 296,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            marginBottom: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '15px',
                                    color: 'var(--pos-text-muted)',
                                    fontWeight: 700
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Subtotal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 328,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--pos-text-secondary)'
                                        },
                                        children: [
                                            "$",
                                            subtotal.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 329,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 327,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            discounts > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '15px',
                                    color: '#EF4444',
                                    fontWeight: 700
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Discount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 335,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onRemoveDiscount,
                                                style: {
                                                    background: 'rgba(239, 68, 68, 0.1)',
                                                    border: 'none',
                                                    color: '#EF4444',
                                                    padding: '2px 6px',
                                                    borderRadius: '4px',
                                                    fontSize: '10px',
                                                    cursor: 'pointer',
                                                    fontWeight: 900
                                                },
                                                children: "REMOVE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 336,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 334,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "-$",
                                            discounts.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 352,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 333,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            discounts === 0 && cart.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onAddDiscount,
                                style: {
                                    alignSelf: 'flex-start',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--pos-action-primary)',
                                    fontSize: '13px',
                                    fontWeight: 800,
                                    cursor: 'pointer',
                                    padding: '4px 0',
                                    textDecoration: 'underline'
                                },
                                children: "+ Apply Discount"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 357,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '15px',
                                    color: 'var(--pos-text-muted)',
                                    fontWeight: 700
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tax (8%)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 376,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--pos-text-secondary)'
                                        },
                                        children: [
                                            "$",
                                            tax.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 377,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 375,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            deliveryFee > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '15px',
                                    color: 'var(--pos-text-muted)',
                                    fontWeight: 700
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Delivery Fee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 382,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--pos-text-secondary)'
                                        },
                                        children: [
                                            "$",
                                            deliveryFee.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 383,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 381,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '15px',
                                    color: 'var(--pos-action-primary)',
                                    fontWeight: 700
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Tip"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 389,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '10px',
                                                    background: 'rgba(31, 164, 169, 0.1)',
                                                    padding: '2px 6px',
                                                    borderRadius: '4px',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "Optional"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 390,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 388,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '8px',
                                            alignItems: 'center'
                                        },
                                        children: tip === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '4px'
                                            },
                                            children: [
                                                10,
                                                15,
                                                20
                                            ].map((pct)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onUpdateTip(subtotal * pct / 100),
                                                    style: {
                                                        background: 'rgba(31, 164, 169, 0.05)',
                                                        border: '1px solid rgba(31, 164, 169, 0.1)',
                                                        borderRadius: '6px',
                                                        padding: '2px 8px',
                                                        fontSize: '11px',
                                                        color: 'var(--pos-action-primary)',
                                                        fontWeight: 900,
                                                        cursor: 'pointer'
                                                    },
                                                    children: [
                                                        pct,
                                                        "%"
                                                    ]
                                                }, pct, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                            lineNumber: 394,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "$",
                                                        tip.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onUpdateTip(0),
                                                    style: {
                                                        background: 'transparent',
                                                        border: 'none',
                                                        color: '#EF4444',
                                                        fontSize: '11px',
                                                        fontWeight: 900,
                                                        cursor: 'pointer',
                                                        textDecoration: 'underline'
                                                    },
                                                    children: "Clear"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                            lineNumber: 415,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 392,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 387,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: '1px',
                                    background: 'var(--pos-border-subtle)',
                                    margin: '8px 0'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 436,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-end',
                                    marginTop: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: 900,
                                            color: 'var(--pos-action-primary)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        },
                                        children: "Total Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 439,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '42px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-primary)',
                                            lineHeight: 1,
                                            letterSpacing: '-0.04em'
                                        },
                                        children: [
                                            "$",
                                            total.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 440,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 438,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                        lineNumber: 326,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '12px',
                            marginBottom: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onHoldOrder,
                                disabled: cart.length === 0,
                                style: {
                                    flex: 1,
                                    height: '56px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid var(--pos-border-subtle)',
                                    color: cart.length > 0 ? 'var(--pos-text-primary)' : 'var(--pos-text-muted)',
                                    borderRadius: '16px',
                                    fontSize: '13px',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    opacity: cart.length > 0 ? 1 : 0.5
                                },
                                className: cart.length > 0 ? "hover-scale" : "",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 471,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Hold Order"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 448,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1.2,
                                    position: 'relative'
                                },
                                children: !isConfirmingClear ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsConfirmingClear(true),
                                    disabled: cart.length === 0,
                                    style: {
                                        width: '100%',
                                        height: '56px',
                                        background: 'rgba(239, 68, 68, 0.05)',
                                        border: '1px solid rgba(239, 68, 68, 0.15)',
                                        color: cart.length > 0 ? '#EF4444' : 'var(--pos-text-muted)',
                                        borderRadius: '16px',
                                        fontSize: '13px',
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        opacity: cart.length > 0 ? 1 : 0.5
                                    },
                                    className: cart.length > 0 ? "hover-scale" : "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                            lineNumber: 499,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Clear Cart"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                    lineNumber: 476,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '6px',
                                        height: '56px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onClearCart();
                                                setIsConfirmingClear(false);
                                            },
                                            style: {
                                                flex: 1,
                                                background: '#EF4444',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '12px',
                                                fontSize: '12px',
                                                fontWeight: 900,
                                                cursor: 'pointer'
                                            },
                                            children: "Confirm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                            lineNumber: 503,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsConfirmingClear(false),
                                            style: {
                                                flex: 1,
                                                background: 'var(--pos-bg-surface)',
                                                color: 'var(--pos-text-muted)',
                                                border: '1px solid var(--pos-border-subtle)',
                                                borderRadius: '12px',
                                                fontSize: '12px',
                                                fontWeight: 900,
                                                cursor: 'pointer'
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                            lineNumber: 521,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                    lineNumber: 502,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 474,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                        lineNumber: 447,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCheckout,
                        disabled: cart.length === 0,
                        style: {
                            width: '100%',
                            height: '80px',
                            background: cart.length > 0 ? 'linear-gradient(135deg, var(--pos-action-primary) 0%, #178d91 100%)' : 'var(--pos-bg-surface)',
                            color: cart.length > 0 ? 'white' : 'var(--pos-text-muted)',
                            border: 'none',
                            borderRadius: '24px',
                            fontSize: '22px',
                            fontWeight: 900,
                            cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '16px',
                            boxShadow: cart.length > 0 ? '0 20px 40px -10px rgba(31, 164, 169, 0.4)' : 'none',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            letterSpacing: '0.02em',
                            opacity: cart.length > 0 ? 1 : 0.5
                        },
                        className: cart.length > 0 ? "hover-scale" : "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreditCardContent, {
                            total: total,
                            disabled: cart.length === 0
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                            lineNumber: 568,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                        lineNumber: 542,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                lineNumber: 288,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes posFadeInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                lineNumber: 572,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSCartPanel, "YzUMaOMlS0GENaB3DJHmpSTbJ4A=");
_c = POSCartPanel;
const CreditCardContent = ({ total, disabled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: disabled ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                    size: 22,
                    color: disabled ? 'var(--pos-text-muted)' : 'white',
                    strokeWidth: 2.5
                }, void 0, false, {
                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                    lineNumber: 593,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                lineNumber: 584,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: disabled ? 'EMPTY CART' : `PROCEED TO PAYMENT ($${total.toFixed(2)})`
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                lineNumber: 595,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
        lineNumber: 583,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = CreditCardContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "POSCartPanel");
__turbopack_context__.k.register(_c1, "CreditCardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/pos/components/POSPaymentModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSPaymentModal",
    ()=>POSPaymentModal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/columns-2.js [app-client] (ecmascript) <export default as Columns>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
'use client';
;
;
;
const paymentMethods = [
    {
        id: 'cash',
        label: 'Cash',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"],
        color: '#10B981',
        description: 'Take physical currency'
    },
    {
        id: 'card',
        label: 'Card',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
        color: '#3B82F6',
        description: 'Swipe or Dip card'
    },
    {
        id: 'terminal',
        label: 'Terminal',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"],
        color: '#8B5CF6',
        description: 'External device'
    },
    {
        id: 'wallet',
        label: 'Wallet',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        color: '#F59E0B',
        description: 'Apple Pay, G-Pay, etc.'
    },
    {
        id: 'gift_card',
        label: 'Gift Card',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
        color: '#EC4899',
        description: 'Redeem store credit'
    },
    {
        id: 'split',
        label: 'Split Payment',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns$3e$__["Columns"],
        color: '#6366F1',
        description: 'Multiple methods'
    }
];
const POSPaymentModal = ({ isOpen, onClose, total, onSelectMethod, disabledMethods = [] })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pos-modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pos-modal",
            style: {
                width: '800px',
                maxWidth: '95vw'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-modal-header",
                    style: {
                        padding: '32px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pos-title-md",
                                    style: {
                                        fontSize: '24px',
                                        fontWeight: 900
                                    },
                                    children: "Select Payment Method"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '14px',
                                        color: 'var(--pos-text-muted)',
                                        fontWeight: 600,
                                        marginTop: '4px'
                                    },
                                    children: [
                                        "Order Total: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--pos-action-primary)',
                                                fontWeight: 900
                                            },
                                            children: [
                                                "$",
                                                total.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                            lineNumber: 40,
                                            columnNumber: 42
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "pos-btn-secondary",
                            onClick: onClose,
                            style: {
                                width: '48px',
                                height: '48px',
                                padding: 0,
                                borderRadius: '16px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-modal-body",
                    style: {
                        padding: '0 32px 32px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '20px'
                            },
                            children: paymentMethods.map((method)=>{
                                const isDisabled = disabledMethods.includes(method.id);
                                const Icon = method.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>!isDisabled && onSelectMethod(method.id),
                                    disabled: isDisabled,
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '32px 24px',
                                        background: isDisabled ? 'rgba(255,255,255,0.02)' : 'var(--pos-bg-card)',
                                        border: isDisabled ? '1px solid rgba(255,255,255,0.05)' : '1px solid var(--pos-border-subtle)',
                                        borderRadius: '28px',
                                        cursor: isDisabled ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        gap: '16px',
                                        opacity: isDisabled ? 0.4 : 1
                                    },
                                    className: !isDisabled ? "hover-scale" : "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '72px',
                                                height: '72px',
                                                borderRadius: '22px',
                                                background: isDisabled ? 'rgba(255,255,255,0.05)' : `${method.color}15`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: isDisabled ? 'var(--pos-text-muted)' : method.color,
                                                border: `1px solid ${isDisabled ? 'transparent' : `${method.color}30`}`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 36,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                                lineNumber: 96,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '18px',
                                                        fontWeight: 900,
                                                        color: isDisabled ? 'var(--pos-text-muted)' : 'var(--pos-text-primary)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.02em',
                                                        marginBottom: '4px'
                                                    },
                                                    children: method.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '12px',
                                                        color: 'var(--pos-text-muted)',
                                                        fontWeight: 600,
                                                        lineHeight: 1.4
                                                    },
                                                    children: isDisabled ? 'Method Unavailable' : method.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isDisabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: '12px',
                                                right: '12px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                size: 16,
                                                color: "var(--pos-text-muted)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                                lineNumber: 126,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        !isDisabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '4px',
                                                background: method.color,
                                                opacity: 0.3
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, method.id, true, {
                                    fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '32px',
                                padding: '20px',
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: '20px',
                                border: '1px solid var(--pos-border-subtle)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: 'var(--pos-action-primary)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '13px',
                                        color: 'var(--pos-text-muted)',
                                        fontWeight: 600
                                    },
                                    children: "All payments are securely processed and recorded for this session."
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/modules/pos/components/POSPaymentModal.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = POSPaymentModal;
const __TURBOPACK__default__export__ = POSPaymentModal;
var _c;
__turbopack_context__.k.register(_c, "POSPaymentModal");
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

//# sourceMappingURL=src_modules_pos_components_1c44a6af._.js.map