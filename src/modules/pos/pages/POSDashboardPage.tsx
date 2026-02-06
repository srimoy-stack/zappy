'use client';

import React from 'react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter, usePathname } from 'next/navigation';
// ... other imports
import {
    LogOut,
    Store,
    LayoutGrid,
    User,
    Search,
    Plus,
    Clock,
    History,
    Pause,
    RotateCcw,
    Printer,
    BarChart3,
    ShoppingBag,
    PhoneIncoming,
    ShoppingCart,
    ChevronRight,
    Globe,
    Wifi,
    WifiOff
} from 'lucide-react';
import { mockRecentOrders, mockIncomingCall } from '../mock/posData';

export const POSDashboardPage: React.FC = () => {
    const { session, logout, isOffline } = usePOS();
    const router = useRouter();
    const pathname = usePathname();

    // Live clock for POS taskbar
    const [currentTime, setCurrentTime] = React.useState<string>('');

    React.useEffect(() => {
        const updateClock = () => {
            setCurrentTime(new Date().toLocaleString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }));
        };
        const interval = setInterval(updateClock, 1000);
        updateClock();
        return () => clearInterval(interval);
    }, []);

    if (!session) {
        if (typeof window !== 'undefined') router.push('/pos/login');
        return null;
    }

    const navItems = [
        { icon: ShoppingCart, label: 'SELL', path: '/pos/menu' },
        { icon: LayoutGrid, label: 'TABLES', path: '/pos/tables' },
        { icon: Globe, label: 'ONLINE ORDERS', path: '/pos/orders' },
        { icon: Clock, label: 'ADVANCE ORDERS', path: '/pos/orders' },
        { icon: History, label: 'SALES', path: '/pos/orders' },
        { icon: BarChart3, label: 'REPORTS', path: '/pos/reports' },
    ];

    return (
        <div className="flex h-screen bg-white text-brand font-sans overflow-hidden">
            {/* LEFT NAVIGATION RAIL */}
            <aside className="w-20 bg-brand/5 border-r border-brand/10 flex flex-col items-center py-6 gap-6 flex-shrink-0">
                <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center shadow-lg shadow-brand/20 mb-4">
                    <span className="text-xl font-black text-white">Z</span>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path || (item.path === '/pos/dashboard' && pathname === '/pos');
                        return (
                            <button
                                key={item.label}
                                onClick={() => router.push(item.path)}
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all group relative ${isActive ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-brand/40 hover:bg-brand/10 hover:text-brand'
                                    }`}
                                title={item.label}
                            >
                                <item.icon size={24} />
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full"></div>
                                )}
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={logout}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-brand/40 hover:bg-rose-50 hover:text-rose-600 transition-all"
                >
                    <LogOut size={24} />
                </button>
            </aside>

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* TOP HEADER BAR */}
                <header className="h-20 bg-white border-b border-brand/10 px-8 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-brand/30 uppercase tracking-widest leading-none mb-1">Operating At</span>
                            <div className="flex items-center gap-2">
                                <Store size={16} className="text-brand" />
                                <span className="text-base font-black text-brand tracking-tight">{session.store.name}</span>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-brand/10"></div>
                        <div className="px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full flex items-center gap-2">
                            <LayoutGrid size={14} className="text-brand" />
                            <span className="text-xs font-bold text-brand uppercase tracking-wider">{session.channel}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-right">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-brand/30 uppercase tracking-widest leading-none mb-1">{session.user.role}</span>
                                <span className="text-sm font-black text-brand">{session.user.name}</span>
                            </div>
                            <div className="w-10 h-10 bg-brand/5 rounded-full flex items-center justify-center text-brand/60 border border-brand/10">
                                <User size={20} />
                            </div>
                        </div>
                        <div className="h-8 w-px bg-brand/10"></div>
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-end">
                                <div className="flex items-center gap-2 text-brand text-[10px] font-black uppercase tracking-widest">
                                    <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
                                    Clocked In
                                </div>
                                <span className="text-sm font-bold text-brand/60">08:42:15</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-brand/5 rounded-xl text-brand/60 hover:bg-brand/10 cursor-pointer transition-all border border-brand/10">
                                <Globe size={16} />
                                <span className="text-xs font-bold font-mono">EN</span>
                            </div>
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all border ${isOffline ? 'bg-amber-500/10 border-amber-500/20 text-amber-600' : 'bg-brand/5 border-brand/10 text-brand'}`}>
                                {isOffline ? <WifiOff size={16} /> : <Wifi size={16} />}
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                                    {isOffline ? 'Offline' : 'Online'}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 flex min-w-0 overflow-hidden">
                    {/* CENTER: PRIMARY ACTIONS & RECENT ORDERS */}
                    <div className="flex-1 flex flex-col p-8 gap-8 overflow-y-auto custom-scrollbar">

                        {/* CALL CENTER banner UI */}
                        {session.posType === 'CALL_CENTER' && (
                            <div className="bg-brand rounded-[2rem] p-6 flex items-center justify-between shadow-lg shadow-brand/20 animate-in slide-in-from-top duration-500">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white relative">
                                        <PhoneIncoming size={32} className="animate-bounce" />
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-brand"></div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Incoming Call</span>
                                            <span className="px-2 py-0.5 bg-white text-brand rounded text-[8px] font-black uppercase tracking-widest">LOYALTY MEMBER</span>
                                        </div>
                                        <h2 className="text-2xl font-black text-white leading-none">{mockIncomingCall.caller}</h2>
                                        <p className="text-white/80 text-sm font-medium mt-1">{mockIncomingCall.number} • {mockIncomingCall.location}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => router.push(`/pos/customers?query=${encodeURIComponent(mockIncomingCall.number)}`)}
                                    className="px-8 py-4 bg-white text-brand rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-neutral-50 transition-all shadow-lg"
                                >
                                    Attach to Order
                                </button>
                            </div>
                        )}

                        {/* PRIMARY GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <button
                                onClick={() => {
                                    if (session.channel === 'Dine-In') {
                                        router.push('/pos/tables');
                                    } else {
                                        router.push('/pos/new-order');
                                    }
                                }}
                                className="col-span-1 md:col-span-2 relative h-64 bg-brand rounded-[3rem] p-10 flex flex-col justify-end group overflow-hidden shadow-xl shadow-brand/20 active:scale-[0.98] transition-all"
                            >
                                <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
                                <div className="absolute right-12 top-12 p-6 bg-white/20 rounded-[2rem] text-white">
                                    <Plus size={48} />
                                </div>
                                <h3 className="text-4xl font-black text-white tracking-tight mb-2">New Order</h3>
                                <p className="text-white/80 font-medium text-lg">Start a fresh transaction for a guest</p>
                            </button>

                            <div className="grid grid-rows-2 gap-6">
                                <button
                                    onClick={() => router.push('/pos/orders')}
                                    className="bg-white border-2 border-brand/10 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-brand transition-all active:scale-[0.98] shadow-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="p-4 bg-brand/10 text-brand rounded-2xl group-hover:bg-brand group-hover:text-white transition-all">
                                            <History size={24} />
                                        </div>
                                        <span className="text-3xl font-black text-brand">12</span>
                                    </div>
                                    <div className="text-lg font-black text-brand">Open Orders</div>
                                </button>
                                <button
                                    onClick={() => router.push('/pos/orders')}
                                    className="bg-white border-2 border-brand/10 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-amber-500 transition-all active:scale-[0.98] shadow-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="p-4 bg-amber-500/10 text-amber-600 rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-all">
                                            <Pause size={24} />
                                        </div>
                                        <span className="text-3xl font-black text-amber-600">4</span>
                                    </div>
                                    <div className="text-lg font-black text-brand">Held Orders</div>
                                </button>
                            </div>
                        </div>

                        {/* RECENT ORDERS TABLE */}
                        <div className="bg-white border-2 border-brand/10 rounded-[3rem] p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-brand/5 rounded-2xl text-brand">
                                        <RotateCcw size={20} />
                                    </div>
                                    <h3 className="text-xl font-black text-brand">Recent Orders</h3>
                                </div>
                                <button
                                    onClick={() => router.push('/pos/orders')}
                                    className="text-xs font-black text-brand uppercase tracking-widest hover:opacity-70"
                                >
                                    View All →
                                </button>
                            </div>

                            <div className="space-y-2">
                                {mockRecentOrders.map((order) => (
                                    <div
                                        key={order.id}
                                        onClick={() => router.push('/pos/orders')}
                                        className="group grid grid-cols-5 items-center p-5 bg-brand/5 hover:bg-brand text-brand hover:text-white border border-brand/10 hover:border-brand rounded-2xl transition-all cursor-pointer"
                                    >
                                        <div className="col-span-1">
                                            <div className="text-sm font-black mb-0.5">{order.id}</div>
                                            <div className="text-[10px] font-bold uppercase opacity-60">{order.time}</div>
                                        </div>
                                        <div className="col-span-1">
                                            <span className="text-xs font-bold">{order.customer}</span>
                                        </div>
                                        <div className="col-span-1 text-center">
                                            <span className="px-2 py-1 bg-white/20 text-[8px] font-black uppercase tracking-widest border border-white/30 rounded-lg">
                                                {order.type}
                                            </span>
                                        </div>
                                        <div className="col-span-1">
                                            <div className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${order.status === 'Completed' ? 'bg-brand group-hover:bg-white' :
                                                    order.status === 'Pending' ? 'bg-amber-500' : 'bg-brand/30'
                                                    }`}></div>
                                                {order.status}
                                            </div>
                                        </div>
                                        <div className="col-span-1 text-right">
                                            <div className="text-sm font-black">${order.amount.toFixed(2)}</div>
                                            <div className="text-xs font-bold opacity-60 transition-all flex items-center justify-end gap-1">
                                                Details <ChevronRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SECONDARY ACTIONS */}
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <button
                                onClick={() => router.push('/pos/orders')}
                                className="flex items-center justify-center gap-3 p-6 bg-white border-2 border-brand/10 rounded-2xl text-brand/40 hover:text-rose-600 hover:border-rose-500 group transition-all shadow-sm"
                            >
                                <RotateCcw size={20} className="group-hover:rotate-[-45deg] transition-all" />
                                <span className="text-sm font-black uppercase tracking-widest">Process Refund</span>
                            </button>
                            <button
                                onClick={() => router.push('/pos/orders')}
                                className="flex items-center justify-center gap-3 p-6 bg-white border-2 border-brand/10 rounded-2xl text-brand/40 hover:text-brand hover:border-brand group transition-all shadow-sm"
                            >
                                <Printer size={20} />
                                <span className="text-sm font-black uppercase tracking-widest">Reprint Receipt</span>
                            </button>
                            <button
                                onClick={() => router.push('/pos/customers')}
                                className="flex items-center justify-center gap-3 p-6 bg-white border-2 border-brand/10 rounded-2xl text-brand/40 hover:text-brand hover:border-brand group transition-all shadow-sm"
                            >
                                <Search size={20} />
                                <span className="text-sm font-black uppercase tracking-widest">Find Customer</span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: CONTEXT / EMPTY CART PLACEHOLDER */}
                    <div className="w-96 bg-white border-l border-brand/10 flex flex-col flex-shrink-0">
                        <div className="p-8 border-b border-brand/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingCart size={20} className="text-brand" />
                                <h3 className="text-xl font-black text-brand">Current Cart</h3>
                            </div>
                            <span className="px-3 py-1 bg-brand/5 rounded-lg text-xs font-black text-brand">0 Items</span>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                            <div className="w-20 h-20 bg-brand/5 rounded-3xl flex items-center justify-center text-brand/20 mb-6">
                                <ShoppingBag size={32} />
                            </div>
                            <h4 className="text-lg font-black text-brand mb-2">Cart is empty</h4>
                            <p className="text-brand/40 text-sm font-medium leading-relaxed">
                                Start a new order to add items and build a transaction.
                            </p>
                            <button
                                onClick={() => router.push('/pos/new-order')}
                                className="mt-8 px-8 py-4 bg-brand text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-lg shadow-brand/20 active:scale-95 transition-all"
                            >
                                Start New Order
                            </button>
                        </div>

                        {/* SESSION INFO FOOTER */}
                        <div className="p-8 bg-brand/5 border-t border-brand/10">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-brand/30">
                                    <span>System ID</span>
                                    <span className="text-brand">TR-8842-X</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-brand/30">
                                    <span>Memory Usage</span>
                                    <span className="text-brand">Normal (24MB)</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-brand/30">
                                    <span>Sync Status</span>
                                    <span className="text-brand">Synced to Cloud</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* POS FOOTER (TASKBAR) */}
                <footer className="h-14 bg-white border-t border-brand/10 px-8 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-black text-brand/30 uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-brand"></span>
                            POS CORE v1.0.0
                        </div>
                        <div className="h-4 w-px bg-brand/10"></div>
                        <div className="text-[10px] font-black text-brand/30 uppercase tracking-widest">
                            License: Enterprise
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="h-4 w-px bg-brand/10"></div>
                        <div className="text-[10px] font-black text-brand/40 uppercase tracking-widest flex items-center gap-2">
                            <Clock size={12} />
                            {currentTime}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};
