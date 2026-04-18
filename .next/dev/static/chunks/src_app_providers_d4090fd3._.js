(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/providers/ImpersonationProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImpersonationProvider",
    ()=>ImpersonationProvider,
    "useImpersonation",
    ()=>useImpersonation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
// ─── Helpers ────────────────────────────────────────────────────────────────────
const SESSION_KEY = 'zyappy_impersonation_session';
const SESSION_DURATION_MS = 2 * 60 * 60 * 1000; // 2 hours
function buildToken(brandId, actorId) {
    // Pseudo-token (not cryptographically secure — replace with backend JWT in prod)
    const payload = btoa(JSON.stringify({
        brandId,
        actorId,
        ts: Date.now()
    }));
    return `imp_${payload}`;
}
function readStoredSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        // Expire check
        if (Date.now() > parsed.expiresAt) {
            sessionStorage.removeItem(SESSION_KEY);
            return null;
        }
        return parsed;
    } catch  {
        return null;
    }
}
function logAuditEvent(event) {
    // In production, POST to /api/audit
    console.info('[IMPERSONATION AUDIT]', JSON.stringify(event));
}
// ─── Context ────────────────────────────────────────────────────────────────────
const ImpersonationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useImpersonation = ()=>{
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ImpersonationContext);
    if (!ctx) throw new Error('useImpersonation must be used within ImpersonationProvider');
    return ctx;
};
_s(useImpersonation, "/dMy7t63NXD4eYACoT93CePwGrg=");
const ImpersonationProvider = ({ children })=>{
    _s1();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Rehydrate from sessionStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImpersonationProvider.useEffect": ()=>{
            setSession(readStoredSession());
        }
    }["ImpersonationProvider.useEffect"], []);
    const isImpersonating = session !== null && Date.now() <= session.expiresAt;
    const startImpersonation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImpersonationProvider.useCallback[startImpersonation]": (brandId, brandName, actor)=>{
            const now = Date.now();
            const newSession = {
                brandId,
                brandName,
                actorId: actor.id,
                actorName: actor.name,
                startedAt: new Date(now).toISOString(),
                token: buildToken(brandId, actor.id),
                expiresAt: now + SESSION_DURATION_MS
            };
            sessionStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
            setSession(newSession);
            logAuditEvent({
                event: 'IMPERSONATION_STARTED',
                brandId,
                brandName,
                actorId: actor.id,
                actorName: actor.name,
                timestamp: newSession.startedAt,
                expiresAt: new Date(newSession.expiresAt).toISOString(),
                token: newSession.token
            });
            return newSession;
        }
    }["ImpersonationProvider.useCallback[startImpersonation]"], []);
    const endImpersonation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImpersonationProvider.useCallback[endImpersonation]": ()=>{
            if (!session) return;
            logAuditEvent({
                event: 'IMPERSONATION_ENDED',
                brandId: session.brandId,
                brandName: session.brandName,
                actorId: session.actorId,
                actorName: session.actorName,
                startedAt: session.startedAt,
                endedAt: new Date().toISOString()
            });
            sessionStorage.removeItem(SESSION_KEY);
            setSession(null);
        }
    }["ImpersonationProvider.useCallback[endImpersonation]"], [
        session
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImpersonationContext.Provider, {
        value: {
            session,
            isImpersonating,
            startImpersonation,
            endImpersonation
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers/ImpersonationProvider.tsx",
        lineNumber: 162,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ImpersonationProvider, "tFkwcC2l8/PTs3V0mOcFm1QFa5I=");
_c = ImpersonationProvider;
var _c;
__turbopack_context__.k.register(_c, "ImpersonationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/providers/ClientProviders.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientProviders",
    ()=>ClientProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$ImpersonationProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/providers/ImpersonationProvider.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function ClientProviders({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$ImpersonationProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImpersonationProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/providers/ClientProviders.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/providers/ClientProviders.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = ClientProviders;
var _c;
__turbopack_context__.k.register(_c, "ClientProviders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/providers/AuthProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useAuth = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const AuthProvider = ({ children })=>{
    // TEMPORARY: Hardcoded session to bypass authentication without backend
    const value = {
        user: {
            id: 'user-1',
            name: 'John Doe',
            email: 'admin@zyappy.com',
            role: 'ADMIN',
            tenantId: 'tenant-demo',
            storeIds: [
                'store-01',
                'store-02'
            ]
        },
        isAuthenticated: true,
        isLoading: false,
        role: 'ADMIN',
        tenantId: 'tenant-demo',
        storeIds: [
            'store-01',
            'store-02'
        ],
        enabledModules: [
            'pos',
            'inventory',
            'kiosk',
            'kds',
            'messaging',
            'email-campaigns'
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers/AuthProvider.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/providers/TenantStoreProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TenantStoreProvider",
    ()=>TenantStoreProvider,
    "useTenantStore",
    ()=>useTenantStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const TenantStoreContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useTenantStore = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TenantStoreContext);
    if (!context) {
        throw new Error('useTenantStore must be used within a TenantStoreProvider');
    }
    return context;
};
_s(useTenantStore, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const TenantStoreProvider = ({ children })=>{
    _s1();
    // Mock data for development bootstrapping
    const [tenant, setTenant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: 'tenant-demo',
        name: 'Zyappy Demo',
        slug: 'zyappy-demo'
    });
    const [store, setStore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: 'store-01',
        name: 'Flagship Store',
        code: 'FS-01',
        tenantId: 'tenant-demo',
        timezone: 'America/New_York',
        city: 'New York',
        province: 'New York',
        status: 'Active',
        paymentTerms: 'Net 30',
        taxProfile: 'Inherit',
        logoStatus: 'Default'
    });
    const [allStores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 'store-01',
            name: 'Flagship Store',
            code: 'FS-01',
            tenantId: 'tenant-demo',
            timezone: 'America/New_York',
            city: 'New York',
            province: 'New York',
            status: 'Active',
            paymentTerms: 'Net 30',
            taxProfile: 'Inherit',
            logoStatus: 'Default'
        },
        {
            id: 'store-02',
            name: 'Warehouse Ops',
            code: 'WH-02',
            tenantId: 'tenant-demo',
            timezone: 'America/New_York',
            city: 'Jersey City',
            province: 'New Jersey',
            status: 'Active',
            paymentTerms: 'Net 15',
            taxProfile: 'Inherit',
            logoStatus: 'Default'
        }
    ]);
    const [isLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TenantStoreContext.Provider, {
        value: {
            tenant,
            store,
            allStores,
            setTenant,
            setStore,
            isLoading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers/TenantStoreProvider.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(TenantStoreProvider, "kisVvabWbENDoTGBBTYVxwDI0lU=");
_c = TenantStoreProvider;
var _c;
__turbopack_context__.k.register(_c, "TenantStoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_providers_d4090fd3._.js.map