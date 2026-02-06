'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    CheckCircle2,
    Printer,
    Mail,
    MessageSquare,
    Play,
    Clock,
    ShoppingCart,
    LayoutDashboard,
    PlusCircle
} from 'lucide-react';

export const POSConfirmationScreen: React.FC = () => {
    const router = useRouter();
    const [notified, setNotified] = useState<string[]>(['PRINT']);

    const toggleNotify = (id: string) => {
        setNotified(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    return (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
            {/* Success Celebration Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="w-full max-w-4xl z-10">
                <div className="text-center mb-12">
                    <div className="w-24 h-24 bg-brand rounded-[2.5rem] flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-brand/40 animate-in zoom-in duration-500">
                        <CheckCircle2 size={48} />
                    </div>
                    <h1 className="text-5xl font-black text-brand tracking-tighter mb-4">Transaction Successful</h1>
                    <div className="flex items-center justify-center gap-6">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black text-brand/30 uppercase tracking-[0.3em] mb-1">Receipt ID</span>
                            <span className="text-xl font-black text-brand">#TX-992-811</span>
                        </div>
                        <div className="h-10 w-px bg-brand/10"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black text-brand/30 uppercase tracking-[0.3em] mb-1">Kitchen Status</span>
                            <div className="flex items-center gap-2 text-brand">
                                <Play size={14} fill="currentColor" />
                                <span className="text-xl font-black">SENT TO KDS</span>
                            </div>
                        </div>
                        <div className="h-10 w-px bg-brand/10"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black text-brand/30 uppercase tracking-[0.3em] mb-1">Promise Time</span>
                            <div className="flex items-center gap-2 text-brand">
                                <Clock size={16} />
                                <span className="text-xl font-black italic">21:55 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Distribution Methods (Section 12) */}
                <div className="grid grid-cols-3 gap-6 mb-16">
                    {[
                        { id: 'PRINT', icon: Printer, label: 'Hardcopy Receipt', desc: 'Thermal Print' },
                        { id: 'SMS', icon: MessageSquare, label: 'Digital SMS', desc: 'Sms Delivery' },
                        { id: 'EMAIL', icon: Mail, label: 'Digital Email', desc: 'PDF Attachment' }
                    ].map(method => (
                        <button
                            key={method.id}
                            onClick={() => toggleNotify(method.id)}
                            className={`group p-8 rounded-[3rem] border-4 flex flex-col items-center text-center transition-all relative ${notified.includes(method.id) ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20' : 'bg-white border-brand/5 hover:border-brand/40 text-brand'}`}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all ${notified.includes(method.id) ? 'bg-white/20 text-white' : 'bg-brand/5 text-brand'}`}>
                                <method.icon size={28} />
                            </div>
                            <h3 className="text-lg font-black leading-tight mb-1">{method.label}</h3>
                            <p className={`text-[10px] font-bold uppercase tracking-widest ${notified.includes(method.id) ? 'text-white/60' : 'text-brand/40'}`}>{method.desc}</p>
                            {notified.includes(method.id) && (
                                <div className="absolute top-6 right-6 text-white">
                                    <CheckCircle2 size={20} />
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Next Steps (Section 12) */}
                <div className="flex flex-col items-center gap-6">
                    <button
                        onClick={() => router.push('/pos/dashboard')}
                        className="w-full max-w-md py-6 bg-brand text-white rounded-[2rem] text-sm font-black uppercase tracking-widest shadow-2xl shadow-brand/40 hover:bg-brand-dark transition-all flex items-center justify-center gap-3 active:scale-95"
                    >
                        Return to Terminal Hub
                        <LayoutDashboard size={20} />
                    </button>

                    <div className="flex gap-4">
                        <button
                            onClick={() => router.push('/pos/menu')}
                            className="px-10 py-4 bg-brand/5 text-brand rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand/10 transition-all flex items-center gap-2"
                        >
                            <PlusCircle size={16} />
                            Start New Transaction
                        </button>
                        <button
                            className="px-10 py-4 bg-brand/5 text-brand rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand/10 transition-all flex items-center gap-2"
                        >
                            <ShoppingCart size={16} />
                            Order Tracking
                        </button>
                    </div>
                </div>
            </div>

            {/* KDS Sent Indicator (Section 12) */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-brand/5 border border-brand/20 rounded-full animate-pulse">
                <div className="w-2 h-2 rounded-full bg-brand"></div>
                <span className="text-[10px] font-black text-brand uppercase tracking-[0.2em]">KDS-SENT: Kitchen Station 1 & 4 Accepted</span>
            </div>
        </div>
    );
};
