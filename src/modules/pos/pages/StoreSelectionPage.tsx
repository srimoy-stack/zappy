'use client';

import React, { useState } from 'react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter } from 'next/navigation';
import { mockStores } from '@/modules/pos/mock/posData';
import { MapPin, ChevronRight, LogOut, Store } from 'lucide-react';

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
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="w-full max-w-3xl z-10">
                <div className="mb-10 text-center animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="w-20 h-20 bg-brand rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand/20 border border-brand/30">
                        <Store size={40} className="text-white" />
                    </div>
                    <h1 className="text-4xl font-black text-brand tracking-tighter mb-2">Select Operating Store</h1>
                    <p className="text-brand/50 font-medium tracking-wide">Choose the branch you will be managing for this session</p>
                </div>

                <div className="bg-white border-4 border-brand/10 rounded-[3rem] shadow-2xl overflow-hidden">
                    <div className="p-8 border-b border-brand/10 flex items-center justify-between bg-brand/5">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-brand/40 uppercase tracking-widest">Operator Context</p>
                                <p className="text-sm font-black text-brand">{session.user.name} • {session.user.role}</p>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="px-5 py-2.5 bg-rose-500/10 text-rose-600 hover:bg-rose-500 hover:text-white border border-rose-500/20 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
                        >
                            <LogOut size={14} />
                            Switch User
                        </button>
                    </div>

                    <div className="p-10">
                        <div className="grid grid-cols-1 gap-4">
                            {accessibleStores.map((store, idx) => (
                                <button
                                    key={store.id}
                                    onClick={() => handleSelectStore(store)}
                                    disabled={loading}
                                    className="group flex items-center justify-between p-8 bg-white border-2 border-brand/5 hover:border-brand hover:bg-brand/5 rounded-[2.5rem] transition-all text-left animate-in slide-in-from-bottom-4 duration-500"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand/40 group-hover:bg-brand group-hover:text-white transition-all shadow-lg border border-brand/10 group-hover:border-brand">
                                            <MapPin size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-brand mb-1">{store.name}</h3>
                                            <p className="text-brand/40 text-sm font-black">{store.address}</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white group-hover:translate-x-1 transition-all">
                                        <ChevronRight size={24} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-brand/5 border-t border-brand/10 flex justify-center">
                        <div className="flex items-center gap-2 text-[10px] font-black text-brand/30 uppercase tracking-widest">
                            System identifying device... <span className="text-brand">POS-8822-X</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
