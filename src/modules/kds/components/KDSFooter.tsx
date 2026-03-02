'use client';

import React, { useMemo } from 'react';
import { useKDSStore } from '../store/kdsStore';
import { useFilterStore } from '../store/useFilterStore';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const KDSFooter: React.FC = () => {
    const ordersMap = useKDSStore((state) => state.orders);
    const completedOrders = useKDSStore((state) => state.fulfilledOrders);

    const { stage: currentStage, setStage } = useFilterStore();

    const orders = useMemo(() => Object.values(ordersMap), [ordersMap]);

    const counts = useMemo(() => ({
        all: orders.length,
        queue: orders.filter(o => o.stage === 'NEW').length,
        cooking: orders.filter(o => o.stage === 'FIRED').length,
        packing: orders.filter(o => o.stage === 'READY').length,
        delayed: orders.filter(o => o.isDelayed).length,
        completed: completedOrders.length
    }), [orders, completedOrders]);

    const FilterItem = ({ label, count, id, active }: { label: string, count: number, id: any, active: boolean }) => (
        <div
            onClick={() => setStage(id)}
            className={`flex items-center h-full px-1 border-b-2 transition-all cursor-pointer ${active ? 'border-black' : 'border-transparent hover:border-gray-300'
                }`}
        >
            <span className={`text-sm font-bold flex items-center gap-1.5 uppercase ${active ? 'text-black' : 'text-gray-400'
                }`}>
                {label} <span className="opacity-40">{count}</span>
            </span>
        </div>
    );

    return (
        <footer className="h-[56px] bg-white border-t border-gray-200 flex items-center justify-between px-6 shrink-0 z-50">
            {/* LEFT: Placeholder to maintain 3-column distribution */}
            <div className="w-1/4" />

            {/* CENTER: Status Filters */}
            <div className="flex items-center h-full gap-8">
                <FilterItem label="View All" count={counts.all} id="ALL" active={currentStage === 'ALL'} />
                <FilterItem label="Queue" count={counts.queue} id="NEW" active={currentStage === 'NEW'} />
                <FilterItem label="Cooking" count={counts.cooking} id="FIRED" active={currentStage === 'FIRED'} />
                <FilterItem label="Packing" count={counts.packing} id="READY" active={currentStage === 'READY'} />
                <FilterItem label="Delayed" count={counts.delayed} id="DELAYED" active={currentStage === 'DELAYED'} />
                {/* Completed is usually a history view - for now just keep count */}
                <div className="flex items-center h-full px-1 border-b-2 border-transparent text-gray-400 opacity-50 cursor-default">
                    <span className="text-sm font-bold uppercase">Completed {counts.completed}</span>
                </div>
            </div>

            {/* RIGHT: Pagination */}
            <div className="flex items-center justify-end gap-4 w-1/4">
                <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                    <button className="p-2 hover:bg-gray-50 border-r border-gray-200 text-gray-400 transition-colors">
                        <ChevronUp size={16} />
                    </button>
                    <div className="px-3 bg-gray-50 flex items-center">
                        <span className="text-[11px] font-bold text-gray-900">Page 1 of 1</span>
                    </div>
                    <button className="p-2 hover:bg-gray-50 text-gray-400 transition-colors">
                        <ChevronDown size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};
