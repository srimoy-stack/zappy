import React from 'react';
import { formatCurrency } from '@/utils';
import { RecentOrder } from '../../types/dashboard';
import { EmptyState } from '@/components/feedback';
import { cn } from '@/utils';

interface RecentOrdersTableProps {
    data: RecentOrder[];
    isLoading?: boolean;
    onOrderClick?: (orderId: string) => void;
}

/**
 * Recent Orders Table
 * Refined for Home Dashboard (M9-T0.2)
 * Features: subtle text-based status coloring, dense rows, no background fills
 */
export const RecentOrdersTable: React.FC<RecentOrdersTableProps> = ({
    data,
    isLoading = false,
    onOrderClick,
}) => {
    const getStatusColor = (status: RecentOrder['status']) => {
        switch (status) {
            case 'completed':
                return 'text-emerald-600/80'; // muted green
            case 'pending':
                return 'text-amber-600/80';   // muted amber
            case 'cancelled':
                return 'text-slate-400';      // muted slate
            case 'refunded':
                return 'text-red-600/80';     // muted red
            default:
                return 'text-slate-600';
        }
    };

    const getStatusLabel = (status: RecentOrder['status']) => {
        return status.charAt(0).toUpperCase() + status.slice(1);
    };

    if (isLoading) {
        return (
            <div className="bg-white border border-slate-200 divide-y divide-slate-100">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex gap-4 p-3 animate-pulse">
                        <div className="h-4 bg-slate-50 rounded w-16"></div>
                        <div className="h-4 bg-slate-50 rounded w-20"></div>
                        <div className="h-4 bg-slate-50 rounded w-32"></div>
                        <div className="h-4 bg-slate-50 rounded w-16"></div>
                        <div className="h-4 bg-slate-50 rounded w-20"></div>
                        <div className="h-4 bg-slate-50 rounded w-16 ml-auto"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="bg-white border border-slate-200">
                <EmptyState
                    title="No recent orders"
                    description="Recent orders will appear here"
                />
            </div>
        );
    }

    return (                               
        <div className="bg-white border border-slate-200">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/30">
                        <th className="text-left px-4 py-2 text-                           [10px] font-bold text-slate-500 uppercase tracking-widest">
                            Time
                        </th>
                        <th className="text-left px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Order #
                        </th>
                        <th className="text-left px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Customer
                        </th>                           
                        <th className="text-left px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Channel
                        </th>
                        <th className="text-left px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Status
                        </th>
                        <th className="text-right px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {data.slice(0, 5).map((order) => (
                        <tr
                            key={order.id}
                            onClick={() => onOrderClick?.(order.id)}
                            className={cn(
                                "group",
                                onOrderClick && 'cursor-pointer hover:bg-slate-50/50'
                            )}
                        >
                            <td className="px-4 py-2 text-xs text-slate-500">
                                {order.time}
                            </td>
                            <td className="px-4 py-2 text-xs font-bold text-slate-900">
                                {order.orderNumber}
                            </td>
                            <td className="px-4 py-2 text-xs text-slate-600">
                                {order.customer}
                            </td>
                            <td className="px-4 py-2">
                                <span className="text-[11px] font-medium text-slate-500">
                                    {order.channel}
                                </span>
                            </td>
                            <td className="px-4 py-2">
                                <span className={cn('text-[11px] font-bold', getStatusColor(order.status))}>
                                    {getStatusLabel(order.status)}
                                </span>
                            </td>
                            <td className="px-4 py-2 text-xs text-slate-900 font-bold text-right">
                                {formatCurrency(order.total)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
