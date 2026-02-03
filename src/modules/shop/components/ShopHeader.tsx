'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '../mock/data';

export const ShopHeader: React.FC = () => {
    const pathname = usePathname();

    return (
        <header className="bg-white border-b border-slate-100 sticky top-0 z-30 overflow-x-auto no-scrollbar">
            {/* Navigation Tabs */}
            <div className="max-w-7xl mx-auto px-6 flex items-center">
                {CATEGORIES.map((cat) => {
                    const isActive = pathname === `/backoffice/shop/${cat.id}` || (pathname === '/backoffice/shop' && cat.id === 'packaging');
                    return (
                        <Link
                            key={cat.id}
                            href={`/backoffice/shop/${cat.id}`}
                            className={`px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all relative shrink-0 ${isActive
                                ? 'text-emerald-600'
                                : 'text-slate-400 hover:text-slate-700'
                                }`}
                        >
                            {cat.name}
                            {isActive && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full mx-6 animate-in slide-in-from-bottom-1" />
                            )}
                        </Link>
                    )
                })}
                <div className="flex-1" />
                <Link
                    href="/backoffice/shop/admin"
                    className={`px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all relative shrink-0 ${pathname === '/backoffice/shop/admin'
                        ? 'text-emerald-600'
                        : 'text-slate-400 hover:text-slate-700'
                        }`}
                >
                    Control Panel
                    {pathname === '/backoffice/shop/admin' && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full mx-6 animate-in slide-in-from-bottom-1" />
                    )}
                </Link>
            </div>
        </header>
    );
};
