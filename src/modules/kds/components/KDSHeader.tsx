'use client';

import { useState, useEffect } from 'react';
import { Menu, ChevronDown, MapPin } from 'lucide-react';
import { useKDSStore } from '../store/kdsStore';
import { useFilterStore } from '../store/useFilterStore';
import { kdsToast, KDSToastContainer } from './toast/KDSToast';
import { onPrintError } from '../services/printService';
import { SoundController } from './sound/SoundController';
import { ConnectivityManager } from './connectivity/ConnectivityManager';

export const KDSHeader: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    const activeCount = useKDSStore((state) => Object.keys(state.orders).length);
    const completedCount = useKDSStore((state) => state.fulfilledOrders.length);
    const { kds_stations, selectedStationId, setSelectedStation } = useKDSStore();

    const {
        setIsSidebarOpen,
        fulfillment, setFulfillment,
        source, setSource
    } = useFilterStore();

    useEffect(() => {
        onPrintError((msg) => kdsToast.printError(msg));
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    const currentStationName = selectedStationId === 'ALL'
        ? 'UNIVERSAL'
        : kds_stations.find(s => s.station_id === selectedStationId)?.station_name || 'UNKNOWN';

    return (
        <>
            <SoundController />
            <ConnectivityManager />
            <KDSToastContainer />
            <header className="h-[64px] bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-50">
                {/* LEFT: Sidebar Toggle & Primary Filters */}
                <div className="flex items-center gap-6 w-1/3">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-3 -ml-2 hover:bg-gray-100 rounded-xl transition-all text-gray-900 active:scale-90"
                    >
                        <Menu size={26} />
                    </button>

                    <div className="flex items-center gap-3">
                        {/* Station Selector */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-[10px] font-bold uppercase hover:bg-gray-800 transition-all active:scale-95">
                                <MapPin size={14} className="text-emerald-400" />
                                {currentStationName}
                                <ChevronDown size={14} className="opacity-50" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-2xl rounded-2xl py-3 hidden group-hover:block z-[100] w-[200px] animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="px-4 py-2 text-[9px] font-bold text-gray-400 uppercase border-b border-gray-50 mb-2">Display Nodes</div>
                                <button
                                    onClick={() => setSelectedStation('ALL')}
                                    className={`w-full text-left px-4 py-2.5 text-[11px] font-bold uppercase hover:bg-gray-50 transition-colors ${selectedStationId === 'ALL' ? 'text-emerald-600 bg-emerald-50/50' : 'text-gray-600'}`}
                                >
                                    Universal View
                                </button>
                                {kds_stations.filter(s => s.active).map(s => (
                                    <button
                                        key={s.station_id}
                                        onClick={() => setSelectedStation(s.station_id)}
                                        className={`w-full text-left px-4 py-2.5 text-[11px] font-bold uppercase hover:bg-gray-50 transition-colors ${selectedStationId === s.station_id ? 'text-emerald-600 bg-emerald-50/50' : 'text-gray-600'}`}
                                    >
                                        {s.station_name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Source Filter */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-[10px] font-bold uppercase hover:bg-gray-100 transition-all active:scale-95">
                                SRC: {source}
                                <ChevronDown size={14} className="text-gray-400" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-2xl rounded-2xl py-3 hidden group-hover:block z-[100] w-[160px] animate-in fade-in slide-in-from-top-2 duration-200">
                                {['ALL', 'ONLINE', 'POS', 'KIOSK', 'THIRD_PARTY'].map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setSource(s as any)}
                                        className={`w-full text-left px-4 py-2.5 text-[11px] font-bold uppercase hover:bg-gray-50 transition-colors ${source === s ? 'text-blue-600 bg-blue-50/50' : 'text-gray-600'}`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Fulfillment Filter */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-[10px] font-bold uppercase hover:bg-gray-100 transition-all active:scale-95">
                                TYPE: {fulfillment.replace('_', ' ')}
                                <ChevronDown size={14} className="text-gray-400" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-2xl rounded-2xl py-3 hidden group-hover:block z-[100] w-[180px] animate-in fade-in slide-in-from-top-2 duration-200">
                                {['ALL', 'PICKUP', 'DELIVERY', 'DINE_IN', 'STORE_DELIVERY'].map(f => (
                                    <button
                                        key={f}
                                        onClick={() => setFulfillment(f as any)}
                                        className={`w-full text-left px-4 py-2.5 text-[11px] font-bold uppercase hover:bg-gray-50 transition-colors ${fulfillment === f ? 'text-blue-600 bg-blue-50/50' : 'text-gray-600'}`}
                                    >
                                        {f.replace('_', ' ')}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER: Status Indicators (Efficient Counters) */}
                <div className="flex items-center h-full gap-8">
                    <div className="flex flex-col items-center group cursor-pointer">
                        <span className="text-xs font-bold text-gray-900 leading-none">{activeCount}</span>
                        <span className="text-[9px] font-bold text-gray-400 uppercase mt-1 group-hover:text-black transition-colors">ACTIVE</span>
                        <div className="h-1 w-4 bg-black rounded-full mt-1 opacity-100" />
                    </div>
                    <div className="flex flex-col items-center group cursor-pointer opacity-40 hover:opacity-100 transition-all">
                        <span className="text-xs font-bold text-gray-900 leading-none">0</span>
                        <span className="text-[9px] font-bold text-gray-400 uppercase mt-1">LATER</span>
                        <div className="h-1 w-4 bg-black rounded-full mt-1 opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="flex flex-col items-center group cursor-pointer opacity-40 hover:opacity-100 transition-all">
                        <span className="text-xs font-bold text-gray-900 leading-none">{completedCount}</span>
                        <span className="text-[9px] font-bold text-gray-400 uppercase mt-1">DONE</span>
                        <div className="h-1 w-4 bg-black rounded-full mt-1 opacity-0 group-hover:opacity-100" />
                    </div>
                </div>

                {/* RIGHT: Clock & Brand */}
                <div className="flex items-center justify-end w-1/3 gap-6">
                    <div className="flex flex-col items-end">
                        <span className="text-[11px] font-bold text-gray-900 uppercase">{formatTime(currentTime)}</span>
                        <span className="text-[9px] font-bold text-gray-400 uppercase">{formatDate(currentTime)}</span>
                    </div>
                </div>
            </header>
        </>
    );
};
