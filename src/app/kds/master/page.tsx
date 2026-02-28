'use client';

import { useEffect } from 'react';
import { KDSHeader } from '@/modules/kds/components/KDSHeader';
import { KDSActionBar } from '@/modules/kds/components/KDSActionBar';
import { KDSColumn } from '@/modules/kds/components/board/KDSColumn';
import { ProductionSummary } from '@/modules/kds/components/board/ProductionSummary';
import { useKDSStore } from '@/modules/kds/store/kdsStore';
import { useShallow } from 'zustand/react/shallow';
import { useFilterStore } from '@/modules/kds/store/useFilterStore';

import { KitchenStage } from '@/modules/kds/types/kds';
import { useAuth } from '@/app/providers/AuthProvider';
import { isKDSModuleActive } from '@/modules/kds/utils/kdsModuleFlags';
import { AlertCircle, RotateCcw, Clock, CheckCircle2 } from 'lucide-react';
import { OrderTicket } from '@/modules/kds/components/ticket/OrderTicket';

export default function KDSMasterPage() {
    const { addOrUpdateOrder, autoInitNetworkListener, cleanupFulfilledOrders } = useKDSStore();
    const { enabledModules } = useAuth();
    const { viewMode, showRecentlyFulfilled } = useFilterStore();

    // We only need to know if there are any orders at all for the empty state.
    const hasOrders = useKDSStore(useShallow((state) => Object.keys(state.orders).length > 0));
    const orders = useKDSStore(useShallow((state) => Object.values(state.orders)));
    const { fulfilledOrders, recallFulfilledOrder } = useKDSStore(useShallow((state) => ({
        fulfilledOrders: state.fulfilledOrders,
        recallFulfilledOrder: state.recallFulfilledOrder
    })));

    useEffect(() => {
        autoInitNetworkListener();
    }, [autoInitNetworkListener]);

    // Periodic Cleanup of Fulfilled Orders
    useEffect(() => {
        const interval = setInterval(() => {
            cleanupFulfilledOrders();
        }, 60000); // Check every minute
        return () => clearInterval(interval);
    }, [cleanupFulfilledOrders]);

    if (!isKDSModuleActive(enabledModules)) {
        return (
            <div className="h-screen w-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                    <AlertCircle size={40} className="text-red-500" />
                </div>
                <h1 className="text-2xl font-black text-white uppercase tracking-widest mb-2">KDS Module Inactive</h1>
                <p className="text-slate-400 max-w-md font-medium">
                    This feature requires <span className="text-white font-bold">Module 1A (KDS)</span> to be active.
                    Please contact your system administrator or upgrade your plan.
                </p>
            </div>
        );
    }

    useEffect(() => {
        // Run cleanup every minute
        const cleanupInterval = setInterval(() => {
            useKDSStore.getState().cleanupFulfilledOrders();
        }, 60000);

        if (!hasOrders) {
            // Dominos Style Multi-Item Order
            addOrUpdateOrder({
                id: 'm-1', orderNumber: '1023', order_source: 'ONLINE', fulfillment_type: 'STORE_DELIVERY',
                createdAt: new Date(Date.now() - 500000).toISOString(), updatedAt: new Date().toISOString(), stage: 'NEW', prepTimeMinutes: 12, estimatedReadyTime: '12:00',
                isDelayed: false, trackingToken: '550e8400-e29b-41d4-a716-446655440000', items: [
                    { id: 'i-1-1', name: 'Meat Feast Pizza', variant: 'Large', quantity: 2, modifiers: [], categoryId: 'cat-pizza' },
                    { id: 'i-1-2', name: 'Garlic Pizza Bread', quantity: 1, modifiers: [], categoryId: 'cat-sides' }
                ],
                notes: 'GIVE EXTRA KETCHUP'
            });
            // Urgent Store Order
            addOrUpdateOrder({
                id: 'm-2', orderNumber: '1024', order_source: 'POS', fulfillment_type: 'PICKUP',
                createdAt: new Date(Date.now() - 200000).toISOString(), updatedAt: new Date().toISOString(), stage: 'FIRED', prepTimeMinutes: 8, estimatedReadyTime: '12:15',
                isDelayed: false, isPriority: true, trackingToken: '3f8e4b7a-1234-4a5b-bcde-1234567890ab', items: [
                    { id: 'i-2-1', name: 'Veg Supreme Pizza', variant: 'Medium', quantity: 1, modifiers: [], categoryId: 'cat-pizza' },
                    { id: 'i-2-2', name: 'Potato Wedges', quantity: 3, modifiers: [], categoryId: 'cat-sides' }
                ]
            });
            // Complex Custom Order
            addOrUpdateOrder({
                id: 'm-3', orderNumber: '1025', order_source: 'KIOSK', fulfillment_type: 'PICKUP',
                createdAt: new Date(Date.now() - 100000).toISOString(), updatedAt: new Date().toISOString(), stage: 'READY', prepTimeMinutes: 15, estimatedReadyTime: '12:20',
                isDelayed: false, trackingToken: '9d8c2b1a-5678-4c9d-8e7f-abcdef123456', items: [
                    {
                        id: 'i-3-1',
                        name: 'Pepperoni Passion',
                        variant: 'Personal',
                        quantity: 1,
                        modifiers: [{ name: 'Double Cheese', groupType: 'CHOICE_ONE', quantity: 2 }],
                        categoryId: 'cat-pizza'
                    },
                    {
                        id: 'i-3-2',
                        name: 'Coca Cola',
                        quantity: 2,
                        modifiers: [],
                        categoryId: 'cat-softdrinks'
                    }
                ]
            });
        }

        return () => clearInterval(cleanupInterval);
    }, [hasOrders, addOrUpdateOrder]);

    const stages: { id: KitchenStage; title: string }[] = [
        { id: 'NEW', title: 'New' },
        { id: 'FIRED', title: 'Fired' },
        { id: 'READY', title: 'Ready' },
        { id: 'RECALLED', title: 'Recalled' }
    ];

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-950 shadow-2xl kds-root">
            <KDSHeader />

            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* TOP STREAM: Production Summary (Aggregated Load) - Shown in board views, hidden in summary views */}
                {viewMode !== 'ALL_DAY' && viewMode !== 'SUMMARY' && (
                    <div className="h-[60px] border-b border-slate-800/50 bg-slate-900/20 shrink-0 overflow-hidden">
                        <ProductionSummary compact />
                    </div>
                )}

                {/* BOTTOM STREAM: Main Content Area */}
                <div className="flex-1 overflow-hidden relative bg-slate-950/40">
                    <div className="h-full kds-board-unified">
                        {viewMode === 'ALL_DAY' || viewMode === 'SUMMARY' ? (
                            <div className="h-full w-full animate-in fade-in zoom-in-95 duration-500">
                                <ProductionSummary />
                            </div>
                        ) : viewMode === 'KANBAN' ? (
                            <div className="kds-board-horizontal h-full">
                                {stages.map((stage) => (
                                    <KDSColumn
                                        key={stage.id}
                                        title={stage.title}
                                        stage={stage.id}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="kds-horizontal-grid h-full relative">
                                {orders.length > 0 ? (
                                    orders.map(order => (
                                        <div key={order.id} className="kds-grid-ticket-wrapper">
                                            <OrderTicket orderId={order.id} />
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex-1 flex items-center justify-center opacity-20">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Empty {viewMode} View</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {!hasOrders && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[100]">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center animate-pulse border border-blue-500/20">
                                <AlertCircle size={32} className="text-blue-500" />
                            </div>
                            <div className="text-slate-500 font-black uppercase tracking-[0.3em] text-lg">
                                Station Idle • Waiting for orders
                            </div>
                        </div>
                    </div>
                )}

                {/* RECENTLY FULFILLED STRIP */}
                {fulfilledOrders.length > 0 && showRecentlyFulfilled && (
                    <div className="h-[80px] bg-slate-900/80 backdrop-blur-md border-t border-slate-800 flex items-center px-6 gap-6 overflow-x-auto scrollbar-hide shrink-0 group animate-in fade-in slide-in-from-bottom duration-500">
                        <div className="flex items-center gap-2 pr-4 border-r border-slate-800 shrink-0">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Recently Fulfilled</span>
                        </div>
                        <div className="flex gap-4">
                            {fulfilledOrders.slice(0, 10).map((order) => (
                                <div
                                    key={order.id}
                                    className="flex items-center gap-4 bg-slate-950/50 border border-slate-800 pl-4 pr-2 py-2 rounded-2xl hover:border-blue-500/50 transition-all animate-in slide-in-from-left duration-300"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-white uppercase tracking-tighter">#{order.orderNumber}</span>
                                        <span className="text-[8px] font-bold text-slate-500 flex items-center gap-1">
                                            <Clock size={8} /> {new Date(order.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => recallFulfilledOrder(order.id)}
                                        className="p-2 bg-blue-500/10 hover:bg-blue-600 text-blue-500 hover:text-white rounded-xl transition-all active:scale-90"
                                        title="Recall Order"
                                    >
                                        <RotateCcw size={14} strokeWidth={3} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            <KDSActionBar />
        </div>
    );
}
