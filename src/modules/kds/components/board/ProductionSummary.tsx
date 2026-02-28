'use client';

import React, { useMemo } from 'react';
import { useKDSStore } from '../../store/kdsStore';
import { useShallow } from 'zustand/react/shallow';
import { ChefHat, Package } from 'lucide-react';

interface ProductionSummaryProps {
    compact?: boolean;
}

export const ProductionSummary: React.FC<ProductionSummaryProps> = ({ compact }) => {
    const orders = useKDSStore(useShallow((state) => Object.values(state.orders)));
    const {
        enable_station_routing,
        selectedStationId,
        category_station_map,
        fulfilledOrders
    } = useKDSStore(useShallow(state => ({
        enable_station_routing: state.enable_station_routing,
        selectedStationId: state.selectedStationId,
        category_station_map: state.category_station_map,
        fulfilledOrders: state.fulfilledOrders
    })));

    const summaryData = useMemo(() => {
        const aggregation: Record<string, { quantity: number, name: string, variant?: string }> = {};

        // Combine active and fulfilled orders for a true "All-Day" summary if not in compact mode
        const allRelevantOrders = compact ? orders : [...orders, ...fulfilledOrders];

        allRelevantOrders.forEach((order) => {
            // In compact dashboard strip, we only show pending items.
            // In full summary, we show all-day counts.
            if (compact && order.stage === 'FULFILLED') return;

            order.items.forEach((item) => {
                // If compact strip, respect item completion. 
                // If full summary, show everything made today.
                if (compact && item.isCompleted) return;

                // Station Filtering Logic
                if (enable_station_routing && selectedStationId !== 'ALL') {
                    const itemStationId = item.categoryId ? category_station_map[item.categoryId] : 'kitchen';
                    if (itemStationId !== selectedStationId) return;
                }

                const key = `${item.name}-${item.variant || ''}`;
                if (!aggregation[key]) {
                    aggregation[key] = {
                        quantity: 0,
                        name: item.name,
                        variant: item.variant
                    };
                }
                aggregation[key].quantity += (item.quantity || 1);
            });
        });

        return Object.values(aggregation).sort((a, b) => b.quantity - a.quantity);
    }, [orders, fulfilledOrders, enable_station_routing, selectedStationId, category_station_map, compact]);

    const totalItems = summaryData.reduce((sum, item) => sum + item.quantity, 0);

    if (compact) {
        const scrollToStage = (stageId: string) => {
            const el = document.getElementById(`stage-anchor-${stageId}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        };

        const loadPercentage = Math.min(100, (totalItems / 40) * 100); // Assume 40 items is 100% load
        const loadColor = loadPercentage > 80 ? 'bg-red-500' : loadPercentage > 50 ? 'bg-amber-500' : 'bg-emerald-500';

        return (
            <div className="h-full w-full flex items-center bg-slate-900/40 px-4 gap-4 overflow-hidden border-b border-white/5">
                {/* Left: Dashboard label + stage nav */}
                <div className="shrink-0 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                            <ChefHat size={14} />
                        </div>
                        <div>
                            <h2 className="text-[12px] font-black text-white uppercase tracking-widest leading-none">Dashboard</h2>
                            <div className="flex items-center gap-1.5 mt-1">
                                <div className="h-1 w-16 bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${loadColor} transition-all duration-1000`}
                                        style={{ width: `${loadPercentage}%` }}
                                    />
                                </div>
                                <span className="text-[11px] font-black text-slate-400 uppercase">{Math.round(loadPercentage)}% Load</span>
                            </div>
                        </div>
                    </div>

                    {/* Stage Mini-Map */}
                    <div className="hidden md:flex items-center bg-slate-800/50 rounded-lg p-0.5 border border-slate-700/50">
                        {[
                            { id: 'ACCEPTED', label: 'New', color: 'bg-blue-500' },
                            { id: 'PREPARATION', label: 'Prep', color: 'bg-amber-500' },
                            { id: 'CUTTING', label: 'Final', color: 'bg-purple-500' },
                            { id: 'READY', label: 'Pass', color: 'bg-emerald-500' }
                        ].map(s => (
                            <button
                                key={s.id}
                                onClick={() => scrollToStage(s.id)}
                                className="px-2 py-1 hover:bg-slate-700/50 rounded flex items-center gap-1.5 transition-all group"
                            >
                                <div className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
                                <span className="text-[10px] font-black text-slate-400 group-hover:text-white uppercase">{s.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Center: Scrollable SKU cards */}
                <div className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-visible">
                    <div className="flex gap-2 h-full items-center py-2">
                        {summaryData.length === 0 ? (
                            <div className="flex items-center text-slate-700 font-black uppercase text-[9px] tracking-widest px-4">
                                No Prep Required
                            </div>
                        ) : (
                            summaryData.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="shrink-0 bg-slate-800/60 border border-slate-700/50 rounded-xl flex items-center gap-3 px-3 py-2 hover:border-amber-500/40 transition-colors group"
                                >
                                    <div className="min-w-0">
                                        <h3 className="text-[10px] font-black text-white uppercase truncate max-w-[200px] group-hover:text-amber-500 transition-colors">{item.name}</h3>
                                        {item.variant && <span className="text-[7px] text-slate-500 font-bold uppercase block">{item.variant}</span>}
                                    </div>
                                    <div className="bg-slate-900 text-amber-500 w-8 h-8 rounded-lg flex items-center justify-center text-lg font-black border border-slate-700 shrink-0">
                                        {item.quantity}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Right: Counts */}
                <div className="shrink-0 flex flex-col items-end">
                    <span className="text-[11px] font-black text-white">{totalItems} <span className="text-slate-500">ITEMS</span></span>
                    <span className="text-[11px] font-black text-blue-400">{summaryData.length} <span className="text-slate-500">SKUs</span></span>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col bg-slate-950 p-6 overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Header Stats */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-[2rem] bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                        <ChefHat size={32} />
                    </div>
                    <div>
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Production Summary</h2>
                        <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-1">Real-time All-Day Aggregation</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-slate-900/50 border border-slate-800 px-8 py-4 rounded-3xl flex flex-col items-center min-w-[160px]">
                        <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Active Items</span>
                        <span className="text-3xl font-black text-white">{totalItems}</span>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 px-8 py-4 rounded-3xl flex flex-col items-center min-w-[160px]">
                        <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Unique SKUs</span>
                        <span className="text-3xl font-black text-blue-500">{summaryData.length}</span>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Area */}
            <div className="flex-1 overflow-x-auto overflow-y-auto pb-4 scrollbar-visible">
                <div
                    className="grid h-full gap-4 min-h-[500px]"
                    style={{
                        gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
                        gridAutoFlow: 'column',
                        gridAutoColumns: 'minmax(380px, 1fr)'
                    }}
                >
                    {summaryData.length === 0 ? (
                        <div className="w-full flex flex-col items-center justify-center py-40 opacity-20 col-span-full">
                            <Package size={80} className="mb-4" />
                            <p className="text-2xl font-black uppercase tracking-[0.5em]">No Pending Items</p>
                        </div>
                    ) : (
                        summaryData.map((item, idx) => (
                            <div
                                key={idx}
                                className="group bg-slate-900/40 border border-slate-800/50 hover:border-amber-500/30 p-6 rounded-[1.5rem] flex items-center justify-between transition-all hover:bg-slate-900 shadow-sm hover:shadow-amber-500/5 min-w-[380px]"
                            >
                                <div className="flex-1 min-w-0 pr-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-red-500 animate-pulse' : 'bg-amber-500'}`} />
                                        <h3 className="text-xl font-black text-white uppercase truncate tracking-tight group-hover:text-amber-500 transition-colors">
                                            {item.name}
                                        </h3>
                                        {idx === 0 && (
                                            <span className="px-2 py-0.5 bg-red-500 text-white text-[8px] font-black rounded uppercase tracking-widest animate-bounce">
                                                Top Priority
                                            </span>
                                        )}
                                        {idx > 0 && idx < 3 && (
                                            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-500 text-[8px] font-black rounded uppercase tracking-widest">
                                                High Demand
                                            </span>
                                        )}
                                    </div>
                                    {item.variant && (
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-800 px-2 py-0.5 rounded">
                                            {item.variant}
                                        </span>
                                    )}
                                </div>

                                <div className="flex-none flex flex-col items-center">
                                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Qty</span>
                                    <div className="bg-slate-800 text-amber-500 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl font-black border border-slate-700 shadow-inner group-hover:scale-110 transition-transform">
                                        {item.quantity}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Live Indicator */}
            <div className="mt-8 flex items-center justify-center gap-2">
                <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse delay-75" />
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse delay-150" />
                </div>
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">Live Delta Feed Active</span>
            </div>
        </div>
    );
};
