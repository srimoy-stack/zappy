'use client';

import React, { useState } from 'react';
import { CustomerOrder } from '../../types/customers';
import { RefreshCcw, Loader2, CheckCircle2 } from 'lucide-react';

interface ReorderButtonProps {
    orderId: string;
    onReorder: (orderId: string) => Promise<void>;
    disabled?: boolean;
}

export const ReorderButton: React.FC<ReorderButtonProps> = ({ orderId, onReorder, disabled }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLoading(true);
        try {
            await onReorder(orderId);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled || isLoading}
            className="group flex items-center gap-2 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm active:scale-95"
        >
            {isLoading ? (
                <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
                <RefreshCcw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
            )}
            Reorder Last
        </button>
    );
};

interface OrderHistoryTableProps {
    orders: CustomerOrder[];
    onReorder: (orderId: string) => Promise<void>;
}

export const OrderHistoryTable: React.FC<OrderHistoryTableProps> = ({ orders, onReorder }) => {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    const getChannelIcon = (channel: string) => {
        switch (channel) {
            case 'POS': return <span className="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-[9px] font-black tracking-tighter">POS</span>;
            case 'ONLINE': return <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[9px] font-black tracking-tighter">APP</span>;
            case 'UBER': return <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[9px] font-black tracking-tighter">UBER</span>;
            default: return null;
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1 h-3.5 bg-slate-900 rounded-full" />
                    Unified Order History
                </h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cross-Channel Aggregation</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100">
                            <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                            <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Store</th>
                            <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Channel</th>
                            <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Items</th>
                            <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Total</th>
                            <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-slate-900">{new Date(order.date).toLocaleDateString()}</div>
                                    <div className="text-[10px] text-slate-400 font-mono italic">#{order.id}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-slate-700">{order.storeName}</span>
                                </td>
                                <td className="px-6 py-4">
                                    {getChannelIcon(order.channel)}
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-xs text-slate-600 font-medium line-clamp-1 truncate max-w-[200px]" title={order.itemsSummary}>
                                        {order.itemsSummary}
                                    </p>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className="text-sm font-mono font-black text-slate-900">{formatCurrency(order.totalAmount)}</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {order.canReorder ? (
                                        <ReorderButton orderId={order.id} onReorder={onReorder} />
                                    ) : (
                                        <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                                            <CheckCircle2 className="w-3 h-3" /> Historical
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
