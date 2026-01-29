/**
 * Base API client configuration
 * All API calls must include tenant_id and store_id
 */

export interface ApiConfig {
    baseUrl: string;
    tenantId: string;
    storeId: string;
}

export class ApiClient {
    private config: ApiConfig;

    constructor(config: ApiConfig) {
        this.config = config;
    }

    /**
     * Base fetch wrapper that automatically includes tenant/store context
     */
    protected async fetch<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${this.config.baseUrl}${endpoint}`;

        const headers = new Headers(options.headers);
        headers.set('Content-Type', 'application/json');
        headers.set('X-Tenant-ID', this.config.tenantId);
        headers.set('X-Store-ID', this.config.storeId);

        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return response.json() as Promise<T>;
    }

    protected async get<T>(endpoint: string): Promise<T> {
        return this.fetch<T>(endpoint, { method: 'GET' });
    }

    protected async post<T>(endpoint: string, data: unknown): Promise<T> {
        return this.fetch<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    protected async put<T>(endpoint: string, data: unknown): Promise<T> {
        return this.fetch<T>(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    protected async delete<T>(endpoint: string): Promise<T> {
        return this.fetch<T>(endpoint, { method: 'DELETE' });
    }
}
