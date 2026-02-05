'use client';

import React from 'react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter } from 'next/navigation';
import { OrderChannel } from '@/modules/pos/types/pos';
import {
    Utensils,
    ShoppingBag,
    Truck,
    Phone,
    ArrowLeft,
    Clock
} from 'lucide-react';

export const ChannelSelectionPage: React.FC = () => {
    const { session, setChannel, logout } = usePOS();
    const router = useRouter();

    if (!session) return null;

    const channels: { id: OrderChannel; label: string; icon: any; color: string; description: string; hidden?: boolean }[] = [
        {
            id: 'Dine-In',
            label: 'Dine-In',
            icon: Utensils,
            color: 'emerald',
            description: 'Customer eating at the restaurant',
            hidden: session.posType === 'CALL_CENTER'
        },
        {
            id: 'Pickup',
            label: 'Pickup',
            icon: ShoppingBag,
            color: 'blue',
            description: 'Customer collecting their order',
            hidden: session.posType === 'CALL_CENTER'
        },
        {
            id: 'Delivery',
            label: 'Delivery',
            icon: Truck,
            color: 'violet',
            description: 'Dispatching to customer address',
            hidden: session.posType === 'CALL_CENTER'
        },
        {
            id: 'Phone Order',
            label: 'Phone Order',
            icon: Phone,
            color: 'amber',
            description: 'Taking order via call center',
            hidden: session.posType === 'STORE'
        },
    ];

    const handleSelectChannel = (channel: OrderChannel) => {
        setChannel(channel);
        router.push('/pos/home');
    };

    const activeChannels = channels.filter(c => !c.hidden);

    // Color maps for Tailwind classes to avoid dynamic string interpolation
    const borderColors: Record<string, string> = {
        emerald: 'hover:border-emerald-500',
        blue: 'hover:border-blue-500',
        violet: 'hover:border-violet-500',
        amber: 'hover:border-amber-500',
    };

    const bgColors: Record<string, string> = {
        emerald: 'bg-emerald-500/10',
        blue: 'bg-blue-500/10',
        violet: 'bg-violet-500/10',
        amber: 'bg-amber-500/10',
    };

    const iconBgColors: Record<string, string> = {
        emerald: 'group-hover:bg-emerald-600 group-hover:shadow-emerald-500/20',
        blue: 'group-hover:bg-blue-600 group-hover:shadow-blue-500/20',
        violet: 'group-hover:bg-violet-600 group-hover:shadow-violet-500/20',
        amber: 'group-hover:bg-amber-600 group-hover:shadow-amber-500/20',
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 font-sans">
            {/* Header / Info */}
            <div className="w-full max-w-4xl text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Operational Context Active
                </div>
                <h1 className="text-4xl font-black text-white tracking-tight mb-2">Select Order Channel</h1>
                <p className="text-slate-400 font-medium">Define how this order session will be handled</p>
            </div>

            {/* Channel Grid */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeChannels.map((channel) => (
                    <button
                        key={channel.id}
                        onClick={() => handleSelectChannel(channel.id)}
                        className={`group relative p-8 bg-slate-800 border-2 border-slate-700 ${borderColors[channel.color]} hover:bg-slate-800/80 rounded-[2.5rem] transition-all text-left overflow-hidden`}
                    >
                        {/* Glow effect on hover */}
                        <div className={`absolute -right-4 -top-4 w-32 h-32 ${bgColors[channel.color]} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                        <div className="flex items-start justify-between mb-8">
                            <div className={`p-5 bg-slate-700 rounded-3xl ${iconBgColors[channel.color]} text-slate-300 transition-all`}>
                                <channel.icon size={32} />
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-700/50 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                <Clock size={12} />
                                Auto-Timed
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-white mb-2">{channel.label}</h3>
                            <p className="text-slate-400 font-medium text-sm leading-relaxed">
                                {channel.description}
                            </p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Footer Navigation */}
            <div className="w-full max-w-4xl mt-10 flex items-center justify-between">
                <button
                    onClick={() => router.push('/pos/store-selection')}
                    className="flex items-center gap-2 text-slate-500 hover:text-white font-bold transition-all"
                >
                    <ArrowLeft size={18} />
                    Back to Store Selection
                </button>

                <div className="flex items-center gap-4 text-right">
                    <div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Selected Store</div>
                        <div className="text-white font-bold">{session.store.name}</div>
                    </div>
                    <div className="w-px h-8 bg-slate-800"></div>
                    <div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Operator</div>
                        <div className="text-white font-bold">{session.user.name}</div>
                    </div>
                </div>
            </div>

            <button
                onClick={logout}
                className="mt-12 px-6 py-2 bg-slate-800 text-slate-500 hover:text-rose-500 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
            >
                End Session
            </button>
        </div>
    );
};
