'use client';

import React, { useState } from 'react';
import {
    X,
    Tag,
    Percent,
    DollarSign,
    ShieldCheck,
    ChevronRight,
    Delete
} from 'lucide-react';
import { cn } from '@/utils';

interface POSDiscountModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (type: 'FIXED' | 'PERCENT', value: number) => void;
}

export const POSDiscountModal: React.FC<POSDiscountModalProps> = ({ isOpen, onClose, onApply }) => {
    const [mode, setMode] = useState<'LIST' | 'MANUAL'>('LIST');
    const [discountType, setDiscountType] = useState<'FIXED' | 'PERCENT'>('PERCENT');
    const [value, setValue] = useState('');


    if (!isOpen) return null;

    const mockCoupons = [
        { code: 'WELCOME10', desc: '10% New Guest', type: 'PERCENT', val: 10 },
        { code: 'FLAT5', desc: '$5 Off Minimum $20', type: 'FIXED', val: 5 },
        { code: 'STAFF50', desc: '50% Employee Meal', type: 'PERCENT', val: 50, restricted: true },
        { code: 'VIP25', desc: '25% VIP Exclusive', type: 'PERCENT', val: 25, restricted: true },
    ];

    const quickPercents = [5, 10, 15, 20, 25, 50, 100];

    const appendNumber = (num: string) => {
        if (value.length < 5) setValue(prev => prev + num);
    };

    const deleteNumber = () => {
        setValue(prev => prev.slice(0, -1));
    };

    return (
        <div className="fixed inset-0 bg-brand/40 backdrop-blur-md z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300">
            <div className="bg-white rounded-[3.5rem] p-12 max-w-4xl w-full shadow-[0_32px_128px_-16px_rgba(0,0,0,0.3)] animate-in zoom-in duration-300 flex flex-col max-h-[90vh]">
                <header className="flex items-center justify-between mb-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-brand rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Tag size={20} />
                            </div>
                            <h2 className="text-4xl font-black text-brand tracking-tighter">Apply Discount</h2>
                        </div>
                        <p className="text-[10px] font-black text-brand/30 uppercase tracking-[0.4em] ml-1">Promotions & Manual Adjustments</p>
                    </div>
                    <button onClick={onClose} className="w-16 h-16 bg-white border-4 border-brand/5 rounded-3xl flex items-center justify-center text-brand/20 hover:text-brand hover:border-brand/10 transition-all shadow-xl active:scale-90">
                        <X size={32} />
                    </button>
                </header>

                <div className="flex bg-brand/5 p-2 rounded-[2rem] mb-10">
                    <button
                        onClick={() => setMode('LIST')}
                        className={cn(
                            "flex-1 py-5 rounded-[1.5rem] text-xs font-black uppercase tracking-[0.2em] transition-all",
                            mode === 'LIST' ? "bg-white shadow-xl text-brand scale-[1.02]" : "text-brand/30 hover:text-brand/60"
                        )}
                    >
                        Coupon List
                    </button>
                    <button
                        onClick={() => setMode('MANUAL')}
                        className={cn(
                            "flex-1 py-5 rounded-[1.5rem] text-xs font-black uppercase tracking-[0.2em] transition-all",
                            mode === 'MANUAL' ? "bg-white shadow-xl text-brand scale-[1.02]" : "text-brand/30 hover:text-brand/60"
                        )}
                    >
                        Manual Entry
                    </button>
                </div>

                <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* LEFT PANEL */}
                    <div className="flex flex-col">
                        {mode === 'LIST' ? (
                            <div className="space-y-4 overflow-y-auto pr-4 custom-scrollbar">
                                {mockCoupons.map(coupon => (
                                    <button
                                        key={coupon.code}
                                        onClick={() => {
                                            onApply(coupon.type as any, coupon.val);
                                        }}
                                        className="w-full p-8 bg-white border-4 border-brand/5 hover:border-brand/20 rounded-[2.5rem] flex items-center justify-between transition-all group hover:shadow-2xl hover:-translate-y-1"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-brand/5 rounded-3xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all shadow-inner">
                                                <Tag size={24} />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-xl font-black text-brand tracking-tight mb-1">{coupon.code}</div>
                                                <div className="text-[10px] font-bold text-brand/40 uppercase tracking-widest leading-none">{coupon.desc}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            {coupon.restricted && <ShieldCheck size={20} className="text-amber-500" strokeWidth={3} />}
                                            <div className="w-10 h-10 rounded-full border-2 border-brand/10 flex items-center justify-center text-brand/20 group-hover:border-brand group-hover:text-brand transition-all">
                                                <ChevronRight size={20} />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-10">
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setDiscountType('PERCENT')}
                                        className={cn(
                                            "flex-1 py-10 rounded-[2.5rem] border-4 flex flex-col items-center gap-4 transition-all",
                                            discountType === 'PERCENT' ? "bg-brand border-brand text-white shadow-2xl scale-105 z-10" : "bg-white border-brand/5 text-brand/30 shadow-lg shadow-brand/5"
                                        )}
                                    >
                                        <Percent size={32} strokeWidth={3} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Percentage</span>
                                    </button>
                                    <button
                                        onClick={() => setDiscountType('FIXED')}
                                        className={cn(
                                            "flex-1 py-10 rounded-[2.5rem] border-4 flex flex-col items-center gap-4 transition-all",
                                            discountType === 'FIXED' ? "bg-brand border-brand text-white shadow-2xl scale-105 z-10" : "bg-white border-brand/5 text-brand/30 shadow-lg shadow-brand/5"
                                        )}
                                    >
                                        <DollarSign size={32} strokeWidth={3} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Flat Amount</span>
                                    </button>
                                </div>

                                <div className="p-8 bg-amber-50 rounded-[2.5rem] border-4 border-amber-100 flex items-start gap-6 text-amber-700 animate-in slide-in-from-bottom-4 duration-500">
                                    <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-black uppercase tracking-widest mb-2">Manager Review Required</h5>
                                        <p className="text-[11px] font-bold leading-relaxed opacity-80">
                                            Manual discounts over <span className="underline">20%</span> or <span className="underline">$50</span> will automatically trigger a manager PIN request before the final payment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT PANEL: NUMPAD & INPUT */}
                    <div className="bg-brand/5 rounded-[3rem] p-8 flex flex-col h-full min-h-[500px]">
                        <div className="mb-8 relative">
                            <div className="bg-white rounded-[2rem] p-8 shadow-2xl border-4 border-white">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-black text-brand/30 uppercase tracking-[0.2em]">Enter Discount Value</span>
                                    {discountType === 'PERCENT' ? <Percent size={14} className="text-brand/20" /> : <DollarSign size={14} className="text-brand/20" />}
                                </div>
                                <div className="text-6xl font-black text-brand tracking-tighter flex items-end">
                                    {discountType === 'FIXED' && <span className="text-3xl pb-1 opacity-40">$</span>}
                                    {value || '0'}
                                    {discountType === 'PERCENT' && <span className="text-3xl pb-1 opacity-40 ml-1">%</span>}
                                </div>
                            </div>
                        </div>

                        {/* NUMPAD */}
                        <div className="grid grid-cols-3 gap-3 flex-1">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0].map(n => (
                                <button
                                    key={n}
                                    onClick={() => appendNumber(n.toString())}
                                    className="bg-white rounded-2xl shadow-sm text-xl font-black text-brand hover:bg-brand hover:text-white transition-all active:scale-90"
                                >
                                    {n}
                                </button>
                            ))}
                            <button
                                onClick={deleteNumber}
                                className="bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all active:scale-90"
                            >
                                <Delete size={24} />
                            </button>
                        </div>

                        {/* QUICK PERCENTS */}
                        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                            {quickPercents.map(p => (
                                <button
                                    key={p}
                                    onClick={() => { setDiscountType('PERCENT'); setValue(p.toString()); }}
                                    className="flex-shrink-0 px-6 py-3 bg-brand text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand/20 active:scale-95 transition-all"
                                >
                                    {p}%
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-10 border-t-8 border-brand/5 flex gap-6">
                    <button
                        onClick={onClose}
                        className="flex-1 py-7 bg-white border-4 border-brand/5 text-brand/40 rounded-3xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all"
                    >
                        Back to Order
                    </button>
                    <button
                        disabled={mode === 'MANUAL' && !value}
                        onClick={() => onApply(discountType, parseFloat(value))}
                        className="flex-[2] py-7 bg-brand text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] shadow-2xl shadow-brand/30 disabled:opacity-30 disabled:shadow-none transition-all active:scale-95 flex items-center justify-center gap-4"
                    >
                        Apply Adjustment <ChevronRight strokeWidth={4} size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};
