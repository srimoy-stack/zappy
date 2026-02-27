'use client';

import { useEffect } from 'react';
import { KDSHeader } from '@/modules/kds/components/KDSHeader';
import { KDSActionBar } from '@/modules/kds/components/KDSActionBar';
import { KDSColumn } from '@/modules/kds/components/board/KDSColumn';
import { useKDSStore } from '@/modules/kds/store/kdsStore';
import { useShallow } from 'zustand/react/shallow';
import { useFilterStore } from '@/modules/kds/store/useFilterStore';

import { KitchenStage } from '@/modules/kds/types/kds';
import { useAuth } from '@/app/providers/AuthProvider';
import { isKDSModuleActive } from '@/modules/kds/utils/kdsModuleFlags';
import { AlertCircle } from 'lucide-react';
import { OrderTicket } from '@/modules/kds/components/ticket/OrderTicket';

export default function KDSMasterPage() {
    const { addOrUpdateOrder, autoInitNetworkListener } = useKDSStore();
    const { enabledModules } = useAuth();
    const { viewMode } = useFilterStore();

    // We only need to know if there are any orders at all for the empty state.
    const hasOrders = useKDSStore(useShallow((state) => Object.keys(state.orders).length > 0));
    const orders = useKDSStore(useShallow((state) => Object.values(state.orders)));

    useEffect(() => {
        autoInitNetworkListener();
    }, [autoInitNetworkListener]);

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
        if (!hasOrders) {
            // Dominos Style Multi-Item Order
            addOrUpdateOrder({
                id: 'm-1', orderNumber: '1023', order_source: 'ONLINE', fulfillment_type: 'STORE_DELIVERY',
                createdAt: new Date(Date.now() - 500000).toISOString(), updatedAt: new Date().toISOString(), stage: 'ACCEPTED', prepTimeMinutes: 12, estimatedReadyTime: '12:00',
                isDelayed: false, trackingToken: '550e8400-e29b-41d4-a716-446655440000', items: [
                    { name: 'Meat Feast Pizza', variant: 'Large', quantity: 2, modifiers: [] },
                    { name: 'Garlic Pizza Bread', quantity: 1, modifiers: [] }
                ],
                notes: 'GIVE EXTRA KETCHUP'
            });
            // Urgent Store Order
            addOrUpdateOrder({
                id: 'm-2', orderNumber: '1024', order_source: 'POS', fulfillment_type: 'PICKUP',
                createdAt: new Date(Date.now() - 200000).toISOString(), updatedAt: new Date().toISOString(), stage: 'PREPARATION', prepTimeMinutes: 8, estimatedReadyTime: '12:15',
                isDelayed: false, isPriority: true, trackingToken: '3f8e4b7a-1234-4a5b-bcde-1234567890ab', items: [
                    { name: 'Veg Supreme Pizza', variant: 'Medium', quantity: 1, modifiers: [] },
                    { name: 'Potato Wedges', quantity: 3, modifiers: [] }
                ]
            });
            // Complex Custom Order
            addOrUpdateOrder({
                id: 'm-3', orderNumber: '1025', order_source: 'KIOSK', fulfillment_type: 'PICKUP',
                createdAt: new Date(Date.now() - 100000).toISOString(), updatedAt: new Date().toISOString(), stage: 'CUTTING', prepTimeMinutes: 15, estimatedReadyTime: '12:20',
                isDelayed: false, trackingToken: '9d8c2b1a-5678-4c9d-8e7f-abcdef123456', items: [
                    {
                        name: 'Pepperoni Passion',
                        variant: 'Personal',
                        quantity: 1,
                        modifiers: [{ name: 'Double Cheese', groupType: 'CHOICE_ONE', quantity: 2 }]
                    }
                ]
            });
        }
    }, [hasOrders, addOrUpdateOrder]);

    const stages: { id: KitchenStage; title: string }[] = [
        { id: 'ACCEPTED', title: 'Accepted' },
        { id: 'PREPARATION', title: 'Preparation' },
        { id: 'CUTTING', title: 'Cutting' },
        { id: 'READY', title: 'Ready' }
    ];

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-900 shadow-2xl">
            <KDSHeader />

            <main className="flex-1 overflow-hidden relative">
                {viewMode === 'KANBAN' ? (
                    <div className="kds-board h-full">
                        {stages.map((stage) => (
                            <KDSColumn
                                key={stage.id}
                                title={stage.title}
                                stage={stage.id}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={`kds-universal-grid h-full ${viewMode === 'COMPACT' ? 'compact' : ''}`}>
                        {orders.slice(0, viewMode === 'COMPACT' ? 9 : 6).map((order) => (
                            <div key={order.id} className="h-full overflow-hidden">
                                <OrderTicket order={order} />
                            </div>
                        ))}
                        {/* Placeholder slots to maintain grid shape */}
                        {orders.length < (viewMode === 'COMPACT' ? 9 : 6) &&
                            Array.from({ length: (viewMode === 'COMPACT' ? 9 : 6) - orders.length }).map((_, i) => (
                                <div key={`empty-${i}`} className="h-full border-2 border-dashed border-slate-800/50 flex flex-col items-center justify-center bg-slate-900/40">
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-800 flex items-center justify-center mb-2">
                                        <AlertCircle size={20} className="text-slate-800" />
                                    </div>
                                    <span className="text-slate-800 font-black uppercase tracking-[0.2em] text-[10px]">Station Idle</span>
                                </div>
                            ))}
                    </div>
                )}

                {!hasOrders && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-slate-500 font-black uppercase tracking-[0.2em] animate-pulse text-2xl">
                            Waiting for orders...
                        </div>
                    </div>
                )}
            </main>

            <KDSActionBar />
        </div>
    );
}
