import { create } from 'zustand';
import { KDSOrder, KitchenStage } from '../types/kds';
import { calculateETA } from '../utils/etaUtils';
import { KDSRole, canDelayOrder, canCancelOrder, canOverrideStage } from '../utils/kdsAccess';
import { emitEvent } from '../services/kdsEventDispatcher';

interface PendingAction {
    id: string;
    type: string;
    payload: any;
    timestamp: string;
}

export interface KDSState {
    orders: Record<string, KDSOrder>;
    externalOrderMap: Record<string, string>; // external_order_id -> order.id
    isOnline: boolean;
    pendingActions: PendingAction[];

    addOrUpdateOrder: (order: KDSOrder) => void;
    removeOrder: (orderId: string) => void;
    updateOrderStage: (orderId: string, stage: KitchenStage) => void;
    acceptOrder: (orderId: string) => void;
    advanceStage: (orderId: string) => void;
    markDelayed: (orderId: string, reason?: string) => void;
    delayOrder: (orderId: string, additionalMinutes: number, role: KDSRole, reason?: string) => void;
    cancelOrder: (orderId: string, role: KDSRole) => void;
    overrideStage: (orderId: string, stage: KitchenStage, role: KDSRole) => void;
    incrementPrepTime: (orderId: string, minutes?: number) => void;
    sendCustomerMessage: (orderId: string, channel: 'SMS' | 'EMAIL' | 'BOTH', message: string) => void;
    setOnlineStatus: (status: boolean) => void;
    toggleHold: (orderId: string) => void;
    queueAction: (type: string, payload: any) => void;
    replayQueuedActions: () => void;
    autoInitNetworkListener: () => void;
    lastRemovedOrder: KDSOrder | null;
    recallOrder: () => void;
}

