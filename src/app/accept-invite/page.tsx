'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import {
    Lock, Shield, Loader2, AlertCircle, CheckCircle2, ArrowRight, Eye, EyeOff, KeyRound
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api';

interface InvitationData {
    valid: boolean;
    method: string;
    user_name: string;
    user_email: string;
    tenant_name: string;
    expires_at: string;
    reason?: string;
    message?: string;
}

export default function AcceptInvitePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [inviteData, setInviteData] = useState<InvitationData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Password form
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    // Validate token on mount
    useEffect(() => {
        if (!token) {
            setError('No invitation token provided. Please check your email for the correct link.');
            setLoading(false);
            return;
        }

        const validateToken = async () => {
            try {
                const res = await fetch(`${API_URL}/invitations/${token}/validate`);
                const data = await res.json();

                if (data.valid) {
                    setInviteData(data);
                } else {
                    setError(data.message || 'This invitation is no longer valid.');
                }
            } catch {
                setError('Unable to verify your invitation. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        validateToken();
    }, [token]);

    // Password validation
    const passwordErrors = useCallback(() => {
        const errors: string[] = [];
        if (password.length > 0 && password.length < 8) errors.push('At least 8 characters');
        if (confirmPassword.length > 0 && password !== confirmPassword) errors.push('Passwords do not match');
        return errors;
    }, [password, confirmPassword]);

    const isFormValid = password.length >= 8 && password === confirmPassword;

    // Submit — accept invitation and set password
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid || !token) return;

        setSubmitting(true);
        setError(null);

        try {
            const res = await fetch(`${API_URL}/invitations/${token}/accept`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    password,
                    password_confirmation: confirmPassword,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || data.error || 'Failed to set password. Please try again.');
                return;
            }

            setSuccess(true);

            // Auto-login via NextAuth using the new credentials
            setTimeout(async () => {
                const result = await signIn('credentials', {
                    email: inviteData?.user_email,
                    password,
                    redirect: false,
                });

                if (result?.ok) {
                    router.push('/backoffice/home');
                    router.refresh();
                } else {
                    // Fallback — redirect to login page
                    router.push('/login');
                }
            }, 1500);
        } catch {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    // ─── Loading State ──────────────────────────────────────────────
    if (loading) {
        return (
            <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="animate-spin text-emerald-500" size={40} />
                    <p className="text-slate-400 text-sm font-medium">Verifying your invitation...</p>
                </div>
            </div>
        );
    }

    // ─── Error State (invalid/expired token) ────────────────────────
    if (error && !inviteData) {
        return (
            <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6">
                <div className="w-full max-w-[420px] animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                            <AlertCircle className="text-red-400" size={32} />
                        </div>
                        <h1 className="text-2xl font-black text-white tracking-tight mb-2">Invalid Invitation</h1>
                        <p className="text-slate-400 text-sm text-center max-w-[300px]">{error}</p>
                    </div>
                    <button
                        onClick={() => router.push('/login')}
                        className="w-full h-13 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                    >
                        Go to Login
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        );
    }

    // ─── Success State ──────────────────────────────────────────────
    if (success) {
        return (
            <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6">
                <div className="w-full max-w-[420px] animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500">
                            <CheckCircle2 className="text-emerald-400" size={40} />
                        </div>
                        <h1 className="text-2xl font-black text-white tracking-tight mb-2">Password Set!</h1>
                        <p className="text-slate-400 text-sm text-center">
                            Logging you in to <span className="text-emerald-400 font-semibold">{inviteData?.tenant_name}</span>...
                        </p>
                        <Loader2 className="animate-spin text-emerald-500 mt-6" size={24} />
                    </div>
                </div>
            </div>
        );
    }

    // ─── Password Form ──────────────────────────────────────────────
    const errors = passwordErrors();

    return (
        <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
            </div>

            <div className="w-full max-w-[420px] relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {/* Logo Area */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/20 mb-6 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <KeyRound className="text-white" size={32} strokeWidth={2.5} />
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tighter mb-2">ZYAPPY</h1>
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Set Your Password</p>
                </div>

                {/* Card */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-[2rem] p-8 shadow-2xl">
                    {/* Welcome Info */}
                    <div className="mb-6">
                        <h2 className="text-xl font-black text-white tracking-tight">
                            Welcome, {inviteData?.user_name}! 👋
                        </h2>
                        <p className="text-slate-400 text-sm mt-2">
                            You've been invited to join <span className="text-emerald-400 font-semibold">{inviteData?.tenant_name}</span>.
                            Set your password below to activate your account.
                        </p>
                    </div>

                    {/* Email Display */}
                    <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-3 mb-6 flex items-center gap-3">
                        <Shield className="text-emerald-500 shrink-0" size={16} />
                        <span className="text-slate-300 text-sm font-medium truncate">{inviteData?.user_email}</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* New Password */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                                New Password
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                <input
                                    id="accept-invite-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Minimum 8 characters"
                                    className="w-full h-13 bg-slate-950/50 border border-slate-800 rounded-xl pl-12 pr-12 text-white font-medium placeholder:text-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all"
                                    required
                                    minLength={8}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                                Confirm Password
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                <input
                                    id="accept-invite-confirm"
                                    type={showPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Re-enter your password"
                                    className="w-full h-13 bg-slate-950/50 border border-slate-800 rounded-xl pl-12 pr-4 text-white font-medium placeholder:text-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all"
                                    required
                                    minLength={8}
                                    autoComplete="new-password"
                                />
                            </div>
                        </div>

                        {/* Validation Errors */}
                        {errors.length > 0 && (
                            <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 animate-in fade-in duration-300">
                                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                                <div className="text-xs font-bold space-y-1">
                                    {errors.map((err, i) => (
                                        <p key={i}>{err}</p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Submit Error */}
                        {error && (
                            <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 animate-in fade-in duration-300">
                                <AlertCircle size={18} className="shrink-0" />
                                <p className="text-xs font-bold leading-tight">{error}</p>
                            </div>
                        )}

                        <button
                            id="accept-invite-submit"
                            type="submit"
                            disabled={submitting || !isFormValid}
                            className="w-full h-13 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-600 text-white rounded-xl font-bold text-sm shadow-xl shadow-emerald-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-2"
                        >
                            {submitting ? (
                                <Loader2 className="animate-spin text-white" size={20} />
                            ) : (
                                <>
                                    Set Password & Login
                                    <ArrowRight size={16} />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                        Secure Invitation • Single-Use Link • 48h Expiry
                    </p>
                </div>
            </div>
        </div>
    );
}
