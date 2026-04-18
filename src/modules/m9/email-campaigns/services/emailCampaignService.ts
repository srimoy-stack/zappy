import apiClient from '@/api/axios';
import { Campaign, CreateCampaignPayload, EmailTemplate, AudienceEligibility } from '../types/campaign.types';

/**
 * Email Campaigns API Service
 *
 * Provides centralized access to email campaign management endpoints.
 */
export const emailCampaignService = {
    /**
     * Fetch all email campaigns
     */
    getCampaigns: async (): Promise<Campaign[]> => {
        const response = await apiClient.get<Campaign[]>('/email-campaigns');
        return response.data;
    },

    /**
     * Fetch a single campaign by ID
     */
    getCampaign: async (id: string): Promise<Campaign> => {
        const response = await apiClient.get<Campaign>(`/email-campaigns/${id}`);
        return response.data;
    },

    /**
     * Create a new email campaign
     */
    createCampaign: async (payload: CreateCampaignPayload): Promise<Campaign> => {
        const response = await apiClient.post<Campaign>('/email-campaigns', payload);
        return response.data;
    },

    /**
     * Update an existing campaign
     */
    updateCampaign: async (id: string, payload: Partial<CreateCampaignPayload>): Promise<Campaign> => {
        const response = await apiClient.put<Campaign>(`/email-campaigns/${id}`, payload);
        return response.data;
    },

    /**
     * Duplicate a campaign
     */
    duplicateCampaign: async (id: string): Promise<Campaign> => {
        const response = await apiClient.post<Campaign>(`/email-campaigns/${id}/duplicate`);
        return response.data;
    },

    /**
     * Schedule a campaign
     */
    scheduleCampaign: async (id: string, scheduledAt?: string): Promise<Campaign> => {
        const response = await apiClient.post<Campaign>(
            `/email-campaigns/${id}/schedule`,
            scheduledAt ? { scheduledAt } : undefined
        );
        return response.data;
    },

    /**
     * Pause a campaign
     */
    pauseCampaign: async (id: string): Promise<Campaign> => {
        const response = await apiClient.post<Campaign>(`/email-campaigns/${id}/pause`);
        return response.data;
    },

    /**
     * Fetch templates
     */
    getTemplates: async (): Promise<EmailTemplate[]> => {
        const response = await apiClient.get<EmailTemplate[]>('/email-campaigns/templates');
        return response.data;
    },

    /**
     * Fetch audience eligibility
     */
    getContacts: async (): Promise<AudienceEligibility> => {
        const response = await apiClient.get<AudienceEligibility>('/email-campaigns/contacts');
        return response.data;
    },

    /**
     * Send a test email
     */
    sendTestEmail: async (email: string, options: { templateId?: string; templateHtml?: string }): Promise<void> => {
        await apiClient.post('/email-campaigns/test-send', { ...options, email });
    },
    /**
     * Archive a campaign
     */
    archiveCampaign: async (id: string): Promise<void> => {
        await apiClient.post(`/email-campaigns/${id}/archive`);
    },
    /**
     * Fetch dashboard summary stats
     */
    getDashboardStats: async (filters: any): Promise<any> => {
        // In reality, this would send filters to the backend
        const response = await apiClient.get('/email-campaigns/dashboard/stats', { params: filters });
        return response.data;
    },
};
