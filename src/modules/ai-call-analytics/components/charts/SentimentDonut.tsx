'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { SentimentSlice } from '../../utils/chartTransformers';
import { ChartCard, EmptyChart } from './CallVolumeTrend';

interface Props {
    data: SentimentSlice[];
}

/**
 * Sentiment Distribution — Donut chart.
 */
export const SentimentDonut: React.FC<Props> = ({ data }) => {

    if (data.length === 0) {
        return <EmptyChart label="No sentiment data available" />;
    }

    return (
        <ChartCard title="Sentiment Distribution">
            <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={3}
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                        labelLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                        formatter={(value) => [Number(value ?? 0), 'Calls']}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                </PieChart>
            </ResponsiveContainer>
        </ChartCard>
    );
};
