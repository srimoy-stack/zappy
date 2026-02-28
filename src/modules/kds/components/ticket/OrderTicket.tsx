'use client';

import { useState, useEffect, memo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { Printer } from 'lucide-react';
import { printOrder } from '../../services/printService';
import { kdsToast } from '../toast/KDSToast';
import { OrderDetailModal } from '../modals/OrderDetailModal';
import { DelayOrderModal } from '../modals/DelayOrderModal';
import { CustomerMessagingModal } from '../modals/CustomerMessagingModal';
import { useKDSStore, KDSState } from '../../store/kdsStore';
import { TicketTimer } from './TicketTimer';
import { useKDSSound } from '../sound/useKDSSound';
import { useAuth } from '@/app/providers/AuthProvider';
import { KDSRole } from '../../utils/kdsAccess';
import { getSLAState } from '../../utils/slaUtils';

interface Props {
    orderId: string;
}

export const OrderTicket = memo(({ orderId }: Props) => {
    const {
        order,
        enable_station_routing,
        selectedStationId,
        category_station_map,
        allow_item_station_override,
        item_station_map,
        master_screen_view_mode
    } = useKDSStore(useShallow((state: KDSState) => ({
        order: state.orders[orderId],
        enable_station_routing: state.enable_station_routing,
        selectedStationId: state.selectedStationId,
        category_station_map: state.category_station_map,
        allow_item_station_override: state.allow_item_station_override,
        item_station_map: state.item_station_map,
        master_screen_view_mode: state.master_screen_view_mode
    })));

    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isDelayModalOpen, setIsDelayModalOpen] = useState(false);
    const [isMessagingModalOpen, setIsMessagingModalOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const {
        advanceStage,
        toggleItemCompletion
    } = useKDSStore.getState();

    const { playSound } = useKDSSound();
    const { role: authRole } = useAuth();

    if (!order) return null;

    const [slaState, setSlaState] = useState<'ON_TIME' | 'WARNING' | 'OVERDUE'>(
        getSLAState(order.createdAt, order.prepTimeMinutes)
    );

    useEffect(() => {
        const checkSLA = () => {
            const newState = getSLAState(order.createdAt, order.prepTimeMinutes);
            setSlaState(prev => prev !== newState ? newState : prev);
        };
        const interval = setInterval(checkSLA, 5000);
        return () => clearInterval(interval);
    }, [order.createdAt, order.prepTimeMinutes]);

    const getHeaderBg = () => {
        if (order.isHeld) return 'bg-slate-800';
        switch (slaState) {
            case 'OVERDUE': return 'bg-red-600 text-white';
            case 'WARNING': return 'bg-amber-500 text-black';
            default: return 'bg-[#0F1115] text-white';
        }
    };

    const handleAdvance = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsProcessing(true);
        advanceStage(orderId);
        playSound('BUMP_ORDER');
        setTimeout(() => setIsProcessing(false), 500);
    };

    // Filter items based on routing settings
    const visibleItems = order.items.filter(item => {
        if (!enable_station_routing || selectedStationId === 'ALL') return true;
        if (master_screen_view_mode === 'FULL_ORDER') return true;

        const catStation = (item.categoryId && category_station_map[item.categoryId]) || 'kitchen';
        const itemStationId = (allow_item_station_override && item_station_map[item.name]) || catStation;
        return itemStationId === selectedStationId;
    });

    if (visibleItems.length === 0) return null;

    const handleItemToggle = (e: React.MouseEvent, itemId: string) => {
        e.stopPropagation();
        toggleItemCompletion(order.id, itemId);
        playSound('ORDER_UPDATED');
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

        if (result.status === 'SUCCESS') {
            kdsToast.success(result.message);
        }
    };

    const isUberDirect = order.order_source === 'UBER_DIRECT';

    return (
        <>
            <div
                className={`kds-ticket bg-[#0A0C10] flex flex-col select-none transition-all border-r border-slate-800/60 ${isUberDirect ? 'border-l-[6px] border-l-emerald-500' : ''} ${isProcessing ? 'opacity-50' : ''}`}
            >
                {/* HEADER: Order # + Timer + Source/Type */}
                <div className={`px-4 py-3 flex justify-between items-center ${getHeaderBg()}`}>
                    <div>
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="px-2 py-0.5 bg-black/30 text-white rounded text-[11px] font-black uppercase tracking-wider">{order.order_source}</span>
                            <span className="text-[11px] font-black uppercase tracking-wider opacity-70">{order.fulfillment_type.replace('_', ' ')}</span>
                            {order.isPriority && (
                                <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-black uppercase rounded animate-pulse">RUSH</span>
                            )}
                        </div>
                        <h2 className="font-black text-4xl leading-none tracking-tighter">
                            #{order.orderNumber}
                        </h2>
                    </div>
                    <TicketTimer
                        createdAt={order.createdAt}
                        prepTimeMinutes={order.prepTimeMinutes}
                        stageStartedAt={order.stageStartedAt}
                    />
                </div>

                {/* ITEMS - NO SCROLL, EVERYTHING VISIBLE */}
                <div className="p-3 space-y-2">
                    {visibleItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={(e) => handleItemToggle(e, item.id)}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${item.isCompleted ? 'bg-emerald-500/5 opacity-40' : 'bg-slate-800/30 hover:bg-slate-800/50'}`}
                        >
                            {/* QTY */}
                            <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-black text-2xl border ${item.isCompleted ? 'bg-emerald-500 text-white border-emerald-400' : 'bg-black text-amber-500 border-slate-700'}`}>
                                {item.isCompleted ? '✓' : item.quantity}
                            </div>

                            <div className="flex-1 min-w-0">
                                {/* ITEM NAME */}
                                <h3 className={`font-black text-xl uppercase leading-tight tracking-tight ${item.isCompleted ? 'text-slate-600 line-through' : 'text-white'}`}>
                                    {item.name}
                                </h3>

                                {/* VARIANT */}
                                {item.variant && (
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mt-0.5">
                                        {item.variant}
                                    </span>
                                )}

                                {/* ALL MODIFIERS / TOPPINGS / CUSTOMIZATIONS - ALWAYS VISIBLE */}
                                {item.modifiers.length > 0 && !item.isCompleted && (
                                    <div className="mt-1.5 flex flex-wrap gap-1">
                                        {item.modifiers.map((mod, idx) => (
                                            <span key={idx} className="inline-flex items-center bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-blue-500/15">
                                                <span className="text-blue-500 mr-1 font-black">+</span>
                                                {mod.name}{mod.quantity && mod.quantity > 1 ? ` ×${mod.quantity}` : ''}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ALERTS: Allergies + Notes - ALWAYS VISIBLE */}
                {((order.allergies?.length || 0) > 0 || order.notes) && (
                    <div className="px-3 pb-2 space-y-1.5">
                        {(order.allergies?.length || 0) > 0 && (
                            <div className="px-3 py-2 bg-red-600 text-white rounded-lg animate-pulse">
                                <span className="text-[8px] font-black uppercase tracking-widest block opacity-80">⚠ ALLERGY</span>
                                <p className="text-sm font-black uppercase leading-tight">{order.allergies?.join(', ')}</p>
                            </div>
                        )}
                        {order.notes && (
                            <div className="px-3 py-2 bg-blue-600/10 border-l-4 border-blue-500 rounded-r-lg">
                                <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest block">NOTE</span>
                                <p className="text-white font-bold uppercase text-sm leading-tight">{order.notes}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* ACTION BUTTONS */}
                <div className="p-3 mt-auto flex gap-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsDetailModalOpen(true); }}
                        className="px-4 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all active:scale-95 shrink-0"
                    >
                        Details
                    </button>
                    <button
                        onClick={handlePrint}
                        className="px-4 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all active:scale-95 shrink-0"
                        title="Print Receipt"
                    >
                        <Printer size={16} />
                    </button>
                    <button
                        onClick={handleAdvance}
                        disabled={isProcessing}
                        className={`flex-1 py-3 rounded-xl font-black text-lg uppercase tracking-widest transition-all shadow-lg active:scale-[0.97] border-b-4 ${order.stage === 'READY' ? 'bg-white text-black border-slate-300 hover:bg-slate-100' :
                            order.stage === 'NEW' ? 'bg-amber-500 text-black border-amber-700 hover:bg-amber-400' :
                                'bg-sky-500 text-white border-sky-700 hover:bg-sky-400'
                            }`}
                    >
                        {isProcessing ? '...' : (
                            order.stage === 'READY' ? 'BUMP' :
                                order.stage === 'FIRED' ? 'FULFILL' :
                                    order.stage === 'RECALLED' ? 'REDO' :
                                        order.stage === 'NEW' ? 'FIRE' : 'NEXT'
                        )}
                    </button>
                </div>
            </div>

            <OrderDetailModal
                isOpen={isDetailModalOpen}
                order={order}
                onClose={() => setIsDetailModalOpen(false)}
            />

            <DelayOrderModal
                isOpen={isDelayModalOpen}
                onClose={() => setIsDelayModalOpen(false)}
                onConfirm={() => { }}
                orderNumber={order.orderNumber}
            />

            <CustomerMessagingModal
                isOpen={isMessagingModalOpen}
                order={order}
                onClose={() => setIsMessagingModalOpen(false)}
                onSend={() => { }}
                role={authRole as KDSRole || 'KDS_USER'}
            />
        </>
    );
});
