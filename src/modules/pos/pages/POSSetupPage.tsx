'use client';

import React, { useState, useEffect } from 'react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter } from 'next/navigation';
import {
    Store,
    Truck,
    ShoppingBag,
    Utensils,
    PhoneCall,
    ArrowRight,
    CheckCircle2,
    MapPin,
    Clock,
    User
} from 'lucide-react';
import { mockStores } from '../mock/posData';
import { OrderChannel } from '../types/pos';

export interface POSSetupPageProps {
    initialStep?: 'STORE' | 'CHANNEL';
}

export const POSSetupPage: React.FC<POSSetupPageProps> = ({ initialStep = 'STORE' }) => {
    const { session, setStore, setChannel } = usePOS();
    const router = useRouter();
    const [step, setStep] = useState<'STORE' | 'CHANNEL'>(initialStep);
    const [selectedStoreId, setSelectedStoreId] = useState<string>(session?.store?.id || '');
    const [selectedChannel, setSelectedChannel] = useState<OrderChannel | ''>(session?.channel || '');

    // Navigation logic: if session is already configured, skip to dashboard
    useEffect(() => {
        if (session?.store && session?.channel && step === initialStep) {
            router.push('/pos/dashboard');
        }
    }, [session, router, step, initialStep]);

    const handleStoreSelect = () => {
        const store = mockStores.find(s => s.id === selectedStoreId);
        if (store) {
            setStore(store);
            setStep('CHANNEL');
        }
    };

    const handleChannelSelect = (channel: OrderChannel) => {
        setSelectedChannel(channel);
        setChannel(channel);
        router.push('/pos/dashboard');
    };

    return (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="w-full max-w-5xl z-10 px-4">
                <div className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className={`h-2 w-12 rounded-full transition-all duration-500 ${step === 'STORE' ? 'bg-brand' : 'bg-brand/20'}`}></div>
                        <div className={`h-2 w-12 rounded-full transition-all duration-500 ${step === 'CHANNEL' ? 'bg-brand' : 'bg-brand/20'}`}></div>
                    </div>
                    <h1 className="text-4xl font-black text-brand tracking-tighter mb-2">
                        {step === 'STORE' ? 'Initialize Terminal' : 'Select Workstream'}
                    </h1>
                    <p className="text-brand/40 font-bold uppercase text-[10px] tracking-[0.3em]">
                        {step === 'STORE' ? 'Map this device to an operating location' : 'Choose the active order fulfillment method'}
                    </p>
                </div>

                {step === 'STORE' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom duration-500">
                        {mockStores.map(store => (
                            <button
                                key={store.id}
                                onClick={() => setSelectedStoreId(store.id)}
                                className={`group p-8 rounded-[3rem] border-4 text-left transition-all relative overflow-hidden h-64 flex flex-col justify-between ${selectedStoreId === store.id ? 'bg-brand border-brand text-white shadow-2xl shadow-brand/20' : 'bg-white border-brand/5 hover:border-brand/40 text-brand'}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${selectedStoreId === store.id ? 'bg-white text-brand' : 'bg-brand/5 text-brand'} transition-all`}>
                                    <Store size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black leading-tight mb-2">{store.name}</h3>
                                    <div className={`flex items-center gap-2 text-xs font-bold ${selectedStoreId === store.id ? 'text-white/70' : 'text-brand/40'}`}>
                                        <MapPin size={14} />
                                        <span>{store.address}</span>
                                    </div>
                                </div>
                                {selectedStoreId === store.id && (
                                    <div className="absolute top-8 right-8 text-white">
                                        <CheckCircle2 size={32} />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in slide-in-from-right duration-500">
                        {[
                            { id: 'Dine-In', icon: Utensils, label: 'Dine-In', desc: 'In-Store Table Service' },
                            { id: 'Pickup', icon: ShoppingBag, label: 'Takeaway', desc: 'Guest Collections' },
                            { id: 'Delivery', icon: Truck, label: 'Delivery', desc: 'Last Mile Ops' },
                            { id: 'Phone Order', icon: PhoneCall, label: 'Call Center', desc: 'Remote Intake' }
                        ].map(channel => (
                            <button
                                key={channel.id}
                                onClick={() => handleChannelSelect(channel.id as OrderChannel)}
                                className={`group p-8 rounded-[3rem] border-4 transition-all text-center flex flex-col items-center justify-center h-72 relative ${selectedChannel === channel.id ? 'bg-brand border-brand text-white shadow-2xl shadow-brand/20 scale-105 z-10' : 'bg-white border-brand/5 hover:border-brand hover:shadow-2xl hover:shadow-brand/20 text-brand'}`}
                            >
                                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-6 transition-all ${selectedChannel === channel.id ? 'bg-white text-brand' : 'bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white'}`}>
                                    <channel.icon size={36} />
                                </div>
                                <h3 className={`text-xl font-black mb-2 ${selectedChannel === channel.id ? 'text-white' : 'text-brand'}`}>{channel.label}</h3>
                                <p className={`text-xs font-bold uppercase tracking-widest ${selectedChannel === channel.id ? 'text-white/60' : 'text-brand/40'}`}>{channel.desc}</p>
                                {selectedChannel === channel.id && (
                                    <div className="absolute top-6 right-6 text-white">
                                        <CheckCircle2 size={24} />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                )}

                <div className="mt-16 flex justify-between items-center bg-brand/5 p-8 rounded-[2.5rem] border border-brand/10">
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-brand/40 uppercase tracking-widest mb-1">Authenticated As</span>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center">
                                    <User size={18} />
                                </div>
                                <span className="text-sm font-black text-brand">{session?.user?.name || 'Agent'}</span>
                            </div>
                        </div>
                        <div className="h-10 w-px bg-brand/10"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-brand/40 uppercase tracking-widest mb-1">System Time</span>
                            <div className="flex items-center gap-2 text-brand">
                                <Clock size={16} />
                                <span className="text-sm font-bold">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                        </div>
                    </div>

                    {step === 'STORE' ? (
                        <button
                            disabled={!selectedStoreId}
                            onClick={handleStoreSelect}
                            className={`px-12 h-16 rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest transition-all ${selectedStoreId ? 'bg-brand text-white shadow-xl shadow-brand/20 hover:bg-brand-dark' : 'bg-brand/5 text-brand/20 cursor-not-allowed'}`}
                        >
                            Next Step
                            <ArrowRight size={20} />
                        </button>
                    ) : (
                        <button
                            onClick={() => setStep('STORE')}
                            className="text-[10px] font-black text-brand/40 uppercase tracking-[0.3em] hover:text-brand transition-all flex items-center gap-2"
                        >
                            ← Back to Store Selection
                        </button>
                    )}
                </div>
            </div>
        </div>
    );

};
