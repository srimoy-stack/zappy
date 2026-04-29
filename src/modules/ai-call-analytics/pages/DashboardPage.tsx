'use client';

import React from 'react';
import {
    Phone, CheckCircle, XCircle, AlertTriangle, Clock, Frown, Activity,
    Bell, ChevronRight,
} from 'lucide-react';
import { useStats } from '../hooks/useStats';
import { useAlerts } from '../hooks/useAlerts';
import { useTrends } from '../hooks/useTrends';
import { useDateRange } from '../components/DateRangeContext';
import { ErrorBanner } from '../components/ErrorBanner';
import { SkeletonCard } from '../components/SkeletonCard';
import { SkeletonChart } from '../components/SkeletonChart';
import { DataStatusBar } from '../components/DataStatusBar';
import { CallVolumeTrend } from '../components/charts/CallVolumeTrend';
import { SuccessFailureTrend } from '../components/charts/SuccessFailureTrend';
import { SentimentDonut } from '../components/charts/SentimentDonut';
import { IntentBreakdown } from '../components/charts/IntentBreakdown';
import { AlertsTrend } from '../components/charts/AlertsTrend';
import type { CallStats, AlertSeverity } from '../types/callAnalytics.types';

// ─── Card Configuration ─────────────────────────────────────────────────────

interface StatCardConfig {
    key: keyof CallStats;
    label: string;
    icon: React.FC<{ className?: string }>;
    iconBg: string;
    iconColor: string;
    accentBorder: string;
}

const STAT_CARDS: StatCardConfig[] = [
    { key: 'total_calls', label: 'Total Calls', icon: Phone, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', accentBorder: 'border-l-blue-500' },
    { key: 'successful_calls', label: 'Successful', icon: CheckCircle, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600', accentBorder: 'border-l-emerald-500' },
    { key: 'failed_calls', label: 'Failed', icon: XCircle, iconBg: 'bg-red-50', iconColor: 'text-red-600', accentBorder: 'border-l-red-500' },
    { key: 'partial_calls', label: 'Partial', icon: AlertTriangle, iconBg: 'bg-amber-50', iconColor: 'text-amber-600', accentBorder: 'border-l-amber-500' },
    { key: 'follow_up_required_count', label: 'Follow-Up Required', icon: Clock, iconBg: 'bg-orange-50', iconColor: 'text-orange-600', accentBorder: 'border-l-orange-500' },
    { key: 'negative_sentiment_count', label: 'Negative Sentiment', icon: Frown, iconBg: 'bg-rose-50', iconColor: 'text-rose-600', accentBorder: 'border-l-rose-500' },
];

const SEVERITY_STYLES: Record<AlertSeverity, { bg: string; text: string; dot: string }> = {
    high: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
    medium: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
};

// ─── Dashboard Page ─────────────────────────────────────────────────────────

export default function DashboardPage() {
    const { dateFrom, dateTo } = useDateRange();

    const dateFilters = { date_from: dateFrom || undefined, date_to: dateTo || undefined };

    const { data: stats, loading, isRefreshing, error, lastUpdated, refetch } = useStats(dateFilters);
    const { data: alerts, error: alertsError } = useAlerts({ ...dateFilters, limit: 5 });
    // Server-side aggregated chart data (full dataset, not limited to 100)
    const trends = useTrends(dateFilters);

    return (
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">AI Call Analytics</h1>
                    <p className="text-sm text-slate-500 mt-1">Real-time overview of call performance</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span>Live</span>
                    <Activity className="h-4 w-4 ml-1 text-slate-400" />
                </div>
            </div>

            {/* Data Status Bar */}
            <div className="mb-5">
                <DataStatusBar
                    lastUpdated={lastUpdated}
                    isRefreshing={isRefreshing}
                    error={error}
                    totalRecords={stats?.total_calls ?? 0}
                    onRefresh={refetch}
                />
            </div>

            {/* Error State */}
            {error && (
                <div className="mb-6">
                    <ErrorBanner message={error} onRetry={refetch} autoRetrySeconds={15} dismissible />
                </div>
            )}

            {/* Stat Cards Grid */}
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            ) : stats ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {STAT_CARDS.map((card) => {
                        const Icon = card.icon;
                        const value = stats[card.key];
                        return (
                            <div
                                key={card.key}
                                id={`stat-card-${card.key}`}
                                className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm border-l-4 ${card.accentBorder} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg}`}>
                                        <Icon className={`h-5 w-5 ${card.iconColor}`} />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-slate-900 tracking-tight">{value.toLocaleString()}</div>
                                <p className="text-sm text-slate-500 mt-1 font-medium">{card.label}</p>
                            </div>
                        );
                    })}
                </div>
            ) : null}

            {/* ── Charts Section ─────────────────────────────────────── */}
            <div className="mt-8 space-y-6">
                <h2 className="text-lg font-semibold text-slate-800">Trends & Insights</h2>

                {trends.loading ? (
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <SkeletonChart title="Call Volume" />
                            <SkeletonChart title="Success / Failure" />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <SkeletonChart title="Sentiment" height={200} />
                            <SkeletonChart title="Intent" height={200} />
                        </div>
                    </>
                ) : trends.error ? (
                    <div className="mb-3">
                        <ErrorBanner message={trends.error} dismissible />
                    </div>
                ) : trends.hasData ? (
                    <>
                        {/* Row 1: Volume + Success/Failure */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <CallVolumeTrend data={trends.callVolume} />
                            <SuccessFailureTrend data={trends.successBreakdown} />
                        </div>

                        {/* Row 2: Sentiment + Intent */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <SentimentDonut data={trends.sentimentDistribution} />
                            <IntentBreakdown data={trends.intentBreakdown} />
                        </div>

                        {/* Row 3: Alerts Trend */}
                        {trends.alertsTrend.length > 0 && (
                            <AlertsTrend data={trends.alertsTrend} />
                        )}
                    </>
                ) : (
                    <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
                        <Activity className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                        <p className="text-sm text-slate-500">No call data available for the selected period</p>
                    </div>
                )}
            </div>

            {/* ── Alerts Panel ───────────────────────────────────────── */}
            <div className="mt-8 mb-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-slate-600" />
                        <h2 className="text-lg font-semibold text-slate-900">Recent Alerts</h2>
                        {alerts.length > 0 && (
                            <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                                {alerts.length}
                            </span>
                        )}
                    </div>
                </div>

                {alertsError && (
                    <div className="mb-3">
                        <ErrorBanner message={alertsError} dismissible />
                    </div>
                )}

                {alerts.length === 0 && !alertsError ? (
                    <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
                        <CheckCircle className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-500">No active alerts</p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        {alerts.map((alert) => {
                            const style = SEVERITY_STYLES[alert.severity];
                            return (
                                <div
                                    key={alert.id}
                                    id={`alert-${alert.id}`}
                                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm transition-all hover:shadow-md cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${style.bg} ${style.text}`}>
                                            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                                            {alert.severity}
                                        </span>
                                        <span className="text-sm text-slate-700 font-medium">{alert.message}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-slate-400">
                                        <span>{new Date(alert.created_at).toLocaleTimeString()}</span>
                                        <ChevronRight className="h-3.5 w-3.5" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
