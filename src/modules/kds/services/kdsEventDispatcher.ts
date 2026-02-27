/**
 * kdsEventDispatcher.ts
 *
 * Central dispatcher for all KDS domain events.
 *
 * Responsibilities:
 *   1. Auto-inject tenant_id, store_id, timestamp into every event envelope.
 *   2. Enforce idempotency — events with a duplicate idempotencyKey are silently dropped.
 *   3. Maintain a local in-memory event log (capped at MAX_LOG_SIZE).
 *   4. Forward each event to the WebSocket layer (pluggable via setWebSocketEmitter).
 *
 * Usage:
 *   // Boot once (e.g. in AuthProvider or KDS layout):
 *   configureDispatcher({ tenantId: 'tenant-demo', storeId: 'store-01' });
 *
 *   // Emit anywhere — including Zustand store (no React hooks needed):
 *   emitEvent('order.stage_advanced', { orderId: '123', stage: 'CUTTING' });
 *
 *   // With idempotency key (safe to call multiple times, duplicate is dropped):
 *   emitEvent('order.accepted', { orderId: '123' }, { idempotencyKey: 'accept-123' });
 */

// ─────────────────────────────────────────────────────────────────────────────
//  Types
// ─────────────────────────────────────────────────────────────────────────────

export interface KDSEventEnvelope {
    /** Domain event type, e.g. "order.stage_advanced" */
    type: string;
    /** Auto-injected tenant context */
    tenant_id: string;
    /** Auto-injected store context (first storeId if multiple) */
    store_id: string;
    /** ISO-8601 UTC timestamp auto-injected at dispatch time */
    timestamp: string;
    /** Unique key used for idempotency de-duplication */
    idempotencyKey: string;
    /** The caller-supplied domain payload */
    payload: Record<string, unknown>;
}

export interface EmitOptions {
    /**
     * If provided, any subsequent call with the same key is a no-op.
     * Useful for retry-safe operations (stage advances, accepts, etc.)
     */
    idempotencyKey?: string;
}

export interface DispatcherConfig {
    tenantId: string;
    /** Primary store context. Defaults to 'unknown' until configured. */
    storeId: string;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Internal State
// ─────────────────────────────────────────────────────────────────────────────

const MAX_LOG_SIZE = 200;

let _config: DispatcherConfig = {
    tenantId: 'unknown',
    storeId: 'unknown'
};

/** Idempotency key registry — keys seen this session */
const _seenKeys = new Set<string>();

/** In-memory event log (newest last) */
const _eventLog: KDSEventEnvelope[] = [];

/**
 * Pluggable WebSocket emitter. Replace this in production by calling
 * setWebSocketEmitter() with your actual socket.emit / send function.
 */
let _wsEmitter: ((envelope: KDSEventEnvelope) => void) | null = null;

// ─────────────────────────────────────────────────────────────────────────────
//  Public API
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Boot the dispatcher with session context.
 * Call once during app initialisation (AuthProvider / KDS layout mount).
 */
export function configureDispatcher(config: DispatcherConfig): void {
    _config = { ...config };
    console.info(
        `[KDSDispatcher] Configured — tenant: "${config.tenantId}", store: "${config.storeId}"`
    );
}

/**
 * Register the live WebSocket emitter.
 * Until this is called, events are still logged locally but not transmitted.
 *
 * @example
 *   setWebSocketEmitter((envelope) => socket.emit('kds_event', envelope));
 */
export function setWebSocketEmitter(fn: (envelope: KDSEventEnvelope) => void): void {
    _wsEmitter = fn;
    console.info('[KDSDispatcher] WebSocket emitter registered.');
}

/**
 * Emit a KDS domain event.
 *
 * @param type           Domain event type string, e.g. "order.delayed"
 * @param rawPayload     Event-specific data. Keys must be string-indexable.
 * @param options        Optional: idempotencyKey to prevent duplicate dispatch.
 *
 * @returns The constructed envelope, or null if dropped for idempotency.
 */
export function emitEvent(
    type: string,
    rawPayload: Record<string, unknown>,
    options: EmitOptions = {}
): KDSEventEnvelope | null {
    // ── 1. Build idempotency key ──────────────────────────────────────────────
    const idempotencyKey =
        options.idempotencyKey ?? `${type}::${Date.now()}::${Math.random().toString(36).slice(2)}`;

    // ── 2. Idempotency check ──────────────────────────────────────────────────
    if (_seenKeys.has(idempotencyKey)) {
        console.warn(
            `[KDSDispatcher] Duplicate event dropped — type: "${type}", key: "${idempotencyKey}"`
        );
        return null;
    }
    _seenKeys.add(idempotencyKey);

    // ── 3. Build envelope ─────────────────────────────────────────────────────
    const envelope: KDSEventEnvelope = {
        type,
        tenant_id: _config.tenantId,
        store_id: _config.storeId,
        timestamp: new Date().toISOString(),
        idempotencyKey,
        payload: rawPayload
    };

    // ── 4. Local log (capped) ─────────────────────────────────────────────────
    _eventLog.push(envelope);
    if (_eventLog.length > MAX_LOG_SIZE) {
        _eventLog.shift(); // evict oldest
    }

    // ── 5. Console trace (structured) ────────────────────────────────────────
    console.log(
        `%c[KDSEvent] ${envelope.type}`,
        'color: #1FA4A9; font-weight: bold;',
        {
            tenant_id: envelope.tenant_id,
            store_id: envelope.store_id,
            timestamp: envelope.timestamp,
            idempotencyKey: envelope.idempotencyKey,
            payload: envelope.payload
        }
    );

    // ── 6. WebSocket emit (placeholder until real socket is wired) ────────────
    if (_wsEmitter) {
        try {
            _wsEmitter(envelope);
        } catch (err) {
            console.error('[KDSDispatcher] WebSocket emitter threw an error:', err);
        }
    } else {
        // Placeholder: no transport yet — event is durable in local log only
        console.debug(
            '[KDSDispatcher] No WebSocket emitter configured. ' +
            `Event "${type}" queued locally only.`
        );
    }

    return envelope;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Inspection / Debug Utilities
// ─────────────────────────────────────────────────────────────────────────────

/** Returns a read-only snapshot of the in-memory event log. */
export function getEventLog(): Readonly<KDSEventEnvelope[]> {
    return [..._eventLog];
}

/** Returns the count of events dispatched this session (including duplicates). */
export function getSeenKeyCount(): number {
    return _seenKeys.size;
}

/** Returns current dispatcher configuration. */
export function getDispatcherConfig(): Readonly<DispatcherConfig> {
    return { ..._config };
}

/**
 * Clear idempotency keys (tests / hot-reload only).
 * Do NOT call this in production paths.
 */
export function _resetDispatcherForTests(): void {
    _seenKeys.clear();
    _eventLog.length = 0;
    _config = { tenantId: 'unknown', storeId: 'unknown' };
    _wsEmitter = null;
}
