'use client';

import React, { useState } from 'react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter } from 'next/navigation';
import {
    Search,
    UserPlus,
    ChevronRight,
    History,
    MapPin,
    ArrowLeft,
    Phone,
    Mail,
    FileText,
    Star,
    ArrowRight
} from 'lucide-react';
import { mockPOSCustomers } from '../mock/posData';


export const POSCustomerScreen: React.FC = () => {
    const { setCustomer } = usePOS();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const filtered = mockPOSCustomers.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.phone.includes(searchQuery)
    );

    const selectedCustomer = mockPOSCustomers.find(c => c.id === selectedId);

    return (
        <div className="flex h-screen bg-white text-brand font-sans overflow-hidden">
            {/* LEFT: RECENT/SEARCH FILTERS (Section 4) */}
            <aside className="w-80 md:w-96 bg-brand/5 border-r border-brand/10 flex flex-col flex-shrink-0 animate-in slide-in-from-left duration-500">
                <header className="p-8 border-b border-brand/10 bg-white flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 border border-brand/10 rounded-lg text-brand/40 hover:text-brand">
                        <ArrowLeft size={20} />
                    </button>
                    <h3 className="text-xl font-black text-brand tracking-tight">Identity Hub</h3>
                </header>
                <div className="p-6 space-y-2">
                    <button className="w-full py-4 px-6 bg-brand text-white rounded-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand/20">
                        <UserPlus size={18} />
                        Register New Profile
                    </button>
                    <div className="h-4"></div>
                    <div className="px-4 text-[10px] font-black text-brand/30 uppercase tracking-[0.2em] mb-4">Quick Filters</div>
                    <button className="w-full py-3 px-6 bg-white border border-brand/10 rounded-xl flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-brand hover:border-brand transition-all">
                        <span>Recent Active</span>
                        <span className="bg-brand/10 text-brand px-2 py-0.5 rounded-lg">12</span>
                    </button>
                    <button className="w-full py-3 px-6 bg-white border border-brand/10 rounded-xl flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-brand hover:border-brand transition-all">
                        <span>Loyalty Tiers</span>
                        <Star size={14} className="text-brand/40" />
                    </button>
                </div>
            </aside>

            {/* CENTER: CUSTOMER LIST (Section 4) */}
            <main className="flex-1 flex flex-col bg-white">
                <header className="h-20 bg-white border-b border-brand/10 px-8 flex items-center">
                    <div className="flex-1 relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand/20" size={24} />
                        <input
                            type="text"
                            placeholder="Identify by Phone, Name, or Email..."
                            className="w-full h-14 bg-brand/5 border-none rounded-2xl pl-16 pr-8 text-xl font-black text-brand placeholder:text-brand/20 focus:ring-4 focus:ring-brand/5 transition-all outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus
                        />
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                    <div className="grid grid-cols-1 gap-2">
                        {filtered.map(c => (
                            <button
                                key={c.id}
                                onClick={() => setSelectedId(c.id)}
                                className={`p-6 rounded-3xl flex items-center justify-between transition-all border-2 ${selectedId === c.id ? 'bg-brand/5 border-brand' : 'bg-white border-transparent hover:bg-brand/5 hover:border-brand/10'}`}
                            >
                                <div className="flex items-center gap-6 text-left">
                                    <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-brand/20">
                                        {c.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-brand leading-none mb-1">{c.name}</h4>
                                        <p className="text-sm font-bold text-brand/40">{c.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-right hidden md:block">
                                        <div className="text-[10px] font-black text-brand/30 uppercase tracking-widest mb-1">Total Spent</div>
                                        <div className="text-sm font-black text-brand">$1,482.50</div>
                                    </div>
                                    <ChevronRight className={selectedId === c.id ? 'text-brand' : 'text-brand/20'} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            {/* RIGHT: PROFILE PANEL (Section 4) */}
            <aside className="w-96 md:w-[450px] bg-white border-l border-brand/10 flex flex-col flex-shrink-0">
                {selectedCustomer ? (
                    <div className="flex-1 flex flex-col animate-in slide-in-from-right duration-500">
                        <header className="h-64 bg-brand p-10 flex flex-col justify-end relative overflow-hidden">
                            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <h2 className="text-4xl font-black text-white tracking-tighter mb-1 relative z-10">{selectedCustomer.name}</h2>
                            <div className="flex items-center gap-4 relative z-10">
                                <span className="px-3 py-1 bg-white/20 text-white rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/30">
                                    Elite Member
                                </span>
                                <span className="text-white/60 text-xs font-bold">Joined May 2023</span>
                            </div>
                        </header>

                        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
                            {/* Contact Details */}
                            <section className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-brand/30 uppercase tracking-widest">Primary Contact</span>
                                    <div className="flex items-center gap-2 text-brand font-bold text-sm">
                                        <Phone size={14} className="text-brand/40" />
                                        {selectedCustomer.phone}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-brand/30 uppercase tracking-widest">Email Address</span>
                                    <div className="flex items-center gap-2 text-brand font-bold text-sm">
                                        <Mail size={14} className="text-brand/40" />
                                        sarah@google.com
                                    </div>
                                </div>
                            </section>

                            {/* Addresses (Section 4) */}
                            <section>
                                <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-4">Saved Addresses</h4>
                                <div className="space-y-3">
                                    {selectedCustomer.addresses.map(addr => (
                                        <button key={addr.id} className="w-full p-4 bg-brand/5 border border-brand/10 rounded-2xl flex items-center gap-4 text-left hover:border-brand transition-all">
                                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand shadow-sm border border-brand/10 group-hover:bg-brand group-hover:text-white transition-all">
                                                <MapPin size={18} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-[10px] font-black text-brand uppercase tracking-widest">{addr.type}</div>
                                                <div className="text-sm font-bold text-brand leading-tight">{addr.street}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Recent Activity (Section 4) */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.2em]">Order History</h4>
                                    <button className="text-[10px] font-black text-brand/40 uppercase tracking-widest hover:text-brand">View Vault</button>
                                </div>
                                <div className="space-y-2">
                                    {[1, 2].map(i => (
                                        <div key={i} className="p-4 bg-white border border-brand/10 rounded-2xl flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 bg-brand/5 rounded-lg flex items-center justify-center text-brand">
                                                    <History size={14} />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-black text-brand">ORD-2291-{i}</div>
                                                    <div className="text-[10px] font-bold text-brand/40">Feb 1{i}, 2026</div>
                                                </div>
                                            </div>
                                            <span className="text-sm font-black text-brand">$42.50</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Notes (Section 4) */}
                            <section>
                                <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-4">Operator Notes</h4>
                                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
                                    <FileText className="text-amber-500 flex-shrink-0" size={18} />
                                    <p className="text-xs font-medium text-amber-900 leading-relaxed italic">
                                        "Allergic to olives. Prefers no contact delivery at the main gate. Frequent late night orderer."
                                    </p>
                                </div>
                            </section>
                        </div>

                        <footer className="p-8 bg-brand/5 border-t border-brand/10">
                            <button
                                onClick={() => { setCustomer(selectedCustomer); router.push('/pos/menu'); }}
                                className="w-full h-16 bg-brand text-white rounded-2xl flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest shadow-xl shadow-brand/20 hover:bg-brand-dark transition-all"
                            >
                                Assign to Transaction
                                <ArrowRight size={20} />
                            </button>
                        </footer>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-20 text-center opacity-30">
                        <UserPlus size={64} className="mb-6" />
                        <h4 className="text-xl font-black text-brand mb-2">No Profile Identified</h4>
                        <p className="text-sm font-medium text-brand/60">Search for an existing account or create a new guest profile to access detailed insights.</p>
                    </div>
                )}
            </aside>
        </div>
    );
};
