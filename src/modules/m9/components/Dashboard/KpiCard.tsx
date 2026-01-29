import React from 'react';
import { cn } from '@/utils';

interface KpiCardProps {
    label: string;
    value: string;
    secondaryInfo?: string;
    isLoading?: boolean;
}

/**
 * KPI Card Component
 * Refined for Home Dashboard (M9-T0.2)
 * Features: White background, subtle border, compact height (~90-100px)
 */
export const KpiCard: React.FC<KpiCardProps> = ({
    label,
    value,
    secondaryInfo,
    isLoading = false,
}) => {
    if (isLoading) {
        return (
            <div className="bg-white border border-slate-200 p-3 h-24 animate-pulse">
                <div className="space-y-2">
                    <div className="h-2 bg-slate-100 rounded w-16"></div>
                    <div className="h-6 bg-slate-100 rounded w-24"></div>
                </div>
            </div>
        );
    }

    // Determine if value is negative (contains '-')
    const isNegative = value.includes('-');

    return (
        <div className="bg-white border border-slate-200 p-3 h-24 flex flex-col justify-start">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">
                {label}
            </div>
            <div className={cn(
                'text-2xl font-bold tracking-tight',
                isNegative ? 'text-red-600' : 'text-slate-900'
            )}>
                {value}
            </div>
            {secondaryInfo && (
                <div className="text-[10px] text-slate-400 font-medium mt-1">
                    {secondaryInfo}
                </div>
            )}
        </div>
    );
};
