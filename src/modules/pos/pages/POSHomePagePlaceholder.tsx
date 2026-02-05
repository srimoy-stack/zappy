'use client';

import React from 'react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter } from 'next/navigation';
import { LogOut, Store, LayoutGrid, Clock, User } from 'lucide-react';

export const POSHomePagePlaceholder: React.FC = () => {
    const { session, logout } = usePOS();
    const router = useRouter();

    // Live clock for POS taskbar
    React.useEffect(() => {
        const updateClock = () => {
            const clockEl = document.getElementById('pos-clock');
            if (clockEl) {
                clockEl.innerText = new Date().toLocaleString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                });
            }
        };
        const interval = setInterval(updateClock, 1000);
        updateClock();
        return () => clearInterval(interval);
    }, []);

    if (!session) {
        if (typeof window !== 'undefined') router.push('/pos/login');
        return null;
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            {/* POS Header */}
            <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-black">Z</span>
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Zyappy POS</div>
                            <div className="text-sm font-black text-slate-900 tracking-tight">Main Terminal</div>
                        </div>
                    </div>

                    <div className="h-8 w-px bg-slate-200"></div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-lg">
                            <Store size={14} className="text-emerald-600" />
                            <span className="text-xs font-bold text-emerald-700">{session.store.name}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-lg">
                            <LayoutGrid size={14} className="text-blue-600" />
                            <span className="text-xs font-bold text-blue-700">{session.channel}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 text-right">
                        <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{session.user.role}</div>
                            <div className="text-sm font-black text-slate-900">{session.user.name}</div>
                        </div>
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                            <User size={20} />
                        </div>
                    </div>

                    <button
                        onClick={logout}
                        className="p-3 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-2xl transition-all shadow-sm shadow-rose-100"
                        title="End Session"
                    >
                        <LogOut size={20} />
                    </button>
                </div>
            </header>

            {/* Content Placeholder */}
            <main className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-24 h-24 bg-slate-200/50 rounded-[2rem] flex items-center justify-center text-slate-400 mb-8 animate-pulse">
                    <Clock size={48} />
                </div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">POS Home – Next Section</h2>
                <p className="text-slate-500 max-w-md mx-auto font-medium leading-relaxed">
                    Context initialized successfully. You are now in the <strong>{session.posType.replace('_', ' ')}</strong> environment at <strong>{session.store.name}</strong> for <strong>{session.channel}</strong>.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-48 bg-white border border-slate-200 border-dashed rounded-3xl flex items-center justify-center">
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Section Placeholder</span>
                        </div>
                    ))}
                </div>
            </main>

            {/* POS Footer (Taskbar) */}
            <footer className="h-14 bg-slate-900 px-8 flex items-center justify-between text-white/50 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-4">
                    <span>V1.0.0</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="text-emerald-400">System Ready</span>
                </div>
                <div className="flex items-center gap-4">
                    <span id="pos-clock">Thu, Feb 5, 8:45 PM</span>
                </div>
            </footer>
        </div>
    );
};
