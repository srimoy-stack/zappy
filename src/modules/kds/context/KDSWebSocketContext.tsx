'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useAuth } from '@/app/providers/AuthProvider';
import {
    configureDispatcher,
    setWebSocketEmitter,
    KDSEventEnvelope
} from '../services/kdsEventDispatcher';

interface KDSWebSocketContextType {
    isConnected: boolean;
    sendMessage: (msg: KDSEventEnvelope | Record<string, unknown>) => void;
}

const KDSWebSocketContext = createContext<KDSWebSocketContextType | undefined>(undefined);

export const useKDSWebSocket = () => {
    const context = useContext(KDSWebSocketContext);
    if (!context) {
        throw new Error('useKDSWebSocket must be used within a KDSWebSocketProvider');
    }
    return context;
};

export const KDSWebSocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { tenantId, storeIds } = useAuth();

    // ── Configure dispatcher with live session context on mount ────────────────
    useEffect(() => {
        configureDispatcher({
            tenantId: tenantId ?? 'unknown',
            storeId: storeIds?.[0] ?? 'unknown'
        });

        // ── Register the WebSocket emitter (placeholder until real socket) ───────
        // When a real socket is available, replace this with:
        //   setWebSocketEmitter((envelope) => socket.emit('kds_event', envelope));
        setWebSocketEmitter((envelope: KDSEventEnvelope) => {
            // Placeholder: log all outbound events in development
            if (process.env.NODE_ENV === 'development') {
                console.groupCollapsed(
                    `%c[WS→] ${envelope.type}`,
                    'color: #1FA4A9; font-weight: bold; font-size: 11px;'
                );
                console.table({
                    tenant_id: envelope.tenant_id,
                    store_id: envelope.store_id,
                    timestamp: envelope.timestamp,
                    idempotencyKey: envelope.idempotencyKey,
                });
                console.log('payload:', envelope.payload);
                console.groupEnd();
            }
            // TODO: Replace with real WebSocket transport:
            // socket.emit('kds_event', envelope);
        });

    }, [tenantId, storeIds]);

    // ── Context value (sendMessage wraps raw WS send) ──────────────────────────
    const value: KDSWebSocketContextType = {
        isConnected: false, // TODO: track real socket.connected state
        sendMessage: (msg) => {
            // Placeholder for raw message sends outside of emitEvent flow
            console.log('[KDSWebSocket] sendMessage (placeholder):', msg);
        }
    };

    return (
        <KDSWebSocketContext.Provider value={value}>
            {children}
        </KDSWebSocketContext.Provider>
    );
};
