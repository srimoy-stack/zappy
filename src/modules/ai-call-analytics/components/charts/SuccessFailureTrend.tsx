'use client';

import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Legend,
} from 'recharts';
import type { DailySuccessBreakdown } from '../../utils/chartTransformers';
import { CHART_COLORS } from '../../utils/chartTransformers';
import { ChartCard, EmptyChart } from './CallVolumeTrend';

interface Props {
    data: DailySuccessBreakdown[];
}

/**
 * Success vs Failure Trend — Stacked bar chart by date.
 */
export const SuccessFailureTrend: React.FC<Props> = ({ data }) => {

    if (data.length === 0) {
        return <EmptyChart label="No success/failure data available" />;
    }

    return (
        <ChartCard title="Success vs Failure Trend">
            <ResponsiveContainer width="100%" height={280}>
                <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
                    <Bar dataKey="successful" name="Successful" stackId="status" fill={CHART_COLORS.successful} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="partial" name="Partial" stackId="status" fill={CHART_COLORS.partial} />
                    <Bar dataKey="failed" name="Failed" stackId="status" fill={CHART_COLORS.failed} radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </ChartCard>
    );
};
