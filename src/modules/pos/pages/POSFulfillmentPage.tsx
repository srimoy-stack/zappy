'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import {
    Utensils,
    ShoppingBag,
    Truck,
    ArrowLeft,
    MapPin,
    Clock,
    DollarSign,
    Bike,
    ArrowRight,
    CheckCircle2,
    Calendar,
    Smartphone
} from 'lucide-react';

export const POSFulfillmentPage: React.FC = () => {

    const router = useRouter();
    const [type, setType] = useState<'Dine-In' | 'Takeaway' | 'Delivery' | null>(null);
    const [provider, setProvider] = useState<'SELF' | 'UBER'>('SELF');
    const [guestCount, setGuestCount] = useState(2);

    const handleProceed = () => {
        if (type) {
            router.push('/pos/menu');
        }
    };

    return (
        <div className="flex h-screen bg-white text-brand font-sans overflow-hidden">
            {/* LEFT: STATUS (Read-only) */}
            <aside className="w-80 md:w-96 bg-brand/5 border-r border-brand/10 flex flex-col flex-shrink-0 animate-in slide-in-from-left duration-500">
                <header className="p-8 border-b border-brand/10 bg-white flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 border border-brand/10 rounded-lg text-brand/40 hover:text-brand">
                        <ArrowLeft size={20} />
                    </button>
                    <h3 className="text-xl font-black text-brand tracking-tight">Order Init</h3>
                </header>
                <div className="p-8 space-y-8">
                    <div className="space-y-4">
                        <div className="p-6 bg-white rounded-3xl border border-brand/10 shadow-sm">
                            <span className="text-[10px] font-black text-brand/30 uppercase tracking-widest block mb-3">Customer</span>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center text-white font-black">S</div>
                                <div>
                                    <div className="text-sm font-black text-brand">Sarah Agent</div>
                                    <div className="text-xs font-medium text-brand/40">+1 234 567 890</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* CENTER: FULFILLMENT CHOICE (Section 5) */}
            <main className="flex-1 flex flex-col items-center justify-center p-12 bg-white">
                <div className="max-w-4xl w-full">
                    <h2 className="text-4xl font-black text-brand tracking-tighter mb-4 text-center">Fulfillment Strategy</h2>
                    <p className="text-brand/40 font-bold uppercase text-[10px] tracking-[0.3em] mb-16 text-center">Define how the order reaches the guest</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { id: 'Dine-In', icon: Utensils, label: 'Table Service', desc: 'In-House Dining' },
                            { id: 'Takeaway', icon: ShoppingBag, label: 'Counter Pickup', desc: 'Guest Collection' },
                            { id: 'Delivery', icon: Truck, label: 'Home Delivery', desc: 'Last Mile Fulfillment' }
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => setType(item.id as any)}
                                className={`group p-10 rounded-[3rem] border-4 flex flex-col items-center text-center transition-all relative ${type === item.id ? 'bg-brand border-brand text-white shadow-2xl shadow-brand/20 scale-105 z-10' : 'bg-white border-brand/5 hover:border-brand/40 text-brand'}`}
                            >
                                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-6 transition-all ${type === item.id ? 'bg-white text-brand' : 'bg-brand/5 text-brand'}`}>
                                    <item.icon size={36} />
                                </div>
                                <h3 className="text-xl font-black mb-2">{item.label}</h3>
                                <p className={`text-[10px] font-bold uppercase tracking-widest ${type === item.id ? 'text-white/70' : 'text-brand/40'}`}>{item.desc}</p>
                                {type === item.id && (
                                    <div className="absolute top-8 right-8 text-white">
                                        <CheckCircle2 size={24} />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Delivery Details Panel (Section 6) */}
                    {type === 'Delivery' && (
                        <div className="mt-12 bg-white p-10 rounded-[3rem] border-2 border-brand/10 shadow-xl shadow-brand/5 animate-in slide-in-from-top duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <section>
                                    <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                        <MapPin size={14} /> Destination Metadata
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="p-6 bg-brand/5 border border-brand/10 rounded-2xl flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand">
                                                <Home size={18} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-[10px] font-black text-brand/40 uppercase tracking-widest">Selected Address</div>
                                                <div className="text-sm font-black text-brand">123 Business Way, Suite 500</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-1 p-4 bg-brand/5 border border-brand/10 rounded-2xl">
                                                <div className="text-[10px] font-black text-brand/40 uppercase tracking-widest flex items-center gap-1 mb-1">
                                                    <Clock size={12} /> ETA
                                                </div>
                                                <div className="text-lg font-black text-brand">45-55 Mins</div>
                                            </div>
                                            <div className="flex-1 p-4 bg-brand/5 border border-brand/10 rounded-2xl">
                                                <div className="text-[10px] font-black text-brand/40 uppercase tracking-widest flex items-center gap-1 mb-1">
                                                    <DollarSign size={12} /> Fee
                                                </div>
                                                <div className="text-lg font-black text-brand">$4.50</div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                        <Bike size={14} /> Logistics Provider
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() => setProvider('SELF')}
                                            className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${provider === 'SELF' ? 'bg-brand/5 border-brand ring-4 ring-brand/5' : 'bg-white border-brand/5 text-brand/40 hover:border-brand/20'}`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${provider === 'SELF' ? 'bg-brand text-white' : 'bg-brand/5 text-brand/40'}`}>
                                                <Bike size={24} />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest">Self Fleet</span>
                                        </button>
                                        <button
                                            onClick={() => setProvider('UBER')}
                                            className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${provider === 'UBER' ? 'bg-brand/5 border-brand ring-4 ring-brand/5' : 'bg-white border-brand/5 text-brand/40 hover:border-brand/20'}`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${provider === 'UBER' ? 'bg-black text-white' : 'bg-brand/5 text-brand/40'}`}>
                                                <Smartphone size={24} />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest">Uber Direct</span>
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    )}

                    {/* Dine-In Details */}
                    {type === 'Dine-In' && (
                        <div className="mt-12 bg-white p-10 rounded-[3rem] border-2 border-brand/10 shadow-xl shadow-brand/5 animate-in slide-in-from-top duration-500">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-12">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-brand/40 uppercase tracking-[0.2em] mb-3">Group Size</span>
                                        <div className="flex items-center gap-4">
                                            {[1, 2, 4, 6, 8].map(n => (
                                                <button
                                                    key={n}
                                                    onClick={() => setGuestCount(n)}
                                                    className={`w-12 h-12 rounded-xl border-2 font-black transition-all ${guestCount === n ? 'bg-brand border-brand text-white' : 'bg-white border-brand/5 text-brand/40 hover:border-brand'}`}
                                                >
                                                    {n}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-16 w-px bg-brand/10"></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-brand/40 uppercase tracking-[0.2em] mb-3">Table Status</span>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-brand/5 rounded-xl flex items-center justify-center text-brand">
                                                <Calendar size={20} />
                                            </div>
                                            <span className="text-sm font-black text-brand">Available Now</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => router.push('/pos/tables')}
                                    className="px-8 py-4 bg-brand/5 text-brand rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand hover:text-white transition-all border border-brand/10"
                                >
                                    Select Table →
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* RIGHT: ACTION (Section 5) */}
            <aside className="w-80 md:w-96 bg-white border-l border-brand/10 flex flex-col flex-shrink-0">
                <div className="p-8 border-b border-brand/10">
                    <h3 className="text-xl font-black text-brand tracking-tight">Configuration</h3>
                </div>
                <div className="flex-1 p-8 flex flex-col">
                    <div className="flex-1"></div>
                    <button
                        onClick={handleProceed}
                        disabled={!type}
                        className={`w-full py-6 rounded-2xl text-sm font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${type ? 'bg-brand text-white shadow-xl shadow-brand/20 hover:bg-brand-dark' : 'bg-brand/5 text-brand/20 cursor-not-allowed'}`}
                    >
                        Begin Transaction
                        <ArrowRight size={20} />
                    </button>
                </div>
            </aside>
        </div>
    );
};

const Home = ({ ...props }) => <MapPin {...props} />;
