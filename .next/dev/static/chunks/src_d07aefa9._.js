(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/modules/m9/email-campaigns/services/segmentService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "segmentService",
    ()=>segmentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/axios.ts [app-client] (ecmascript)");
;
const segmentService = {
    /**
     * Fetch all segments
     */ getSegments: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/email-campaigns/segments');
        return response.data;
    },
    /**
     * Fetch a single segment by ID
     */ getSegmentById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/email-campaigns/segments/${id}`);
        return response.data;
    },
    /**
     * Create a new segment
     */ createSegment: async (payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/email-campaigns/segments', payload);
        return response.data;
    },
    /**
     * Update an existing segment
     */ updateSegment: async (id, payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/email-campaigns/segments/${id}`, payload);
        return response.data;
    },
    /**
     * Duplicate a segment
     * POST /email-segments/:id/duplicate
     * Payload: { name: "<original_name> (Copy)" }
     */ duplicateSegment: async (id, name)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/email-segments/${id}/duplicate`, {
            name
        });
        return response.data;
    },
    /**
     * Delete a segment
     * DELETE /email-segments/:id
     */ deleteSegment: async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/email-segments/${id}`);
    },
    /**
     * Update segment status (Active/Inactive)
     * PATCH /email-segments/:id/status
     */ updateSegmentStatus: async (id, status)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/email-segments/${id}/status`, {
            status
        });
        return response.data;
    },
    /**
     * Estimate audience count for a given set of rules.
     * POST /email-campaigns/segments/estimate
     *
     * Falls back to a deterministic mock in development when the API is unavailable.
     */ estimateCount: async (rules)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/email-campaigns/segments/estimate', rules);
            return response.data;
        } catch  {
            // Deterministic mock: derive count from rule values for a stable UI during dev
            if ("TURBOPACK compile-time truthy", 1) {
                const base = 15000;
                let modifier = 1;
                for (const rule of rules.rules){
                    if (rule.field === 'consent_status') {
                        if (rule.value === 'unsubscribed') modifier *= 0.12;
                        else if (rule.value === 'suppressed') modifier *= 0.05;
                        else modifier *= 0.78;
                    } else if (rule.field === 'total_spend' && typeof rule.value === 'string') {
                        const v = parseFloat(rule.value) || 100;
                        modifier *= Math.max(0.05, 1 - v / 2000);
                    } else if (rule.field === 'orders_count' && typeof rule.value === 'string') {
                        const v = parseFloat(rule.value) || 1;
                        modifier *= Math.max(0.08, 1 - v / 50);
                    } else if (rule.field === 'last_order_days' && typeof rule.value === 'string') {
                        const v = parseFloat(rule.value) || 30;
                        if (rule.operator === '>') modifier *= Math.min(0.9, v / 365);
                        else modifier *= Math.max(0.1, 1 - v / 365);
                    } else if (rule.field === 'store_id' && Array.isArray(rule.value)) {
                        modifier *= Math.max(0.1, rule.value.length * 0.2);
                    }
                }
                if (rules.logic === 'OR' && rules.rules.length > 1) {
                    modifier = Math.min(modifier * 1.6, 0.95);
                }
                const estimated = Math.round(base * modifier);
                return {
                    estimated_count: Math.max(0, estimated),
                    breakdown: {
                        eligible: Math.round(estimated * 0.78),
                        unsubscribed: Math.round(estimated * 0.14),
                        suppressed: Math.round(estimated * 0.08)
                    }
                };
            }
            //TURBOPACK unreachable
            ;
        }
    },
    /**
     * Get available stores for the current tenant context.
     * GET /stores
     *
     * Falls back to mock stores during development.
     */ getStores: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/stores');
            return response.data;
        } catch  {
            if ("TURBOPACK compile-time truthy", 1) {
                return [
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
            }
            //TURBOPACK unreachable
            ;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SegmentRuleBuilder",
    ()=>SegmentRuleBuilder,
    "buildRulesJson",
    ()=>buildRulesJson,
    "default",
    ()=>__TURBOPACK__default__export__,
    "validateRules",
    ()=>validateRules
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$services$2f$segmentService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/m9/email-campaigns/services/segmentService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const FIELDS = [
    {
        value: 'last_order_days',
        label: 'Last Order (days)',
        type: 'number',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
            lineNumber: 31,
            columnNumber: 83
        }, ("TURBOPACK compile-time value", void 0)),
        description: 'Days since last purchase'
    },
    {
        value: 'total_spend',
        label: 'Total Spend ($)',
        type: 'number',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
            lineNumber: 32,
            columnNumber: 77
        }, ("TURBOPACK compile-time value", void 0)),
        description: 'Cumulative spend amount'
    },
    {
        value: 'orders_count',
        label: 'Orders Count',
        type: 'number',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
            lineNumber: 33,
            columnNumber: 75
        }, ("TURBOPACK compile-time value", void 0)),
        description: 'Number of orders placed'
    },
    {
        value: 'store_id',
        label: 'Store',
        type: 'multi',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
            lineNumber: 34,
            columnNumber: 63
        }, ("TURBOPACK compile-time value", void 0)),
        description: 'Multi-tenant store filter'
    },
    {
        value: 'consent_status',
        label: 'Consent Status',
        type: 'select',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
            lineNumber: 35,
            columnNumber: 79
        }, ("TURBOPACK compile-time value", void 0)),
        description: 'Compliance consent state'
    }
];
const OPERATORS_FOR_TYPE = {
    number: [
        {
            value: '>',
            label: 'greater than'
        },
        {
            value: '<',
            label: 'less than'
        },
        {
            value: '=',
            label: 'equals'
        },
        {
            value: '!=',
            label: 'not equal'
        }
    ],
    string: [
        {
            value: '=',
            label: 'equals'
        },
        {
            value: '!=',
            label: 'not equal'
        },
        {
            value: 'contains',
            label: 'contains'
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
            label: 'includes'
        },
        {
            value: 'not_in',
            label: 'excludes'
        }
    ]
};
const CONSENT_OPTIONS = [
    {
        value: 'eligible',
        label: 'Eligible',
        color: '#059669'
    },
    {
        value: 'unsubscribed',
        label: 'Unsubscribed',
        color: '#d97706'
    },
    {
        value: 'suppressed',
        label: 'Suppressed',
        color: '#dc2626'
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
function getFieldConfig(field) {
    const cfg = FIELDS.find((f)=>f.value === field);
    return cfg;
}
function getFieldLabel(field) {
    return getFieldConfig(field).label;
}
function getOperatorLabel(field, operator) {
    const cfg = getFieldConfig(field);
    const op = OPERATORS_FOR_TYPE[cfg.type].find((o)=>o.value === operator);
    return op?.label || operator;
}
function getValueLabel(rule, stores) {
    if (rule.field === 'consent_status') {
        const opt = CONSENT_OPTIONS.find((c)=>c.value === rule.value);
        return opt?.label || String(rule.value);
    }
    if (rule.field === 'store_id' && Array.isArray(rule.value)) {
        if (rule.value.length === 0) return '(none selected)';
        const labels = rule.value.map((id)=>{
            const store = stores.find((s)=>s.id === id);
            return store?.name || id;
        });
        return labels.length <= 2 ? labels.join(', ') : `${labels.length} stores`;
    }
    if (rule.field === 'total_spend') return `$${rule.value}`;
    if (rule.field === 'last_order_days') return `${rule.value} days`;
    return String(rule.value) || '—';
}
function buildRulesJson(name, payload) {
    return {
        name,
        logic: payload.logic,
        conditions: payload.rules.map((r)=>({
                field: r.field,
                operator: r.operator,
                value: r.value
            }))
    };
}
function validateRules(rules) {
    const errors = [];
    if (rules.length === 0) {
        errors.push('At least 1 rule is required');
        return {
            valid: false,
            errors
        };
    }
    rules.forEach((r, idx)=>{
        const label = `Rule #${idx + 1}`;
        const cfg = getFieldConfig(r.field);
        // Empty field check
        if (!r.field) {
            errors.push(`${label}: field is required`);
        }
        // Empty operator check
        if (!r.operator) {
            errors.push(`${label}: operator is required`);
        }
        // Value checks
        if (cfg.type === 'multi') {
            if (!Array.isArray(r.value) || r.value.length === 0) {
                errors.push(`${label}: select at least one store`);
            }
        } else if (cfg.type === 'select') {
            if (!String(r.value).trim()) {
                errors.push(`${label}: consent status is required`);
            }
        } else if (cfg.type === 'number') {
            const v = String(r.value).trim();
            if (!v) {
                errors.push(`${label}: value is required`);
            } else if (isNaN(Number(v))) {
                errors.push(`${label}: value must be a number`);
            } else if (Number(v) < 0) {
                errors.push(`${label}: value must be non-negative`);
            }
        } else {
            if (!String(r.value).trim()) {
                errors.push(`${label}: value is required`);
            }
        }
        // Invalid combination checks
        if (r.field === 'consent_status' && (r.operator === '>' || r.operator === '<')) {
            errors.push(`${label}: cannot use numeric operators with consent status`);
        }
        if (r.field === 'store_id' && ![
            'in',
            'not_in'
        ].includes(r.operator)) {
            errors.push(`${label}: store field requires 'includes' or 'excludes' operator`);
        }
    });
    return {
        valid: errors.length === 0,
        errors
    };
}
const SegmentRuleBuilder = ({ value, onChange, segmentName = '', showSummary = true })=>{
    _s();
    const { logic, rules } = value;
    const [stores, setStores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [estimate, setEstimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [estimateLoading, setEstimateLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ── Load store context on mount ───────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SegmentRuleBuilder.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$services$2f$segmentService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["segmentService"].getStores().then(setStores).catch({
                "SegmentRuleBuilder.useEffect": ()=>{
                    setStores([
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
                    ]);
                }
            }["SegmentRuleBuilder.useEffect"]);
        }
    }["SegmentRuleBuilder.useEffect"], []);
    // ── Estimate count (debounced) ────────────────────────────────────
    const fetchEstimate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SegmentRuleBuilder.useCallback[fetchEstimate]": async (payload)=>{
            const validation = validateRules(payload.rules);
            if (!validation.valid) {
                setEstimate(null);
                return;
            }
            setEstimateLoading(true);
            try {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$m9$2f$email$2d$campaigns$2f$services$2f$segmentService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["segmentService"].estimateCount(payload);
                setEstimate(result);
            } catch  {
                setEstimate(null);
            } finally{
                setEstimateLoading(false);
            }
        }
    }["SegmentRuleBuilder.useCallback[fetchEstimate]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SegmentRuleBuilder.useEffect": ()=>{
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout({
                "SegmentRuleBuilder.useEffect": ()=>{
                    fetchEstimate(value);
                }
            }["SegmentRuleBuilder.useEffect"], 400);
            return ({
                "SegmentRuleBuilder.useEffect": ()=>{
                    if (debounceRef.current) clearTimeout(debounceRef.current);
                }
            })["SegmentRuleBuilder.useEffect"];
        }
    }["SegmentRuleBuilder.useEffect"], [
        value,
        fetchEstimate
    ]);
    // ── Handlers ─────────────────────────────────────────────────────
    const updateRule = (id, patch)=>{
        onChange({
            ...value,
            rules: rules.map((r)=>{
                if (r.id !== id) return r;
                // If field changes, reset operator/value to defaults for that type
                if (patch.field && patch.field !== r.field) {
                    const newFieldCfg = getFieldConfig(patch.field);
                    const ops = OPERATORS_FOR_TYPE[newFieldCfg.type] || [];
                    const defaultOp = ops[0]?.value || '=';
                    const defaultValue = newFieldCfg.type === 'multi' ? [] : newFieldCfg.type === 'select' ? 'eligible' : '';
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
    const setLogic = (newLogic)=>{
        if (logic !== newLogic) onChange({
            ...value,
            logic: newLogic
        });
    };
    // ── Validation ───────────────────────────────────────────────────
    const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SegmentRuleBuilder.useMemo[validation]": ()=>validateRules(rules)
    }["SegmentRuleBuilder.useMemo[validation]"], [
        rules
    ]);
    // ── Render ───────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minWidth: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.headerIcon,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                            lineNumber: 315,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 314,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: styles.headerTitle,
                                                children: "Segmentation Rules"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 318,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: styles.headerSubtitle,
                                                children: [
                                                    rules.length,
                                                    " condition",
                                                    rules.length !== 1 ? 's' : '',
                                                    " configured"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 319,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 317,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 313,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            !validation.valid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.validationBadge,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 326,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            validation.errors.length,
                                            " issue",
                                            validation.errors.length !== 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 327,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 325,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 312,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.logicContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.logicPillGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setLogic('AND'),
                                        style: {
                                            ...styles.logicPill,
                                            ...logic === 'AND' ? styles.logicPillActiveAnd : styles.logicPillInactive
                                        },
                                        children: "AND"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 335,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setLogic('OR'),
                                        style: {
                                            ...styles.logicPill,
                                            ...logic === 'OR' ? styles.logicPillActiveOr : styles.logicPillInactive
                                        },
                                        children: "OR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 345,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 334,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: styles.logicLabel,
                                children: logic === 'AND' ? 'Match ALL conditions' : 'Match ANY condition'
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 356,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 333,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        },
                        children: rules.map((rule, idx)=>{
                            const fieldCfg = getFieldConfig(rule.field);
                            const opOptions = OPERATORS_FOR_TYPE[fieldCfg.type];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    idx > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.connectorRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.connectorLine
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 372,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    ...styles.connectorBadge,
                                                    backgroundColor: logic === 'AND' ? '#4f46e5' : '#d97706'
                                                },
                                                children: logic
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 373,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.connectorLine
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 379,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 371,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            ...styles.ruleRow,
                                            borderColor: String(rule.value || '').trim() || Array.isArray(rule.value) && rule.value.length > 0 ? '#e2e8f0' : '#fbbf24'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.ruleIndex,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: styles.ruleIndexText,
                                                    children: idx + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 390,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.fieldsGrid,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: styles.fieldCol,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: styles.fieldLabel,
                                                                children: "Field"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'relative'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: rule.field,
                                                                    onChange: (e)=>updateRule(rule.id, {
                                                                            field: e.target.value
                                                                        }),
                                                                    style: styles.select,
                                                                    children: FIELDS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: f.value,
                                                                            children: f.label
                                                                        }, f.value, false, {
                                                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                            lineNumber: 406,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: styles.operatorCol,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: styles.fieldLabel,
                                                                children: "Operator"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: rule.operator,
                                                                onChange: (e)=>updateRule(rule.id, {
                                                                        operator: e.target.value
                                                                    }),
                                                                style: styles.select,
                                                                children: opOptions.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: o.value,
                                                                        children: o.label
                                                                    }, o.value, false, {
                                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                        lineNumber: 421,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                lineNumber: 415,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: styles.valueCol,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: styles.fieldLabel,
                                                                children: "Value"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            fieldCfg.type === 'select' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentSelect, {
                                                                value: String(rule.value),
                                                                onChange: (v)=>updateRule(rule.id, {
                                                                        value: v
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)) : fieldCfg.type === 'multi' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreMultiSelect, {
                                                                stores: stores,
                                                                value: Array.isArray(rule.value) ? rule.value : [],
                                                                onChange: (v)=>updateRule(rule.id, {
                                                                        value: v
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'relative'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: fieldCfg.type === 'number' ? 'number' : 'text',
                                                                        value: String(rule.value),
                                                                        onChange: (e)=>updateRule(rule.id, {
                                                                                value: e.target.value
                                                                            }),
                                                                        placeholder: fieldCfg.type === 'number' ? '0' : 'Enter value...',
                                                                        min: fieldCfg.type === 'number' ? '0' : undefined,
                                                                        style: styles.input
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                        lineNumber: 442,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    fieldCfg.type === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                                                        className: "w-3 h-3",
                                                                        style: styles.inputIcon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                        lineNumber: 451,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: styles.removeCol,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    ...styles.fieldLabel,
                                                                    visibility: 'hidden'
                                                                },
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>removeRule(rule.id),
                                                                disabled: rules.length <= 1,
                                                                style: {
                                                                    ...styles.removeBtn,
                                                                    opacity: rules.length <= 1 ? 0.2 : 1,
                                                                    cursor: rules.length <= 1 ? 'not-allowed' : 'pointer'
                                                                },
                                                                title: "Remove rule",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 395,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 383,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, rule.id, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 368,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 362,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: addRule,
                        style: styles.addRuleBtn,
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.borderColor = '#6366f1';
                            e.currentTarget.style.color = '#4338ca';
                            e.currentTarget.style.backgroundColor = '#eef2ff';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.borderColor = '#c7d2fe';
                            e.currentTarget.style.color = '#6366f1';
                            e.currentTarget.style.backgroundColor = 'transparent';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 497,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Add Rule"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 482,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    !validation.valid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.errorBlock,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-4 h-4",
                                style: {
                                    color: '#b45309',
                                    flexShrink: 0,
                                    marginTop: '1px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 504,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: styles.errorTitle,
                                        children: "Incomplete Configuration"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 506,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: styles.errorList,
                                        children: validation.errors.map((err, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                style: styles.errorItem,
                                                children: err
                                            }, i, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 509,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 507,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 505,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 503,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 310,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.summaryPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.summaryCountBlock,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    marginBottom: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-4 h-4",
                                        style: {
                                            color: '#818cf8'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 523,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: styles.summaryLabel,
                                        children: segmentName ? `Summary · ${segmentName}` : 'Estimated Audience'
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 524,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 522,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            estimateLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.estimateLoading,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.spinner
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 530,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '11px',
                                            color: '#94a3b8'
                                        },
                                        children: "Calculating..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 531,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 529,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : estimate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: styles.estimateNumber,
                                        children: estimate.estimated_count.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 535,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: styles.estimateUnit,
                                        children: "contacts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 538,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    estimate.breakdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.breakdownGrid,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.breakdownItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            ...styles.breakdownDot,
                                                            backgroundColor: '#059669'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.breakdownLabel,
                                                        children: "Eligible"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.breakdownValue,
                                                        children: estimate.breakdown.eligible.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 541,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.breakdownItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            ...styles.breakdownDot,
                                                            backgroundColor: '#d97706'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.breakdownLabel,
                                                        children: "Unsubscribed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.breakdownValue,
                                                        children: estimate.breakdown.unsubscribed.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 548,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.breakdownItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            ...styles.breakdownDot,
                                                            backgroundColor: '#dc2626'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.breakdownLabel,
                                                        children: "Suppressed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.breakdownValue,
                                                        children: estimate.breakdown.suppressed.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 555,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 540,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 534,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.estimateEmpty,
                                children: "Complete rules to see estimate"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 566,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 521,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.summarySectionDivider
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 571,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.summaryLabel,
                                children: "Rules Summary"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 573,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.summaryRulesList,
                                children: rules.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: styles.estimateEmpty,
                                    children: "No rules defined"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                    lineNumber: 576,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)) : rules.map((rule, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.summaryRuleItem,
                                        children: [
                                            idx > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    ...styles.summaryLogicPill,
                                                    backgroundColor: logic === 'AND' ? '#312e81' : '#78350f'
                                                },
                                                children: logic
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 581,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.summaryRuleContent,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.summaryRuleFieldIcon,
                                                        children: getFieldConfig(rule.field).icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 589,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.summaryRuleField,
                                                        children: getFieldLabel(rule.field)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.summaryRuleOp,
                                                        children: getOperatorLabel(rule.field, rule.operator)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.summaryRuleValue,
                                                        children: getValueLabel(rule, stores)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                                lineNumber: 588,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, rule.id, true, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 579,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 574,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 572,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.summarySectionDivider
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 603,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: styles.summaryLabel,
                                children: "Logic Mode"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 605,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    ...styles.summaryLogicBadge,
                                    backgroundColor: logic === 'AND' ? '#4f46e5' : '#d97706'
                                },
                                children: logic === 'AND' ? 'Match All (AND)' : 'Match Any (OR)'
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 606,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 604,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.summarySectionDivider
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 615,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: styles.summaryLabel,
                                children: "Validation"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 617,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            validation.valid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: styles.validBadge,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 620,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Valid"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 619,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: styles.invalidBadge,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                        lineNumber: 624,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    validation.errors.length,
                                    " error",
                                    validation.errors.length !== 1 ? 's' : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 623,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 616,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 519,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
        lineNumber: 308,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SegmentRuleBuilder, "Ohg+wKB5lkiH91Mz2IIdLbpsfig=");
_c = SegmentRuleBuilder;
// ============================================================================
// CONSENT STATUS SELECT — PRD-critical, clearly visible
// ============================================================================
const ConsentSelect = ({ value, onChange })=>{
    const current = CONSENT_OPTIONS.find((c)=>c.value === value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                style: {
                    ...styles.select,
                    color: current?.color || '#1e293b',
                    fontWeight: 700
                },
                children: CONSENT_OPTIONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: c.value,
                        children: c.label
                    }, c.value, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 653,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 643,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: current?.color || '#94a3b8',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 656,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
        lineNumber: 642,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ConsentSelect;
// ============================================================================
// STORE MULTI-SELECT — Multi-tenant aware
// ============================================================================
const StoreMultiSelect = ({ stores, value, onChange })=>{
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggle = (id)=>{
        if (value.includes(id)) onChange(value.filter((v)=>v !== id));
        else onChange([
            ...value,
            id
        ]);
    };
    const selectedLabels = stores.filter((o)=>value.includes(o.id)).map((o)=>o.name);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen(!open),
                style: styles.multiSelectTrigger,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            flex: 1,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        },
                        children: value.length === 0 ? 'Select stores...' : value.length === 1 ? selectedLabels[0] : `${value.length} stores selected`
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 696,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3 h-3",
                        style: {
                            marginLeft: '4px',
                            transition: 'transform 0.15s',
                            transform: open ? 'rotate(180deg)' : 'none',
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 703,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                lineNumber: 691,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            inset: 0,
                            zIndex: 40
                        },
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 716,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.multiSelectDropdown,
                        children: [
                            stores.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggle(o.id),
                                    style: {
                                        ...styles.multiSelectOption,
                                        backgroundColor: value.includes(o.id) ? '#4f46e5' : 'transparent',
                                        color: value.includes(o.id) ? '#fff' : '#475569'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                            className: "w-3 h-3",
                                            style: {
                                                opacity: 0.6,
                                                flexShrink: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                            lineNumber: 732,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                flex: 1
                                            },
                                            children: o.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                            lineNumber: 733,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        value.includes(o.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                            lineNumber: 734,
                                            columnNumber: 58
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, o.id, true, {
                                    fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                    lineNumber: 722,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))),
                            value.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChange([]),
                                style: styles.multiSelectClear,
                                children: "Clear All"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                                lineNumber: 738,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
                        lineNumber: 720,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/components/SegmentRuleBuilder.tsx",
        lineNumber: 690,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(StoreMultiSelect, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c2 = StoreMultiSelect;
// ============================================================================
// STYLES — Inline for isolation, dense layout, no unnecessary animation
// ============================================================================
const styles = {
    // Header
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px'
    },
    headerIcon: {
        padding: '8px',
        backgroundColor: '#eef2ff',
        borderRadius: '10px',
        color: '#4f46e5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: '13px',
        fontWeight: 900,
        color: '#0f172a',
        letterSpacing: '0.03em',
        margin: 0,
        textTransform: 'uppercase'
    },
    headerSubtitle: {
        fontSize: '10px',
        fontWeight: 600,
        color: '#94a3b8',
        margin: 0,
        marginTop: '1px',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
    },
    validationBadge: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        padding: '4px 10px',
        backgroundColor: '#fffbeb',
        border: '1px solid #fde68a',
        borderRadius: '20px',
        fontSize: '10px',
        fontWeight: 800,
        color: '#b45309',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
    },
    // Logic toggle
    logicContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '16px',
        padding: '6px',
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '14px'
    },
    logicPillGroup: {
        display: 'flex',
        backgroundColor: '#fff',
        padding: '3px',
        borderRadius: '10px',
        border: '1px solid #f1f5f9'
    },
    logicPill: {
        padding: '6px 16px',
        borderRadius: '8px',
        fontSize: '10px',
        fontWeight: 900,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.15s'
    },
    logicPillActiveAnd: {
        backgroundColor: '#4f46e5',
        color: '#fff',
        boxShadow: '0 2px 8px rgba(79,70,229,0.25)'
    },
    logicPillActiveOr: {
        backgroundColor: '#d97706',
        color: '#fff',
        boxShadow: '0 2px 8px rgba(217,119,6,0.25)'
    },
    logicPillInactive: {
        backgroundColor: 'transparent',
        color: '#94a3b8'
    },
    logicLabel: {
        fontSize: '10px',
        fontWeight: 700,
        color: '#64748b',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
    },
    // Connector
    connectorRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '4px 0',
        justifyContent: 'center'
    },
    connectorLine: {
        height: '1px',
        flex: 1,
        backgroundColor: '#e2e8f0'
    },
    connectorBadge: {
        fontSize: '9px',
        fontWeight: 900,
        color: '#fff',
        padding: '2px 10px',
        borderRadius: '10px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
    },
    // Rule row
    ruleRow: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px',
        padding: '12px',
        backgroundColor: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '14px'
    },
    ruleIndex: {
        width: '28px',
        height: '28px',
        borderRadius: '8px',
        backgroundColor: '#f1f5f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: '20px'
    },
    ruleIndexText: {
        fontSize: '10px',
        fontWeight: 900,
        color: '#64748b'
    },
    fieldsGrid: {
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 130px 1fr 36px',
        gap: '8px',
        minWidth: 0
    },
    fieldCol: {
        minWidth: 0
    },
    operatorCol: {
        minWidth: 0
    },
    valueCol: {
        minWidth: 0
    },
    removeCol: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    fieldLabel: {
        display: 'block',
        fontSize: '9px',
        fontWeight: 800,
        color: '#94a3b8',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '4px',
        paddingLeft: '2px'
    },
    select: {
        width: '100%',
        padding: '8px 10px',
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 600,
        color: '#1e293b',
        outline: 'none',
        cursor: 'pointer',
        appearance: 'none',
        WebkitAppearance: 'none'
    },
    input: {
        width: '100%',
        padding: '8px 10px',
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 700,
        color: '#1e293b',
        outline: 'none',
        boxSizing: 'border-box'
    },
    inputIcon: {
        position: 'absolute',
        right: '8px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#cbd5e1',
        pointerEvents: 'none'
    },
    removeBtn: {
        padding: '8px',
        border: 'none',
        backgroundColor: 'transparent',
        color: '#ef4444',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.15s'
    },
    // Add rule
    addRuleBtn: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '12px',
        border: '2px dashed #c7d2fe',
        borderRadius: '14px',
        fontSize: '11px',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#6366f1',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        transition: 'all 0.15s',
        marginTop: '8px'
    },
    // Error block
    errorBlock: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        padding: '12px 14px',
        backgroundColor: '#fffbeb',
        border: '1px solid #fde68a',
        borderRadius: '12px',
        marginTop: '12px'
    },
    errorTitle: {
        fontSize: '11px',
        fontWeight: 800,
        color: '#92400e',
        margin: 0,
        marginBottom: '4px',
        textTransform: 'uppercase',
        letterSpacing: '0.04em'
    },
    errorList: {
        margin: 0,
        paddingLeft: '14px',
        listStyleType: 'disc'
    },
    errorItem: {
        fontSize: '11px',
        color: '#a16207',
        fontWeight: 600,
        lineHeight: '1.5'
    },
    // Summary panel
    summaryPanel: {
        width: '280px',
        flexShrink: 0,
        backgroundColor: '#0f172a',
        borderRadius: '16px',
        padding: '20px',
        color: '#fff',
        position: 'sticky',
        top: '24px'
    },
    summaryCountBlock: {
        marginBottom: '4px'
    },
    summaryLabel: {
        fontSize: '9px',
        fontWeight: 800,
        color: '#64748b',
        textTransform: 'uppercase',
        letterSpacing: '0.12em'
    },
    estimateLoading: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '8px'
    },
    spinner: {
        width: '14px',
        height: '14px',
        border: '2px solid #334155',
        borderTopColor: '#818cf8',
        borderRadius: '50%',
        animation: 'spin 0.6s linear infinite'
    },
    estimateNumber: {
        fontSize: '28px',
        fontWeight: 900,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.02em',
        lineHeight: 1.1
    },
    estimateUnit: {
        fontSize: '11px',
        fontWeight: 700,
        color: '#818cf8',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        margin: 0,
        marginTop: '2px'
    },
    estimateEmpty: {
        fontSize: '11px',
        color: '#475569',
        fontWeight: 500,
        margin: 0,
        marginTop: '4px',
        fontStyle: 'italic'
    },
    breakdownGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        marginTop: '12px',
        padding: '10px',
        backgroundColor: '#1e293b',
        borderRadius: '10px'
    },
    breakdownItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '10px'
    },
    breakdownDot: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        flexShrink: 0
    },
    breakdownLabel: {
        flex: 1,
        color: '#94a3b8',
        fontWeight: 600
    },
    breakdownValue: {
        color: '#e2e8f0',
        fontWeight: 700,
        fontVariantNumeric: 'tabular-nums'
    },
    summarySectionDivider: {
        height: '1px',
        backgroundColor: '#1e293b',
        margin: '14px 0'
    },
    summaryRulesList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        marginTop: '8px'
    },
    summaryRuleItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    summaryLogicPill: {
        alignSelf: 'center',
        fontSize: '8px',
        fontWeight: 900,
        color: '#fff',
        padding: '1px 8px',
        borderRadius: '6px',
        letterSpacing: '0.1em'
    },
    summaryRuleContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '6px 8px',
        backgroundColor: '#1e293b',
        borderRadius: '8px',
        flexWrap: 'wrap'
    },
    summaryRuleFieldIcon: {
        color: '#818cf8',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0
    },
    summaryRuleField: {
        fontSize: '10px',
        fontWeight: 700,
        color: '#e2e8f0'
    },
    summaryRuleOp: {
        fontSize: '10px',
        fontWeight: 500,
        color: '#64748b'
    },
    summaryRuleValue: {
        fontSize: '10px',
        fontWeight: 800,
        color: '#a5b4fc'
    },
    summaryLogicBadge: {
        fontSize: '9px',
        fontWeight: 800,
        color: '#fff',
        padding: '3px 10px',
        borderRadius: '8px',
        letterSpacing: '0.06em'
    },
    validBadge: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '10px',
        fontWeight: 800,
        color: '#059669',
        backgroundColor: '#064e3b',
        padding: '3px 10px',
        borderRadius: '8px'
    },
    invalidBadge: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '10px',
        fontWeight: 800,
        color: '#fbbf24',
        backgroundColor: '#78350f',
        padding: '3px 10px',
        borderRadius: '8px'
    },
    // MultiSelect
    multiSelectTrigger: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 10px',
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 600,
        color: '#1e293b',
        cursor: 'pointer',
        textAlign: 'left'
    },
    multiSelectDropdown: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        marginTop: '4px',
        backgroundColor: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
        zIndex: 50,
        padding: '4px',
        maxHeight: '220px',
        overflowY: 'auto'
    },
    multiSelectOption: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '7px 10px',
        borderRadius: '8px',
        fontSize: '11px',
        fontWeight: 600,
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.1s',
        textAlign: 'left'
    },
    multiSelectClear: {
        width: '100%',
        padding: '6px',
        marginTop: '4px',
        borderTop: '1px solid #f1f5f9',
        fontSize: '10px',
        fontWeight: 800,
        color: '#ef4444',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        textAlign: 'center',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer'
    }
};
const __TURBOPACK__default__export__ = SegmentRuleBuilder;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SegmentRuleBuilder");
__turbopack_context__.k.register(_c1, "ConsentSelect");
__turbopack_context__.k.register(_c2, "StoreMultiSelect");
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
"[project]/src/modules/m9/email-campaigns/components/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastContainer",
    ()=>ToastContainer,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// ============================================================================
