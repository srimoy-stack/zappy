'use client';

import React from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useKDSStore } from '../../store/kdsStore';
import { OrderTicket } from '../ticket/OrderTicket';
import { useFilterStore } from '../../store/useFilterStore';
import { KitchenStage } from '../../types/kds';
import { getSLAState, getRemainingSeconds } from '../../utils/slaUtils';

interface KDSColumnProps {
    title: string;
    stage: KitchenStage;
}

export const KDSColumn: React.FC<KDSColumnProps> = ({ title, stage }) => {
    const { fulfillment, source, station } = useFilterStore();

    // Each column subscribes ONLY to filtered orders that match its stage and station.
    const stageOrders = useKDSStore(
        useShallow((state) =>
            Object.values(state.orders).filter(o => {
                const stageMatch = o.stage === stage;
                const fulfillmentMatch = fulfillment === 'ALL' || o.fulfillment_type === fulfillment;
                const sourceMatch = source === 'ALL' || o.order_source === source;

                // Station Filtering Logic (Industry Standards)
                let stationMatch = true;
                if (station === 'MAKE_LINE') stationMatch = o.stage === 'ACCEPTED' || o.stage === 'PREPARATION';
                if (station === 'OVEN') stationMatch = o.stage === 'PREPARATION'; // Ready for oven
                if (station === 'CUT_BOX') stationMatch = o.stage === 'CUTTING';
                if (station === 'EXPO') stationMatch = true; // Expo sees everything

                return stageMatch && fulfillmentMatch && sourceMatch && stationMatch;
            }).sort((a, b) => {
                // 1. Priority Override (Manual Manager Flag)
                if (a.isPriority && !b.isPriority) return -1;
                if (!a.isPriority && b.isPriority) return 1;

                // 2. SLA State (Late/Warning jump to top)
                const aState = getSLAState(a.createdAt, a.prepTimeMinutes);
                const bState = getSLAState(b.createdAt, b.prepTimeMinutes);

                const statePriority = { 'OVERDUE': 0, 'WARNING': 1, 'ON_TIME': 2 };
                if (statePriority[aState] !== statePriority[bState]) {
                    return statePriority[aState] - statePriority[bState];
                }

                // 3. Fulfillment Type (Delivery > Dine-in/Takeaway)
                const isADelivery = a.fulfillment_type.includes('DELIVERY');
                const isBDelivery = b.fulfillment_type.includes('DELIVERY');
                if (isADelivery && !isBDelivery) return -1;
                if (!isADelivery && isBDelivery) return 1;

                // 4. SLA Tension (Delivery within 2m of breach jumps up)
                const aRemaining = getRemainingSeconds(a.createdAt, a.prepTimeMinutes);
                const bRemaining = getRemainingSeconds(b.createdAt, b.prepTimeMinutes);
                if (isADelivery && aRemaining < 120 && isBDelivery && bRemaining >= 120) return -1;
                if (isBDelivery && bRemaining < 120 && isADelivery && aRemaining >= 120) return 1;

                // 5. Batch Cooking Optimization (Hidden grouping)
                // If items names are similar, they stay together to help the chef batch them
                const aItems = a.items.map(i => i.name).sort().join('|');
                const bItems = b.items.map(i => i.name).sort().join('|');
                if (aItems < bItems) return -1;
                if (aItems > bItems) return 1;

                // 6. Oldest First (Ultimate fallback)
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            })
        )
    );

    return (
        <div className="kds-column">
            <div className="kds-column-header">
                <h3 className="kds-column-title">{title}</h3>
                <span className="kds-column-count">{stageOrders.length}</span>
            </div>
            <div className="kds-column-scroll">
                {stageOrders.map((order) => (
                    <OrderTicket key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
};
