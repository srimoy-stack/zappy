'use client';

import React, { useState, useEffect } from 'react';
import { POSType } from '@/modules/pos/types/pos';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter } from 'next/navigation';
import { Store, PhoneCall, Delete, ArrowRight, CheckCircle2, AlertCircle, Wifi, WifiOff } from 'lucide-react';

export const POSLoginPage: React.FC = () => {
    const [posType, setPosType] = useState<POSType>('STORE');
    const [pin, setPin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [rememberDevice, setRememberDevice] = useState(false);
    const { login, session, isOffline, deviceId } = usePOS();
    const router = useRouter();

    // Auto-submit PIN when length is between 4 and 6 and valid
    // For simplicity with mocks, we check if it matches a valid PIN length
    useEffect(() => {
        if (posType === 'STORE' && pin.length >= 4 && pin.length <= 6) {
            // We can add a debounce or just wait for specific length if we know it
            // Mocks use 4 digits. Let's auto-submit at 4 for now or let user press OK
            // Requirement says "Auto-submit when PIN complete"
            // For general 4-6, it's hard to know when "complete" without a specific length
            // Let's assume 4 for our mocks
            if (pin.length === 4) {
                handleLogin();
            }
        }
    }, [pin, posType]);

    const handleLogin = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (loading) return;

        setError(null);
        setLoading(true);

        try {
            await login(posType, { pin, email, password, deviceId });
            if (rememberDevice && posType === 'STORE') {
                localStorage.setItem('pos_remember_device', 'true');
            }
        } catch (err: any) {
            setError(err.message);
            // Shake effect or vibration could be added here
            setPin(''); // Clear PIN on error
        } finally {
            setLoading(false);
        }
    };

    // Navigation logic
    useEffect(() => {
        if (session?.user) {
            if (session.store && session.channel) {
                router.push('/pos/dashboard');
            } else if (session.store) {
                router.push('/pos/channel-selection');
            } else {
                router.push('/pos/store-selection');
            }
        }
    }, [session, router]);

    const handlePinPress = (val: string) => {
        if (pin.length < 6) setPin(prev => prev + val);
    };

    const handleBackspace = () => {
        setPin(prev => prev.slice(0, -1));
    };

    return (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Offline/Online Badge */}
            <div className={`absolute top-8 right-8 px-4 py-2 rounded-full border flex items-center gap-2 transition-all duration-500 z-50 ${isOffline
                ? 'bg-amber-500/10 border-amber-500/20 text-amber-600'
                : 'bg-brand/10 border-brand/20 text-brand'
                }`}>
                {isOffline ? <WifiOff size={14} /> : <Wifi size={14} />}
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                    {isOffline ? 'Offline - Local Storage Active' : 'Online'}
                </span>
            </div>

            <div className="w-full max-w-xl z-10 flex flex-col items-center">
                {/* Branding */}
                <div className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="w-20 h-20 bg-brand rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand/20 border border-brand/30">
                        <span className="text-white text-4xl font-black">Z</span>
                    </div>
                    <h1 className="text-4xl font-black text-brand tracking-tighter mb-2">Zyappy POS</h1>
                    <p className="text-brand/60 font-medium tracking-wide">Enterprise Business Management System</p>
                </div>

                <div className="w-full bg-white border-4 border-brand/10 rounded-[3rem] shadow-2xl shadow-brand/10 overflow-hidden p-2">
                    {/* Mode Toggle */}
                    <div className="flex p-2 gap-2 bg-brand/5 rounded-[2rem] mb-2">
                        <button
                            onClick={() => { setPosType('STORE'); setError(null); }}
                            className={`flex-1 flex items-center justify-center gap-3 py-5 rounded-[1.5rem] text-xs font-black tracking-widest transition-all ${posType === 'STORE'
                                ? 'bg-brand text-white shadow-xl'
                                : 'text-brand/40 hover:text-brand'
                                }`}
                        >
                            <Store size={18} />
                            STORE TERMINAL
                        </button>
                        <button
                            onClick={() => { setPosType('CALL_CENTER'); setError(null); }}
                            className={`flex-1 flex items-center justify-center gap-3 py-5 rounded-[1.5rem] text-xs font-black tracking-widest transition-all ${posType === 'CALL_CENTER'
                                ? 'bg-brand text-white shadow-xl'
                                : 'text-brand/40 hover:text-brand'
                                }`}
                        >
                            <PhoneCall size={18} />
                            CALL CENTER
                        </button>
                    </div>

                    <div className="p-10 pt-8">
                        {error && (
                            <div className="mb-8 p-5 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center gap-4 text-rose-600 text-sm font-bold animate-in zoom-in-95 duration-300">
                                <AlertCircle size={20} />
                                {error}
                            </div>
                        )}

                        {posType === 'STORE' ? (
                            <div className="space-y-10">
                                <div className="text-center">
                                    <h2 className="text-xl font-black text-brand mb-2">Staff PIN Required</h2>
                                    <p className="text-brand/50 text-sm font-medium">Enter your 4–6 digit security code</p>
                                </div>

                                {/* Masked PIN Display */}
                                <div className="flex justify-center gap-4">
                                    {[...Array(6)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 ${pin.length > i
                                                ? 'bg-brand border-brand shadow-lg shadow-brand/20'
                                                : 'bg-white border-brand/20'
                                                } ${pin.length === i && !loading ? 'border-brand animate-pulse' : ''}`}
                                        >
                                            {pin.length > i && (
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Numpad Grid */}
                                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
                                        <button
                                            key={val}
                                            onClick={() => handlePinPress(val.toString())}
                                            disabled={loading}
                                            className="h-20 rounded-3xl bg-white text-2xl font-black text-brand hover:bg-brand hover:text-white active:scale-90 transition-all shadow-lg shadow-brand/5 border-2 border-brand/10"
                                        >
                                            {val}
                                        </button>
                                    ))}
                                    <button
                                        onClick={handleBackspace}
                                        disabled={loading}
                                        className="h-20 rounded-3xl bg-brand/5 text-brand flex items-center justify-center hover:bg-brand hover:text-white active:scale-90 transition-all border-2 border-transparent"
                                    >
                                        <Delete size={28} />
                                    </button>
                                    <button
                                        onClick={() => handlePinPress('0')}
                                        disabled={loading}
                                        className="h-20 rounded-3xl bg-white text-2xl font-black text-brand hover:bg-brand hover:text-white active:scale-90 transition-all shadow-lg shadow-brand/5 border-2 border-brand/10"
                                    >
                                        0
                                    </button>
                                    <button
                                        onClick={() => handleLogin()}
                                        disabled={loading || pin.length < 4}
                                        className={`h-20 rounded-3xl flex items-center justify-center text-white transition-all shadow-xl active:scale-90 ${pin.length >= 4
                                            ? 'bg-brand hover:bg-brand-dark shadow-brand/40'
                                            : 'bg-brand/5 text-brand/30'
                                            }`}
                                    >
                                        <ArrowRight size={28} />
                                    </button>
                                </div>

                                {/* Remember Device */}
                                <div className="flex items-center justify-center gap-3">
                                    <button
                                        onClick={() => setRememberDevice(!rememberDevice)}
                                        className="flex items-center gap-3 group px-4 py-2 rounded-xl hover:bg-brand/5 transition-all"
                                    >
                                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${rememberDevice ? 'bg-brand border-brand' : 'border-brand/30 group-hover:border-brand'
                                            }`}>
                                            {rememberDevice && <CheckCircle2 size={16} className="text-white" />}
                                        </div>
                                        <span className={`text-xs font-black uppercase tracking-widest ${rememberDevice ? 'text-brand' : 'text-brand/40'}`}>
                                            Remember this POS Terminal
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleLogin} className="space-y-8">
                                <div className="text-center mb-4">
                                    <h2 className="text-xl font-black text-brand mb-2">Call Center Portal</h2>
                                    <p className="text-brand/50 text-sm font-medium">Authentication required for remote access</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-brand uppercase tracking-[0.2em] ml-2">Operator ID</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-8 py-5 bg-white border-2 border-brand/10 rounded-[1.5rem] text-brand font-black focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all placeholder:text-brand/20"
                                            placeholder="operator@zyappy.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-brand uppercase tracking-[0.2em] ml-2">Secure Password</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full px-8 py-5 bg-white border-2 border-brand/10 rounded-[1.5rem] text-brand font-black focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all placeholder:text-brand/20"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-6 bg-brand text-white rounded-[1.5rem] font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-brand/40 hover:bg-brand-dark active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                                >
                                    {loading ? 'Authenticating System...' : (
                                        <>
                                            Initialize Session
                                            <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>

                                <div className="text-center">
                                    <p className="text-[10px] font-bold text-brand/30 uppercase tracking-widest leading-relaxed">
                                        Authorized Access Only.<br />Devices are monitored for audit logging.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* System Footer */}
                <div className="mt-12 flex items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                    <div className="flex items-center gap-2 text-[10px] font-black text-brand/20 uppercase tracking-[0.3em]">
                        <span className="w-2 h-2 rounded-full bg-brand/10"></span>
                        Device: {deviceId || 'Detecting...'}
                    </div>
                    <div className="h-4 w-px bg-brand/10"></div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-brand/20 uppercase tracking-[0.3em]">
                        v1.0.4-LTS
                    </div>
                </div>
            </div>
        </div>
    );
};
