import React from 'react';
import { Customer } from '../../types/customers';
import { ShoppingBag, DollarSign, Star, Phone, Mail } from 'lucide-react';

interface CustomerStatsHeaderProps {
    customer: Customer;
}

export const CustomerStatsHeader: React.FC<CustomerStatsHeaderProps> = ({ customer }) => {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Identity */}
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-slate-900/20">
                        {customer.name.charAt(0)}
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">{customer.name}</h1>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                            <div className="flex items-center gap-1.5 text-sm font-bold text-slate-500">
                                <Phone className="w-4 h-4" />
                                {customer.phone}
                            </div>
                            {customer.email && (
                                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-500">
                                    <Mail className="w-4 h-4" />
                                    {customer.email}
                                </div>
                            )}
                            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 text-[10px] font-black uppercase tracking-widest">
                                Validated Profile
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="flex flex-wrap items-center gap-4">
                    <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-1">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                            <ShoppingBag className="w-3 h-3" /> Total Orders
                        </span>
                        <span className="text-xl font-black text-slate-900">{customer.totalOrders}</span>
                    </div>

                    <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-1">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                            <DollarSign className="w-3 h-3" /> Total Spend
                        </span>
                        <span className="text-xl font-black text-slate-900">{formatCurrency(customer.totalSpend)}</span>
                    </div>

                    <div className="px-6 py-4 bg-slate-900 rounded-2xl flex flex-col gap-1 shadow-lg shadow-slate-200">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                            <Star className="w-3 h-3 text-amber-400" /> {customer.loyaltyTier}
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-black text-white">{customer.loyaltyPoints}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Pts</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
