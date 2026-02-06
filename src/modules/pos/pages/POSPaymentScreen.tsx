'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    CreditCard,
    Banknote,
    Smartphone,
    Gift,
    Split,
    CheckCircle2,
    ArrowLeft,
    ArrowRight
} from 'lucide-react';


export const POSPaymentScreen: React.FC = () => {
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState<'CASH' | 'CARD' | 'TERMINAL' | 'WALLET' | 'GIFT' | 'SPLIT' | null>(null);
    const [amountPaid, setAmountPaid] = useState<string>('42.50'); // Mock total
    const [tipAmount, setTipAmount] = useState<string>('0');
    const [processing, setProcessing] = useState(false);
    const [status, setStatus] = useState<'IDLE' | 'SUCCESS' | 'FAILURE'>('IDLE');

    const total = 42.50; // Mock total for demo

    const handlePayment = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setStatus('SUCCESS');
        }, 1500);
    };

    if (status === 'SUCCESS') {
        return (
            <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-6 animate-in zoom-in duration-300">
                <div className="w-32 h-32 bg-brand rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-brand/40">
                    <CheckCircle2 size={64} />
                </div>
                <h1 className="text-4xl font-black text-brand tracking-tighter mb-2">Payment Authorized</h1>
                <p className="text-brand/40 font-bold uppercase text-[10px] tracking-[0.3em] mb-12">Transaction ID: ZP-9928-8812</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => router.push('/pos/confirmation')}
                        className="px-12 py-5 bg-brand text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-brand/20 hover:bg-brand-dark transition-all flex items-center gap-2"
                    >
                        Completion Workflow
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-white text-brand font-sans overflow-hidden">
            {/* LEFT: SUMMARY (Read-only) */}
            <aside className="w-80 md:w-96 bg-brand/5 border-r border-brand/10 flex flex-col flex-shrink-0 animate-in slide-in-from-left duration-500">
                <header className="p-8 border-b border-brand/10 bg-white flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 border border-brand/10 rounded-lg text-brand/40 hover:text-brand">
                        <ArrowLeft size={20} />
                    </button>
                    <h3 className="text-xl font-black text-brand tracking-tight">Order Summary</h3>
                </header>
                <div className="flex-1 overflow-y-auto p-8 space-y-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h4 className="text-sm font-black">Pepperoni Pizza</h4>
                                <p className="text-[10px] font-bold text-brand/40 uppercase tracking-widest">Large • Extra Cheese</p>
                            </div>
                            <span className="text-sm font-black">$24.00</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h4 className="text-sm font-black">Garlic Knots</h4>
                                <p className="text-[10px] font-bold text-brand/40 uppercase tracking-widest">6 Pieces</p>
                            </div>
                            <span className="text-sm font-black">$12.50</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h4 className="text-sm font-black">Coca Cola</h4>
                                <p className="text-[10px] font-bold text-brand/40 uppercase tracking-widest">500ml</p>
                            </div>
                            <span className="text-sm font-black">$6.00</span>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-brand/10 space-y-2">
                        <div className="flex justify-between text-xs font-bold text-brand/40 uppercase tracking-widest">
                            <span>Subtotal</span>
                            <span>$42.50</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold text-brand/40 uppercase tracking-widest">
                            <span>Tax</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between text-2xl font-black text-brand pt-4">
                            <span className="uppercase tracking-tighter">Due Now</span>
                            <span className="tracking-tighter">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* CENTER: PAYMENT METHODS & INPUT (Section 11) */}
            <main className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar">
                <div className="p-12 max-w-4xl mx-auto w-full space-y-12">
                    {/* Payment Types */}
                    <section>
                        <h4 className="text-xs font-black text-brand uppercase tracking-[0.2em] mb-6">Execution Method</h4>
                        <div className="grid grid-cols-3 gap-6">
                            {[
                                { id: 'CASH', icon: Banknote, label: 'Cash Entry' },
                                { id: 'CARD', icon: CreditCard, label: 'Swipe/Dip' },
                                { id: 'TERMINAL', icon: Smartphone, label: 'Contactless' },
                                { id: 'WALLET', icon: Smartphone, label: 'E-Wallet' },
                                { id: 'GIFT', icon: Gift, label: 'Gift Token' },
                                { id: 'SPLIT', icon: Split, label: 'Partial Split' }
                            ].map(method => (
                                <button
                                    key={method.id}
                                    onClick={() => setPaymentMethod(method.id as any)}
                                    className={`group h-32 rounded-[2rem] border-4 flex flex-col items-center justify-center transition-all relative ${paymentMethod === method.id ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20' : 'bg-white border-brand/5 hover:border-brand/40 text-brand'}`}
                                >
                                    <method.icon size={24} className="mb-2" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{method.label}</span>
                                    {paymentMethod === method.id && (
                                        <div className="absolute top-4 right-4 text-white">
                                            <CheckCircle2 size={16} />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Tip Handling (Section 11) */}
                    <section>
                        <h4 className="text-xs font-black text-brand uppercase tracking-[0.2em] mb-6">Service Gratuity</h4>
                        <div className="grid grid-cols-4 gap-4">
                            {[0, 5, 10, 15].map(pct => (
                                <button
                                    key={pct}
                                    onClick={() => setTipAmount(((total * pct) / 100).toFixed(2))}
                                    className={`py-4 rounded-xl border-2 text-xs font-black transition-all ${parseFloat(tipAmount) > 0 && Math.abs(parseFloat(tipAmount) - (total * pct) / 100) < 0.01 ? 'bg-brand border-brand text-white' : 'bg-white border-brand/5 hover:border-brand text-brand'}`}
                                >
                                    {pct}% {pct > 0 && `($${((total * pct) / 100).toFixed(2)})`}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Amount Input Pad (Simplified) */}
                    <section className="bg-brand/5 p-10 rounded-[3rem] border border-brand/10">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <span className="text-[10px] font-black text-brand/40 uppercase tracking-widest">Settlement Amount</span>
                                <div className="text-5xl font-black text-brand tracking-tighter">${amountPaid}</div>
                            </div>
                            {paymentMethod === 'CASH' && parseFloat(amountPaid) > (total + parseFloat(tipAmount)) && (
                                <div className="text-right animate-in fade-in slide-in-from-right duration-500">
                                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Change to Return</span>
                                    <div className="text-4xl font-black text-emerald-600 tracking-tighter">
                                        ${(parseFloat(amountPaid) - (total + parseFloat(tipAmount))).toFixed(2)}
                                    </div>
                                </div>
                            )}
                            <div className="text-right">
                                <span className="text-[10px] font-black text-brand/40 uppercase tracking-widest">Post-Tip Total</span>
                                <div className="text-2xl font-black text-brand tracking-tighter">${(total + parseFloat(tipAmount)).toFixed(2)}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, '$10', 4, 5, 6, '$20', 7, 8, 9, '$50', '.', 0, 'CLR', 'OK'].map(key => (
                                <button
                                    key={key}
                                    onClick={() => {
                                        if (key === 'CLR') setAmountPaid('0');
                                        else if (key === 'OK') handlePayment();
                                        else if (typeof key === 'string' && key.startsWith('$')) {
                                            setAmountPaid(key.replace('$', ''));
                                        } else {
                                            setAmountPaid(prev => prev === '0' ? key.toString() : prev + key.toString());
                                        }
                                    }}
                                    className="h-16 bg-white border border-brand/10 rounded-2xl text-lg font-black text-brand hover:border-brand hover:bg-brand/5 active:scale-95 transition-all shadow-sm"
                                >
                                    {key}
                                </button>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            {/* RIGHT: ACTION PANEL (Section 11) */}
            <aside className="w-80 md:w-96 bg-white border-l border-brand/10 flex flex-col flex-shrink-0">
                <div className="p-8 border-b border-brand/10">
                    <h3 className="text-xl font-black text-brand tracking-tight">Validation</h3>
                </div>
                <div className="flex-1 p-8 space-y-8 flex flex-col">
                    <div className="p-6 bg-brand/5 rounded-2xl border border-brand/10 space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-brand/40">
                            <span>Status</span>
                            <span className="text-brand">Payment Required</span>
                        </div>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-brand/40">
                            <span>Network</span>
                            <span className="text-brand">Secure Link Active</span>
                        </div>
                    </div>

                    <div className="flex-1"></div>

                    <button
                        onClick={handlePayment}
                        disabled={!paymentMethod || processing}
                        className={`w-full py-6 rounded-2xl text-sm font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${paymentMethod && !processing ? 'bg-brand text-white shadow-xl shadow-brand/20 hover:bg-brand-dark' : 'bg-brand/5 text-brand/20 cursor-not-allowed'}`}
                    >
                        {processing ? 'Authorizing...' : (
                            <>
                                Authorize ${(total + parseFloat(tipAmount)).toFixed(2)}
                                <ArrowRight size={20} />
                            </>
                        )}
                    </button>

                    <button className="text-[10px] font-black text-brand/30 uppercase tracking-widest hover:text-brand transition-all text-center">
                        Cancel & Clear Entry
                    </button>
                </div>
            </aside>
        </div>
    );
};
