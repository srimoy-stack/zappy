(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/pos/pages/TableSelectionPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableSelectionPage",
    ()=>TableSelectionPage,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/context/POSContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-client] (ecmascript) <export default as ArrowRightLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$combine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Combine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/combine.js [app-client] (ecmascript) <export default as Combine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$armchair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Armchair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/armchair.js [app-client] (ecmascript) <export default as Armchair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/mock/posData.ts [app-client] (ecmascript)");
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
const TableSelectionPage = ()=>{
    _s();
    const { session, setTable, mergeTables, unmergeTable, tables } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePOS"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // UI State
    const [activeAreaId, setActiveAreaId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('AREA1');
    const [selectedTableId, setSelectedTableId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mergeMode, setMergeMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedForMerge, setSelectedForMerge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previewTable, setPreviewTable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const areas = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$mock$2f$posData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPOSAreas"];
    // Use tables directly from context, filtered by area
    const currentTables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableSelectionPage.useMemo[currentTables]": ()=>tables.filter({
                "TableSelectionPage.useMemo[currentTables]": (t)=>t.areaId === activeAreaId
            }["TableSelectionPage.useMemo[currentTables]"])
    }["TableSelectionPage.useMemo[currentTables]"], [
        tables,
        activeAreaId
    ]);
    const selectedTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableSelectionPage.useMemo[selectedTable]": ()=>tables.find({
                "TableSelectionPage.useMemo[selectedTable]": (t)=>t.id === selectedTableId
            }["TableSelectionPage.useMemo[selectedTable]"])
    }["TableSelectionPage.useMemo[selectedTable]"], [
        tables,
        selectedTableId
    ]);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const redirectPath = searchParams.get('redirect');
    const openModal = searchParams.get('openModal');
    // Handle initial state if a table is already active in session
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableSelectionPage.useEffect": ()=>{
            if (session?.activeTable) {
                setSelectedTableId(session.activeTable.id);
                setActiveAreaId(session.activeTable.areaId);
            }
        }
    }["TableSelectionPage.useEffect"], [
        session?.activeTable
    ]);
    const handleConfirm = ()=>{
        if (selectedTable && selectedTable.status === 'FREE') {
            setTable(selectedTable);
        }
        if (redirectPath) {
            const finalPath = openModal ? `${redirectPath}?openModal=true` : redirectPath;
            router.push(finalPath);
        } else {
            router.push('/pos/menu');
        }
    };
    const handleTableClick = (table)=>{
        if (mergeMode) {
            // Prevent cross-zone merges for simplicity in rush mode
            if (selectedForMerge.length > 0) {
                const firstTable = tables.find((t)=>t.id === selectedForMerge[0]);
                if (firstTable && firstTable.areaId !== table.areaId) {
                    // Ideally show a toast here, for now just return
                    return;
                }
            }
            if (!selectedForMerge.includes(table.id)) {
                setSelectedForMerge((prev)=>[
                        ...prev,
                        table.id
                    ]);
            } else {
                setSelectedForMerge((prev)=>prev.filter((id)=>id !== table.id));
            }
            return;
        }
        if (table.status === 'OCCUPIED' || table.status === 'RESERVED') {
            setPreviewTable(table);
            setSelectedTableId(table.id);
            return;
        }
        // Quick toggle behavior
        if (table.id === selectedTableId) {
            // Deselect if already selected
            setSelectedTableId(null);
            setPreviewTable(null);
        } else {
            // Select new table and clear any previous preview
            setSelectedTableId(table.id);
            setPreviewTable(null);
        }
    };
    // Auto-clear selection when switching zones to prevent confusion
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableSelectionPage.useEffect": ()=>{
            setSelectedTableId(null);
            setPreviewTable(null);
            // We keep merge selection to allow cross-zone if really needed, but generally it's better to clear
            // keeping it simple for rush:
            if (!mergeMode) setSelectedForMerge([]);
        }
    }["TableSelectionPage.useEffect"], [
        activeAreaId,
        mergeMode
    ]);
    const getTableColor = (status, isSelected)=>{
        if (isSelected) return '#31A4A9'; // Selected teal
        switch(status){
            case 'FREE':
                return '#009F4F'; // Vibrant Green
            case 'OCCUPIED':
                return '#EF4444'; // Red
            case 'RESERVED':
                return '#F59E0B'; // Amber
            case 'CLEANING':
                return '#94A3B8'; // Slate
            default:
                return '#009F4F';
        }
    };
    // Calculate dynamic info for bottom bar
    const mergeSelectionCount = selectedForMerge.length;
    const mergeTotalSeats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableSelectionPage.useMemo[mergeTotalSeats]": ()=>{
            return tables.filter({
                "TableSelectionPage.useMemo[mergeTotalSeats]": (t)=>selectedForMerge.includes(t.id)
            }["TableSelectionPage.useMemo[mergeTotalSeats]"]).reduce({
                "TableSelectionPage.useMemo[mergeTotalSeats]": (acc, curr)=>acc + curr.seats
            }["TableSelectionPage.useMemo[mergeTotalSeats]"], 0);
        }
    }["TableSelectionPage.useMemo[mergeTotalSeats]"], [
        tables,
        selectedForMerge
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: '#F8FAFC',
            color: '#1E293B',
            overflow: 'hidden'
        },
        className: "jsx-2130c8f34bfe2398",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: '70px',
                    background: '#FFFFFF',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 24px',
                    justifyContent: 'space-between',
                    flexShrink: 0
                },
                className: "jsx-2130c8f34bfe2398",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px'
                        },
                        className: "jsx-2130c8f34bfe2398",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/pos/menu'),
                                style: {
                                    height: '40px',
                                    padding: '0 16px',
                                    borderRadius: '10px',
                                    background: '#FFFFFF',
                                    border: '1px solid #E2E8F0',
                                    color: '#64748B',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    fontSize: '13px',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                                },
                                className: "jsx-2130c8f34bfe2398" + " " + "hover-scale",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 171,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "BACK"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-2130c8f34bfe2398",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: '20px',
                                            fontWeight: 800,
                                            margin: 0,
                                            color: '#0F172A',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        },
                                        className: "jsx-2130c8f34bfe2398",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
                                                size: 20,
                                                className: "text-sky-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 176,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Live Table Status"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 175,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '12px',
                                            color: '#64748B',
                                            margin: '2px 0 0 0',
                                            fontWeight: 500
                                        },
                                        className: "jsx-2130c8f34bfe2398",
                                        children: "Manage seating, reservations, and merges"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 178,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                lineNumber: 174,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '24px',
                            alignItems: 'center'
                        },
                        className: "jsx-2130c8f34bfe2398",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '16px',
                                background: '#F8FAFC',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                border: '1px solid #E2E8F0'
                            },
                            className: "jsx-2130c8f34bfe2398",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    },
                                    className: "jsx-2130c8f34bfe2398",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '3px',
                                                background: '#009F4F'
                                            },
                                            className: "jsx-2130c8f34bfe2398"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 187,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: '#475569'
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: "Available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 188,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                    lineNumber: 186,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    },
                                    className: "jsx-2130c8f34bfe2398",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '3px',
                                                background: '#EF4444'
                                            },
                                            className: "jsx-2130c8f34bfe2398"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 191,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: '#475569'
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: "Occupied"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 192,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    },
                                    className: "jsx-2130c8f34bfe2398",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '3px',
                                                background: '#F59E0B'
                                            },
                                            className: "jsx-2130c8f34bfe2398"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 195,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: '#475569'
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: "Reserved"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 196,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                    lineNumber: 194,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                            lineNumber: 185,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: 'flex',
                    overflow: 'hidden'
                },
                className: "jsx-2130c8f34bfe2398",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            background: '#FFFFFF',
                            borderRight: '1px solid #E2E8F0',
                            flexShrink: 0
                        },
                        className: "jsx-2130c8f34bfe2398",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '20px',
                                    fontWeight: 800,
                                    color: '#94A3B8',
                                    fontSize: '12px',
                                    letterSpacing: '1px'
                                },
                                className: "jsx-2130c8f34bfe2398",
                                children: "ZONES"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                lineNumber: 214,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            areas.map((area)=>{
                                const isActive = activeAreaId === area.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveAreaId(area.id),
                                    style: {
                                        width: '100%',
                                        padding: '16px 24px',
                                        border: 'none',
                                        background: isActive ? '#F0F9FF' : 'transparent',
                                        color: isActive ? '#0284C7' : '#64748B',
                                        fontSize: '15px',
                                        fontWeight: isActive ? 700 : 500,
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        borderRight: isActive ? '3px solid #0284C7' : '3px solid transparent',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    className: "jsx-2130c8f34bfe2398",
                                    children: [
                                        area.name,
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 239,
                                            columnNumber: 46
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, area.id, true, {
                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                    lineNumber: 218,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            position: 'relative',
                            background: '#F1F5F9',
                            overflow: 'auto',
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        className: "jsx-2130c8f34bfe2398",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                minHeight: '600px',
                                background: 'white',
                                borderRadius: '16px',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
                                border: '1px solid #E2E8F0'
                            },
                            className: "jsx-2130c8f34bfe2398",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    minHeight: '600px'
                                },
                                className: "jsx-2130c8f34bfe2398",
                                children: currentTables.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        color: '#94A3B8'
                                    },
                                    className: "jsx-2130c8f34bfe2398",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: '#F8FAFC',
                                                padding: '24px',
                                                borderRadius: '50%',
                                                marginBottom: '16px'
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 48
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 269,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 268,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontWeight: 700,
                                                fontSize: '18px',
                                                color: '#475569'
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: "No tables in this zone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 271,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '14px'
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: "Please select a different zone or configure tables."
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 272,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                    lineNumber: 267,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)) : currentTables.map((table)=>{
                                    const isSelected = selectedTableId === table.id || selectedForMerge.includes(table.id);
                                    // Premium Color Mapping
                                    const statusTheme = {
                                        FREE: {
                                            bg: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                                            border: '#059669',
                                            glow: 'rgba(16, 185, 129, 0.25)'
                                        },
                                        OCCUPIED: {
                                            bg: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
                                            border: '#E11D48',
                                            glow: 'rgba(244, 63, 94, 0.25)'
                                        },
                                        RESERVED: {
                                            bg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                                            border: '#D97706',
                                            glow: 'rgba(245, 158, 11, 0.25)'
                                        }
                                    }[table.status] || {
                                        bg: 'linear-gradient(135deg, #94A3B8 0%, #64748B 100%)',
                                        border: '#64748B',
                                        glow: 'rgba(148, 163, 184, 0.25)'
                                    };
                                    // Dimensions
                                    const isPercent = (table.width || 0) < 50;
                                    const widthVal = isPercent ? `${table.width}%` : `${table.width || 90}px`;
                                    const heightVal = isPercent ? `${table.height}%` : `${table.height || 90}px`;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleTableClick(table),
                                        onDoubleClick: ()=>{
                                            if (table.status === 'FREE') {
                                                setTable(table);
                                                router.push('/pos/menu');
                                            }
                                        },
                                        style: {
                                            position: 'absolute',
                                            left: `${table.x}%`,
                                            top: `${table.y}%`,
                                            width: widthVal,
                                            height: heightVal,
                                            background: isSelected ? 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)' : statusTheme.bg,
                                            borderRadius: table.shape === 'circle' ? '50%' : '20px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                            transform: isSelected ? 'scale(1.1) translateY(-8px)' : 'scale(1)',
                                            zIndex: isSelected ? 50 : 10,
                                            boxShadow: isSelected ? `0 25px 35px -5px rgba(2, 132, 199, 0.4), 0 0 0 4px #FFFFFF, 0 0 0 8px #0284C7` : `0 10px 15px -3px ${statusTheme.glow}, 0 4px 6px -4px ${statusTheme.glow}`,
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            overflow: 'hidden',
                                            padding: '12px',
                                            textAlign: 'center'
                                        },
                                        className: "jsx-2130c8f34bfe2398" + " " + "active-pop",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '45%',
                                                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
                                                    pointerEvents: 'none'
                                                },
                                                className: "jsx-2130c8f34bfe2398"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 343,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: isPercent ? '1.4vw' : '17px',
                                                    fontWeight: 900,
                                                    color: '#FFFFFF',
                                                    lineHeight: 1.1,
                                                    textShadow: '0 2px 4px rgba(0,0,0,0.15)',
                                                    maxWidth: '100%',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: table.name.replace('Table ', '')
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 353,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: isPercent ? '0.9vw' : '11px',
                                                    fontWeight: 700,
                                                    color: '#FFFFFF',
                                                    opacity: 0.9,
                                                    marginTop: '4px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em'
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: [
                                                    table.seats,
                                                    " PAX"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 367,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            table.status === 'OCCUPIED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: '8px',
                                                    right: '8px',
                                                    background: 'rgba(0,0,0,0.25)',
                                                    backdropFilter: 'blur(6px)',
                                                    color: '#FFFFFF',
                                                    borderRadius: '100px',
                                                    padding: '2px 8px',
                                                    fontSize: '10px',
                                                    fontWeight: 900,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px',
                                                    border: '1px solid rgba(255,255,255,0.2)'
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                        size: 10,
                                                        strokeWidth: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    table.durationMinutes || 0,
                                                    "m"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 381,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isSelected && mergeMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#FFFFFF',
                                                    color: '#0284C7',
                                                    borderRadius: '50%',
                                                    padding: '6px',
                                                    marginTop: '8px',
                                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 14,
                                                    strokeWidth: 4
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 404,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, table.id, true, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 307,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                lineNumber: 265,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                            lineNumber: 255,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                        lineNumber: 246,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    previewTable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '350px',
                            background: '#FFFFFF',
                            borderLeft: '1px solid #E2E8F0',
                            display: 'flex',
                            flexDirection: 'column',
                            flexShrink: 0,
                            zIndex: 40
                        },
                        className: "jsx-2130c8f34bfe2398",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px',
                                    borderBottom: '1px solid #F1F5F9',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                className: "jsx-2130c8f34bfe2398",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '20px',
                                            fontWeight: 800,
                                            color: '#0F172A',
                                            margin: 0
                                        },
                                        className: "jsx-2130c8f34bfe2398",
                                        children: "Table Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 435,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPreviewTable(null),
                                        style: {
                                            background: '#F1F5F9',
                                            border: 'none',
                                            color: '#64748B',
                                            borderRadius: '8px',
                                            width: '32px',
                                            height: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        },
                                        className: "jsx-2130c8f34bfe2398",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 437,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 436,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                lineNumber: 434,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px',
                                    overflowY: 'auto',
                                    flex: 1
                                },
                                className: "jsx-2130c8f34bfe2398",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '16px',
                                            marginBottom: '32px'
                                        },
                                        className: "jsx-2130c8f34bfe2398",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '64px',
                                                    height: '64px',
                                                    borderRadius: '16px',
                                                    background: '#FEF2F2',
                                                    color: '#EF4444',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '24px',
                                                    fontWeight: 800
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: previewTable.name.replace('Table ', 'T')
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 443,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-2130c8f34bfe2398",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '22px',
                                                            fontWeight: 800,
                                                            margin: 0,
                                                            color: '#0F172A'
                                                        },
                                                        className: "jsx-2130c8f34bfe2398",
                                                        children: previewTable.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '6px',
                                                            marginTop: '4px'
                                                        },
                                                        className: "jsx-2130c8f34bfe2398",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '8px',
                                                                    height: '8px',
                                                                    borderRadius: '50%',
                                                                    background: '#EF4444'
                                                                },
                                                                className: "jsx-2130c8f34bfe2398"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#EF4444',
                                                                    fontWeight: 700,
                                                                    fontSize: '14px'
                                                                },
                                                                className: "jsx-2130c8f34bfe2398",
                                                                children: "OCCUPIED"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 451,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 442,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '16px',
                                            marginBottom: '32px'
                                        },
                                        className: "jsx-2130c8f34bfe2398",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#F8FAFC',
                                                    padding: '16px',
                                                    borderRadius: '12px',
                                                    border: '1px solid #E2E8F0'
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '11px',
                                                            color: '#64748B',
                                                            fontWeight: 700,
                                                            textTransform: 'uppercase',
                                                            margin: 0
                                                        },
                                                        className: "jsx-2130c8f34bfe2398",
                                                        children: "Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            marginTop: '4px'
                                                        },
                                                        className: "jsx-2130c8f34bfe2398",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                                size: 18,
                                                                className: "text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '18px',
                                                                    fontWeight: 800,
                                                                    color: '#0F172A'
                                                                },
                                                                className: "jsx-2130c8f34bfe2398",
                                                                children: [
                                                                    previewTable.durationMinutes || 0,
                                                                    "m"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 461,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#F8FAFC',
                                                    padding: '16px',
                                                    borderRadius: '12px',
                                                    border: '1px solid #E2E8F0'
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '11px',
                                                            color: '#64748B',
                                                            fontWeight: 700,
                                                            textTransform: 'uppercase',
                                                            margin: 0
                                                        },
                                                        className: "jsx-2130c8f34bfe2398",
                                                        children: "Guests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            marginTop: '4px'
                                                        },
                                                        className: "jsx-2130c8f34bfe2398",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                size: 18,
                                                                className: "text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '18px',
                                                                    fontWeight: 800,
                                                                    color: '#0F172A'
                                                                },
                                                                className: "jsx-2130c8f34bfe2398",
                                                                children: previewTable.seats
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 468,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 460,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '32px'
                                        },
                                        className: "jsx-2130c8f34bfe2398",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '12px',
                                                    color: '#64748B',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase',
                                                    marginBottom: '12px'
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: "Current Order"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 478,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    border: '1px solid #E2E8F0',
                                                    borderRadius: '12px',
                                                    padding: '16px'
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            marginBottom: '8px'
                                                        },
                                                        className: "jsx-2130c8f34bfe2398",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#64748B',
                                                                    fontSize: '14px',
                                                                    fontWeight: 500
                                                                },
                                                                className: "jsx-2130c8f34bfe2398",
                                                                children: "Customer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 481,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#0F172A',
                                                                    fontSize: '14px',
                                                                    fontWeight: 700
                                                                },
                                                                className: "jsx-2130c8f34bfe2398",
                                                                children: previewTable.customerName || 'Walk-in'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 482,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            marginBottom: '8px'
                                                        },
                                                        className: "jsx-2130c8f34bfe2398",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#64748B',
                                                                    fontSize: '14px',
                                                                    fontWeight: 500
                                                                },
                                                                className: "jsx-2130c8f34bfe2398",
                                                                children: "Items"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#0F172A',
                                                                    fontSize: '14px',
                                                                    fontWeight: 700
                                                                },
                                                                className: "jsx-2130c8f34bfe2398",
                                                                children: [
                                                                    previewTable.orderCount || 0,
                                                                    " items"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 486,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: '1px',
                                                            background: '#E2E8F0',
                                                            margin: '12px 0'
                                                        },
                                                        className: "jsx-2130c8f34bfe2398"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'flex-end'
                                                        },
                                                        className: "jsx-2130c8f34bfe2398",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#0F172A',
                                                                    fontSize: '16px',
                                                                    fontWeight: 800
                                                                },
                                                                className: "jsx-2130c8f34bfe2398",
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#009F4F',
                                                                    fontSize: '24px',
                                                                    fontWeight: 900
                                                                },
                                                                className: "jsx-2130c8f34bfe2398",
                                                                children: [
                                                                    "$",
                                                                    (previewTable.totalAmount || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                                lineNumber: 491,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 479,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 477,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '12px'
                                        },
                                        className: "jsx-2130c8f34bfe2398",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    height: '48px',
                                                    width: '100%',
                                                    borderRadius: '10px',
                                                    background: '#FFFFFF',
                                                    border: '1px solid #E2E8F0',
                                                    color: '#475569',
                                                    fontWeight: 700,
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '10px',
                                                    fontSize: '14px'
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__["ArrowRightLeft"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Transfer Table"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 497,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    height: '48px',
                                                    width: '100%',
                                                    borderRadius: '10px',
                                                    background: '#FFFFFF',
                                                    border: '1px solid #E2E8F0',
                                                    color: '#475569',
                                                    fontWeight: 700,
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '10px',
                                                    fontSize: '14px'
                                                },
                                                className: "jsx-2130c8f34bfe2398",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$combine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Combine$3e$__["Combine"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Merge Table"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 500,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 496,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                lineNumber: 441,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px',
                                    borderTop: '1px solid #F1F5F9',
                                    background: '#F8FAFC'
                                },
                                className: "jsx-2130c8f34bfe2398",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push('/pos/menu'),
                                    style: {
                                        height: '56px',
                                        width: '100%',
                                        borderRadius: '12px',
                                        background: '#0284C7',
                                        border: 'none',
                                        color: 'white',
                                        fontSize: '16px',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 6px -1px rgba(2, 132, 199, 0.2)'
                                    },
                                    className: "jsx-2130c8f34bfe2398",
                                    children: "View Order"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                    lineNumber: 507,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                lineNumber: 506,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                        lineNumber: 425,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: '80px',
                    background: '#FFFFFF',
                    borderTop: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 32px',
                    justifyContent: 'space-between',
                    flexShrink: 0,
                    boxShadow: '0 -4px 6px -1px rgba(0,0,0,0.02)'
                },
                className: "jsx-2130c8f34bfe2398",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '32px'
                        },
                        className: "jsx-2130c8f34bfe2398",
                        children: mergeMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            className: "jsx-2130c8f34bfe2398",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '11px',
                                        color: '#64748B',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    },
                                    className: "jsx-2130c8f34bfe2398",
                                    children: "Merging Tables"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                    lineNumber: 544,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        gap: '8px'
                                    },
                                    className: "jsx-2130c8f34bfe2398",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '20px',
                                                fontWeight: 900,
                                                color: '#31A4A9'
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: [
                                                mergeSelectionCount,
                                                " Selected"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 546,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '14px',
                                                color: '#64748B',
                                                fontWeight: 600
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: [
                                                "(",
                                                mergeTotalSeats,
                                                " Total Seats)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 549,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                    lineNumber: 545,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                            lineNumber: 543,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px'
                                    },
                                    className: "jsx-2130c8f34bfe2398",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '12px',
                                                background: selectedTable ? selectedTableId ? '#0ea5e9' : '#F1F5F9' : '#F1F5F9',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: selectedTable ? 'white' : '#94A3B8'
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: selectedTable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 24,
                                                strokeWidth: 3
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 563,
                                                columnNumber: 54
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$armchair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Armchair$3e$__["Armchair"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                lineNumber: 563,
                                                columnNumber: 92
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 557,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column'
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '11px',
                                                        color: '#64748B',
                                                        fontWeight: 800,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.5px'
                                                    },
                                                    className: "jsx-2130c8f34bfe2398",
                                                    children: "Current Selection"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '20px',
                                                        fontWeight: 900,
                                                        color: selectedTable ? '#0F172A' : '#94A3B8'
                                                    },
                                                    className: "jsx-2130c8f34bfe2398",
                                                    children: selectedTable ? selectedTable.name : 'Select a table'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 565,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                    lineNumber: 556,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedTable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '1px',
                                                height: '40px',
                                                background: '#E2E8F0'
                                            },
                                            className: "jsx-2130c8f34bfe2398"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 575,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column'
                                            },
                                            className: "jsx-2130c8f34bfe2398",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '11px',
                                                        color: '#64748B',
                                                        fontWeight: 800,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.5px'
                                                    },
                                                    className: "jsx-2130c8f34bfe2398",
                                                    children: "Capacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '20px',
                                                        fontWeight: 900,
                                                        color: '#0F172A'
                                                    },
                                                    className: "jsx-2130c8f34bfe2398",
                                                    children: [
                                                        selectedTable.seats,
                                                        " Persons"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                            lineNumber: 576,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                        lineNumber: 541,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '16px'
                        },
                        className: "jsx-2130c8f34bfe2398",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setMergeMode(!mergeMode);
                                    setSelectedForMerge([]);
                                    setSelectedTableId(null);
                                },
                                style: {
                                    height: '52px',
                                    padding: '0 24px',
                                    borderRadius: '10px',
                                    background: mergeMode ? '#FEF2F2' : '#FFFFFF',
                                    border: mergeMode ? '1px solid #FECACA' : '1px solid #E2E8F0',
                                    color: mergeMode ? '#EF4444' : '#64748B',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    transition: 'all 0.2s',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                                },
                                className: "jsx-2130c8f34bfe2398",
                                children: [
                                    mergeMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 609,
                                        columnNumber: 38
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$combine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Combine$3e$__["Combine"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 609,
                                        columnNumber: 56
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    mergeMode ? 'Cancel Merge' : 'Merge Tables'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                lineNumber: 587,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConfirm,
                                disabled: !selectedTableId || selectedTable?.status !== 'FREE',
                                style: {
                                    height: '52px',
                                    padding: '0 32px',
                                    borderRadius: '10px',
                                    background: selectedTableId && selectedTable?.status === 'FREE' ? '#0ea5e9' : '#E2E8F0',
                                    color: 'white',
                                    border: 'none',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    cursor: selectedTableId && selectedTable?.status === 'FREE' ? 'pointer' : 'not-allowed',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    transition: 'all 0.2s',
                                    boxShadow: selectedTableId && selectedTable?.status === 'FREE' ? '0 4px 6px -1px rgba(14, 165, 233, 0.3)' : 'none',
                                    opacity: selectedTableId && selectedTable?.status === 'FREE' ? 1 : 0.7
                                },
                                className: "jsx-2130c8f34bfe2398",
                                children: [
                                    "Start Order ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                        lineNumber: 634,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                                lineNumber: 613,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                        lineNumber: 586,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
                lineNumber: 530,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "2130c8f34bfe2398",
                children: ".active-pop.jsx-2130c8f34bfe2398:active{transform:scale(.96)}.hover-scale.jsx-2130c8f34bfe2398:hover{transform:scale(1.05)}div.jsx-2130c8f34bfe2398::-webkit-scrollbar{width:6px}div.jsx-2130c8f34bfe2398::-webkit-scrollbar-track{background:0 0}div.jsx-2130c8f34bfe2398::-webkit-scrollbar-thumb{background-color:#cbd5e1;border-radius:20px}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/pos/pages/TableSelectionPage.tsx",
        lineNumber: 135,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TableSelectionPage, "cv6aaMowxlqGCVFJzouIPrcV5I8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$context$2f$POSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePOS"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = TableSelectionPage;
const __TURBOPACK__default__export__ = TableSelectionPage;
var _c;
__turbopack_context__.k.register(_c, "TableSelectionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/pos/table-selection/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$pages$2f$TableSelectionPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/pages/TableSelectionPage.tsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$pages$2f$TableSelectionPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableSelectionPage"], {}, void 0, false, {
        fileName: "[project]/src/app/pos/table-selection/page.tsx",
        lineNumber: 6,
        columnNumber: 12
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

//# sourceMappingURL=src_8ae9f8a1._.js.map