(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/kds/components/sound/useKDSSound.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKDSSound",
    ()=>useKDSSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const DEFAULT_SETTINGS = {
    isMuted: false,
    volume: 0.8,
    enabledEvents: {
        NEW_ORDER: true,
        ORDER_UPDATED: false,
        ORDER_CANCELLED: true,
        ORDER_DELAYED: true,
        SLA_BREACH: true,
        SLA_WARNING: true
    }
};
const STORAGE_KEY = 'zyappy_kds_sound_settings';
function useKDSSound() {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_SETTINGS);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 1. Load from localStorage once mounted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKDSSound.useEffect": ()=>{
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                try {
                    setSettings(JSON.parse(stored));
                } catch (e) {
                    console.error("Failed to parse sound settings", e);
                }
            }
            setIsInitialized(true);
        }
    }["useKDSSound.useEffect"], []);
    const lastTriggered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    // 2. Save to localStorage only after initialization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKDSSound.useEffect": ()=>{
            if (isInitialized) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
            }
        }
    }["useKDSSound.useEffect"], [
        settings,
        isInitialized
    ]);
    const soundMap = {
        NEW_ORDER: '/sounds/new-order.mp3',
        ORDER_UPDATED: '/sounds/confirm.mp3',
        ORDER_CANCELLED: '/sounds/alert.mp3',
        ORDER_DELAYED: '/sounds/alert.mp3',
        SLA_BREACH: '/sounds/breach.mp3',
        SLA_WARNING: '/sounds/warning-beep.mp3'
    };
    const playSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKDSSound.useCallback[playSound]": (eventType, orderId)=>{
            if (settings.isMuted || !settings.enabledEvents[eventType]) return;
            // Duplicate trigger prevention
            const key = `${eventType}_${orderId || 'global'}`;
            const now = Date.now();
            if (lastTriggered.current[key] && now - lastTriggered.current[key] < 2000) {
                return;
            }
            lastTriggered.current[key] = now;
            try {
                const audio = new Audio(soundMap[eventType]);
                audio.volume = settings.volume;
                audio.play().catch({
                    "useKDSSound.useCallback[playSound]": ()=>{
                    // Silent catch for browser autoplay restrictions
                    }
                }["useKDSSound.useCallback[playSound]"]);
            } catch (e) {
                console.error('KDS Sound Error:', e);
            }
        }
    }["useKDSSound.useCallback[playSound]"], [
        settings
    ]);
    const toggleMute = ()=>{
        setSettings((prev)=>({
                ...prev,
                isMuted: !prev.isMuted
            }));
    };
    const setVolume = (value)=>{
        setSettings((prev)=>({
                ...prev,
                volume: Math.max(0, Math.min(1, value))
            }));
    };
    const toggleEvent = (eventType)=>{
        setSettings((prev)=>({
                ...prev,
                enabledEvents: {
                    ...prev.enabledEvents,
                    [eventType]: !prev.enabledEvents[eventType]
                }
            }));
    };
    return {
        settings,
        playSound,
        toggleMute,
        setVolume,
        toggleEvent
    };
}
_s(useKDSSound, "XIUSXF5zfuQHcBxsAgjFx0K3w28=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/sound/SoundSettings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SoundSettings",
    ()=>SoundSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$useKDSSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/sound/useKDSSound.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SoundSettings = ()=>{
    _s();
    const { settings, toggleMute, setVolume, toggleEvent, playSound } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$useKDSSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSSound"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundSettings.useEffect": ()=>{
            const handleClickOutside = {
                "SoundSettings.useEffect.handleClickOutside": (event)=>{
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["SoundSettings.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "SoundSettings.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["SoundSettings.useEffect"];
        }
    }["SoundSettings.useEffect"], []);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundSettings.useEffect": ()=>{
            setIsMounted(true);
        }
    }["SoundSettings.useEffect"], []);
    const enabledCount = Object.values(settings.enabledEvents).filter(Boolean).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `kds-header-btn transition-all relative ${isOpen ? 'bg-slate-700' : ''}`,
                onClick: ()=>setIsOpen(!isOpen),
                title: "Sound Settings",
                children: [
                    settings.isMuted || settings.volume === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                        size: 28,
                        className: "text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                        size: 28,
                        className: "text-[#1FA4A9]"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    isMounted && !settings.isMuted && enabledCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 -right-1 w-4 h-4 bg-[#1FA4A9] rounded-full text-[10px] flex items-center justify-center font-black text-white shadow-lg",
                        children: enabledCount
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                        lineNumber: 42,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-3 w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-black uppercase tracking-widest text-slate-300 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                        lineNumber: 52,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Audio Configuration"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                lineNumber: 51,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMute,
                                className: `text-[10px] font-black px-2 py-1 rounded transition-all ${settings.isMuted ? 'bg-red-500 text-white' : 'bg-slate-700 text-slate-300'}`,
                                children: settings.isMuted ? 'UNMUTE' : 'MUTE ALL'
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                lineNumber: 55,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-[10px] font-black uppercase text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Master Volume"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                                lineNumber: 67,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#1FA4A9]",
                                                children: [
                                                    Math.round(settings.volume * 100),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                                lineNumber: 68,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: "1",
                                        step: "0.01",
                                        value: settings.volume,
                                        onChange: (e)=>setVolume(parseFloat(e.target.value)),
                                        className: "w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#1FA4A9] border border-slate-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                        lineNumber: 70,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-black uppercase text-slate-500 mb-2",
                                        children: "Event Alerts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleItem, {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
                                        label: "New Orders",
                                        active: settings.enabledEvents.NEW_ORDER,
                                        onClick: ()=>toggleEvent('NEW_ORDER'),
                                        onTest: ()=>playSound('NEW_ORDER'),
                                        color: "text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleItem, {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
                                        label: "Order Updates",
                                        active: settings.enabledEvents.ORDER_UPDATED,
                                        onClick: ()=>toggleEvent('ORDER_UPDATED'),
                                        onTest: ()=>playSound('ORDER_UPDATED'),
                                        color: "text-[#1FA4A9]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                        lineNumber: 94,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleItem, {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
                                        label: "Cancellations",
                                        active: settings.enabledEvents.ORDER_CANCELLED,
                                        onClick: ()=>toggleEvent('ORDER_CANCELLED'),
                                        onTest: ()=>playSound('ORDER_CANCELLED'),
                                        color: "text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleItem, {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                                        label: "Delayed",
                                        active: settings.enabledEvents.ORDER_DELAYED,
                                        onClick: ()=>toggleEvent('ORDER_DELAYED'),
                                        onTest: ()=>playSound('ORDER_DELAYED'),
                                        color: "text-orange-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                        lineNumber: 112,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleItem, {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                        label: "SLA Breach",
                                        active: settings.enabledEvents.SLA_BREACH,
                                        onClick: ()=>toggleEvent('SLA_BREACH'),
                                        onTest: ()=>playSound('SLA_BREACH'),
                                        color: "text-red-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                lineNumber: 82,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-slate-950/50 text-center border-t border-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9px] font-bold text-slate-600 uppercase tracking-widest",
                            children: "Local Persistence Active"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                            lineNumber: 133,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                        lineNumber: 132,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                lineNumber: 49,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SoundSettings, "yW8WD5PwPR+y4H23f8TC841g264=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$useKDSSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSSound"]
    ];
});
_c = SoundSettings;
const ToggleItem = ({ Icon, label, active, onClick, onTest, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClick,
                className: `flex-1 flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 ${active ? 'bg-slate-800 border border-slate-700' : 'bg-transparent border border-transparent opacity-40'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-1.5 rounded-lg bg-slate-900 ${active ? color : 'text-slate-500'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                    lineNumber: 161,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                lineNumber: 160,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-black text-slate-200 tracking-tight",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                                lineNumber: 163,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-7 h-3.5 rounded-full relative transition-colors duration-200 ${active ? 'bg-[#1FA4A9]' : 'bg-slate-700'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute top-0.5 w-2.5 h-2.5 rounded-full bg-white transition-all duration-200 ${active ? 'right-0.5' : 'left-0.5'}`
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                            lineNumber: 166,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onTest();
                },
                className: "p-2.5 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-all text-slate-400 hover:text-white",
                title: "Test Sound",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                    lineNumber: 177,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/kds/components/sound/SoundSettings.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ToggleItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "SoundSettings");