export const useKDSStore = create<KDSState>((set, get) => ({
    orders: {},
    externalOrderMap: {},
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
    pendingActions: [],
    lastRemovedOrder: null,

    addOrUpdateOrder: (order) =>
        set((state) => {
            // Check by internal ID or External ID
            const internalId = order.id;
            const idByExternal = order.external_order_id ? state.externalOrderMap[order.external_order_id] : null;

            const targetId = idByExternal || internalId;
            const existing = state.orders[targetId];

            // Idempotency check: Ignore older or duplicate updates
            if (existing && new Date(order.updatedAt) <= new Date(existing.updatedAt)) {
                return state;
            }

            const newExternalMap = { ...state.externalOrderMap };
            if (order.external_order_id) {
                newExternalMap[order.external_order_id] = targetId;
            }

            return {
                orders: {
                    ...state.orders,
                    [targetId]: { ...order, id: targetId },
                },
                externalOrderMap: newExternalMap,
            };
        }),

    removeOrder: (orderId) =>
        set((state) => {
            const order = state.orders[orderId];
            if (!order) return state;

            const newOrders = { ...state.orders };
            const newExternalMap = { ...state.externalOrderMap };

            if (order?.external_order_id) {
                delete newExternalMap[order.external_order_id];
            }
            delete newOrders[orderId];

            return {
                orders: newOrders,
                externalOrderMap: newExternalMap,
                lastRemovedOrder: order
            };
        }),

    queueAction: (type, payload) => {
        set((state) => ({
            pendingActions: [
                ...state.pendingActions,
                {
                    id: payload.idempotencyKey || crypto.randomUUID(),
                    type,
                    payload,
                    timestamp: new Date().toISOString()
                }
            ]
        }));
    },

    autoInitNetworkListener: () => {
        if (typeof window === 'undefined') return;

        const updateStatus = () => {
            get().setOnlineStatus(navigator.onLine);
        };

        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);

        // Initial check
        updateStatus();
    },

    updateOrderStage: (orderId, stage) => {
        const { isOnline, queueAction } = get();

        set((state: KDSState) => {
            const order = state.orders[orderId];
            if (!order) return state;

            const now = new Date();
            const idempotencyKey = `stage-update-${orderId}-${now.getTime()}`;

            let updates: Partial<KDSOrder> = {
                stage,
                stageStartedAt: now.toISOString(),
                isPendingSync: !isOnline,
            };

            if (stage === 'PREPARATION') {
                const prepTime = order.prepTimeMinutes || 10;
                const createdAt = new Date(order.createdAt);
                createdAt.setMinutes(createdAt.getMinutes() + prepTime);

                updates = {
                    ...updates,
                    prepTimeMinutes: prepTime,
                    estimatedReadyTime: createdAt.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    })
                };
            }

            const eventPayload = {
                orderId,
                orderNumber: order.orderNumber,
                newStage: stage,
                timestamp: now.toISOString()
            };

            if (isOnline) {
                emitEvent('order.stage_updated', eventPayload, { idempotencyKey });
            } else {
                queueAction('order.stage_updated', { ...eventPayload, idempotencyKey });
            }

            return {
                orders: {
                    ...state.orders,
                    [orderId]: {
                        ...order,
                        ...updates,
                    },
                },
            };
        });
    },

    acceptOrder: (orderId: string) => {
        const { isOnline, queueAction } = get();

        set((state: KDSState) => {
            const order = state.orders[orderId];
            if (!order || order.stage !== 'ACCEPTED') return state;

            const now = new Date();
            const created = new Date(order.createdAt);
            const elapsedMinutes = Math.floor((now.getTime() - created.getTime()) / 60000);

            const forcedPrepDuration = 10;
            const updatedPrepTimeMinutes = forcedPrepDuration + elapsedMinutes;
            const etaFormatted = new Date(now.getTime() + forcedPrepDuration * 60000).toISOString();

            const prevStageEntry = {
                stage: order.stage,
                startedAt: order.stageStartedAt || order.createdAt,
                completedAt: now.toISOString(),
            };

            const stageHistory = [...(order.stageHistory || []), prevStageEntry];
            const idempotencyKey = `accept-${orderId}`;

            const eventPayload = {
                orderId,
                orderNumber: order.orderNumber,
                trackingToken: order.trackingToken,
                customerName: order.customerName,
                prepTimeMinutes: forcedPrepDuration,
                estimatedReadyTime: etaFormatted,
                acceptedAt: now.toISOString()
            };

            if (isOnline) {
                emitEvent('kitchen.prep_time_set', eventPayload, { idempotencyKey });

                // Requirement 12: Uber Direct Sync
                if (order.order_source === 'UBER_DIRECT') {
                    emitEvent('uber.order.accepted', {
                        external_order_id: order.external_order_id,
                        orderId: order.id,
                        prepTimeMinutes: forcedPrepDuration,
                        estimatedReadyTime: etaFormatted
                    }, { idempotencyKey: `uber-accept-${order.id}` });
                }
            } else {
                queueAction('kitchen.prep_time_set', { ...eventPayload, idempotencyKey });
            }

            return {
                orders: {
                    ...state.orders,
                    [orderId]: {
                        ...order,
                        stage: 'PREPARATION',
                        stageStartedAt: now.toISOString(),
                        prepTimeMinutes: updatedPrepTimeMinutes,
                        estimatedReadyTime: etaFormatted,
                        stageHistory,
                        isPendingSync: !isOnline,
                    },
                },
            };
        });
    },

    advanceStage: (orderId: string) => {
        const { isOnline, queueAction } = get();
        const currentOrder = get().orders[orderId];
        if (!currentOrder) return;

        if (currentOrder.stage === 'READY') {
            set((state) => ({
                orders: {
                    ...state.orders,
                    [orderId]: { ...currentOrder, isCompleting: true }
                }
            }));

            setTimeout(() => {
                get().removeOrder(orderId);
                // Removal is usually not queued as it's a local UI cleanup
            }, 2000);
            return;
        }

        set((state: KDSState) => {
            const order = state.orders[orderId];
            if (!order) return state;

            const stages: KitchenStage[] = ['ACCEPTED', 'PREPARATION', 'CUTTING', 'READY'];
            const currentIndex = stages.indexOf(order.stage);
            const nextStage = stages[currentIndex + 1];

            if (!nextStage) return state;

            const now = new Date().toISOString();
            const prevStageEntry = {
                stage: order.stage,
                startedAt: order.stageStartedAt || order.createdAt,
                completedAt: now,
            };

            const stageHistory = [...(order.stageHistory || []), prevStageEntry];
            const idempotencyKey = `advance-${orderId}-${new Date(now).getTime()}`;

            let updates: Partial<KDSOrder> = {
                stage: nextStage,
                stageStartedAt: now,
                stageHistory,
                isPendingSync: !isOnline,
            };

            const eventPayload = {
                orderId,
                orderNumber: order.orderNumber,
                previousStage: order.stage,
                newStage: nextStage,
                timestamp: now
            };

            if (isOnline) {
                emitEvent('order.stage_advanced', eventPayload, { idempotencyKey });
            } else {
                queueAction('order.stage_advanced', { ...eventPayload, idempotencyKey });
            }

            return {
                orders: {
                    ...state.orders,
                    [orderId]: {
                        ...order,
                        ...updates,
                    },
                },
            };
        });
    },

    markDelayed: (orderId, reason) =>
        set((state) => {
            const order = state.orders[orderId];
            if (!order) return state;

            return {
                orders: {
                    ...state.orders,
                    [orderId]: {
                        ...order,
                        isDelayed: true,
                        delayReason: reason,
                    },
                },
            };
        }),

    delayOrder: (orderId: string, additionalMinutes: number, role: KDSRole, reason?: string) => {
        if (!canDelayOrder(role)) return;

        const { isOnline, queueAction } = get();

        set((state) => {
            const order = state.orders[orderId];
            if (!order) return state;

            const now = new Date().toISOString();
            const newTotalPrepTime = (order.prepTimeMinutes || 0) + additionalMinutes;
            const newETA = calculateETA(order.createdAt, newTotalPrepTime);
            const idempotencyKey = `delay-${orderId}-${new Date(now).getTime()}`;

            const delayEntry = {
                minutes: additionalMinutes,
                reason,
                timestamp: now,
            };

            const eventPayload = {
                orderId,
                orderNumber: order.orderNumber,
                trackingToken: order.trackingToken,
                customerName: order.customerName,
                additionalMinutes,
                newEstimatedReadyTime: newETA,
                reason: reason || 'KITCHEN_DELAY',
                updatedAt: now
            };

            if (isOnline) {
                emitEvent('order.delayed', eventPayload, { idempotencyKey });

                // Requirement 12: Sync ETA updates back to Uber Direct
                if (order.order_source === 'UBER_DIRECT') {
                    emitEvent('uber.order.eta_updated', {
                        external_order_id: order.external_order_id,
                        orderId: order.id,
                        additionalMinutes,
                        newEstimatedReadyTime: newETA
                    }, { idempotencyKey: `uber-sync-${idempotencyKey}` });
                }
            } else {
                queueAction('order.delayed', { ...eventPayload, idempotencyKey });
            }

            return {
                orders: {
                    ...state.orders,
                    [orderId]: {
                        ...order,
                        prepTimeMinutes: newTotalPrepTime,
                        estimatedReadyTime: newETA,
                        isDelayed: true,
                        delayReason: reason || order.delayReason,
                        delayLog: [...(order.delayLog || []), delayEntry],
                        isPendingSync: !isOnline,
                    },
                },
            };
        });
    },

    cancelOrder: (orderId, role) => {
        if (!canCancelOrder(role)) return;
        const { isOnline, queueAction } = get();

        set((state) => {
            const order = state.orders[orderId];
            if (!order) return state;

            const idempotencyKey = `cancel-${orderId}`;
            const eventPayload = {
                orderId,
                role,
                timestamp: new Date().toISOString()
            };

            if (isOnline) {
                emitEvent('order.cancelled', eventPayload, { idempotencyKey });
            } else {
                queueAction('order.cancelled', { ...eventPayload, idempotencyKey });
            }

            const newOrders = { ...state.orders };
            const newExternalMap = { ...state.externalOrderMap };
            if (order.external_order_id) delete newExternalMap[order.external_order_id];
            delete newOrders[orderId];

            return { orders: newOrders, externalOrderMap: newExternalMap };
        });
    },

    overrideStage: (orderId, stage, role) => {
        if (!canOverrideStage(role)) return;
        get().updateOrderStage(orderId, stage);
    },

    incrementPrepTime: (orderId, minutes = 5) => {
        const { isOnline, queueAction } = get();

        set((state) => {
            const order = state.orders[orderId];
            if (!order || order.stage === 'READY') return state;

            const incrementedPrepTime = (order.prepTimeMinutes || 0) + minutes;
            const newETA = calculateETA(order.createdAt, incrementedPrepTime);
            const idempotencyKey = `increment-${orderId}-${new Date().getTime()}`;

            const eventPayload = {
                orderId,
                orderNumber: order.orderNumber,
                trackingToken: order.trackingToken,
                customerName: order.customerName,
                additionalMinutes: minutes,
                totalPrepMinutes: incrementedPrepTime,
                newEstimatedReadyTime: newETA,
                updatedAt: new Date().toISOString()
            };

            if (isOnline) {
                emitEvent('kitchen.prep_time_updated', eventPayload, { idempotencyKey });
            } else {
                queueAction('kitchen.prep_time_updated', { ...eventPayload, idempotencyKey });
            }

            return {
                orders: {
                    ...state.orders,
                    [orderId]: {
                        ...order,
                        prepTimeMinutes: incrementedPrepTime,
                        estimatedReadyTime: newETA,
                        isPendingSync: !isOnline,
                    },
                },
            };
        });
    },

    sendCustomerMessage: (orderId, channel, message) => {
        set((state) => {
            const order = state.orders[orderId];
            if (!order) return state;

            const now = new Date().toISOString();
            const logEntry = { channel, message, sentAt: now, sentBy: 'KDS_SYSTEM' };
            const idempotencyKey = `notification-${orderId}-${now}`;

            emitEvent('order.customer_notification', {
                orderId, channel, message, sentAt: now
            }, { idempotencyKey });

            return {
                orders: {
                    ...state.orders,
                    [orderId]: {
                        ...order,
                        notificationsLog: [...(order.notificationsLog || []), logEntry],
                    },
                },
            };
        });
    },

    setOnlineStatus: (status: boolean) => {
        const wasOffline = !get().isOnline;
        set({ isOnline: status });

        if (status && wasOffline) {
            get().replayQueuedActions();
        }
    },

    toggleHold: (orderId: string) => {
        const { isOnline, queueAction } = get();
        set((state) => {
            const order = state.orders[orderId];
            if (!order) return state;

            const newHeldState = !order.isHeld;
            const idempotencyKey = `hold-${orderId}-${new Date().getTime()}`;

            if (isOnline) {
                emitEvent(newHeldState ? 'order.held' : 'order.resumed', { orderId }, { idempotencyKey });
            } else {
                queueAction(newHeldState ? 'order.held' : 'order.resumed', { orderId, idempotencyKey });
            }

            return {
                orders: {
                    ...state.orders,
                    [orderId]: { ...order, isHeld: newHeldState, isPendingSync: !isOnline }
                }
            };
        });
    },

    replayQueuedActions: () => {
        const { pendingActions } = get();
        if (pendingActions.length === 0) return;

        console.log(`📡 Reconnecting: Replaying ${pendingActions.length} queued actions...`);

        pendingActions.forEach(action => {
            const { idempotencyKey, ...payload } = action.payload;
            emitEvent(action.type, {
                ...payload,
                isReplayed: true,
                originalTimestamp: action.timestamp
            }, { idempotencyKey });
        });

        set({ pendingActions: [] });

        set((state) => {
            const updatedOrders = { ...state.orders };
            Object.keys(updatedOrders).forEach(id => {
                if (updatedOrders[id]) updatedOrders[id] = { ...updatedOrders[id]!, isPendingSync: false };
            });
            return { orders: updatedOrders };
        });
    },

    recallOrder: () => {
        const { lastRemovedOrder } = get();
        if (!lastRemovedOrder) return;

        emitEvent('order.reopened', {
            orderId: lastRemovedOrder.id,
            orderNumber: lastRemovedOrder.orderNumber
        }, { idempotencyKey: `reopen-${lastRemovedOrder.id}` });

        set((state) => ({
            orders: {
                ...state.orders,
                [lastRemovedOrder.id]: {
                    ...lastRemovedOrder,
                    isCompleting: false
                }
            },
            lastRemovedOrder: null
        }));
    },
}));
