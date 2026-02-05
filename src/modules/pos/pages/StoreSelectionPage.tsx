'use client';

import React, { useState } from 'react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter } from 'next/navigation';
import { mockStores } from '@/modules/pos/mock/posData';
import { MapPin, ChevronRight, LogOut } from 'lucide-react';

export const StoreSelectionPage: React.FC = () => {
    const { session, setStore, logout } = usePOS();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Filter stores accessible by user
    const accessibleStores = mockStores.filter(s => session?.user.accessibleStores.includes(s.id));

    const handleSelectStore = (store: any) => {
        setLoading(true);
        setStore(store);
        router.push('/pos/channel-selection');
    };

    // If store already selected, redirect to channel selection
    React.useEffect(() => {
        if (session?.store?.id) {
            router.push('/pos/channel-selection');
        }
    }, [session, router]);

    if (!session) return null;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
            <div className="w-full max-w-2xl bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
                <div className="p-10 border-b border-slate-50 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Select Store</h1>
                        <p className="text-slate-500 font-medium mt-1">Which branch are you operating today?</p>
                    </div>
                    <button
                        onClick={logout}
                        className="p-3 bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-all"
                        title="Logout"
                    >
                        <LogOut size={20} />
                    </button>
                </div>

                <div className="p-10 space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        {accessibleStores.map((store) => (
                            <button
                                key={store.id}
                                onClick={() => handleSelectStore(store)}
                                disabled={loading}
                                className="group flex items-center justify-between p-6 bg-slate-50 border-2 border-transparent hover:border-emerald-600 hover:bg-white rounded-[2rem] transition-all text-left"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-emerald-100/50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-slate-800">{store.name}</h3>
                                        <p className="text-sm text-slate-500 font-medium">{store.address}</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
                                    <ChevronRight size={20} />
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="pt-6 text-center">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                            Authenticated as: <span className="text-slate-900">{session.user.name}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
