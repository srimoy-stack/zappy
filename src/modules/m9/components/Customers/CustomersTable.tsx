import React from 'react';
import { Customer } from '../../types/customers';
import { ChevronRight, Phone, ShoppingBag, Star } from 'lucide-react';

interface CustomersTableProps {
    data: Customer[];
    onRowClick: (customer: Customer) => void;
}

export const CustomersTable: React.FC<CustomersTableProps> = ({ data, onRowClick }) => {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    const getTierColor = (tier: string) => {
        switch (tier) {
            case 'GOLD': return 'text-amber-500 bg-amber-50 border-amber-100';
            case 'SILVER': return 'text-slate-400 bg-slate-50 border-slate-200';
            default: return 'text-orange-400 bg-orange-50 border-orange-100';
        }
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">Orders</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Last Activity</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">Total Spend</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">Loyalty</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {data.map((customer) => (
                            <tr
                                key={customer.id}
                                onClick={() => onRowClick(customer)}
                                className="hover:bg-slate-50/80 cursor-pointer transition-colors group"
                            >
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                                            {customer.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">{customer.name}</div>
                                            <div className="text-[10px] text-slate-400 font-medium">#{customer.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-0.5">
                                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                            <Phone className="w-3 h-3 text-slate-400" />
                                            {customer.phone}
                                        </div>
                                        {customer.email && (
                                            <div className="text-[10px] text-slate-400 ml-4.5">{customer.email}</div>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">
                                        <ShoppingBag className="w-3 h-3" />
                                        {customer.totalOrders}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {new Date(customer.lastOrderDate).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-sm font-mono font-bold text-slate-900 text-right">
                                    {formatCurrency(customer.totalSpend)}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold border ${getTierColor(customer.loyaltyTier)}`}>
                                        <Star className="w-3 h-3 fill-current" />
                                        {customer.loyaltyTier}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-900 transition-all group-hover:translate-x-1" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
