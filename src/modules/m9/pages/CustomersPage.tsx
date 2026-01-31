'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
;
import { useRouteAccess } from '@/hooks/useRouteAccess';
import { CustomersTable } from '../components/Customers';
import { Customer, CustomerFilters } from '../types/customers';
import { mockCustomers } from '../mock/customers';
import { Users, Search, Filter, Download } from 'lucide-react';

export const CustomersPage: React.FC = () => {
    const router = useRouter();
    const { role } = useRouteAccess();

    // -- State --
    const [data, setData] = useState<Customer[]>([]);
    const [filteredData, setFilteredData] = useState<Customer[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState<CustomerFilters>({
        searchQuery: ''
    });

    // -- Data Fetching (Mock) --
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 800));

                // In store manager scope, we might filter but doc says "view own store customers"
                // Usually identity is global, but stats might be scoped. 
                // For now, using global mock.
                setData(mockCustomers);
                setFilteredData(mockCustomers);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    // -- Filtering --
    useEffect(() => {
        let result = [...data];
        if (filters.searchQuery) {
            const q = filters.searchQuery.toLowerCase();
            result = result.filter(c =>
                c.name.toLowerCase().includes(q) ||
                c.phone.includes(q)
            );
        }
        setFilteredData(result);
    }, [filters, data]);

    const handleRowClick = (customer: Customer) => {
        router.push(`/backoffice/customers/${customer.id}`);
    };

    return (
        <div className="max-w-[1600px] mx-auto pb-20 px-4 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900 rounded-2xl shadow-xl shadow-slate-200">
                        <Users className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Customer Hub</h1>
                        <p className="text-sm text-slate-500 font-medium mt-0.5">Unified identity and aggregated channel history.</p>
                    </div>
                </div>

                {role === 'ADMIN' && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition-all shadow-sm">
                        <Download className="w-4 h-4" />
                        Export CRM Data
                    </button>
                )}
            </div>

            {/* ActionBar */}
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name or phone number..."
                        value={filters.searchQuery}
                        onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all"
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-lg shadow-slate-200">
                        <Filter className="w-3.5 h-3.5" />
                        Filters
                    </button>
                </div>
            </div>

            {/* List */}
            {isLoading ? (
                <div className="h-96 bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-3 animate-pulse">
                    <div className="w-12 h-12 bg-slate-100 rounded-full" />
                    <div className="h-4 w-48 bg-slate-50 rounded" />
                </div>
            ) : (
                <CustomersTable
                    data={filteredData}
                    onRowClick={handleRowClick}
                />
            )}

            {/* Footer Disclaimer */}
            <div className="flex items-center justify-center gap-6 pt-6 opacity-30">
                <div className="h-px bg-slate-300 flex-1" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] whitespace-nowrap">Cross-Channel Customer Record</span>
                <div className="h-px bg-slate-300 flex-1" />
            </div>
        </div>
    );
};
