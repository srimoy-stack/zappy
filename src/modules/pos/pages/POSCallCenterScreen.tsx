'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    PhoneIncoming,
    PhoneOff,
    FileText,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    ArrowLeft
} from 'lucide-react';

export const POSCallCenterScreen: React.FC = () => {
    const router = useRouter();
    const [callStatus, setCallStatus] = useState<'INCOMING' | 'ACTIVE' | 'SUMMARY'>('INCOMING');

    return (
        <div className="flex h-screen bg-white text-brand font-sans overflow-hidden">
            {/* LEFT: QUEUE/HISTORY (Section 15) */}
            <aside className="w-80 md:w-96 bg-brand/5 border-r border-brand/10 flex flex-col flex-shrink-0 animate-in slide-in-from-left duration-500">
                <header className="p-8 border-b border-brand/10 bg-white flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 border border-brand/10 rounded-lg text-brand/40 hover:text-brand">
                        <ArrowLeft size={20} />
                    </button>
                    <h3 className="text-xl font-black text-brand tracking-tight">Agent Console</h3>
                </header>
                <div className="p-6 space-y-4">
                    <div className="px-4 text-[10px] font-black text-brand/30 uppercase tracking-[0.2em]">Active Queue</div>
                    <div className="space-y-2">
                        {[1, 2].map(i => (
                            <div key={i} className={`p-4 rounded-2xl border-2 flex items-center justify-between ${i === 1 && callStatus === 'INCOMING' ? 'bg-brand/5 border-brand animate-pulse' : 'bg-white border-brand/10'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 1 ? 'bg-brand text-white' : 'bg-brand/5 text-brand'}`}>
                                        <PhoneIncoming size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black text-brand">+1 234 56...</div>
                                        <div className="text-[8px] font-bold text-brand/40 uppercase">Waiting: 0{i}:22</div>
                                    </div>
                                </div>
                                <ChevronRight size={16} className="text-brand/20" />
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            {/* CENTER: CALL MANAGEMENT (Section 15) */}
            <main className="flex-1 flex flex-col items-center justify-center p-12 bg-white">
                <div className="max-w-3xl w-full">
                    {callStatus === 'INCOMING' ? (
                        <div className="text-center animate-in zoom-in duration-500">
                            <div className="w-32 h-32 bg-brand rounded-[3rem] flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-brand/40 relative">
                                <PhoneIncoming size={48} className="animate-bounce" />
                                <div className="absolute inset-0 rounded-[3rem] border-4 border-brand animate-ping opacity-20"></div>
                            </div>
                            <h2 className="text-5xl font-black text-brand tracking-tighter mb-2">Incoming Call</h2>
                            <p className="text-brand/40 text-[10px] font-black uppercase tracking-[0.3em] mb-12">Identify caller metadata before pickup</p>

                            <div className="bg-brand/5 p-10 rounded-[3rem] border-2 border-brand/10 mb-12 flex items-center justify-between">
                                <div className="flex items-center gap-8 text-left">
                                    <div className="w-20 h-20 bg-brand text-white rounded-[2rem] flex items-center justify-center text-3xl font-black">S</div>
                                    <div>
                                        <div className="text-[10px] font-black text-brand uppercase tracking-widest mb-1">PROBABLE MATCH</div>
                                        <h3 className="text-2xl font-black text-brand leading-none mb-2">Sarah Google</h3>
                                        <p className="text-sm font-bold text-brand/40">+1 415 555 0192 • San Francisco, CA</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="px-3 py-1 bg-brand text-white rounded-lg text-[10px] font-black uppercase tracking-widest mb-2">GOLD TIER</span>
                                    <span className="text-[10px] font-bold text-brand/40 uppercase">Freq: 8 times/mo</span>
                                </div>
                            </div>

                            <div className="flex gap-6 justify-center">
                                <button
                                    onClick={() => setCallStatus('ACTIVE')}
                                    className="px-16 py-6 bg-brand text-white rounded-[2rem] text-sm font-black uppercase tracking-widest shadow-2xl shadow-brand/40 hover:bg-brand-dark transition-all flex items-center gap-3 active:scale-95"
                                >
                                    Accept Call
                                    <CheckCircle2 size={24} />
                                </button>
                                <button className="px-16 py-6 bg-rose-500 text-white rounded-[2rem] text-sm font-black uppercase tracking-widest shadow-2xl shadow-rose-500/20 hover:bg-rose-600 transition-all flex items-center gap-3 active:scale-95">
                                    Reject
                                    <PhoneOff size={24} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-10 animate-in slide-in-from-bottom duration-500">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-brand text-white rounded-2xl flex items-center justify-center relative">
                                        <PhoneIncoming size={24} />
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand border-2 border-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-brand leading-none mb-1">Active: Sarah Google</h2>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-brand/40 uppercase tracking-widest">
                                            <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
                                            Recording Live Session • 04:12
                                        </div>
                                    </div>
                                </div>
                                <button className="px-6 py-3 bg-rose-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-rose-500/20">
                                    Terminate Call
                                </button>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <FileText size={14} /> Disposition & Landmarks
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <textarea
                                        className="col-span-1 h-32 p-6 bg-brand/5 border-2 border-brand/10 rounded-[2rem] text-sm font-medium focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none placeholder:text-brand/20"
                                        placeholder="Special Instructions (e.g., No onion, extra spicy)..."
                                    ></textarea>
                                    <textarea
                                        className="col-span-1 h-32 p-6 bg-brand/5 border-2 border-brand/10 rounded-[2rem] text-sm font-medium focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none placeholder:text-brand/20"
                                        placeholder="Delivery Landmarks (e.g., Near Big Clock, Second alley)..."
                                    ></textarea>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    {['Sale Finalized', 'Inquiry Only', 'Customer Support', 'Dropped Call'].map(code => (
                                        <button key={code} className="py-4 bg-white border border-brand/10 rounded-2xl text-[8px] font-black uppercase tracking-widest text-brand hover:border-brand transition-all">
                                            {code}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* RIGHT: NAVIGATION/ACTIONS (Section 15) */}
            <aside className="w-80 md:w-96 bg-white border-l border-brand/10 flex flex-col flex-shrink-0 p-8">
                <div className="flex-1"></div>
                {callStatus === 'ACTIVE' && (
                    <button
                        onClick={() => router.push('/pos/menu')}
                        className="w-full py-6 bg-brand text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-brand/20 hover:bg-brand-dark transition-all flex items-center justify-center gap-3 active:scale-95"
                    >
                        Create Order Shell
                        <ArrowRight size={20} />
                    </button>
                )}
            </aside>
        </div>
    );
};
