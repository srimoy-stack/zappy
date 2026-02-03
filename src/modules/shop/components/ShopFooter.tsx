'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Package, Facebook, Twitter, Instagram, Send, Globe, ShieldCheck } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ShopFooter: React.FC = () => {
    const { showToast } = useToast();
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return showToast('Identity required for newsletter', 'error');
        showToast('You are now part of the inner circle!', 'success');
        setEmail('');
    };

    return (
        <footer className="bg-white border-t border-slate-100 mt-32 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] -mr-96 -mt-96 opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 py-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Brand */}
                    <div className="space-y-8">
                        <Link href="/shop" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:scale-105 transition-transform">
                                <Package className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black text-slate-900 tracking-tighter">RestoPack</span>
                        </Link>
                        <p className="text-base text-slate-500 font-medium leading-relaxed max-w-xs">
                            Architecting the future of culinary packaging and operational efficiency for modern food empires.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <button key={i} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                                    <Icon size={20} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em] mb-10">Ecosystem</h4>
                        <ul className="space-y-5">
                            {['Packaging', 'Custom Print', 'Software Modules', 'Marketing Services'].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`/shop/${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-2 group"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-emerald-500 transition-colors" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Governance */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em] mb-10">Governance</h4>
                        <ul className="space-y-5">
                            {['Shipping Intel', 'Returns Policy', 'Operational Core', 'Legal Framework'].map((link) => (
                                <li key={link}>
                                    <button
                                        onClick={() => showToast(`Opening ${link}...`, 'info')}
                                        className="text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-2 group"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-emerald-500 transition-colors" />
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em] mb-4">Newsletter</h4>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">Join 500+ restaurateurs receiving exclusive supply chain intel.</p>
                        </div>
                        <form onSubmit={handleSubscribe} className="relative group">
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="vanguard@enterprise.com"
                                className="w-full h-16 pl-6 pr-16 bg-slate-50 rounded-3xl border border-slate-100 font-bold text-sm text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-emerald-600/5 focus:bg-white focus:border-emerald-600 transition-all outline-none"
                            />
                            <button className="absolute right-2 top-2 w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-95">
                                <Send size={18} />
                            </button>
                        </form>
                        <div className="flex items-center gap-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            <ShieldCheck size={14} className="text-emerald-500" />
                            GDPR Compliant Data Handling
                        </div>
                    </div>
                </div>

                {/* Subfooter */}
                <div className="mt-24 pt-10 border-t border-slate-50 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                            © 2024 RestoPack Systems Inc.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <Globe size={14} />
                                Global Fulfillent Engine
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-4" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Stripe_Logo%2C_revised_2016.png" alt="Stripe" className="h-6" />
                    </div>
                </div>
            </div>
        </footer>
    );
};
