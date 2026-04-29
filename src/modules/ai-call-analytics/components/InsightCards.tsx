'use client';

import React from 'react';
import { TrendingUp, TrendingDown, Timer, Bell } from 'lucide-react';
import type { CallStats } from '../types/callAnalytics.types';

interface InsightCardsProps {
    stats: CallStats | null;
    alertCount: number;
}

/**
 * Quick insight cards computed from stats API.
 * Updates dynamically with filter changes.
 */
export const InsightCards: React.FC<InsightCardsProps> = ({ stats, alertCount }) => {
    if (!stats || stats.total_calls === 0) return null;

    const successRate = ((stats.successful_calls / stats.total_calls) * 100).toFixed(1);
    const failureRate = ((stats.failed_calls / stats.total_calls) * 100).toFixed(1);

    const cards = [
        {
            label: 'Success Rate',
            value: `${successRate}%`,
            icon: TrendingUp,
            color: Number(successRate) >= 80 ? 'text-emerald-600' : Number(successRate) >= 50 ? 'text-amber-600' : 'text-red-600',
            bg: Number(successRate) >= 80 ? 'bg-emerald-50' : Number(successRate) >= 50 ? 'bg-amber-50' : 'bg-red-50',
        },
        {
            label: 'Failure Rate',
            value: `${failureRate}%`,
            icon: TrendingDown,
            color: Number(failureRate) <= 10 ? 'text-emerald-600' : Number(failureRate) <= 25 ? 'text-amber-600' : 'text-red-600',
            bg: Number(failureRate) <= 10 ? 'bg-emerald-50' : Number(failureRate) <= 25 ? 'bg-amber-50' : 'bg-red-50',
        },
        {
            label: 'Follow-ups',
            value: stats.follow_up_required_count.toString(),
            icon: Timer,
            color: 'text-orange-600',
            bg: 'bg-orange-50',
        },
        {
            label: 'Active Alerts',
            value: alertCount.toString(),
            icon: Bell,
            color: alertCount > 0 ? 'text-red-600' : 'text-slate-400',
            bg: alertCount > 0 ? 'bg-red-50' : 'bg-slate-50',
        },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {cards.map((card) => {
                const Icon = card.icon;
                return (
                    <div key={card.label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${card.bg}`}>
                            <Icon className={`h-4 w-4 ${card.color}`} />
                        </div>
                        <div>
                            <p className={`text-lg font-bold ${card.color}`}>{card.value}</p>
                            <p className="text-[11px] text-slate-500 font-medium">{card.label}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
