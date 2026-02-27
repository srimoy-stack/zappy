import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FulfillmentType, OrderSource } from '../types/kds';

export type FulfillmentFilter = FulfillmentType | 'ALL';
export type SourceFilter = OrderSource | 'ALL';
export type KDSStation = 'MAKE_LINE' | 'OVEN' | 'CUT_BOX' | 'EXPO' | 'ALL';
export type KDSViewMode = 'KANBAN' | 'GRID' | 'COMPACT';

interface FilterState {
    fulfillment: FulfillmentFilter;
    source: SourceFilter;
    station: KDSStation;
    viewMode: KDSViewMode;
    setFulfillment: (filter: FulfillmentFilter) => void;
    setSource: (filter: SourceFilter) => void;
    setStation: (station: KDSStation) => void;
    setViewMode: (mode: KDSViewMode) => void;
    resetFilters: () => void;
}

export const useFilterStore = create<FilterState>()(
    persist(
        (set) => ({
            fulfillment: 'ALL',
            source: 'ALL',
            station: 'ALL',
            viewMode: 'KANBAN',
            setFulfillment: (fulfillment) => set({ fulfillment }),
            setSource: (source) => set({ source }),
            setStation: (station) => set({ station }),
            setViewMode: (viewMode) => set({ viewMode }),
            resetFilters: () => set({ fulfillment: 'ALL', source: 'ALL', station: 'ALL', viewMode: 'KANBAN' }),
        }),
        {
            name: 'kds-filter-settings',
        }
    )
);
