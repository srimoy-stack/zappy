import { KDSItem, KDSOrder } from '../types/kds';

export interface RoutingConfig {
    enable_station_routing: boolean;
    selectedStationId: string | 'ALL';
    category_station_map: Record<string, string>;
    allow_item_station_override: boolean;
    item_station_map: Record<string, string>;
    master_screen_view_mode: 'FULL_ORDER' | 'STATION_ONLY';
}

/**
 * Determines if a specific item should be displayed on the current station/view.
 */
export function isItemVisibleOnStation(item: KDSItem, config: RoutingConfig): boolean {
    const {
        enable_station_routing,
        selectedStationId,
        category_station_map,
        allow_item_station_override,
        item_station_map,
        master_screen_view_mode
    } = config;

    // 1. If global routing is disabled OR "Universal View" is selected, everything is visible.
    if (!enable_station_routing || selectedStationId === 'ALL') {
        return true;
    }

    // 2. If we are in "Full Order" view mode, we show all items regardless of station, 
    // BUT only if the order itself contains AT LEAST ONE item for this station (checked in isOrderVisibleOnStation).
    // This maintains order context while ensuring station relevance.
    if (master_screen_view_mode === 'FULL_ORDER') {
        return true;
    }

    // 3. Granular Item Routing (STATION_ONLY mode)
    const catStation = (item.categoryId && category_station_map[item.categoryId]) || 'kitchen';
    const itemStationId = (allow_item_station_override && item_station_map[item.name]) || catStation;

    return itemStationId === selectedStationId;
}

/**
 * Determines if an entire order should be displayed on the current station/view.
 * An order is visible if:
 * - Universal View is selected
 * - OR it contains at least one item mapped to the current station.
 */
export function isOrderVisibleOnStation(order: KDSOrder, config: RoutingConfig): boolean {
    const { enable_station_routing, selectedStationId } = config;

    // 1. Base cases
    if (!enable_station_routing || selectedStationId === 'ALL') {
        return true;
    }

    // 2. Check if ANY item in the order belongs to this station
    return order.items.some(item => {
        const catStation = (item.categoryId && config.category_station_map[item.categoryId]) || 'kitchen';
        const itemStationId = (config.allow_item_station_override && config.item_station_map[item.name]) || catStation;
        return itemStationId === selectedStationId;
    });
}
