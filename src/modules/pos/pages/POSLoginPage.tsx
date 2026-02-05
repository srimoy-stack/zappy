'use client';

import React, { useState } from 'react';
import { POSType } from '@/modules/pos/types/pos';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter } from 'next/navigation';
import { Store, PhoneCall } from 'lucide-react';

export const POSLoginPage: React.FC = () => {
    const [posType, setPosType] = useState<POSType>('STORE');
    const [pin, setPin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { login, session } = usePOS();
    const router = useRouter();

    const handleLogin = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await login(posType, { pin, email, password });
            // Redirect will be handled by the next screen logic usually in a layout or specific page
            // But here we can check accessible stores
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // If session exist and has store, go to channel selection, else store selection
    React.useEffect(() => {
        if (session?.user) {
            if (session.store) {
                router.push('/pos/channel-selection');
            } else {
                router.push('/pos/store-selection');
            }
        }
    }, [session, router]);

    const handlePinPress = (val: string) => {
        if (pin.length < 6) setPin(prev => prev + val);
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 font-sans">
            <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Variant Switcher */}
                <div className="flex p-2 bg-slate-50 border-b border-slate-100">
                    <button
                        onClick={() => { setPosType('STORE'); setError(null); }}
                        className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-black transition-all ${posType === 'STORE' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'text-slate-400 hover:bg-slate-100'
                            }`}
                    >
                        <Store size={18} />
                        STORE POS
                    </button>
                    <button
                        onClick={() => { setPosType('CALL_CENTER'); setError(null); }}
                        className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-black transition-all ${posType === 'CALL_CENTER' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-400 hover:bg-slate-100'
                            }`}
                    >
                        <PhoneCall size={18} />
                        CALL CENTER
                    </button>
                </div>

                <div className="p-8 pb-12">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                            <span className="text-white text-2xl font-black">Z</span>
                        </div>
                        <h1 className="text-2xl font-black text-slate-900 tracking-tight">POS Login</h1>
                        <p className="text-slate-500 text-sm font-medium mt-1">
                            {posType === 'STORE' ? 'Enter your staff PIN to begin' : 'Login to call center environment'}
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl text-rose-600 text-sm font-bold animate-in slide-in-from-top-2">
                            {error}
                        </div>
                    )}

                    {posType === 'STORE' ? (
                        <div className="space-y-6">
                            {/* PIN Display */}
                            <div className="flex justify-center gap-3">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${pin.length > i ? 'bg-slate-900 border-slate-900 scale-110' : 'bg-transparent border-slate-200'
                                        }`} />
                                ))}
                            </div>

                            {/* Numpad */}
                            <div className="grid grid-cols-3 gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, 'OK'].map((val) => (
                                    <button
                                        key={val}
                                        onClick={() => {
                                            if (val === 'C') setPin('');
                                            else if (val === 'OK') handleLogin();
                                            else handlePinPress(val.toString());
                                        }}
                                        className={`h-16 rounded-2xl flex items-center justify-center text-xl font-black transition-all active:scale-90 ${val === 'OK' ? 'bg-emerald-600 text-white hover:bg-emerald-700 col-span-1' :
                                            val === 'C' ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' :
                                                'bg-slate-50 text-slate-900 hover:bg-slate-100'
                                            }`}
                                    >
                                        {val}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-bold focus:border-blue-600 focus:bg-white outline-none transition-all"
                                    placeholder="agent@zyappy.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-bold focus:border-blue-600 focus:bg-white outline-none transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-50 mt-4"
                            >
                                {loading ? 'Authenticating...' : 'ACCESS CALL CENTER'}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <p className="mt-8 text-slate-500 text-xs font-bold tracking-widest uppercase">
                Zyappy POS v1.0 • Modern Fast Login
            </p>
        </div>
    );
};
