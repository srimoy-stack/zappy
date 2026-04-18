'use client';

import { useState, useEffect, useCallback } from 'react';
import { Segment } from '../types/campaign.types';
import { segmentService } from '../services/segmentService';
import { DEV_SEED_SEGMENTS } from '../utils/segmentSeeds';


/**
 * Hook to fetch and manage the segments list.
 * Provides loading/error state and a refetch function.
 *
 * Falls back to dev seed data when the API endpoint is unavailable,
 * so the UI flow can be verified before backend integration.
 */
export function useSegments() {
    const [data, setData] = useState<Segment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchSegments = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const segments = await segmentService.getSegments();
            setData(segments);
        } catch (err: unknown) {
            // In development: fallback to seeds to verify UI functionality if API is unavailable
            if (process.env.NODE_ENV === 'development') {
                console.warn('[useSegments] API unavailable — using dev seed data for testing');
                setData(DEV_SEED_SEGMENTS);
            } else {
                const message = err instanceof Error ? err.message : 'Failed to load segments';
                setError(message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSegments();
    }, [fetchSegments]);

    return { data, loading, error, refetch: fetchSegments };
}
