/**
 * Audit Service — Sends audit logs to the backend.
 *
 * Silent: never throws, never blocks UI, never logs errors.
 * Uses raw fetch to avoid apiClient interceptor noise.
 */

import type { AuditLogPayload } from '@/shared/types/audit';
import { env } from '@/shared/config/env';

/**
 * POST /audit-logs — fire and forget.
 */
export async function sendAuditLog(payload: AuditLogPayload): Promise<boolean> {
    if (env.apiMode === 'mock') {
        // Silent in mock — no console spam
        return true;
    }

    try {
        const token = typeof window !== 'undefined'
            ? document.cookie.match(/next-auth.session-token=([^;]+)/)?.[1]
            : null;
        await fetch(`${env.apiBaseUrl}/audit-logs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: JSON.stringify(payload),
        });
        return true;
    } catch {
        // Silently fail — audit must never block
        return false;
    }
}

/**
 * POST /audit-logs/batch — send multiple logs at once.
 */
export async function sendAuditLogBatch(payloads: AuditLogPayload[]): Promise<boolean> {
    if (payloads.length === 0) return true;

    if (env.apiMode === 'mock') {
        return true;
    }

    try {
        await fetch(`${env.apiBaseUrl}/audit-logs/batch`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ logs: payloads }),
        });
        return true;
    } catch {
        return false;
    }
}
