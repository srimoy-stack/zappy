'use client';

import React, { useState } from 'react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    Search,
    User,
    Phone,
    MapPin,
    Star,
    X,
    Plus,
    ArrowRight,
    Edit3
} from 'lucide-react';
import { mockPOSCustomers, POSCustomer } from '../mock/posData';

export const CustomerLookupPage: React.FC = () => {
    const { session, setCustomer } = usePOS();
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('query') || '';

    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [selectedCustomer, setSelectedCustomer] = useState<POSCustomer | null>(null);

    // Mock search logic
    const filteredCustomers = searchQuery
        ? mockPOSCustomers.filter(c =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.phone.includes(searchQuery)
        )
        : mockPOSCustomers; // Show all recent if empty

    const handleSelectCustomer = (customer: POSCustomer) => {
        setSelectedCustomer(customer);
    };

    const handleConfirmCustomer = () => {
        if (selectedCustomer) {
            setCustomer(selectedCustomer);

            // If we are in Call Center mode, we might want to go straight to New Order
            // But for now, let's just go back to Dashboard or New Order flow
            router.push('/pos/new-order');
        }
    };

    const NumPad = ({ onInput }: { onInput: (num: string) => void }) => (
        <div className="grid grid-cols-3 gap-4 w-full max-w-xs mx-auto mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button
                    key={num}
                    onClick={() => onInput(num.toString())}
                    className="h-16 bg-white border-2 border-brand/10 rounded-xl text-2xl font-black text-brand hover:border-brand hover:bg-brand/5 active:scale-95 transition-all"
                >
                    {num}
                </button>
            ))}
            <button
                onClick={() => setSearchQuery('')}
                className="h-16 bg-white border-2 border-brand/10 rounded-xl text-lg font-black text-brand/40 uppercase hover:text-brand hover:border-brand transition-all"
            >
                CLR
            </button>
            <button
                onClick={() => onInput('0')}
                className="h-16 bg-white border-2 border-brand/10 rounded-xl text-2xl font-black text-brand hover:border-brand hover:bg-brand/5 active:scale-95 transition-all"
            >
                0
            </button>
            <button
                onClick={() => onInput(searchQuery.slice(0, -1))}
                className="h-16 bg-white border-2 border-brand/10 rounded-xl text-lg font-black text-brand/40 uppercase hover:text-brand hover:border-brand transition-all"
            >
                ⌫
            </button>
        </div>
    );

    return (
        <div className="flex h-screen bg-white text-brand font-sans overflow-hidden">
            {/* LEFT SEARCH PANEL */}
            <div className="flex-1 flex flex-col min-w-0 border-r border-brand/10">
                <header className="h-20 bg-white border-b border-brand/10 px-8 flex items-center justify-between flex-shrink-0 text-brand">
                    <div className="flex items-center gap-4 text-brand">
                        <button
                            onClick={() => router.back()}
                            className="p-3 bg-brand/5 rounded-xl text-brand/40 hover:text-brand transition-all shadow-lg shadow-brand/5 border border-brand/10"
                        >
                            <ArrowRight className="rotate-180" size={20} />
                        </button>
                        <h1 className="text-2xl font-black tracking-tight">Identify Customer</h1>
                    </div>
                    {session?.posType === 'CALL_CENTER' && (
                        <div className="px-4 py-2 bg-brand/10 border border-brand/20 text-brand rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2">
                            <Phone size={14} /> Call Center Mode
                        </div>
                    )}
                </header>

                <div className="flex-1 flex flex-col md:flex-row">
                    {/* Search & Numpad Area */}
                    <div className="flex-1 p-8 flex flex-col items-center">
                        <div className="w-full max-w-md">
                            <div className="relative mb-8">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand/20" size={24} />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search Name or Phone..."
                                    className="w-full h-16 bg-white border-2 border-brand/10 rounded-2xl pl-14 pr-6 text-xl font-bold focus:border-brand focus:bg-brand/5 outline-none transition-all placeholder:text-brand/20 text-brand"
                                    autoFocus
                                />
                            </div>

                            <NumPad onInput={(num) => setSearchQuery(prev => prev + num)} />

                            <button className="w-full py-4 bg-white border-2 border-dashed border-brand/20 rounded-2xl text-brand/40 font-bold hover:text-brand hover:border-brand hover:bg-brand/5 transition-all flex items-center justify-center gap-2">
                                <Plus size={20} /> Register New Customer
                            </button>
                        </div>
                    </div>

                    {/* Results List */}
                    <div className="w-full md:w-96 bg-brand/5 border-l border-brand/10 flex flex-col">
                        <div className="p-6 border-b border-brand/10">
                            <h3 className="text-xs font-black text-brand/40 uppercase tracking-widest mb-1">Search Results</h3>
                            <div className="text-sm font-bold text-brand/60">
                                Found {filteredCustomers.length} match{filteredCustomers.length !== 1 && 'es'}
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar text-brand">
                            {filteredCustomers.map(customer => (
                                <button
                                    key={customer.id}
                                    onClick={() => handleSelectCustomer(customer)}
                                    className={`w-full p-4 rounded-xl text-left border-2 transition-all group ${selectedCustomer?.id === customer.id
                                        ? 'bg-brand border-brand shadow-lg shadow-brand/20'
                                        : 'bg-white border-brand/10 hover:border-brand hover:bg-brand/5'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className={`font-black text-lg ${selectedCustomer?.id === customer.id ? 'text-white' : 'text-brand'}`}>
                                            {customer.name}
                                        </h4>
                                        {customer.loyaltyPoints > 1000 && (
                                            <Star size={16} className={selectedCustomer?.id === customer.id ? 'text-white fill-white' : 'text-brand fill-brand'} />
                                        )}
                                    </div>
                                    <div className={`flex items-center gap-2 text-sm font-medium ${selectedCustomer?.id === customer.id ? 'text-white/80' : 'text-brand/60'}`}>
                                        <Phone size={14} /> {customer.phone}
                                    </div>
                                </button>
                            ))}
                            {filteredCustomers.length === 0 && (
                                <div className="text-center py-12 text-brand/20">
                                    <User size={48} className="mx-auto mb-4 opacity-20" />
                                    <p className="font-medium">No customers found</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT PROFILE PANEL */}
            {selectedCustomer && (
                <div className="w-[450px] bg-white border-l border-brand/10 flex flex-col flex-shrink-0 animate-in slide-in-from-right duration-300 text-brand">
                    {/* Header */}
                    <div className="h-48 bg-brand p-8 flex flex-col justify-end relative shadow-2xl shadow-brand/10">
                        <button
                            onClick={() => setSelectedCustomer(null)}
                            className="absolute top-6 right-6 p-2 bg-white/20 rounded-full hover:bg-white/40 text-white transition-all"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex items-end justify-between">
                            <div>
                                <h2 className="text-3xl font-black text-white tracking-tight leading-none mb-2">{selectedCustomer.name}</h2>
                                <div className="flex items-center gap-3 text-white/80 font-medium">
                                    <span className="flex items-center gap-1.5"><Phone size={14} /> {selectedCustomer.phone}</span>
                                </div>
                            </div>
                            <div className="bg-white text-brand px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest shadow-lg">
                                {selectedCustomer.loyaltyPoints} PTS
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-8">
                        {/* Status / Notes */}
                        <div className="p-4 bg-brand/5 border border-brand/10 rounded-2xl">
                            <div className="flex items-start gap-3">
                                <Star className="text-brand flex-shrink-0 mt-0.5" size={18} />
                                <div>
                                    <h4 className="text-sm font-black text-brand uppercase tracking-widest mb-1">Customer Notes</h4>
                                    <p className="text-brand/80 text-sm leading-relaxed">
                                        {selectedCustomer.notes}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Recent Addresses */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xs font-black text-brand/40 uppercase tracking-widest">Saved Addresses</h3>
                                <button className="text-xs font-bold text-brand hover:text-brand-dark">Add New</button>
                            </div>
                            <div className="space-y-3">
                                {selectedCustomer.addresses.map(addr => (
                                    <div key={addr.id} className="p-4 bg-white rounded-xl border border-brand/10 hover:border-brand transition-all group">
                                        <div className="flex items-center justify-between mb-1 text-brand">
                                            <span className="text-xs font-black text-brand/40 uppercase tracking-widest bg-brand/5 px-2 py-0.5 rounded-md">
                                                {addr.label}
                                            </span>
                                            {addr.isDefault && (
                                                <span className="text-[10px] font-bold text-brand flex items-center gap-1">
                                                    Default <MapPin size={10} />
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-brand/60 text-sm font-medium leading-snug">{addr.text}</p>
                                    </div>
                                ))}
                                {selectedCustomer.addresses.length === 0 && (
                                    <p className="text-brand/20 italic text-sm">No addresses saved.</p>
                                )}
                            </div>
                        </div>

                        {/* Order History */}
                        <div className="text-brand">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xs font-black text-brand/40 uppercase tracking-widest">Recent Orders</h3>
                            </div>
                            <div className="space-y-3">
                                {selectedCustomer.recentOrders.map(order => (
                                    <div key={order.id} className="p-4 bg-white border border-brand/10 rounded-xl flex items-center justify-between group">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-black text-brand">{order.id}</span>
                                                <span className="text-[10px] text-brand/40 font-bold">{order.date}</span>
                                            </div>
                                            <p className="text-xs text-brand/60 truncate max-w-[180px]">{order.items}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-black text-brand">${order.amount.toFixed(2)}</div>
                                            <button className="text-[10px] font-bold text-brand hover:text-brand-dark uppercase tracking-widest mt-1">Reorder</button>
                                        </div>
                                    </div>
                                ))}
                                {selectedCustomer.recentOrders.length === 0 && (
                                    <p className="text-brand/20 italic text-sm">No recent orders.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 bg-brand/5 border-t border-brand/10 flex gap-4">
                        <button className="flex-1 py-4 bg-white text-brand/40 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-brand/5 hover:text-brand border border-brand/10 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/5">
                            <Edit3 size={16} /> Edit Profile
                        </button>
                        <button
                            onClick={handleConfirmCustomer}
                            className="flex-[2] py-4 bg-brand text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-brand-dark shadow-lg shadow-brand/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            Select Customer <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
