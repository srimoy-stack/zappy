export type OrderSource =
    | 'POS'
    | 'CALL_CENTER'
    | 'ONLINE'
    | 'UBER_DIRECT'
    | 'KIOSK'
    | 'API';

export type FulfillmentType =
    | 'PICKUP'
    | 'STORE_DELIVERY'
    | 'UBER_DIRECT_DELIVERY';

export type SLAState =
    | 'ON_TIME'
    | 'WARNING'
    | 'OVERDUE';

export interface KDSModifier {
    name: string;
    groupType: 'PLACEMENT_TOPPING' | 'CHOICE_ONE' | 'QUANTITY_ONLY';
    placement?: 'FULL' | 'LEFT' | 'RIGHT' | 'QUARTER';
    quantity?: number;
}

export interface KDSItem {
    id: string; // Unique ID for partial completion tracking
    name: string;
    variant?: string;
    quantity?: number;
    categoryId?: string; // Added for category-based routing
    modifiers: KDSModifier[];
    isCompleted?: boolean;
}

export interface KDSStation {
    station_id: string;
    station_name: string;
    active: boolean;
    display_order: number;
    default_prep_time?: number;
}

export type KitchenStage =
    | 'NEW'
    | 'FIRED'
    | 'READY'
    | 'FULFILLED'
    | 'RECALLED'
    | 'ACCEPTED'
    | 'PREPARATION'
    | 'CUTTING';

export interface KDSOrder {
    id: string;
    orderNumber: string;
    storeName?: string;

    order_source: OrderSource; // REQUIRED per spec
    fulfillment_type: FulfillmentType; // MUST NOT merge with source

    createdAt: string;
    updatedAt: string;
    external_order_id?: string;

    stage: KitchenStage;
    stageStartedAt?: string;

    stageHistory?: {
        stage: KitchenStage;
        startedAt: string;
        completedAt?: string;
    }[];

    prepTimeMinutes: number;
    estimatedReadyTime: string;

    isDelayed: boolean;
    delayReason?: string;
    delayLog?: {
        minutes: number;
        reason?: string;
        timestamp: string;
    }[];

    trackingToken: string;

    externalTotal?: number;
    zyappyCalculatedTotal?: number;

    items: KDSItem[];

    // Customer Contact (Optional/Fallback)
    customerName?: string;
    customerPhone?: string;
    customerEmail?: string;

    notificationsLog?: {
        channel: 'SMS' | 'EMAIL' | 'BOTH';
        message: string;
        sentAt: string;
        sentBy: string;
    }[];

    isPriority?: boolean;
    isHeld?: boolean;
    isPendingSync?: boolean;
    isCompleting?: boolean;
    notes?: string;
    allergies?: string[];
}

/** 
 * Requirement 15: Kitchen Stages Entity 
 * Used for dynamic sequence configuration per store.
 */
export interface KitchenStageConfig {
    id: string;
    store_id: string;
    name: string;
    sequence_order: number;
    active: boolean;
}

/** 
 * Requirement 15: Order Tracking Entity
 * External or flattened tracking state for customer-facing applications.
 */
export interface OrderTracking {
    order_id: string;
    tracking_token: string;
    prep_time_minutes: number;
    estimated_ready_time: string;
    is_delayed: boolean;
    delay_reason?: string;
}

/** 
 * Requirement 15: Customer Notifications Entity
 * Audit trail for outgoing communications.
 */
export interface CustomerNotification {
    id: string;
    order_id: string;
    channel: 'SMS' | 'EMAIL' | 'BOTH';
    message_body: string;
    sent_at: string;
    sent_by_user_id: string;
}
