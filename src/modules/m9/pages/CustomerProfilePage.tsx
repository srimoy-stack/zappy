'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
;

import { CustomerStatsHeader, OrderHistoryTable } from '../components/Customers';
import { CustomerDetails } from '../types/customers';
import { mockCustomerDetails } from '../mock/customers';
import { ChevronLeft, History, AlertCircle, Info } from 'lucide-react';

export const CustomerProfilePage: React.FC = () => {
    const { customerId } = useParams<{ customerId: string }>();
    const router = useRouter();


    // -- State --
    const [customer, setCustomer] = useState<CustomerDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // -- Data Fetching --
    useEffect(() => {
        const fetchDetails = async () => {
            setIsLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 800));

                const details = mockCustomerDetails[customerId || ''];
                if (details) {
                    setCustomer(details);
                } else {
                    setError('Customer profile not found in decentralized identity record.');
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchDetails();
    }, [customerId]);

    const handleReorder = async (orderId: string) => {
        console.log(`Triggering One-Click Reorder for order: ${orderId}`);
        // Rules:
        // 1. Trigger Reorder API
        // 2. API revalidates current prices/availability
        // 3. Redirect to POS on success

        await new Promise(resolve => setTimeout(resolve, 1500));
        alert('Reorder successful! Redirecting to POS with pre-populated cart (Current pricing applied).');
        // router.push('/backoffice/pos'); // Mock redirect
    };

    if (isLoading) {
        return (
            <div className="max-w-[1200px] mx-auto p-10 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 border-4 border-slate-100 border-t-slate-900 rounded-full animate-spin" />
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Hydrating Customer Profile...</p>
            </div>
        );
    }

    if (error || !customer) {
        return (
            <div className="max-w-[1200px] mx-auto p-10 flex flex-col items-center justify-center gap-6">
                <div className="p-4 bg-rose-50 rounded-full">
                    <AlertCircle className="w-10 h-10 text-rose-500" />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-bold text-slate-900">{error}</h2>
                    <p className="text-sm text-slate-500 mt-1">Please verify the customer ID and try again.</p>
                </div>
                <button
                    onClick={() => router.push('/backoffice/customers')}
                    className="px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold"
                >
                    Return to Hub
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-[1200px] mx-auto pb-20 px-4 space-y-8">
            {/* Nav */}
            <button
                onClick={() => router.push('/backoffice/customers')}
                className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-900 transition-all uppercase tracking-widest group"
            >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Customer Hub
            </button>

            {/* Profile Header */}
            <CustomerStatsHeader customer={customer} />

            {/* Reorder Awareness */}
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start gap-4 shadow-sm shadow-emerald-100/50">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                    <History className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                    <h3 className="text-sm font-black text-emerald-900 uppercase tracking-wide">One-Click Reorder Enabled</h3>
                    <p className="text-xs text-emerald-700 leading-relaxed mt-1">
                        Recent orders can be replicated with a single click. The system will automatically re-validate
                        <span className="font-bold underline ml-1">Current Menu Prices</span> and
                        <span className="font-bold underline ml-1">Ingredient Availability</span> before rebuilding the cart.
                    </p>
                </div>
            </div>

            {/* History Table */}
            <OrderHistoryTable
                orders={customer.orderHistory}
                onReorder={handleReorder}
            />

            {/* Footer Disclaimer */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-4">
                <Info className="w-5 h-5 text-slate-400 shrink-0" />
                <p className="text-[11px] font-medium text-slate-500 leading-relaxed italic">
                    Note: Financial totals are aggregated from POS, Online, and 3rd-party delivery logs.
                    Historical order items reflect the menu structure at the time of purchase.
                    Reordering will map these items to current inventory definitions.
                </p>
            </div>
        </div>
    );
};
