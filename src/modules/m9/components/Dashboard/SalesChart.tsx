import React from 'react';

/**
 * SalesChart Component (M9-T0.2)
 * Pure UI component using SVG for neutral enterprise look.
 * Static/Placeholder data as per specification.
 */
export const SalesChart: React.FC = () => {
    // Static placeholder data for the graph
    const data = [45, 52, 48, 70, 65, 80, 75, 90, 85, 95, 100, 110, 105, 120, 115, 130];
    const labels = ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];

    const height = 200;
    const width = 800;
    const padding = 40;

    const maxValue = Math.max(...data);
    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * (width - padding * 2) + padding;
        const y = height - (d / maxValue) * (height - padding * 2) - padding;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="w-full h-[280px] flex flex-col pt-4">
            <div className="flex-1 relative">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                    {/* Y-axis grid lines */}
                    {[0, 0.25, 0.5, 0.75, 1].map((p, i) => {
                        const y = height - padding - p * (height - padding * 2);
                        return (
                            <g key={i}>
                                <line
                                    x1={padding}
                                    y1={y}
                                    x2={width - padding}
                                    y2={y}
                                    stroke="#E2E8F0"
                                    strokeWidth="1"
                                    strokeDasharray="4 4"
                                />
                                <text
                                    x={padding - 10}
                                    y={y + 4}
                                    textAnchor="end"
                                    className="text-[10px] fill-slate-400 font-medium"
                                >
                                    {Math.round(p * maxValue)}
                                </text>
                            </g>
                        );
                    })}

                    {/* Main area gradient */}
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Area under the curve */}
                    <polyline
                        points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
                        fill="url(#gradient)"
                    />

                    {/* The line itself */}
                    <polyline
                        points={points}
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Data points */}
                    {data.map((d, i) => {
                        if (i % 2 !== 0) return null; // Show fewer points for cleaner UI
                        const x = (i / (data.length - 1)) * (width - padding * 2) + padding;
                        const y = height - (d / maxValue) * (height - padding * 2) - padding;
                        return (
                            <circle
                                key={i}
                                cx={x}
                                cy={y}
                                r="3"
                                className="fill-white stroke-emerald-500 stroke-[2]"
                            />
                        );
                    })}

                    {/* X-axis labels */}
                    {labels.map((label, i) => {
                        if (i % 3 !== 0) return null; // Show fewer labels
                        const x = (i / (labels.length - 1)) * (width - padding * 2) + padding;
                        return (
                            <text
                                key={i}
                                x={x}
                                y={height - padding + 20}
                                textAnchor="middle"
                                className="text-[10px] fill-slate-400 font-medium uppercase tracking-tighter"
                            >
                                {label}
                            </text>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};
