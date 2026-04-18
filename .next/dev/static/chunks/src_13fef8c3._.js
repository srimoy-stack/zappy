(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SegmentRuleBuilder",
    ()=>SegmentRuleBuilder,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// ============================================================================
// CONFIGURATION Constants
// ============================================================================
const FIELDS = [
    {
        value: 'last_order_days',
        label: 'Last Order (days ago)',
        type: 'number'
    },
    {
        value: 'total_spend',
        label: 'Total Spend ($)',
        type: 'number'
    },
    {
        value: 'orders_count',
        label: 'Total Orders',
        type: 'number'
    },
    {
        value: 'store_id',
        label: 'Store Identity',
        type: 'multi'
    },
    {
        value: 'consent_status',
        label: 'Consent Status',
        type: 'select'
    }
];
const OPERATORS_FOR_TYPE = {
    number: [
        {
            value: '>',
            label: 'is greater than'
        },
        {
            value: '<',
            label: 'is less than'
        },
        {
            value: '=',
            label: 'is exactly'
        },
        {
            value: '!=',
            label: 'is not'
        }
    ],
    string: [
        {
            value: '=',
            label: 'equals'
        },
        {
            value: 'contains',
            label: 'contains keyword'
        },
        {
            value: '!=',
            label: 'does not equal'
        }
    ],
    select: [
        {
            value: '=',
            label: 'is'
        },
        {
            value: '!=',
            label: 'is not'
        }
    ],
    multi: [
        {
            value: 'in',
            label: 'is in list'
        },
        {
            value: 'not_in',
            label: 'is not in list'
        }
    ]
};
const CONSENT_OPTIONS = [
    {
        value: 'Eligible',
        label: 'Eligible (Subscribed)'
    },
    {
        value: 'Unsubscribed',
        label: 'Unsubscribed (Opted-out)'
    },
    {
        value: 'Suppressed',
        label: 'Suppressed (Bounced/Blocked)'
    }
];
const MOCK_STORES = [
    {
        id: 'store_001',
        name: 'Flagship San Francisco'
    },
    {
        id: 'store_002',
        name: 'New York Boutique'
    },
    {
        id: 'store_003',
        name: 'London Outlet'
    },
    {
        id: 'store_004',
        name: 'Tokyo Concept'
    },
    {
        id: 'store_005',
        name: 'Online Store'
    }
];
// ============================================================================
// UTILS
// ============================================================================
function generateId() {
    return Math.random().toString(36).substring(2, 9);
}
function createEmptyRule() {
    return {
        id: generateId(),
        field: 'last_order_days',
        operator: '>',
        value: ''
    };
}
const SegmentRuleBuilder = ({ value, onChange })=>{
    _s();
    const { logic, rules } = value;
    // ── Handlers ───────────────────────────────────────────────────────
    const updateRule = (id, patch)=>{
        onChange({
            ...value,
            rules: rules.map((r)=>{
                if (r.id !== id) return r;
                // If field changes, reset operator/value to defaults for that type
                if (patch.field && patch.field !== r.field) {
                    const newFieldCfg = FIELDS.find((f)=>f.value === patch.field);
                    const defaultOp = OPERATORS_FOR_TYPE[newFieldCfg.type][0].value;
                    const defaultValue = newFieldCfg.type === 'multi' ? [] : newFieldCfg.type === 'select' ? 'Eligible' : '';
                    return {
                        ...r,
                        ...patch,
                        operator: defaultOp,
                        value: defaultValue
                    };
                }
                return {
                    ...r,
                    ...patch
                };
            })
        });
    };
    const addRule = ()=>{
        onChange({
            ...value,
            rules: [
                ...rules,
                createEmptyRule()
            ]
        });
    };
    const removeRule = (id)=>{
        if (rules.length <= 1) return;
        onChange({
            ...value,
            rules: rules.filter((r)=>r.id !== id)
        });
    };
    const toggleLogic = ()=>{
        onChange({
            ...value,
            logic: logic === 'AND' ? 'OR' : 'AND'
        });
    };
    // ── Validation ────────────────────────────────────────────────────
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SegmentRuleBuilder.useMemo[errors]": ()=>{
            const errs = [];
            if (rules.length === 0) errs.push('At least one rule is required');
            rules.forEach({
                "SegmentRuleBuilder.useMemo[errors]": (r, idx)=>{
                    if (Array.isArray(r.value)) {
                        if (r.value.length === 0) errs.push(`Rule #${idx + 1} has no items selected`);
                    } else if (!String(r.value).trim()) {
                        errs.push(`Rule #${idx + 1} is missing a value`);
                    }
                }
            }["SegmentRuleBuilder.useMemo[errors]"]);
            return errs;
        }
    }["SegmentRuleBuilder.useMemo[errors]"], [
        rules
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-indigo-50 rounded-xl text-indigo-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-black text-slate-900 uppercase tracking-tight",
                                        children: "Segmentation Protocol"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5",
                                        children: "Advanced targeting conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 143,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-3 h-3 text-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 148,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-black text-amber-600 uppercase tracking-widest leading-none",
                                children: "Validation Pending"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 147,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 136,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-6 p-1.5 bg-slate-50 border border-slate-200 rounded-[1.5rem] w-fit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-white p-1 rounded-xl shadow-sm border border-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>logic !== 'AND' && toggleLogic(),
                                className: `px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all
                            ${logic === 'AND' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-400 hover:text-slate-600'}`,
                                children: "Match All (AND)"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 157,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>logic !== 'OR' && toggleLogic(),
                                className: `px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all
                            ${logic === 'OR' ? 'bg-amber-500 text-white shadow-lg shadow-amber-100' : 'text-slate-400 hover:text-slate-600'}`,
                                children: "Match Any (OR)"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-bold text-slate-500 uppercase tracking-widest pr-4 border-l border-slate-200 pl-4 h-5 flex items-center",
                        children: logic === 'AND' ? 'Logical Intersection' : 'Logical Union'
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 172,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 relative",
                children: rules.map((rule, idx)=>{
                    const fieldCfg = FIELDS.find((f)=>f.value === rule.field) || FIELDS[0];
                    const opOptions = OPERATORS_FOR_TYPE[fieldCfg.type];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group animate-in slide-in-from-left-2 duration-300",
                        style: {
                            animationDelay: `${idx * 50}ms`
                        },
                        children: [
                            idx > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-3 left-6 w-px h-3 bg-slate-100"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 186,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 bg-white border rounded-[1.5rem] shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4 transition-all
                                ${String(rule.value || '').trim() ? 'border-slate-200' : 'border-amber-200/50 bg-amber-50/10'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-[240px] shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5 ml-1",
                                                children: "Condition Basis"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 193,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: rule.field,
                                                onChange: (e)=>updateRule(rule.id, {
                                                        field: e.target.value
                                                    }),
                                                className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-black text-slate-900 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all appearance-none cursor-pointer",
                                                children: FIELDS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: f.value,
                                                        children: f.label
                                                    }, f.value, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 60
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 194,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 192,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-[180px] shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5 ml-1",
                                                children: "Relationship"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 205,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: rule.operator,
                                                onChange: (e)=>updateRule(rule.id, {
                                                        operator: e.target.value
                                                    }),
                                                className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-600 focus:bg-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer",
                                                children: opOptions.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: o.value,
                                                        children: o.label
                                                    }, o.value, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 63
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 206,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 204,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 w-full min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5 ml-1",
                                                children: "Threshold / Target"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 217,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            fieldCfg.type === 'select' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: String(rule.value),
                                                onChange: (e)=>updateRule(rule.id, {
                                                        value: e.target.value
                                                    }),
                                                className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-black text-indigo-700 focus:bg-white outline-none transition-all appearance-none cursor-pointer",
                                                children: CONSENT_OPTIONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c.value,
                                                        children: c.label
                                                    }, c.value, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 73
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 220,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)) : fieldCfg.type === 'multi' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MultiSelect, {
                                                options: MOCK_STORES,
                                                value: Array.isArray(rule.value) ? rule.value : [],
                                                onChange: (val)=>updateRule(rule.id, {
                                                        value: val
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 228,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: fieldCfg.type === 'number' ? 'number' : 'text',
                                                        value: String(rule.value),
                                                        onChange: (e)=>updateRule(rule.id, {
                                                                value: e.target.value
                                                            }),
                                                        placeholder: fieldCfg.type === 'number' ? '0' : 'Enter value...',
                                                        className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-black text-slate-900 focus:bg-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    fieldCfg.type === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                                        className: "absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 50
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 234,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 216,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:pt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeRule(rule.id),
                                            disabled: rules.length <= 1,
                                            className: "p-3 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-2xl transition-all disabled:opacity-0 disabled:pointer-events-none group-hover:bg-slate-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 256,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                            lineNumber: 251,
                                            columnNumber: 38
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 250,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 188,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, rule.id, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 184,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 pt-4 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: addRule,
                        className: "flex-1 flex items-center justify-center gap-2.5 py-4 border-2 border-dashed border-indigo-100 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-700 transition-all active:scale-95 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4 transition-transform group-hover:rotate-90"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 271,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Add Condition"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 267,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "hidden sm:block group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                className: "p-4 bg-slate-100 text-slate-400 rounded-full cursor-pointer hover:bg-slate-900 hover:text-white transition-all list-none outline-none shadow-sm ring-4 ring-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                    lineNumber: 276,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 275,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 bottom-full mb-4 z-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "p-6 bg-slate-900 text-[10px] text-emerald-400 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 w-[320px] max-h-[400px] overflow-auto font-mono leading-relaxed animate-in zoom-in-95 origin-bottom-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4 pb-2 border-b border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-black uppercase tracking-[0.2em]",
                                                    children: "Debug Context"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-rose-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-amber-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                            lineNumber: 280,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        JSON.stringify(value, null, 2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                    lineNumber: 279,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 278,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 274,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 266,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-amber-50 border border-amber-200 rounded-[1.5rem] flex items-start gap-3 mt-4 animate-in slide-in-from-top-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-4 h-4 text-amber-500 mt-0.5 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 297,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-black text-amber-900 uppercase tracking-widest leading-none mb-1",
                                children: "Incomplete Configuration"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 299,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-amber-700 font-bold opacity-80 leading-relaxed uppercase tracking-tighter",
                                children: "Segment remains inactive until rules are validated"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 300,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 298,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 296,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
        lineNumber: 134,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SegmentRuleBuilder, "zRcRlFCPIEYkKHWfbY/hRg2v6yc=");
_c = SegmentRuleBuilder;
// ============================================================================
// AUXILIARY: MultiSelect Component
// ============================================================================
const MultiSelect = ({ options, value, onChange })=>{
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggle = (id)=>{
        if (value.includes(id)) onChange(value.filter((v)=>v !== id));
        else onChange([
            ...value,
            id
        ]);
    };
    const selectedLabels = options.filter((o)=>value.includes(o.id)).map((o)=>o.name);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen(!open),
                className: "w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-black text-indigo-700 text-left transition-all hover:bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "truncate flex-1",
                        children: value.length === 0 ? 'Select stores...' : value.length === 1 ? selectedLabels[0] : `${value.length} Stores Selected`
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 329,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-3 h-3 ml-2 transition-transform ${open ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 332,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 324,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-40",
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 337,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 p-2 space-y-1 animate-in zoom-in-95 duration-200",
                        children: [
                            options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggle(o.id),
                                    className: `w-full flex items-center justify-between px-3 py-2 rounded-xl text-[10px] font-bold uppercase tracking-tight transition-all
                                    ${value.includes(o.id) ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`,
                                    children: [
                                        o.name,
                                        value.includes(o.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                            lineNumber: 347,
                                            columnNumber: 58
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, o.id, true, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                    lineNumber: 340,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))),
                            value.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onChange([]),
                                className: "w-full py-2 mt-2 border-t border-slate-100 text-[9px] font-black text-rose-500 uppercase tracking-widest text-center hover:bg-rose-50",
                                children: "Clear Selection"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 351,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 338,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
        lineNumber: 323,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(MultiSelect, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c1 = MultiSelect;
const Tooltip = ({ label, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group/tt",
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover/tt:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl",
                children: [
                    label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 371,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 369,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
        lineNumber: 367,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Tooltip;
const __TURBOPACK__default__export__ = SegmentRuleBuilder;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SegmentRuleBuilder");
__turbopack_context__.k.register(_c1, "MultiSelect");
__turbopack_context__.k.register(_c2, "Tooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/axios.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
// Add a request interceptor to include the auth token/tenant info if needed
axiosInstance.interceptors.request.use((config)=>{
    // You can get the session here if needed, but usually it's better to pass it from components
    // or handle it via cookies which NextAuth does automatically for same-origin
    return config;
}, (error)=>{
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosInstance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/email-campaigns/services/emailCampaignService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emailCampaignService",
    ()=>emailCampaignService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/axios.ts [app-client] (ecmascript)");
;
const emailCampaignService = {
    /**
     * Fetch all email campaigns
     */ getCampaigns: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/email-campaigns');
        return response.data;
    },
    /**
     * Fetch a single campaign by ID
     */ getCampaign: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/email-campaigns/${id}`);
        return response.data;
    },
    /**
     * Create a new email campaign
     */ createCampaign: async (payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/email-campaigns', payload);
        return response.data;
    },
    /**
     * Update an existing campaign
     */ updateCampaign: async (id, payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/email-campaigns/${id}`, payload);
        return response.data;
    },
    /**
     * Duplicate a campaign
     */ duplicateCampaign: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/email-campaigns/${id}/duplicate`);
        return response.data;
    },
    /**
     * Schedule a campaign
     */ scheduleCampaign: async (id, scheduledAt)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/email-campaigns/${id}/schedule`, scheduledAt ? {
            scheduledAt
        } : undefined);
        return response.data;
    },
    /**
     * Pause a campaign
     */ pauseCampaign: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/email-campaigns/${id}/pause`);
        return response.data;
    },
    /**
     * Fetch templates
     */ getTemplates: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/email-campaigns/templates');
        return response.data;
    },
    /**
     * Fetch audience eligibility
     */ getContacts: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/email-campaigns/contacts');
        return response.data;
    },
    /**
     * Send a test email
     */ sendTestEmail: async (email, options)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/email-campaigns/test-send', {
            ...options,
            email
        });
    },
    /**
     * Archive a campaign
     */ archiveCampaign: async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/email-campaigns/${id}/archive`);
    },
    /**
     * Fetch dashboard summary stats
     */ getDashboardStats: async (filters)=>{
        // In reality, this would send filters to the backend
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/email-campaigns/dashboard/stats', {
            params: filters
        });
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/email-campaigns/hooks/useContacts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useContacts",
    ()=>useContacts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$services$2f$emailCampaignService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/m9/email-campaigns/services/emailCampaignService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useContacts() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchContacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useContacts.useCallback[fetchContacts]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const eligibility = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$services$2f$emailCampaignService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailCampaignService"].getContacts();
                setData(eligibility);
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Failed to load audience data';
                setError(message);
            } finally{
                setLoading(false);
            }
        }
    }["useContacts.useCallback[fetchContacts]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContacts.useEffect": ()=>{
            fetchContacts();
        }
    }["useContacts.useEffect"], [
        fetchContacts
    ]);
    return {
        data,
        loading,
        error,
        refetch: fetchContacts
    };
}
_s(useContacts, "Pv/XVLhZBeNoNuBx2h2977B4/Tw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/email-campaigns/hooks/useTemplates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTemplates",
    ()=>useTemplates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$services$2f$emailCampaignService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/m9/email-campaigns/services/emailCampaignService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useTemplates() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchTemplates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTemplates.useCallback[fetchTemplates]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const templates = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$services$2f$emailCampaignService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailCampaignService"].getTemplates();
                setData(templates);
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Failed to load templates';
                setError(message);
            } finally{
                setLoading(false);
            }
        }
    }["useTemplates.useCallback[fetchTemplates]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTemplates.useEffect": ()=>{
            fetchTemplates();
        }
    }["useTemplates.useEffect"], [
        fetchTemplates
    ]);
    return {
        data,
        loading,
        error,
        refetch: fetchTemplates
    };
}
_s(useTemplates, "FCSBlJZ6KelVdG+pGdo+uIV+A3I=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateCampaignPage",
    ()=>CreateCampaignPage,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$components$2f$SegmentRuleBuilder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$hooks$2f$useContacts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/m9/email-campaigns/hooks/useContacts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$hooks$2f$useTemplates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/m9/email-campaigns/hooks/useTemplates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$services$2f$emailCampaignService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/m9/email-campaigns/services/emailCampaignService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// ============================================================================
// STEP DEFINITIONS
// ============================================================================
const STEPS = [
    {
        id: 'basics',
        label: 'Basics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"]
    },
    {
        id: 'audience',
        label: 'Audience',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        id: 'content',
        label: 'Content',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        id: 'review',
        label: 'Review & Comply',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
    },
    {
        id: 'send',
        label: 'Send',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"]
    }
];
// ============================================================================
// INITIAL STATE
// ============================================================================
const INITIAL_RULES = {
    logic: 'AND',
    rules: [
        {
            id: 'init',
            field: 'last_order',
            operator: '>',
            value: ''
        }
    ]
};
const INITIAL_DATA = {
    name: '',
    subject: '',
    previewText: '',
    senderName: '',
    replyTo: '',
    templateId: '',
    segmentId: 'all',
    storeId: undefined,
    scheduledAt: undefined,
    rulesJson: undefined
};
/** Step 1: Campaign basics */ const BasicsStep = ({ data, onChange, onValidate })=>{
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "BasicsStep.useEffect": ()=>{
            onValidate?.(true);
        }
    }["BasicsStep.useEffect"], [
        onValidate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2",
                        children: "Campaign Name *"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: data.name,
                        onChange: (e)=>onChange({
                                name: e.target.value
                            }),
                        placeholder: "e.g. Spring Sale Announcement",
                        className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2",
                        children: "Email Subject *"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: data.subject,
                        onChange: (e)=>onChange({
                                subject: e.target.value
                            }),
                        placeholder: "e.g. 🔥 Don't miss our spring sale!",
                        className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2",
                        children: "Preview Text"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: data.previewText,
                        onChange: (e)=>onChange({
                                previewText: e.target.value
                            }),
                        placeholder: "Short text shown in inbox preview",
                        className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 113,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2",
                                children: "Sender Name *"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 123,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: data.senderName,
                                onChange: (e)=>onChange({
                                        senderName: e.target.value
                                    }),
                                placeholder: "e.g. Zyappy",
                                className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 126,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2",
                                children: "Reply-To Email *"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 135,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                value: data.replyTo,
                                onChange: (e)=>onChange({
                                        replyTo: e.target.value
                                    }),
                                placeholder: "e.g. hello@zyappy.com",
                                className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 138,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BasicsStep, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = BasicsStep;
/** Step 2: Audience */ const AudienceStep = ({ data, onChange, onValidate })=>{
    _s1();
    const { data: eligibility, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$hooks$2f$useContacts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContacts"])();
    const [localRules, setLocalRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.rulesJson || INITIAL_RULES);
    // Sync rules to parent state
    const handleRulesChange = (payload)=>{
        setLocalRules(payload);
        onChange({
            rulesJson: payload
        });
    };
    // Handle segment type change
    const handleSegmentChange = (value)=>{
        onChange({
            segmentId: value
        });
        if (value === 'custom') {
            onChange({
                segmentId: value,
                rulesJson: localRules
            });
        } else {
            onChange({
                segmentId: value,
                rulesJson: undefined
            });
        }
    };
    // Validate: custom segment needs at least 1 rule with a value
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AudienceStep.useEffect": ()=>{
            if (data.segmentId === 'custom') {
                const hasValidRule = localRules.rules.length > 0 && localRules.rules.some({
                    "AudienceStep.useEffect": (r)=>r.value.trim() !== ''
                }["AudienceStep.useEffect"]);
                onValidate?.(hasValidRule);
            } else if (!loading && !error && eligibility) {
                onValidate?.(eligibility.eligible > 0);
            } else if (error) {
                onValidate?.(true);
            }
        }
    }["AudienceStep.useEffect"], [
        data.segmentId,
        localRules,
        eligibility,
        loading,
        error,
        onValidate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2",
                        children: "Audience Selection *"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: data.segmentId,
                        onChange: (e)=>handleSegmentChange(e.target.value),
                        className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-none transition-all font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Contacts"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 195,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "custom",
                                children: "Custom Segment (Build Rules)"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 196,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 190,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            data.segmentId === 'custom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 bg-white border border-indigo-100 rounded-2xl ring-1 ring-indigo-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$components$2f$SegmentRuleBuilder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SegmentRuleBuilder"], {
                    value: localRules,
                    onChange: handleRulesChange
                }, void 0, false, {
                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                    lineNumber: 203,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 202,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-10 flex flex-col items-center justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 209,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold text-slate-400 uppercase tracking-widest",
                        children: "Calculating eligibility..."
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 210,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 208,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5 text-red-500"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 214,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-700 font-medium",
                        children: "Failed to calculate audience."
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 215,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 213,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : eligibility ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 animate-in fade-in slide-in-from-top-2 duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-slate-50 border border-slate-200 rounded-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 221,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black text-slate-900",
                                        children: eligibility.total.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 222,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 220,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-emerald-50 border border-emerald-100 rounded-2xl ring-1 ring-emerald-200/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1",
                                        children: "Eligible"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 225,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black text-emerald-700",
                                        children: eligibility.eligible.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 226,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 224,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-rose-50 border border-rose-100 rounded-2xl ring-1 ring-rose-200/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1",
                                        children: "Excluded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 229,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black text-rose-700",
                                        children: eligibility.excluded.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 230,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 228,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 219,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    eligibility.excluded > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        className: "w-4 h-4 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 237,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-black text-slate-500 uppercase tracking-widest",
                                        children: "Exclusions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 238,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 236,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                                children: [
                                    {
                                        label: 'No Consent',
                                        count: eligibility.reasons.noConsent
                                    },
                                    {
                                        label: 'Unsubscribed',
                                        count: eligibility.reasons.unsubscribed
                                    },
                                    {
                                        label: 'Suppressed',
                                        count: eligibility.reasons.suppressed
                                    },
                                    {
                                        label: 'Invalid',
                                        count: eligibility.reasons.invalid
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-500",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 248,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-black text-slate-900",
                                                children: item.count.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 249,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 247,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 240,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 235,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 218,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
        lineNumber: 185,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AudienceStep, "mH6dNqsi+dAAj/SgJt68AGAVqJs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$hooks$2f$useContacts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContacts"]
    ];
});
_c1 = AudienceStep;
// ── Content Step Constants ───────────────────────────────────────────
const PLACEHOLDERS = {
    '{{customer_name}}': 'John Doe',
    '{{store_name}}': 'Zyappy Store',
    '{{brand_name}}': 'Zyappy',
    '{{unsubscribe_url}}': '#unsubscribe',
    '{{business_address}}': '123 Tech Lane, Silicon Valley, CA',
    '{{contact_email}}': 'support@zyappy.com'
};
const MANDATORY_TAGS = [
    '{{unsubscribe_url}}',
    '{{business_address}}',
    '{{contact_email}}'
];
const COMPLIANCE_FOOTER = `
<div style="margin-top:32px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center;">
  <p>You received this email because you opted in at {{store_name}}.</p>
  <p><a href="{{unsubscribe_url}}" style="color:#6366f1;">Unsubscribe</a> | {{business_address}}</p>
  <p>Contact us: {{contact_email}}</p>
</div>`;
function replaceVariables(html) {
    let result = html;
    Object.entries(PLACEHOLDERS).forEach(([key, value])=>{
        result = result.split(key).join(value);
    });
    return result;
}
/** Step 3: Content */ const ContentStep = ({ data, onChange, onValidate })=>{
    _s2();
    const { data: templates, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$hooks$2f$useTemplates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemplates"])();
    const [testEmail, setTestEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sendingTest, setSendingTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testFeedback, setTestFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedTemplate = templates.find((t)=>t.id === data.templateId);
    // Sync template HTML to customHtml on first selection
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ContentStep.useEffect": ()=>{
            if (selectedTemplate && !data.customHtml) {
                // Strip footer if present to avoid double footer
                const baseHtml = selectedTemplate.htmlBody.replace(COMPLIANCE_FOOTER, '');
                onChange({
                    customHtml: baseHtml
                });
            }
        }
    }["ContentStep.useEffect"], [
        selectedTemplate,
        data.customHtml,
        onChange
    ]);
    const currentHtml = data.customHtml || selectedTemplate?.htmlBody || '';
    const fullHtml = currentHtml.includes('{{unsubscribe_url}}') ? currentHtml : currentHtml + COMPLIANCE_FOOTER;
    // Validation
    const hasTemplate = !!data.templateId;
    const hasHtml = !!currentHtml.trim();
    const hasCompliance = MANDATORY_TAGS.every((tag)=>fullHtml.includes(tag));
    const isValid = hasTemplate && hasHtml && hasCompliance;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ContentStep.useEffect": ()=>{
            onValidate?.(isValid);
        }
    }["ContentStep.useEffect"], [
        isValid,
        onValidate
    ]);
    const handleSendTest = async ()=>{
        if (!testEmail || !isValid) return;
        setSendingTest(true);
        setTestFeedback(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$services$2f$emailCampaignService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailCampaignService"].sendTestEmail(testEmail, {
                templateId: data.templateId,
                templateHtml: fullHtml
            });
            setTestFeedback({
                type: 'success',
                message: 'Test email sent!'
            });
        } catch (err) {
            setTestFeedback({
                type: 'error',
                message: 'Failed to send test.'
            });
        } finally{
            setSendingTest(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 344,
                                                columnNumber: 30
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Select Template"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 343,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 p-1 overflow-x-auto",
                                        children: [
                                            ...Array(3)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-20 w-32 bg-slate-50 border border-slate-100 rounded-xl animate-pulse shrink-0"
                                            }, i, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 349,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 347,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-red-50 text-red-600 rounded-xl text-xs font-medium",
                                        children: "Failed to load templates."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 353,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 p-1 overflow-x-auto pb-2 custom-scrollbar",
                                        children: templates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onChange({
                                                        templateId: template.id,
                                                        customHtml: template.htmlBody.replace(COMPLIANCE_FOOTER, '')
                                                    }),
                                                className: `shrink-0 w-44 text-left p-3 rounded-xl border transition-all
                                            ${data.templateId === template.id ? 'bg-indigo-600 border-indigo-600 shadow-lg shadow-indigo-100' : 'bg-white border-slate-200 hover:border-indigo-300'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[11px] font-black truncate ${data.templateId === template.id ? 'text-white' : 'text-slate-900'}`,
                                                                children: template.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            data.templateId === template.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-3 h-3 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 81
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-12 bg-slate-50/10 rounded-lg border border-white/10 overflow-hidden relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-transparent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 46
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, template.id, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 357,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 355,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 342,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            data.templateId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "space-y-3 animate-in fade-in slide-in-from-top-2 duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 383,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " HTML Editor"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 382,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2.5 bg-slate-800/50 border-b border-white/5 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                        children: "template.html"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full",
                                                        children: "Editable"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 386,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: data.customHtml || '',
                                                onChange: (e)=>onChange({
                                                        customHtml: e.target.value
                                                    }),
                                                className: "w-full h-[350px] p-5 font-mono text-sm text-slate-300 bg-transparent outline-none resize-none leading-relaxed",
                                                placeholder: "Paste or write your HTML content..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 390,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-5 py-3 bg-emerald-900/20 border-t border-emerald-400/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                size: 12,
                                                                className: "text-emerald-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider",
                                                                children: "Footer Appended"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-emerald-400/60 font-medium italic",
                                                        children: "Legal footer (unsubscribe, address, email) is automatically appended on send."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 396,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 385,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 381,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 341,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 411,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Desktop Preview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 410,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden min-h-[500px] flex flex-col shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-5 py-3 bg-white border-b border-slate-200 flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2.5 h-2.5 rounded-full bg-rose-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2.5 h-2.5 rounded-full bg-amber-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2.5 h-2.5 rounded-full bg-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 416,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 max-w-sm mx-auto h-7 bg-slate-50 border border-slate-100 rounded-lg flex items-center px-3 text-[10px] text-slate-400 font-medium",
                                                children: "outlook.zyappy.com/inbox/preview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 421,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 415,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    data.templateId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto bg-white p-6 custom-scrollbar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 border-b border-slate-50 mb-6 flex gap-2 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-400 uppercase shrink-0",
                                                        children: "Subject:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 38
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-slate-900",
                                                        children: replaceVariables(selectedTemplate?.subject || '(No Subject)')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 38
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 428,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "preview-container",
                                                dangerouslySetInnerHTML: {
                                                    __html: replaceVariables(fullHtml)
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 432,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 427,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex flex-col items-center justify-center p-12 text-center opacity-40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 bg-white rounded-3xl shadow-sm border border-slate-200 flex items-center justify-center mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "w-8 h-8 text-slate-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 439,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-black text-slate-400 uppercase tracking-widest",
                                                children: "Select a template to preview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 442,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 438,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 414,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-white border border-slate-200 shadow-sm rounded-2xl space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        size: 10
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Quick Test Send"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 450,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            testFeedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] font-bold ${testFeedback.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`,
                                                children: testFeedback.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 454,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 449,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: testEmail,
                                                    onChange: (e)=>setTestEmail(e.target.value),
                                                    placeholder: "Enter test email address...",
                                                    className: "w-full h-10 px-4 bg-slate-50 border border-slate-100 rounded-xl text-xs font-medium focus:ring-1 focus:ring-indigo-500 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 460,
                                                columnNumber: 30
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSendTest,
                                                disabled: !isValid || !testEmail || sendingTest,
                                                className: "h-10 px-5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-lg shadow-indigo-100 disabled:shadow-none flex items-center justify-center gap-2",
                                                children: sendingTest ? 'Sending...' : 'Send Test'
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 469,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 459,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 448,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 409,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 339,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            data.templateId && !hasCompliance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-4 animate-in shake duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5 text-rose-500 shrink-0 mt-0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 484,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-black text-rose-900 uppercase tracking-tight",
                                children: "Compliance Error"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 486,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-rose-700 mt-0.5 font-medium leading-relaxed",
                                children: [
                                    "A required compliance tag was removed. You must include ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "bg-white/50 px-1 rounded",
                                        children: "{{unsubscribe_url}}"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 488,
                                        columnNumber: 85
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ",",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "bg-white/50 px-1 rounded",
                                        children: "{{business_address}}"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 489,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ", and ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "bg-white/50 px-1 rounded",
                                        children: "{{contact_email}}"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 489,
                                        columnNumber: 109
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "before you can proceed."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 487,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 485,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 483,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
        lineNumber: 338,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(ContentStep, "gaWPhmGQt4UOROAAJXtRBZIvjXQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$hooks$2f$useTemplates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemplates"]
    ];
});
_c2 = ContentStep;
/** Step 4: Review & Compliance Gate */ const ReviewStep = ({ data, onValidate })=>{
    _s3();
    const { data: eligibility, loading: audienceLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$hooks$2f$useContacts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContacts"])();
    const { data: templates } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$hooks$2f$useTemplates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemplates"])();
    const [complianceChecked, setComplianceChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectedTemplate = templates.find((t)=>t.id === data.templateId);
    // ── Compliance checks ──────────────────────────────────────────────
    const finalHtml = data.customHtml || selectedTemplate?.htmlBody || '';
    const complianceChecks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReviewStep.useMemo[complianceChecks]": ()=>[
                {
                    id: 'unsubscribe',
                    label: 'Unsubscribe link ({{unsubscribe_url}})',
                    passed: finalHtml.includes('{{unsubscribe_url}}') || finalHtml.includes(COMPLIANCE_FOOTER),
                    desc: 'Required by CAN-SPAM for all promotional emails.'
                },
                {
                    id: 'sender_id',
                    label: 'Commercial sender identity',
                    passed: !!(data.senderName && data.replyTo && finalHtml.includes('{{business_address}}')),
                    desc: 'Business name and physical address must be present.'
                },
                {
                    id: 'contact',
                    label: 'Contact method verified',
                    passed: finalHtml.includes('{{contact_email}}'),
                    desc: 'Clear way for recipients to contact the sender.'
                },
                {
                    id: 'consent',
                    label: 'Explicit consent verified',
                    passed: !!(eligibility && eligibility.eligible > 0),
                    desc: 'Only targeting contacts with "Subscribed" status.'
                },
                {
                    id: 'suppression',
                    label: 'Suppression rules applied',
                    passed: !!(eligibility && (eligibility.reasons.unsubscribed > 0 || eligibility.reasons.suppressed >= 0)),
                    desc: 'Global and list-level opt-outs are respected.'
                }
            ]
    }["ReviewStep.useMemo[complianceChecks]"], [
        data.templateId,
        data.senderName,
        data.replyTo,
        eligibility,
        finalHtml
    ]);
    const allChecksPassed = complianceChecks.every((c)=>c.passed);
    const hasAudience = !!data.segmentId && (eligibility?.eligible ?? 0) > 0;
    // Strict block logic
    const isBlocked = !allChecksPassed || !hasAudience || !complianceChecked;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ReviewStep.useEffect": ()=>{
            onValidate?.(!isBlocked);
        }
    }["ReviewStep.useEffect"], [
        isBlocked,
        onValidate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-6 rounded-[2rem] border-2 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6
                ${isBlocked ? 'bg-rose-50 border-rose-100 shadow-xl shadow-rose-100/20' : 'bg-emerald-50 border-emerald-100 shadow-xl shadow-emerald-100/20'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-105
                        ${isBlocked ? 'bg-rose-500 shadow-rose-300' : 'bg-emerald-500 shadow-emerald-300'}`,
                                children: isBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                                    size: 32,
                                    className: "text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                    lineNumber: 561,
                                    columnNumber: 38
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 32,
                                    className: "text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                    lineNumber: 561,
                                    columnNumber: 91
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 559,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `text-xl font-black uppercase tracking-tight ${isBlocked ? 'text-rose-900' : 'text-emerald-900'}`,
                                        children: isBlocked ? 'Compliance Gate Active' : 'Ready for Dispatch'
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 564,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xs font-bold uppercase tracking-[0.1em] opacity-70 ${isBlocked ? 'text-rose-700' : 'text-emerald-700'}`,
                                        children: isBlocked ? 'Campaign cannot be sent until resolved' : 'All security & legal protocols passed'
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 567,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 563,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 558,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isBlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-white/50 px-4 py-2 rounded-2xl border border-emerald-200 animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-emerald-500"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 574,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-black text-emerald-800 uppercase tracking-widest",
                                children: "System Signal: Fully Compliant"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 575,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 573,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 556,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Campaign Summary"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 586,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 14,
                                                className: "text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 589,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 585,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y divide-slate-100",
                                        children: [
                                            {
                                                label: 'Name',
                                                value: data.name
                                            },
                                            {
                                                label: 'Subject',
                                                value: data.subject
                                            },
                                            {
                                                label: 'Sender',
                                                value: data.senderName ? `${data.senderName} <${data.replyTo}>` : ''
                                            },
                                            {
                                                label: 'Schedule',
                                                value: data.scheduledAt || 'Immediate Dispatch'
                                            }
                                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex px-6 py-4 text-sm group hover:bg-slate-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-28 text-[10px] font-black text-slate-400 uppercase tracking-widest pt-0.5",
                                                        children: f.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-900 flex-1",
                                                        children: f.value || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-500 text-xs italic",
                                                            children: "Configuration Missing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                            lineNumber: 601,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, f.label, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 598,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 591,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 584,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-4 border-b border-slate-200 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Audience Intelligence"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 611,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-black bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full uppercase tracking-widest",
                                                children: "Real-time"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 614,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 610,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    audienceLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-slate-100 rounded-full w-2/3 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 618,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-slate-100 rounded-full w-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 619,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 617,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0)) : eligibility ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1",
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 625,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-black text-slate-900",
                                                                children: eligibility.total.toLocaleString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 626,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-5 rounded-2xl border text-center transition-colors ${eligibility.eligible > 0 ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-[10px] font-black uppercase tracking-widest mb-1 ${eligibility.eligible > 0 ? 'text-emerald-600' : 'text-rose-600'}`,
                                                                children: "Eligible"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 629,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-2xl font-black ${eligibility.eligible > 0 ? 'text-emerald-700' : 'text-rose-700'}`,
                                                                children: eligibility.eligible.toLocaleString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 630,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 628,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-5 bg-rose-50/50 border border-rose-100 rounded-2xl text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1",
                                                                children: "Excluded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 633,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-black text-rose-700",
                                                                children: eligibility.excluded.toLocaleString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 623,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            eligibility.excluded > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                        children: "Exclusion Breakdown"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            {
                                                                label: 'Opted Out',
                                                                count: eligibility.reasons.unsubscribed,
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"]
                                                            },
                                                            {
                                                                label: 'No Consent',
                                                                count: eligibility.reasons.noConsent,
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"]
                                                            },
                                                            {
                                                                label: 'Global Suppression',
                                                                count: eligibility.reasons.suppressed,
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
                                                            },
                                                            {
                                                                label: 'Invalid Format',
                                                                count: eligibility.reasons.invalid,
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"]
                                                            }
                                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-3 bg-slate-50/50 border border-slate-100 rounded-xl flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-slate-500 uppercase truncate",
                                                                        children: r.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                        lineNumber: 649,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-black text-slate-800",
                                                                        children: r.count.toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                        lineNumber: 650,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, r.label, true, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 648,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 641,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 639,
                                                columnNumber: 38
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 622,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10 text-center text-slate-400 italic text-sm",
                                        children: "Audience eligibility data currently unavailable."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 658,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 609,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 582,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `bg-white border-2 rounded-[2rem] overflow-hidden shadow-sm transition-all
                        ${allChecksPassed ? 'border-emerald-200 shadow-emerald-50' : 'border-rose-200 shadow-rose-50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-6 py-4 flex items-center justify-between border-b
                            ${allChecksPassed ? 'bg-emerald-50/50 border-emerald-100' : 'bg-rose-50/50 border-rose-100'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2
                                ${allChecksPassed ? 'text-emerald-700' : 'text-rose-700'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Legal & Compliance"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 670,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest
                                ${allChecksPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`,
                                                children: allChecksPassed ? 'Verified' : 'Action Required'
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 674,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 668,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y divide-slate-100",
                                        children: complianceChecks.map((check)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 flex items-start gap-4 hover:bg-slate-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `mt-1 shrink-0 ${check.passed ? 'text-emerald-500' : 'text-rose-500'}`,
                                                        children: check.passed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 57
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 86
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 682,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-0.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-sm font-black tracking-tight ${check.passed ? 'text-slate-900' : 'text-rose-900'}`,
                                                                        children: check.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[10px] font-black uppercase tracking-widest
                                                ${check.passed ? 'text-emerald-600' : 'text-rose-600'}`,
                                                                        children: check.passed ? 'PASSED' : 'MISSING'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                        lineNumber: 690,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500 font-medium leading-relaxed",
                                                                children: check.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 685,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, check.id, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 681,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 679,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !allChecksPassed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 bg-rose-900 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-black uppercase tracking-[0.05em] mb-1",
                                                children: "Critical Block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 702,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] leading-relaxed text-rose-100 opacity-90",
                                                children: "Your campaign is missing legal tokens required for delivery. Please return to the Content step to restore these elements."
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 703,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 701,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 666,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-4 bg-slate-800/80 border-b border-white/5 flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    size: 14,
                                                    className: "text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black text-slate-400 uppercase tracking-widest text-white/60",
                                                    children: "Final Preview Output"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                    lineNumber: 713,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                            lineNumber: 711,
                                            columnNumber: 30
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 710,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8 bg-white m-4 rounded-[1.5rem] shadow-inner max-h-[350px] overflow-y-auto custom-scrollbar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-container text-sm leading-relaxed text-slate-600",
                                            dangerouslySetInnerHTML: {
                                                __html: replaceVariables(finalHtml.includes('{{unsubscribe_url}}') ? finalHtml : finalHtml + COMPLIANCE_FOOTER)
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                            lineNumber: 717,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 716,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 709,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-6 rounded-[2rem] border-2 transition-all duration-300
                        ${complianceChecked ? 'bg-indigo-600 border-indigo-600 shadow-xl shadow-indigo-100' : 'bg-slate-50 border-slate-200'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-start gap-4 cursor-pointer select-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: complianceChecked,
                                                    onChange: (e)=>setComplianceChecked(e.target.checked),
                                                    className: "peer sr-only"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 border-2 rounded-lg border-slate-300 peer-checked:border-white peer-checked:bg-indigo-400 transition-all flex items-center justify-center",
                                                    children: complianceChecked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 16,
                                                        className: "text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 59
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                    lineNumber: 739,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                            lineNumber: 732,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm font-black tracking-tight ${complianceChecked ? 'text-white' : 'text-slate-900'}`,
                                                    children: "I confirm this campaign complies with email regulations"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[11px] mt-1 leading-relaxed ${complianceChecked ? 'text-indigo-100' : 'text-slate-500'}`,
                                                    children: "By checking this, you agree that you have explicit permission to contact this audience and that your template contains valid unsubscribe links and physical business details."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                            lineNumber: 743,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                    lineNumber: 731,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 727,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 664,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 580,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            !isBlocked && (eligibility?.excluded ?? 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl p-5 bg-amber-50 border border-amber-200 rounded-3xl flex items-center gap-4 animate-in slide-in-from-bottom-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                            size: 20,
                            className: "text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                            lineNumber: 760,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 759,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-black text-amber-900 tracking-tight",
                                children: "System Notice: High Exclusion Rate"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 763,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-amber-700/80 font-medium",
                                children: [
                                    "We found ",
                                    eligibility?.excluded.toLocaleString(),
                                    " contacts that do not meet your store's consent criteria. They will be automatically removed from the send list."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 764,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 762,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 758,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
        lineNumber: 554,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(ReviewStep, "C8qYLN9dAC6zBxDMenKsrmNZgF0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$hooks$2f$useContacts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContacts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$hooks$2f$useTemplates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemplates"]
    ];
});
_c3 = ReviewStep;
/** Step 5: Send */ const SendStep = ({ data, onChange })=>{
    const isScheduled = !!data.scheduledAt;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 py-4 px-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-indigo-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-indigo-100 mb-4 animate-bounce",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            className: "text-white w-8 h-8 rotate-12"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                            lineNumber: 781,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 780,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-black text-slate-900 tracking-tight uppercase",
                        children: "Launch Protocol"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 783,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400 font-bold uppercase tracking-widest",
                        children: "Select your deployment strategy"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 784,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 779,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange({
                                scheduledAt: undefined
                            }),
                        className: `p-6 rounded-[2rem] border-2 text-left transition-all duration-300 group
                        ${!isScheduled ? 'bg-indigo-600 border-indigo-600 shadow-xl shadow-indigo-100 ring-4 ring-indigo-50' : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-2xl transition-colors ${!isScheduled ? 'bg-white/20' : 'bg-slate-50'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            size: 20,
                                            className: !isScheduled ? 'text-white' : 'text-slate-400'
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                            lineNumber: 798,
                                            columnNumber: 30
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 797,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !isScheduled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-white animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 800,
                                        columnNumber: 42
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 796,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-sm font-black uppercase tracking-widest mb-1 ${!isScheduled ? 'text-white' : 'text-slate-900'}`,
                                children: "Send Immediately"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 802,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-[10px] font-medium leading-relaxed ${!isScheduled ? 'text-indigo-100' : 'text-slate-500'}`,
                                children: "Your campaign will join the global queue and start sending within minutes."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 803,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 789,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (!data.scheduledAt) onChange({
                                scheduledAt: new Date().toISOString().slice(0, 16)
                            });
                        },
                        className: `p-6 rounded-[2rem] border-2 text-left transition-all duration-300
                        ${isScheduled ? 'bg-indigo-600 border-indigo-600 shadow-xl shadow-indigo-100 ring-4 ring-indigo-50' : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-2xl transition-colors ${isScheduled ? 'bg-white/20' : 'bg-slate-50'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            size: 20,
                                            className: isScheduled ? 'text-white' : 'text-slate-400'
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                            lineNumber: 818,
                                            columnNumber: 30
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 817,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isScheduled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-white animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 820,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 816,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-sm font-black uppercase tracking-widest mb-1 ${isScheduled ? 'text-white' : 'text-slate-900'}`,
                                children: "Schedule Later"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 822,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-[10px] font-medium leading-relaxed ${isScheduled ? 'text-indigo-100' : 'text-slate-500'}`,
                                children: "Set a specific time for your campaign to maximize open rates and engagement."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 823,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 809,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 787,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isScheduled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 p-6 bg-slate-900 rounded-[2rem] shadow-2xl animate-in slide-in-from-top-4 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 12,
                                className: "text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 832,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Dispatch Timestamp"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 831,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "datetime-local",
                        value: data.scheduledAt || '',
                        onChange: (e)=>onChange({
                                scheduledAt: e.target.value || undefined
                            }),
                        className: "w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black text-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 834,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center gap-3 px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                size: 14,
                                className: "text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 841,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-medium text-slate-400 italic",
                                children: "Campaign will be held in escrow until this time."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 842,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 840,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 830,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 bg-indigo-50/50 border border-indigo-100 rounded-2xl flex items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        size: 16,
                        className: "text-indigo-600 mt-1 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 848,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-indigo-700/80 font-medium leading-relaxed",
                        children: "Once you confirm, the campaign settings and audience will be locked. You can still pause or cancel the campaign from the dashboard after it has been scheduled."
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 849,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 847,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
        lineNumber: 778,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = SendStep;
const CreateCampaignPage = ()=>{
    _s4();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [campaignData, setCampaignData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_DATA);
    const [isStepValid, setIsStepValid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [submissionStatus, setSubmissionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Reset validation state whenever step changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "CreateCampaignPage.useEffect": ()=>{
            setIsStepValid(true);
            setErrorMsg(null);
        }
    }["CreateCampaignPage.useEffect"], [
        currentStep
    ]);
    const step = STEPS[currentStep];
    const isFirst = currentStep === 0;
    const isLast = currentStep === STEPS.length - 1;
    const handleDataChange = (updates)=>{
        setCampaignData((prev)=>({
                ...prev,
                ...updates
            }));
    };
    const handleNext = ()=>{
        if (!isLast && isStepValid) {
            setCurrentStep((s)=>s + 1);
            setIsStepValid(true);
        }
    };
    const handleBack = ()=>{
        if (!isFirst) {
            setCurrentStep((s)=>s - 1);
            setIsStepValid(true);
        }
    };
    const handleSubmit = async ()=>{
        setSubmissionStatus('submitting');
        setErrorMsg(null);
        try {
            const finalPayload = {
                ...campaignData,
                sendNow: !campaignData.scheduledAt,
                customHtml: campaignData.customHtml?.includes('{{unsubscribe_url}}') ? campaignData.customHtml : campaignData.customHtml ? campaignData.customHtml + COMPLIANCE_FOOTER : undefined
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$services$2f$emailCampaignService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailCampaignService"].createCampaign(finalPayload);
            setSubmissionStatus('success');
            // Auto-redirect after a short delay
            setTimeout(()=>{
                router.push('/backoffice/email-campaigns');
            }, 3000);
        } catch (err) {
            console.error('[CreateCampaign] FAILED:', err);
            setSubmissionStatus('error');
            setErrorMsg(err?.response?.data?.message || 'Something went wrong while launching the campaign. Please try again.');
        }
    };
    const STEP_COMPONENTS = {
        basics: BasicsStep,
        audience: AudienceStep,
        content: ContentStep,
        review: ReviewStep,
        send: SendStep
    };
    const ActiveStepComponent = step ? STEP_COMPONENTS[step.id] : null;
    if (submissionStatus === 'success') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[800px] mx-auto min-h-[600px] flex items-center justify-center px-4 animate-in fade-in zoom-in duration-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-slate-100 rounded-[3rem] p-12 text-center shadow-2xl shadow-indigo-100 relative overflow-hidden group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-24 -right-24 w-64 h-64 bg-indigo-50 rounded-full opacity-50 transition-transform group-hover:scale-110 duration-700"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 940,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 bg-emerald-500 rounded-[2.5rem] mx-auto flex items-center justify-center shadow-xl shadow-emerald-200 mb-8 animate-in slide-in-from-bottom-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    size: 48,
                                    className: "text-white",
                                    strokeWidth: 3
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                    lineNumber: 944,
                                    columnNumber: 30
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 943,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-black text-slate-900 tracking-tight mb-4",
                                children: "Command Acknowledged"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 946,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 font-medium max-w-sm mx-auto mb-10 leading-relaxed text-sm",
                                children: [
                                    "Your campaign ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-indigo-600 font-black",
                                        children: [
                                            '"',
                                            campaignData.name,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 948,
                                        columnNumber: 43
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " has been ",
                                    campaignData.scheduledAt ? 'successfully scheduled for dispatch' : 'launched into our processing engine',
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 947,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/backoffice/email-campaigns'),
                                        className: "w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95",
                                        children: "Dispatch Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 952,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                                lineNumber: 959,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Auto-redirecting in 3s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 958,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 951,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 942,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 938,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
            lineNumber: 937,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[950px] mx-auto space-y-6 pb-20 px-2 lg:px-4 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none opacity-[0.03] z-0",
                style: {
                    backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 972,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center gap-3 border-b border-slate-100 pb-6 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: submissionStatus === 'submitting',
                        onClick: ()=>router.push('/backoffice/email-campaigns'),
                        className: "p-2 hover:bg-slate-100 rounded-xl transition-colors mr-2 disabled:opacity-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 20,
                            className: "text-slate-600"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                            lineNumber: 980,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 975,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-2.5 rounded-xl shadow-lg transition-colors ${submissionStatus === 'submitting' ? 'bg-indigo-400' : 'bg-indigo-600 shadow-indigo-100'}`,
                        children: submissionStatus === 'submitting' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                            lineNumber: 983,
                            columnNumber: 58
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                            className: "w-5 h-5 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                            lineNumber: 983,
                            columnNumber: 154
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 982,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-black text-slate-900 tracking-tight",
                                children: "Create Campaign"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 986,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-0.5",
                                children: [
                                    "Step ",
                                    currentStep + 1,
                                    " of ",
                                    STEPS.length,
                                    " — ",
                                    step?.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 987,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 985,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 974,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `flex items-center gap-1 transition-opacity ${submissionStatus === 'submitting' ? 'opacity-30 pointer-events-none' : ''}`,
                children: STEPS.map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (idx <= currentStep) {
                                        setIsStepValid(true);
                                        setCurrentStep(idx);
                                    }
                                },
                                disabled: idx > currentStep,
                                className: `flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all
                                ${idx === currentStep ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : idx < currentStep ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100' : 'bg-slate-50 text-slate-400 cursor-not-allowed'}`,
                                children: [
                                    idx < currentStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 1001,
                                        columnNumber: 50
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 1001,
                                        columnNumber: 86
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 994,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            idx < STEPS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 h-px max-w-8 ${idx < currentStep ? 'bg-indigo-300' : 'bg-slate-200'}`
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 1004,
                                columnNumber: 52
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, s.id, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 993,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 991,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-rose-50 border border-rose-100 rounded-3xl flex items-center gap-4 animate-in slide-in-from-top-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 bg-rose-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-rose-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                            size: 20,
                            className: "text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                            lineNumber: 1012,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 1011,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-black text-rose-800 uppercase tracking-widest mb-0.5",
                                children: "Deployment Failure"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 1015,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-rose-700 font-bold leading-tight",
                                children: errorMsg
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 1016,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 1014,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 1010,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[450px] transition-all
                ${submissionStatus === 'submitting' ? 'opacity-60 scale-[0.99] grayscale-[0.2]' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-base font-bold text-slate-800",
                                    children: step?.label
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                    lineNumber: 1025,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 mt-0.5",
                                    children: [
                                        step?.id === 'basics' && 'Configure campaign details.',
                                        step?.id === 'audience' && 'Verify audience compliance.',
                                        step?.id === 'content' && 'Select template and preview content.',
                                        step?.id === 'review' && 'Verify compliance before sending.',
                                        step?.id === 'send' && 'Choose when to launch.'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                    lineNumber: 1026,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                            lineNumber: 1024,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 1023,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: ActiveStepComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveStepComponent, {
                            data: campaignData,
                            onChange: handleDataChange,
                            onValidate: (v)=>setIsStepValid(v)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                            lineNumber: 1037,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 1035,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 1021,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBack,
                        disabled: isFirst || submissionStatus === 'submitting',
                        className: "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 1052,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 1047,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmit,
                        disabled: submissionStatus === 'submitting',
                        className: `flex items-center gap-3 px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all
                            ${submissionStatus === 'submitting' ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95'}`,
                        children: submissionStatus === 'submitting' ? 'Initializing...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                    lineNumber: 1065,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                campaignData.scheduledAt ? 'Authenticate & Schedule' : 'Authenticate & Launch'
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 1055,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        disabled: !isStepValid,
                        className: "flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 disabled:bg-slate-300 disabled:shadow-none transition-all active:scale-95",
                        children: [
                            "Next ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                                lineNumber: 1071,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                        lineNumber: 1070,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
                lineNumber: 1046,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx",
        lineNumber: 970,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(CreateCampaignPage, "bbYfzwPoJ8Dhijijtl+szdR/DY8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c5 = CreateCampaignPage;
const __TURBOPACK__default__export__ = CreateCampaignPage;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "BasicsStep");
__turbopack_context__.k.register(_c1, "AudienceStep");
__turbopack_context__.k.register(_c2, "ContentStep");
__turbopack_context__.k.register(_c3, "ReviewStep");
__turbopack_context__.k.register(_c4, "SendStep");
__turbopack_context__.k.register(_c5, "CreateCampaignPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/backoffice/email-campaigns/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$pages$2f$CreateCampaignPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/m9/email-campaigns/pages/CreateCampaignPage.tsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$pages$2f$CreateCampaignPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/backoffice/email-campaigns/create/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_13fef8c3._.js.map