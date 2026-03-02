'use client';

import { useEffect, useMemo, useState } from 'react';
import { KDSHeader } from '@/modules/kds/components/KDSHeader';
import { KDSFooter } from '@/modules/kds/components/KDSFooter';
import { KDSSidebar } from '@/modules/kds/components/KDSSidebar';
import { useKDSStore } from '@/modules/kds/store/kdsStore';
import { useFilterStore } from '@/modules/kds/store/useFilterStore';
import { isKDSModuleActive } from '@/modules/kds/utils/kdsModuleFlags';
import { AlertCircle } from 'lucide-react';
import { OrderTicket } from '@/modules/kds/components/ticket/OrderTicket';
import { useAuth } from '@/app/providers/AuthProvider';
import { ProductionSummary } from '@/modules/kds/components/board/ProductionSummary';
import { RoutingConfig } from '@/modules/kds/components/board/RoutingConfig';
import { SoundConfig } from '@/modules/kds/components/sound/SoundConfig';
import { OrderDetailModal } from '@/modules/kds/components/modals/OrderDetailModal';

export default function KDSMasterPage() {
    const { addOrUpdateOrder, autoInitNetworkListener, cleanupFulfilledOrders } = useKDSStore();
    const { enabledModules } = useAuth();

    const ordersMap = useKDSStore((state) => state.orders);
    const fulfilledOrders = useKDSStore((state) => state.fulfilledOrders);
    const recallFulfilledOrder = useKDSStore((state) => state.recallFulfilledOrder);

    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

    const {
        viewMode,
        fulfillment: fulfillmentFilter,
        source: sourceFilter,
        stage: stageFilter,
        showRecentlyFulfilled
    } = useFilterStore();

    useEffect(() => {
        autoInitNetworkListener();
        const interval = setInterval(() => cleanupFulfilledOrders(), 60000);
        return () => clearInterval(interval);
    }, [autoInitNetworkListener, cleanupFulfilledOrders]);

    // Apply Global Filters
    const filteredOrders = useMemo(() => {
        return Object.values(ordersMap).filter(order => {
            const matchesFulfillment = fulfillmentFilter === 'ALL' || order.fulfillment_type === fulfillmentFilter;
            const matchesSource = sourceFilter === 'ALL' || order.order_source === sourceFilter;

            let matchesStage = true;
            if (stageFilter === 'DELAYED') {
                matchesStage = order.isDelayed;
            } else if (stageFilter !== 'ALL') {
                matchesStage = order.stage === stageFilter;
            }

            return matchesFulfillment && matchesSource && matchesStage;
        });
    }, [ordersMap, fulfillmentFilter, sourceFilter, stageFilter]);

    // Mock Data Initialization
    useEffect(() => {
        if (Object.keys(ordersMap).length === 0) {
            const mockOrders = [
                { id: '1', orderNumber: '329', customerName: 'Samir Thai', fulfillment_type: 'PICKUP', order_source: 'ONLINE', createdAt: new Date(Date.now() - 600000).toISOString(), prepTimeMinutes: 15, stage: 'FIRED', isDelayed: true },
                { id: '2', orderNumber: '330', customerName: 'Amazebowls', fulfillment_type: 'PICKUP', order_source: 'POS', createdAt: new Date(Date.now() - 400000).toISOString(), prepTimeMinutes: 10, stage: 'FIRED', isDelayed: false },
                { id: '3', orderNumber: '331', customerName: 'Mama Musubi', fulfillment_type: 'DELIVERY', order_source: 'ONLINE', createdAt: new Date(Date.now() - 300000).toISOString(), prepTimeMinutes: 12, stage: 'FIRED', isDelayed: false },
                { id: '4', orderNumber: '332', customerName: 'Bad-Ass Breakfast', fulfillment_type: 'PICKUP', order_source: 'POS', createdAt: new Date(Date.now() - 200000).toISOString(), prepTimeMinutes: 20, stage: 'NEW', isDelayed: false },
                { id: '5', orderNumber: '333465882', customerName: 'The Halal Guys', fulfillment_type: 'DINE_IN', order_source: 'KIOSK', createdAt: new Date(Date.now() - 100000).toISOString(), prepTimeMinutes: 15, stage: 'NEW', isDelayed: false },
                { id: '6', orderNumber: '332', customerName: 'Bad-Ass Breakfast', fulfillment_type: 'PICKUP', order_source: 'POS', createdAt: new Date().toISOString(), prepTimeMinutes: 20, stage: 'NEW', isDelayed: false },
            ];

            mockOrders.forEach(o => addOrUpdateOrder({
                ...o,
                updatedAt: new Date().toISOString(),
                items: [
                    { id: o.id + '-1', name: 'Shrimp Dumpling Miso Soup', quantity: 1, modifiers: [], categoryId: 'cat-1' },
                    { id: o.id + '-2', name: 'Real Crab California Roll', quantity: 1, modifiers: [{ name: 'Premium White Rice', groupType: 'CHOICE' } as any], categoryId: 'cat-2' }
                ]
            } as any));
        }
    }, [addOrUpdateOrder, ordersMap]);

    if (!isKDSModuleActive(enabledModules)) {
        return (
            <div className="h-screen w-screen bg-white flex flex-col items-center justify-center p-6 text-center">
                <AlertCircle size={40} className="text-red-500 mb-4" />
                <h1 className="text-2xl font-black text-gray-900 uppercase mb-2">KDS Module Inactive</h1>
            </div>
        );
    }

    const selectedOrder = selectedOrderId ? ordersMap[selectedOrderId] : null;

    return (
        <div className="flex flex-col h-screen overflow-hidden kds-root bg-[#F3F4F6]">
            <KDSSidebar />

            {/* Conditional Header */}
            {['KANBAN', 'GRID', 'COMPACT'].includes(viewMode) && <KDSHeader />}

            <main className="flex-1 overflow-hidden relative flex flex-col">
                <div className="flex-1 overflow-hidden relative">
                    <div className="h-full universal-kds-layout">
                        {viewMode === 'SUMMARY' || viewMode === 'ALL_DAY' ? (
                            <div className="h-full w-full overflow-y-auto p-6 scrollbar-hide">
                                <ProductionSummary />
                            </div>
                        ) : viewMode === 'ROUTING' ? (
                            <RoutingConfig />
                        ) : viewMode === 'SOUND_SETTINGS' ? (
                            <SoundConfig />
                        ) : (
                            <div className="p-4 grid grid-cols-5 gap-4 h-full auto-rows-max overflow-y-auto scrollbar-hide">
                                {filteredOrders.map(order => (
                                    <div key={order.id} className="h-fit">
                                        <OrderTicket orderId={order.id} onViewDetail={setSelectedOrderId} />
                                    </div>
                                ))}
                                {filteredOrders.length === 0 && Object.keys(ordersMap).length > 0 && (
                                    <div className="col-span-12 flex flex-col items-center justify-center h-full opacity-30 mt-20">
                                        <AlertCircle size={48} className="mb-4 text-gray-400" />
                                        <span className="text-gray-400 font-black uppercase tracking-[0.2em] text-sm">No orders match current filters</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {['KANBAN', 'GRID', 'COMPACT'].includes(viewMode) && !Object.keys(ordersMap).length && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-gray-300 font-black uppercase tracking-[0.4em] text-lg">Waiting for orders</span>
                        </div>
                    )}
                </div>

                {/* RECENTLY FULFILLED STRIP */}
                {['KANBAN', 'GRID', 'COMPACT'].includes(viewMode) && fulfilledOrders.length > 0 && showRecentlyFulfilled && (
                    <div className="h-[74px] bg-white border-t border-gray-200 flex items-center px-6 gap-6 overflow-x-auto scrollbar-hide shrink-0 animate-in slide-in-from-bottom duration-300 transition-all">
                        <div className="flex items-center gap-2 pr-4 border-r border-gray-100 shrink-0">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Recently Fulfilled</span>
                        </div>
                        <div className="flex gap-4">
                            {fulfilledOrders.slice().reverse().slice(0, 10).map((order) => (
                                <div
                                    key={order.id}
                                    className="flex items-center gap-3 bg-gray-50 border border-gray-200 pl-3 pr-1.5 py-1.5 rounded-lg hover:border-gray-300 transition-all shrink-0 group"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[11px] font-black text-gray-900 leading-tight">#{order.orderNumber}</span>
                                        <span className="text-[9px] font-bold text-gray-400">
                                            {formatTimeOnly(order.updatedAt)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => recallFulfilledOrder(order.id)}
                                        className="p-2 hover:bg-black hover:text-white rounded-md transition-all text-gray-400"
                                        title="Recall Order"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            {['KANBAN', 'GRID', 'COMPACT', 'SUMMARY', 'ALL_DAY'].includes(viewMode) && <KDSFooter />}

            {/* Global Order Detail Modal */}
            {selectedOrder && (
                <OrderDetailModal
                    order={selectedOrder}
                    isOpen={!!selectedOrderId}
                    onClose={() => setSelectedOrderId(null)}
                />
            )}
        </div>
    );
}

function formatTimeOnly(dateIso: string) {
    return new Date(dateIso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
