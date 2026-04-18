/**
 * Contact Types (M9 – Marketing / Customer Engagement)
 *
 * Compliance-aware contact model.
 * consent_status and suppression_status are NEVER assumed —
 * they must be explicitly set for every contact.
 */

// ── Consent Status ─────────────────────────────────────────────────────
// Critical compliance field. "eligible" = explicit opt-in received.
export type ContactConsentStatus = 'eligible' | 'unsubscribed' | 'no_consent';

// ── Suppression Status ─────────────────────────────────────────────────
export type ContactSuppressionStatus = 'suppressed' | 'not_suppressed';

// ── Contact Entity ─────────────────────────────────────────────────────
export interface ContactRecord {
    id: string;
    name: string;
    email: string;
    store_id: string;
    store_name?: string;
    last_order?: string;          // ISO date string or null
    total_spend: number;
    consent_status: ContactConsentStatus;
    suppression_status: ContactSuppressionStatus;
    created_at: string;
    updated_at?: string;
}

// ── Add Contact Payload ────────────────────────────────────────────────
export interface CreateContactPayload {
    name: string;
    email: string;
    store_id: string;
    consent_status: ContactConsentStatus;
}

// ── CSV Import Types ───────────────────────────────────────────────────
export interface CsvImportRow {
    rowIndex: number;
    name: string;
    email: string;
    store_id: string;
    consent_status: string;
    valid: boolean;
    errors: string[];
}

export interface CsvImportResult {
    total: number;
    valid: number;
    invalid: number;
    rows: CsvImportRow[];
}

// ── Contact Filters ────────────────────────────────────────────────────
export interface ContactFilters {
    consent_status: ContactConsentStatus | 'all';
    store_id: string | 'all';
    suppression_status: ContactSuppressionStatus | 'all';
    search: string;
}

export const DEFAULT_CONTACT_FILTERS: ContactFilters = {
    consent_status: 'all',
    store_id: 'all',
    suppression_status: 'all',
    search: '',
};
