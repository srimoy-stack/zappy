'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import {
    Lock, Shield, Loader2, AlertCircle, CheckCircle2, ArrowRight, Eye, EyeOff, KeyRound, Zap
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
    const [showConfirm, setShowConfirm] = useState(false);
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
            <div className="min-h-screen flex items-center justify-center" style={{ background: '#f8fafb' }}>
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="animate-spin" size={36} style={{ color: '#4dbe7e' }} />
                    <p className="text-sm font-medium" style={{ color: '#6b7280' }}>Verifying your invitation...</p>
                </div>
            </div>
        );
    }

    // ─── Error State (invalid/expired token) ────────────────────────
    if (error && !inviteData) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6" style={{ background: '#f8fafb' }}>
                <div className="w-full max-w-[420px]">
                    <div className="flex flex-col items-center mb-8">
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                            style={{ background: '#fef2f2', border: '1px solid #fecaca' }}
                        >
                            <AlertCircle size={32} style={{ color: '#ef4444' }} />
                        </div>
                        <h1 className="text-2xl font-extrabold tracking-tight mb-2" style={{ color: '#1a1a2e' }}>
                            Invalid Invitation
                        </h1>
                        <p className="text-sm text-center max-w-[300px]" style={{ color: '#6b7280' }}>{error}</p>
                    </div>
                    <button
                        onClick={() => router.push('/login')}
                        className="w-full h-[52px] rounded-xl font-bold text-sm text-white transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                        style={{
                            background: 'linear-gradient(135deg, #4dbe7e 0%, #3a9b65 100%)',
                            boxShadow: '0 4px 14px rgba(77,190,126,0.3)',
                        }}
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
            <div className="min-h-screen flex items-center justify-center p-6" style={{ background: '#f8fafb' }}>
                <div className="w-full max-w-[420px]">
                    <div className="flex flex-col items-center">
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                            style={{ background: '#f0fdf4', border: '2px solid #bbf7d0' }}
                        >
                            <CheckCircle2 size={40} style={{ color: '#4dbe7e' }} />
                        </div>
                        <h1 className="text-2xl font-extrabold tracking-tight mb-2" style={{ color: '#1a1a2e' }}>
                            Password Set!
                        </h1>
                        <p className="text-sm text-center" style={{ color: '#6b7280' }}>
                            Logging you in to <span className="font-semibold" style={{ color: '#4dbe7e' }}>{inviteData?.tenant_name}</span>...
                        </p>
                        <Loader2 className="animate-spin mt-6" size={24} style={{ color: '#4dbe7e' }} />
                    </div>
                </div>
            </div>
        );
    }

    // ─── Password Form ──────────────────────────────────────────────
    const errors = passwordErrors();

    return (
        <div className="min-h-screen flex" style={{ background: '#f8fafb' }}>
            {/* Left Panel — Brand */}
            <div
                className="hidden lg:flex lg:w-[52%] relative flex-col justify-between p-12 overflow-hidden"
                style={{
                    background: 'linear-gradient(145deg, #1a3a2a 0%, #2d6b47 50%, #3a9b65 100%)',
                }}
            >
                {/* Decorative shapes */}
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.08]" style={{ background: '#fff' }} />
                <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full opacity-[0.06]" style={{ background: '#fff' }} />

                {/* Logo */}
                <div className="relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <Zap className="text-white" size={20} strokeWidth={2.5} />
                        </div>
                        <h1 className="text-xl font-extrabold text-white tracking-tight">ZYAPPY</h1>
                    </div>
                </div>

                {/* Hero */}
                <div className="relative z-10 flex flex-col gap-8">
                    <div>
                        <h2 className="text-4xl xl:text-[2.75rem] font-extrabold text-white leading-[1.15] tracking-tight mb-4">
                            You&apos;re almost<br />
                            there.
                        </h2>
                        <p className="text-white/95 text-[15px] leading-relaxed max-w-[380px]">
                            Set a secure password to activate your account and start
                            managing your workspace. Your administrator has already
                            configured your access and permissions.
                        </p>
                    </div>

                    {/* Info cards */}
                    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 space-y-0 divide-y divide-white/15">
                        <div className="flex items-center gap-3.5 pb-4">
                            <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                                <Shield size={16} className="text-white" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-[13px] leading-tight">Secure Setup</p>
                                <p className="text-white/80 text-[11px] leading-snug mt-0.5">Single-use link with 48h expiry</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3.5 pt-4">
                            <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                                <KeyRound size={16} className="text-white" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-[13px] leading-tight">Instant Access</p>
                                <p className="text-white/80 text-[11px] leading-snug mt-0.5">Auto-login after password is set</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10">
                    <div className="h-px bg-white/20 mb-5" />
                    <p className="text-white/55 text-[11px] font-medium">
                        © {new Date().getFullYear()} Zyappy Technologies · All rights reserved.
                    </p>
                </div>
            </div>

            {/* Right Panel — Password Form */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-10 relative">
                {/* Subtle brand gradient accent */}
                <div
                    className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at top right, #4dbe7e, transparent 70%)',
                    }}
                />

                <div className="w-full max-w-[400px] relative z-10">
                    {/* Logo */}
                    <div className="flex flex-col items-center mb-8">
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                            style={{
                                background: 'linear-gradient(135deg, #4dbe7e 0%, #3a9b65 100%)',
                                boxShadow: '0 8px 24px rgba(77,190,126,0.25)',
                            }}
                        >
                            <KeyRound className="text-white" size={26} strokeWidth={2.5} />
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tight" style={{ color: '#1a1a2e' }}>ZYAPPY</h1>
                    </div>

                    {/* Welcome */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-extrabold tracking-tight mb-2" style={{ color: '#1a1a2e' }}>
                            Welcome, {inviteData?.user_name}! 👋
                        </h2>
                        <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                            You&apos;ve been invited to join{' '}
                            <span className="font-semibold" style={{ color: '#4dbe7e' }}>{inviteData?.tenant_name}</span>.
                            Set your password below to activate your account.
                        </p>
                    </div>

                    {/* Email Badge */}
                    <div
                        className="rounded-xl p-3 mb-6 flex items-center gap-3"
                        style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}
                    >
                        <Shield className="shrink-0" size={16} style={{ color: '#4dbe7e' }} />
                        <span className="text-sm font-medium truncate" style={{ color: '#374151' }}>
                            {inviteData?.user_email}
                        </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* New Password */}
                        <div>
                            <label
                                htmlFor="accept-invite-password"
                                className="block text-xs font-bold uppercase tracking-wider mb-2"
                                style={{ color: '#374151' }}
                            >
                                New Password
                            </label>
                            <div className="relative group">
                                <Lock
                                    className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors"
                                    size={18}
                                    style={{ color: '#9ca3af' }}
                                />
                                <input
                                    id="accept-invite-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Minimum 8 characters"
                                    className="w-full h-[52px] rounded-xl pl-12 pr-12 text-sm font-medium outline-none transition-all"
                                    style={{
                                        background: '#ffffff',
                                        border: '1.5px solid #e5e7eb',
                                        color: '#1a1a2e',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = '#4dbe7e';
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(77,190,126,0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = '#e5e7eb';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                    required
                                    minLength={8}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-0.5 rounded-md transition-colors"
                                    style={{ color: '#9ca3af' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#4dbe7e')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                                    tabIndex={-1}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="accept-invite-confirm"
                                className="block text-xs font-bold uppercase tracking-wider mb-2"
                                style={{ color: '#374151' }}
                            >
                                Confirm Password
                            </label>
                            <div className="relative group">
                                <Lock
                                    className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors"
                                    size={18}
                                    style={{ color: '#9ca3af' }}
                                />
                                <input
                                    id="accept-invite-confirm"
                                    type={showConfirm ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Re-enter your password"
                                    className="w-full h-[52px] rounded-xl pl-12 pr-12 text-sm font-medium outline-none transition-all"
                                    style={{
                                        background: '#ffffff',
                                        border: '1.5px solid #e5e7eb',
                                        color: '#1a1a2e',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = '#4dbe7e';
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(77,190,126,0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = '#e5e7eb';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                    required
                                    minLength={8}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-0.5 rounded-md transition-colors"
                                    style={{ color: '#9ca3af' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#4dbe7e')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                                    tabIndex={-1}
                                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                                >
                                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Validation Errors */}
                        {errors.length > 0 && (
                            <div
                                className="flex items-start gap-3 p-4 rounded-xl"
                                style={{ background: '#fffbeb', border: '1px solid #fde68a' }}
                            >
                                <AlertCircle size={16} className="shrink-0 mt-0.5" style={{ color: '#f59e0b' }} />
                                <div className="text-xs font-semibold space-y-1" style={{ color: '#b45309' }}>
                                    {errors.map((err, i) => (
                                        <p key={i}>{err}</p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Submit Error */}
                        {error && (
                            <div
                                className="flex items-start gap-3 p-4 rounded-xl"
                                style={{ background: '#fef2f2', border: '1px solid #fecaca' }}
                            >
                                <AlertCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                                <p className="text-xs font-semibold leading-relaxed" style={{ color: '#dc2626' }}>
                                    {error}
                                </p>
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            id="accept-invite-submit"
                            type="submit"
                            disabled={submitting || !isFormValid}
                            className="w-full h-[52px] rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                            style={{
                                background: submitting || !isFormValid
                                    ? '#94a3b8'
                                    : 'linear-gradient(135deg, #4dbe7e 0%, #3a9b65 100%)',
                                boxShadow: submitting || !isFormValid
                                    ? 'none'
                                    : '0 4px 14px rgba(77,190,126,0.3)',
                            }}
                        >
                            {submitting ? (
                                <Loader2 className="animate-spin" size={20} />
                            ) : (
                                <>
                                    Set Password & Login
                                    <ArrowRight size={16} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>
                            Secure invitation · Single-use link · 48h expiry
                        </p>
                        <p className="text-[11px] mt-3" style={{ color: '#c4c9d2' }}>
                            © {new Date().getFullYear()} Zyappy Technologies · Need help? Contact{' '}
                            <span className="font-semibold" style={{ color: '#4dbe7e' }}>support@zyappy.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
