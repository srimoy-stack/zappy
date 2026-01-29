/**
 * Environment configuration
 * In production, these would come from environment variables
 */

export const config = {
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
    environment: import.meta.env.MODE || 'development',
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
} as const;
