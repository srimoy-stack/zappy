'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, Flame, Trash2, Undo2, CheckSquare, AlertTriangle } from 'lucide-react';
import { KDSOrder } from '../../types/kds';
import { useKDSStore } from '../../store/kdsStore';
import { useAuth } from '@/app/providers/AuthProvider';
import { KDSRole } from '../../utils/kdsAccess';

interface OrderDetailModalProps {
    order: KDSOrder;
    isOpen: boolean;
    onClose: () => void;
}

export const OrderDetailModal: React.FC<OrderDetailModalProps> = ({ order, isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const {
        cancelOrder,
        acceptOrder,
        advanceStage,
        toggleItemCompletion
    } = useKDSStore();
    const { role } = useAuth();

    const [selectedItemIds, setSelectedItemIds] = useState<Set<string>>(new Set());

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const toggleItemSelection = useCallback((itemId: string) => {
        setSelectedItemIds(prev => {
            const next = new Set(prev);
            if (next.has(itemId)) { next.delete(itemId); } else { next.add(itemId); }
            return next;
        });
    }, []);

    const handleSelectAll = useCallback(() => {
        setSelectedItemIds(prev => {
            if (prev.size === order.items.length) return new Set();
            return new Set(order.items.map(item => item.id));
        });
    }, [order.items]);

    const handleCancel = () => {
        if (confirm('CANCEL ORDER? This cannot be undone.')) {
            cancelOrder(order.id, role as KDSRole || 'KDS_USER');
            onClose();
        }
    };

    const handleFire = () => { acceptOrder(order.id); };

    const handleUnfulfill = () => {
        if (selectedItemIds.size === 0) return;
        selectedItemIds.forEach(id => {
            const item = order.items.find(i => i.id === id);
            if (item?.isCompleted) toggleItemCompletion(order.id, id);
        });
        setSelectedItemIds(new Set());
    };

    const handleFulfill = () => {
        if (selectedItemIds.size === 0) {
            advanceStage(order.id);
            onClose();
            return;
        }
        selectedItemIds.forEach(id => {
            const item = order.items.find(i => i.id === id);
            if (item && !item.isCompleted) toggleItemCompletion(order.id, id);
        });
        setSelectedItemIds(new Set());
    };

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-[1000] flex items-start justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />

            {/* Modal — fits viewport, no scroll */}
            <div className="relative w-full max-w-[1400px] bg-[#0A0B10] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[calc(100vh-32px)] mt-2 overflow-hidden">

                {/* COMPACT HEADER */}
                <div className="shrink-0 px-6 py-4 bg-gradient-to-r from-white/5 to-transparent border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        {/* Order Number - large but not massive */}
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none">
                            #{order.orderNumber}
                        </h2>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 bg-blue-600 text-white rounded text-[9px] font-black uppercase tracking-widest">
                                    {order.order_source}
                                </span>
                                <span className="px-2 py-0.5 bg-white/10 text-slate-300 rounded text-[9px] font-black uppercase tracking-widest">
                                    {order.fulfillment_type.replace('_', ' ')}
                                </span>
                                <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${order.stage === 'NEW' ? 'bg-amber-500 text-black' :
                                        order.stage === 'FIRED' ? 'bg-sky-500 text-white' :
                                            'bg-emerald-500 text-white'
                                    }`}>{order.stage}</span>
                            </div>
                            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                <span>Placed: <span className="text-white">{new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></span>
                                <span>ETA: <span className="text-emerald-400">{order.estimatedReadyTime}</span></span>
                            </div>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-3 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-all border border-white/10 active:scale-90">
                        <X size={24} strokeWidth={3} />
                    </button>
                </div>

                {/* BODY: Two-column layout — Items left, Alerts right */}
                <div className="flex-1 flex overflow-hidden">
                    {/* LEFT: Full Item Details */}
                    <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {/* Select All strip */}
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                            <span className="text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">
                                {order.items.length} Items • {order.items.filter(i => i.isCompleted).length} Done
                            </span>
                            <button onClick={handleSelectAll} className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] font-black text-white uppercase tracking-widest border border-white/5 transition-all">
                                {selectedItemIds.size === order.items.length ? 'Clear' : 'Select All'}
                            </button>
                        </div>

                        {/* ITEM ROWS — compact but complete */}
                        {order.items.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => toggleItemSelection(item.id)}
                                className={`flex items-start gap-4 p-3 rounded-xl border-2 cursor-pointer transition-all ${selectedItemIds.has(item.id)
                                        ? 'bg-blue-600/10 border-blue-500/40'
                                        : 'bg-white/[0.02] border-transparent hover:border-white/5'
                                    }`}
                            >
                                {/* Selection + Qty */}
                                <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-3xl font-black border-2 transition-all ${item.isCompleted ? 'bg-emerald-500 text-white border-emerald-400' :
                                        selectedItemIds.has(item.id) ? 'bg-blue-500 text-white border-blue-400' :
                                            'bg-black text-amber-500 border-slate-800'
                                    }`}>
                                    {item.isCompleted ? '✓' : item.quantity}
                                </div>

                                <div className="flex-1 min-w-0">
                                    {/* Item Name */}
                                    <h4 className={`text-2xl font-black uppercase tracking-tight leading-tight ${item.isCompleted ? 'text-slate-600 line-through' : 'text-white'
                                        }`}>
                                        {item.name}
                                    </h4>

                                    {/* Variant */}
                                    {item.variant && (
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block mt-0.5">
                                            Size: {item.variant}
                                        </span>
                                    )}

                                    {/* Category */}
                                    {item.categoryId && (
                                        <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">
                                            Cat: {item.categoryId.replace('cat-', '')}
                                        </span>
                                    )}

                                    {/* ALL Modifiers / Toppings / Customizations */}
                                    {item.modifiers.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {item.modifiers.map((mod, idx) => (
                                                <span key={idx} className="inline-flex items-center bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase px-2 py-1 rounded-lg border border-blue-500/15">
                                                    <span className="text-blue-500 mr-1 font-black text-xs">+</span>
                                                    {mod.name}
                                                    {mod.quantity && mod.quantity > 1 ? ` ×${mod.quantity}` : ''}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDEBAR: Alerts + Notes + Order Meta */}
                    <div className="w-[320px] shrink-0 border-l border-white/5 p-4 space-y-3 bg-white/[0.01]">
                        {/* ALLERGY — Top Priority */}
                        {order.allergies && order.allergies.length > 0 && (
                            <div className="p-4 bg-red-600 rounded-xl animate-pulse">
                                <div className="flex items-center gap-2 mb-1">
                                    <AlertTriangle size={16} className="text-white" />
                                    <span className="text-[9px] font-black text-white/80 uppercase tracking-widest">Allergy Warning</span>
                                </div>
                                <p className="text-xl font-black text-white uppercase leading-tight">{order.allergies.join(', ')}</p>
                            </div>
                        )}

                        {/* Kitchen Notes */}
                        {order.notes && (
                            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                                <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block mb-1">Kitchen Notes</span>
                                <p className="text-lg font-black text-white uppercase italic leading-snug">"{order.notes}"</p>
                            </div>
                        )}

                        {/* Order Info */}
                        <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5 space-y-3">
                            <h5 className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Order Details</h5>
                            <div className="grid grid-cols-2 gap-2 text-[10px]">
                                <div>
                                    <span className="text-slate-600 font-bold uppercase block">Source</span>
                                    <span className="text-white font-black uppercase">{order.order_source}</span>
                                </div>
                                <div>
                                    <span className="text-slate-600 font-bold uppercase block">Type</span>
                                    <span className="text-white font-black uppercase">{order.fulfillment_type.replace('_', ' ')}</span>
                                </div>
                                <div>
                                    <span className="text-slate-600 font-bold uppercase block">Stage</span>
                                    <span className="text-white font-black uppercase">{order.stage}</span>
                                </div>
                                <div>
                                    <span className="text-slate-600 font-bold uppercase block">Prep Time</span>
                                    <span className="text-white font-black uppercase">{order.prepTimeMinutes}m</span>
                                </div>
                                {order.isDelayed && (
                                    <div className="col-span-2">
                                        <span className="text-red-500 font-black uppercase">⚠ DELAYED</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tracking */}
                        {order.trackingToken && (
                            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                                <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest block mb-1">Tracking</span>
                                <span className="text-[10px] font-mono text-emerald-500 break-all">{order.trackingToken}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* COMPACT FOOTER: Small inline buttons */}
                <div className="shrink-0 px-4 py-3 bg-[#0D0F14] border-t border-white/10 flex items-center gap-2">
                    <button onClick={handleCancel} className="flex items-center gap-2 px-4 py-2.5 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border border-red-600/20 active:scale-95">
                        <Trash2 size={14} /> Cancel
                    </button>
                    <button onClick={handleUnfulfill} disabled={selectedItemIds.size === 0} className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-20 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border border-slate-700 active:scale-95">
                        <Undo2 size={14} /> Undo
                    </button>
                    <button onClick={handleSelectAll} className="flex items-center gap-2 px-4 py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border border-blue-600/20 active:scale-95">
                        <CheckSquare size={14} /> {selectedItemIds.size === order.items.length ? 'Clear' : 'Select'}
                    </button>
                    <button onClick={handleFire} disabled={order.stage !== 'NEW'} className="flex items-center gap-2 px-4 py-2.5 bg-amber-500/10 hover:bg-amber-500 disabled:opacity-20 text-amber-500 hover:text-black rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border border-amber-500/20 active:scale-95">
                        <Flame size={14} /> Fire
                    </button>

                    {/* Primary action — right side */}
                    <div className="flex-1" />
                    <button onClick={handleFulfill} className={`flex items-center gap-2 px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 border-b-4 ${selectedItemIds.size > 0
                            ? 'bg-emerald-500 hover:bg-emerald-400 text-white border-emerald-700'
                            : 'bg-white hover:bg-slate-100 text-black border-slate-300'
                        }`}>
                        <CheckSquare size={16} />
                        {selectedItemIds.size > 0 ? `Done (${selectedItemIds.size})` : 'Bump All'}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};
