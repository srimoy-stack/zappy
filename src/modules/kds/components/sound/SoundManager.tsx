'use client';

import { useEffect, useRef } from 'react';
import { useKDSStore } from '../../store/kdsStore';
import { useSoundStore } from '../../store/useSoundStore';
import { getSLAState } from '../../utils/slaUtils';

export const SoundManager: React.FC = () => {
    const orders = useKDSStore((state) => state.orders);
    const { settings, playedEvents, markEventPlayed } = useSoundStore();
    const prevOrdersRef = useRef<string[]>([]);

    const playSound = (type: 'newOrder' | 'delayed' | 'overdue') => {
        if (!settings[type]) return;

        try {
            const paths = {
                newOrder: '/sounds/confirm.mp3',
                delayed: '/sounds/alert.mp3',
                overdue: '/sounds/alert-overdue.mp3',
            };

            const audio = new Audio(paths[type]);
            audio.volume = settings.volume;
            audio.loop = false;
            audio.play().catch(() => { });
        } catch (e) {
            console.error('Audio playback failed', e);
        }
    };

    useEffect(() => {
        const orderIds = Object.keys(orders);

        // Check for NEW orders
        const newOrderIds = orderIds.filter(id => !prevOrdersRef.current.includes(id));
        if (newOrderIds.length > 0) {
            playSound('newOrder');
        }

        // Check for NEWLY delayed orders
        orderIds.forEach(id => {
            const order = orders[id];
            if (!order) return;

            const eventKey = `delayed-${id}`;
            if (order.isDelayed && !playedEvents.has(eventKey)) {
                playSound('delayed');
                markEventPlayed(eventKey);
            }
        });

        prevOrdersRef.current = orderIds;
    }, [orders, settings, playedEvents, markEventPlayed]);

    // Periodic check for SLA breaches (every 5 seconds is enough)
    useEffect(() => {
        const interval = setInterval(() => {
            const allOrders = Object.values(useKDSStore.getState().orders);
            allOrders.forEach(order => {
                const eventKey = `overdue-${order.id}`;
                if (getSLAState(order.createdAt, order.prepTimeMinutes) === 'OVERDUE' && !playedEvents.has(eventKey)) {
                    playSound('overdue');
                    markEventPlayed(eventKey);
                }
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [settings, playedEvents, markEventPlayed]);

    return null;
};
