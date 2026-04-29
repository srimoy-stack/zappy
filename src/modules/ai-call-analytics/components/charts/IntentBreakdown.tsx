'use client';

import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer,
} from 'recharts';
import type { IntentBar } from '../../utils/chartTransformers';
import { CHART_COLORS } from '../../utils/chartTransformers';
import { ChartCard, EmptyChart } from './CallVolumeTrend';

interface Props {
    data: IntentBar[];
}

/**
 * Customer Intent Breakdown — Horizontal bar chart.
 */
export const IntentBreakdown: React.FC<Props> = ({ data }) => {

    if (data.length === 0) {
        return <EmptyChart label="No intent data available" />;
    }

    return (
        <ChartCard title="Customer Intent Breakdown">
            <ResponsiveContainer width="100%" height={Math.max(200, data.length * 36)}>
                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                    <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} allowDecimals={false} />
                    <YAxis
                        type="category"
                        dataKey="intent"
                        tick={{ fontSize: 11, fill: '#64748b' }}
                        width={80}
                    />
                    <Tooltip
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                        formatter={(value) => [Number(value ?? 0), 'Calls']}
                    />
                    <Bar dataKey="count" name="Calls" fill={CHART_COLORS.primary} radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
            </ResponsiveContainer>
        </ChartCard>
    );
};
