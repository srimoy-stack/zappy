import React from 'react';
import { KpiCard } from './KpiCard';
import { formatCurrency } from '@/utils';

interface KpiRowProps {
    data: {
        grossSales: number;
        netSales: number;
        orders: number;
        averageOrderValue: number;
        refunds: number;
        cashVariance: number;
    } | null;
    isLoading?: boolean;
}

/**
 * KPI Summary Row
 * Horizontal row of 6 KPI cards
 * Follows exact order: Gross Sales, Net Sales, Orders, Avg Ticket, Refunds, Cash Var
 */
export const KpiRow: React.FC<KpiRowProps> = ({ data, isLoading = false }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-0 border-t border-l border-slate-200">
            <div className="border-r border-b border-slate-200">
                <KpiCard
                    label="Gross Sales"
                    value={data ? formatCurrency(data.grossSales) : '$0.00'}
                    isLoading={isLoading}
                />
            </div>
            <div className="border-r border-b border-slate-200">
                <KpiCard
                    label="Net Sales"
                    value={data ? formatCurrency(data.netSales) : '$0.00'}
                    isLoading={isLoading}
                />
            </div>
            <div className="border-r border-b border-slate-200">
                <KpiCard
                    label="Orders"
                    value={data ? data.orders.toString() : '0'}
                    isLoading={isLoading}
                />
            </div>
            <div className="border-r border-b border-slate-200">
                <KpiCard
                    label="Avg Ticket"
                    value={data ? formatCurrency(data.averageOrderValue) : '$0.00'}
                    isLoading={isLoading}
                />
            </div>
            <div className="border-r border-b border-slate-200">
                <KpiCard
                    label="Refunds"
                    value={data ? formatCurrency(data.refunds) : '$0.00'}
                    isLoading={isLoading}
                />
            </div>
            <div className="border-r border-b border-slate-200">
                <KpiCard
                    label="Cash Var"
                    value={data ? formatCurrency(data.cashVariance) : '$0.00'}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
};
