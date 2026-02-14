module.exports = [
"[project]/src/modules/pos/components/POSDiscountModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSDiscountModal",
    ()=>POSDiscountModal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/percent.js [app-ssr] (ecmascript) <export default as Percent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
'use client';
;
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
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('COUPON');
    const [discountType, setDiscountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('percentage');
    const [discountValue, setDiscountValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [couponCode, setCouponCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [managerPin, setManagerPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPinInput, setShowPinInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pos-modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pos-modal",
            style: {
                width: '600px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-modal-header",
                    style: {
                        background: 'var(--pos-bg-surface)',
                        borderBottom: '1px solid var(--pos-border-subtle)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "pos-btn-secondary",
                            onClick: resetAndClose,
                            style: {
                                width: '40px',
                                height: '40px',
                                padding: 0,
                                borderRadius: '12px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-modal-body",
                    style: {
                        padding: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                borderBottom: '1px solid var(--pos-border-subtle)',
                                background: 'var(--pos-bg-surface)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '28px'
                            },
                            children: [
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
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
                                mode === 'COUPON' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '12px'
                                            },
                                            children: mockCoupons.map((coupon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        subtotal < coupon.minOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: '28px',
                                                padding: '24px',
                                                background: 'var(--pos-bg-surface)',
                                                borderRadius: '24px',
                                                border: '1px solid var(--pos-border-subtle)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: '12px',
                                                        marginTop: '12px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: showPinInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'center',
                                            maxWidth: '340px',
                                            margin: '0 auto'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                ].map((val, idx)=>val === '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, idx, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSDiscountModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 62
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pos-grid-2",
                                                style: {
                                                    marginTop: '24px',
                                                    gap: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pos-grid-2",
                                                style: {
                                                    marginBottom: '24px',
                                                    gap: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `pos-btn ${discountType === 'percentage' ? 'pos-btn-primary' : 'pos-btn-secondary'}`,
                                                        style: {
                                                            height: '60px',
                                                            borderRadius: '16px',
                                                            fontWeight: 900
                                                        },
                                                        onClick: ()=>setDiscountType('percentage'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `pos-btn ${discountType === 'amount' ? 'pos-btn-primary' : 'pos-btn-secondary'}`,
                                                        style: {
                                                            height: '60px',
                                                            borderRadius: '16px',
                                                            fontWeight: 900
                                                        },
                                                        onClick: ()=>setDiscountType('amount'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '28px',
                                                    textAlign: 'center',
                                                    padding: '24px',
                                                    background: 'var(--pos-bg-surface)',
                                                    borderRadius: '24px',
                                                    border: '1px solid var(--pos-border-subtle)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                ].map((val, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
const __TURBOPACK__default__export__ = POSDiscountModal;
}),
"[project]/src/modules/pos/components/POSPizzaModifierModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSPizzaModifierModal",
    ()=>POSPizzaModifierModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-ssr] (ecmascript) <export default as Utensils>");
;
;
;
;
const POSPizzaModifierModal = ({ isOpen, product, initialItem, allProducts = [], onClose, onAddToCart })=>{
    // ------------------------------------------------------------------
    // STATE
    // ------------------------------------------------------------------
    const [selectedToppings, setSelectedToppings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedAddOns, setSelectedAddOns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [removedIngredients, setRemovedIngredients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [selectedVariants, setSelectedVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({}); // groupId -> optionId
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('PRESELECTED');
    const [activeSlotId, setActiveSlotId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [slotSelections, setSlotSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [kitchenNotes, setKitchenNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // ------------------------------------------------------------------
    // INITIALIZATION
    // ------------------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && product) {
            if (initialItem) {
                const toppings = {};
                initialItem.pizzaModifiers?.toppings?.forEach((t)=>{
                    toppings[t.optionId] = t;
                });
                setSelectedToppings(toppings);
                const addOns = {};
                initialItem.pizzaModifiers?.addOns?.forEach((a)=>{
                    addOns[a.optionId] = a;
                });
                setSelectedAddOns(addOns);
                setRemovedIngredients(new Set(initialItem.pizzaModifiers?.removals || []));
                const variants = {};
                initialItem.variants?.forEach((v)=>{
                    variants[v.groupId] = v.optionId;
                });
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
                product.variantGroups?.forEach((group)=>{
                    if (group && group.options && group.options.length > 0) {
                        const firstOption = group.options[0];
                        if (firstOption) {
                            defaultVariants[group.id] = firstOption.id;
                        }
                    }
                });
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
    }, [
        isOpen,
        product,
        initialItem
    ]);
    // ------------------------------------------------------------------
    // CALCULATIONS
    // ------------------------------------------------------------------
    const sizeMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const sizeGroup = product?.variantGroups?.find((g)=>g.name.toLowerCase().includes('size'));
        const selectedId = sizeGroup ? selectedVariants[sizeGroup.id] : null;
        const selectedOpt = sizeGroup?.options.find((o)=>o.id === selectedId);
        if (!selectedOpt) return 1.0;
        const name = selectedOpt.name.toLowerCase();
        if (name.includes('large') || name.includes('12')) return 1.5;
        if (name.includes('medium') || name.includes('10')) return 1.0;
        if (name.includes('regular') || name.includes('small') || name.includes('8')) return 0.8;
        return 1.0;
    }, [
        product,
        selectedVariants
    ]);
    const pricing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!product) return {
            base: 0,
            crust: 0,
            toppings: 0,
            addOns: 0,
            total: 0
        };
        const base = product.price;
        let variantExtra = 0;
        Object.entries(selectedVariants).forEach(([gId, oId])=>{
            const opt = product.variantGroups?.find((g)=>g.id === gId)?.options.find((o)=>o.id === oId);
            if (opt) variantExtra += opt.additionalPrice;
        });
        let toppingsTotal = 0;
        Object.values(selectedToppings).forEach((t)=>{
            const portionFactor = t.portion === 'WHOLE' ? 1.0 : 0.5;
            const levelFactor = t.level === 'NORMAL' ? 1.0 : t.level === 'EXTRA' ? 1.5 : 2.0;
            toppingsTotal += t.basePrice * sizeMultiplier * portionFactor * levelFactor;
        });
        let addOnsTotal = 0;
        Object.values(selectedAddOns).forEach((a)=>{
            addOnsTotal += a.price * a.quantity;
        });
        return {
            base,
            crust: variantExtra,
            toppings: toppingsTotal,
            addOns: addOnsTotal,
            total: base + variantExtra + toppingsTotal + addOnsTotal
        };
    }, [
        product,
        selectedVariants,
        selectedToppings,
        selectedAddOns,
        sizeMultiplier
    ]);
    // Validation - Improved to handle products with no variants defined and combo slots
    const isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!product) return false;
        const variantsValid = !product.variantGroups || product.variantGroups.length === 0 || product.variantGroups.every((g)=>!!selectedVariants[g.id]);
        if (!variantsValid) return false;
        if (product.isCombo && product.comboSlots) {
            return product.comboSlots.every((slot)=>!!slotSelections[slot.id]?.productId);
        }
        return true;
    }, [
        product,
        selectedVariants,
        slotSelections
    ]);
    // Group Discovery Helpers
    const currentProductContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!product) return null;
        if (product.isCombo && activeSlotId) {
            const slotProdId = slotSelections[activeSlotId]?.productId;
            return allProducts.find((p)=>p.id === slotProdId) || null;
        }
        return product;
    }, [
        product,
        activeSlotId,
        slotSelections,
        allProducts
    ]);
    const toppingOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const target = currentProductContext;
        if (!target?.modifierGroups) return [];
        return target.modifierGroups.filter((g)=>g.name.toLowerCase().includes('topping') || g.name.toLowerCase().includes('extra')).flatMap((g)=>g.options);
    }, [
        currentProductContext
    ]);
    const addOnOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const target = product; // Add-ons are usually shared at combo level or product level
        if (!target?.modifierGroups) return [];
        return target.modifierGroups.filter((g)=>!g.name.toLowerCase().includes('topping') && !g.name.toLowerCase().includes('removal')).flatMap((g)=>g.options);
    }, [
        product
    ]);
    const removalIngredients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '30px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                marginBottom: '4px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '16px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '12px 24px',
                                        background: 'rgba(31, 164, 169, 0.05)',
                                        border: '1px solid rgba(31, 164, 169, 0.1)',
                                        borderRadius: '16px',
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        display: 'flex',
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '380px',
                                background: 'var(--pos-bg-surface)',
                                borderRight: '1px solid var(--pos-border-subtle)',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '32px',
                                        position: 'relative',
                                        width: '240px',
                                        height: '240px',
                                        margin: '0 auto'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '110px'
                                                },
                                                children: "🍕"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                lineNumber: 438,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    zIndex: 10
                                                },
                                                children: Object.values(selectedToppings).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
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
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
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
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
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
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                lineNumber: 474,
                                                columnNumber: 73
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            count: Object.keys(selectedAddOns).length,
                                            visible: addOnOptions.length > 0
                                        }
                                    ].filter((c)=>c.visible !== false).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    children: cat.id === 'BASE' && !isValid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pulse-warning",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
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
                                                    }, ("TURBOPACK compile-time value", void 0)) : cat.id === 'BASE' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 157
                                                    }, ("TURBOPACK compile-time value", void 0)) : cat.isSlot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        cat.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                (activeCategory === cat.id || cat.isSlot && activeSlotId === cat.slotId && activeCategory === 'SLOTS') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                overflowY: 'auto',
                                padding: '40px 60px',
                                background: 'var(--pos-bg-main)'
                            },
                            className: "pos-scroll",
                            children: [
                                activeCategory === 'SLOTS' && activeSlotId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'posFadeInUp 0.3s'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                                gap: '20px'
                                            },
                                            children: allProducts.filter((p)=>!p.isCombo && product.comboSlots?.find((s)=>s.id === activeSlotId)?.allowedCategoryIds.includes(p.categoryId)).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                activeCategory === 'BASE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'posFadeInUp 0.3s snappier'
                                    },
                                    children: product.variantGroups?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '48px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                                        gap: '16px'
                                                    },
                                                    children: group.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                activeCategory === 'TOPPINGS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'posFadeInUp 0.3s'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                                            gap: '20px'
                                        },
                                        children: toppingOptions.map((opt)=>{
                                            const selection = selectedToppings[opt.id];
                                            const isSelected = !!selection;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                        children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            size: 24,
                                                                            strokeWidth: 4
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                            lineNumber: 620,
                                                                            columnNumber: 75
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '12px',
                                                            background: 'rgba(0,0,0,0.03)',
                                                            padding: '16px',
                                                            borderRadius: '16px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'grid',
                                                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                                                    gap: '8px'
                                                                },
                                                                children: [
                                                                    'LEFT',
                                                                    'WHOLE',
                                                                    'RIGHT'
                                                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'grid',
                                                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                                                    gap: '8px'
                                                                },
                                                                children: [
                                                                    'NORMAL',
                                                                    'EXTRA',
                                                                    'DOUBLE'
                                                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                activeCategory === 'ADDONS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'posFadeInUp 0.3s'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                                            gap: '16px'
                                        },
                                        children: addOnOptions.map((opt)=>{
                                            const selection = selectedAddOns[opt.id];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            background: 'var(--pos-bg-main)',
                                                            borderRadius: '12px',
                                                            padding: '6px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleAddOnQty(opt, -1),
                                                                style: {
                                                                    width: '40px',
                                                                    height: '40px',
                                                                    border: 'none',
                                                                    background: 'transparent',
                                                                    color: 'var(--pos-text-primary)',
                                                                    cursor: 'pointer'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleAddOnQty(opt, 1),
                                                                style: {
                                                                    width: '40px',
                                                                    height: '40px',
                                                                    border: 'none',
                                                                    background: 'transparent',
                                                                    color: 'var(--pos-text-primary)',
                                                                    cursor: 'pointer'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
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
                                activeCategory === 'PRESELECTED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'posFadeInUp 0.3s'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '40px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
                                                        Object.values(selectedToppings).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                                                        gap: '12px'
                                                    },
                                                    children: removalIngredients.map((ing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                removedIngredients.has(ing) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 20,
                                                                    color: "#EF4444",
                                                                    strokeWidth: 3
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/components/POSPizzaModifierModal.tsx",
                                                                    lineNumber: 738,
                                                                    columnNumber: 80
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '60px',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '30px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                margin: '0 40px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                maxWidth: '450px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px'
                                            },
                                            children: [
                                                kitchenNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    ].map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
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
}),
"[project]/src/modules/pos/components/POSBackButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSBackButton",
    ()=>POSBackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
;
const POSBackButton = ({ onClick, label = 'BACK', style })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBack = ()=>{
        if (onClick) {
            onClick();
        } else {
            router.back();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
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
}),
];

//# sourceMappingURL=src_modules_pos_components_9bb5d468._.js.map