// VARIANT CONFIG
// ============================================================================
const TOAST_VARIANTS = {
    success: {
        bg: 'bg-white',
        border: 'border-emerald-200',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
            className: "w-5 h-5 text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
            lineNumber: 41,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        titleColor: 'text-emerald-900',
        descColor: 'text-emerald-600',
        progressColor: 'bg-emerald-500'
    },
    error: {
        bg: 'bg-white',
        border: 'border-red-200',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "w-5 h-5 text-red-500"
        }, void 0, false, {
            fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
            lineNumber: 49,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        titleColor: 'text-red-900',
        descColor: 'text-red-600',
        progressColor: 'bg-red-500'
    },
    info: {
        bg: 'bg-white',
        border: 'border-indigo-200',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
            className: "w-5 h-5 text-indigo-500"
        }, void 0, false, {
            fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
            lineNumber: 57,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        titleColor: 'text-indigo-900',
        descColor: 'text-indigo-600',
        progressColor: 'bg-indigo-500'
    }
};
// ============================================================================
// SINGLE TOAST
// ============================================================================
const ToastItem = ({ toast, onDismiss })=>{
    _s();
    const [exiting, setExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const duration = toast.duration ?? 4000;
    const styles = TOAST_VARIANTS[toast.variant];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastItem.useEffect": ()=>{
            const exitTimer = setTimeout({
                "ToastItem.useEffect.exitTimer": ()=>setExiting(true)
            }["ToastItem.useEffect.exitTimer"], duration - 300);
            const removeTimer = setTimeout({
                "ToastItem.useEffect.removeTimer": ()=>onDismiss(toast.id)
            }["ToastItem.useEffect.removeTimer"], duration);
            return ({
                "ToastItem.useEffect": ()=>{
                    clearTimeout(exitTimer);
                    clearTimeout(removeTimer);
                }
            })["ToastItem.useEffect"];
        }
    }["ToastItem.useEffect"], [
        toast.id,
        duration,
        onDismiss
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "alert",
        className: `
                relative flex items-start gap-3 px-4 py-3 rounded-xl border shadow-xl max-w-sm w-full overflow-hidden
                ${styles.bg} ${styles.border}
                ${exiting ? 'animate-[slideOut_300ms_ease-in_forwards]' : 'animate-[slideIn_300ms_ease-out]'}
            `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 mt-0.5",
                children: styles.icon
            }, void 0, false, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm font-bold ${styles.titleColor}`,
                        children: toast.title
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    toast.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs mt-0.5 ${styles.descColor}`,
                        children: toast.description
                    }, void 0, false, {
                        fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
                        lineNumber: 101,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onDismiss(toast.id),
                className: "shrink-0 p-1 text-slate-400 hover:text-slate-600 rounded-lg transition-colors",
                "aria-label": "Dismiss",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-slate-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `h-full ${styles.progressColor} rounded-full`,
                    style: {
                        animation: `shrinkWidth ${duration}ms linear forwards`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
                    lineNumber: 116,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
        lineNumber: 86,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ToastItem, "4QGFoMevc4lONOCPCuMSsREY9Ss=");
_c = ToastItem;
const ToastContainer = ({ toasts, onDismiss })=>{
    if (toasts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-[9998] flex flex-col gap-2",
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastItem, {
                toast: toast,
                onDismiss: onDismiss
            }, toast.id, false, {
                fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
                lineNumber: 137,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/modules/m9/email-campaigns/components/Toast.tsx",
        lineNumber: 135,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ToastContainer;
// ============================================================================
// HOOK: useToast
// ============================================================================
let toastCounter = 0;
function useToast() {
    _s1();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToast.useCallback[dismiss]": (id)=>{
            setToasts({
                "useToast.useCallback[dismiss]": (prev)=>prev.filter({
                        "useToast.useCallback[dismiss]": (t)=>t.id !== id
                    }["useToast.useCallback[dismiss]"])
            }["useToast.useCallback[dismiss]"]);
        }
    }["useToast.useCallback[dismiss]"], []);
    const addToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToast.useCallback[addToast]": (variant, title, description, duration)=>{
            const id = `toast-${++toastCounter}-${Date.now()}`;
            setToasts({
                "useToast.useCallback[addToast]": (prev)=>[
                        ...prev,
                        {
                            id,
                            variant,
                            title,
                            description,
                            duration
                        }
                    ]
            }["useToast.useCallback[addToast]"]);
        }
    }["useToast.useCallback[addToast]"], []);
    const success = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToast.useCallback[success]": (title, description)=>addToast('success', title, description)
    }["useToast.useCallback[success]"], [
        addToast
    ]);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToast.useCallback[error]": (title, description)=>addToast('error', title, description, 6000)
    }["useToast.useCallback[error]"], [
        addToast
    ]);
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToast.useCallback[info]": (title, description)=>addToast('info', title, description)
    }["useToast.useCallback[info]"], [
        addToast
    ]);
    return {
        toasts,
        dismiss,
        success,
        error,
        info
    };
}
_s1(useToast, "CfTssg/fN7DYpWgk6xnoBLRxBmk=");
const __TURBOPACK__default__export__ = ToastContainer;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToastItem");
__turbopack_context__.k.register(_c1, "ToastContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/m9/email-campaigns/pages/CampaignEditPage.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/modules/m9/email-campaigns/pages/CampaignEditPage.tsx'\n\nUnterminated regexp literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_d07aefa9._.js.map