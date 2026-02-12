'use client';

import React, { useState, useEffect } from 'react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter } from 'next/navigation';
import {
    Store,
    ArrowRight,
    CheckCircle2,
    MapPin,
    Clock,
    User
} from 'lucide-react';
import { mockStores } from '../mock/posData';

export interface POSSetupPageProps {
    initialStep?: 'STORE' | 'CHANNEL';
}

export const POSSetupPage: React.FC<POSSetupPageProps> = () => {
    const { session, setStore } = usePOS();
    const router = useRouter();
    const [selectedStoreId, setSelectedStoreId] = useState<string>(session?.store?.id || '');

    // Navigation logic: if session is already configured, skip to dashboard
    useEffect(() => {
        if (session?.store && session?.channel) {
            router.push('/pos/dashboard');
        }
    }, [session, router]);

    const handleStoreSelect = () => {
        const store = mockStores.find(s => s.id === selectedStoreId);
        if (store) {
            setStore(store);
            router.push('/pos/dashboard');
        }
    };

    const [currentTime, setCurrentTime] = useState<string | null>(null);

    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-[#F4F5F7] flex flex-col items-center justify-center p-8 font-sans overflow-hidden">
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '45%', background: 'rgba(31, 164, 169, 0.04)', filter: 'blur(120px)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '40%', height: '45%', background: 'rgba(31, 164, 169, 0.04)', filter: 'blur(120px)', borderRadius: '50%' }} />

            <div className="w-full max-w-[1800px] z-10 px-8">
                <div className="mb-14 text-center">
                    <h1 className="text-5xl font-black text-[#1A1C1E] tracking-tighter mb-3">
                        Initialize Terminal
                    </h1>
                    <p className="text-[#94A3B8] font-bold uppercase text-xs tracking-[0.4em]">
                        Map this device to an operating location
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-in slide-in-from-bottom duration-700">
                    {mockStores.map(store => (
                        <button
                            key={store.id}
                            onClick={() => setSelectedStoreId(store.id)}
                            className={`group p-10 rounded-[3.5rem] border-[3px] text-left transition-all relative overflow-hidden h-72 flex flex-col justify-between ${selectedStoreId === store.id ? 'bg-white border-[#1FA4A9] shadow-2xl shadow-[#1FA4A9]/10' : 'bg-white border-transparent hover:border-[#1FA4A9]/20 shadow-xl shadow-black/[0.02]'}`}
                        >
                            <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center ${selectedStoreId === store.id ? 'bg-[#1FA4A9] text-white' : 'bg-[#F1F5F9] text-[#1FA4A9]'} transition-all`}>
                                <Store size={32} />
                            </div>
                            <div>
                                <h3 className={`text-2xl font-black leading-tight mb-2 text-[#1A1C1E]`}>{store.name}</h3>
                                <div className={`flex items-center gap-2 text-[13px] font-bold ${selectedStoreId === store.id ? 'text-[#475569]' : 'text-[#94A3B8]'}`}>
                                    <MapPin size={16} />
                                    <span>{store.address}</span>
                                </div>
                            </div>
                            {selectedStoreId === store.id && (
                                <div className="absolute top-10 right-10 text-[#1FA4A9]">
                                    <CheckCircle2 size={36} />
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                <div className="mt-20 flex justify-between items-center bg-white p-10 rounded-[3rem] border border-[#E2E8F0] shadow-2xl shadow-black/[0.03]">
                    <div className="flex items-center gap-10">
                        <div className="flex flex-col">
                            <span className="text-[11px] font-black text-[#94A3B8] uppercase tracking-widest mb-2">Authenticated As</span>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#1FA4A9] text-white rounded-[1rem] flex items-center justify-center">
                                    <User size={22} />
                                </div>
                                <span className="text-lg font-black text-[#1A1C1E]">{session?.user?.name || 'Agent'}</span>
                            </div>
                        </div>
                        <div className="h-12 w-px bg-[#E2E8F0]"></div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-black text-[#94A3B8] uppercase tracking-widest mb-2">System Sequence Time</span>
                            <div className="flex items-center gap-3 text-[#475569]">
                                <Clock size={20} className="text-[#1FA4A9]" />
                                {currentTime && <span className="text-lg font-bold">{currentTime}</span>}
                            </div>
                        </div>
                    </div>

                    <button
                        disabled={!selectedStoreId}
                        onClick={handleStoreSelect}
                        className={`px-16 h-20 rounded-[1.5rem] flex items-center justify-center gap-4 font-black uppercase text-sm tracking-widest transition-all ${selectedStoreId ? 'bg-[#1FA4A9] text-white shadow-2xl shadow-[#1FA4A9]/20 hover:scale-[1.02] active:scale-[0.98]' : 'bg-[#F1F5F9] text-[#94A3B8] cursor-not-allowed'}`}
                    >
                        Initialize Terminal
                        <ArrowRight size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};
