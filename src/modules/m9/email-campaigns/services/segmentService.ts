import apiClient from '@/api/axios';
import { Segment, SegmentRulesPayload, EstimateCountResponse, StoreOption } from '../types/campaign.types';

/**
 * Segments API Service
 *
 * Provides centralized access to audience segment management endpoints.
 * Follows the same pattern as emailCampaignService.
 */
export const segmentService = {
    /**
     * Fetch all segments
     */
    getSegments: async (): Promise<Segment[]> => {
        const response = await apiClient.get<Segment[]>('/email-campaigns/segments');
        return response.data;
    },

    /**
     * Fetch a single segment by ID
     */
    getSegmentById: async (id: string): Promise<Segment> => {
        const response = await apiClient.get<Segment>(`/email-campaigns/segments/${id}`);
        return response.data;
    },

    /**
     * Create a new segment
     */
    createSegment: async (payload: Omit<Segment, 'id' | 'created_at' | 'updated_at'>): Promise<Segment> => {
        const response = await apiClient.post<Segment>('/email-campaigns/segments', payload);
        return response.data;
    },

    /**
     * Update an existing segment
     */
    updateSegment: async (id: string, payload: Partial<Segment>): Promise<Segment> => {
        const response = await apiClient.put<Segment>(`/email-campaigns/segments/${id}`, payload);
        return response.data;
    },

    /**
     * Duplicate a segment
     * POST /email-segments/:id/duplicate
     * Payload: { name: "<original_name> (Copy)" }
     */
    duplicateSegment: async (id: string, name: string): Promise<Segment> => {
        const response = await apiClient.post<Segment>(
            `/email-segments/${id}/duplicate`,
            { name }
        );
        return response.data;
    },

    /**
     * Delete a segment
     * DELETE /email-segments/:id
     */
    deleteSegment: async (id: string): Promise<void> => {
        await apiClient.delete(`/email-segments/${id}`);
    },

    /**
     * Update segment status (Active/Inactive)
     * PATCH /email-segments/:id/status
     */
    updateSegmentStatus: async (id: string, status: 'active' | 'inactive'): Promise<Segment> => {
        const response = await apiClient.patch<Segment>(
            `/email-segments/${id}/status`,
            { status }
        );
        return response.data;
    },

    /**
     * Estimate audience count for a given set of rules.
     * POST /email-campaigns/segments/estimate
     *
     * Falls back to a deterministic mock in development when the API is unavailable.
     */
    estimateCount: async (rules: SegmentRulesPayload): Promise<EstimateCountResponse> => {
        try {
            const response = await apiClient.post<EstimateCountResponse>(
                '/email-campaigns/segments/estimate',
                rules
            );
            return response.data;
        } catch {
            // Deterministic mock: derive count from rule values for a stable UI during dev
            if (process.env.NODE_ENV === 'development') {
                const base = 15000;
                let modifier = 1;
                for (const rule of rules.rules) {
                    if (rule.field === 'consent_status') {
                        if (rule.value === 'unsubscribed') modifier *= 0.12;
                        else if (rule.value === 'suppressed') modifier *= 0.05;
                        else modifier *= 0.78;
                    } else if (rule.field === 'total_spend' && typeof rule.value === 'string') {
                        const v = parseFloat(rule.value) || 100;
                        modifier *= Math.max(0.05, 1 - v / 2000);
                    } else if (rule.field === 'orders_count' && typeof rule.value === 'string') {
                        const v = parseFloat(rule.value) || 1;
                        modifier *= Math.max(0.08, 1 - v / 50);
                    } else if (rule.field === 'last_order_days' && typeof rule.value === 'string') {
                        const v = parseFloat(rule.value) || 30;
                        if (rule.operator === '>') modifier *= Math.min(0.9, v / 365);
                        else modifier *= Math.max(0.1, 1 - v / 365);
                    } else if (rule.field === 'store_id' && Array.isArray(rule.value)) {
                        modifier *= Math.max(0.1, rule.value.length * 0.2);
                    }
                }
                if (rules.logic === 'OR' && rules.rules.length > 1) {
                    modifier = Math.min(modifier * 1.6, 0.95);
                }
                const estimated = Math.round(base * modifier);
                return {
                    estimated_count: Math.max(0, estimated),
                    breakdown: {
                        eligible: Math.round(estimated * 0.78),
                        unsubscribed: Math.round(estimated * 0.14),
                        suppressed: Math.round(estimated * 0.08),
                    },
                };
            }
            throw new Error('Failed to estimate audience count');
        }
    },

    /**
     * Get available stores for the current tenant context.
     * GET /stores
     *
     * Falls back to mock stores during development.
     */
    getStores: async (): Promise<StoreOption[]> => {
        try {
            const response = await apiClient.get<StoreOption[]>('/stores');
            return response.data;
        } catch {
            if (process.env.NODE_ENV === 'development') {
                return [
                    { id: 'store_001', name: 'Flagship San Francisco' },
                    { id: 'store_002', name: 'New York Boutique' },
                    { id: 'store_003', name: 'London Outlet' },
                    { id: 'store_004', name: 'Tokyo Concept' },
                    { id: 'store_005', name: 'Online Store' },
                ];
            }
            throw new Error('Failed to load stores');
        }
    },
};
