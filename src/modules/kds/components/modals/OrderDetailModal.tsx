'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Trash2, Printer, ChevronLeft, CheckCircle2, AlertCircle } from 'lucide-react';
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

    const [, setTick] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => setTick(t => t + 1), 1000);
        return () => clearInterval(timer);
    }, []);

    const { cancelOrder, toggleItemCompletion } = useKDSStore();

    const { role } = useAuth();

    const [selectedItemIds, setSelectedItemIds] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

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

    const handleFulfill = () => {
        if (selectedItemIds.size === 0) {
            order.items.forEach(item => {
                if (!item.isCompleted) toggleItemCompletion(order.id, item.id);
            });
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
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 lg:p-12">
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

            {/* MODAL CONTAINER */}
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#F3F4F6] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                {/* HEADER */}
                <div className="h-[80px] bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={onClose}
                            className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all active:scale-95"
                            title="Close"
                        >
                            <ChevronLeft size={24} className="text-gray-900" />
                        </button>
                        <div>
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-bold text-gray-900">ORDER #{order.orderNumber}</h2>
                                <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase text-white ${order.stage === 'RECALLED' ? 'bg-teal-600' :
                                        order.stage === 'NEW' ? 'bg-[#374151]' :
                                            order.stage === 'READY' ? 'bg-blue-600' :
                                                'bg-[#E67E22]'
                                    }`}>
                                    {order.stage === 'RECALLED' ? 'RECALLED' :
                                        order.stage === 'NEW' ? 'IN QUEUE' :
                                            order.stage === 'READY' ? 'READY' :
                                                'IN PREPARATION'}
                                </span>
                            </div>
                            <p className="text-gray-400 text-[11px] font-bold uppercase mt-1">
                                {order.customerName || 'GUEST CUSTOMER'} • REF: {order.external_order_id || order.id.slice(0, 8)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => window.print()}
                            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-bold text-xs uppercase hover:border-black transition-all"
                        >
                            <Printer size={18} /> Print Label
                        </button>
                        <button
                            onClick={handleCancel}
                            className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 border-2 border-red-100 rounded-xl font-bold text-xs uppercase hover:bg-red-600 hover:text-white transition-all"
                        >
                            <Trash2 size={18} /> Void Order
                        </button>
                    </div>
                </div>

                {/* MODAL CONTENT */}
                <div className="flex-1 overflow-y-auto flex flex-col p-8 lg:p-12">
                    <div className="mx-auto w-full flex-1 flex flex-col lg:flex-row gap-8">

                        {/* LEFT: ITEM GRID */}
                        <div className="flex-1 flex flex-col bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden">
                            <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                                <h3 className="text-sm font-bold text-gray-400 uppercase">Item Production List</h3>
                                <button
                                    onClick={handleSelectAll}
                                    className="text-[10px] font-bold text-blue-500 uppercase hover:underline"
                                >
                                    {selectedItemIds.size === order.items.length ? 'DESELECT ALL' : 'SELECT ALL ITEMS'}
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide space-y-4">
                                {order.items.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => toggleItemSelection(item.id)}
                                        className={`flex items-start gap-6 p-6 rounded-3xl border-4 transition-all cursor-pointer group hover:scale-[1.01] ${selectedItemIds.has(item.id)
                                            ? 'border-black bg-gray-50'
                                            : 'border-transparent bg-gray-50/30 hover:bg-white hover:border-gray-200'
                                            }`}
                                    >
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 transition-colors ${item.isCompleted
                                            ? 'bg-emerald-500 text-white'
                                            : selectedItemIds.has(item.id) ? 'bg-black text-white' : 'bg-white text-gray-900 border border-gray-100'
                                            }`}>
                                            {item.isCompleted ? '✓' : item.quantity}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h4 className={`text-2xl font-bold uppercase leading-none ${item.isCompleted ? 'text-gray-300 line-through' : 'text-gray-900 group-hover:text-black'
                                                    }`}>
                                                    {item.name}
                                                </h4>
                                                {item.variant && (
                                                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase">
                                                        {item.variant}
                                                    </span>
                                                )}
                                            </div>
                                            {item.modifiers.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {item.modifiers.map((mod, idx) => (
                                                        <div key={idx} className="flex items-center gap-1.5 bg-gray-100 text-gray-500 text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-gray-200/50">
                                                            {mod.quantity && mod.quantity > 1 && <span className="text-black">x{mod.quantity}</span>}
                                                            <span>{mod.name}</span>
                                                            {mod.placement && mod.placement !== 'FULL' && (
                                                                <span className="text-[8px] bg-white border border-gray-200 px-1 rounded ml-1 text-gray-400">
                                                                    {mod.placement}
                                                                </span>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedItemIds.has(item.id) ? 'bg-black border-black' : 'border-gray-300'
                                            }`}>
                                            {selectedItemIds.has(item.id) && <CheckCircle2 size={16} className="text-white" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: METADATA & ACTIONS */}
                        <div className="lg:w-[400px] flex flex-col gap-6">
                            {/* Prep Flags: Notes & Allergies */}
                            <div className="space-y-4">
                                {order.notes && (
                                    <div className="bg-amber-100 p-8 rounded-[2rem] border-2 border-amber-200 shadow-lg">
                                        <div className="flex items-center gap-2 mb-3">
                                            <AlertCircle size={20} className="text-amber-600" />
                                            <span className="text-[10px] font-bold text-amber-600 uppercase">Kitchen Priority Instructions</span>
                                        </div>
                                        <p className="text-xl font-bold text-amber-900 italic leading-relaxed">
                                            "{order.notes}"
                                        </p>
                                    </div>
                                )}

                                {order.allergies && order.allergies.length > 0 && (
                                    <div className="bg-red-50 p-6 rounded-[2rem] border-2 border-red-100">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Allergy Alerts</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {order.allergies.map((allergy, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-white border border-red-200 text-red-600 text-[11px] font-bold rounded-lg uppercase">
                                                    {allergy}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Order Identity Card */}
                            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-200 space-y-8">
                                <div>
                                    <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-4">Channel Details</h4>
                                    <div className="grid grid-cols-2 gap-y-4">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-bold text-gray-300 uppercase">Elapsed</span>
                                            <span className="text-lg font-bold text-gray-900">
                                                {(() => {
                                                    const elapsed = Date.now() - new Date(order.createdAt).getTime();
                                                    const m = Math.floor(elapsed / 60000);
                                                    const s = Math.floor((elapsed % 60000) / 1000);
                                                    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
                                                })()}
                                                <span className="text-xs ml-1">MIN</span>
                                            </span>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span className="text-[9px] font-bold text-gray-300 uppercase">Channel</span>
                                            <span className="text-lg font-bold text-gray-900 uppercase">{order.order_source}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-bold text-gray-300 uppercase">Service</span>
                                            <span className="text-lg font-bold text-gray-900 uppercase">{order.fulfillment_type.replace('_', ' ')}</span>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span className="text-[9px] font-bold text-gray-300 uppercase">Items</span>
                                            <span className="text-lg font-bold text-gray-900">{order.items.length}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-gray-100">
                                    <button
                                        onClick={handleFulfill}
                                        className="w-full h-20 bg-black text-white rounded-3xl font-bold text-lg uppercase shadow-lg hover:bg-gray-800 transition-all active:scale-[0.98]"
                                    >
                                        {selectedItemIds.size > 0
                                            ? `Fulfill Selected (${selectedItemIds.size})`
                                            : 'Fulfill All Items'}
                                    </button>
                                    <p className="text-[9px] font-bold text-gray-400 text-center uppercase tracking-widest mt-4">
                                        Order will move to READY status upon fulfillment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
