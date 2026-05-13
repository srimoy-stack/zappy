'use client';

import { DateRangeProvider } from '@/modules/ai-call-analytics/components/DateRangeContext';

export default function CallAnalyticsLayout({ children }: { children: React.ReactNode }) {
    return (
        <DateRangeProvider defaultPreset="30d">
            {children}
        </DateRangeProvider>
    );
}
