(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/pos/pages/POSPaymentScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSPaymentScreen",
    ()=>POSPaymentScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Split$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/split.js [app-client] (ecmascript) <export default as Split>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/context/POSContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// --- Mock Data ---
const MOCK_COUPONS = [
    {
        id: 'save10',
        name: 'SAVE10',
        description: '10% off entire order',
        type: 'PERCENT',
        value: 10
    },
    {
        id: 'welcome5',
        name: 'WELCOME5',
        description: '$5 flat discount',
        type: 'FLAT',
        value: 5
    },
    {
        id: 'pizza20',
        name: 'PIZZA20',
        description: '20% off Pizzas',
        type: 'PERCENT',
        value: 20
    }
];
const MOCK_WALLETS = {
    'GIFT_123': 25.00,
    'USER_PAY': 50.00,
    'GC-9999': 100.00
};
const VALID_MANAGER_PIN = '1234';
const MANUAL_DISCOUNT_THRESHOLD = 20;
// --- Helpers ---
const validateLuhn = (num)=>{
    let sum = 0;
    let shouldDouble = false;
    for(let i = num.length - 1; i >= 0; i--){
        let digit = parseInt(num.charAt(i));
        if (shouldDouble) {
            if ((digit *= 2) > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0 && num.length >= 13;
};
const POSPaymentScreen = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { cartTotal, clearCart, session, selectedCustomer, addOrderToCustomerHistory, cart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePOS"])();
    // --- State ---
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSplitMode, setIsSplitMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentMethod, setCurrentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paymentState, setPaymentState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('SELECTING');
    // Pricing & Discounts
    const [appliedDiscount, setAppliedDiscount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showDiscountPanel, setShowDiscountPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDiscountsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [tipAmount, setTipAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Input / Processing State
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [terminalStatus, setTerminalStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [paymentError, setPaymentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [changeDue, setChangeDue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // PIN Flow State
    const [showPinPrompt, setShowPinPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pinValue, setPinValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [pinPurpose, setPinPurpose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('DISCOUNT');
    const [pendingManualDiscount, setPendingManualDiscount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transactionToReverse, setTransactionToReverse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Manual Discount Inputs
    const [manualValue, setManualValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [manualType, setManualType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('PERCENT');
    const [manualReason, setManualReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // --- Method Specific States ---
    const [cardData, setCardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        number: '',
        expiry: '',
        cvv: '',
        name: ''
    });
    const [giftCardData, setGiftCardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        number: '',
        pin: '',
        balance: null
    });
    const [walletData, setWalletData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        mobile: '',
        otp: '',
        type: 'Store Wallet'
    });
    const [loyaltyPointsToRedeem, setLoyaltyPointsToRedeem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showCustomerHistory, setShowCustomerHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get customer data - use selectedCustomer from context as primary source
    const customer = selectedCustomer || session?.activeCustomer;
    const availableLoyaltyPoints = customer?.loyaltyPoints || 0;
    const POINTS_TO_DOLLAR_RATE = 100; // 100 points = $1
    // --- Calculations ---
    const subtotal = cartTotal;
    const discountAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSPaymentScreen.useMemo[discountAmount]": ()=>{
            if (!appliedDiscount) return 0;
            return appliedDiscount.type === 'PERCENT' ? subtotal * appliedDiscount.value / 100 : appliedDiscount.value;
        }
    }["POSPaymentScreen.useMemo[discountAmount]"], [
        subtotal,
        appliedDiscount
    ]);
    const taxAmount = Math.max(0, (subtotal - discountAmount) * 0.08);
    const deliveryFee = session?.channel === 'Delivery' ? 5.99 : 0;
    const totalAmountDue = Math.max(0, subtotal - discountAmount + taxAmount + deliveryFee + tipAmount);
    const amountPaid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "POSPaymentScreen.useMemo[amountPaid]": ()=>transactions.filter({
                "POSPaymentScreen.useMemo[amountPaid]": (t)=>t.status === 'approved'
            }["POSPaymentScreen.useMemo[amountPaid]"]).reduce({
                "POSPaymentScreen.useMemo[amountPaid]": (sum, t)=>sum + t.amount
            }["POSPaymentScreen.useMemo[amountPaid]"], 0)
    }["POSPaymentScreen.useMemo[amountPaid]"], [
        transactions
    ]);
    const remainingBalance = Math.max(0, totalAmountDue - amountPaid);
    const isFullyPaid = remainingBalance <= 0.005;
    // Debug: Log customer data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSPaymentScreen.useEffect": ()=>{
            console.log('🔍 Payment Screen - Customer Data:', {
                customer,
                selectedCustomer,
                sessionActiveCustomer: session?.activeCustomer,
                availableLoyaltyPoints,
                customerName: customer?.name
            });
        }
    }["POSPaymentScreen.useEffect"], [
        customer,
        selectedCustomer,
        session?.activeCustomer,
        availableLoyaltyPoints
    ]);
    // --- Effects ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSPaymentScreen.useEffect": ()=>{
            if (remainingBalance > 0) {
                setInputValue(remainingBalance.toFixed(2));
            } else {
                setInputValue('0.00');
            }
        }
    }["POSPaymentScreen.useEffect"], [
        remainingBalance,
        currentMethod,
        isSplitMode
    ]);
    // --- Handlers ---
    const handleMethodSelect = (methodId)=>{
        if (methodId === 'split') {
            setIsSplitMode(true);
            setCurrentMethod(null);
        } else {
            setCurrentMethod(methodId);
            setPaymentState('ENTERING_DETAILS');
            setPaymentError(null);
            setInputValue(remainingBalance.toFixed(2));
        }
    };
    const handleApplyCoupon = (coupon)=>{
        setAppliedDiscount({
            ...coupon,
            isManual: false
        });
        setShowDiscountPanel(false);
    };
    const handleApplyManualDiscountRequest = ()=>{
        const val = parseFloat(manualValue);
        if (isNaN(val) || val <= 0) return;
        if (!manualReason) {
            setPaymentError('Manager requires reason for manual overrides');
            return;
        }
        const discountData = {
            id: 'manual',
            name: 'Manual Override',
            type: manualType,
            value: val,
            reason: manualReason,
            isManual: true
        };
        if (manualType === 'PERCENT' && val > MANUAL_DISCOUNT_THRESHOLD) {
            setPendingManualDiscount(discountData);
            setPinPurpose('DISCOUNT');
            setShowPinPrompt(true);
        } else {
            setAppliedDiscount(discountData);
            setShowDiscountPanel(false);
            resetManualInputs();
        }
    };
    const resetManualInputs = ()=>{
        setManualValue('');
        setManualReason('');
        setPendingManualDiscount(null);
    };
    const handlePinSubmit = ()=>{
        if (pinValue === VALID_MANAGER_PIN) {
            if (pinPurpose === 'DISCOUNT' && pendingManualDiscount) {
                setAppliedDiscount(pendingManualDiscount);
                setShowDiscountPanel(false);
                resetManualInputs();
            } else if (pinPurpose === 'REVERSAL' && transactionToReverse) {
                setTransactions((prev)=>prev.filter((t)=>t.id !== transactionToReverse));
                setTransactionToReverse(null);
            }
            setShowPinPrompt(false);
            setPinValue('');
            setPaymentError(null);
        } else {
            setPaymentError('Access Denied: Invalid PIN');
            setPinValue('');
        }
    };
    const logTransaction = (data)=>{
        const newTxn = {
            id: `TXN-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
            method: currentMethod || 'Cash',
            amount: data.amount || 0,
            tip: data.tip || 0,
            timestamp: new Date(),
            status: 'approved',
            ...data
        };
        setTransactions((prev)=>[
                ...prev,
                newTxn
            ]);
    };
    const handleProcessTransaction = async ()=>{
        const amountToTender = parseFloat(inputValue);
        if (isNaN(amountToTender) || amountToTender <= 0) {
            setPaymentError('Invalid amount entered');
            return;
        }
        if (currentMethod === 'card') {
            // In STORE mode, card payment is handled via terminal, so skip manual validation
            if (session?.posType !== 'STORE') {
                if (!validateLuhn(cardData.number.replace(/\s/g, ''))) {
                    setPaymentError('Invalid Card Number (Luhn Check Failed)');
                    return;
                }
                if (!/^\d{2}\/\d{2}$/.test(cardData.expiry)) {
                    setPaymentError('Invalid Expiry Format (MM/YY)');
                    return;
                }
                if (cardData.cvv.length < 3) {
                    setPaymentError('Invalid CVV');
                    return;
                }
            }
        }
        if (currentMethod === 'gift_card') {
            if (!giftCardData.number) {
                setPaymentError('Enter Gift Card Number');
                return;
            }
            const balance = MOCK_WALLETS[giftCardData.number] || 20.00;
            if (amountToTender > balance) {
                setPaymentError(`Insufficient Balance ($${balance.toFixed(2)})`);
                setInputValue(balance.toFixed(2));
                return;
            }
        }
        if (currentMethod === 'loyalty_points') {
            if (loyaltyPointsToRedeem <= 0) {
                setPaymentError('Please select points to redeem');
                return;
            }
            const maxPointsValue = availableLoyaltyPoints / POINTS_TO_DOLLAR_RATE;
            if (amountToTender > maxPointsValue) {
                setPaymentError(`Insufficient Points (max $${maxPointsValue.toFixed(2)})`);
                return;
            }
            if (loyaltyPointsToRedeem > availableLoyaltyPoints) {
                setPaymentError('Insufficient loyalty points');
                return;
            }
        }
        if (currentMethod !== 'cash' && amountToTender > remainingBalance + 0.01) {
            setPaymentError('Amount exceeds remaining balance');
            return;
        }
        setPaymentState('PROCESSING');
        setPaymentError(null);
        try {
            if (currentMethod === 'terminal' || currentMethod === 'card' && session?.posType === 'STORE') {
                setTerminalStatus('Sending to Terminal...');
                await new Promise((r)=>setTimeout(r, 1200));
                setTerminalStatus('Waiting for Swipe/Tap...');
                await new Promise((r)=>setTimeout(r, 2000));
                setTerminalStatus('Authorizing...');
                await new Promise((r)=>setTimeout(r, 1500));
            } else {
                setTerminalStatus('Processing Authorization...');
                await new Promise((r)=>setTimeout(r, 1800));
            }
            let actualAmount = amountToTender;
            let change = 0;
            if (currentMethod === 'cash') {
                if (amountToTender > remainingBalance) {
                    change = amountToTender - remainingBalance;
                    actualAmount = remainingBalance;
                    setChangeDue(change);
                }
            }
            const isManualCard = currentMethod === 'card' && session?.posType !== 'STORE';
            logTransaction({
                amount: actualAmount,
                tip: currentMethod === 'card' ? tipAmount : 0,
                reference_id: Math.random().toString(36).substr(2, 10).toUpperCase(),
                last4: isManualCard ? cardData.number.slice(-4) : currentMethod === 'card' || currentMethod === 'terminal' ? '1234' : undefined,
                authorization_code: 'APP-' + Math.floor(100000 + Math.random() * 900000),
                change: change > 0 ? change : undefined
            });
            setPaymentState('SELECTING');
            setCurrentMethod(null);
            setTipAmount(0);
            setCardData({
                number: '',
                expiry: '',
                cvv: '',
                name: ''
            });
            setGiftCardData({
                number: '',
                pin: '',
                balance: null
            });
            setLoyaltyPointsToRedeem(0);
        } catch (err) {
            setPaymentError('Transaction Failed: Communication Error');
            setPaymentState('ENTERING_DETAILS');
        }
    };
    const initiateReversal = (txnId)=>{
        if (transactions.length > 0 && transactions[transactions.length - 1]?.id === txnId) {
            setTransactionToReverse(txnId);
            setPinPurpose('REVERSAL');
            setShowPinPrompt(true);
        } else {
            setPaymentError('Enterprise Rule: Only the most recent transaction can be reversed');
        }
    };
    const handleCompleteOrder = ()=>{
        if (!isFullyPaid) return;
        const orderId = session?.activeTable?.orderId || `ORD-${Date.now().toString().slice(-6)}`;
        const fulfillment = session?.channel || 'Takeaway';
        // Add to customer order history if customer is selected
        if (customer) {
            const newOrder = {
                id: orderId,
                date: new Date().toISOString().split('T')[0],
                amount: totalAmountDue,
                items: cart.map((item)=>`${item.quantity}x ${item.name}`).join(', ')
            };
            addOrderToCustomerHistory(customer.id, newOrder);
        }
        clearCart();
        router.push(`/pos/order-success/${orderId}?fulfillment=${fulfillment}${changeDue > 0 ? `&change=${changeDue}` : ''}`);
    };
    // --- Sub-Components ---
    const PricingRow = ({ label, value, isBold = false, color = 'var(--pos-text-primary)', isNeg = false, onExpand })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: '1px solid var(--pos-border-subtle)',
                fontSize: isBold ? '18px' : '15px',
                fontWeight: isBold ? 800 : 700,
                color
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    },
                    children: [
                        onExpand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onExpand,
                            style: {
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                                color: 'var(--pos-text-muted)'
                            },
                            children: isDiscountsExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                lineNumber: 378,
                                columnNumber: 44
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                lineNumber: 378,
                                columnNumber: 70
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 377,
                            columnNumber: 30
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 380,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                    lineNumber: 376,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        isNeg ? '-' : '',
                        "$",
                        Math.abs(value).toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                    lineNumber: 382,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
            lineNumber: 375,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    const MethodPanel = ()=>{
        if (!currentMethod) return null;
        const InputRow = ({ label, value, onChange, placeholder, type = 'text', masked = false, mode = 'text' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontSize: '11px',
                            fontWeight: 900,
                            color: 'var(--pos-text-muted)',
                            textTransform: 'uppercase',
                            marginBottom: '8px',
                            display: 'block'
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                        lineNumber: 391,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: type,
                        inputMode: mode,
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        placeholder: placeholder,
                        style: {
                            width: '100%',
                            height: '56px',
                            background: 'var(--pos-bg-surface)',
                            border: '2px solid var(--pos-border-subtle)',
                            borderRadius: '12px',
                            padding: '0 16px',
                            fontSize: '18px',
                            fontWeight: 700,
                            color: 'var(--pos-text-primary)',
                            letterSpacing: masked ? '4px' : 'normal'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                        lineNumber: 392,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                lineNumber: 390,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
        switch(currentMethod){
            case 'card':
                if (session?.posType === 'STORE') {
                    // Store Mode: Terminal Integration Only
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: 'posFadeInUp 0.3s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: 900,
                                    marginBottom: '24px'
                                },
                                children: "Card Payment (Terminal)"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                lineNumber: 420,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    padding: '24px',
                                    background: 'var(--pos-bg-surface)',
                                    borderRadius: '16px',
                                    border: '2px dashed var(--pos-border-subtle)',
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        size: 48,
                                        color: "var(--pos-action-primary)",
                                        style: {
                                            marginBottom: '12px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                        lineNumber: 423,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: 800,
                                            color: 'var(--pos-text-primary)'
                                        },
                                        children: "Integrated Terminal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                        lineNumber: 424,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '12px',
                                            color: 'var(--pos-text-muted)'
                                        },
                                        children: "Proceed to send amount to payment device."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                        lineNumber: 425,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                lineNumber: 422,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: 900,
                                            color: 'var(--pos-text-muted)',
                                            textTransform: 'uppercase',
                                            marginBottom: '12px',
                                            display: 'block'
                                        },
                                        children: "Add Gratuity (Tip)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                        lineNumber: 429,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(4, 1fr)',
                                            gap: '12px'
                                        },
                                        children: [
                                            [
                                                0.10,
                                                0.15,
                                                0.20
                                            ].map((pct)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setTipAmount(subtotal * pct),
                                                    style: {
                                                        height: '48px',
                                                        borderRadius: '10px',
                                                        background: tipAmount === subtotal * pct ? 'var(--pos-action-primary)' : 'var(--pos-bg-surface)',
                                                        color: tipAmount === subtotal * pct ? 'white' : 'var(--pos-text-primary)',
                                                        fontWeight: 800,
                                                        border: '1px solid var(--pos-border-subtle)',
                                                        cursor: 'pointer'
                                                    },
                                                    children: [
                                                        pct * 100,
                                                        "%"
                                                    ]
                                                }, pct, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Custom",
                                                value: tipAmount || '',
                                                onChange: (e)=>setTipAmount(parseFloat(e.target.value) || 0),
                                                style: {
                                                    height: '48px',
                                                    borderRadius: '10px',
                                                    background: 'var(--pos-bg-surface)',
                                                    border: '1px solid var(--pos-border-subtle)',
                                                    textAlign: 'center',
                                                    fontWeight: 800
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                lineNumber: 436,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                        lineNumber: 430,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                lineNumber: 428,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                        lineNumber: 419,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                }
                // Call Center Mode: Manual Entry
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: 'posFadeInUp 0.3s'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '24px',
                                fontWeight: 900,
                                marginBottom: '24px'
                            },
                            children: "Secure Card Entry"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 446,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputRow, {
                            label: "Cardholder Name",
                            value: cardData.name,
                            onChange: (v)=>setCardData({
                                    ...cardData,
                                    name: v
                                }),
                            placeholder: "J. DOE"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 447,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputRow, {
                            label: "Card Number",
                            value: cardData.number,
                            onChange: (v)=>setCardData({
                                    ...cardData,
                                    number: v.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19)
                                }),
                            placeholder: "0000 0000 0000 0000",
                            masked: true,
                            mode: "numeric"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 448,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputRow, {
                                    label: "Expiry",
                                    value: cardData.expiry,
                                    onChange: (v)=>setCardData({
                                            ...cardData,
                                            expiry: v.replace(/\D/g, '').replace(/(.{2})/, '$1/').slice(0, 5)
                                        }),
                                    placeholder: "MM/YY",
                                    mode: "numeric"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 450,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputRow, {
                                    label: "CVV",
                                    value: cardData.cvv,
                                    onChange: (v)=>setCardData({
                                            ...cardData,
                                            cvv: v.slice(0, 4)
                                        }),
                                    placeholder: "***",
                                    type: "password",
                                    masked: true,
                                    mode: "numeric"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 451,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 449,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        fontSize: '11px',
                                        fontWeight: 900,
                                        color: 'var(--pos-text-muted)',
                                        textTransform: 'uppercase',
                                        marginBottom: '12px',
                                        display: 'block'
                                    },
                                    children: "Add Gratuity (Tip)"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 454,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(4, 1fr)',
                                        gap: '12px'
                                    },
                                    children: [
                                        [
                                            0.10,
                                            0.15,
                                            0.20
                                        ].map((pct)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setTipAmount(subtotal * pct),
                                                style: {
                                                    height: '48px',
                                                    borderRadius: '10px',
                                                    background: tipAmount === subtotal * pct ? 'var(--pos-action-primary)' : 'var(--pos-bg-surface)',
                                                    color: tipAmount === subtotal * pct ? 'white' : 'var(--pos-text-primary)',
                                                    fontWeight: 800,
                                                    border: '1px solid var(--pos-border-subtle)',
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    pct * 100,
                                                    "%"
                                                ]
                                            }, pct, true, {
                                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                lineNumber: 457,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Custom",
                                            value: tipAmount || '',
                                            onChange: (e)=>setTipAmount(parseFloat(e.target.value) || 0),
                                            style: {
                                                height: '48px',
                                                borderRadius: '10px',
                                                background: 'var(--pos-bg-surface)',
                                                border: '1px solid var(--pos-border-subtle)',
                                                textAlign: 'center',
                                                fontWeight: 800
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 461,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 455,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 453,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                    lineNumber: 445,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'cash':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: 'posFadeInUp 0.3s'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '24px',
                                fontWeight: 900,
                                marginBottom: '24px'
                            },
                            children: "Cash Settlement"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 469,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'var(--pos-bg-surface)',
                                padding: '24px',
                                borderRadius: '20px',
                                marginBottom: '24px',
                                border: '1px solid var(--pos-border-subtle)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '12px',
                                        fontWeight: 800,
                                        color: 'var(--pos-text-muted)',
                                        marginBottom: '4px'
                                    },
                                    children: "REMAINING DUE"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 471,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '42px',
                                        fontWeight: 900,
                                        color: 'var(--pos-action-primary)'
                                    },
                                    children: [
                                        "$",
                                        remainingBalance.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 472,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 470,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                fontSize: '11px',
                                fontWeight: 900,
                                color: 'var(--pos-text-muted)',
                                textTransform: 'uppercase',
                                marginBottom: '12px',
                                display: 'block'
                            },
                            children: "Quick Amount"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 474,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: '12px',
                                marginBottom: '24px'
                            },
                            children: Array.from(new Set([
                                Math.ceil(remainingBalance),
                                10,
                                20,
                                50
                            ])).slice(0, 4).map((amt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setInputValue(amt.toFixed(2)),
                                    style: {
                                        height: '60px',
                                        borderRadius: '12px',
                                        background: 'var(--pos-bg-card)',
                                        border: '2px solid var(--pos-border-subtle)',
                                        fontWeight: 900,
                                        fontSize: '18px',
                                        cursor: 'pointer'
                                    },
                                    children: [
                                        "$",
                                        amt
                                    ]
                                }, `amt-${idx}-${amt}`, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 477,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 475,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputRow, {
                            label: "Amount Tendered",
                            value: inputValue,
                            onChange: setInputValue,
                            placeholder: "0.00"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 480,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        parseFloat(inputValue) > remainingBalance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '16px',
                                borderRadius: '12px',
                                background: '#10B98115',
                                border: '1px solid #10B98140',
                                color: '#10B981',
                                fontWeight: 800,
                                textAlign: 'center'
                            },
                            children: [
                                "Change to be returned: $",
                                (parseFloat(inputValue) - remainingBalance).toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 482,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                    lineNumber: 468,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'terminal':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: '40px 0',
                        animation: 'posFadeInUp 0.3s'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                            size: 80,
                            color: "var(--pos-action-primary)",
                            style: {
                                marginBottom: '24px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 491,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '28px',
                                fontWeight: 900,
                                marginBottom: '8px'
                            },
                            children: "Integrated Terminal"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 492,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'var(--pos-text-muted)',
                                fontWeight: 600,
                                marginBottom: '32px'
                            },
                            children: "Awaiting hardware handshake..."
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 493,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '12px 24px',
                                borderRadius: '100px',
                                background: '#10B98115',
                                color: '#10B981',
                                fontWeight: 800,
                                fontSize: '13px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pulse-dot"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 495,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                " TERMINAL ID: T-800-ONLINE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 494,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                    lineNumber: 490,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'gift_card':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: 'posFadeInUp 0.3s'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '24px',
                                fontWeight: 900,
                                marginBottom: '24px'
                            },
                            children: "Gift Card Redemption"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 502,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputRow, {
                            label: "Gift Card Number",
                            value: giftCardData.number,
                            onChange: (v)=>setGiftCardData({
                                    ...giftCardData,
                                    number: v
                                }),
                            placeholder: "GC-XXXX-XXXX"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 503,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputRow, {
                            label: "PIN (Optional)",
                            value: giftCardData.pin,
                            onChange: (v)=>setGiftCardData({
                                    ...giftCardData,
                                    pin: v
                                }),
                            placeholder: "****",
                            type: "password"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 504,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setGiftCardData({
                                    ...giftCardData,
                                    balance: MOCK_WALLETS[giftCardData.number] || 0
                                }),
                            style: {
                                width: '100%',
                                height: '48px',
                                borderRadius: '10px',
                                background: 'var(--pos-bg-surface)',
                                border: '1px solid var(--pos-action-primary)',
                                color: 'var(--pos-action-primary)',
                                fontWeight: 800,
                                cursor: 'pointer',
                                marginBottom: '20px'
                            },
                            children: "CHECK BALANCE"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 505,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        giftCardData.balance !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '20px',
                                borderRadius: '12px',
                                background: 'var(--pos-bg-surface)',
                                border: '1px solid var(--pos-border-subtle)',
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '12px',
                                        fontWeight: 800,
                                        color: 'var(--pos-text-muted)',
                                        display: 'block'
                                    },
                                    children: "AVAILABLE BALANCE"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 511,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '28px',
                                        fontWeight: 900,
                                        color: giftCardData.balance >= remainingBalance ? '#10B981' : '#F59E0B'
                                    },
                                    children: [
                                        "$",
                                        giftCardData.balance.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 512,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 510,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                    lineNumber: 501,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'wallet':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: 'posFadeInUp 0.3s'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '24px',
                                fontWeight: 900,
                                marginBottom: '24px'
                            },
                            children: "Digital Wallet / App"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 520,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '10px',
                                marginBottom: '24px'
                            },
                            children: [
                                'Apple Pay',
                                'Google Pay',
                                'Store Wallet'
                            ].map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setWalletData({
                                            ...walletData,
                                            type: w
                                        }),
                                    style: {
                                        height: '60px',
                                        borderRadius: '12px',
                                        border: '2px solid',
                                        borderColor: walletData.type === w ? 'var(--pos-action-primary)' : 'var(--pos-border-subtle)',
                                        background: walletData.type === w ? 'rgba(31,164,169,0.1)' : 'var(--pos-bg-card)',
                                        color: walletData.type === w ? 'var(--pos-action-primary)' : 'var(--pos-text-muted)',
                                        fontSize: '12px',
                                        fontWeight: 800,
                                        cursor: 'pointer'
                                    },
                                    children: w.toUpperCase()
                                }, w, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 523,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 521,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputRow, {
                            label: "Mobile Number",
                            value: walletData.mobile,
                            onChange: (v)=>setWalletData({
                                    ...walletData,
                                    mobile: v
                                }),
                            placeholder: "+1 (555) 000-0000"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 526,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        walletData.type === 'Store Wallet' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputRow, {
                            label: "Authorization OTP",
                            value: walletData.otp,
                            onChange: (v)=>setWalletData({
                                    ...walletData,
                                    otp: v
                                }),
                            placeholder: "6-digit code"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 527,
                            columnNumber: 64
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                    lineNumber: 519,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'loyalty_points':
                const maxPointsValue = availableLoyaltyPoints / POINTS_TO_DOLLAR_RATE;
                const maxRedeemable = Math.min(maxPointsValue, remainingBalance);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: 'posFadeInUp 0.3s'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '24px',
                                fontWeight: 900,
                                marginBottom: '24px'
                            },
                            children: "Redeem Loyalty Points"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 535,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'var(--pos-bg-surface)',
                                padding: '24px',
                                borderRadius: '20px',
                                marginBottom: '24px',
                                border: '1px solid var(--pos-border-subtle)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '12px',
                                        fontWeight: 800,
                                        color: 'var(--pos-text-muted)',
                                        marginBottom: '4px'
                                    },
                                    children: "AVAILABLE POINTS"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 537,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '42px',
                                        fontWeight: 900,
                                        color: '#F97316'
                                    },
                                    children: availableLoyaltyPoints.toLocaleString()
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 538,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '14px',
                                        color: 'var(--pos-text-muted)',
                                        marginTop: '8px'
                                    },
                                    children: [
                                        "= $",
                                        maxPointsValue.toFixed(2),
                                        " (",
                                        POINTS_TO_DOLLAR_RATE,
                                        " points = $1)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 539,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 536,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                fontSize: '11px',
                                fontWeight: 900,
                                color: 'var(--pos-text-muted)',
                                textTransform: 'uppercase',
                                marginBottom: '12px',
                                display: 'block'
                            },
                            children: "Points to Redeem"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 541,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: '12px',
                                marginBottom: '24px'
                            },
                            children: [
                                25,
                                50,
                                75,
                                100
                            ].map((pct)=>{
                                const points = Math.floor(maxRedeemable * pct / 100 * POINTS_TO_DOLLAR_RATE);
                                const value = points / POINTS_TO_DOLLAR_RATE;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setLoyaltyPointsToRedeem(points);
                                        setInputValue(value.toFixed(2));
                                    },
                                    style: {
                                        height: '60px',
                                        borderRadius: '12px',
                                        background: loyaltyPointsToRedeem === points ? 'var(--pos-action-primary)' : 'var(--pos-bg-card)',
                                        color: loyaltyPointsToRedeem === points ? 'white' : 'var(--pos-text-primary)',
                                        border: '2px solid var(--pos-border-subtle)',
                                        fontWeight: 900,
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                pct,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 548,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '11px',
                                                opacity: 0.7
                                            },
                                            children: [
                                                points,
                                                " pts"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 549,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, pct, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 547,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 542,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            placeholder: "Enter points",
                            value: loyaltyPointsToRedeem || '',
                            onChange: (e)=>{
                                const pts = parseInt(e.target.value) || 0;
                                const capped = Math.min(pts, Math.floor(maxRedeemable * POINTS_TO_DOLLAR_RATE));
                                setLoyaltyPointsToRedeem(capped);
                                setInputValue((capped / POINTS_TO_DOLLAR_RATE).toFixed(2));
                            },
                            style: {
                                width: '100%',
                                height: '56px',
                                background: 'var(--pos-bg-surface)',
                                border: '2px solid var(--pos-border-subtle)',
                                borderRadius: '12px',
                                padding: '0 16px',
                                fontSize: '18px',
                                fontWeight: 700,
                                color: 'var(--pos-text-primary)',
                                marginBottom: '16px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 554,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '16px',
                                borderRadius: '12px',
                                background: 'rgba(249, 115, 22, 0.1)',
                                border: '1px solid rgba(249, 115, 22, 0.2)',
                                color: '#F97316',
                                fontWeight: 700,
                                textAlign: 'center'
                            },
                            children: [
                                "Redeeming ",
                                loyaltyPointsToRedeem,
                                " points = $",
                                (loyaltyPointsToRedeem / POINTS_TO_DOLLAR_RATE).toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 555,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                    lineNumber: 534,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pos-screen",
        style: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--pos-bg-main)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    height: '80px',
                    background: 'var(--pos-bg-surface)',
                    borderBottom: '1px solid var(--pos-border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 32px',
                    justifyContent: 'space-between',
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.back(),
                                className: "pos-btn-secondary",
                                style: {
                                    height: '56px',
                                    padding: '0 24px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontWeight: 900
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                        lineNumber: 572,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " BACK"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                lineNumber: 571,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: '22px',
                                            fontWeight: 900
                                        },
                                        children: "Enterprise Payment System"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                        lineNumber: 575,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '11px',
                                            color: 'var(--pos-text-muted)',
                                            fontWeight: 800,
                                            textTransform: 'uppercase'
                                        },
                                        children: [
                                            session?.store?.name || 'TERMINAL 01',
                                            " • ",
                                            isSplitMode ? 'SPLIT PAYMENT ACTIVE' : 'SELECT TENDER'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                        lineNumber: 576,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                lineNumber: 574,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                        lineNumber: 570,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: !isFullyPaid,
                        onClick: handleCompleteOrder,
                        className: "pos-btn-primary",
                        style: {
                            height: '56px',
                            padding: '0 32px',
                            borderRadius: '12px',
                            background: isFullyPaid ? '#10B981' : 'var(--pos-bg-surface)',
                            border: 'none',
                            fontWeight: 900,
                            boxShadow: isFullyPaid ? '0 8px 16px rgba(16,185,129,0.3)' : 'none',
                            opacity: isFullyPaid ? 1 : 0.5,
                            cursor: isFullyPaid ? 'pointer' : 'not-allowed'
                        },
                        children: "COMPLETE SESSION"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                        lineNumber: 581,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                lineNumber: 569,
                columnNumber: 13
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
                            flex: 1,
                            padding: '32px',
                            overflowY: 'auto'
                        },
                        children: paymentState === 'PROCESSING' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 80,
                                    className: "spin",
                                    color: "var(--pos-action-primary)"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 592,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontSize: '32px',
                                                fontWeight: 900,
                                                marginBottom: '8px'
                                            },
                                            children: terminalStatus
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 594,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--pos-text-muted)',
                                                fontSize: '18px',
                                                fontWeight: 600
                                            },
                                            children: "Awaiting backend confirmation..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 595,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 593,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 591,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : paymentState === 'SELECTING' && !isSplitMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animation: 'posFadeInUp 0.3s'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '14px',
                                        fontWeight: 800,
                                        color: 'var(--pos-text-muted)',
                                        textTransform: 'uppercase',
                                        marginBottom: '24px'
                                    },
                                    children: "Primary Tender Selection"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 600,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: '20px'
                                    },
                                    children: [
                                        {
                                            id: 'cash',
                                            label: 'CASH',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"],
                                            color: '#10B981'
                                        },
                                        {
                                            id: 'card',
                                            label: 'DEBIT/CREDIT',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                                            color: '#3B82F6'
                                        },
                                        {
                                            id: 'terminal',
                                            label: 'INTEGRATED Terminal',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"],
                                            color: '#8B5CF6'
                                        },
                                        {
                                            id: 'wallet',
                                            label: 'E-WALLET / APP',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
                                            color: '#F59E0B'
                                        },
                                        {
                                            id: 'gift_card',
                                            label: 'GIFT VOUCHER',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
                                            color: '#EC4899'
                                        },
                                        {
                                            id: 'loyalty_points',
                                            label: 'LOYALTY POINTS',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
                                            color: '#F97316',
                                            disabled: !customer || availableLoyaltyPoints === 0
                                        },
                                        {
                                            id: 'split',
                                            label: 'SPLIT PAYMENT',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Split$3e$__["Split"],
                                            color: '#64748B'
                                        }
                                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>!m.disabled && handleMethodSelect(m.id),
                                            className: "pos-card hover-glow",
                                            style: {
                                                padding: '32px',
                                                borderRadius: '24px',
                                                border: '2px solid var(--pos-border-subtle)',
                                                background: 'var(--pos-bg-card)',
                                                textAlign: 'left',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '24px',
                                                cursor: m.disabled ? 'not-allowed' : 'pointer',
                                                opacity: m.disabled ? 0.5 : 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '64px',
                                                        height: '64px',
                                                        borderRadius: '18px',
                                                        background: `${m.color}15`,
                                                        color: m.color,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(m.icon, {
                                                        size: 36
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 219
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '20px',
                                                                fontWeight: 900
                                                            },
                                                            children: m.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        m.id === 'loyalty_points' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: 'var(--pos-text-muted)',
                                                                marginTop: '4px'
                                                            },
                                                            children: customer ? `${availableLoyaltyPoints} pts available` : 'No customer selected'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, m.id, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 611,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 601,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 599,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: '600px',
                                margin: '0 auto',
                                animation: 'posFadeInUp 0.2s'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '32px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '28px',
                                                fontWeight: 900
                                            },
                                            children: currentMethod ? 'Payment Details' : 'Select Split Method'
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 628,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setCurrentMethod(null);
                                                setPaymentState('SELECTING');
                                            },
                                            className: "pos-btn-secondary",
                                            style: {
                                                height: '40px',
                                                padding: '0 16px',
                                                borderRadius: '10px'
                                            },
                                            children: "CANCEL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 629,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 627,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                isSplitMode && !currentMethod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: '16px'
                                    },
                                    children: [
                                        {
                                            id: 'cash',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"],
                                            label: 'CASH'
                                        },
                                        {
                                            id: 'card',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                                            label: 'CARD'
                                        },
                                        {
                                            id: 'terminal',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"],
                                            label: 'TERMINAL'
                                        },
                                        {
                                            id: 'wallet',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
                                            label: 'WALLET'
                                        },
                                        {
                                            id: 'gift_card',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
                                            label: 'GIFT'
                                        },
                                        {
                                            id: 'loyalty_points',
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
                                            label: 'LOYALTY',
                                            disabled: !customer || availableLoyaltyPoints === 0
                                        }
                                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>!m.disabled && handleMethodSelect(m.id),
                                            style: {
                                                height: '100px',
                                                borderRadius: '20px',
                                                border: '2px solid var(--pos-border-subtle)',
                                                background: 'var(--pos-bg-card)',
                                                color: 'var(--pos-text-primary)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '8px',
                                                cursor: m.disabled ? 'not-allowed' : 'pointer',
                                                fontWeight: 800,
                                                opacity: m.disabled ? 0.5 : 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(m.icon, {
                                                    size: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '12px'
                                                    },
                                                    children: m.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, m.id, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 642,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 633,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                currentMethod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pos-card",
                                    style: {
                                        padding: '32px',
                                        borderRadius: '24px',
                                        background: 'var(--pos-bg-card)',
                                        border: '1px solid var(--pos-border-subtle)',
                                        marginBottom: '32px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MethodPanel, {}, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 652,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        paymentError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '16px',
                                                background: 'rgba(239, 68, 68, 0.1)',
                                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                                borderRadius: '12px',
                                                color: '#EF4444',
                                                fontWeight: 700,
                                                margin: '24px 0',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 296
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                paymentError
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 653,
                                            columnNumber: 54
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: '32px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '11px',
                                                        fontWeight: 900,
                                                        color: 'var(--pos-text-muted)',
                                                        textTransform: 'uppercase',
                                                        marginBottom: '12px',
                                                        display: 'block'
                                                    },
                                                    children: "Tender Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'relative'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                position: 'absolute',
                                                                left: '20px',
                                                                top: '50%',
                                                                transform: 'translateY(-50%)',
                                                                fontSize: '32px',
                                                                fontWeight: 900,
                                                                color: 'var(--pos-text-muted)'
                                                            },
                                                            children: "$"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 657,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: inputValue,
                                                            readOnly: currentMethod !== 'cash',
                                                            onChange: (e)=>setInputValue(e.target.value),
                                                            style: {
                                                                width: '100%',
                                                                height: '80px',
                                                                background: 'var(--pos-bg-surface)',
                                                                border: '2px solid var(--pos-action-primary)',
                                                                borderRadius: '16px',
                                                                padding: '0 20px 0 50px',
                                                                fontSize: '38px',
                                                                fontWeight: 900,
                                                                color: 'var(--pos-text-primary)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 654,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleProcessTransaction,
                                            disabled: isFullyPaid,
                                            className: "pos-btn-primary",
                                            style: {
                                                width: '100%',
                                                height: '80px',
                                                borderRadius: '20px',
                                                fontSize: '20px',
                                                fontWeight: 900,
                                                marginTop: '32px'
                                            },
                                            children: "CONFIRM & PROCESS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 661,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 651,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                currentMethod === 'cash' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '24px',
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
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
                                    ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if (v === 'C') setInputValue('');
                                                else if (v === '.') !inputValue.includes('.') && setInputValue((prev)=>prev + String(v));
                                                else setInputValue((prev)=>prev === '0.00' || prev === '0' ? String(v) : prev + String(v));
                                            },
                                            style: {
                                                height: '70px',
                                                borderRadius: '16px',
                                                background: 'var(--pos-bg-card)',
                                                border: '1px solid var(--pos-border-subtle)',
                                                fontSize: '24px',
                                                fontWeight: 800,
                                                color: 'var(--pos-text-primary)',
                                                cursor: 'pointer'
                                            },
                                            children: v
                                        }, v, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 668,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 666,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 626,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                        lineNumber: 589,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '500px',
                            background: 'var(--pos-bg-surface)',
                            borderLeft: '1px solid var(--pos-border-subtle)',
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                padding: '32px',
                                overflowY: 'auto'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '24px',
                                        background: 'var(--pos-bg-card)',
                                        borderRadius: '16px',
                                        border: '1px solid var(--pos-border-subtle)',
                                        marginBottom: '24px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginBottom: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 800,
                                                        color: 'var(--pos-text-muted)'
                                                    },
                                                    children: "TOTAL PAID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 117
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 900,
                                                        fontSize: '20px',
                                                        color: '#10B981'
                                                    },
                                                    children: [
                                                        "$",
                                                        amountPaid.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 200
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 685,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 800,
                                                        color: 'var(--pos-text-muted)'
                                                    },
                                                    children: "REMAINING"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 95
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 900,
                                                        fontSize: '32px',
                                                        color: remainingBalance > 0 ? 'var(--pos-action-primary)' : '#10B981'
                                                    },
                                                    children: [
                                                        "$",
                                                        remainingBalance.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 177
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 686,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        changeDue > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '16px',
                                                borderRadius: '12px',
                                                background: 'rgba(16, 185, 129, 0.1)',
                                                color: '#10B981',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginTop: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 800
                                                    },
                                                    children: "CHANGE DUE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 950,
                                                        fontSize: '24px'
                                                    },
                                                    children: [
                                                        "$",
                                                        changeDue.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 688,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 684,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                customer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pos-card",
                                    style: {
                                        padding: '20px',
                                        borderRadius: '16px',
                                        background: 'var(--pos-bg-card)',
                                        border: '1px solid var(--pos-border-subtle)',
                                        marginBottom: '24px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginBottom: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '16px',
                                                                fontWeight: 900
                                                            },
                                                            children: customer.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: 'var(--pos-text-muted)',
                                                                fontWeight: 600
                                                            },
                                                            children: customer.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 701,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: 'right'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: 'var(--pos-text-muted)',
                                                                fontWeight: 800
                                                            },
                                                            children: "LOYALTY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '20px',
                                                                fontWeight: 900,
                                                                color: '#F97316'
                                                            },
                                                            children: availableLoyaltyPoints
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 705,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 703,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 698,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        customer.recentOrders && customer.recentOrders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowCustomerHistory(!showCustomerHistory),
                                            style: {
                                                width: '100%',
                                                padding: '8px',
                                                background: 'var(--pos-bg-surface)',
                                                border: '1px solid var(--pos-border-subtle)',
                                                borderRadius: '8px',
                                                fontSize: '12px',
                                                fontWeight: 800,
                                                color: 'var(--pos-action-primary)',
                                                cursor: 'pointer',
                                                marginTop: '12px'
                                            },
                                            children: [
                                                showCustomerHistory ? 'HIDE' : 'VIEW',
                                                " ORDER HISTORY (",
                                                customer.recentOrders.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 709,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        showCustomerHistory && customer.recentOrders && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: '12px',
                                                maxHeight: '200px',
                                                overflowY: 'auto'
                                            },
                                            children: customer.recentOrders.map((order, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '12px',
                                                        background: 'var(--pos-bg-surface)',
                                                        borderRadius: '8px',
                                                        marginBottom: '8px',
                                                        border: '1px solid var(--pos-border-subtle)'
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
                                                                        fontWeight: 900,
                                                                        color: 'var(--pos-action-primary)'
                                                                    },
                                                                    children: order.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                    lineNumber: 718,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '12px',
                                                                        fontWeight: 900
                                                                    },
                                                                    children: [
                                                                        "$",
                                                                        order.amount.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                    lineNumber: 719,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '11px',
                                                                color: 'var(--pos-text-muted)',
                                                                marginBottom: '4px'
                                                            },
                                                            children: order.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 721,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '11px',
                                                                color: 'var(--pos-text-primary)'
                                                            },
                                                            children: order.items
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 722,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 714,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 697,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '24px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '18px',
                                                fontWeight: 900
                                            },
                                            children: "Payment Breakdown"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 731,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowDiscountPanel(!showDiscountPanel),
                                            className: "pos-btn-secondary",
                                            style: {
                                                height: '36px',
                                                padding: '0 12px',
                                                borderRadius: '8px',
                                                color: 'var(--pos-action-primary)',
                                                fontSize: '12px',
                                                fontWeight: 800
                                            },
                                            children: "+ DISCOUNT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 732,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 730,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                showDiscountPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pos-card",
                                    style: {
                                        marginBottom: '24px',
                                        padding: '20px',
                                        border: '2px solid var(--pos-action-primary)',
                                        borderRadius: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginBottom: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 900,
                                                        fontSize: '14px'
                                                    },
                                                    children: "PROMOTIONS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 121
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 20,
                                                    style: {
                                                        cursor: 'pointer'
                                                    },
                                                    onClick: ()=>setShowDiscountPanel(false)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 190
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 737,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '8px',
                                                marginBottom: '20px'
                                            },
                                            children: MOCK_COUPONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleApplyCoupon(c),
                                                    style: {
                                                        padding: '12px',
                                                        borderRadius: '10px',
                                                        background: 'var(--pos-bg-surface)',
                                                        border: '1px solid var(--pos-border-subtle)',
                                                        textAlign: 'left',
                                                        cursor: 'pointer'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontWeight: 900,
                                                                fontSize: '13px',
                                                                color: 'var(--pos-action-primary)'
                                                            },
                                                            children: c.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 739,
                                                            columnNumber: 287
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '11px',
                                                                color: 'var(--pos-text-muted)'
                                                            },
                                                            children: c.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 739,
                                                            columnNumber: 388
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, c.id, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 739,
                                                    columnNumber: 60
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 738,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderTop: '1px solid var(--pos-border-subtle)',
                                                paddingTop: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '13px',
                                                        fontWeight: 900,
                                                        display: 'block',
                                                        marginBottom: '12px'
                                                    },
                                                    children: "MANUAL ADJUSTMENT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 742,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: 'min-content 1fr',
                                                        gap: '8px',
                                                        marginBottom: '12px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                background: 'var(--pos-bg-surface)',
                                                                borderRadius: '8px',
                                                                overflow: 'hidden',
                                                                border: '1px solid var(--pos-border-subtle)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setManualType('PERCENT'),
                                                                    style: {
                                                                        padding: '8px 12px',
                                                                        background: manualType === 'PERCENT' ? 'var(--pos-action-primary)' : 'transparent',
                                                                        color: manualType === 'PERCENT' ? 'white' : 'var(--pos-text-muted)',
                                                                        border: 'none',
                                                                        fontWeight: 900
                                                                    },
                                                                    children: "%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setManualType('FLAT'),
                                                                    style: {
                                                                        padding: '8px 12px',
                                                                        background: manualType === 'FLAT' ? 'var(--pos-action-primary)' : 'transparent',
                                                                        color: manualType === 'FLAT' ? 'white' : 'var(--pos-text-muted)',
                                                                        border: 'none',
                                                                        fontWeight: 900
                                                                    },
                                                                    children: "$"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                    lineNumber: 746,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 744,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Value",
                                                            value: manualValue,
                                                            onChange: (e)=>setManualValue(e.target.value),
                                                            style: {
                                                                height: '40px',
                                                                background: 'var(--pos-bg-surface)',
                                                                border: '1px solid var(--pos-border-subtle)',
                                                                borderRadius: '8px',
                                                                padding: '0 12px',
                                                                fontWeight: 800
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Reason for override...",
                                                    value: manualReason,
                                                    onChange: (e)=>setManualReason(e.target.value),
                                                    style: {
                                                        width: '100%',
                                                        height: '40px',
                                                        background: 'var(--pos-bg-surface)',
                                                        border: '1px solid var(--pos-border-subtle)',
                                                        borderRadius: '8px',
                                                        padding: '0 12px',
                                                        fontWeight: 600,
                                                        fontSize: '12px',
                                                        marginBottom: '12px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleApplyManualDiscountRequest,
                                                    className: "pos-btn-primary",
                                                    style: {
                                                        width: '100%',
                                                        height: '44px',
                                                        borderRadius: '10px',
                                                        fontSize: '13px'
                                                    },
                                                    children: "APPLY ADJUSTMENT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 751,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 741,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 736,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pos-card",
                                    style: {
                                        padding: '24px',
                                        borderRadius: '20px',
                                        background: 'var(--pos-bg-card)',
                                        border: '1px solid var(--pos-border-subtle)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingRow, {
                                            label: "Order Subtotal",
                                            value: subtotal
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 757,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        appliedDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingRow, {
                                            label: `${appliedDiscount.name} (${appliedDiscount.type === 'PERCENT' ? appliedDiscount.value + '%' : '$' + appliedDiscount.value})`,
                                            value: discountAmount,
                                            isNeg: true,
                                            color: "#EF4444"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 758,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingRow, {
                                            label: "Tax (8%)",
                                            value: taxAmount
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 759,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        deliveryFee > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingRow, {
                                            label: "Delivery Fee",
                                            value: deliveryFee
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 760,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        tipAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingRow, {
                                            label: "Gratuity (Tip)",
                                            value: tipAmount,
                                            color: "var(--pos-action-primary)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 761,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                margin: '20px 0',
                                                borderTop: '2px dashed var(--pos-border-subtle)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 762,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingRow, {
                                            label: "TOTAL AMOUNT",
                                            value: totalAmountDue,
                                            isBold: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 763,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 756,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '32px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '14px',
                                                fontWeight: 900,
                                                marginBottom: '16px',
                                                color: 'var(--pos-text-muted)'
                                            },
                                            children: "TRANSACTION HISTORY"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 767,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '12px'
                                            },
                                            children: [
                                                transactions.map((t, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            padding: '16px',
                                                            borderRadius: '16px',
                                                            background: 'var(--pos-bg-card)',
                                                            border: '1px solid var(--pos-border-subtle)',
                                                            animation: 'posFadeInUp 0.3s'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontWeight: 900,
                                                                            fontSize: '14px'
                                                                        },
                                                                        children: [
                                                                            t.method.toUpperCase(),
                                                                            " ",
                                                                            t.last4 ? `(****${t.last4})` : ''
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                        lineNumber: 772,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '11px',
                                                                            color: 'var(--pos-text-muted)',
                                                                            fontWeight: 700
                                                                        },
                                                                        children: [
                                                                            t.timestamp.toLocaleTimeString(),
                                                                            " • ",
                                                                            t.reference_id
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                        lineNumber: 773,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                lineNumber: 771,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    textAlign: 'right',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '16px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 900,
                                                                                    fontSize: '16px',
                                                                                    color: '#10B981'
                                                                                },
                                                                                children: [
                                                                                    "+ $",
                                                                                    t.amount.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                                lineNumber: 777,
                                                                                columnNumber: 49
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            t.tip > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '11px',
                                                                                    color: 'var(--pos-action-primary)',
                                                                                    fontWeight: 800
                                                                                },
                                                                                children: [
                                                                                    "Tip: $",
                                                                                    t.tip.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                                lineNumber: 778,
                                                                                columnNumber: 63
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                        lineNumber: 776,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    idx === transactions.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>initiateReversal(t.id),
                                                                        style: {
                                                                            color: '#EF4444',
                                                                            border: 'none',
                                                                            background: 'transparent',
                                                                            cursor: 'pointer'
                                                                        },
                                                                        title: "Reverse Transaction",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                            lineNumber: 781,
                                                                            columnNumber: 215
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                        lineNumber: 781,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                                lineNumber: 775,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, t.id, true, {
                                                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                        lineNumber: 770,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                transactions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '40px 0',
                                                        textAlign: 'center',
                                                        color: 'var(--pos-text-muted)',
                                                        fontWeight: 600,
                                                        border: '2px dashed var(--pos-border-subtle)',
                                                        borderRadius: '20px'
                                                    },
                                                    children: "No payments recorded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 63
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                            lineNumber: 768,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 766,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 682,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                        lineNumber: 681,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                lineNumber: 586,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showPinPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.85)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    animation: 'posFadeInUp 0.1s'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pos-card",
                    style: {
                        width: '400px',
                        padding: '48px',
                        borderRadius: '32px',
                        textAlign: 'center',
                        background: 'var(--pos-bg-card)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                            size: 64,
                            color: "var(--pos-action-primary)",
                            style: {
                                marginBottom: '24px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 799,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '24px',
                                fontWeight: 900,
                                marginBottom: '8px'
                            },
                            children: "Manager PIN"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 800,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'var(--pos-text-muted)',
                                fontWeight: 600,
                                marginBottom: '32px'
                            },
                            children: pinPurpose === 'DISCOUNT' ? 'Authorize high-value discount' : 'Authorize transaction reversal'
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 801,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "••••",
                            value: pinValue,
                            onChange: (e)=>setPinValue(e.target.value),
                            autoFocus: true,
                            style: {
                                width: '100%',
                                height: '72px',
                                background: 'var(--pos-bg-surface)',
                                border: '2px solid var(--pos-border-subtle)',
                                borderRadius: '16px',
                                textAlign: 'center',
                                fontSize: '48px',
                                letterSpacing: '16px',
                                fontWeight: 900,
                                marginBottom: '32px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 802,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '16px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowPinPrompt(false);
                                        setPinValue('');
                                    },
                                    className: "pos-btn-secondary",
                                    style: {
                                        height: '60px',
                                        borderRadius: '14px'
                                    },
                                    children: "CANCEL"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 804,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePinSubmit,
                                    className: "pos-btn-primary",
                                    style: {
                                        height: '60px',
                                        borderRadius: '14px'
                                    },
                                    children: "CONFIRM"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                                    lineNumber: 805,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                            lineNumber: 803,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                    lineNumber: 798,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                lineNumber: 797,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                .spin { animation: spin 0.8s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes posFadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
                .hover-glow:hover { box-shadow: 0 0 35px rgba(31, 164, 169, 0.2); border-color: var(--pos-action-primary) !important; transform: translateY(-2px); }
                .pulse-dot { width: 8px; height: 8px; background: #10B981; border-radius: 50%; animation: pulse 1.5s infinite; }
                @keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } }
            `
            }, void 0, false, {
                fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
                lineNumber: 811,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/pages/POSPaymentScreen.tsx",
        lineNumber: 566,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(POSPaymentScreen, "5Khoesm/tP7DhlBPxUUg/un/Cmc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePOS"]
    ];
});
_c = POSPaymentScreen;
const __TURBOPACK__default__export__ = POSPaymentScreen;
var _c;
__turbopack_context__.k.register(_c, "POSPaymentScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_pos_pages_POSPaymentScreen_tsx_262a9e84._.js.map