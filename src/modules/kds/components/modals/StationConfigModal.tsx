'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Radio, LayoutGrid, CheckCircle2, ChevronRight, Settings2, Layers, Terminal, PackageSearch } from 'lucide-react';
import { useKDSStore } from '../../store/kdsStore';
import { useShallow } from 'zustand/react/shallow';

interface StationConfigModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const StationConfigModal: React.FC<StationConfigModalProps> = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const {
        enable_station_routing,
        allow_item_station_override,
        kds_stations,
        selectedStationId,
        category_station_map,
        item_station_map,
        orders,
        fulfilledOrders,
        setStationRouting,
        setAllowItemOverride,
        setStations,
        updateCategoryStationMap,
        updateItemStationMap,
        setSelectedStation,
        master_screen_view_mode,
        order_ready_rule,
        setMasterViewMode,
        setOrderReadyRule,
        sound_scope,
        setSoundScope,
        station_prep_time_override_enabled,
        setStationPrepTimeEnabled,
        station_delay_affects_global_eta,
        setStationDelayAffectsGlobalEta,
        station_print_mode,
        setStationPrintMode
    } = useKDSStore(useShallow((state) => ({
        enable_station_routing: state.enable_station_routing,
        allow_item_station_override: state.allow_item_station_override,
        kds_stations: state.kds_stations,
        selectedStationId: state.selectedStationId,
        category_station_map: state.category_station_map,
        item_station_map: state.item_station_map,
        orders: state.orders,
        fulfilledOrders: state.fulfilledOrders,
        setStationRouting: state.setStationRouting,
        setAllowItemOverride: state.setAllowItemOverride,
        setStations: state.setStations,
        updateCategoryStationMap: state.updateCategoryStationMap,
        updateItemStationMap: state.updateItemStationMap,
        setSelectedStation: state.setSelectedStation,
        master_screen_view_mode: state.master_screen_view_mode,
        order_ready_rule: state.order_ready_rule,
        setMasterViewMode: state.setMasterViewMode,
        setOrderReadyRule: state.setOrderReadyRule,
        sound_scope: state.sound_scope,
        setSoundScope: state.setSoundScope,
        station_prep_time_override_enabled: state.station_prep_time_override_enabled,
        setStationPrepTimeEnabled: state.setStationPrepTimeEnabled,
        station_delay_affects_global_eta: state.station_delay_affects_global_eta,
        setStationDelayAffectsGlobalEta: state.setStationDelayAffectsGlobalEta,
        station_print_mode: state.station_print_mode,
        setStationPrintMode: state.setStationPrintMode
    })));



    const getAllCategories = () => {
        const categories = new Set<string>();
        Object.values(orders).forEach(order => {
            order.items.forEach(item => {
                if (item.categoryId) categories.add(item.categoryId);
            });
        });
        fulfilledOrders.forEach(order => {
            order.items.forEach(item => {
                if (item.categoryId) categories.add(item.categoryId);
            });
        });
        Object.keys(category_station_map).forEach(catId => categories.add(catId));
        return Array.from(categories).sort();
    };

    const categories = getAllCategories();

    const getAllItems = () => {
        const itemsList = new Set<string>();
        Object.values(orders).forEach(order => {
            order.items.forEach(item => {
                itemsList.add(item.name);
            });
        });
        fulfilledOrders.forEach(order => {
            order.items.forEach(item => {
                itemsList.add(item.name);
            });
        });
        Object.keys(item_station_map).forEach(itemName => itemsList.add(itemName));
        return Array.from(itemsList).sort();
    };

    const items = getAllItems();

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-black text-white uppercase tracking-tighter">Station Routing Engine</h2>
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mt-1">Configure Order Flow & Filtering</p>
                    </div>
                    <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-visible">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 bg-slate-800/40 p-4 rounded-2xl border border-slate-800/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Radio size={18} className={enable_station_routing ? 'text-emerald-500' : 'text-slate-500'} />
                                <h3 className="text-white font-bold uppercase text-[10px] tracking-wide">Routing Engine</h3>
                            </div>
                            <button
                                onClick={() => setStationRouting(!enable_station_routing)}
                                className={`transition-colors relative inline-flex h-5 w-9 items-center rounded-full ${enable_station_routing ? 'bg-emerald-500' : 'bg-slate-700'}`}
                            >
                                <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition ${enable_station_routing ? 'translate-x-5' : 'translate-x-1'}`} />
                            </button>
                        </div>
                        <div className="flex-1 bg-slate-800/40 p-4 rounded-2xl border border-slate-800/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <PackageSearch size={18} className={allow_item_station_override ? 'text-blue-500' : 'text-slate-500'} />
                                <h3 className="text-white font-bold uppercase text-[10px] tracking-wide">Item Overrides</h3>
                            </div>
                            <button
                                onClick={() => setAllowItemOverride(!allow_item_station_override)}
                                className={`transition-colors relative inline-flex h-5 w-9 items-center rounded-full ${allow_item_station_override ? 'bg-blue-500' : 'bg-slate-700'}`}
                            >
                                <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition ${allow_item_station_override ? 'translate-x-5' : 'translate-x-1'}`} />
                            </button>
                        </div>
                        <button
                            onClick={() => setIsEditMode(!isEditMode)}
                            className={`flex-1 p-4 rounded-2xl border flex items-center justify-center gap-2 font-black uppercase text-[10px] tracking-widest transition-all ${isEditMode ? 'bg-amber-500 text-black border-amber-600' : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:text-white'}`}
                        >
                            {isEditMode ? <CheckCircle2 size={14} /> : <Settings2 size={14} />}
                            {isEditMode ? 'Done Editing' : 'Edit Station List'}
                        </button>
                    </div>

                    {!isEditMode ? (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between px-2">
                                <h3 className="text-slate-400 font-black text-xs uppercase tracking-widest">Select Active Display Station</h3>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                <button
                                    onClick={() => setSelectedStation('ALL')}
                                    className={`group p-5 rounded-[2rem] border-2 text-left transition-all ${selectedStationId === 'ALL' ? 'bg-blue-600/10 border-blue-500/50' : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'}`}
                                >
                                    <div className="flex flex-col gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedStationId === 'ALL' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-800 text-slate-500'}`}>
                                            <LayoutGrid size={20} />
                                        </div>
                                        <div>
                                            <span className={`block font-black uppercase text-sm tracking-tight ${selectedStationId === 'ALL' ? 'text-white' : 'text-slate-400'}`}>Universal View</span>
                                            <span className="text-[10px] text-slate-500 font-bold uppercase mt-1 block">Full Board Filter</span>
                                        </div>
                                    </div>
                                </button>
                                {kds_stations.filter(s => s.active).map((station) => (
                                    <button
                                        key={station.station_id}
                                        onClick={() => setSelectedStation(station.station_id)}
                                        className={`group p-5 rounded-[2rem] border-2 text-left transition-all ${selectedStationId === station.station_id ? 'bg-emerald-600/10 border-emerald-500/50' : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'}`}
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm uppercase ${selectedStationId === station.station_id ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-800 text-slate-500'}`}>
                                                {station.station_name.charAt(0)}
                                            </div>
                                            <div>
                                                <span className={`block font-black uppercase text-sm tracking-tight ${selectedStationId === station.station_id ? 'text-white' : 'text-slate-400'}`}>{station.station_name}</span>
                                                <span className="text-[10px] text-slate-500 font-bold uppercase mt-1 block">Station ID: {station.station_id}</span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 px-2">
                                        <Radio size={14} className="text-emerald-500" />
                                        <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Station Deck</h4>
                                    </div>
                                    <div className="space-y-3">
                                        {kds_stations.map((station, idx) => (
                                            <div key={station.station_id} className="bg-slate-800/40 p-4 rounded-2xl border border-slate-800/50 space-y-3">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-500 font-black text-[10px]">{idx + 1}</div>
                                                    <input
                                                        type="text"
                                                        value={station.station_name}
                                                        onChange={(e) => {
                                                            const newStations = [...kds_stations];
                                                            newStations[idx] = { ...station, station_name: e.target.value };
                                                            setStations(newStations);
                                                        }}
                                                        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-[10px] text-white font-black uppercase focus:outline-none focus:border-blue-500 transition-colors"
                                                    />
                                                    <button
                                                        onClick={() => {
                                                            const newStations = [...kds_stations];
                                                            newStations[idx] = { ...station, active: !station.active };
                                                            setStations(newStations);
                                                        }}
                                                        className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-all ${station.active ? 'bg-emerald-500 text-black border-emerald-600' : 'bg-slate-900 text-slate-600 border-slate-800'}`}
                                                    >
                                                        {station.active ? 'ON' : 'OFF'}
                                                    </button>
                                                </div>
                                                {station_prep_time_override_enabled && (
                                                    <div className="flex items-center gap-2 pl-12">
                                                        <span className="text-[8px] font-black text-slate-500 uppercase">Default Prep:</span>
                                                        <input
                                                            type="number"
                                                            value={station.default_prep_time || 10}
                                                            onChange={(e) => {
                                                                const newStations = [...kds_stations];
                                                                newStations[idx] = { ...station, default_prep_time: parseInt(e.target.value) || 10 };
                                                                setStations(newStations);
                                                            }}
                                                            className="w-16 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-[10px] text-white font-black focus:outline-none focus:border-blue-500"
                                                        />
                                                        <span className="text-[8px] font-black text-slate-600 uppercase">Min</span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 px-2">
                                        <Layers size={14} className="text-blue-500" />
                                        <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Category Routing</h4>
                                    </div>
                                    <div className="bg-slate-800/20 rounded-2xl border border-slate-800/50 overflow-hidden">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-800/40 border-b border-slate-800">
                                                    <th className="px-4 py-3 text-[9px] font-black uppercase text-slate-500 tracking-wider">Source</th>
                                                    <th className="px-4 py-3 text-[9px] font-black uppercase text-slate-500 tracking-wider">Target Node</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-800/30">
                                                {categories.map((catId) => (
                                                    <tr key={catId} className="hover:bg-slate-800/20 transition-colors">
                                                        <td className="px-4 py-2.5"><span className="text-[10px] font-black text-white uppercase">{catId}</span></td>
                                                        <td className="px-4 py-2.5">
                                                            <select
                                                                value={category_station_map[catId] || 'kitchen'}
                                                                onChange={(e) => updateCategoryStationMap({ ...category_station_map, [catId]: e.target.value })}
                                                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-[9px] font-black text-white uppercase focus:outline-none"
                                                            >
                                                                {kds_stations.filter(s => s.active).map(station => (
                                                                    <option key={station.station_id} value={station.station_id}>{station.station_name}</option>
                                                                ))}
                                                            </select>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 px-2">
                                        <PackageSearch size={14} className="text-amber-500" />
                                        <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Item Overrides</h4>
                                    </div>
                                    <div className="bg-slate-800/20 rounded-2xl border border-slate-800/50 overflow-hidden max-h-[250px] overflow-y-auto scrollbar-visible">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-800/40 border-b border-slate-800">
                                                    <th className="px-4 py-3 text-[9px] font-black uppercase text-slate-500 tracking-wider">SKU</th>
                                                    <th className="px-4 py-3 text-[9px] font-black uppercase text-slate-500 tracking-wider">Node</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-800/30">
                                                {items.map((itemName) => (
                                                    <tr key={itemName} className="hover:bg-slate-800/20 transition-colors">
                                                        <td className="px-4 py-2.5"><span className="text-[10px] font-black text-white uppercase truncate max-w-[100px] block">{itemName}</span></td>
                                                        <td className="px-4 py-2.5">
                                                            <select
                                                                value={item_station_map[itemName] || ''}
                                                                onChange={(e) => {
                                                                    const newMap = { ...item_station_map };
                                                                    if (e.target.value === '') { delete newMap[itemName]; } else { newMap[itemName] = e.target.value; }
                                                                    updateItemStationMap(newMap);
                                                                }}
                                                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-[9px] font-black text-white uppercase focus:outline-none"
                                                            >
                                                                <option value="">DEFAULT</option>
                                                                {kds_stations.filter(s => s.active).map(station => (
                                                                    <option key={station.station_id} value={station.station_id}>{station.station_name}</option>
                                                                ))}
                                                            </select>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-purple-900/10 p-6 rounded-[2rem] border border-purple-500/20 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-purple-400 tracking-widest">Terminal Visibility</label>
                                    <select
                                        value={master_screen_view_mode}
                                        onChange={(e) => setMasterViewMode(e.target.value as any)}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-[11px] font-black text-white uppercase outline-none"
                                    >
                                        <option value="FULL_ORDER">Monitor Mode (All Items)</option>
                                        <option value="STATION_ONLY">Line Mode (Station Only)</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-purple-400 tracking-widest">Completion Rule</label>
                                    <select
                                        value={order_ready_rule}
                                        onChange={(e) => setOrderReadyRule(e.target.value as any)}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-[11px] font-black text-white uppercase outline-none"
                                    >
                                        <option value="ALL_STATIONS_COMPLETE">Auto-Ready (All Done)</option>
                                        <option value="EXPO_CONFIRMS_READY">Expo Gate (Manual)</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-purple-400 tracking-widest">Sound Alert Scope</label>
                                    <select
                                        value={sound_scope}
                                        onChange={(e) => setSoundScope(e.target.value as any)}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-[11px] font-black text-white uppercase outline-none"
                                    >
                                        <option value="STATION_ONLY">Station-Only Alerts (Filtered)</option>
                                        <option value="ALL_DEVICES">Global Alerts (All Screens)</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-purple-400 tracking-widest">Station Delay Rule</label>
                                    <select
                                        value={station_delay_affects_global_eta ? 'ON' : 'OFF'}
                                        onChange={(e) => setStationDelayAffectsGlobalEta(e.target.value === 'ON')}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-[11px] font-black text-white uppercase outline-none"
                                    >
                                        <option value="ON">Propagate Delay to Global ETA</option>
                                        <option value="OFF">Local Station Delay Only</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-purple-400 tracking-widest">Printing Strategy</label>
                                    <select
                                        value={station_print_mode}
                                        onChange={(e) => setStationPrintMode(e.target.value as any)}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-[11px] font-black text-white uppercase outline-none"
                                    >
                                        <option value="PRINT_BY_STATION">Print By Station (Relevant Only)</option>
                                        <option value="PRINT_FULL_ORDER">Print Full Order (Master Copy)</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-purple-400 tracking-widest">Station Prep Overrides</label>
                                    <div className="flex items-center justify-between bg-slate-900 border border-slate-700 rounded-xl px-4 py-3">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">Enable Per-Station Timers</span>
                                        <button
                                            onClick={() => setStationPrepTimeEnabled(!station_prep_time_override_enabled)}
                                            className={`transition-colors relative inline-flex h-5 w-9 items-center rounded-full ${station_prep_time_override_enabled ? 'bg-purple-500' : 'bg-slate-700'}`}
                                        >
                                            <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition ${station_prep_time_override_enabled ? 'translate-x-5' : 'translate-x-1'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10 flex gap-4">
                            <Terminal size={18} className="text-emerald-500 shrink-0" />
                            <div>
                                <h4 className="text-emerald-400 font-black text-[10px] uppercase tracking-wider mb-1">Binding Status</h4>
                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-tight">Active Node: {selectedStationId === 'ALL' ? 'UNIVERSAL' : selectedStationId}</p>
                            </div>
                        </div>
                        <div className="bg-blue-500/5 p-4 rounded-2xl border border-blue-500/10 flex gap-4">
                            <ChevronRight size={18} className="text-blue-500 shrink-0" />
                            <div>
                                <h4 className="text-blue-400 font-black text-[10px] uppercase tracking-wider mb-1">Routing Mode</h4>
                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-tight">{enable_station_routing ? "Dynamic Cluster Routing" : "Universal Feed"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-800 flex justify-end">
                    <button onClick={onClose} className="px-8 py-3 bg-white text-slate-950 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-slate-200 transition-all shadow-xl active:scale-95">
                        Confirm Changes
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};
