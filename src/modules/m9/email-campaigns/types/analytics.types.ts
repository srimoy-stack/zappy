/**
 * Analytics Types (M9 – Marketing / Customer Engagement)
 *
 * Metrics are sourced ONLY from the API — never calculated client-side.
 */

import { CampaignStatus } from './campaign.types';

// ── Campaign Analytics Row ─────────────────────────────────────────────
export interface CampaignAnalyticsRow {
    id: string;
    campaign_name: string;
    status: CampaignStatus;
    sent: number;
    delivered: number;
    open_rate: number;        // percentage from API
    click_rate: number;       // percentage from API
    unsubscribe_rate: number; // percentage from API
    bounce_rate: number;      // percentage from API
    sent_at?: string;         // ISO date
}

// ── Analytics Filters ──────────────────────────────────────────────────
export interface AnalyticsFilters {
    campaign_id: string | 'all';
    date_from: string; // YYYY-MM-DD
    date_to: string;   // YYYY-MM-DD
}

/** Default 30‑day date range ending today */
function defaultDateRange(): { from: string; to: string } {
    const to = new Date();
    const from = new Date();
    from.setDate(from.getDate() - 30);
    return {
        from: from.toISOString().split('T')[0]!,
        to: to.toISOString().split('T')[0]!,
    };
}

const range = defaultDateRange();

export const DEFAULT_ANALYTICS_FILTERS: AnalyticsFilters = {
    campaign_id: 'all',
    date_from: range.from,
    date_to: range.to,
};

// ── Campaign Option (for dropdown) ─────────────────────────────────────
export interface CampaignOption {
    id: string;
    name: string;
}
