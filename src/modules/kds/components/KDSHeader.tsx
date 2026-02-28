'use client';

import { useState, useEffect } from 'react';
import { Wifi, WifiOff, Clock } from 'lucide-react';
import { useTenantStore } from '@/app/providers/TenantStoreProvider';
import { SoundSettings } from './sound/SoundSettings';
import { SoundController } from './sound/SoundController';
import { ConnectivityManager } from './connectivity/ConnectivityManager';
import { FilterSettings } from './filter/FilterSettings';
import { useKDSStore } from '../store/kdsStore';
import { useShallow } from 'zustand/react/shallow';
import { getSLAState } from '../utils/slaUtils';
import { KDSToastContainer, kdsToast } from './toast/KDSToast';
import { onPrintError } from '../services/printService';
import { useAuth } from '@/app/providers/AuthProvider';
import { KDSRole, canReopenOrder } from '../utils/kdsAccess';

export const KDSHeader: React.FC = () => {
    const { store } = useTenantStore();
    const [currentTime, setCurrentTime] = useState<Date | null>(null);
    const isOnline = useKDSStore(useShallow((state) => state.isOnline));
    const { role: authRole } = useAuth();
    const role = (authRole as KDSRole) || 'KDS_USER';

    // Register print error → toast bridge (once per KDS session)
    useEffect(() => {
        onPrintError((msg) => kdsToast.printError(msg));
    }, []);

    useEffect(() => {
        setCurrentTime(new Date());
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const orders = useKDSStore(useShallow((state) => Object.values(state.orders)));

    const getMetrics = () => {
        const total = orders.length;
        if (total === 0) return { total: 0, late: 0, sla: 100, avg: 0, bottleneck: 'NONE' };

        const late = orders.filter(o => getSLAState(o.createdAt, o.prepTimeMinutes) === 'OVERDUE').length;
        const sla = Math.round(((total - late) / total) * 100);

        // Avg Make Time (Time since creation for orders in Prep/Cutting/Ready)
        const makeTimes = orders
            .filter(o => o.stage !== 'ACCEPTED')
            .map(o => (Date.now() - new Date(o.createdAt).getTime()) / 60000);

        const avg = makeTimes.length ? Math.round(makeTimes.reduce((a, b) => a + b, 0) / makeTimes.length) : 0;

        // Bottleneck Detection
        const stageCounts: Record<string, number> = {};
        orders.forEach(o => stageCounts[o.stage] = (stageCounts[o.stage] || 0) + 1);
        const bottleneck = Object.entries(stageCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'NONE';

        return { total, late, sla, avg, bottleneck };
    };

    const metrics = getMetrics();

    const formatTime = (date: Date | null) => {
        if (!date) return '--:--:--';
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    };

    const isQueueUnderPressure = metrics.total > 12;

    return (
        <>
            <SoundController />
            <ConnectivityManager />
            <KDSToastContainer />
            <header className={`kds-header transition-colors duration-500 ${isQueueUnderPressure ? '!bg-red-600 border-red-700' : ''}`}>
                <div className="kds-header-left">
                    <div className="flex flex-col">
                        <div className={`text-3xl font-black tracking-tighter uppercase ${isQueueUnderPressure ? 'text-white' : 'text-white'}`}>
                            {store?.name || 'KITCHEN DISPLAY'}
                        </div>
                        <div className={`text-xl font-black ${isQueueUnderPressure ? 'text-white/80' : 'text-[var(--kds-text-secondary)]'}`}>
                            {formatTime(currentTime)}
                        </div>
                    </div>

                    {isQueueUnderPressure && (
                        <div className="bg-white text-red-600 px-3 py-1 font-black text-[12px] animate-pulse rounded-none shadow-lg">
                            QUEUE PRESSURE ALERT
                        </div>
                    )}

                    <div className={`flex items-center gap-2 px-2 py-1 rounded-full text-[10px] font-black tracking-widest ${isOnline ? (isQueueUnderPressure ? 'bg-black/10 text-black' : 'bg-green-500/10 text-green-500') : 'bg-red-500/10 text-red-500'
                        }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? (isQueueUnderPressure ? 'bg-black' : 'bg-green-500') : 'bg-red-500'} ${isOnline ? '' : 'animate-pulse'}`} />
                        {isOnline ? 'ONLINE' : 'OFFLINE'}
                    </div>
                </div>

                <div className="kds-header-center">
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center">
                            <span className={`text-[12px] font-black uppercase ${isQueueUnderPressure ? 'text-white/70' : 'text-slate-500'}`}>Queue</span>
                            <span className={`text-3xl font-black ${isQueueUnderPressure ? 'text-white' : 'text-white'}`}>{metrics.total}</span>
                        </div>
                        <div className={`w-px h-8 ${isQueueUnderPressure ? 'bg-black/20' : 'bg-slate-800'}`} />
                        <div className="flex flex-col items-center">
                            <span className={`text-[12px] font-black uppercase ${isQueueUnderPressure ? 'text-white/70' : 'text-slate-500'}`}>Avg Make</span>
                            <span className={`text-3xl font-black ${isQueueUnderPressure ? 'text-white' : 'text-white'}`}>{metrics.avg}m</span>
                        </div>
                        <div className={`w-px h-8 ${isQueueUnderPressure ? 'bg-black/20' : 'bg-slate-800'}`} />
                        <div className="flex flex-col items-center">
                            <span className={`text-[12px] font-black uppercase ${isQueueUnderPressure ? 'text-white/70' : 'text-slate-500'}`}>SLA %</span>
                            <span className={`text-3xl font-black ${metrics.sla > 90 ? (isQueueUnderPressure ? 'text-white' : 'text-green-500') : (isQueueUnderPressure ? 'text-white' : 'text-amber-500')}`}>{metrics.sla}%</span>
                        </div>
                        <div className={`w-px h-8 ${isQueueUnderPressure ? 'bg-black/20' : 'bg-slate-800'}`} />
                        <div className="flex flex-col items-center">
                            <span className={`text-[12px] font-black uppercase ${isQueueUnderPressure ? 'text-white/70' : 'text-slate-500'}`}>Bottleneck</span>
                            <span className={`text-[18px] font-black uppercase ${isQueueUnderPressure ? 'text-white' : 'text-amber-400'}`}>{metrics.bottleneck}</span>
                        </div>
                        <div className={`w-px h-8 ${isQueueUnderPressure ? 'bg-black/20' : 'bg-slate-800'}`} />
                        <div className="flex flex-col items-center">
                            <span className={`text-[12px] font-black uppercase ${isQueueUnderPressure ? 'text-white/70' : 'text-slate-500'}`}>Late</span>
                            <span className={`text-3xl font-black ${metrics.late > 0 ? (isQueueUnderPressure ? 'text-white' : 'text-[var(--kds-status-late)]') : (isQueueUnderPressure ? 'text-white/50' : 'text-slate-500')}`}>{metrics.late}</span>
                        </div>
                    </div>
                </div>

                <div className="kds-header-right">
                    {canReopenOrder(role) && (
                        <button
                            onClick={() => {
                                useKDSStore.getState().recallOrder();
                                kdsToast.success('Last order recalled');
                            }}
                            className="h-[var(--kds-touch-target)] px-6 bg-[var(--kds-status-prep)] text-black font-black uppercase tracking-tighter text-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all mr-2"
                            title="Recall last bumped order"
                        >
                            <Clock size={24} />
                            RECALL
                        </button>
                    )}

                    <div className="flex items-center gap-1 mr-2 px-3 py-1 bg-slate-800 rounded-lg border border-slate-700">
                        {isOnline ? <Wifi size={14} className="text-green-500" /> : <WifiOff size={14} className="text-red-500" />}
                    </div>

                    <SoundSettings />
                    <FilterSettings />
                </div>
            </header>
        </>
    );
};
