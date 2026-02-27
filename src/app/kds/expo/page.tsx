'use client';

import { useEffect, useState, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { Inbox, AlertTriangle } from 'lucide-react';
import { KDSHeader } from '@/modules/kds/components/KDSHeader';
import { ExpoCard } from '@/modules/kds/components/expo/ExpoCard';
import { useKDSStore } from '@/modules/kds/store/kdsStore';
import { useFilterStore } from '@/modules/kds/store/useFilterStore';
import { FulfillmentType } from '@/modules/kds/types/kds';
import { emitEvent } from '@/modules/kds/services/kdsEventDispatcher';
import { getSLAState } from '@/modules/kds/utils/slaUtils';
import { useAuth } from '@/app/providers/AuthProvider';
import { isKDSModuleActive } from '@/modules/kds/utils/kdsModuleFlags';

// ─────────────────────────────────────────────────────────────────────────────
//  KDS Expo Page — Read-only display of READY orders
//  - Large display optimised for expo / handoff station
//  - Sorted by ready time (earliest first → most urgent on top-left)
//  - Overdue orders highlighted with red border + animated header
//  - Actions: Handed Over (removes order), Print Receipt (placeholder)
//  - No editing allowed
// ─────────────────────────────────────────────────────────────────────────────

export default function KDSExpoPage() {
    const { fulfillment: filter, setFulfillment: setFilter } = useFilterStore();
    const { addOrUpdateOrder, removeOrder } = useKDSStore();
    const [handingOverId, setHandingOverId] = useState<string | null>(null);
    const { enabledModules } = useAuth();

    if (!isKDSModuleActive(enabledModules)) {
        return (
            <div className="h-screen w-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                    <AlertTriangle size={40} className="text-red-500" />
                </div>
                <h1 className="text-2xl font-black text-white uppercase tracking-widest mb-2">KDS Module Inactive</h1>
                <p className="text-slate-400 max-w-md font-medium">
                    This feature requires <span className="text-white font-bold">Module 1A (KDS)</span> to be active.
                </p>
            </div>
        );
    }

    // ── Seed mock READY orders if the board is empty ──────────────────────────
    useEffect(() => {
        const hasReady = Object.values(useKDSStore.getState().orders).some(
            o => o.stage === 'READY'
        );
        if (!hasReady) {
            addOrUpdateOrder({
                id: 'expo-1',
                orderNumber: '5001',
                order_source: 'POS',
                fulfillment_type: 'PICKUP',
                createdAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
                updatedAt: new Date().toISOString(),
                stage: 'READY',
                prepTimeMinutes: 10,
                estimatedReadyTime: '',
                isDelayed: false,
                trackingToken: 'tok-5001',
                customerName: 'Arjun Mehta',
                items: [
                    {
                        name: 'Farmhouse Pizza',
                        variant: 'Large',
                        modifiers: [
                            { name: 'Extra Cheese', groupType: 'PLACEMENT_TOPPING', placement: 'FULL' },
                            { name: 'Thin Crust', groupType: 'CHOICE_ONE' }
                        ]
                    },
                    { name: 'Garlic Bread', modifiers: [] }
                ]
            });

            addOrUpdateOrder({
                id: 'expo-2',
                orderNumber: '5002',
                order_source: 'ONLINE',
                fulfillment_type: 'STORE_DELIVERY',
                createdAt: new Date(Date.now() - 1000 * 60 * 7).toISOString(),
                updatedAt: new Date().toISOString(),
                stage: 'READY',
                prepTimeMinutes: 20,
                estimatedReadyTime: '',
                isDelayed: false,
                trackingToken: 'tok-5002',
                customerName: 'Priya Sharma',
                items: [
                    {
                        name: 'Classic Burger',
                        modifiers: [
                            { name: 'Jalapeños', groupType: 'QUANTITY_ONLY', quantity: 2 },
                            { name: 'No Onion', groupType: 'PLACEMENT_TOPPING' }
                        ]
                    }
                ]
            });

            addOrUpdateOrder({
                id: 'expo-3',
                orderNumber: '5003',
                order_source: 'UBER_DIRECT',
                fulfillment_type: 'UBER_DIRECT_DELIVERY',
                createdAt: new Date(Date.now() - 1000 * 60 * 32).toISOString(),
                updatedAt: new Date().toISOString(),
                stage: 'READY',
                prepTimeMinutes: 15,
                estimatedReadyTime: '',
                isDelayed: true,
                delayReason: 'Packaging delay',
                trackingToken: 'tok-5003',
                customerName: 'Rohan Verma',
                items: [
                    { name: 'Veggie Supreme', variant: 'Medium', modifiers: [] },
                    { name: 'Cola 600ml', modifiers: [] }
                ]
            });
        }
    }, [addOrUpdateOrder]);

    // ── Subscribe: READY only, sorted by createdAt (earliest = most urgent) ───
    const orders = useKDSStore(useShallow(state =>
        Object.values(state.orders)
            .filter(o =>
                o.stage === 'READY' &&
                (filter === 'ALL' || o.fulfillment_type === filter)
            )
            .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    ));

    // ── Derived counts for the header bar ────────────────────────────────────
    const overdueCount = useMemo(
        () => orders.filter(o => getSLAState(o.createdAt, o.prepTimeMinutes) === 'OVERDUE').length,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [orders.map(o => o.id).join(',')]
    );

    // ── Hand Over ─────────────────────────────────────────────────────────────
    const handleHandOver = async (orderId: string) => {
        if (handingOverId) return; // prevent double-tap
        setHandingOverId(orderId);

        // Emit domain event
        emitEvent('order.handed_over', { orderId }, { idempotencyKey: `handover-${orderId}` });

        // Visual confirmation delay, then remove from board
        await new Promise(r => setTimeout(r, 600));
        removeOrder(orderId);
        setHandingOverId(null);
    };

    // ── Print Receipt ─────────────────────────────────────────────────────────
    const handlePrint = (orderId: string) => {
        const order = useKDSStore.getState().orders[orderId];
        if (!order) return;

        emitEvent('order.receipt_printed', { orderId, orderNumber: order.orderNumber });

        // Placeholder — in production: call thermal printer API / window.print()
        console.log(`[Expo] Print receipt for order #${order.orderNumber}`);
        alert(`🖨 Receipt sent to printer for Order #${order.orderNumber}`);
    };

    const fulfillmentFilters: (FulfillmentType | 'ALL')[] = [
        'ALL', 'PICKUP', 'STORE_DELIVERY', 'UBER_DIRECT_DELIVERY'
    ];

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-950">
            <KDSHeader />

            {/* ── Sub-header ── */}
            <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between shrink-0">
                <div className="flex flex-col">
                    <h1 className="text-[15px] font-black text-white uppercase tracking-[0.25em]">
                        Expo Display
                    </h1>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Ready Orders · Handoff Station
                    </span>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2">
                    {fulfillmentFilters.map(type => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filter === type
                                ? 'bg-white text-slate-900 shadow-lg'
                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                }`}
                        >
                            {type.replace(/_/g, ' ')}
                        </button>
                    ))}
                </div>

                {/* Live counters */}
                <div className="flex items-center gap-3">
                    {overdueCount > 0 && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 rounded-lg">
                            <AlertTriangle size={13} className="text-white animate-bounce" />
                            <span className="text-white text-[11px] font-black uppercase tracking-widest">
                                {overdueCount} Overdue
                            </span>
                        </div>
                    )}
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg shadow-lg shadow-green-900/40">
                        <span className="text-white text-sm font-black tracking-widest">
                            {orders.length} READY
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Main grid ── */}
            <main className="flex-1 overflow-y-auto p-8 bg-slate-950">
                {orders.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center gap-6 select-none">
                        <div className="w-28 h-28 rounded-full border-4 border-dashed border-slate-700 flex items-center justify-center">
                            <Inbox size={40} className="text-slate-700" />
                        </div>
                        <div className="text-center space-y-2">
                            <p className="text-[22px] font-black text-slate-600 uppercase tracking-[0.2em]">
                                No Ready Orders
                            </p>
                            <p className="text-sm font-bold text-slate-700 uppercase tracking-widest">
                                Waiting for kitchen...
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-500">
                        {orders.map(order => (
                            <ExpoCard
                                key={order.id}
                                order={order}
                                onHandOver={handleHandOver}
                                onPrint={handlePrint}
                                isHandingOver={handingOverId === order.id}
                            />
                        ))}
                    </div>
                )}
            </main>

            {/* ── Footer status strip ── */}
            <div className="shrink-0 bg-slate-900 border-t border-slate-800 px-8 py-2 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                    Expo — Read Only Mode
                </span>
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                    Sorted by order time · Earliest first
                </span>
            </div>
        </div>
    );
}