__turbopack_context__.k.register(_c1, "ToggleItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/sound/SoundController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SoundController",
    ()=>SoundController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const SoundController = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundController.useEffect": ()=>{
            const sounds = [
                '/sounds/new-order.mp3',
                '/sounds/confirm.mp3',
                '/sounds/alert.mp3',
                '/sounds/breach.mp3'
            ];
            sounds.forEach({
                "SoundController.useEffect": (src)=>{
                    const audio = new Audio();
                    audio.src = src;
                    audio.preload = 'auto';
                }
            }["SoundController.useEffect"]);
        }
    }["SoundController.useEffect"], []);
    return null; // Headless component
};
_s(SoundController, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SoundController;
var _c;
__turbopack_context__.k.register(_c, "SoundController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/connectivity/ConnectivityManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectivityManager",
    ()=>ConnectivityManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/store/kdsStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ConnectivityManager = ()=>{
    _s();
    const { isOnline } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"])();
    if (isOnline) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-red-600 text-white px-6 py-3 flex items-center justify-center gap-3 animate-in slide-in-from-top duration-300 z-[100] shadow-lg border-b border-red-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                size: 20,
                className: "animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/modules/kds/components/connectivity/ConnectivityManager.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-black uppercase tracking-widest leading-none",
                        children: "Offline Mode Active"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/connectivity/ConnectivityManager.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold opacity-80 uppercase tracking-tighter",
                        children: "Actions will be queued and synced automatically on reconnect"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/connectivity/ConnectivityManager.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/connectivity/ConnectivityManager.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-auto flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/connectivity/ConnectivityManager.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-black uppercase tracking-widest",
                        children: "No Connection"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/connectivity/ConnectivityManager.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/connectivity/ConnectivityManager.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/kds/components/connectivity/ConnectivityManager.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ConnectivityManager, "icDdHb6wSgBJ3ENLX2hlLKpkcnI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"]
    ];
});
_c = ConnectivityManager;
var _c;
__turbopack_context__.k.register(_c, "ConnectivityManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/store/useFilterStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilterStore",
    ()=>useFilterStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useFilterStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        fulfillment: 'ALL',
        source: 'ALL',
        station: 'ALL',
        setFulfillment: (fulfillment)=>set({
                fulfillment
            }),
        setSource: (source)=>set({
                source
            }),
        setStation: (station)=>set({
                station
            }),
        resetFilters: ()=>set({
                fulfillment: 'ALL',
                source: 'ALL',
                station: 'ALL'
            })
    }), {
    name: 'kds-filter-settings'
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/filter/FilterSettings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterSettings",
    ()=>FilterSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$useFilterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/store/useFilterStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const FilterSettings = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { fulfillment, source, station, setFulfillment, setSource, setStation, resetFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$useFilterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterSettings.useEffect": ()=>{
            const handleClickOutside = {
                "FilterSettings.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["FilterSettings.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "FilterSettings.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["FilterSettings.useEffect"];
        }
    }["FilterSettings.useEffect"], []);
    const fulfillmentOptions = [
        {
            label: 'All Types',
            value: 'ALL'
        },
        {
            label: 'Pickup',
            value: 'PICKUP'
        },
        {
            label: 'Store Delivery',
            value: 'STORE_DELIVERY'
        },
        {
            label: 'Uber Delivery',
            value: 'UBER_DIRECT_DELIVERY'
        }
    ];
    const sourceOptions = [
        {
            label: 'All Sources',
            value: 'ALL'
        },
        {
            label: 'POS',
            value: 'POS'
        },
        {
            label: 'Call Center',
            value: 'CALL_CENTER'
        },
        {
            label: 'Online',
            value: 'ONLINE'
        },
        {
            label: 'Uber Direct',
            value: 'UBER_DIRECT'
        },
        {
            label: 'Kiosk',
            value: 'KIOSK'
        },
        {
            label: 'External API',
            value: 'API'
        }
    ];
    const stationOptions = [
        {
            label: 'Master View',
            value: 'ALL'
        },
        {
            label: 'Make Line',
            value: 'MAKE_LINE'
        },
        {
            label: 'Oven Station',
            value: 'OVEN'
        },
        {
            label: 'Cut & Box',
            value: 'CUT_BOX'
        },
        {
            label: 'Expo Mode',
            value: 'EXPO'
        }
    ];
    const activeFilterCount = (fulfillment !== 'ALL' ? 1 : 0) + (source !== 'ALL' ? 1 : 0) + (station !== 'ALL' ? 1 : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `kds-header-btn relative ${isOpen || activeFilterCount > 0 ? 'bg-slate-700' : ''}`,
                onClick: ()=>setIsOpen(!isOpen),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                        size: 28
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "FILTERS"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-slate-900",
                        children: activeFilterCount
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-3 w-80 bg-slate-900 border border-slate-700 rounded-none shadow-2xl p-6 z-[100] animate-in fade-in zoom-in duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-black text-white uppercase tracking-widest",
                                children: "KDS Configuration"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                lineNumber: 67,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resetFilters,
                                className: "text-[10px] font-black text-slate-400 hover:text-white uppercase tracking-tighter flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                        lineNumber: 73,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Clear"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                lineNumber: 69,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[10px] font-black text-slate-500 uppercase tracking-widest",
                                        children: "Assigned Station"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                        lineNumber: 81,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-1",
                                        children: stationOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setStation(opt.value),
                                                className: `flex items-center justify-between px-3 py-3 rounded-none text-xs font-black transition-none ${station === opt.value ? 'bg-amber-500 text-black' : 'text-slate-400 bg-slate-800/50 hover:bg-slate-800 hover:text-slate-200'}`,
                                                children: [
                                                    opt.label,
                                                    station === opt.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 67
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, opt.value, true, {
                                                fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                                lineNumber: 84,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                lineNumber: 80,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[10px] font-black text-slate-500 uppercase tracking-widest",
                                        children: "Fulfillment Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-1",
                                        children: fulfillmentOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFulfillment(opt.value),
                                                className: `flex items-center justify-between px-3 py-2 rounded-none text-[10px] font-bold transition-none ${fulfillment === opt.value ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-800/50 hover:bg-slate-800 hover:text-slate-200'}`,
                                                children: opt.label
                                            }, opt.value, false, {
                                                fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                                lineNumber: 104,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[10px] font-black text-slate-500 uppercase tracking-widest",
                                        children: "Order Source"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                        lineNumber: 120,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-1.5",
                                        children: sourceOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSource(opt.value),
                                                className: `flex items-center justify-between px-3 py-2.5 rounded-none text-[9px] font-black transition-none uppercase ${source === opt.value ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-800/50 hover:bg-slate-800 hover:text-slate-200'}`,
                                                children: opt.label
                                            }, opt.value, false, {
                                                fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                                lineNumber: 123,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                                lineNumber: 119,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 pt-4 border-t border-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9px] text-slate-500 font-bold text-center leading-relaxed",
                            children: "FILTERS APPLY TO THE CURRENT BOARD VIEW AND EXPO SCREEN"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                            lineNumber: 139,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
                lineNumber: 65,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/kds/components/filter/FilterSettings.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FilterSettings, "164cGfDyZB7PLKGxepUifIU8TeA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$useFilterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterStore"]
    ];
});
_c = FilterSettings;
var _c;
__turbopack_context__.k.register(_c, "FilterSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/utils/slaUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRemainingSeconds",
    ()=>getRemainingSeconds,
    "getSLAState",
    ()=>getSLAState
]);
function getSLAState(createdAt, prepTimeMinutes) {
    const now = Date.now();
    const created = new Date(createdAt).getTime();
    const elapsedMinutes = (now - created) / 60000;
    const ratio = elapsedMinutes / prepTimeMinutes;
    if (ratio >= 1) return 'OVERDUE';
    if (ratio >= 0.75) return 'WARNING';
    return 'ON_TIME';
}
function getRemainingSeconds(createdAt, prepTimeMinutes) {
    const now = Date.now();
    const created = new Date(createdAt).getTime();
    const totalMs = prepTimeMinutes * 60000;
    const remaining = created + totalMs - now;
    return Math.max(0, Math.floor(remaining / 1000));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/toast/KDSToast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KDSToastContainer",
    ()=>KDSToastContainer,
    "kdsToast",
    ()=>kdsToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * KDSToast — Lightweight self-contained toast system for KDS.
 *
 * No external library needed. Designed for the dark KDS environment.
 *
 * Usage (imperative API from anywhere):
 *   import { kdsToast } from './KDSToast';
 *   kdsToast.error('Printer not ready. Check connection.');
 *   kdsToast.success('Receipt sent to printer.');
 *   kdsToast.info('Order syncing...');
 *
 * Mount <KDSToastContainer /> once at the KDS layout root.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const _listeners = new Set();
function _broadcast(toast) {
    _listeners.forEach((fn)=>fn(toast));
}
const kdsToast = {
    success (message, durationMs = 3500) {
        _broadcast({
            id: crypto.randomUUID(),
            type: 'success',
            message,
            durationMs
        });
    },
    error (message, durationMs = 5000) {
        _broadcast({
            id: crypto.randomUUID(),
            type: 'error',
            message,
            durationMs
        });
    },
    info (message, durationMs = 3000) {
        _broadcast({
            id: crypto.randomUUID(),
            type: 'info',
            message,
            durationMs
        });
    },
    printError (message, durationMs = 6000) {
        _broadcast({
            id: crypto.randomUUID(),
            type: 'print_error',
            message,
            durationMs
        });
    }
};
// ─────────────────────────────────────────────────────────────────────────────
//  Individual Toast item
// ─────────────────────────────────────────────────────────────────────────────
const TOAST_STYLES = {
    success: {
        bg: 'bg-slate-900',
        border: 'border-green-500',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
            size: 18,
            className: "text-green-400 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
            lineNumber: 68,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    },
    error: {
        bg: 'bg-slate-900',
        border: 'border-red-500',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
            size: 18,
            className: "text-red-400 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
            lineNumber: 73,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    },
    info: {
        bg: 'bg-slate-900',
        border: 'border-[#1FA4A9]',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
            size: 18,
            className: "text-[#1FA4A9] shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
            lineNumber: 78,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    },
    print_error: {
        bg: 'bg-slate-900',
        border: 'border-amber-400',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
            size: 18,
            className: "text-amber-400 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
            lineNumber: 83,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    }
};
const ToastItem = ({ toast, onDismiss })=>{
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Animate in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastItem.useEffect": ()=>{
            const t = requestAnimationFrame({
                "ToastItem.useEffect.t": ()=>setVisible(true)
            }["ToastItem.useEffect.t"]);
            return ({
                "ToastItem.useEffect": ()=>cancelAnimationFrame(t)
            })["ToastItem.useEffect"];
        }
    }["ToastItem.useEffect"], []);
    // Auto-dismiss
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastItem.useEffect": ()=>{
            const out = setTimeout({
                "ToastItem.useEffect.out": ()=>{
                    setVisible(false);
                    setTimeout({
                        "ToastItem.useEffect.out": ()=>onDismiss(toast.id)
                    }["ToastItem.useEffect.out"], 300);
                }
            }["ToastItem.useEffect.out"], toast.durationMs);
            return ({
                "ToastItem.useEffect": ()=>clearTimeout(out)
            })["ToastItem.useEffect"];
        }
    }["ToastItem.useEffect"], [
        toast.id,
        toast.durationMs,
        onDismiss
    ]);
    const style = TOAST_STYLES[toast.type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
                flex items-start gap-3 w-[380px] px-5 py-4 rounded-xl border-l-4 shadow-2xl
                transition-all duration-300
                ${style.bg} ${style.border}
                ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
            `,
        role: "alert",
        children: [
            style.icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex-1 text-sm font-bold text-white leading-snug",
                children: toast.message
            }, void 0, false, {
                fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    setVisible(false);
                    setTimeout(()=>onDismiss(toast.id), 300);
                },
                className: "p-0.5 text-slate-500 hover:text-white transition-colors shrink-0 mt-0.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
                    lineNumber: 133,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
        lineNumber: 113,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ToastItem, "tdih875XgMxQefzip/l/Dhpbgoo=");
_c = ToastItem;
const KDSToastContainer = ()=>{
    _s1();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KDSToastContainer.useCallback[addToast]": (toast)=>{
            setToasts({
                "KDSToastContainer.useCallback[addToast]": (prev)=>[
                        ...prev,
                        toast
                    ]
            }["KDSToastContainer.useCallback[addToast]"]);
        }
    }["KDSToastContainer.useCallback[addToast]"], []);
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KDSToastContainer.useCallback[removeToast]": (id)=>{
            setToasts({
                "KDSToastContainer.useCallback[removeToast]": (prev)=>prev.filter({
                        "KDSToastContainer.useCallback[removeToast]": (t)=>t.id !== id
                    }["KDSToastContainer.useCallback[removeToast]"])
            }["KDSToastContainer.useCallback[removeToast]"]);
        }
    }["KDSToastContainer.useCallback[removeToast]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KDSToastContainer.useEffect": ()=>{
            _listeners.add(addToast);
            return ({
                "KDSToastContainer.useEffect": ()=>{
                    _listeners.delete(addToast);
                }
            })["KDSToastContainer.useEffect"];
        }
    }["KDSToastContainer.useEffect"], [
        addToast
    ]);
    if (toasts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none",
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastItem, {
                    toast: toast,
                    onDismiss: removeToast
                }, void 0, false, {
                    fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
                    lineNumber: 169,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, toast.id, false, {
                fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
                lineNumber: 168,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/modules/kds/components/toast/KDSToast.tsx",
        lineNumber: 166,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(KDSToastContainer, "F9MkZji6PI+xUO7LyJgj5EhCPX8=");
_c1 = KDSToastContainer;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToastItem");
__turbopack_context__.k.register(_c1, "KDSToastContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/services/printService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * printService.ts
 *
 * Hardware print integration service for KDS.
 *
 * Architecture:
 *   - `printerReady` flag simulates hardware SDK readiness check.
 *   - `setPrinterReady(bool)` is called by the hardware SDK layer once the
 *     driver/connection is confirmed (e.g. ESC/POS over USB, Star Micronics SDK,
 *     Epson ePOS, etc.). Until then all print calls return a user-friendly error.
 *   - `printOrder(orderId)` is the single public entry point for all KDS callers.
 *   - Returns a typed `PrintResult` so callers can inspect success/failure
 *     without catching exceptions.
 *
 * Production wiring:
 *   1. Import and call `setPrinterReady(true)` after your hardware SDK connects.
 *   2. Replace the body of `_executePrint()` with your actual SDK call.
 *      e.g. `await StarPrinterSDK.print(buildReceiptData(order));`
 */ __turbopack_context__.s([
    "isPrinterReady",
    ()=>isPrinterReady,
    "onPrintError",
    ()=>onPrintError,
    "printOrder",
    ()=>printOrder,
    "setPrinterReady",
    ()=>setPrinterReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$services$2f$kdsEventDispatcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/services/kdsEventDispatcher.ts [app-client] (ecmascript)");
;
// ─────────────────────────────────────────────────────────────────────────────
//  Internal State
// ─────────────────────────────────────────────────────────────────────────────
let _printerReady = false;
// Callback registered by the UI layer to display a toast/error banner
let _errorCallback = null;
function setPrinterReady(ready) {
    _printerReady = ready;
    console.info(`[PrintService] Printer status updated → ${ready ? '✅ READY' : '❌ NOT READY'}`);
}
function isPrinterReady() {
    return _printerReady;
}
function onPrintError(callback) {
    _errorCallback = callback;
}
// ─────────────────────────────────────────────────────────────────────────────
//  Print Execution (placeholder for real hardware SDK)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Placeholder hardware SDK call.
 * Replace this implementation when integrating a real receipt printer.
 *
 * @example Star Micronics SDK (future):
 *   const port = await StarDeviceDiscoveryManager.discoverDevices();
 *   await port.open();
 *   await port.getPrinterStatus();
 *   const commands = buildESCPOSReceipt(order);
 *   await port.print(commands);
 */ async function _executePrint(order) {
    // ⚠️  PLACEHOLDER — Hardware SDK not integrated
    // Simulates a ~300ms print spool delay
    await new Promise((r)=>setTimeout(r, 300));
    console.log('[PrintService] 🖨 Sending to printer (placeholder):', {
        orderNumber: order.orderNumber,
        items: order.items.map((i)=>i.name),
        fulfillment: order.fulfillment_type,
        source: order.order_source,
        stage: order.stage,
        printedAt: new Date().toISOString()
    });
// TODO: Replace with actual SDK call:
// await HardwareSDK.print(buildReceiptPayload(order));
}
async function printOrder(orderId, getOrder) {
    const now = new Date().toISOString();
    // ── 1. Resolve order ──────────────────────────────────────────────────────
    const order = getOrder(orderId);
    if (!order) {
        const result = {
            status: 'ERROR_ORDER_NOT_FOUND',
            orderId,
            orderNumber: '??',
            message: `Order ${orderId} not found in KDS store.`,
            attemptedAt: now
        };
        console.error('[PrintService]', result.message);
        _errorCallback?.(result.message);
        return result;
    }
    // ── 2. Hardware readiness check ───────────────────────────────────────────
    if (!_printerReady) {
        const result = {
            status: 'ERROR_PRINTER_NOT_READY',
            orderId,
            orderNumber: order.orderNumber,
            message: 'Printer not ready. Check connection and retry.',
            attemptedAt: now
        };
        console.warn('[PrintService]', result.message);
        _errorCallback?.(result.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$services$2f$kdsEventDispatcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emitEvent"])('printer.not_ready', {
            orderId,
            orderNumber: order.orderNumber
        }, {
            idempotencyKey: `print-fail-${orderId}-${now}`
        });
        return result;
    }
    // ── 3. Execute print ──────────────────────────────────────────────────────
    try {
        await _executePrint(order);
        const result = {
            status: 'SUCCESS',
            orderId,
            orderNumber: order.orderNumber,
            message: `Receipt printed for order #${order.orderNumber}.`,
            attemptedAt: now
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$services$2f$kdsEventDispatcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emitEvent"])('printer.receipt_printed', {
            orderId,
            orderNumber: order.orderNumber,
            stage: order.stage,
            fulfillmentType: order.fulfillment_type
        }, {
            idempotencyKey: `print-ok-${orderId}-${now}`
        });
        console.log('[PrintService] ✅', result.message);
        return result;
    } catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Unknown hardware error';
        const result = {
            status: 'ERROR_HARDWARE',
            orderId,
            orderNumber: order.orderNumber,
            message: `Print failed: ${errMsg}`,
            attemptedAt: now
        };
        console.error('[PrintService] ❌', result.message, err);
        _errorCallback?.(result.message);
        return result;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/KDSHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KDSHeader",
    ()=>KDSHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$TenantStoreProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/providers/TenantStoreProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$SoundSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/sound/SoundSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$SoundController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/sound/SoundController.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$connectivity$2f$ConnectivityManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/connectivity/ConnectivityManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$filter$2f$FilterSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/filter/FilterSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/store/kdsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react/shallow.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/utils/slaUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$toast$2f$KDSToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/toast/KDSToast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$services$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/services/printService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/providers/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/utils/kdsAccess.ts [app-client] (ecmascript)");
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
;
const KDSHeader = ()=>{
    _s();
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$TenantStoreProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenantStore"])();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isOnline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "KDSHeader.useKDSStore[isOnline]": (state)=>state.isOnline
    }["KDSHeader.useKDSStore[isOnline]"]));
    const { role: authRole } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const role = authRole || 'KDS_USER';
    // Register print error → toast bridge (once per KDS session)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KDSHeader.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$services$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onPrintError"])({
                "KDSHeader.useEffect": (msg)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$toast$2f$KDSToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kdsToast"].printError(msg)
            }["KDSHeader.useEffect"]);
        }
    }["KDSHeader.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KDSHeader.useEffect": ()=>{
            setCurrentTime(new Date());
            const timer = setInterval({
                "KDSHeader.useEffect.timer": ()=>{
                    setCurrentTime(new Date());
                }
            }["KDSHeader.useEffect.timer"], 1000);
            return ({
                "KDSHeader.useEffect": ()=>clearInterval(timer)
            })["KDSHeader.useEffect"];
        }
    }["KDSHeader.useEffect"], []);
    const orders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "KDSHeader.useKDSStore[orders]": (state)=>Object.values(state.orders)
    }["KDSHeader.useKDSStore[orders]"]));
    const getMetrics = ()=>{
        const total = orders.length;
        if (total === 0) return {
            total: 0,
            late: 0,
            sla: 100,
            avg: 0,
            bottleneck: 'NONE'
        };
        const late = orders.filter((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSLAState"])(o.createdAt, o.prepTimeMinutes) === 'OVERDUE').length;
        const sla = Math.round((total - late) / total * 100);
        // Avg Make Time (Time since creation for orders in Prep/Cutting/Ready)
        const makeTimes = orders.filter((o)=>o.stage !== 'ACCEPTED').map((o)=>(Date.now() - new Date(o.createdAt).getTime()) / 60000);
        const avg = makeTimes.length ? Math.round(makeTimes.reduce((a, b)=>a + b, 0) / makeTimes.length) : 0;
        // Bottleneck Detection
        const stageCounts = {};
        orders.forEach((o)=>stageCounts[o.stage] = (stageCounts[o.stage] || 0) + 1);
        const bottleneck = Object.entries(stageCounts).sort((a, b)=>b[1] - a[1])[0]?.[0] || 'NONE';
        return {
            total,
            late,
            sla,
            avg,
            bottleneck
        };
    };
    const metrics = getMetrics();
    const formatTime = (date)=>{
        if (!date) return '--:--:--';
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    };
    const isQueueUnderPressure = metrics.total > 12;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$SoundController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SoundController"], {}, void 0, false, {
                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$connectivity$2f$ConnectivityManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectivityManager"], {}, void 0, false, {
                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$toast$2f$KDSToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KDSToastContainer"], {}, void 0, false, {
                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `kds-header transition-colors duration-500 ${isQueueUnderPressure ? 'bg-amber-500 border-amber-600' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "kds-header-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `kds-store-name ${isQueueUnderPressure ? 'text-black' : 'text-white'}`,
                                        children: store?.name || 'KITCHEN DISPLAY'
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-[14px] font-black ${isQueueUnderPressure ? 'text-black/60' : 'text-[var(--kds-text-secondary)]'}`,
                                        children: formatTime(currentTime)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            isQueueUnderPressure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black text-amber-500 px-3 py-1 font-black text-[12px] animate-pulse rounded-none",
                                children: "QUEUE PRESSURE ALERT"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                lineNumber: 94,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-2 px-2 py-1 rounded-full text-[10px] font-black tracking-widest ${isOnline ? isQueueUnderPressure ? 'bg-black/10 text-black' : 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-1.5 h-1.5 rounded-full ${isOnline ? isQueueUnderPressure ? 'bg-black' : 'bg-green-500' : 'bg-red-500'} ${isOnline ? '' : 'animate-pulse'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                        lineNumber: 101,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isOnline ? 'ONLINE' : 'OFFLINE'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "kds-header-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] font-black uppercase ${isQueueUnderPressure ? 'text-black/60' : 'text-slate-500'}`,
                                            children: "Queue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                            lineNumber: 109,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-2xl font-black ${isQueueUnderPressure ? 'text-black' : 'text-white'}`,
                                            children: metrics.total
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                            lineNumber: 110,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 108,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-px h-8 ${isQueueUnderPressure ? 'bg-black/20' : 'bg-slate-800'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 112,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] font-black uppercase ${isQueueUnderPressure ? 'text-black/60' : 'text-slate-500'}`,
                                            children: "Avg Make"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                            lineNumber: 114,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-2xl font-black ${isQueueUnderPressure ? 'text-black' : 'text-white'}`,
                                            children: [
                                                metrics.avg,
                                                "m"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-px h-8 ${isQueueUnderPressure ? 'bg-black/20' : 'bg-slate-800'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] font-black uppercase ${isQueueUnderPressure ? 'text-black/60' : 'text-slate-500'}`,
                                            children: "SLA %"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-2xl font-black ${metrics.sla > 90 ? isQueueUnderPressure ? 'text-black' : 'text-green-500' : isQueueUnderPressure ? 'text-red-800' : 'text-amber-500'}`,
                                            children: [
                                                metrics.sla,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-px h-8 ${isQueueUnderPressure ? 'bg-black/20' : 'bg-slate-800'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] font-black uppercase ${isQueueUnderPressure ? 'text-black/60' : 'text-slate-500'}`,
                                            children: "Bottleneck"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                            lineNumber: 124,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[16px] font-black uppercase ${isQueueUnderPressure ? 'text-black' : 'text-amber-400'}`,
                                            children: metrics.bottleneck
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                            lineNumber: 125,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-px h-8 ${isQueueUnderPressure ? 'bg-black/20' : 'bg-slate-800'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] font-black uppercase ${isQueueUnderPressure ? 'text-black/60' : 'text-slate-500'}`,
                                            children: "Late"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                            lineNumber: 129,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-2xl font-black ${metrics.late > 0 ? isQueueUnderPressure ? 'text-red-900' : 'text-[var(--kds-status-late)]' : isQueueUnderPressure ? 'text-black/40' : 'text-slate-500'}`,
                                            children: metrics.late
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                            lineNumber: 107,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "kds-header-right",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canReopenOrder"])(role) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"].getState().recallOrder();
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$toast$2f$KDSToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kdsToast"].success('Last order recalled');
                                },
                                className: "h-[var(--kds-touch-target)] px-6 bg-[var(--kds-status-prep)] text-black font-black uppercase tracking-tighter text-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all mr-2",
                                title: "Recall last bumped order",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "RECALL"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 mr-2 px-3 py-1 bg-slate-800 rounded-lg border border-slate-700",
                                children: isOnline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                    size: 14,
                                    className: "text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 151,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                    size: 14,
                                    className: "text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                    lineNumber: 151,
                                    columnNumber: 85
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                lineNumber: 150,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$SoundSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SoundSettings"], {}, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                lineNumber: 154,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$filter$2f$FilterSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterSettings"], {}, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/KDSHeader.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(KDSHeader, "XNlKetf5JqIx03cUE3j0RVc+qR4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$TenantStoreProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenantStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"]
    ];
});
_c = KDSHeader;
var _c;
__turbopack_context__.k.register(_c, "KDSHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/ticket/SourceBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SourceBadge",
    ()=>SourceBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const sourceColors = {
    POS: 'bg-blue-600',
    CALL_CENTER: 'bg-purple-600',
    ONLINE: 'bg-green-600',
    UBER_DIRECT: 'bg-black',
    KIOSK: 'bg-orange-600',
    API: 'bg-gray-600'
};
function SourceBadge({ source }) {
    const isUber = source === 'UBER_DIRECT';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `flex items-center gap-1.5 px-3 py-1 text-[10px] font-black text-white rounded uppercase tracking-tighter shadow-sm ${sourceColors[source]}`,
        children: [
            isUber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-2 rounded-full bg-white animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/modules/kds/components/ticket/SourceBadge.tsx",
                lineNumber: 24,
                columnNumber: 17
            }, this),
            source === 'UBER_DIRECT' ? 'Uber Direct' : source.replace('_', ' ')
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/kds/components/ticket/SourceBadge.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c = SourceBadge;
var _c;
__turbopack_context__.k.register(_c, "SourceBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/modals/DelayOrderModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DelayOrderModal",
    ()=>DelayOrderModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const DelayOrderModal = ({ isOpen, onClose, onConfirm, orderNumber })=>{
    _s();
    const [minutes, setMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [customMinutes, setCustomMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [reason, setReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    if (!isOpen) return null;
    const handleConfirm = ()=>{
        const finalMinutes = customMinutes ? parseInt(customMinutes) : minutes;
        if (isNaN(finalMinutes) || finalMinutes <= 0) {
            alert('Please enter a valid delay time');
            return;
        }
        onConfirm(finalMinutes, reason || undefined);
        onClose();
        // Reset local state
        setCustomMinutes('');
        setReason('');
    };
    const presets = [
        5,
        10,
        15
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-slate-900 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-black tracking-tight",
                            children: [
                                "Delay Order #",
                                orderNumber
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-400 text-sm font-bold uppercase tracking-widest mt-1",
                            children: "Adjust preparation time"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                    children: "Select Delay (Minutes)"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: presets.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setMinutes(p);
                                                setCustomMinutes('');
                                            },
                                            className: `h-14 rounded-xl font-black text-lg transition-all ${minutes === p && !customMinutes ? 'bg-[#1FA4A9] text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`,
                                            children: [
                                                "+",
                                                p
                                            ]
                                        }, p, true, {
                                            fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                                            lineNumber: 50,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                    children: "Or Custom Amount"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "Enter minutes...",
                                    value: customMinutes,
                                    onChange: (e)=>{
                                        setCustomMinutes(e.target.value);
                                        setMinutes(0);
                                    },
                                    className: "w-full h-14 px-4 rounded-xl border-2 border-slate-100 focus:border-[#1FA4A9] outline-none font-bold text-lg transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                    children: "Reason for Delay (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "e.g. Kitchen backup, missing ingredient...",
                                    value: reason,
                                    onChange: (e)=>setReason(e.target.value),
                                    className: "w-full h-24 p-4 rounded-xl border-2 border-slate-100 focus:border-[#1FA4A9] outline-none font-medium text-sm transition-all resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-slate-50 border-t border-slate-100 flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex-1 h-14 rounded-xl font-black uppercase tracking-widest text-sm text-slate-500 hover:bg-slate-200 transition-all",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleConfirm,
                            className: "flex-[2] h-14 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-lg active:scale-95",
                            children: "Confirm Delay"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
            lineNumber: 36,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/modules/kds/components/modals/DelayOrderModal.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DelayOrderModal, "lBUyADXJ1sOSnpkoLIRNgFs2N0w=");
_c = DelayOrderModal;
var _c;
__turbopack_context__.k.register(_c, "DelayOrderModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomerMessagingModal",
    ()=>CustomerMessagingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CustomerMessagingModal = ({ isOpen, order, onClose, onSend, role = 'KDS_USER' })=>{
    _s();
    const [channel, setChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('SMS');
    const [template, setTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ACCEPTED');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const templates = {
        ACCEPTED: `Your order #${order.orderNumber} has been accepted and is being prepared.`,
        PREPARATION: `Your order is currently being prepared. ETA: ${order.estimatedReadyTime}`,
        DELAYED: `Your order has been delayed. New ETA: ${order.estimatedReadyTime}`,
        CUSTOM: ''
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerMessagingModal.useEffect": ()=>{
            if (template !== 'CUSTOM') {
                setMessage(templates[template]);
            }
        }
    }["CustomerMessagingModal.useEffect"], [
        template,
        order.estimatedReadyTime
    ]);
    if (!isOpen) return null;
    const canEditCustom = role === 'STORE_MANAGER';
    const handleSend = ()=>{
        if (!message.trim()) {
            alert('Message cannot be empty');
            return;
        }
        onSend(channel, message);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-slate-900 text-white flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-black tracking-tight",
                                    children: "Messaging Center"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs font-bold uppercase tracking-widest mt-1",
                                    children: [
                                        "Order #",
                                        order.orderNumber
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-white/10 rounded-full transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                lineNumber: 58,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6 overflow-y-auto max-h-[70vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                    children: "Select Channel"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelButton, {
                                            active: channel === 'SMS',
                                            onClick: ()=>setChannel('SMS'),
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                                lineNumber: 70,
                                                columnNumber: 39
                                            }, void 0),
                                            label: "SMS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 67,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelButton, {
                                            active: channel === 'EMAIL',
                                            onClick: ()=>setChannel('EMAIL'),
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                                lineNumber: 76,
                                                columnNumber: 39
                                            }, void 0),
                                            label: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 73,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelButton, {
                                            active: channel === 'BOTH',
                                            onClick: ()=>setChannel('BOTH'),
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 67
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 94
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                                lineNumber: 82,
                                                columnNumber: 39
                                            }, void 0),
                                            label: "Both"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                    children: "Message Template"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: template,
                                    onChange: (e)=>setTemplate(e.target.value),
                                    className: "w-full h-12 px-4 rounded-xl border-2 border-slate-100 focus:border-[#1FA4A9] outline-none font-bold text-sm bg-slate-50 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "ACCEPTED",
                                            children: "Order Accepted"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "PREPARATION",
                                            children: "In Preparation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 97,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "DELAYED",
                                            children: "Order Delayed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 98,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "CUSTOM",
                                            children: "Custom Message"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                            children: "Message Content"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        template === 'CUSTOM' && !canEditCustom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-black text-red-500 uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded",
                                            children: "Manager Approval Required for Custom"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 108,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: message,
                                    onChange: (e)=>setMessage(e.target.value),
                                    disabled: template !== 'CUSTOM' || !canEditCustom,
                                    placeholder: template === 'CUSTOM' ? "Type your custom message here..." : "",
                                    className: `w-full h-32 p-4 rounded-xl border-2 outline-none font-medium text-sm transition-all resize-none ${template === 'CUSTOM' && !canEditCustom ? 'bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white border-slate-100 focus:border-[#1FA4A9]'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-6 border-t border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                    children: "Customer Tracking Link"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            readOnly: true,
                                            value: `https://track.zyappy.com/${order.trackingToken}`,
                                            className: "flex-1 h-12 px-4 rounded-xl border-2 border-slate-100 bg-slate-50 font-mono text-xs text-[#1FA4A9] outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 128,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                navigator.clipboard.writeText(`https://track.zyappy.com/${order.trackingToken}`);
                                                alert('Tracking link copied to clipboard');
                                            },
                                            className: "px-4 bg-slate-200 text-slate-700 font-black rounded-xl uppercase text-[10px] hover:bg-slate-300 transition-all",
                                            children: "Copy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-slate-50 border-t border-slate-100 flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex-1 h-14 rounded-xl font-black uppercase tracking-widest text-sm text-slate-500 hover:bg-slate-200 transition-all",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                            lineNumber: 148,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSend,
                            className: "flex-[2] h-14 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Send Notification"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                    lineNumber: 147,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CustomerMessagingModal, "Z7PCsW6YohvDvOGWFGQBkTzBXK0=");
_c = CustomerMessagingModal;
const ChannelButton = ({ active, onClick, icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `h-14 rounded-xl flex flex-col items-center justify-center gap-1 transition-all border-2 ${active ? 'bg-[#1FA4A9]/10 border-[#1FA4A9] text-[#1FA4A9]' : 'bg-slate-50 border-transparent text-slate-500 hover:bg-slate-100'}`,
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-black uppercase tracking-widest",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ChannelButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomerMessagingModal");
__turbopack_context__.k.register(_c1, "ChannelButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/ticket/TicketTimer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TicketTimer",
    ()=>TicketTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/utils/slaUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$useKDSSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/sound/useKDSSound.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const TicketTimer = ({ createdAt, prepTimeMinutes, stageStartedAt })=>{
    _s();
    const [remainingSeconds, setRemainingSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemainingSeconds"])(createdAt, prepTimeMinutes));
    const [slaState, setSlaState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSLAState"])(createdAt, prepTimeMinutes));
    const [elapsedMinutes, setElapsedMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [stageTime, setStageTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // in seconds
    const { playSound } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$useKDSSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSSound"])();
    const hasPlayedBreach = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const hasPlayedWarning = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TicketTimer.useEffect": ()=>{
            const updateTimer = {
                "TicketTimer.useEffect.updateTimer": ()=>{
                    const remaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemainingSeconds"])(createdAt, prepTimeMinutes);
                    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSLAState"])(createdAt, prepTimeMinutes);
                    const createdTime = new Date(createdAt).getTime();
                    const now = Date.now();
                    const elapsed = Math.floor((now - createdTime) / 60000);
                    let sTime = 0;
                    if (stageStartedAt) {
                        sTime = Math.floor((now - new Date(stageStartedAt).getTime()) / 1000);
                    }
                    setRemainingSeconds(remaining);
                    setSlaState(state);
                    setElapsedMinutes(elapsed);
                    setStageTime(sTime);
                    if (state === 'OVERDUE' && !hasPlayedBreach.current) {
                        playSound('SLA_BREACH');
                        hasPlayedBreach.current = true;
                    } else if (state === 'WARNING' && !hasPlayedWarning.current) {
                        playSound('SLA_WARNING');
                        hasPlayedWarning.current = true;
                    } else if (state === 'ON_TIME') {
                        hasPlayedBreach.current = false;
                        hasPlayedWarning.current = false;
                    }
                }
            }["TicketTimer.useEffect.updateTimer"];
            updateTimer();
            const interval = setInterval(updateTimer, 1000);
            return ({
                "TicketTimer.useEffect": ()=>clearInterval(interval)
            })["TicketTimer.useEffect"];
        }
    }["TicketTimer.useEffect"], [
        createdAt,
        prepTimeMinutes
    ]);
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    const getStateClasses = ()=>{
        switch(slaState){
            case 'OVERDUE':
                return 'kds-timer-late bg-[var(--kds-status-late)] text-white p-2';
            case 'WARNING':
                return 'kds-timer-warning border-[var(--kds-status-warning)] text-[var(--kds-status-warning)] p-2';
            default:
                return 'border-[var(--kds-status-on-time)] text-[var(--kds-status-on-time)] p-2';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-end gap-1 rounded-none border-2 ${getStateClasses()}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-black uppercase tracking-widest opacity-60",
                        children: "REMAINING:"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[36px] font-black tabular-nums leading-none",
                        children: formatTime(remainingSeconds)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-black uppercase tracking-widest opacity-60",
                        children: "ELAPSED:"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl font-black",
                        children: [
                            elapsedMinutes,
                            " MIN"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            stageStartedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 border-t border-white/20 pt-1 w-full justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-black uppercase tracking-widest opacity-60",
                        children: "STAGE TIME:"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-black text-amber-500 tabular-nums",
                        children: formatTime(stageTime)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
                lineNumber: 89,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[9px] font-black uppercase tracking-tighter",
                children: [
                    "Status: ",
                    slaState.replace('_', ' ')
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/kds/components/ticket/TicketTimer.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TicketTimer, "pbs+tIj8JhXmZ0MycC8AGcFgLOQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$useKDSSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSSound"]
    ];
});
_c = TicketTimer;
var _c;
__turbopack_context__.k.register(_c, "TicketTimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/utils/kdsModifierRenderer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * kdsModifierRenderer.ts
 * 
 * Hardened KDS modifier rendering logic.
 * Rules enforced per group_type spec:
 *
 *   PLACEMENT_TOPPING:
 *     - Default placement to FULL if missing
 *     - Never show quantity
 *     - Never infer LEFT/RIGHT automatically
 *
 *   CHOICE_ONE:
 *     - Ensure only a single modifier is selected
 *     - If >1 present in a group, flag as DATA_ERROR
 *
 *   QUANTITY_ONLY:
 *     - Always show quantity number
 *     - Never assign placement
 *
 *   UNKNOWN group_type:
 *     - Log console.error
 *     - Render safely with a fallback badge
 */ __turbopack_context__.s([
    "resolveAllModifiers",
    ()=>resolveAllModifiers,
    "resolveModifier",
    ()=>resolveModifier,
    "resolveModifierGroup",
    ()=>resolveModifierGroup
]);
const KNOWN_GROUP_TYPES = [
    'PLACEMENT_TOPPING',
    'CHOICE_ONE',
    'QUANTITY_ONLY'
];
const VALID_PLACEMENTS = [
    'FULL',
    'LEFT',
    'RIGHT',
    'QUARTER'
];
function isKnownGroupType(t) {
    return KNOWN_GROUP_TYPES.includes(t);
}
function isValidPlacement(p) {
    return VALID_PLACEMENTS.includes(p);
}
function resolveModifier(mod) {
    const groupType = mod.groupType;
    // ─── Defensive: unknown group_type ────────────────────────────────────────
    if (!isKnownGroupType(groupType)) {
        console.error(`[KDS] Unknown modifier group_type "${groupType}" on modifier "${mod.name}". ` + `Rendering safely without placement or quantity.`);
        return {
            name: mod.name,
            resolvedPlacement: null,
            resolvedQuantity: null,
            hasDataError: true,
            dataErrorMessage: `Unknown type: "${groupType}"`,
            groupType,
            isUnknownGroupType: true
        };
    }
    // ─── PLACEMENT_TOPPING ────────────────────────────────────────────────────
    if (groupType === 'PLACEMENT_TOPPING') {
        // Rule: Never infer LEFT/RIGHT automatically.
        // Rule: Default to FULL if placement is missing or unrecognised.
        const placement = isValidPlacement(mod.placement) ? mod.placement : 'FULL';
        return {
            name: mod.name,
            resolvedPlacement: placement,
            resolvedQuantity: null,
            hasDataError: false,
            dataErrorMessage: null,
            groupType,
            isUnknownGroupType: false
        };
    }
    // ─── CHOICE_ONE ───────────────────────────────────────────────────────────
    // (The per-modifier data here is fine; multi-choice validation happens at
    //  the group level in resolveModifierGroup below.)
    if (groupType === 'CHOICE_ONE') {
        return {
            name: mod.name,
            resolvedPlacement: null,
            resolvedQuantity: null,
            hasDataError: false,
            dataErrorMessage: null,
            groupType,
            isUnknownGroupType: false
        };
    }
    // ─── QUANTITY_ONLY ────────────────────────────────────────────────────────
    // Rule: Always show quantity. Never assign placement.
    if (groupType === 'QUANTITY_ONLY') {
        const qty = typeof mod.quantity === 'number' && mod.quantity > 0 ? mod.quantity : 1;
        return {
            name: mod.name,
            resolvedPlacement: null,
            resolvedQuantity: qty,
            hasDataError: false,
            dataErrorMessage: null,
            groupType,
            isUnknownGroupType: false
        };
    }
    // Unreachable due to the guard above, but satisfies TypeScript exhaustive check
    return {
        name: mod.name,
        resolvedPlacement: null,
        resolvedQuantity: null,
        hasDataError: true,
        dataErrorMessage: 'Unhandled group type',
        groupType,
        isUnknownGroupType: false
    };
}
function resolveModifierGroup(mods) {
    if (mods.length === 0) {
        return {
            groupType: '',
            modifiers: [],
            multipleChoiceError: false
        };
    }
    const groupType = mods[0].groupType;
    const resolved = mods.map(resolveModifier);
    // ─── CHOICE_ONE cardinality check ─────────────────────────────────────────
    const multipleChoiceError = groupType === 'CHOICE_ONE' && mods.length > 1;
    if (multipleChoiceError) {
        console.error(`[KDS] CHOICE_ONE group has ${mods.length} modifiers for "${mods.map((m)=>m.name).join(', ')}". ` + `Expected exactly 1. Flagging as data error.`);
        // Mark every item in this group as an error so UI can highlight them all
        return {
            groupType,
            modifiers: resolved.map((r)=>({
                    ...r,
                    hasDataError: true,
                    dataErrorMessage: `DATA ERROR: ${mods.length} choices selected (expected 1)`
                })),
            multipleChoiceError: true
        };
    }
    return {
        groupType,
        modifiers: resolved,
        multipleChoiceError: false
    };
}
function resolveAllModifiers(modifiers) {
    if (!modifiers || modifiers.length === 0) return [];
    // Group by consecutive groupType segments
    const segments = [];
    modifiers.forEach((mod)=>{
        const last = segments[segments.length - 1];
        if (last && last[0].groupType === mod.groupType) {
            last.push(mod);
        } else {
            segments.push([
                mod
            ]);
        }
    });
    return segments.flatMap((seg)=>resolveModifierGroup(seg).modifiers);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/ticket/OrderTicket.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderTicket",
    ()=>OrderTicket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$ticket$2f$SourceBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/ticket/SourceBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$modals$2f$DelayOrderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/modals/DelayOrderModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$modals$2f$CustomerMessagingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/modals/CustomerMessagingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/store/kdsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$ticket$2f$TicketTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/ticket/TicketTimer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$useKDSSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/sound/useKDSSound.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/providers/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/utils/kdsAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsModuleFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/utils/kdsModuleFlags.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsModifierRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/utils/kdsModifierRenderer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$services$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/services/printService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$toast$2f$KDSToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/toast/KDSToast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/utils/slaUtils.ts [app-client] (ecmascript)");
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
;
;
;
function OrderTicket({ order, variant = 'standard' }) {
    _s();
    const [isDelayModalOpen, setIsDelayModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMessagingModalOpen, setIsMessagingModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDelayThrottled, setIsDelayThrottled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPrinting, setIsPrinting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { delayOrder, advanceStage, acceptOrder, sendCustomerMessage, cancelOrder, toggleHold, incrementPrepTime, recallOrder } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"])();
    const { playSound } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$useKDSSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSSound"])();
    const { role: authRole, enabledModules } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // Permissions & Module Enforcement
    const role = authRole || 'KDS_USER';
    const isMessagingActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsModuleFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMessagingModuleActive"])(enabledModules);
    const [isNew, setIsNew] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderTicket.useEffect": ()=>{
            const timer = setTimeout({
                "OrderTicket.useEffect.timer": ()=>setIsNew(false)
            }["OrderTicket.useEffect.timer"], 3000);
            return ({
                "OrderTicket.useEffect": ()=>clearTimeout(timer)
            })["OrderTicket.useEffect"];
        }
    }["OrderTicket.useEffect"], []);
    // Live SLA tracking for visual states
    const [slaState, setSlaState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSLAState"])(order.createdAt, order.prepTimeMinutes));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderTicket.useEffect": ()=>{
            const interval = setInterval({
                "OrderTicket.useEffect.interval": ()=>{
                    setSlaState((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSLAState"])(order.createdAt, order.prepTimeMinutes));
                }
            }["OrderTicket.useEffect.interval"], 5000);
            return ({
                "OrderTicket.useEffect": ()=>clearInterval(interval)
            })["OrderTicket.useEffect"];
        }
    }["OrderTicket.useEffect"], [
        order.createdAt,
        order.prepTimeMinutes
    ]);
    // Production visual states logic (Industry Approach: Flat, Status-only)
    const getBorderState = ()=>{
        if (order.isCompleting) return 'border-[var(--kds-status-complete)] opacity-40 brightness-50';
        if (isNew) return 'kds-new-alert border-[6px]';
        const heldClass = order.isHeld ? 'border-dashed opacity-70' : '';
        if (slaState === 'OVERDUE') return `border-[var(--kds-status-late)] border-[6px] ${heldClass}`;
        if (slaState === 'WARNING') return `border-[var(--kds-status-warning)] border-[6px] ${heldClass}`;
        // Neutral for In-Progress
        return `border-[var(--kds-border)] border-[2px] ${heldClass}`;
    };
    const handleAdvance = async ()=>{
        if (isProcessing) return;
        setIsProcessing(true);
        // Sound confirmation
        playSound('ORDER_UPDATED', order.id);
        // Instant state change
        advanceStage(order.id);
        setIsProcessing(false);
    };
    const handleDelayConfirm = (minutes, reason)=>{
        if (isDelayThrottled) return;
        delayOrder(order.id, minutes, role, reason);
        setIsDelayThrottled(true);
        setTimeout(()=>setIsDelayThrottled(false), 3000);
        // Trigger delay sound
        playSound('ORDER_DELAYED', order.id);
    };
    const handleCancel = ()=>{
        if (window.confirm('Are you sure you want to cancel this order?')) {
            cancelOrder(order.id, role);
            playSound('ORDER_CANCELLED', order.id);
        }
    };
    const formatCreatedAt = (dateStr)=>{
        try {
            const date = new Date(dateStr);
            return date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
        } catch  {
            return '--:--';
        }
    };
    const formatETA = (value)=>{
        if (!value) return '--:--';
        // Handle ISO strings
        if (value.includes('T')) {
            try {
                return new Date(value).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                });
            } catch  {
                return '--:--';
            }
        }
        return value; // Already formatted
    };
    const handleAccept = async ()=>{
        if (isProcessing) return;
        setIsProcessing(true);
        playSound('ORDER_UPDATED', order.id);
        // Instant state change
        acceptOrder(order.id);
        setIsProcessing(false);
    };
    const handlePrint = async ()=>{
        if (isPrinting) return;
        setIsPrinting(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$services$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["printOrder"])(order.id, (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"].getState().orders[id]);
            if (result.status === 'SUCCESS') {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$toast$2f$KDSToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kdsToast"].success(`Receipt printed for #${result.orderNumber}`);
            } else if (result.status === 'ERROR_PRINTER_NOT_READY') {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$toast$2f$KDSToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kdsToast"].printError('Printer not ready. Check connection and retry.');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$toast$2f$KDSToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kdsToast"].error(result.message);
            }
        } finally{
            setIsPrinting(false);
        }
    };
    const groupItems = (items)=>{
        const groups = {};
        items.forEach((item)=>{
            const key = `${item.name}-${item.variant || ''}-${JSON.stringify(item.modifiers.sort())}`;
            if (groups[key]) {
                groups[key].quantity = (groups[key].quantity || 1) + (item.quantity || 1);
            } else {
                groups[key] = {
                    ...item,
                    quantity: item.quantity || 1
                };
            }
        });
        return Object.values(groups);
    };
    const groupedItems = groupItems(order.items);
    const getActionButton = ()=>{
        const isReady = order.stage === 'READY';
        const isAccepted = order.stage === 'ACCEPTED';
        // Essential Buttons only: Bump/Advance, Void, Delay
        if (variant === 'expo') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 w-full justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            // Placeholder for print label
                            alert(`Printing label for #${order.orderNumber}`);
                        },
                        className: "flex-1 min-h-[var(--kds-touch-target)] bg-slate-700 text-white rounded-none font-black uppercase tracking-widest text-lg flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                lineNumber: 194,
                                columnNumber: 25
                            }, this),
                            "LABEL"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                        lineNumber: 187,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            navigator.clipboard.writeText(`https://track.zyappy.com/${order.trackingToken}`);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$toast$2f$KDSToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kdsToast"].success('Tracking Link Copied');
                        },
                        className: "flex-1 min-h-[var(--kds-touch-target)] bg-slate-800 text-slate-400 rounded-none font-black uppercase tracking-widest text-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-none",
                        children: "TRACKING"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                        lineNumber: 197,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: isProcessing || order.isCompleting,
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleAdvance();
                        },
                        className: "flex-[2] min-h-[var(--kds-touch-target)] bg-white text-black rounded-none font-black uppercase tracking-tighter text-2xl flex items-center justify-center gap-2 active:scale-100 disabled:opacity-50",
                        children: isProcessing ? 'BUMPING...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                    lineNumber: 217,
                                    columnNumber: 33
                                }, this),
                                "BUMP EXPO"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                        lineNumber: 207,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                lineNumber: 186,
                columnNumber: 17
            }, this);
        }
        // Standard variant
        let mainActionLabel = 'NEXT';
        let mainActionColor = 'bg-[var(--kds-status-prep)] text-black';
        let mainActionHandler = handleAdvance;
        if (isAccepted) {
            mainActionLabel = 'START';
            mainActionColor = 'bg-[var(--kds-status-new)] text-white';
            mainActionHandler = handleAccept;
        } else if (order.stage === 'PREPARATION') {
            mainActionLabel = 'PREP DONE';
            mainActionColor = 'bg-[var(--kds-status-prep)] text-black';
        } else if (order.stage === 'CUTTING') {
            mainActionLabel = 'PACK DONE';
            mainActionColor = 'bg-amber-600 text-white';
        } else if (order.stage === 'READY') {
            mainActionLabel = 'BUMP';
            mainActionColor = 'bg-white text-black';
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3 w-full justify-end",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canDelayOrder"])(role) && !isReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    disabled: isDelayThrottled || order.isCompleting,
                    onClick: (e)=>{
                        e.stopPropagation();
                        setIsDelayModalOpen(true);
                    },
                    className: "flex-none w-[100px] min-h-[var(--kds-touch-target)] bg-slate-800 border-2 border-[var(--kds-status-late)] text-[var(--kds-status-late)] flex flex-col items-center justify-center font-black rounded-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                            lineNumber: 257,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[12px]",
                            children: "DELAY"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                            lineNumber: 258,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                    lineNumber: 249,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        toggleHold(order.id);
                    },
                    className: `flex-none w-[100px] min-h-[var(--kds-touch-target)] flex flex-col items-center justify-center font-black rounded-none transition-none ${order.isHeld ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-300'}`,
                    children: [
                        order.isHeld ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                            lineNumber: 269,
                            columnNumber: 37
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                            lineNumber: 269,
                            columnNumber: 58
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[12px]",
                            children: order.isHeld ? 'RESUME' : 'HOLD'
                        }, void 0, false, {
                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                            lineNumber: 270,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                    lineNumber: 262,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    disabled: isProcessing || order.isCompleting,
                    onClick: (e)=>{
                        e.stopPropagation();
                        mainActionHandler();
                    },
                    className: `flex-1 min-h-[var(--kds-touch-target)] font-black uppercase tracking-tighter text-2xl flex items-center justify-center gap-3 active:scale-100 disabled:opacity-50 rounded-none ${mainActionColor}`,
                    children: isProcessing ? '...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full border-4 border-current flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl",
                                    children: "➔"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                    lineNumber: 284,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                lineNumber: 283,
                                columnNumber: 29
                            }, this),
                            mainActionLabel
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                    lineNumber: 273,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
            lineNumber: 247,
            columnNumber: 13
        }, this);
    };
    const getFulfillmentStyle = ()=>{
        if (variant === 'expo') return 'bg-slate-900 border-slate-700';
        return 'bg-slate-800 border-slate-700';
    };
    // Long Press Simulation (Recall)
    const longPressTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleLongPressStart = ()=>{
        longPressTimer.current = setTimeout(()=>{
            recallOrder();
            playSound('ORDER_UPDATED');
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$toast$2f$KDSToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kdsToast"].success('Last order recalled');
        }, 800); // 800ms for recall
    };
    const handleLongPressEnd = ()=>{
        if (longPressTimer.current) clearTimeout(longPressTimer.current);
    };
    const isUberDirect = order.order_source === 'UBER_DIRECT';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseDown: handleLongPressStart,
                onMouseUp: handleLongPressEnd,
                onMouseLeave: handleLongPressEnd,
                onTouchStart: handleLongPressStart,
                onTouchEnd: handleLongPressEnd,
                onClick: (e)=>{
                    // Avoid double-firing if a button was clicked
                    if (e.defaultPrevented) return;
                    handleAdvance();
                },
                className: `kds-ticket bg-[var(--kds-bg-card)] rounded-none flex flex-col overflow-hidden transition-none cursor-pointer select-none active:brightness-125 ${getBorderState()} ${isProcessing ? 'opacity-50' : ''} ${variant === 'expo' ? 'min-h-[500px] w-full max-w-[600px] mx-auto' : 'min-h-[400px]'} ${isUberDirect ? 'border-l-[10px] border-l-black' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 flex justify-between items-start ${variant === 'expo' ? 'bg-[#000] text-white' : 'bg-[var(--kds-bg-surface)]'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `font-black tracking-tighter leading-none font-[var(--kds-font-main)] text-[48px] ${variant === 'expo' ? 'text-white' : 'text-white'}`,
                                        children: [
                                            "#",
                                            order.orderNumber
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 333,
                                        columnNumber: 25
                                    }, this),
                                    order.customerName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 mt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500 text-[10px] font-black uppercase tracking-widest",
                                                children: "CUSTOMER:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 338,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[18px] font-black uppercase tracking-tight text-[#1FA4A9]",
                                                children: order.customerName
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 339,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 337,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-1",
                                        children: [
                                            order.isHeld && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-amber-500 text-black text-[12px] font-black px-2 py-0.5 rounded-none uppercase",
                                                children: "PAUSED"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 346,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-black text-slate-500 uppercase tracking-widest",
                                                        children: "SOURCE:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$ticket$2f$SourceBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SourceBadge"], {
                                                        source: order.order_source
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 350,
                                                columnNumber: 29
                                            }, this),
                                            order.isDelayed && !order.isCompleting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[var(--kds-status-warning)] text-black text-[10px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        size: 10
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 37
                                                    }, this),
                                                    "Delayed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 355,
                                                columnNumber: 33
                                            }, this),
                                            slaState === 'OVERDUE' && !order.isCompleting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[var(--kds-status-late)] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase",
                                                children: "Overdue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 361,
                                                columnNumber: 33
                                            }, this),
                                            order.isCompleting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[var(--kds-status-complete)] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase",
                                                children: "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 366,
                                                columnNumber: 33
                                            }, this),
                                            variant !== 'expo' && order.stage !== 'READY' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canDelayOrder"])(role) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: isDelayThrottled || order.isCompleting,
                                                        onClick: ()=>setIsDelayModalOpen(true),
                                                        className: "bg-[var(--kds-status-late)]/10 text-[9px] font-black uppercase text-[var(--kds-status-late)] hover:bg-[var(--kds-status-late)]/20 px-2 py-0.5 rounded transition-all disabled:opacity-50",
                                                        children: "Delay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 41
                                                    }, this),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canCancelOrder"])(role) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleCancel,
                                                        className: "text-[10px] font-black uppercase text-slate-400 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-all",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 371,
                                                columnNumber: 33
                                            }, this),
                                            isMessagingActive && order.stage !== 'READY' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsMessagingModalOpen(true),
                                                className: "text-[10px] font-black uppercase text-[#1FA4A9] hover:bg-[#1FA4A9]/5 px-2 py-1 rounded transition-all",
                                                children: "Send Message"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 392,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 344,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                lineNumber: 332,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs font-bold uppercase tracking-tighter ${variant === 'expo' ? 'text-slate-400' : 'text-slate-400'}`,
                                    children: [
                                        "CREATED: ",
                                        formatCreatedAt(order.createdAt)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                    lineNumber: 402,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                lineNumber: 401,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                        lineNumber: 331,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `px-3 py-1.5 flex justify-between items-center border-y border-[var(--kds-border)] ${getFulfillmentStyle()} bg-opacity-10`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-black text-slate-500 uppercase tracking-widest shrink-0",
                                        children: "FULFILLMENT:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 411,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] font-black uppercase tracking-widest text-white",
                                        children: order.fulfillment_type === 'UBER_DIRECT_DELIVERY' ? 'Uber Direct Delivery' : order.fulfillment_type.replace(/_/g, ' ')
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 412,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                lineNumber: 410,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-2 py-0.5 text-white text-[9px] font-black rounded uppercase tracking-widest bg-[var(--kds-bg-surface)] border border-[var(--kds-border)]`,
                                children: order.stage
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                lineNumber: 418,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                        lineNumber: 409,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 flex-1 overflow-y-auto max-h-[400px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                groupedItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-slate-50/5 last:border-0 pb-3 last:pb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-[var(--kds-font-main)] text-[26px] font-black leading-none mt-1 min-w-[1.5em] text-center ${item.quantity > 1 ? 'bg-amber-500 text-black px-1 rounded' : 'text-white'}`,
                                                        children: [
                                                            item.quantity,
                                                            "x"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-[var(--kds-font-main)] text-[26px] font-black text-white leading-tight uppercase",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 45
                                                                }, this),
                                                                item.variant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-bold text-[var(--kds-text-secondary)] italic uppercase",
                                                                    children: item.variant
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 428,
                                                columnNumber: 33
                                            }, this),
                                            item.modifiers.length > 0 && (()=>{
                                                const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsModifierRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAllModifiers"])(item.modifiers);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-8 mt-2 space-y-1",
                                                    children: resolved.map((mod, modIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 flex-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-sm font-black leading-none ${mod.hasDataError ? 'text-rose-500' : 'text-blue-500'}`,
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 53
                                                                }, this),
                                                                mod.resolvedQuantity !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-black bg-slate-800 text-white px-1.5 py-0.5 rounded leading-none tabular-nums",
                                                                    children: [
                                                                        "×",
                                                                        mod.resolvedQuantity
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `flex-1 font-[var(--kds-font-main)] text-[18px] font-normal leading-tight uppercase ${mod.hasDataError ? 'text-rose-400' : 'text-[var(--kds-text-secondary)]'}`,
                                                                    children: mod.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 53
                                                                }, this),
                                                                mod.resolvedPlacement !== null && !mod.hasDataError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] px-1.5 py-0.5 bg-slate-200 text-slate-600 rounded uppercase font-black tracking-tighter shrink-0",
                                                                    children: mod.resolvedPlacement
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                                    lineNumber: 473,
                                                                    columnNumber: 57
                                                                }, this),
                                                                mod.hasDataError && mod.dataErrorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] px-1.5 py-0.5 bg-rose-100 text-rose-700 border border-rose-200 rounded font-black uppercase tracking-tighter shrink-0",
                                                                    title: mod.dataErrorMessage,
                                                                    children: mod.isUnknownGroupType ? '⚠ UNKNOWN TYPE' : '⚠ DATA ERR'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, modIdx, true, {
                                                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 49
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 41
                                                }, this);
                                            })()
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 427,
                                        columnNumber: 29
                                    }, this)),
                                order.allergies && order.allergies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-4 bg-red-600 border-[6px] border-white animate-pulse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl text-white",
                                                children: "⚠️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 499,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-[var(--kds-font-main)] text-[24px] font-black text-white uppercase leading-none",
                                                        children: "ALLERGY ALERT:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-[var(--kds-font-main)] text-[26px] font-black text-white uppercase block mt-1",
                                                        children: order.allergies.join(', ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 500,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 498,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                    lineNumber: 497,
                                    columnNumber: 29
                                }, this),
                                order.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 p-4 bg-red-950/40 border-l-8 border-red-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-[var(--kds-font-main)] text-[var(--kds-font-notes)] font-black text-red-500 uppercase leading-none block",
                                            children: "SPECIAL NOTES:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                            lineNumber: 514,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-[var(--kds-font-main)] text-[var(--kds-font-notes)] font-black text-white uppercase block mt-1",
                                            children: order.notes
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                            lineNumber: 517,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                    lineNumber: 513,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                            lineNumber: 425,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                        lineNumber: 424,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 mt-auto border-t border-[var(--kds-border)] bg-[var(--kds-bg-surface)] flex flex-col gap-2",
                        children: [
                            order.externalTotal !== undefined && order.zyappyCalculatedTotal !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1 flex flex-col gap-1 py-1.5 px-3 bg-white rounded-lg border border-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-black uppercase text-slate-400",
                                                children: "External Charged"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 531,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-black text-slate-900 tracking-tight",
                                                children: [
                                                    "₹",
                                                    order.externalTotal
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 532,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 530,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-black uppercase text-slate-400",
                                                children: "Zyappy Calculated"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 535,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-black text-slate-900 tracking-tight",
                                                        children: [
                                                            "₹",
                                                            order.zyappyCalculatedTotal
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 37
                                                    }, this),
                                                    order.externalTotal !== order.zyappyCalculatedTotal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-amber-500 cursor-help flex items-center justify-center p-0.5",
                                                        title: "Price difference detected",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[12px] leading-none",
                                                            children: "⚠️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 536,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 534,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                lineNumber: 529,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black text-[var(--kds-text-muted)] uppercase tracking-widest",
                                                        children: "ETA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 33
                                                    }, this),
                                                    order.prepTimeMinutes > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9px] font-black text-slate-500 bg-slate-200 px-1.5 py-0.5 rounded leading-none uppercase",
                                                                children: [
                                                                    "Prep: ",
                                                                    order.prepTimeMinutes,
                                                                    " min"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    incrementPrepTime(order.id, 2);
                                                                },
                                                                className: "h-5 px-1 bg-slate-700 text-white text-[9px] font-black rounded hover:bg-slate-600 active:bg-slate-500 transition-none",
                                                                children: "+2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                                lineNumber: 560,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    incrementPrepTime(order.id, 5);
                                                                },
                                                                className: "h-5 px-1 bg-slate-700 text-white text-[9px] font-black rounded hover:bg-slate-600 active:bg-slate-500 transition-none",
                                                                children: "+5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                                lineNumber: 569,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 553,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-black text-white tracking-tight",
                                                children: formatETA(order.estimatedReadyTime)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 581,
                                                columnNumber: 29
                                            }, this),
                                            order.isDelayed && order.delayReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-red-600 italic leading-tight max-w-[150px] truncate",
                                                children: order.delayReason
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                                lineNumber: 585,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 552,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$ticket$2f$TicketTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TicketTimer"], {
                                        createdAt: order.createdAt,
                                        prepTimeMinutes: order.prepTimeMinutes,
                                        stageStartedAt: order.stageStartedAt
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 590,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                lineNumber: 551,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: getActionButton()
                            }, void 0, false, {
                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                lineNumber: 597,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: `print-order-${order.id}`,
                                onClick: handlePrint,
                                disabled: isPrinting,
                                className: "w-full flex items-center justify-center gap-2 h-[44px] rounded-xl bg-white border border-slate-200 text-slate-600 text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50",
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$services$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrinterReady"])() ? 'Print receipt' : 'Printer not connected',
                                children: [
                                    isPrinting ? '...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 610,
                                        columnNumber: 29
                                    }, this),
                                    isPrinting ? 'Printing...' : 'Print Receipt',
                                    !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$services$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrinterReady"])() && !isPrinting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse",
                                        title: "Printer not connected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                        lineNumber: 615,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                                lineNumber: 602,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                        lineNumber: 526,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                lineNumber: 317,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$modals$2f$DelayOrderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DelayOrderModal"], {
                isOpen: isDelayModalOpen,
                onClose: ()=>setIsDelayModalOpen(false),
                onConfirm: handleDelayConfirm,
                orderNumber: order.orderNumber
            }, void 0, false, {
                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                lineNumber: 624,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$modals$2f$CustomerMessagingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomerMessagingModal"], {
                isOpen: isMessagingModalOpen,
                order: order,
                onClose: ()=>setIsMessagingModalOpen(false),
                onSend: (channel, message)=>{
                    if (isMessagingActive) {
                        sendCustomerMessage(order.id, channel, message);
                    }
                },
                role: role
            }, void 0, false, {
                fileName: "[project]/src/modules/kds/components/ticket/OrderTicket.tsx",
                lineNumber: 631,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(OrderTicket, "qkjlF9A+tK9CxTzutOBTaXogUiU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$sound$2f$useKDSSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSSound"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = OrderTicket;
var _c;
__turbopack_context__.k.register(_c, "OrderTicket");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/kds/components/board/KDSColumn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KDSColumn",
    ()=>KDSColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react/shallow.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/store/kdsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$ticket$2f$OrderTicket$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/ticket/OrderTicket.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$useFilterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/store/useFilterStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/utils/slaUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const KDSColumn = ({ title, stage })=>{
    _s();
    const { fulfillment, source, station } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$useFilterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterStore"])();
    // Each column subscribes ONLY to filtered orders that match its stage and station.
    const stageOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "KDSColumn.useKDSStore[stageOrders]": (state)=>Object.values(state.orders).filter({
                "KDSColumn.useKDSStore[stageOrders]": (o)=>{
                    const stageMatch = o.stage === stage;
                    const fulfillmentMatch = fulfillment === 'ALL' || o.fulfillment_type === fulfillment;
                    const sourceMatch = source === 'ALL' || o.order_source === source;
                    // Station Filtering Logic (Industry Standards)
                    let stationMatch = true;
                    if (station === 'MAKE_LINE') stationMatch = o.stage === 'ACCEPTED' || o.stage === 'PREPARATION';
                    if (station === 'OVEN') stationMatch = o.stage === 'PREPARATION'; // Ready for oven
                    if (station === 'CUT_BOX') stationMatch = o.stage === 'CUTTING';
                    if (station === 'EXPO') stationMatch = true; // Expo sees everything
                    return stageMatch && fulfillmentMatch && sourceMatch && stationMatch;
                }
            }["KDSColumn.useKDSStore[stageOrders]"]).sort({
                "KDSColumn.useKDSStore[stageOrders]": (a, b)=>{
                    // 1. Priority Override (Manual Manager Flag)
                    if (a.isPriority && !b.isPriority) return -1;
                    if (!a.isPriority && b.isPriority) return 1;
                    // 2. SLA State (Late/Warning jump to top)
                    const aState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSLAState"])(a.createdAt, a.prepTimeMinutes);
                    const bState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSLAState"])(b.createdAt, b.prepTimeMinutes);
                    const statePriority = {
                        'OVERDUE': 0,
                        'WARNING': 1,
                        'ON_TIME': 2
                    };
                    if (statePriority[aState] !== statePriority[bState]) {
                        return statePriority[aState] - statePriority[bState];
                    }
                    // 3. Fulfillment Type (Delivery > Dine-in/Takeaway)
                    const isADelivery = a.fulfillment_type.includes('DELIVERY');
                    const isBDelivery = b.fulfillment_type.includes('DELIVERY');
                    if (isADelivery && !isBDelivery) return -1;
                    if (!isADelivery && isBDelivery) return 1;
                    // 4. SLA Tension (Delivery within 2m of breach jumps up)
                    const aRemaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemainingSeconds"])(a.createdAt, a.prepTimeMinutes);
                    const bRemaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$slaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemainingSeconds"])(b.createdAt, b.prepTimeMinutes);
                    if (isADelivery && aRemaining < 120 && isBDelivery && bRemaining >= 120) return -1;
                    if (isBDelivery && bRemaining < 120 && isADelivery && aRemaining >= 120) return 1;
                    // 5. Batch Cooking Optimization (Hidden grouping)
                    // If items names are similar, they stay together to help the chef batch them
                    const aItems = a.items.map({
                        "KDSColumn.useKDSStore[stageOrders].aItems": (i)=>i.name
                    }["KDSColumn.useKDSStore[stageOrders].aItems"]).sort().join('|');
                    const bItems = b.items.map({
                        "KDSColumn.useKDSStore[stageOrders].bItems": (i)=>i.name
                    }["KDSColumn.useKDSStore[stageOrders].bItems"]).sort().join('|');
                    if (aItems < bItems) return -1;
                    if (aItems > bItems) return 1;
                    // 6. Oldest First (Ultimate fallback)
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                }
            }["KDSColumn.useKDSStore[stageOrders]"])
    }["KDSColumn.useKDSStore[stageOrders]"]));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kds-column",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "kds-column-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "kds-column-title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/board/KDSColumn.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "kds-column-count",
                        children: stageOrders.length
                    }, void 0, false, {
                        fileName: "[project]/src/modules/kds/components/board/KDSColumn.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/kds/components/board/KDSColumn.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "kds-column-scroll",
                children: stageOrders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$ticket$2f$OrderTicket$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderTicket"], {
                        order: order
                    }, order.id, false, {
                        fileName: "[project]/src/modules/kds/components/board/KDSColumn.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/modules/kds/components/board/KDSColumn.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/kds/components/board/KDSColumn.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(KDSColumn, "2uf6OUKk+WN8o3jhjaMVOGOTgv8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$useFilterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"]
    ];
});
_c = KDSColumn;
var _c;
__turbopack_context__.k.register(_c, "KDSColumn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/kds/master/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KDSMasterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$KDSHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/KDSHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$board$2f$KDSColumn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/components/board/KDSColumn.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/store/kdsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react/shallow.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/providers/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsModuleFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/kds/utils/kdsModuleFlags.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
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
function KDSMasterPage() {
    _s();
    const { addOrUpdateOrder, autoInitNetworkListener } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"])();
    const { enabledModules } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // We only need to know if there are any orders at all for the empty state.
    const hasOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "KDSMasterPage.useKDSStore[hasOrders]": (state)=>Object.keys(state.orders).length > 0
    }["KDSMasterPage.useKDSStore[hasOrders]"]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KDSMasterPage.useEffect": ()=>{
            autoInitNetworkListener();
        }
    }["KDSMasterPage.useEffect"], [
        autoInitNetworkListener
    ]);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$utils$2f$kdsModuleFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKDSModuleActive"])(enabledModules)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        size: 40,
                        className: "text-red-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kds/master/page.tsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/kds/master/page.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-black text-white uppercase tracking-widest mb-2",
                    children: "KDS Module Inactive"
                }, void 0, false, {
                    fileName: "[project]/src/app/kds/master/page.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400 max-w-md font-medium",
                    children: [
                        "This feature requires ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white font-bold",
                            children: "Module 1A (KDS)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/kds/master/page.tsx",
                            lineNumber: 33,
                            columnNumber: 43
                        }, this),
                        " to be active. Please contact your system administrator or upgrade your plan."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/kds/master/page.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/kds/master/page.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KDSMasterPage.useEffect": ()=>{
            if (!hasOrders) {
                // Dominos Style Multi-Item Order
                addOrUpdateOrder({
                    id: 'm-1',
                    orderNumber: '1023',
                    order_source: 'ONLINE',
                    fulfillment_type: 'STORE_DELIVERY',
                    createdAt: new Date(Date.now() - 500000).toISOString(),
                    updatedAt: new Date().toISOString(),
                    stage: 'ACCEPTED',
                    prepTimeMinutes: 12,
                    estimatedReadyTime: '12:00',
                    isDelayed: false,
                    trackingToken: '550e8400-e29b-41d4-a716-446655440000',
                    items: [
                        {
                            name: 'Meat Feast Pizza',
                            variant: 'Large',
                            quantity: 2,
                            modifiers: []
                        },
                        {
                            name: 'Garlic Pizza Bread',
                            quantity: 1,
                            modifiers: []
                        }
                    ],
                    notes: 'GIVE EXTRA KETCHUP'
                });
                // Urgent Store Order
                addOrUpdateOrder({
                    id: 'm-2',
                    orderNumber: '1024',
                    order_source: 'POS',
                    fulfillment_type: 'PICKUP',
                    createdAt: new Date(Date.now() - 200000).toISOString(),
                    updatedAt: new Date().toISOString(),
                    stage: 'PREPARATION',
                    prepTimeMinutes: 8,
                    estimatedReadyTime: '12:15',
                    isDelayed: false,
                    isPriority: true,
                    trackingToken: '3f8e4b7a-1234-4a5b-bcde-1234567890ab',
                    items: [
                        {
                            name: 'Veg Supreme Pizza',
                            variant: 'Medium',
                            quantity: 1,
                            modifiers: []
                        },
                        {
                            name: 'Potato Wedges',
                            quantity: 3,
                            modifiers: []
                        }
                    ]
                });
                // Complex Custom Order
                addOrUpdateOrder({
                    id: 'm-3',
                    orderNumber: '1025',
                    order_source: 'KIOSK',
                    fulfillment_type: 'PICKUP',
                    createdAt: new Date(Date.now() - 100000).toISOString(),
                    updatedAt: new Date().toISOString(),
                    stage: 'CUTTING',
                    prepTimeMinutes: 15,
                    estimatedReadyTime: '12:20',
                    isDelayed: false,
                    trackingToken: '9d8c2b1a-5678-4c9d-8e7f-abcdef123456',
                    items: [
                        {
                            name: 'Pepperoni Passion',
                            variant: 'Personal',
                            quantity: 1,
                            modifiers: [
                                {
                                    name: 'Double Cheese',
                                    groupType: 'CHOICE_ONE',
                                    quantity: 2
                                }
                            ]
                        }
                    ]
                });
            }
        }
    }["KDSMasterPage.useEffect"], [
        hasOrders,
        addOrUpdateOrder
    ]);
    const stages = [
        {
            id: 'ACCEPTED',
            title: 'Accepted'
        },
        {
            id: 'PREPARATION',
            title: 'Preparation'
        },
        {
            id: 'CUTTING',
            title: 'Cutting'
        },
        {
            id: 'READY',
            title: 'Ready'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen overflow-hidden bg-slate-900 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$KDSHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KDSHeader"], {}, void 0, false, {
                fileName: "[project]/src/app/kds/master/page.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "kds-board",
                children: [
                    stages.map((stage)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$components$2f$board$2f$KDSColumn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KDSColumn"], {
                            title: stage.title,
                            stage: stage.id
                        }, stage.id, false, {
                            fileName: "[project]/src/app/kds/master/page.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this)),
                    !hasOrders && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-slate-500 font-black uppercase tracking-[0.2em] animate-pulse",
                            children: "Waiting for orders..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/kds/master/page.tsx",
                            lineNumber: 99,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/kds/master/page.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kds/master/page.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/kds/master/page.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_s(KDSMasterPage, "16FLEfyHhiWAXRjEDxEGOWaUMJs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$kds$2f$store$2f$kdsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKDSStore"]
    ];
});
_c = KDSMasterPage;
var _c;
__turbopack_context__.k.register(_c, "KDSMasterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_22909cb6._.js.map