'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import {
    CampaignAnalyticsRow,
    AnalyticsFilters,
    CampaignOption,
    DEFAULT_ANALYTICS_FILTERS,
} from '../types/analytics.types';
import { analyticsService } from '../services/analyticsService';

/**
 * Hook to manage analytics data with date-range and campaign filtering.
 * Metrics are always from the API — never calculated.
 */
export function useAnalytics() {
    const [rows, setRows] = useState<CampaignAnalyticsRow[]>([]);
    const [campaignOptions, setCampaignOptions] = useState<CampaignOption[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState<AnalyticsFilters>(DEFAULT_ANALYTICS_FILTERS);

    // ── Fetch analytics rows ───────────────────────────────────────────
    const fetchAnalytics = useCallback(async (activeFilters?: AnalyticsFilters) => {
        setLoading(true);
        setError(null);
        try {
            const f = activeFilters ?? filters;
            const data = await analyticsService.getAnalytics({
                campaign_id: f.campaign_id,
                date_from: f.date_from,
                date_to: f.date_to,
            });
            setRows(data);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Failed to load analytics';
            setError(message);
        } finally {
            setLoading(false);
        }
    }, [filters]);

    // ── Load campaign options on mount ──────────────────────────────────
    useEffect(() => {
        analyticsService.getCampaignOptions().then(setCampaignOptions).catch(() => {});
    }, []);

    // ── Refetch when filters change ────────────────────────────────────
    useEffect(() => {
        fetchAnalytics(filters);
    }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

    // ── Summary (derived, not calculated from raw events) ──────────────
    const summary = useMemo(() => {
        const campaigns = rows.length;
        const totalSent = rows.reduce((acc, r) => acc + r.sent, 0);
        const totalDelivered = rows.reduce((acc, r) => acc + r.delivered, 0);
        return { campaigns, totalSent, totalDelivered };
    }, [rows]);

    // ── Filter updaters ────────────────────────────────────────────────
    const updateFilter = useCallback(
        <K extends keyof AnalyticsFilters>(key: K, value: AnalyticsFilters[K]) => {
            setFilters((prev) => ({ ...prev, [key]: value }));
        },
        []
    );

    const resetFilters = useCallback(() => {
        setFilters(DEFAULT_ANALYTICS_FILTERS);
    }, []);

    return {
        rows,
        campaignOptions,
        loading,
        error,
        filters,
        summary,
        updateFilter,
        resetFilters,
        refetch: () => fetchAnalytics(filters),
    };
}
