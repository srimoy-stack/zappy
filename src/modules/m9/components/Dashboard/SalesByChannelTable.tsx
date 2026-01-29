import React from 'react';
import { formatCurrency } from '@/utils';
import { SalesChannel } from '../../types/dashboard';
import { EmptyState } from '@/components/feedback';

interface SalesByChannelTableProps {
    data: SalesChannel[];
    isLoading?: boolean;
}

/**
 * Sales by Channel Table
 * Refined for Home Dashboard (M9-T0.2)
 * Features: dense, enterprise layout, subtle dividers
 */
export const SalesByChannelTable: React.FC<SalesByChannelTableProps> = ({
    data,
    isLoading = false,
}) => {
    if (isLoading) {
        return (
            <div className="bg-white border border-slate-200 divide-y divide-slate-100">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 p-3 animate-pulse">
                        <div className="h-4 bg-slate-50 rounded w-24"></div>
                        <div className="h-4 bg-slate-50 rounded w-12 ml-auto"></div>
                        <div className="h-4 bg-slate-50 rounded w-20"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="bg-white border border-slate-200">
                <EmptyState
                    title="No sales data"
                    description="Sales data will appear here"
                />
            </div>
        );
    }

    return (
        <div className="bg-white border border-slate-200">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/30">
                        <th className="text-left px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Channel
                        </th>
                        <th className="text-right px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Orders
                        </th>
                        <th className="text-right px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Sales
                        </th>
                        <th className="text-right px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            %
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {data.map((row) => (
                        <tr key={row.channel}>
                            <td className="px-4 py-2 text-xs font-bold text-slate-900">
                                {row.channel}
                            </td>
                            <td className="px-4 py-2 text-xs text-slate-500 text-right">
                                {row.orders}
                            </td>
                            <td className="px-4 py-2 text-xs text-slate-900 font-bold text-right">
                                {formatCurrency(row.sales)}
                            </td>
                            <td className="px-4 py-2 text-[11px] text-slate-500 text-right">
                                {row.percentage.toFixed(1)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
