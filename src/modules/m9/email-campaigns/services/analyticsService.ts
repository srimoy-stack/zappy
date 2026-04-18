import apiClient from '@/api/axios';
import {
    CampaignAnalyticsRow,
    AnalyticsFilters,
    CampaignOption,
} from '../types/analytics.types';
import { DEV_SEED_ANALYTICS } from '../utils/analyticsSeeds';
import { isDemoMode } from '../utils/demoMode';

/**
 * Analytics API Service
 *
 * Returns pre-computed metrics from the API.
 * Metrics are NEVER calculated client-side — the API is the single source of truth.
 *
 * Falls back to deterministic seed data in development when the API is unavailable.
 */
export const analyticsService = {
    /**
     * Fetch campaign analytics rows with optional filters.
     */
    getAnalytics: async (filters?: Partial<AnalyticsFilters>): Promise<CampaignAnalyticsRow[]> => {
        try {
            const response = await apiClient.get<CampaignAnalyticsRow[]>(
                '/email-campaigns/analytics',
                { params: filters }
            );
            return response.data;
        } catch {
            if (isDemoMode()) {
                let data = [...DEV_SEED_ANALYTICS];

                // Campaign filter
                if (filters?.campaign_id && filters.campaign_id !== 'all') {
                    data = data.filter((r) => r.id === filters.campaign_id);
                }

                // Date range filter
                if (filters?.date_from) {
                    const from = new Date(filters.date_from).getTime();
                    data = data.filter((r) => {
                        if (!r.sent_at) return true; // include unsent campaigns
                        return new Date(r.sent_at).getTime() >= from;
                    });
                }
                if (filters?.date_to) {
                    const to = new Date(filters.date_to).getTime() + 86400000; // inclusive of end day
                    data = data.filter((r) => {
                        if (!r.sent_at) return true;
                        return new Date(r.sent_at).getTime() <= to;
                    });
                }

                return data;
            }
            throw new Error('Failed to load analytics data');
        }
    },

    /**
     * Fetch campaign list for the dropdown filter.
     */
    getCampaignOptions: async (): Promise<CampaignOption[]> => {
        try {
            const response = await apiClient.get<CampaignOption[]>(
                '/email-campaigns/analytics/campaigns'
            );
            return response.data;
        } catch {
            if (isDemoMode()) {
                return DEV_SEED_ANALYTICS.map((r) => ({
                    id: r.id,
                    name: r.campaign_name,
                }));
            }
            throw new Error('Failed to load campaign options');
        }
    },
};
