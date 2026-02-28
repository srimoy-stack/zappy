import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FulfillmentType, OrderSource } from '../types/kds';

export type FulfillmentFilter = FulfillmentType | 'ALL';
export type SourceFilter = OrderSource | 'ALL';
export type KDSStation = 'MAKE_LINE' | 'OVEN' | 'CUT_BOX' | 'EXPO' | 'ALL';
export type KDSViewMode = 'KANBAN' | 'GRID' | 'COMPACT' | 'SUMMARY' | 'ALL_DAY';

interface FilterState {
    fulfillment: FulfillmentFilter;
    source: SourceFilter;
    viewMode: KDSViewMode;
    showRecentlyFulfilled: boolean;
    setFulfillment: (filter: FulfillmentFilter) => void;
    setSource: (filter: SourceFilter) => void;
    setViewMode: (mode: KDSViewMode) => void;
    setShowRecentlyFulfilled: (show: boolean) => void;
    resetFilters: () => void;
}

export const useFilterStore = create<FilterState>()(
    persist(
        (set) => ({
            fulfillment: 'ALL',
            source: 'ALL',
            viewMode: 'KANBAN',
            showRecentlyFulfilled: true,
            setFulfillment: (fulfillment) => set({ fulfillment }),
            setSource: (source) => set({ source }),
            setViewMode: (viewMode) => set({ viewMode }),
            setShowRecentlyFulfilled: (showRecentlyFulfilled) => set({ showRecentlyFulfilled }),
            resetFilters: () => set({ fulfillment: 'ALL', source: 'ALL', viewMode: 'KANBAN', showRecentlyFulfilled: true }),
        }),
        {
            name: 'kds-filter-settings',
        }
    )
);
