'use client';

import React, { useMemo } from 'react';
import { useKDSStore } from '../store/kdsStore';
import { useFilterStore } from '../store/useFilterStore';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { KDSOrder } from '../types/kds';

interface KDSFooterProps {
    totalPages?: number;
}

export const KDSFooter: React.FC<KDSFooterProps> = ({ totalPages = 1 }) => {
    const ordersMap = useKDSStore((state) => state.orders);
    const fulfilledOrders = useKDSStore((state) => state.fulfilledOrders);

    const { stage: currentStage, setStage, currentPage, setCurrentPage } = useFilterStore();
    const counts = useMemo(() => {
        const allOrders = Object.values(ordersMap);
        return {
            all: allOrders.length,
            queue: allOrders.filter((o: KDSOrder) => o.stage === 'NEW').length,
            cooking: allOrders.filter((o: KDSOrder) => o.stage === 'FIRED').length,
            packing: allOrders.filter((o: KDSOrder) => o.stage === 'READY').length,
            delayed: allOrders.filter((o: KDSOrder) => o.isDelayed).length,
            completed: fulfilledOrders.length
        };
    }, [ordersMap, fulfilledOrders]);

    const FilterItem = ({ label, count, id, active }: { label: string, count: number, id: any, active: boolean }) => (
        <div
            onClick={() => setStage(id)}
            className={`flex items-center h-full px-1 border-b-2 transition-all cursor-pointer ${active ? 'border-black' : 'border-transparent hover:border-gray-300'}`}
        >
            <span className={`text-sm font-bold flex items-center gap-1.5 uppercase ${active ? 'text-black' : 'text-gray-400'}`}>
                {label} <span className="opacity-40">{count}</span>
            </span>
        </div>
    );

    const canGoPrev = currentPage > 0;
    const canGoNext = currentPage < totalPages - 1;

    return (
        <footer className="h-[56px] bg-white border-t border-gray-200 flex items-center justify-between px-6 shrink-0 z-50">
            {/* LEFT: placeholder */}
            <div className="w-1/4" />

            {/* CENTER: Stage Filters */}
            <div className="flex items-center h-full gap-8">
                <FilterItem label="View All" count={counts.all} id="ALL" active={currentStage === 'ALL'} />
                <FilterItem label="Queue" count={counts.queue} id="NEW" active={currentStage === 'NEW'} />
                <FilterItem label="Cooking" count={counts.cooking} id="FIRED" active={currentStage === 'FIRED'} />
                <FilterItem label="Packing" count={counts.packing} id="READY" active={currentStage === 'READY'} />
                <FilterItem label="Delayed" count={counts.delayed} id="DELAYED" active={currentStage === 'DELAYED'} />
                <FilterItem label="Completed" count={counts.completed} id="FULFILLED" active={currentStage === 'FULFILLED'} />
            </div>

            {/* RIGHT: Pagination — only shown when there are multiple pages */}
            <div className="flex items-center justify-end gap-3 w-1/4">
                {totalPages > 1 && (
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <button
                            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                            disabled={!canGoPrev}
                            className={`p-2 border-r border-gray-200 transition-colors ${canGoPrev ? 'hover:bg-gray-100 text-gray-600 active:bg-gray-200' : 'text-gray-200 cursor-not-allowed'}`}
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <div className="px-4 py-1 bg-gray-50 flex items-center">
                            <span className="text-[11px] font-bold text-gray-900 tabular-nums">
                                {currentPage + 1} / {totalPages}
                            </span>
                        </div>
                        <button
                            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                            disabled={!canGoNext}
                            className={`p-2 border-l border-gray-200 transition-colors ${canGoNext ? 'hover:bg-gray-100 text-gray-600 active:bg-gray-200' : 'text-gray-200 cursor-not-allowed'}`}
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>
        </footer>
    );
};
