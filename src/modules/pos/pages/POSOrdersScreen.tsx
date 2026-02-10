'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Search,
    ArrowLeft,
    Pause,
    Play,
    RotateCcw,
    Printer,
    XCircle,
    Flame,
    ChevronRight,
    Clock,
    ShoppingBag,
    Filter,
    CheckCircle2,
    Users,
    MapPin,
    Phone
} from 'lucide-react';
import { mockRecentOrders } from '../mock/posData';

export const POSOrdersScreen: React.FC = () => {
    const router = useRouter();
    const [view, setView] = useState<'OPEN' | 'HELD' | 'CLOSED'>('OPEN');
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

    const selectedOrder = mockRecentOrders.find(o => o.id === selectedOrderId);

    return (
        <div className="flex h-screen bg-white text-brand font-sans overflow-hidden">
            {/* LEFT: ORDER CATEGORIES (Section 13) */}
            <aside className="w-80 md:w-96 bg-brand/5 border-r border-brand/10 flex flex-col flex-shrink-0 animate-in slide-in-from-left duration-500">
                <header className="p-8 border-b border-brand/10 bg-white flex items-center gap-4">
                    <button onClick={() => router.push('/pos/dashboard')} className="p-2 border border-brand/10 rounded-lg text-brand/40 hover:text-brand">
                        <ArrowLeft size={20} />
                    </button>
                    <h3 className="text-xl font-black text-brand tracking-tight">Order Vault</h3>
                </header>
                <div className="p-6 space-y-3">
                    <button
                        onClick={() => setView('OPEN')}
                        className={`w-full p-6 rounded-[2rem] flex flex-col transition-all border-4 ${view === 'OPEN' ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20' : 'bg-white border-brand/5 text-brand/40 hover:border-brand/20'}`}
                    >
                        <div className="flex justify-between items-center w-full mb-3">
                            <Play size={24} className={view === 'OPEN' ? 'text-white' : 'text-brand'} fill={view === 'OPEN' ? 'white' : 'currentColor'} />
                            <span className={`text-2xl font-black ${view === 'OPEN' ? 'text-white' : 'text-brand'}`}>12</span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[.2em]">Live/Open Orders</span>
                    </button>
                    <button
                        onClick={() => setView('HELD')}
                        className={`w-full p-6 rounded-[2rem] flex flex-col transition-all border-4 ${view === 'HELD' ? 'bg-amber-500 border-amber-500 text-white shadow-xl shadow-amber-500/20' : 'bg-white border-brand/5 text-brand/40 hover:border-brand/20'}`}
                    >
                        <div className="flex justify-between items-center w-full mb-3">
                            <Pause size={24} className={view === 'HELD' ? 'text-white' : 'text-amber-500'} fill={view === 'HELD' ? 'white' : 'currentColor'} />
                            <span className={`text-2xl font-black ${view === 'HELD' ? 'text-white' : 'text-amber-500'}`}>04</span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[.2em]">Held Transactions</span>
                    </button>
                    <button
                        onClick={() => setView('CLOSED')}
                        className={`w-full p-6 rounded-[2rem] flex flex-col transition-all border-4 ${view === 'CLOSED' ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20' : 'bg-white border-brand/5 text-brand/40 hover:border-brand/20'}`}
                    >
                        <div className="flex justify-between items-center w-full mb-3">
                            <CheckCircle2 size={24} className={view === 'CLOSED' ? 'text-white' : 'text-brand'} />
                            <span className={`text-2xl font-black ${view === 'CLOSED' ? 'text-white' : 'text-brand'}`}>48</span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[.2em]">Settled Today</span>
                    </button>
                </div>
            </aside>

            {/* CENTER: ORDER LIST (Section 13) */}
            <main className="flex-1 flex flex-col bg-white">
                <header className="h-20 bg-white border-b border-brand/10 px-8 flex items-center gap-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand/20" size={20} />
                        <input
                            type="text"
                            placeholder="Identify Order by ID, Guest, or Table..."
                            className="w-full h-12 bg-brand/5 border-none rounded-xl pl-16 pr-8 text-sm font-black text-brand placeholder:text-brand/20 focus:ring-4 focus:ring-brand/5 transition-all outline-none"
                        />
                    </div>
                    <button className="h-12 px-6 bg-brand/5 rounded-xl flex items-center gap-2 text-[10px] font-black text-brand/40 uppercase tracking-widest hover:text-brand hover:border-brand transition-all border border-brand/10">
                        <Filter size={16} />
                        Sort: Newest
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                    <div className="space-y-2">
                        {mockRecentOrders.map(o => (
                            <button
                                key={o.id}
                                onClick={() => setSelectedOrderId(o.id)}
                                className={`w-full p-6 rounded-3xl grid grid-cols-4 items-center transition-all border-2 ${selectedOrderId === o.id ? 'bg-brand/5 border-brand ring-4 ring-brand/5' : 'bg-white border-transparent hover:bg-brand/5 hover:border-brand/10'}`}
                            >
                                <div className="text-left">
                                    <div className="text-xs font-black text-brand mb-1">{o.id}</div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={12} className="text-brand/30" />
                                        <span className="text-[10px] font-bold text-brand/40 uppercase">{o.time}</span>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-black text-brand">{o.customer}</div>
                                    <div className="text-[10px] font-bold text-brand/40 uppercase tracking-widest">{o.type}</div>
                                </div>
                                <div className="text-center">
                                    <span className="px-3 py-1 bg-brand/10 text-brand rounded-lg text-[8px] font-black uppercase tracking-widest border border-brand/20">
                                        {o.status}
                                    </span>
                                </div>
                                <div className="text-right flex items-center justify-end gap-6">
                                    <span className="text-lg font-black text-brand">${o.amount.toFixed(2)}</span>
                                    <ChevronRight className={selectedOrderId === o.id ? 'text-brand' : 'text-brand/20'} size={20} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            {/* RIGHT: ORDER ACTIONS (Section 14) */}
            <aside className="w-96 md:w-[450px] bg-white border-l border-brand/10 flex flex-col flex-shrink-0 overflow-y-auto custom-scrollbar">
                {selectedOrder ? (
                    <div className="flex-1 flex flex-col animate-in slide-in-from-right duration-500">
                        <header className="p-10 border-b border-brand/10 bg-brand/5">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-[10px] font-black text-brand/40 uppercase tracking-widest mb-1 block">Selected Order</span>
                                    <h2 className="text-3xl font-black text-brand tracking-tighter">{selectedOrder.id}</h2>
                                </div>
                                <span className="px-4 py-2 bg-brand text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand/20">
                                    Active Session
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-brand/30 uppercase tracking-widest">Operator</span>
                                    <span className="text-sm font-black text-brand block">Sarah Agent</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-brand/30 uppercase tracking-widest">Station</span>
                                    <span className="text-sm font-black text-brand block">TR-8842-X</span>
                                </div>
                            </div>
                        </header>

                        <div className="p-10 space-y-10">
                            {/* Customer & Statistics (Section 12) */}
                            <section>
                                <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-4">Identity & Attribution</h4>
                                <div className="p-6 bg-brand/5 border border-brand/10 rounded-3xl space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm font-black">
                                            {selectedOrder.customer.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-black text-brand">{selectedOrder.customer}</div>
                                            <div className="flex items-center gap-3 text-[10px] font-bold text-brand/40 uppercase tracking-widest mt-0.5">
                                                <div className="flex items-center gap-1"><Phone size={10} /> +1 (555) 012-3456</div>
                                                <div className="flex items-center gap-1"><Users size={10} /> Gold Tier</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-[10px] font-bold text-brand/60 uppercase tracking-widest bg-white/50 p-3 rounded-xl border border-brand/5">
                                        <MapPin size={12} className="text-brand/40" />
                                        <span>Channel: {selectedOrder.type} / 3rd Party (Uber)</span>
                                    </div>
                                </div>
                            </section>

                            {/* Order Details (Section 14) */}
                            <section>
                                <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-4">Itemized Breakdown</h4>
                                <div className="space-y-4">
                                    {[1, 2].map(i => (
                                        <div key={i} className="flex justify-between items-start">
                                            <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-xs font-black text-brand">1x</div>
                                                <div>
                                                    <div className="text-sm font-black text-brand">Premium Pepperoni Pizza</div>
                                                    <div className="text-[10px] font-medium text-brand/40">Extra Cheese, No Onions</div>
                                                </div>
                                            </div>
                                            <span className="text-sm font-black text-brand">$24.00</span>
                                        </div>
                                    ))}
                                    <div className="pt-4 border-t border-brand/10 flex justify-between items-center">
                                        <span className="text-xs font-black text-brand uppercase tracking-widest">Total Transaction</span>
                                        <span className="text-xl font-black text-brand">${selectedOrder.amount.toFixed(2)}</span>
                                    </div>
                                </div>
                            </section>

                            {/* Timeline (Section 12.1) */}
                            <section>
                                <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-4">Order Life-Cycle Timeline</h4>
                                <div className="space-y-6 relative ml-2">
                                    <div className="absolute left-1 top-2 bottom-2 w-0.5 bg-brand/5"></div>
                                    {[
                                        { time: '11:20 AM', icon: ShoppingBag, label: 'Order Registered', desc: 'Captured via In-Store Kiosk', status: 'done' },
                                        { time: '11:22 AM', icon: Play, label: 'KDS Fire Request', desc: 'Accepted by Kitchen Station 1', status: 'done' },
                                        { time: '11:45 AM', icon: Clock, label: 'Quality Control', desc: 'Pending Final Inspection', status: 'pending' }
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex gap-4 relative">
                                            <div className={`w-3 h-3 rounded-full mt-1 z-10 border-2 ${step.status === 'done' ? 'bg-brand border-brand' : 'bg-white border-brand/20'}`}></div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-[11px] font-black text-brand">{step.label}</span>
                                                    <span className="text-[10px] font-bold text-brand/30 uppercase">{step.time}</span>
                                                </div>
                                                <p className="text-[10px] font-medium text-brand/40 uppercase tracking-widest">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Actions (Section 13+14) */}
                            <section className="space-y-3">
                                <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-4">Execution Logic</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => router.push('/pos/menu')}
                                        className="h-20 bg-brand text-white rounded-[1.5rem] flex flex-col items-center justify-center gap-1 shadow-xl shadow-brand/20 hover:bg-brand-dark transition-all"
                                    >
                                        <Play size={20} fill="white" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Resume</span>
                                    </button>
                                    <button className="h-20 bg-brand/5 text-brand rounded-[1.5rem] flex flex-col items-center justify-center gap-1 border border-brand/10 hover:border-brand transition-all">
                                        <Printer size={20} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Reprint</span>
                                    </button>
                                    <button className="h-20 bg-brand/5 text-brand rounded-[1.5rem] flex flex-col items-center justify-center gap-1 border border-brand/10 hover:border-brand transition-all">
                                        <Flame size={20} className="text-rose-500" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Re-Fire KDS</span>
                                    </button>
                                    <button className="h-20 bg-rose-500 text-white rounded-[1.5rem] flex flex-col items-center justify-center gap-1 shadow-xl shadow-rose-500/20 hover:bg-rose-600 transition-all">
                                        <RotateCcw size={20} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Full Refund</span>
                                    </button>
                                </div>
                                <button className="w-full h-16 bg-white border-4 border-rose-500/10 text-rose-500 rounded-[1.5rem] flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest hover:bg-rose-50 transition-all">
                                    <XCircle size={18} />
                                    Cancel & Terminate Order
                                </button>
                            </section>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-20 text-center opacity-30">
                        <ShoppingBag size={64} className="mb-6" />
                        <h4 className="text-xl font-black text-brand mb-2">Selection Required</h4>
                        <p className="text-sm font-medium text-brand/60">Identify an active or historical transaction from the central stack to perform post-order operations.</p>
                    </div>
                )}
            </aside>
        </div>
    );
};
