'use client';

import { useState, useEffect, memo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { Printer, Eye, Zap } from 'lucide-react';
import { printOrder } from '../../services/printService';
import { kdsToast } from '../toast/KDSToast';
import { useKDSStore, KDSState } from '../../store/kdsStore';
import { useKDSSound } from '../sound/useKDSSound';
import { getSLAState } from '../../utils/slaUtils';

import { isItemVisibleOnStation } from '../../utils/routingUtils';

interface Props {
    orderId: string;
    onViewDetail: (orderId: string) => void;
}

export const OrderTicket = memo(({ orderId, onViewDetail }: Props) => {
    const {
        order,
        enable_station_routing,
        selectedStationId,
        category_station_map,
        allow_item_station_override,
        item_station_map,
        master_screen_view_mode
    } = useKDSStore(useShallow((state: KDSState) => ({
        order: state.orders[orderId] ?? state.fulfilledOrders.find(o => o.id === orderId),
        enable_station_routing: state.enable_station_routing,
        selectedStationId: state.selectedStationId,
        category_station_map: state.category_station_map,
        allow_item_station_override: state.allow_item_station_override,
        item_station_map: state.item_station_map,
        master_screen_view_mode: state.master_screen_view_mode
    })));

    const [isProcessing, setIsProcessing] = useState(false);
    const { advanceStage } = useKDSStore.getState();
    const { playSound } = useKDSSound();

    const [timer, setTimer] = useState("00:00:00");

    useEffect(() => {
        if (!order) return;
        const interval = setInterval(() => {
            const diff = Date.now() - new Date(order.createdAt).getTime();
            const h = Math.floor(diff / 3600000).toString().padStart(2, '0');
            const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
            const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
            setTimer(`${h}:${m}:${s}`);
        }, 1000);
        return () => clearInterval(interval);
    }, [order?.createdAt]);

    if (!order) return null;

    const visibleItems = order.items.filter(item =>
        isItemVisibleOnStation(item, {
            enable_station_routing,
            selectedStationId,
            category_station_map,
            allow_item_station_override,
            item_station_map,
            master_screen_view_mode
        })
    );

    if (visibleItems.length === 0) return null;

    const slaState = getSLAState(order.createdAt, order.prepTimeMinutes);

    const isFulfilled = order.stage === 'FULFILLED';
    const isRecalled = order.stage === 'RECALLED';

    const getStatusInfo = () => {
        if (isFulfilled) return { label: 'FULFILLED', color: 'bg-emerald-600', text: 'text-emerald-600' };
        if (isRecalled) return { label: 'RECALLED', color: 'bg-teal-500', text: 'text-teal-500' };
        if (slaState === 'OVERDUE') return { label: 'DELAYED', color: 'bg-red-500', text: 'text-red-500' };
        if (slaState === 'WARNING') return { label: 'WARNING', color: 'bg-amber-500', text: 'text-amber-500' };
        if (order.stage === 'NEW') return { label: 'IN QUEUE', color: 'bg-gray-800', text: 'text-gray-800' };
        if (order.stage === 'READY') return { label: 'READY', color: 'bg-blue-600', text: 'text-blue-600' };
        return { label: 'PREPARING', color: 'bg-emerald-500', text: 'text-emerald-500' };
    };

    const status = getStatusInfo();

    const handleAdvance = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsProcessing(true);
        advanceStage(orderId);
        playSound('BUMP_ORDER');
        setTimeout(() => setIsProcessing(false), 500);
    };

    const handlePrint = async (e: React.MouseEvent) => {
        e.stopPropagation();
        const state = useKDSStore.getState();
        const result = await printOrder(orderId, (id) => state.orders[id], {
            station_print_mode: state.station_print_mode,
            selectedStationId: state.selectedStationId,
            enable_station_routing: state.enable_station_routing,
            category_station_map: state.category_station_map,
            item_station_map: state.item_station_map,
            allow_item_station_override: state.allow_item_station_override
        });
        if (result.status === 'SUCCESS') kdsToast.success(result.message);
    };

    return (
        <div
            className={`kds-ticket bg-white flex flex-col border-2 relative h-full animate-ticket transition-all group overflow-hidden ${isProcessing ? 'opacity-50' : ''
                } ${slaState === 'OVERDUE' ? 'border-red-500/20' : 'border-gray-100 hover:border-gray-300'
                }`}
        >
            {/* TICKET TOP BAR */}
            <div className={`h-1 w-full ${status.color}`} />

            {/* HEADER */}
            <div className="p-4 flex flex-col gap-1 border-b border-gray-50">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-gray-900 leading-none">
                            #{order.orderNumber}
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase">
                            {order.customerName || 'GUEST'}
                        </span>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-bold text-white ${status.color}`}>
                            <Zap size={10} className="animate-pulse" />
                            {status.label}
                        </div>
                        <span className="text-[8px] font-bold text-gray-300 mt-1 uppercase">
                            Due {new Date(new Date(order.createdAt).getTime() + order.prepTimeMinutes * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>
                </div>
            </div>

            {/* ITEMS CONTAINER */}
            <div
                className="p-4 space-y-3 flex-1 overflow-y-auto scrollbar-hide cursor-pointer"
                onClick={() => onViewDetail(orderId)}
            >
                {visibleItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold shrink-0 ${item.isCompleted ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-900 border border-gray-200/50'
                            }`}>
                            {item.quantity}
                        </div>
                        <div className="min-w-0">
                            <h4 className={`text-[13px] font-bold leading-tight uppercase ${item.isCompleted ? 'text-gray-300 line-through' : 'text-gray-900'
                                }`}>
                                {item.name}
                            </h4>
                            {item.modifiers.length > 0 && (
                                <div className="mt-1 flex flex-wrap gap-1">
                                    {item.modifiers.map((m, idx) => (
                                        <span key={idx} className="text-[9px] font-bold text-gray-400 uppercase">
                                            +{m.quantity && m.quantity > 1 ? `${m.quantity}x ` : ''}{m.name}
                                            {m.placement && m.placement !== 'FULL' && ` (${m.placement})`}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* QUICK ACTIONS */}
            <div className="p-3 bg-gray-50 border-t border-gray-100 mt-auto flex gap-2">
                {isFulfilled ? (
                    <div className="flex-1 h-9 rounded-xl flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200">
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">✓ Completed</span>
                        <span className="text-[9px] font-bold text-emerald-400 font-mono">{timer}</span>
                    </div>
                ) : (
                    <button
                        onClick={handleAdvance}
                        disabled={isProcessing}
                        className={`flex-1 h-9 rounded-xl flex items-center justify-between px-4 text-white transition-all active:scale-[0.98] border-b-2 active:border-b-0 ${order.stage === 'NEW' ? 'bg-gray-800 border-gray-950 hover:bg-black' :
                            order.stage === 'ACCEPTED' ? 'bg-emerald-600 border-emerald-800 hover:bg-emerald-700' :
                                order.stage === 'RECALLED' ? 'bg-teal-600 border-teal-800 hover:bg-teal-700' :
                                    order.stage === 'FIRED' ? 'bg-[#E67E22] border-[#D35400] hover:bg-[#D35400]' :
                                        'bg-blue-600 border-blue-800 hover:bg-blue-700'
                            }`}
                    >
                        <span className="text-[9px] font-bold uppercase">
                            {order.stage === 'NEW' ? 'Confirm' :
                                order.stage === 'ACCEPTED' ? 'Start' :
                                    order.stage === 'RECALLED' ? 'Re-Queue' :
                                        order.stage === 'FIRED' ? 'Ready' : 'Done'}
                        </span>
                        <span className="text-[10px] font-bold font-mono bg-black/20 px-1.5 py-0.5 rounded">{timer}</span>
                    </button>
                )}
                <button
                    onClick={handlePrint}
                    className="w-10 h-9 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                    title="Print"
                >
                    <Printer size={16} />
                </button>
                <button
                    onClick={() => onViewDetail(orderId)}
                    className="w-10 h-9 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                    title="Expand"
                >
                    <Eye size={16} />
                </button>
            </div>
        </div>
    );
});
