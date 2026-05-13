'use client';

/**
 * /{slug}/login — Branded Tenant Login Page
 *
 * Fetches tenant branding (name, logo) from the public API and displays
 * a tenant-branded login form. After successful auth, redirects to /{slug}/home.
 */

import React, { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import { Lock, Mail, Loader2, AlertCircle, ArrowRight, Building2 } from 'lucide-react';
import axios from 'axios';

interface TenantBranding {
    id: string;
    name: string;
    slug: string;
    status: string;
    logo: string | null;
}

export default function BrandedLoginPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [tenant, setTenant] = useState<TenantBranding | null>(null);
    const [tenantLoading, setTenantLoading] = useState(true);
    const [tenantNotFound, setTenantNotFound] = useState(false);

    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

    // Fetch tenant branding
    useEffect(() => {
        if (!slug) return;
        axios.get(`${apiBase}/tenants/by-slug/${slug}`)
            .then(({ data }) => {
                if (data.status === 'suspended' || data.status === 'deleted') {
                    setTenantNotFound(true);
                } else {
                    setTenant(data);
                }
            })
            .catch(() => setTenantNotFound(true))
            .finally(() => setTenantLoading(false));
    }, [slug, apiBase]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError('Invalid credentials. Please check your email and password.');
            } else {
                router.push(`/${slug}/home`);
            }
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (tenantLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-white/50" />
            </div>
        );
    }

    if (tenantNotFound) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-md w-full text-center">
                    <Building2 className="w-16 h-16 text-rose-400 mx-auto mb-4" />
                    <h1 className="text-2xl font-black text-white mb-2">Organization Not Found</h1>
                    <p className="text-white/50 text-sm">
                        The organization <span className="font-mono text-white/70">{slug}</span> does not exist or has been deactivated.
                    </p>
                    <button onClick={() => router.push('/login')}
                        className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-xl transition-all">
                        Go to Main Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                {/* Branding Header */}
                <div className="text-center mb-8">
                    {tenant?.logo ? (
                        <img src={tenant.logo} alt={tenant.name} className="h-16 mx-auto mb-4 object-contain" />
                    ) : (
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/30">
                            <span className="text-2xl font-black text-white">
                                {tenant?.name?.charAt(0) || 'Z'}
                            </span>
                        </div>
                    )}
                    <h1 className="text-3xl font-black text-white tracking-tight">{tenant?.name}</h1>
                    <p className="text-white/40 text-sm font-medium mt-1">Sign in to your workspace</p>
                </div>

                {/* Login Form */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <form onSubmit={handleLogin} className="space-y-5">
                        {error && (
                            <div className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                                <AlertCircle size={14} className="text-rose-400 shrink-0" />
                                <span className="text-xs font-bold text-rose-400">{error}</span>
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-black text-white/60 uppercase tracking-wider mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                                    placeholder="you@company.com" required autoFocus
                                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border-2 border-white/10 rounded-xl text-sm font-bold text-white placeholder:text-white/20 focus:bg-white/10 focus:border-indigo-500/50 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-black text-white/60 uppercase tracking-wider mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                                    placeholder="••••••••" required
                                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border-2 border-white/10 rounded-xl text-sm font-bold text-white placeholder:text-white/20 focus:bg-white/10 focus:border-indigo-500/50 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <button type="submit" disabled={isLoading}
                            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-black rounded-xl shadow-lg shadow-indigo-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                </div>

                <p className="text-center text-white/20 text-xs mt-6">
                    Powered by <span className="font-bold text-white/30">Zyappy</span>
                </p>
            </div>
        </div>
    );
}
