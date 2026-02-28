'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, History, RotateCcw, Search, Clock, PackageCheck } from 'lucide-react';
import { useKDSStore } from '../../store/kdsStore';

interface HistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { fulfilledOrders, recallFulfilledOrder } = useKDSStore();
    const [searchQuery, setSearchQuery] = useState('');

    if (!isOpen || !mounted) return null;

    const filteredOrders = fulfilledOrders.filter(order =>
        order.orderNumber.includes(searchQuery) ||
        order.external_order_id?.includes(searchQuery)
    );

    const handleRecall = (orderId: string) => {
        recallFulfilledOrder(orderId);
    };

    return createPortal(
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* Header */}
                <div className="p-8 border-b border-slate-800 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                                <History size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Fulfillment History</h2>
                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Recently Fulfilled Orders</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="SEARCH BY ORDER NUMBER..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-bold uppercase tracking-widest text-xs focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                        />
                    </div>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {filteredOrders.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 opacity-30">
                            <PackageCheck size={64} className="mb-4" />
                            <p className="font-black uppercase tracking-[0.3em] text-sm">Empty History</p>
                        </div>
                    ) : (
                        filteredOrders.map((order, idx) => (
                            <div
                                key={order.id}
                                style={{ animationDelay: `${idx * 40}ms` }}
                                className="group bg-slate-800/40 border border-slate-800/80 p-4 rounded-3xl flex items-center justify-between hover:border-blue-500/30 transition-all animate-in slide-in-from-bottom-2 fade-in duration-500 fill-mode-both"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Order</span>
                                        <span className="text-2xl font-black text-white">#{order.orderNumber}</span>
                                    </div>

                                    <div className="h-10 w-px bg-slate-800" />

                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Fulfilled At</span>
                                        <div className="flex items-center gap-2 text-slate-300 font-black text-xs">
                                            <Clock size={12} className="text-blue-500" />
                                            {new Date(order.updatedAt).toLocaleTimeString()}
                                        </div>
                                    </div>

                                    <div className="hidden md:flex flex-col">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Source</span>
                                        <span className="text-[10px] font-black text-white bg-slate-700 px-2 py-0.5 rounded uppercase">
                                            {order.order_source}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleRecall(order.id)}
                                    className="flex items-center gap-3 px-6 py-3 bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-95 border border-blue-500/20"
                                >
                                    <RotateCcw size={16} />
                                    Recall
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 bg-slate-950/20 border-t border-slate-800 flex justify-between items-center">
                    <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest px-4">
                        Showing {filteredOrders.length} of {fulfilledOrders.length} records
                    </span>
                    <button
                        onClick={onClose}
                        className="px-8 py-3 bg-white text-slate-950 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-slate-200 transition-colors shadow-xl active:scale-95"
                    >
                        Close History
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};
