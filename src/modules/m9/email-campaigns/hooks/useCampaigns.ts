'use client';

import { useState, useEffect, useCallback } from 'react';
import { Campaign } from '../types/campaign.types';
import { emailCampaignService } from '../services/emailCampaignService';

import { DEV_SEED_CAMPAIGNS } from '../utils/campaignSeeds';

/**
 * Hook to fetch and manage the email campaigns list.
 * Provides loading/error state and a refetch function.
 */
export function useCampaigns() {
    const [data, setData] = useState<Campaign[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCampaigns = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const campaigns = await emailCampaignService.getCampaigns();
            setData(campaigns);
        } catch (err: unknown) {
            // In development: fallback to seed data if API is unavailable
            if (process.env.NODE_ENV === 'development') {
                console.warn('[useCampaigns] API unavailable — falling back to dev seed data');
                setData(DEV_SEED_CAMPAIGNS);
                setError(null);
            } else {
                const message = err instanceof Error ? err.message : 'Failed to load campaigns';
                setError(message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCampaigns();
    }, [fetchCampaigns]);

    return { data, loading, error, refetch: fetchCampaigns };
}
