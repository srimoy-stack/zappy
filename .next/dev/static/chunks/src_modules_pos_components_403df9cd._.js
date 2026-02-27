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
"[project]/src/modules/pos/components/POSCustomizationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSCustomizationModal",
    ()=>POSCustomizationModal
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
const POSCustomizationModal = ({ isOpen, product, initialItem, onClose, onAddToCart })=>{
    _s();
    // ------------------------------------------------------------------
    // STATE
    // ------------------------------------------------------------------
    // Global
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [animating, setAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Standard Product State
    const [selectedVariants, setSelectedVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedModifiers, setSelectedModifiers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Combo Product State
    const GLOBAL_SETTINGS_ID = 'GLOBAL_SETTINGS';
    const [activeSlotId, setActiveSlotId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [slotSelections, setSlotSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [shakingSlot, setShakingSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ------------------------------------------------------------------
    // EFFECTS
    // ------------------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSCustomizationModal.useEffect": ()=>{
            if (isOpen) {
                setAnimating(true);
                return;
            }
            const timer = setTimeout({
                "POSCustomizationModal.useEffect.timer": ()=>setAnimating(false)
            }["POSCustomizationModal.useEffect.timer"], 300);
            return ({
                "POSCustomizationModal.useEffect": ()=>clearTimeout(timer)
            })["POSCustomizationModal.useEffect"];
        }
    }["POSCustomizationModal.useEffect"], [
        isOpen
    ]);
    // Reset or Initialize when product opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSCustomizationModal.useEffect": ()=>{
            if (isOpen && product) {
                // Standard Product Init
                if (!product.isCombo) {
                    if (initialItem) {
                        // Populate from existing item
                        const initialVariants = {};
                        initialItem.variants?.forEach({
                            "POSCustomizationModal.useEffect": (v)=>{
                                initialVariants[v.groupId] = v.optionId;
                            }
                        }["POSCustomizationModal.useEffect"]);
                        setSelectedVariants(initialVariants);
                        const initialMods = {};
                        initialItem.modifiers?.forEach({
                            "POSCustomizationModal.useEffect": (m)=>{
                                initialMods[m.optionId] = {
                                    optionId: m.optionId,
                                    quantity: m.quantity,
                                    price: m.price,
                                    name: m.name
                                };
                            }
                        }["POSCustomizationModal.useEffect"]);
                        setSelectedModifiers(initialMods);
                        setNotes(initialItem.notes || '');
                        setQuantity(initialItem.quantity || 1);
                    } else {
                        // Reset with Defaults
                        const defaultVariants = {};
                        product.variantGroups?.forEach({
                            "POSCustomizationModal.useEffect": (g)=>{
                                const def = g.options.find({
                                    "POSCustomizationModal.useEffect": (o)=>o.isDefault
                                }["POSCustomizationModal.useEffect"]) || g.options[0];
                                if (def) defaultVariants[g.id] = def.id;
                            }
                        }["POSCustomizationModal.useEffect"]);
                        const defaultMods = {};
                        product.modifierGroups?.forEach({
                            "POSCustomizationModal.useEffect": (g)=>{
                                g.options.forEach({
                                    "POSCustomizationModal.useEffect": (opt)=>{
                                        if (opt.isDefault) {
                                            defaultMods[opt.id] = {
                                                optionId: opt.id,
                                                quantity: 1,
                                                price: opt.price,
                                                name: opt.name
                                            };
                                        }
                                    }
                                }["POSCustomizationModal.useEffect"]);
                            }
                        }["POSCustomizationModal.useEffect"]);
                        setSelectedVariants(defaultVariants);
                        setSelectedModifiers(defaultMods);
                        setNotes('');
                        setQuantity(1);
                    }
                } else {
                    // Determine initial view (Global Settings if they exist, else First Slot)
                    const hasGlobalOptions = (product.variantGroups?.length || 0) > 0 || (product.modifierGroups?.length || 0) > 0;
                    if (hasGlobalOptions) {
                        setActiveSlotId(GLOBAL_SETTINGS_ID);
                    } else if (product.slots && product.slots.length > 0) {
                        setActiveSlotId(product.slots[0].id);
                    }
                    if (initialItem && initialItem.isCombo) {
                        // Rehydrate combo state 
                        const initialSlotSels = {};
                        initialItem.slots?.forEach({
                            "POSCustomizationModal.useEffect": (s)=>{
                                const mods = {};
                                s.modifiers?.forEach({
                                    "POSCustomizationModal.useEffect": (m)=>{
                                        mods[m.optionId] = m;
                                    }
                                }["POSCustomizationModal.useEffect"]);
                                initialSlotSels[s.slotId] = {
                                    option: s.option,
                                    variants: s.variants || {},
                                    modifiers: mods
                                };
                            }
                        }["POSCustomizationModal.useEffect"]);
                        setSlotSelections(initialSlotSels);
                        setQuantity(initialItem.quantity || 1);
                        setNotes(initialItem.notes || '');
                        // Rehydrate global options for combo
                        const initialVariants = {};
                        initialItem.variants?.forEach({
                            "POSCustomizationModal.useEffect": (v)=>{
                                initialVariants[v.groupId] = v.optionId;
                            }
                        }["POSCustomizationModal.useEffect"]);
                        setSelectedVariants(initialVariants);
                        const initialMods = {};
                        initialItem.modifiers?.forEach({
                            "POSCustomizationModal.useEffect": (m)=>{
                                initialMods[m.optionId] = m;
                            }
                        }["POSCustomizationModal.useEffect"]);
                        setSelectedModifiers(initialMods);
                    } else {
                        setSlotSelections({});
                        setQuantity(1);
                        setNotes('');
                        setSelectedVariants({});
                        setSelectedModifiers({});
                    }
                }
            }
        }
    }["POSCustomizationModal.useEffect"], [
        isOpen,
        product,
        initialItem
    ]);
    // Derived Constants (Safe access for null product)
    const isCombo = product ? !!product.isCombo || !!product.comboSlots || product.slots && product.slots.length > 0 : false;
    const slots = product?.slots || [];
    const activeSlot = isCombo ? slots.find((s)=>s.id === activeSlotId) : null;
    // ------------------------------------------------------------------
    // CALCULATIONS & VALIDATION (Moved Before Returns)
    // ------------------------------------------------------------------
    const { totalPrice, modifierTotal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSCustomizationModal.useMemo": ()=>{
            if (!product) return {
                modifierTotal: 0,
                totalPrice: 0
            };
            let base = product.price;
            let mods = 0;
            // 1. Calculate Global Options (Both Standard and Combo)
            product.variantGroups?.forEach({
                "POSCustomizationModal.useMemo": (g)=>{
                    const sId = selectedVariants[g.id];
                    if (sId) {
                        const opt = g.options.find({
                            "POSCustomizationModal.useMemo.opt": (o)=>o.id === sId
                        }["POSCustomizationModal.useMemo.opt"]);
                        if (opt) base += opt.additionalPrice;
                    }
                }
            }["POSCustomizationModal.useMemo"]);
            Object.values(selectedModifiers).forEach({
                "POSCustomizationModal.useMemo": (m)=>{
                    mods += m.price * m.quantity;
                }
            }["POSCustomizationModal.useMemo"]);
            // 2. Calculate Slot-specific Options (Combo only)
            if (isCombo) {
                Object.values(slotSelections).forEach({
                    "POSCustomizationModal.useMemo": (sel)=>{
                        if (sel.option) base += sel.option.price || 0;
                        if (sel.modifiers) {
                            Object.values(sel.modifiers).forEach({
                                "POSCustomizationModal.useMemo": (m)=>{
                                    mods += m.price * m.quantity;
                                }
                            }["POSCustomizationModal.useMemo"]);
                        }
                        // Slot-specific variants price
                        if (sel.option && sel.variants) {
                        // Note: Usually slot options themselves have the price, 
                        // and variants might add to it. Assuming sel.option.price 
                        // covers the base slot product.
                        }
                    }
                }["POSCustomizationModal.useMemo"]);
            }
            return {
                modifierTotal: mods,
                totalPrice: (base + mods) * quantity
            };
        }
    }["POSCustomizationModal.useMemo"], [
        product,
        isCombo,
        selectedVariants,
        selectedModifiers,
        slotSelections,
        quantity
    ]);
    const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSCustomizationModal.useMemo[validation]": ()=>{
            if (!product) return {
                isValid: false,
                incompleteSlots: [],
                missingGlobal: false
            };
            // 1. Check Global Options (Always)
            const missingVariantGroups = product.variantGroups?.filter({
                "POSCustomizationModal.useMemo[validation]": (g)=>!selectedVariants[g.id]
            }["POSCustomizationModal.useMemo[validation]"]) || [];
            const missingModifierGroups = product.modifierGroups?.filter({
                "POSCustomizationModal.useMemo[validation]": (g)=>{
                    if (!g.minSelection) return false;
                    const count = g.options.filter({
                        "POSCustomizationModal.useMemo[validation]": (o)=>selectedModifiers[o.id]
                    }["POSCustomizationModal.useMemo[validation]"]).length;
                    return count < g.minSelection;
                }
            }["POSCustomizationModal.useMemo[validation]"]) || [];
            const isGlobalValid = missingVariantGroups.length === 0 && missingModifierGroups.length === 0;
            if (!isCombo) {
                return {
                    isValid: isGlobalValid,
                    incompleteSlots: [],
                    missingGlobal: !isGlobalValid
                };
            } else {
                // 2. Check Combo Slots
                const incompleteSlots = slots.filter({
                    "POSCustomizationModal.useMemo[validation].incompleteSlots": (s)=>{
                        const sel = slotSelections[s.id];
                        if (!sel || !sel.option) return true;
                        if (activeSlot?.id === s.id) {
                        // Additional per-slot validation could go here
                        }
                        // Check required variants for the slot selection
                        if (s.variantGroups) {
                            const missingVars = s.variantGroups.some({
                                "POSCustomizationModal.useMemo[validation].incompleteSlots.missingVars": (g)=>g.required && !sel.variants?.[g.id]
                            }["POSCustomizationModal.useMemo[validation].incompleteSlots.missingVars"]);
                            if (missingVars) return true;
                        }
                        return false;
                    }
                }["POSCustomizationModal.useMemo[validation].incompleteSlots"]);
                return {
                    isValid: isGlobalValid && incompleteSlots.length === 0,
                    incompleteSlots,
                    missingGlobal: !isGlobalValid
                };
            }
        }
    }["POSCustomizationModal.useMemo[validation]"], [
        product,
        isCombo,
        selectedVariants,
        selectedModifiers,
        slotSelections,
        slots
    ]);
    // ------------------------------------------------------------------
    // HANDLERS
    // ------------------------------------------------------------------
    const handleStandardVariantSelect = (groupId, optionId)=>{
        setSelectedVariants((prev)=>({
                ...prev,
                [groupId]: optionId
            }));
    };
    const handleStandardModifierToggle = (group, option)=>{
        const existing = selectedModifiers[option.id];
        if (existing) {
            // Remove
            const next = {
                ...selectedModifiers
            };
            delete next[option.id];
            setSelectedModifiers(next);
        } else {
            // Add - Check Max Selection
            // Count current selections in this group
            const currentCount = group.options.filter((o)=>selectedModifiers[o.id]).length;
            if (group.maxSelection && currentCount >= group.maxSelection) {
                // If single select (max 1), replace. Else ignore or shake?
                if (group.maxSelection === 1) {
                    // Find the existing one and remove it, then add new
                    const otherOption = group.options.find((o)=>selectedModifiers[o.id]);
                    const next = {
                        ...selectedModifiers
                    };
                    if (otherOption) delete next[otherOption.id];
                    next[option.id] = {
                        optionId: option.id,
                        quantity: 1,
                        price: option.price,
                        name: option.name
                    };
                    setSelectedModifiers(next);
                    return;
                }
                return; // Max reached
            }
            setSelectedModifiers((prev)=>({
                    ...prev,
                    [option.id]: {
                        optionId: option.id,
                        quantity: 1,
                        price: option.price,
                        name: option.name
                    }
                }));
        }
    };
    const handleStandardModifierQty = (optionId, delta)=>{
        const existing = selectedModifiers[optionId];
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
    // ------------------------------------------------------------------
    // LOGIC: COMBO PRODUCT
    // ------------------------------------------------------------------
    const handleSlotOptionSelect = (option)=>{
        if (!activeSlot) return;
        setSlotSelections((prev)=>({
                ...prev,
                [activeSlot.id]: {
                    option,
                    variants: {},
                    modifiers: {}
                }
            }));
    };
    const handleSlotVariantSelect = (groupId, option)=>{
        if (!activeSlot) return;
        setSlotSelections((prev)=>({
                ...prev,
                [activeSlot.id]: {
                    ...prev[activeSlot.id],
                    variants: {
                        ...prev[activeSlot.id]?.variants,
                        [groupId]: option.id
                    }
                }
            }));
    };
    const handleSlotModifierToggle = (group, option)=>{
        if (!activeSlot) return;
        const currentSlotSel = slotSelections[activeSlot.id] || {
            option: null,
            variants: {},
            modifiers: {}
        };
        const currentModifiers = {
            ...currentSlotSel.modifiers
        };
        if (currentModifiers[option.id]) {
            delete currentModifiers[option.id];
        } else {
            // Max check
            const currentCount = group.options.filter((o)=>currentModifiers[o.id]).length;
            if (group.maxSelection && currentCount >= group.maxSelection) {
                if (group.maxSelection === 1) {
                    const other = group.options.find((o)=>currentModifiers[o.id]);
                    if (other) delete currentModifiers[other.id];
                    currentModifiers[option.id] = {
                        optionId: option.id,
                        quantity: 1,
                        price: option.price,
                        name: option.name
                    };
                } else {
                    return;
                }
            } else {
                currentModifiers[option.id] = {
                    optionId: option.id,
                    quantity: 1,
                    price: option.price,
                    name: option.name
                };
            }
        }
        setSlotSelections((prev)=>({
                ...prev,
                [activeSlot.id]: {
                    ...currentSlotSel,
                    modifiers: currentModifiers
                }
            }));
    };
    const handleSlotModifierQty = (optionId, delta)=>{
        if (!activeSlot) return;
        const currentSlotSel = slotSelections[activeSlot.id];
        if (!currentSlotSel) return;
        const currentModifiers = {
            ...currentSlotSel.modifiers
        };
        const mod = currentModifiers[optionId];
        if (!mod) return;
        const newQty = mod.quantity + delta;
        if (newQty <= 0) {
            delete currentModifiers[optionId];
        } else {
            currentModifiers[optionId] = {
                ...mod,
                quantity: newQty
            };
        }
        setSlotSelections((prev)=>({
                ...prev,
                [activeSlot.id]: {
                    ...currentSlotSel,
                    modifiers: currentModifiers
                }
            }));
    };
    const handleSubmit = ()=>{
        if (!validation.isValid) {
            // Shake/Highlight Logic
            if (validation.missingGlobal) {
                setActiveSlotId(GLOBAL_SETTINGS_ID);
                return;
            }
            if (isCombo && validation.incompleteSlots.length > 0) {
                const first = validation.incompleteSlots[0];
                setShakingSlot(first.id);
                setTimeout(()=>setShakingSlot(null), 500);
                setActiveSlotId(first.id);
            }
            return;
        }
        if (!product) return;
        const cartItem = {
            id: initialItem?.id || Math.random().toString(36).substr(2, 9),
            productId: product.id,
            name: product.name,
            price: totalPrice / quantity,
            quantity: quantity,
            isCombo,
            kitchenNote: notes.trim(),
            notes: notes.trim(),
            // Standard Fields
            variants: Object.entries(selectedVariants).map(([gId, oId])=>{
                const group = product.variantGroups?.find((g)=>g.id === gId);
                const option = group?.options.find((o)=>o.id === oId);
                return {
                    groupId: gId,
                    optionId: oId,
                    name: option?.name,
                    price: option?.additionalPrice || 0
                };
            }),
            modifiers: Object.values(selectedModifiers).map((m)=>({
                    optionId: m.optionId,
                    name: m.name,
                    price: m.price,
                    quantity: m.quantity
                })),
            // Combo Fields
            slots: isCombo ? Object.entries(slotSelections).map(([sId, sel])=>{
                const slotDef = product.slots?.find((s)=>s.id === sId);
                return {
                    slotId: sId,
                    slotName: slotDef?.name || 'Slot',
                    option: sel.option,
                    variants: Object.entries(sel.variants).map(([vgId, voId])=>{
                        const variantOption = slotDef?.variantGroups?.find((g)=>g.id === vgId)?.options.find((o)=>o.id === voId);
                        return {
                            groupId: vgId,
                            optionId: voId,
                            name: variantOption?.name || 'Standard',
                            price: variantOption?.additionalPrice || 0
                        };
                    }),
                    modifiers: Object.values(sel.modifiers)
                };
            }) : undefined
        };
        onAddToCart(cartItem);
        onClose();
    };
    // ------------------------------------------------------------------
    // RENDER HELPERS
    // ------------------------------------------------------------------
    const renderCounter = (count, onMinus, onPlus, size = 'sm')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `pos-quantity-control ${size === 'lg' ? 'pos-qty-lg' : ''}`,
            style: {
                background: 'var(--pos-bg-main)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "pos-qty-btn",
                    onClick: (e)=>{
                        e.stopPropagation();
                        onMinus();
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                        size: size === 'lg' ? 20 : 14,
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                        lineNumber: 498,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                    lineNumber: 497,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pos-qty-value",
                    style: {
                        fontSize: size === 'lg' ? '18px' : '14px'
                    },
                    children: count
                }, void 0, false, {
                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                    lineNumber: 500,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "pos-qty-btn",
                    onClick: (e)=>{
                        e.stopPropagation();
                        onPlus();
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        size: size === 'lg' ? 20 : 14,
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                        lineNumber: 502,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                    lineNumber: 501,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
            lineNumber: 496,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    // ------------------------------------------------------------------
    // EARLY RETURN / RENDER
    // ------------------------------------------------------------------
    if (!isOpen && !animating) return null;
    if (!product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pos-modal-overlay",
        onClick: onClose,
        style: {
            backdropFilter: 'blur(12px)',
            background: 'rgba(0,0,0,0.6)',
            transition: 'opacity 0.2s',
            opacity: isOpen ? 1 : 0,
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            padding: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pos-custom-sheet",
            onClick: (e)=>e.stopPropagation(),
            style: {
                width: 'calc(100% - 400px)',
                maxWidth: '1000px',
                marginLeft: '20px',
                marginRight: 'auto',
                marginTop: '20px',
                marginBottom: '20px',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--pos-bg-surface)',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                overflow: 'hidden',
                border: '1px solid var(--pos-border-subtle)',
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '24px 32px',
                        borderBottom: '1px solid var(--pos-border-subtle)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        background: 'var(--pos-bg-card)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginBottom: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `pos-badge ${isCombo ? 'pos-badge-warning' : 'pos-badge-success'}`,
                                            children: isCombo ? 'COMBO BUILDER' : 'CUSTOMIZE'
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                            lineNumber: 552,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        product.isFavorite && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pos-badge",
                                            children: "FAVORITE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                            lineNumber: 555,
                                            columnNumber: 52
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                    lineNumber: 551,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: '28px',
                                        fontWeight: 900,
                                        lineHeight: 1.1,
                                        color: 'var(--pos-text-primary)'
                                    },
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                    lineNumber: 557,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '16px',
                                        color: 'var(--pos-text-muted)',
                                        fontWeight: 600,
                                        marginTop: '4px'
                                    },
                                    children: [
                                        "Base Price: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--pos-text-primary)'
                                            },
                                            children: [
                                                "$",
                                                product.price ? product.price.toFixed(2) : '0.00'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                            lineNumber: 561,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                    lineNumber: 560,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                            lineNumber: 550,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "pos-btn-secondary",
                            style: {
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                padding: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                lineNumber: 565,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                            lineNumber: 564,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                    lineNumber: 549,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        display: 'flex',
                        overflow: 'hidden'
                    },
                    children: [
                        isCombo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '260px',
                                background: 'var(--pos-bg-main)',
                                borderRight: '1px solid var(--pos-border-subtle)',
                                display: 'flex',
                                flexDirection: 'column',
                                overflowY: 'auto'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px 16px 16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: 900,
                                            textTransform: 'uppercase',
                                            color: 'var(--pos-text-muted)',
                                            letterSpacing: '0.1em',
                                            marginBottom: '16px'
                                        },
                                        children: "Combo Slots"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 576,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '8px'
                                        },
                                        children: [
                                            ((product.variantGroups?.length || 0) > 0 || (product.modifierGroups?.length || 0) > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveSlotId(GLOBAL_SETTINGS_ID),
                                                style: {
                                                    padding: '16px',
                                                    borderRadius: '12px',
                                                    textAlign: 'left',
                                                    background: activeSlotId === GLOBAL_SETTINGS_ID ? 'var(--pos-bg-surface)' : 'transparent',
                                                    border: activeSlotId === GLOBAL_SETTINGS_ID ? '1px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                    marginBottom: '12px',
                                                    transition: 'all 0.2s'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            marginBottom: '4px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '12px',
                                                                    fontWeight: 800,
                                                                    color: activeSlotId === GLOBAL_SETTINGS_ID ? 'var(--pos-action-primary)' : 'var(--pos-text-muted)'
                                                                },
                                                                children: "COMBO OPTIONS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                lineNumber: 595,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            !validation.missingGlobal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 14,
                                                                color: "var(--pos-state-success)",
                                                                strokeWidth: 3
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                lineNumber: 598,
                                                                columnNumber: 79
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '15px',
                                                            fontWeight: 700,
                                                            color: 'var(--pos-text-primary)'
                                                        },
                                                        children: "Shared Settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 582,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            slots.map((slot, idx)=>{
                                                const active = activeSlotId === slot.id;
                                                const complete = !validation.incompleteSlots.find((s)=>s.id === slot.id);
                                                const shaking = shakingSlot === slot.id;
                                                const sel = slotSelections[slot.id];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveSlotId(slot.id),
                                                    style: {
                                                        padding: '16px',
                                                        borderRadius: '12px',
                                                        textAlign: 'left',
                                                        background: active ? 'var(--pos-bg-surface)' : 'transparent',
                                                        border: active ? '1px solid var(--pos-action-primary)' : '1px solid transparent',
                                                        position: 'relative',
                                                        animation: shaking ? 'posShake 0.4s both' : 'none',
                                                        transition: 'all 0.2s'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                marginBottom: '4px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '12px',
                                                                        fontWeight: 800,
                                                                        color: active ? 'var(--pos-action-primary)' : 'var(--pos-text-muted)'
                                                                    },
                                                                    children: [
                                                                        "SLOT ",
                                                                        idx + 1
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 626,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                complete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 14,
                                                                    color: "var(--pos-state-success)",
                                                                    strokeWidth: 3
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 629,
                                                                    columnNumber: 66
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '15px',
                                                                fontWeight: 700,
                                                                color: 'var(--pos-text-primary)'
                                                            },
                                                            children: slot.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 631,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        sel?.option && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '13px',
                                                                color: 'var(--pos-text-secondary)',
                                                                marginTop: '4px'
                                                            },
                                                            children: sel.option.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, slot.id, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 579,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                lineNumber: 575,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                            lineNumber: 574,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                padding: '0',
                                overflowY: 'auto',
                                background: 'var(--pos-bg-surface)'
                            },
                            className: "pos-scroll",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '32px',
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pos-preselected-container",
                                        style: {
                                            marginBottom: '24px',
                                            padding: '16px 20px',
                                            background: 'rgba(31, 164, 169, 0.02)',
                                            borderRadius: '16px',
                                            border: '1px solid var(--pos-border-subtle)',
                                            boxShadow: '0 2px 8px -2px rgba(0,0,0,0.05)'
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '13px',
                                                            fontWeight: 900,
                                                            color: 'var(--pos-action-primary)',
                                                            margin: 0,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.1em'
                                                        },
                                                        children: "Pre-Selected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                        lineNumber: 657,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 800,
                                                            color: 'var(--pos-text-muted)',
                                                            background: 'var(--pos-bg-main)',
                                                            padding: '2px 8px',
                                                            borderRadius: '4px',
                                                            border: '1px solid var(--pos-border-subtle)'
                                                        },
                                                        children: "ACTIVE CONFIGURATION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 656,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    product.variantGroups?.map((group)=>{
                                                        const selectedId = selectedVariants[group.id];
                                                        const option = group.options.find((o)=>o.id === selectedId);
                                                        if (!option) return null;
                                                        const isOriginalDefault = option.isDefault;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '6px 12px',
                                                                background: isOriginalDefault ? 'white' : 'rgba(245, 158, 11, 0.05)',
                                                                borderRadius: '8px',
                                                                border: isOriginalDefault ? '1px solid var(--pos-border-subtle)' : '1px solid rgba(245, 158, 11, 0.2)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '6px',
                                                                transition: 'all 0.2s'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '8px',
                                                                                fontWeight: 800,
                                                                                color: 'var(--pos-text-muted)',
                                                                                textTransform: 'uppercase'
                                                                            },
                                                                            children: group.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 687,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '12px',
                                                                                fontWeight: 800,
                                                                                color: 'var(--pos-text-primary)'
                                                                            },
                                                                            children: option.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 688,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 686,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                isOriginalDefault ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 10,
                                                                    color: "var(--pos-action-primary)",
                                                                    strokeWidth: 4
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 690,
                                                                    columnNumber: 70
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: '6px',
                                                                        height: '6px',
                                                                        borderRadius: '50%',
                                                                        background: '#d97706'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 690,
                                                                    columnNumber: 142
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, group.id, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    }),
                                                    product.modifierGroups?.flatMap((g)=>g.options.filter((o)=>o.isDefault && selectedModifiers[o.id])).map((mod)=>{
                                                        const selection = selectedModifiers[mod.id];
                                                        if (!selection) return null;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '6px 12px',
                                                                background: 'white',
                                                                borderRadius: '8px',
                                                                border: '1px solid var(--pos-border-subtle)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '6px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '8px',
                                                                                fontWeight: 800,
                                                                                color: 'var(--pos-action-primary)',
                                                                                textTransform: 'uppercase'
                                                                            },
                                                                            children: "PRESET"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 710,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '12px',
                                                                                fontWeight: 800,
                                                                                color: 'var(--pos-text-primary)'
                                                                            },
                                                                            children: [
                                                                                mod.name,
                                                                                selection.quantity > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        color: 'var(--pos-action-primary)',
                                                                                        marginLeft: '4px'
                                                                                    },
                                                                                    children: [
                                                                                        "x",
                                                                                        selection.quantity
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                                    lineNumber: 713,
                                                                                    columnNumber: 84
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 711,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 709,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 10,
                                                                    color: "var(--pos-action-primary)",
                                                                    strokeWidth: 4
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 716,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, mod.id, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    }),
                                                    product.modifierGroups?.flatMap((g)=>g.options.filter((o)=>o.isDefault && !selectedModifiers[o.id])).map((mod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '6px 12px',
                                                                background: 'rgba(239, 68, 68, 0.02)',
                                                                borderRadius: '8px',
                                                                border: '1px dashed rgba(239, 68, 68, 0.2)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '6px',
                                                                opacity: 0.8
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '8px',
                                                                                fontWeight: 800,
                                                                                color: '#ef4444',
                                                                                textTransform: 'uppercase'
                                                                            },
                                                                            children: "REMOVED"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 734,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '12px',
                                                                                fontWeight: 800,
                                                                                color: '#ef4444'
                                                                            },
                                                                            children: [
                                                                                "NO ",
                                                                                mod.name.toUpperCase()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 735,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 733,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 10,
                                                                    color: "#ef4444",
                                                                    strokeWidth: 4
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 737,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, mod.id, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 723,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 663,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 648,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    (!isCombo || activeSlotId === GLOBAL_SETTINGS_ID) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            product.variantGroups?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: '40px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'baseline',
                                                                marginBottom: '16px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    style: {
                                                                        fontSize: '18px',
                                                                        fontWeight: 800
                                                                    },
                                                                    children: group.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 750,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "pos-badge pos-badge-warning",
                                                                    children: "REQUIRED"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 751,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pos-grid-3",
                                                            children: group.options.map((option)=>{
                                                                const isSelected = selectedVariants[group.id] === option.id;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleStandardVariantSelect(group.id, option.id),
                                                                    style: {
                                                                        padding: '20px',
                                                                        borderRadius: '16px',
                                                                        border: isSelected ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                                        background: isSelected ? 'rgba(31, 164, 169, 0.1)' : 'var(--pos-bg-card)',
                                                                        textAlign: 'left',
                                                                        cursor: 'pointer',
                                                                        transition: 'all 0.15s'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontWeight: 700,
                                                                                color: isSelected ? 'var(--pos-action-primary)' : 'var(--pos-text-primary)',
                                                                                marginBottom: '4px'
                                                                            },
                                                                            children: option.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 770,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '13px',
                                                                                color: 'var(--pos-text-muted)'
                                                                            },
                                                                            children: option.additionalPrice > 0 ? `+$${option.additionalPrice.toFixed(2)}` : 'Included'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 771,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, option.id, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 757,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, group.id, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '1px',
                                                    background: 'var(--pos-border-subtle)',
                                                    margin: '32px 0'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 781,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            product.modifierGroups?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: '40px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'baseline',
                                                                marginBottom: '16px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    style: {
                                                                        fontSize: '18px',
                                                                        fontWeight: 800
                                                                    },
                                                                    children: group.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 787,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '13px',
                                                                        fontWeight: 600,
                                                                        color: 'var(--pos-text-muted)'
                                                                    },
                                                                    children: group.maxSelection ? `Max ${group.maxSelection}` : 'Optional'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 788,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 786,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pos-grid-2",
                                                            children: group.options.map((option)=>{
                                                                const selection = selectedModifiers[option.id];
                                                                const isSelected = !!selection;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>handleStandardModifierToggle(group, option),
                                                                    style: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        alignItems: 'center',
                                                                        padding: '16px',
                                                                        borderRadius: '16px',
                                                                        border: isSelected ? '1px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                                        background: isSelected ? 'rgba(31, 164, 169, 0.05)' : 'var(--pos-bg-card)',
                                                                        cursor: 'pointer'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                flex: 1
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontWeight: 600,
                                                                                        color: 'var(--pos-text-primary)'
                                                                                    },
                                                                                    children: option.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                                    lineNumber: 812,
                                                                                    columnNumber: 65
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontSize: '13px',
                                                                                        color: 'var(--pos-text-muted)'
                                                                                    },
                                                                                    children: [
                                                                                        "+$",
                                                                                        option.price.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                                    lineNumber: 813,
                                                                                    columnNumber: 65
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 811,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        isSelected ? renderCounter(selection.quantity, ()=>handleStandardModifierQty(option.id, -1), ()=>handleStandardModifierQty(option.id, 1)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                width: '24px',
                                                                                height: '24px',
                                                                                borderRadius: '50%',
                                                                                border: '2px solid var(--pos-text-muted)',
                                                                                opacity: 0.5
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 822,
                                                                            columnNumber: 65
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, option.id, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 797,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, group.id, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true),
                                    isCombo && activeSlot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            animation: 'fadeIn 0.3s'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '14px',
                                                    fontWeight: 900,
                                                    textTransform: 'uppercase',
                                                    color: 'var(--pos-text-muted)',
                                                    marginBottom: '24px',
                                                    letterSpacing: '0.1em'
                                                },
                                                children: [
                                                    "Select ",
                                                    activeSlot.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 836,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '40px'
                                                },
                                                children: activeSlot.options?.map((opt)=>{
                                                    const isSelected = slotSelections[activeSlot.id]?.option?.id === opt.id;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleSlotOptionSelect(opt),
                                                        style: {
                                                            padding: '16px',
                                                            borderRadius: '16px',
                                                            border: isSelected ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                            background: isSelected ? 'rgba(31, 164, 169, 0.1)' : 'var(--pos-bg-card)',
                                                            textAlign: 'center',
                                                            cursor: 'pointer',
                                                            transition: 'transform 0.1s'
                                                        },
                                                        className: !isSelected ? 'hover-scale' : '',
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '100%',
                                                                    aspectRatio: '16/9',
                                                                    borderRadius: '8px',
                                                                    background: 'var(--pos-bg-main)',
                                                                    marginBottom: '12px',
                                                                    overflow: 'hidden'
                                                                },
                                                                children: opt.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: opt.image,
                                                                    style: {
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 860,
                                                                    columnNumber: 71
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                lineNumber: 859,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 800,
                                                                    fontSize: '15px'
                                                                },
                                                                children: opt.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                lineNumber: 862,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            opt.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: 'var(--pos-state-success)',
                                                                    fontWeight: 700,
                                                                    fontSize: '13px'
                                                                },
                                                                children: [
                                                                    "+$",
                                                                    opt.price
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 71
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, opt.id, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                        lineNumber: 845,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 841,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            slotSelections[activeSlot.id]?.option && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '24px',
                                                    background: 'var(--pos-bg-card)',
                                                    borderRadius: '16px',
                                                    border: '1px solid var(--pos-border-subtle)'
                                                },
                                                children: [
                                                    activeSlot.variantGroups?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginBottom: '24px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    style: {
                                                                        fontSize: '13px',
                                                                        fontWeight: 800,
                                                                        marginBottom: '12px',
                                                                        color: 'var(--pos-text-muted)'
                                                                    },
                                                                    children: group.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 875,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        gap: '8px',
                                                                        flexWrap: 'wrap'
                                                                    },
                                                                    children: group.options.map((v)=>{
                                                                        const isSel = slotSelections[activeSlot.id]?.variants?.[group.id] === v.id;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleSlotVariantSelect(group.id, v),
                                                                            style: {
                                                                                padding: '10px 16px',
                                                                                borderRadius: '10px',
                                                                                background: isSel ? 'var(--pos-action-primary)' : 'var(--pos-bg-surface)',
                                                                                color: isSel ? 'white' : 'var(--pos-text-secondary)',
                                                                                border: '1px solid transparent',
                                                                                fontWeight: 700,
                                                                                fontSize: '13px',
                                                                                cursor: 'pointer'
                                                                            },
                                                                            children: v.name
                                                                        }, v.id, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 880,
                                                                            columnNumber: 65
                                                                        }, ("TURBOPACK compile-time value", void 0));
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 876,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, group.id, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    activeSlot.modifierGroups?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: '24px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    style: {
                                                                        fontSize: '13px',
                                                                        fontWeight: 800,
                                                                        marginBottom: '12px',
                                                                        color: 'var(--pos-text-muted)'
                                                                    },
                                                                    children: group.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 905,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'grid',
                                                                        gridTemplateColumns: '1fr 1fr',
                                                                        gap: '12px'
                                                                    },
                                                                    children: group.options.map((m)=>{
                                                                        const sel = slotSelections[activeSlot.id]?.modifiers?.[m.id];
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            onClick: ()=>handleSlotModifierToggle(group, m),
                                                                            style: {
                                                                                padding: '12px',
                                                                                background: 'var(--pos-bg-surface)',
                                                                                borderRadius: '8px',
                                                                                display: 'flex',
                                                                                justifyContent: 'space-between',
                                                                                alignItems: 'center',
                                                                                cursor: 'pointer',
                                                                                border: sel ? '1px solid var(--pos-action-primary)' : '1px solid transparent'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontSize: '14px',
                                                                                        fontWeight: 600
                                                                                    },
                                                                                    children: [
                                                                                        m.name,
                                                                                        " ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                color: 'var(--pos-state-success)'
                                                                                            },
                                                                                            children: [
                                                                                                "+$",
                                                                                                m.price
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                                            lineNumber: 913,
                                                                                            columnNumber: 129
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                                    lineNumber: 913,
                                                                                    columnNumber: 69
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                sel ? renderCounter(sel.quantity, ()=>handleSlotModifierQty(m.id, -1), ()=>handleSlotModifierQty(m.id, 1)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                    size: 16
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                                    lineNumber: 916,
                                                                                    columnNumber: 73
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, m.id, true, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                            lineNumber: 910,
                                                                            columnNumber: 65
                                                                        }, ("TURBOPACK compile-time value", void 0));
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                                    lineNumber: 906,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, group.id, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                            lineNumber: 904,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 871,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 835,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                lineNumber: 645,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                            lineNumber: 644,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                    lineNumber: 570,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'var(--pos-bg-card)',
                        borderTop: '1px solid var(--pos-border-subtle)',
                        padding: '24px 32px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '11px',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                            color: 'var(--pos-text-muted)'
                                        },
                                        children: "Quantity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 939,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    renderCounter(quantity, ()=>setQuantity(Math.max(1, quantity - 1)), ()=>setQuantity(quantity + 1), 'lg')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                lineNumber: 938,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    margin: '0 32px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    maxWidth: '400px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    fontSize: '12px',
                                                    fontWeight: 900,
                                                    color: 'var(--pos-text-muted)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em'
                                                },
                                                children: [
                                                    "Kitchen Notes ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--pos-action-primary)'
                                                        },
                                                        children: "(Internal)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                        lineNumber: 947,
                                                        columnNumber: 51
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 946,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px'
                                                },
                                                children: [
                                                    notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setNotes(''),
                                                        style: {
                                                            background: 'none',
                                                            border: 'none',
                                                            color: '#EF4444',
                                                            fontSize: '10px',
                                                            fontWeight: 800,
                                                            cursor: 'pointer'
                                                        },
                                                        children: "CLEAR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                        lineNumber: 951,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '10px',
                                                            color: notes.length >= 150 ? '#ef4444' : 'var(--pos-text-muted)',
                                                            fontWeight: 800
                                                        },
                                                        children: [
                                                            notes.length,
                                                            "/150"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                        lineNumber: 958,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 949,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 945,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: notes,
                                        onChange: (e)=>setNotes(e.target.value.slice(0, 150)),
                                        placeholder: "prepare instructions...",
                                        style: {
                                            width: '100%',
                                            height: '42px',
                                            padding: '10px 14px',
                                            background: 'var(--pos-bg-main)',
                                            border: '1.5px solid var(--pos-border-subtle)',
                                            borderRadius: '12px',
                                            fontSize: '14px',
                                            fontWeight: 700,
                                            resize: 'none',
                                            color: 'var(--pos-text-primary)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 963,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px'
                                        },
                                        children: [
                                            'Extra Crispy',
                                            'Light Bake',
                                            'Well Done',
                                            'Cut into 4',
                                            'Cut into 6'
                                        ].map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setNotes((prev)=>{
                                                        const clean = prev.trim();
                                                        if (clean.includes(chip)) return prev;
                                                        return (clean ? `${clean}, ${chip}` : chip).slice(0, 150);
                                                    }),
                                                style: {
                                                    height: '34px',
                                                    padding: '0 12px',
                                                    borderRadius: '8px',
                                                    background: notes.includes(chip) ? 'var(--pos-action-primary)' : 'rgba(31, 164, 169, 0.05)',
                                                    border: '1px solid rgba(31, 164, 169, 0.15)',
                                                    fontSize: '11px',
                                                    fontWeight: 800,
                                                    color: notes.includes(chip) ? 'white' : 'var(--pos-action-primary)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.15s'
                                                },
                                                className: "hover-scale",
                                                children: chip
                                            }, chip, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 982,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 980,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                lineNumber: 944,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    marginRight: '32px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '14px',
                                            color: 'var(--pos-text-secondary)',
                                            marginBottom: '4px'
                                        },
                                        children: [
                                            "Modifiers: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'var(--pos-text-primary)'
                                                },
                                                children: [
                                                    "$",
                                                    modifierTotal.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                                lineNumber: 1012,
                                                columnNumber: 44
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 1011,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '32px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-primary)'
                                        },
                                        children: [
                                            "$",
                                            totalPrice.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 1014,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                lineNumber: 1010,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: !validation.isValid,
                                style: {
                                    height: '72px',
                                    padding: '0 48px',
                                    borderRadius: '16px',
                                    background: validation.isValid ? 'var(--pos-action-primary)' : 'var(--pos-border-subtle)',
                                    color: validation.isValid ? 'white' : 'var(--pos-text-muted)',
                                    border: 'none',
                                    fontSize: '20px',
                                    fontWeight: 800,
                                    cursor: validation.isValid ? 'pointer' : 'not-allowed',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    transition: 'all 0.2s',
                                    boxShadow: validation.isValid ? '0 10px 20px -5px rgba(31, 164, 169, 0.4)' : 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        size: 24,
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                        lineNumber: 1040,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    validation.isValid ? 'ADD TO ORDER' : 'COMPLETE SELECTIONS'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                                lineNumber: 1020,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                        lineNumber: 935,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
                    lineNumber: 934,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
            lineNumber: 527,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/modules/pos/components/POSCustomizationModal.tsx",
        lineNumber: 515,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSCustomizationModal, "8CpSOpbqvPOeWCcDD+MYyI8500c=");
_c = POSCustomizationModal;
var _c;
__turbopack_context__.k.register(_c, "POSCustomizationModal");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const POSCartPanel = ({ cart, onUpdateQuantity, onRemoveItem, onEditItem, onClearCart, onHoldOrder, total, onCheckout, onUpdateItem })=>{
    _s();
    const [isConfirmingClear, setIsConfirmingClear] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const handleRemoveCustomization = (item, type, id)=>{
        if (!onUpdateItem) return;
        const updates = {};
        if (type === 'variant') {
            updates.variants = item.variants?.filter((v)=>v.groupId !== id);
        } else if (type === 'topping' && item.pizzaModifiers) {
            updates.pizzaModifiers = {
                ...item.pizzaModifiers,
                toppings: item.pizzaModifiers.toppings.filter((t)=>t.optionId !== id)
            };
        } else if (type === 'addOn' && item.pizzaModifiers) {
            updates.pizzaModifiers = {
                ...item.pizzaModifiers,
                addOns: item.pizzaModifiers.addOns.filter((a)=>a.optionId !== id)
            };
        } else if (type === 'removal' && item.pizzaModifiers) {
            updates.pizzaModifiers = {
                ...item.pizzaModifiers,
                removals: item.pizzaModifiers.removals.filter((r)=>r !== id)
            };
        } else if (type === 'modifier') {
            updates.modifiers = item.modifiers?.filter((m)=>m.optionId !== id);
        }
        onUpdateItem(item.id, updates);
    };
    const handleRemoveComboCustomization = (item, slotId, type, subId)=>{
        if (!onUpdateItem || !item.slots) return;
        const newSlots = item.slots.map((slot)=>{
            if (slot.slotId !== slotId && slot.id !== slotId) return slot;
            const updatedSlot = {
                ...slot
            };
            if (type === 'variant' && slot.variants) {
                updatedSlot.variants = slot.variants.filter((v)=>v.groupId !== subId);
            } else if (type === 'topping' && slot.pizzaModifiers) {
                updatedSlot.pizzaModifiers = {
                    ...slot.pizzaModifiers,
                    toppings: slot.pizzaModifiers.toppings.filter((t)=>t.optionId !== subId)
                };
            } else if (type === 'modifier' && slot.modifiers) {
                updatedSlot.modifiers = slot.modifiers.filter((m)=>m.optionId !== subId);
            } else if (type === 'removal' && slot.pizzaModifiers) {
                updatedSlot.pizzaModifiers = {
                    ...slot.pizzaModifiers,
                    removals: slot.pizzaModifiers.removals.filter((r)=>r !== subId)
                };
            }
            return updatedSlot;
        });
        onUpdateItem(item.id, {
            slots: newSlots
        });
    };
    const touchButtonStyle = {
        background: 'rgba(239, 68, 68, 0.08)',
        border: '1px solid rgba(239, 68, 68, 0.15)',
        cursor: 'pointer',
        marginLeft: '10px',
        padding: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        color: '#EF4444',
        transition: 'all 0.2s ease',
        minWidth: '28px',
        minHeight: '28px'
    };
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
                    padding: '16px 20px',
                    borderBottom: '1px solid var(--pos-border-subtle)',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)'
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
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(135deg, rgba(31, 164, 169, 0.2) 0%, rgba(31, 164, 169, 0.05) 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid rgba(31, 164, 169, 0.2)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            size: 18,
                                            color: "var(--pos-action-primary)",
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                            lineNumber: 142,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: 900,
                                                    color: 'var(--pos-text-primary)'
                                                },
                                                children: "Order Cart"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 145,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '11px',
                                                    color: 'var(--pos-text-muted)',
                                                    fontWeight: 700
                                                },
                                                children: [
                                                    cart.length,
                                                    " ",
                                                    cart.length === 1 ? 'item' : 'items'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onHoldOrder,
                                        disabled: cart.length === 0,
                                        style: {
                                            height: '36px',
                                            padding: '0 12px',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid var(--pos-border-subtle)',
                                            color: cart.length > 0 ? 'var(--pos-text-primary)' : 'var(--pos-text-muted)',
                                            borderRadius: '8px',
                                            fontSize: '11px',
                                            fontWeight: 900,
                                            textTransform: 'uppercase',
                                            cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 172,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Hold"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative'
                                        },
                                        children: !isConfirmingClear ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsConfirmingClear(true),
                                            disabled: cart.length === 0,
                                            style: {
                                                height: '36px',
                                                padding: '0 12px',
                                                background: 'rgba(239, 68, 68, 0.05)',
                                                border: '1px solid rgba(239, 68, 68, 0.15)',
                                                color: cart.length > 0 ? '#EF4444' : 'var(--pos-text-muted)',
                                                borderRadius: '8px',
                                                fontSize: '11px',
                                                fontWeight: 900,
                                                textTransform: 'uppercase',
                                                cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Clear"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                            lineNumber: 177,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '4px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        onClearCart();
                                                        setIsConfirmingClear(false);
                                                    },
                                                    style: {
                                                        height: '36px',
                                                        padding: '0 12px',
                                                        background: '#EF4444',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        fontSize: '10px',
                                                        fontWeight: 900,
                                                        cursor: 'pointer'
                                                    },
                                                    children: "Sure?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsConfirmingClear(false),
                                                    style: {
                                                        height: '36px',
                                                        padding: '0 12px',
                                                        background: 'var(--pos-bg-surface)',
                                                        color: 'var(--pos-text-muted)',
                                                        border: '1px solid var(--pos-border-subtle)',
                                                        borderRadius: '8px',
                                                        fontSize: '10px',
                                                        fontWeight: 900,
                                                        cursor: 'pointer'
                                                    },
                                                    children: "No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                            lineNumber: 199,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 175,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCheckout,
                        disabled: cart.length === 0,
                        style: {
                            width: '100%',
                            height: '48px',
                            background: cart.length > 0 ? 'var(--pos-action-primary)' : 'rgba(255,255,255,0.05)',
                            color: cart.length > 0 ? 'white' : 'var(--pos-text-muted)',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '14px',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            boxShadow: cart.length > 0 ? '0 8px 16px -4px rgba(31, 164, 169, 0.4)' : 'none',
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " PROCEED TO PAY - $",
                            total.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                lineNumber: 125,
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
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: 'var(--pos-bg-card)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px dashed var(--pos-border-subtle)',
                                opacity: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                size: 40,
                                strokeWidth: 1
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 275,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                            lineNumber: 264,
                            columnNumber: 25
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
                                        color: 'var(--pos-text-primary)'
                                    },
                                    children: "Empty Cart"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                    lineNumber: 278,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '13px',
                                        marginTop: '6px',
                                        fontWeight: 600
                                    },
                                    children: "No items added yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                    lineNumber: 279,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                            lineNumber: 277,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                    lineNumber: 254,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : cart.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '16px',
                            background: 'var(--pos-bg-card)',
                            border: '1px solid var(--pos-border-subtle)',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            transition: 'all 0.2s ease-out',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: 900,
                                                    color: 'var(--pos-text-primary)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--pos-action-primary)',
                                                            marginRight: '8px'
                                                        },
                                                        children: [
                                                            item.quantity,
                                                            " ×"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    item.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 298,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '4px',
                                                    marginTop: '4px',
                                                    paddingLeft: '4px'
                                                },
                                                children: [
                                                    item.variants && item.variants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            gap: '8px'
                                                        },
                                                        children: item.variants.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '11px',
                                                                    color: 'var(--pos-text-secondary)',
                                                                    fontWeight: 700,
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: 'var(--pos-text-muted)',
                                                                            textTransform: 'uppercase',
                                                                            fontSize: '9px',
                                                                            marginRight: '4px'
                                                                        },
                                                                        children: [
                                                                            v.groupId.includes('size') ? 'Size' : v.groupId.includes('crust') ? 'Crust' : 'Opt',
                                                                            ":"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                        lineNumber: 310,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    v.name,
                                                                    v.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: 'var(--pos-action-primary)',
                                                                            marginLeft: '4px',
                                                                            fontWeight: 800
                                                                        },
                                                                        children: [
                                                                            "+$",
                                                                            v.price.toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 82
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleRemoveCustomization(item, 'variant', v.groupId),
                                                                        className: "hover-scale",
                                                                        style: touchButtonStyle,
                                                                        title: "Remove Variant",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            size: 14,
                                                                            strokeWidth: 3
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                            lineNumber: 321,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, v.groupId, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    item.pizzaModifiers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '2px'
                                                        },
                                                        children: [
                                                            [
                                                                'LEFT',
                                                                'RIGHT',
                                                                'WHOLE'
                                                            ].map((portion)=>{
                                                                const toppings = item.pizzaModifiers.toppings.filter((t)=>t.portion === portion);
                                                                if (toppings.length === 0) return null;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column'
                                                                    },
                                                                    children: [
                                                                        portion !== 'WHOLE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '10px',
                                                                                color: 'var(--pos-action-primary)',
                                                                                fontWeight: 900,
                                                                                textTransform: 'uppercase',
                                                                                marginBottom: '2px'
                                                                            },
                                                                            children: [
                                                                                portion,
                                                                                " HALF:"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                            lineNumber: 338,
                                                                            columnNumber: 65
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        toppings.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '11px',
                                                                                    color: 'var(--pos-text-secondary)',
                                                                                    fontWeight: 600,
                                                                                    paddingLeft: portion !== 'WHOLE' ? '6px' : '0',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center'
                                                                                },
                                                                                children: [
                                                                                    "• ",
                                                                                    t.name,
                                                                                    " ",
                                                                                    t.level !== 'NORMAL' ? `(${t.level})` : '',
                                                                                    t.basePrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            color: 'var(--pos-action-primary)',
                                                                                            marginLeft: '6px',
                                                                                            fontWeight: 800
                                                                                        },
                                                                                        children: [
                                                                                            "+$",
                                                                                            t.basePrice.toFixed(2)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                        lineNumber: 345,
                                                                                        columnNumber: 89
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleRemoveCustomization(item, 'topping', t.optionId),
                                                                                        className: "hover-scale",
                                                                                        style: touchButtonStyle,
                                                                                        title: "Remove Topping",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                            size: 14,
                                                                                            strokeWidth: 3
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                            lineNumber: 352,
                                                                                            columnNumber: 73
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                        lineNumber: 346,
                                                                                        columnNumber: 69
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, t.optionId, true, {
                                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                lineNumber: 343,
                                                                                columnNumber: 65
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, portion, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                    lineNumber: 336,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            }),
                                                            item.pizzaModifiers.addOns.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '11px',
                                                                        color: 'var(--pos-text-secondary)',
                                                                        fontWeight: 700,
                                                                        display: 'flex',
                                                                        alignItems: 'center'
                                                                    },
                                                                    children: [
                                                                        "+ ",
                                                                        a.name,
                                                                        " ",
                                                                        a.quantity > 1 ? `x${a.quantity}` : '',
                                                                        a.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: 'var(--pos-action-primary)',
                                                                                marginLeft: '6px',
                                                                                fontWeight: 800
                                                                            },
                                                                            children: [
                                                                                "+$",
                                                                                (a.price * a.quantity).toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                            lineNumber: 364,
                                                                            columnNumber: 73
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleRemoveCustomization(item, 'addOn', a.optionId),
                                                                            className: "hover-scale",
                                                                            style: touchButtonStyle,
                                                                            title: "Remove Add-on",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                size: 14,
                                                                                strokeWidth: 3
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                lineNumber: 371,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                            lineNumber: 365,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, a.optionId, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                            item.pizzaModifiers.removals.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '11px',
                                                                        color: '#EF4444',
                                                                        fontWeight: 700,
                                                                        textDecoration: 'line-through',
                                                                        display: 'flex',
                                                                        alignItems: 'center'
                                                                    },
                                                                    children: [
                                                                        "- ",
                                                                        r,
                                                                        " (Removed)",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleRemoveCustomization(item, 'removal', r),
                                                                            className: "hover-scale",
                                                                            style: touchButtonStyle,
                                                                            title: "Undo Removal",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                size: 14,
                                                                                strokeWidth: 3
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                lineNumber: 386,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                            lineNumber: 380,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, r, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !item.pizzaModifiers && !item.isCombo && item.modifiers && item.modifiers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '2px'
                                                        },
                                                        children: item.modifiers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '11px',
                                                                    color: 'var(--pos-text-secondary)',
                                                                    fontWeight: 600,
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                },
                                                                children: [
                                                                    "• ",
                                                                    m.name,
                                                                    " ",
                                                                    m.quantity > 1 ? `x${m.quantity}` : '',
                                                                    m.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: 'var(--pos-action-primary)',
                                                                            marginLeft: '6px',
                                                                            fontWeight: 800
                                                                        },
                                                                        children: [
                                                                            "+$",
                                                                            (m.price * m.quantity).toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 73
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleRemoveCustomization(item, 'modifier', m.optionId),
                                                                        className: "hover-scale",
                                                                        style: touchButtonStyle,
                                                                        title: "Remove Modifier",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            size: 14,
                                                                            strokeWidth: 3
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                            lineNumber: 406,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, m.optionId, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    item.isCombo && item.slots?.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: '4px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '10px',
                                                                        color: 'var(--pos-action-primary)',
                                                                        fontWeight: 900,
                                                                        textTransform: 'uppercase'
                                                                    },
                                                                    children: [
                                                                        slot.slotName || slot.name,
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        paddingLeft: '8px',
                                                                        borderLeft: '1px solid rgba(31,164,169,0.2)'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '11px',
                                                                                color: 'var(--pos-text-secondary)',
                                                                                fontWeight: 700
                                                                            },
                                                                            children: [
                                                                                "• ",
                                                                                slot.option?.name || 'Standard Selection'
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                            lineNumber: 420,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        slot.variants?.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '10px',
                                                                                    color: 'var(--pos-text-muted)',
                                                                                    fontWeight: 600,
                                                                                    paddingLeft: '8px',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    marginTop: '2px'
                                                                                },
                                                                                children: [
                                                                                    "- ",
                                                                                    v.name,
                                                                                    v.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            color: 'var(--pos-action-primary)',
                                                                                            marginLeft: '4px'
                                                                                        },
                                                                                        children: [
                                                                                            "(+$",
                                                                                            v.price.toFixed(2),
                                                                                            ")"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                        lineNumber: 428,
                                                                                        columnNumber: 77
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleRemoveComboCustomization(item, slot.slotId || slot.id, 'variant', v.groupId),
                                                                                        className: "hover-scale",
                                                                                        style: {
                                                                                            ...touchButtonStyle,
                                                                                            padding: '4px',
                                                                                            minWidth: '22px',
                                                                                            minHeight: '22px',
                                                                                            marginLeft: '6px'
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                            size: 12,
                                                                                            strokeWidth: 3
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                            lineNumber: 434,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                        lineNumber: 429,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, v.groupId, true, {
                                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                lineNumber: 426,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))),
                                                                        slot.pizzaModifiers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                paddingLeft: '8px'
                                                                            },
                                                                            children: [
                                                                                slot.pizzaModifiers.toppings.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            fontSize: '10px',
                                                                                            color: 'var(--pos-text-muted)',
                                                                                            fontWeight: 600,
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            marginTop: '2px'
                                                                                        },
                                                                                        children: [
                                                                                            "- ",
                                                                                            t.name,
                                                                                            " ",
                                                                                            t.portion !== 'WHOLE' ? `(${t.portion})` : '',
                                                                                            t.basePrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                style: {
                                                                                                    color: 'var(--pos-action-primary)',
                                                                                                    marginLeft: '4px'
                                                                                                },
                                                                                                children: [
                                                                                                    "(+$",
                                                                                                    t.basePrice.toFixed(2),
                                                                                                    ")"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                                lineNumber: 445,
                                                                                                columnNumber: 89
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>handleRemoveComboCustomization(item, slot.slotId || slot.id, 'topping', t.optionId),
                                                                                                className: "hover-scale",
                                                                                                style: {
                                                                                                    ...touchButtonStyle,
                                                                                                    padding: '4px',
                                                                                                    minWidth: '22px',
                                                                                                    minHeight: '22px',
                                                                                                    marginLeft: '6px'
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                                    size: 12,
                                                                                                    strokeWidth: 3
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                                    lineNumber: 451,
                                                                                                    columnNumber: 73
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                                lineNumber: 446,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, t.optionId, true, {
                                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                        lineNumber: 443,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                                                slot.pizzaModifiers.removals?.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            fontSize: '10px',
                                                                                            color: '#EF4444',
                                                                                            fontWeight: 600,
                                                                                            textDecoration: 'line-through',
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            marginTop: '2px'
                                                                                        },
                                                                                        children: [
                                                                                            "- No ",
                                                                                            r,
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>handleRemoveComboCustomization(item, slot.slotId || slot.id, 'removal', r),
                                                                                                className: "hover-scale",
                                                                                                style: {
                                                                                                    ...touchButtonStyle,
                                                                                                    padding: '4px',
                                                                                                    minWidth: '22px',
                                                                                                    minHeight: '22px',
                                                                                                    marginLeft: '6px'
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                                    size: 12,
                                                                                                    strokeWidth: 3
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                                    lineNumber: 463,
                                                                                                    columnNumber: 73
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                                lineNumber: 458,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, r, true, {
                                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                        lineNumber: 456,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                            lineNumber: 441,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        slot.modifiers?.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '10px',
                                                                                    color: 'var(--pos-text-muted)',
                                                                                    fontWeight: 600,
                                                                                    paddingLeft: '8px',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    marginTop: '2px'
                                                                                },
                                                                                children: [
                                                                                    "- ",
                                                                                    m.name,
                                                                                    " ",
                                                                                    m.quantity > 1 ? `x${m.quantity}` : '',
                                                                                    m.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            color: 'var(--pos-action-primary)',
                                                                                            marginLeft: '4px'
                                                                                        },
                                                                                        children: [
                                                                                            "(+$",
                                                                                            (m.price * m.quantity).toFixed(2),
                                                                                            ")"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                        lineNumber: 474,
                                                                                        columnNumber: 77
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleRemoveComboCustomization(item, slot.slotId || slot.id, 'modifier', m.optionId),
                                                                                        className: "hover-scale",
                                                                                        style: {
                                                                                            ...touchButtonStyle,
                                                                                            padding: '4px',
                                                                                            minWidth: '22px',
                                                                                            minHeight: '22px',
                                                                                            marginLeft: '6px'
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                            size: 12,
                                                                                            strokeWidth: 3
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                            lineNumber: 480,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                        lineNumber: 475,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, m.optionId, true, {
                                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                                lineNumber: 472,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, slot.slotId || slot.id, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    (item.kitchenNote || item.notes) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: '6px',
                                                            fontSize: '11px',
                                                            color: 'var(--pos-action-primary)',
                                                            fontWeight: 900,
                                                            background: 'rgba(31, 164, 169, 0.08)',
                                                            padding: '6px 10px',
                                                            borderRadius: '6px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '6px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                                size: 12,
                                                                strokeWidth: 2.5
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                lineNumber: 502,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "KITCHEN: ",
                                                                    item.kitchenNote || item.notes
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 304,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 297,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-primary)'
                                        },
                                        children: [
                                            "$",
                                            (item.price * item.quantity).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 508,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 296,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: '12px'
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
                                                    cursor: 'pointer'
                                                },
                                                className: "hover-scale",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 516,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onRemoveItem(item.id),
                                                style: {
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '12px',
                                                    background: 'rgba(239, 68, 68, 0.08)',
                                                    border: '1px solid rgba(239, 68, 68, 0.15)',
                                                    color: '#EF4444',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer'
                                                },
                                                className: "hover-scale",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 523,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 515,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            background: 'var(--pos-bg-surface)',
                                            borderRadius: '12px',
                                            border: '1px solid var(--pos-border-subtle)',
                                            padding: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onUpdateQuantity(item.id, item.quantity - 1),
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
                                                className: "hover-scale",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                    size: 20,
                                                    strokeWidth: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 533,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: 900,
                                                    minWidth: '40px',
                                                    textAlign: 'center'
                                                },
                                                children: item.quantity
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 540,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onUpdateQuantity(item.id, item.quantity + 1),
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
                                                className: "hover-scale",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    size: 20,
                                                    strokeWidth: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                                lineNumber: 543,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                        lineNumber: 532,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                                lineNumber: 514,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `${item.id}-${idx}`, true, {
                        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                        lineNumber: 284,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
                lineNumber: 245,
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
                lineNumber: 557,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/components/POSCartPanel.tsx",
        lineNumber: 114,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSCartPanel, "YzUMaOMlS0GENaB3DJHmpSTbJ4A=");
_c = POSCartPanel;
var _c;
__turbopack_context__.k.register(_c, "POSCartPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/pos/components/POSPizzaModifierModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSPizzaModifierModal",
    ()=>POSPizzaModifierModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const POSPizzaModifierModal = ({ isOpen, product, initialItem, allProducts = [], onClose, onAddToCart })=>{
    _s();
    // ------------------------------------------------------------------
    // STATE
    // ------------------------------------------------------------------
    const [selectedToppings, setSelectedToppings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedAddOns, setSelectedAddOns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [removedIngredients, setRemovedIngredients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [selectedVariants, setSelectedVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // groupId -> optionId
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('PRESELECTED');
    const [activeSlotId, setActiveSlotId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [slotSelections, setSlotSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [kitchenNotes, setKitchenNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // ------------------------------------------------------------------
    // INITIALIZATION
    // ------------------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSPizzaModifierModal.useEffect": ()=>{
            if (isOpen && product) {
                if (initialItem) {
                    const toppings = {};
                    initialItem.pizzaModifiers?.toppings?.forEach({
                        "POSPizzaModifierModal.useEffect": (t)=>{
                            toppings[t.optionId] = t;
                        }
                    }["POSPizzaModifierModal.useEffect"]);
                    setSelectedToppings(toppings);
                    const addOns = {};
                    initialItem.pizzaModifiers?.addOns?.forEach({
                        "POSPizzaModifierModal.useEffect": (a)=>{
                            addOns[a.optionId] = a;
                        }
                    }["POSPizzaModifierModal.useEffect"]);
                    setSelectedAddOns(addOns);
                    setRemovedIngredients(new Set(initialItem.pizzaModifiers?.removals || []));
                    const variants = {};
                    initialItem.variants?.forEach({
                        "POSPizzaModifierModal.useEffect": (v)=>{
                            variants[v.groupId] = v.optionId;
                        }
                    }["POSPizzaModifierModal.useEffect"]);
                    setSelectedVariants(variants);
                    if (initialItem.isCombo && initialItem.comboSelections) {
                        setSlotSelections(initialItem.comboSelections);
                    } else {
                        setSlotSelections({});
                    }
                    setKitchenNotes(initialItem.kitchenNote || initialItem.notes || '');
                } else {
                    // RUSH MODE: Auto-select first variants as defaults
                    const defaultVariants = {};
                    product.variantGroups?.forEach({
                        "POSPizzaModifierModal.useEffect": (group)=>{
                            if (group && group.options && group.options.length > 0) {
                                const firstOption = group.options[0];
                                if (firstOption) {
                                    defaultVariants[group.id] = firstOption.id;
                                }
                            }
                        }
                    }["POSPizzaModifierModal.useEffect"]);
                    setSelectedVariants(defaultVariants);
                    setSelectedToppings({});
                    setSelectedAddOns({});
                    setRemovedIngredients(new Set());
                    setSlotSelections({});
                    setKitchenNotes('');
                    // Set best starting category
                    setActiveCategory('PRESELECTED');
                    setActiveSlotId(null);
                }
            }
        }
    }["POSPizzaModifierModal.useEffect"], [
        isOpen,
        product,
        initialItem
    ]);
    // ------------------------------------------------------------------
    // CALCULATIONS
    // ------------------------------------------------------------------
    const sizeMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSPizzaModifierModal.useMemo[sizeMultiplier]": ()=>{
            const sizeGroup = product?.variantGroups?.find({
                "POSPizzaModifierModal.useMemo[sizeMultiplier]": (g)=>g.name.toLowerCase().includes('size')
            }["POSPizzaModifierModal.useMemo[sizeMultiplier]"]);
            const selectedId = sizeGroup ? selectedVariants[sizeGroup.id] : null;
            const selectedOpt = sizeGroup?.options.find({
                "POSPizzaModifierModal.useMemo[sizeMultiplier]": (o)=>o.id === selectedId
            }["POSPizzaModifierModal.useMemo[sizeMultiplier]"]);
            if (!selectedOpt) return 1.0;
            const name = selectedOpt.name.toLowerCase();
            if (name.includes('large') || name.includes('12')) return 1.5;
            if (name.includes('medium') || name.includes('10')) return 1.0;
            if (name.includes('regular') || name.includes('small') || name.includes('8')) return 0.8;
            return 1.0;
        }
    }["POSPizzaModifierModal.useMemo[sizeMultiplier]"], [
        product,
        selectedVariants
    ]);
    const pricing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSPizzaModifierModal.useMemo[pricing]": ()=>{
            if (!product) return {
                base: 0,
                crust: 0,
                toppings: 0,
                addOns: 0,
                total: 0
            };
            const base = product.price;
            let variantExtra = 0;
            Object.entries(selectedVariants).forEach({
                "POSPizzaModifierModal.useMemo[pricing]": ([gId, oId])=>{
                    const opt = product.variantGroups?.find({
                        "POSPizzaModifierModal.useMemo[pricing]": (g)=>g.id === gId
                    }["POSPizzaModifierModal.useMemo[pricing]"])?.options.find({
                        "POSPizzaModifierModal.useMemo[pricing]": (o)=>o.id === oId
                    }["POSPizzaModifierModal.useMemo[pricing]"]);
                    if (opt) variantExtra += opt.additionalPrice;
                }
            }["POSPizzaModifierModal.useMemo[pricing]"]);
            let toppingsTotal = 0;
            Object.values(selectedToppings).forEach({
                "POSPizzaModifierModal.useMemo[pricing]": (t)=>{
                    const portionFactor = t.portion === 'WHOLE' ? 1.0 : 0.5;
                    const levelFactor = t.level === 'NORMAL' ? 1.0 : t.level === 'EXTRA' ? 1.5 : 2.0;
                    toppingsTotal += t.basePrice * sizeMultiplier * portionFactor * levelFactor;
                }
            }["POSPizzaModifierModal.useMemo[pricing]"]);
            let addOnsTotal = 0;
            Object.values(selectedAddOns).forEach({
                "POSPizzaModifierModal.useMemo[pricing]": (a)=>{
                    addOnsTotal += a.price * a.quantity;
                }
            }["POSPizzaModifierModal.useMemo[pricing]"]);
            return {
                base,
                crust: variantExtra,
                toppings: toppingsTotal,
                addOns: addOnsTotal,
                total: base + variantExtra + toppingsTotal + addOnsTotal
            };
        }
    }["POSPizzaModifierModal.useMemo[pricing]"], [
        product,
        selectedVariants,
        selectedToppings,
        selectedAddOns,
        sizeMultiplier
    ]);
    // Validation - Improved to handle products with no variants defined and combo slots
    const isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSPizzaModifierModal.useMemo[isValid]": ()=>{
            if (!product) return false;
            const variantsValid = !product.variantGroups || product.variantGroups.length === 0 || product.variantGroups.every({
                "POSPizzaModifierModal.useMemo[isValid]": (g)=>!!selectedVariants[g.id]
            }["POSPizzaModifierModal.useMemo[isValid]"]);
            if (!variantsValid) return false;
            if (product.isCombo && product.comboSlots) {
                return product.comboSlots.every({
                    "POSPizzaModifierModal.useMemo[isValid]": (slot)=>!!slotSelections[slot.id]?.productId
                }["POSPizzaModifierModal.useMemo[isValid]"]);
            }
            return true;
        }
    }["POSPizzaModifierModal.useMemo[isValid]"], [
        product,
        selectedVariants,
        slotSelections
    ]);
    // Group Discovery Helpers
    const currentProductContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSPizzaModifierModal.useMemo[currentProductContext]": ()=>{
            if (!product) return null;
            if (product.isCombo && activeSlotId) {
                const slotProdId = slotSelections[activeSlotId]?.productId;
                return allProducts.find({
                    "POSPizzaModifierModal.useMemo[currentProductContext]": (p)=>p.id === slotProdId
                }["POSPizzaModifierModal.useMemo[currentProductContext]"]) || null;
            }
            return product;
        }
    }["POSPizzaModifierModal.useMemo[currentProductContext]"], [
        product,
        activeSlotId,
        slotSelections,
        allProducts
    ]);
    const toppingOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSPizzaModifierModal.useMemo[toppingOptions]": ()=>{
            const target = currentProductContext;
            if (!target?.modifierGroups) return [];
            return target.modifierGroups.filter({
                "POSPizzaModifierModal.useMemo[toppingOptions]": (g)=>g.name.toLowerCase().includes('topping') || g.name.toLowerCase().includes('extra')
            }["POSPizzaModifierModal.useMemo[toppingOptions]"]).flatMap({
                "POSPizzaModifierModal.useMemo[toppingOptions]": (g)=>g.options
            }["POSPizzaModifierModal.useMemo[toppingOptions]"]);
        }
    }["POSPizzaModifierModal.useMemo[toppingOptions]"], [
        currentProductContext
    ]);
    const addOnOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSPizzaModifierModal.useMemo[addOnOptions]": ()=>{
            const target = product; // Add-ons are usually shared at combo level or product level
            if (!target?.modifierGroups) return [];
            return target.modifierGroups.filter({
                "POSPizzaModifierModal.useMemo[addOnOptions]": (g)=>!g.name.toLowerCase().includes('topping') && !g.name.toLowerCase().includes('removal')
            }["POSPizzaModifierModal.useMemo[addOnOptions]"]).flatMap({
                "POSPizzaModifierModal.useMemo[addOnOptions]": (g)=>g.options
            }["POSPizzaModifierModal.useMemo[addOnOptions]"]);
        }
    }["POSPizzaModifierModal.useMemo[addOnOptions]"], [
        product
    ]);
    const removalIngredients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSPizzaModifierModal.useMemo[removalIngredients]": ()=>{
            if (!product) return [];
            // Use provided ingredients list or fallback to common defaults
            return product.ingredients || [
                'Tomato Sauce',
                'Mozzarella',
                'Basil',
                'Oregano',
                'Olive Oil',
                'Garlic Paste'
            ];
        }
    }["POSPizzaModifierModal.useMemo[removalIngredients]"], [
        product
    ]);
    // ------------------------------------------------------------------
    // HANDLERS
    // ------------------------------------------------------------------
    const handleVariantSelect = (groupId, optionId)=>{
        setSelectedVariants((prev)=>({
                ...prev,
                [groupId]: optionId
            }));
    };
    const handleToppingToggle = (option)=>{
        setSelectedToppings((prev)=>{
            const next = {
                ...prev
            };
            if (next[option.id]) {
                delete next[option.id];
            } else {
                next[option.id] = {
                    optionId: option.id,
                    name: option.name,
                    basePrice: option.price || 1.50,
                    portion: 'WHOLE',
                    level: 'NORMAL'
                };
            }
            return next;
        });
    };
    const updateTopping = (id, updates)=>{
        setSelectedToppings((prev)=>{
            const current = prev[id];
            if (!current) return prev;
            return {
                ...prev,
                [id]: {
                    ...current,
                    ...updates
                }
            };
        });
    };
    const handleAddOnQty = (option, delta)=>{
        setSelectedAddOns((prev)=>{
            const next = {
                ...prev
            };
            const current = next[option.id] || {
                optionId: option.id,
                name: option.name,
                price: option.price,
                quantity: 0
            };
            const newQty = Math.max(0, current.quantity + delta);
            if (newQty === 0) delete next[option.id];
            else next[option.id] = {
                ...current,
                quantity: newQty
            };
            return next;
        });
    };
    const handleRemovalToggle = (ingredientId)=>{
        setRemovedIngredients((prev)=>{
            const next = new Set(prev);
            if (next.has(ingredientId)) next.delete(ingredientId);
            else next.add(ingredientId);
            return next;
        });
    };
    const handleReset = ()=>{
        setSelectedToppings({});
        setSelectedAddOns({});
        setRemovedIngredients(new Set());
        setSelectedVariants({});
        setActiveCategory('PRESELECTED');
        setKitchenNotes('');
    };
    const handleConfirm = ()=>{
        if (!product || !isValid) return;
        const cartItem = {
            id: initialItem?.id || Math.random().toString(36).substr(2, 9),
            productId: product.id,
            name: product.name,
            price: pricing.total,
            quantity: initialItem?.quantity || 1,
            variants: Object.entries(selectedVariants).map(([gId, oId])=>{
                const group = product.variantGroups?.find((g)=>g.id === gId);
                const option = group?.options.find((o)=>o.id === oId);
                return {
                    groupId: gId,
                    optionId: oId,
                    name: option?.name || '',
                    price: option?.additionalPrice || 0
                };
            }),
            pizzaModifiers: !product.isCombo ? {
                toppings: Object.values(selectedToppings),
                addOns: Object.values(selectedAddOns),
                removals: Array.from(removedIngredients)
            } : undefined,
            slots: product.isCombo ? Object.entries(slotSelections).map(([sId, sel])=>{
                const slotDef = product.comboSlots?.find((s)=>s.id === sId);
                const subProduct = allProducts.find((p)=>p.id === sel.productId);
                return {
                    slotId: sId,
                    slotName: slotDef?.name || 'Slot',
                    option: subProduct,
                    pizzaModifiers: {
                        toppings: Object.values(sel.toppings),
                        removals: Array.from(sel.removals)
                    }
                };
            }) : undefined,
            kitchenNote: kitchenNotes.trim(),
            notes: kitchenNotes.trim(),
            isPizza: true
        };
        onAddToCart(cartItem);
        onClose();
    };
    const handleSlotProductSelect = (slotId, prodId)=>{
        setSlotSelections((prev)=>({
                ...prev,
                [slotId]: {
                    productId: prodId,
                    toppings: {},
                    removals: new Set()
                }
            }));
        setActiveSlotId(slotId);
        setActiveCategory('TOPPINGS');
    };
    if (!isOpen || !product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pos-modal-overlay",
        onClick: onClose,
        style: {
            backdropFilter: 'blur(16px)',
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pos-custom-sheet",
            onClick: (e)=>e.stopPropagation(),
            style: {
                width: '100vw',
                height: '100vh',
                background: 'var(--pos-bg-main)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '24px 40px',
                        background: 'var(--pos-bg-surface)',
                        borderBottom: '1px solid var(--pos-border-subtle)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        zIndex: 100,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '30px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    style: {
                                        background: 'var(--pos-bg-main)',
                                        border: '1px solid var(--pos-border-subtle)',
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--pos-text-primary)',
                                        cursor: 'pointer'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 28
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                        lineNumber: 390,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 389,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                marginBottom: '4px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--pos-action-primary)',
                                                        fontSize: '11px',
                                                        fontWeight: 900,
                                                        background: 'rgba(31, 164, 169, 0.08)',
                                                        padding: '2px 10px',
                                                        borderRadius: '6px',
                                                        border: '1px solid rgba(31, 164, 169, 0.15)'
                                                    },
                                                    children: "RUSH MODE v4.2.2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '8px',
                                                        height: '8px',
                                                        borderRadius: '50%',
                                                        background: '#10B981'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '12px',
                                                        color: '#10B981',
                                                        fontWeight: 800
                                                    },
                                                    children: "ENGINE READY"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 393,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '36px',
                                                fontWeight: 900,
                                                color: 'var(--pos-text-primary)',
                                                letterSpacing: '-0.02em',
                                                lineHeight: 1
                                            },
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 398,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 392,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                            lineNumber: 388,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '16px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '12px 24px',
                                        background: 'rgba(31, 164, 169, 0.05)',
                                        border: '1px solid rgba(31, 164, 169, 0.1)',
                                        borderRadius: '16px',
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '10px',
                                                fontWeight: 900,
                                                color: 'var(--pos-action-primary)',
                                                textTransform: 'uppercase'
                                            },
                                            children: "Multiplier"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 404,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '20px',
                                                fontWeight: 900,
                                                color: 'var(--pos-text-primary)'
                                            },
                                            children: [
                                                sizeMultiplier.toFixed(2),
                                                "x"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 405,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 403,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    style: {
                                        background: 'rgba(239, 68, 68, 0.05)',
                                        border: '1px solid rgba(239, 68, 68, 0.1)',
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#EF4444',
                                        cursor: 'pointer'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                        lineNumber: 408,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 407,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                            lineNumber: 402,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                    lineNumber: 378,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        display: 'flex',
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '380px',
                                background: 'var(--pos-bg-surface)',
                                borderRight: '1px solid var(--pos-border-subtle)',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '32px',
                                        position: 'relative',
                                        width: '240px',
                                        height: '240px',
                                        margin: '0 auto'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            background: 'radial-gradient(circle at 40% 40%, #F8FAFC 0%, #E2E8F0 100%)',
                                            borderRadius: '50%',
                                            border: '6px solid var(--pos-border-subtle)',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '110px'
                                                },
                                                children: "🍕"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                lineNumber: 438,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    zIndex: 10
                                                },
                                                children: Object.values(selectedToppings).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            top: `${20 + i * 25 % 55}%`,
                                                            left: `${t.portion === 'RIGHT' ? 55 : t.portion === 'LEFT' ? 10 : 35}%`,
                                                            padding: '4px 10px',
                                                            background: 'var(--pos-action-primary)',
                                                            borderRadius: '10px',
                                                            fontSize: '10px',
                                                            fontWeight: 900,
                                                            color: 'white',
                                                            boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
                                                            border: '1px solid rgba(255,255,255,0.2)'
                                                        },
                                                        children: t.name.split(' ')[0]
                                                    }, t.optionId, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                lineNumber: 439,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                        lineNumber: 426,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 425,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pos-scroll",
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '12px',
                                        flex: 1
                                    },
                                    children: [
                                        {
                                            id: 'PRESELECTED',
                                            label: 'Pre-Selected',
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                lineNumber: 463,
                                                columnNumber: 83
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            count: Object.keys(selectedVariants).length + Object.keys(selectedToppings).length + removedIngredients.size
                                        },
                                        {
                                            id: 'BASE',
                                            label: 'Size & Crust',
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                lineNumber: 464,
                                                columnNumber: 76
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            count: Object.keys(selectedVariants).length
                                        },
                                        ...product.isCombo ? (product.comboSlots || []).map((slot)=>({
                                                id: `SLOT_${slot.id}`,
                                                label: slot.name,
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                    size: 22
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 43
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                count: slotSelections[slot.id] ? 1 : 0,
                                                isSlot: true,
                                                slotId: slot.id
                                            })) : [],
                                        {
                                            id: 'TOPPINGS',
                                            label: activeSlotId ? 'Toppings (Slot)' : 'Toppings',
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                lineNumber: 473,
                                                columnNumber: 111
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            count: Object.keys(selectedToppings).length,
                                            visible: toppingOptions.length > 0
                                        },
                                        {
                                            id: 'ADDONS',
                                            label: 'Add-ons',
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                lineNumber: 474,
                                                columnNumber: 73
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            count: Object.keys(selectedAddOns).length,
                                            visible: addOnOptions.length > 0
                                        }
                                    ].filter((c)=>c.visible !== false).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if (cat.isSlot) {
                                                    setActiveSlotId(cat.slotId);
                                                    setActiveCategory('SLOTS');
                                                } else {
                                                    if (cat.id !== 'TOPPINGS') setActiveSlotId(null);
                                                    setActiveCategory(cat.id);
                                                }
                                            },
                                            style: {
                                                padding: '24px 20px',
                                                borderRadius: '20px',
                                                background: activeCategory === cat.id || cat.isSlot && activeSlotId === cat.slotId && activeCategory === 'SLOTS' ? 'rgba(31, 164, 169, 0.08)' : 'rgba(0,0,0,0.01)',
                                                border: activeCategory === cat.id || cat.isSlot && activeSlotId === cat.slotId && activeCategory === 'SLOTS' ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                textAlign: 'left',
                                                transition: 'all 0.2s',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '48px',
                                                        height: '48px',
                                                        borderRadius: '12px',
                                                        background: activeCategory === cat.id || cat.isSlot && activeSlotId === cat.slotId && activeCategory === 'SLOTS' ? 'var(--pos-action-primary)' : 'var(--pos-bg-main)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: activeCategory === cat.id || cat.isSlot && activeSlotId === cat.slotId && activeCategory === 'SLOTS' ? 'white' : 'var(--pos-text-muted)'
                                                    },
                                                    children: cat.id === 'BASE' && !isValid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pulse-warning",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            size: 22
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 105
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 74
                                                    }, ("TURBOPACK compile-time value", void 0)) : cat.id === 'BASE' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 157
                                                    }, ("TURBOPACK compile-time value", void 0)) : cat.isSlot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 196
                                                    }, ("TURBOPACK compile-time value", void 0)) : cat.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '18px',
                                                                fontWeight: 900,
                                                                color: activeCategory === cat.id || cat.isSlot && activeSlotId === cat.slotId && activeCategory === 'SLOTS' ? 'var(--pos-text-primary)' : 'var(--pos-text-secondary)'
                                                            },
                                                            children: cat.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        cat.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: 'var(--pos-action-primary)',
                                                                fontWeight: 800
                                                            },
                                                            children: cat.isSlot && slotSelections[cat.slotId] ? allProducts.find((p)=>p.id === slotSelections[cat.slotId]?.productId)?.name || 'ACTIVE' : `${cat.count} ACTIVE`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 59
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                (activeCategory === cat.id || cat.isSlot && activeSlotId === cat.slotId && activeCategory === 'SLOTS') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 20,
                                                    color: "var(--pos-action-primary)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 146
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, cat.id, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 476,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 461,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                            lineNumber: 416,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                overflowY: 'auto',
                                padding: '40px 60px',
                                background: 'var(--pos-bg-main)'
                            },
                            className: "pos-scroll",
                            children: [
                                activeCategory === 'SLOTS' && activeSlotId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'posFadeInUp 0.3s'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '32px',
                                                fontWeight: 900,
                                                color: 'var(--pos-text-primary)',
                                                marginBottom: '40px'
                                            },
                                            children: [
                                                "Select ",
                                                product.comboSlots?.find((s)=>s.id === activeSlotId)?.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 529,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                                gap: '20px'
                                            },
                                            children: allProducts.filter((p)=>!p.isCombo && product.comboSlots?.find((s)=>s.id === activeSlotId)?.allowedCategoryIds.includes(p.categoryId)).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSlotProductSelect(activeSlotId, p.id),
                                                    style: {
                                                        padding: '24px',
                                                        borderRadius: '24px',
                                                        background: slotSelections[activeSlotId]?.productId === p.id ? 'rgba(31, 164, 169, 0.05)' : 'var(--pos-bg-surface)',
                                                        border: slotSelections[activeSlotId]?.productId === p.id ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                                        textAlign: 'left',
                                                        cursor: 'pointer',
                                                        boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '22px',
                                                                fontWeight: 900,
                                                                color: 'var(--pos-text-primary)',
                                                                marginBottom: '8px'
                                                            },
                                                            children: p.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '15px',
                                                                color: 'var(--pos-text-muted)'
                                                            },
                                                            children: p.sku
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, p.id, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 530,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 528,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeCategory === 'BASE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'posFadeInUp 0.3s snappier'
                                    },
                                    children: product.variantGroups?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '48px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    style: {
                                                        fontSize: '14px',
                                                        fontWeight: 900,
                                                        color: 'var(--pos-action-primary)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.2em',
                                                        marginBottom: '20px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '30px',
                                                                height: '2px',
                                                                background: 'var(--pos-action-primary)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                            lineNumber: 560,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        group.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 559,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                                        gap: '16px'
                                                    },
                                                    children: group.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleVariantSelect(group.id, opt.id),
                                                            style: {
                                                                padding: '30px',
                                                                borderRadius: '24px',
                                                                background: selectedVariants[group.id] === opt.id ? 'rgba(31, 164, 169, 0.08)' : 'var(--pos-bg-surface)',
                                                                border: selectedVariants[group.id] === opt.id ? '3px solid var(--pos-action-primary)' : '2px solid var(--pos-border-subtle)',
                                                                textAlign: 'left',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.15s',
                                                                boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '24px',
                                                                        fontWeight: 900,
                                                                        color: 'var(--pos-text-primary)',
                                                                        marginBottom: '8px'
                                                                    },
                                                                    children: opt.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '16px',
                                                                        fontWeight: 700,
                                                                        color: '#10B981'
                                                                    },
                                                                    children: opt.additionalPrice > 0 ? `+$${opt.additionalPrice.toFixed(2)}` : 'STANDARD'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                    lineNumber: 579,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, opt.id, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, group.id, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 558,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 556,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeCategory === 'TOPPINGS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'posFadeInUp 0.3s'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                                            gap: '20px'
                                        },
                                        children: toppingOptions.map((opt)=>{
                                            const selection = selectedToppings[opt.id];
                                            const isSelected = !!selection;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: isSelected ? 'rgba(31, 164, 169, 0.08)' : 'rgba(255,255,255,0.03)',
                                                    border: isSelected ? '2px solid var(--pos-action-primary)' : '1px solid rgba(255,255,255,0.06)',
                                                    borderRadius: '24px',
                                                    padding: '24px',
                                                    transition: 'all 0.2s',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleToppingToggle(opt),
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '16px',
                                                                    background: 'transparent',
                                                                    border: 'none',
                                                                    cursor: 'pointer',
                                                                    flex: 1,
                                                                    textAlign: 'left'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: '40px',
                                                                            height: '40px',
                                                                            borderRadius: '10px',
                                                                            background: isSelected ? 'var(--pos-action-primary)' : 'var(--pos-bg-main)',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            color: isSelected ? 'white' : 'var(--pos-text-muted)'
                                                                        },
                                                                        children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            size: 24,
                                                                            strokeWidth: 4
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                            lineNumber: 620,
                                                                            columnNumber: 75
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            size: 20
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                            lineNumber: 620,
                                                                            columnNumber: 113
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                        lineNumber: 619,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '20px',
                                                                                    fontWeight: 900,
                                                                                    color: 'var(--pos-text-primary)'
                                                                                },
                                                                                children: opt.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                                lineNumber: 623,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '13px',
                                                                                    color: '#10B981',
                                                                                    fontWeight: 700
                                                                                },
                                                                                children: [
                                                                                    "+$",
                                                                                    opt.price.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                                lineNumber: 624,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                        lineNumber: 622,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 606,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '14px',
                                                                    fontWeight: 900,
                                                                    color: 'var(--pos-text-secondary)'
                                                                },
                                                                children: [
                                                                    "$",
                                                                    (opt.price * sizeMultiplier * (selection.portion === 'WHOLE' ? 1 : 0.5) * (selection.level === 'NORMAL' ? 1 : selection.level === 'EXTRA' ? 1.5 : 2.0)).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 628,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '12px',
                                                            background: 'rgba(0,0,0,0.03)',
                                                            padding: '16px',
                                                            borderRadius: '16px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'grid',
                                                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                                                    gap: '8px'
                                                                },
                                                                children: [
                                                                    'LEFT',
                                                                    'WHOLE',
                                                                    'RIGHT'
                                                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>updateTopping(opt.id, {
                                                                                portion: p
                                                                            }),
                                                                        style: {
                                                                            height: '36px',
                                                                            borderRadius: '8px',
                                                                            fontSize: '11px',
                                                                            fontWeight: 900,
                                                                            background: selection.portion === p ? 'var(--pos-action-primary)' : 'var(--pos-bg-surface)',
                                                                            color: selection.portion === p ? 'white' : 'var(--pos-text-secondary)',
                                                                            border: '1px solid var(--pos-border-subtle)',
                                                                            cursor: 'pointer'
                                                                        },
                                                                        children: p
                                                                    }, p, false, {
                                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                        lineNumber: 638,
                                                                        columnNumber: 65
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 636,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'grid',
                                                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                                                    gap: '8px'
                                                                },
                                                                children: [
                                                                    'NORMAL',
                                                                    'EXTRA',
                                                                    'DOUBLE'
                                                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>updateTopping(opt.id, {
                                                                                level: l
                                                                            }),
                                                                        style: {
                                                                            height: '36px',
                                                                            borderRadius: '8px',
                                                                            fontSize: '11px',
                                                                            fontWeight: 900,
                                                                            background: selection.level === l ? 'var(--pos-action-primary)' : 'var(--pos-bg-surface)',
                                                                            color: selection.level === l ? 'white' : 'var(--pos-text-secondary)',
                                                                            border: '1px solid var(--pos-border-subtle)',
                                                                            cursor: 'pointer'
                                                                        },
                                                                        children: l === 'NORMAL' ? '1.0x' : l === 'EXTRA' ? '1.5x' : '2.0x'
                                                                    }, l, false, {
                                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                        lineNumber: 643,
                                                                        columnNumber: 65
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, opt.id, true, {
                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                lineNumber: 595,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                        lineNumber: 590,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 589,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeCategory === 'ADDONS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'posFadeInUp 0.3s'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                                            gap: '16px'
                                        },
                                        children: addOnOptions.map((opt)=>{
                                            const selection = selectedAddOns[opt.id];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '24px',
                                                    background: 'var(--pos-bg-surface)',
                                                    borderRadius: '24px',
                                                    border: '1px solid var(--pos-border-subtle)',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '20px',
                                                                    fontWeight: 900,
                                                                    color: 'var(--pos-text-primary)'
                                                                },
                                                                children: opt.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '16px',
                                                                    fontWeight: 700,
                                                                    color: '#10B981'
                                                                },
                                                                children: [
                                                                    "+$",
                                                                    opt.price.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 664,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                        lineNumber: 662,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            background: 'var(--pos-bg-main)',
                                                            borderRadius: '12px',
                                                            padding: '6px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleAddOnQty(opt, -1),
                                                                style: {
                                                                    width: '40px',
                                                                    height: '40px',
                                                                    border: 'none',
                                                                    background: 'transparent',
                                                                    color: 'var(--pos-text-primary)',
                                                                    cursor: 'pointer'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                    size: 20
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 239
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 667,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '20px',
                                                                    fontWeight: 900,
                                                                    minWidth: '40px',
                                                                    textAlign: 'center',
                                                                    color: 'var(--pos-text-primary)'
                                                                },
                                                                children: selection?.quantity || 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 668,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleAddOnQty(opt, 1),
                                                                style: {
                                                                    width: '40px',
                                                                    height: '40px',
                                                                    border: 'none',
                                                                    background: 'transparent',
                                                                    color: 'var(--pos-text-primary)',
                                                                    cursor: 'pointer'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 20
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 238
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 669,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, opt.id, true, {
                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                lineNumber: 661,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                        lineNumber: 657,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 656,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeCategory === 'PRESELECTED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'posFadeInUp 0.3s'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '40px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    style: {
                                                        fontSize: '14px',
                                                        fontWeight: 900,
                                                        color: 'var(--pos-action-primary)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.2em',
                                                        marginBottom: '24px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '30px',
                                                                height: '2px',
                                                                background: 'var(--pos-action-primary)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Configuration Summary"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                                        gap: '12px'
                                                    },
                                                    children: [
                                                        product.variantGroups?.map((group)=>{
                                                            const selectedId = selectedVariants[group.id];
                                                            const option = group.options.find((o)=>o.id === selectedId);
                                                            if (!option) return null;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '16px 20px',
                                                                    background: 'var(--pos-bg-surface)',
                                                                    borderRadius: '16px',
                                                                    border: '1px solid var(--pos-border-subtle)',
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '10px',
                                                                                    fontWeight: 800,
                                                                                    color: 'var(--pos-text-muted)',
                                                                                    textTransform: 'uppercase'
                                                                                },
                                                                                children: group.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                                lineNumber: 694,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '18px',
                                                                                    fontWeight: 900,
                                                                                    color: 'var(--pos-text-primary)'
                                                                                },
                                                                                children: option.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                                lineNumber: 695,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                        lineNumber: 693,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        size: 20,
                                                                        color: "var(--pos-action-primary)",
                                                                        strokeWidth: 3
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                        lineNumber: 697,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, group.id, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        }),
                                                        Object.values(selectedToppings).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '16px 20px',
                                                                    background: 'rgba(31, 164, 169, 0.05)',
                                                                    borderRadius: '16px',
                                                                    border: '1px solid rgba(31, 164, 169, 0.2)',
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '10px',
                                                                                    fontWeight: 800,
                                                                                    color: 'var(--pos-action-primary)',
                                                                                    textTransform: 'uppercase'
                                                                                },
                                                                                children: "TOPPING"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                                lineNumber: 706,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '18px',
                                                                                    fontWeight: 900,
                                                                                    color: 'var(--pos-text-primary)'
                                                                                },
                                                                                children: t.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                                lineNumber: 707,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                        lineNumber: 705,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            fontWeight: 800,
                                                                            color: 'var(--pos-action-primary)'
                                                                        },
                                                                        children: [
                                                                            t.level !== 'NORMAL' ? t.level : '',
                                                                            " ",
                                                                            t.portion !== 'WHOLE' ? t.portion : ''
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                        lineNumber: 709,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, t.optionId, true, {
                                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                lineNumber: 704,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 681,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    style: {
                                                        fontSize: '14px',
                                                        fontWeight: 900,
                                                        color: '#EF4444',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.2em',
                                                        marginBottom: '24px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '30px',
                                                                height: '2px',
                                                                background: '#EF4444'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                            lineNumber: 718,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Modifications (Removed Defaults)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                                                        gap: '12px'
                                                    },
                                                    children: removalIngredients.map((ing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleRemovalToggle(ing),
                                                            style: {
                                                                padding: '24px',
                                                                borderRadius: '20px',
                                                                background: removedIngredients.has(ing) ? 'rgba(239, 68, 68, 0.05)' : 'var(--pos-bg-surface)',
                                                                border: removedIngredients.has(ing) ? '2px solid #EF4444' : '1px solid var(--pos-border-subtle)',
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '18px',
                                                                        fontWeight: 900,
                                                                        color: removedIngredients.has(ing) ? '#EF4444' : 'var(--pos-text-primary)'
                                                                    },
                                                                    children: ing
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                    lineNumber: 737,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                removedIngredients.has(ing) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 20,
                                                                    color: "#EF4444",
                                                                    strokeWidth: 3
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                    lineNumber: 738,
                                                                    columnNumber: 80
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 16,
                                                                    color: "var(--pos-text-muted)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                    lineNumber: 738,
                                                                    columnNumber: 130
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, ing, true, {
                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                            lineNumber: 722,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 716,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 679,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                            lineNumber: 525,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                    lineNumber: 413,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '24px 40px',
                        background: 'var(--pos-bg-surface)',
                        borderTop: '1px solid var(--pos-border-subtle)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        zIndex: 100,
                        boxShadow: '0 -4px 20px rgba(0,0,0,0.03)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '60px',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '11px',
                                                fontWeight: 900,
                                                color: 'var(--pos-text-muted)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                                marginBottom: '4px'
                                            },
                                            children: "Configuration Value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 761,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '48px',
                                                fontWeight: 900,
                                                color: 'var(--pos-text-primary)',
                                                lineHeight: 1
                                            },
                                            children: [
                                                "$",
                                                pricing.total.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 762,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 760,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '1px',
                                        height: '40px',
                                        background: 'var(--pos-border-subtle)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 764,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '30px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '10px',
                                                        color: 'var(--pos-text-muted)',
                                                        fontWeight: 800
                                                    },
                                                    children: "CORE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '16px',
                                                        fontWeight: 900,
                                                        color: 'var(--pos-text-primary)'
                                                    },
                                                    children: [
                                                        "$",
                                                        (pricing.base + pricing.crust).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 766,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '10px',
                                                        color: 'var(--pos-action-primary)',
                                                        fontWeight: 800
                                                    },
                                                    children: "MODS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '16px',
                                                        fontWeight: 900,
                                                        color: '#10B981'
                                                    },
                                                    children: [
                                                        "+$",
                                                        (pricing.toppings + pricing.addOns).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 772,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 770,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 765,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                            lineNumber: 759,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                margin: '0 40px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                maxWidth: '450px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '13px',
                                                fontWeight: 900,
                                                color: 'var(--pos-text-muted)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                    size: 14,
                                                    color: "var(--pos-action-primary)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Kitchen Notes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 780,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px'
                                            },
                                            children: [
                                                kitchenNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setKitchenNotes(''),
                                                    style: {
                                                        background: 'none',
                                                        border: 'none',
                                                        color: '#EF4444',
                                                        fontSize: '11px',
                                                        fontWeight: 800,
                                                        cursor: 'pointer',
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: "Clear"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '11px',
                                                        color: kitchenNotes.length >= 150 ? '#ef4444' : 'var(--pos-text-muted)',
                                                        fontWeight: 800
                                                    },
                                                    children: [
                                                        kitchenNotes.length,
                                                        "/150"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                    lineNumber: 793,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 784,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 779,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: kitchenNotes,
                                    onChange: (e)=>setKitchenNotes(e.target.value.slice(0, 150)),
                                    placeholder: "Tap instructions below or type here...",
                                    style: {
                                        width: '100%',
                                        height: '56px',
                                        padding: '12px 16px',
                                        background: 'white',
                                        border: '2px solid var(--pos-border-subtle)',
                                        borderRadius: '14px',
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        resize: 'none',
                                        color: 'var(--pos-text-primary)',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    },
                                    onFocus: (e)=>e.target.style.borderColor = 'var(--pos-action-primary)',
                                    onBlur: (e)=>e.target.style.borderColor = 'var(--pos-border-subtle)'
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 798,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px'
                                    },
                                    children: [
                                        'Extra Crispy',
                                        'Light Bake',
                                        'Well Done',
                                        'Cut into 4',
                                        'Cut into 6',
                                        'No Oregano'
                                    ].map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setKitchenNotes((prev)=>{
                                                    const clean = prev.trim();
                                                    if (clean.includes(chip)) return prev;
                                                    return (clean ? `${clean}, ${chip}` : chip).slice(0, 150);
                                                }),
                                            style: {
                                                height: '42px',
                                                padding: '0 16px',
                                                borderRadius: '10px',
                                                background: kitchenNotes.includes(chip) ? 'var(--pos-action-primary)' : 'rgba(31, 164, 169, 0.05)',
                                                border: '1.5px solid rgba(31, 164, 169, 0.15)',
                                                fontSize: '13px',
                                                fontWeight: 800,
                                                color: kitchenNotes.includes(chip) ? 'white' : 'var(--pos-action-primary)',
                                                cursor: 'pointer',
                                                transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                            },
                                            className: "hover-scale active-pop",
                                            children: chip
                                        }, chip, false, {
                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                            lineNumber: 821,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 819,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                            lineNumber: 778,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleConfirm,
                            disabled: !isValid,
                            style: {
                                height: '80px',
                                minWidth: '380px',
                                borderRadius: '24px',
                                background: isValid ? 'var(--pos-action-primary)' : 'rgba(255,255,255,0.05)',
                                color: isValid ? 'white' : 'rgba(255,255,255,0.2)',
                                fontSize: '24px',
                                fontWeight: 900,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '16px',
                                cursor: isValid ? 'pointer' : 'not-allowed',
                                border: 'none',
                                transition: 'all 0.2s',
                                textTransform: 'uppercase'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                    size: 28,
                                    strokeWidth: 3
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                    lineNumber: 870,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                isValid ? initialItem ? 'UPDATE CONFIG' : 'DEPLOY TO BASKET' : 'SELECT CRUST/SIZE'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                            lineNumber: 849,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                    lineNumber: 749,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
            lineNumber: 364,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
        lineNumber: 353,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSPizzaModifierModal, "zXGe0j3ho3eumzuj1l1Ks0eR5aw=");
_c = POSPizzaModifierModal;
var _c;
__turbopack_context__.k.register(_c, "POSPizzaModifierModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
]);

//# sourceMappingURL=src_modules_pos_components_403df9cd._.js.map