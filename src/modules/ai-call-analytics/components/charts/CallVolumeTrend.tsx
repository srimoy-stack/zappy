'use client';

import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Legend,
} from 'recharts';
import type { DailyVolume } from '../../utils/chartTransformers';
import { CHART_COLORS } from '../../utils/chartTransformers';

interface Props {
    data: DailyVolume[];
}

/**
 * Call Volume Trend — Line chart showing calls per day.
 */
export const CallVolumeTrend: React.FC<Props> = ({ data }) => {

    if (data.length === 0) {
        return <EmptyChart label="No call volume data available" />;
    }

    return (
        <ChartCard title="Call Volume Trend">
            <ResponsiveContainer width="100%" height={280}>
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis
                        dataKey="date"
                        tick={{ fontSize: 11, fill: '#94a3b8' }}
                        tickFormatter={(v) => new Date(v).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    />
                    <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} allowDecimals={false} />
                    <Tooltip
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                        labelFormatter={(v) => new Date(v).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Line
                        type="monotone"
                        dataKey="total"
                        name="Total Calls"
                        stroke={CHART_COLORS.primary}
                        strokeWidth={2}
                        dot={{ r: 3, fill: CHART_COLORS.primary }}
                        activeDot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
    );
};

// ─── Shared Helpers ─────────────────────────────────────────────────────────

export function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">{title}</h3>
            {children}
        </div>
    );
}

export function EmptyChart({ label }: { label: string }) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-sm text-slate-400">{label}</p>
        </div>
    );
}
