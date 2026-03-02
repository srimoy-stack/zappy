'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FulfillmentType, OrderSource, KitchenStage } from '../types/kds';

export type FulfillmentFilter = FulfillmentType | 'ALL';
export type SourceFilter = OrderSource | 'ALL';
export type KDSViewMode = 'KANBAN' | 'GRID' | 'COMPACT' | 'SUMMARY' | 'ALL_DAY' | 'ROUTING' | 'SOUND_SETTINGS';
export type StageFilter = KitchenStage | 'ALL' | 'DELAYED';

interface FilterState {
    fulfillment: FulfillmentFilter;
    source: SourceFilter;
    viewMode: KDSViewMode;
    stage: StageFilter;
    showRecentlyFulfilled: boolean;
    isSidebarOpen: boolean;
    setFulfillment: (filter: FulfillmentFilter) => void;
    setSource: (filter: SourceFilter) => void;
    setStage: (stage: StageFilter) => void;
    setViewMode: (mode: KDSViewMode) => void;
    setShowRecentlyFulfilled: (show: boolean) => void;
    setIsSidebarOpen: (isOpen: boolean) => void;
    resetFilters: () => void;
}

export const useFilterStore = create<FilterState>()(
    persist(
        (set) => ({
            fulfillment: 'ALL',
            source: 'ALL',
            viewMode: 'KANBAN',
            stage: 'ALL',
            showRecentlyFulfilled: true,
            isSidebarOpen: false,
            setFulfillment: (fulfillment) => set({ fulfillment }),
            setSource: (source) => set({ source }),
            setStage: (stage) => set({ stage }),
            setViewMode: (viewMode) => set({ viewMode }),
            setShowRecentlyFulfilled: (showRecentlyFulfilled) => set({ showRecentlyFulfilled }),
            setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
            resetFilters: () => set({
                fulfillment: 'ALL',
                source: 'ALL',
                viewMode: 'KANBAN',
                stage: 'ALL',
                showRecentlyFulfilled: true,
                isSidebarOpen: false
            }),
        }),
        {
            name: 'kds-filter-settings',
        }
    )
);
