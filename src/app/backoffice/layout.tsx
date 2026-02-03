'use client';

import React from 'react';
import { Sidebar } from '@/modules/m9/components/Sidebar/Sidebar';
import { Header } from '@/modules/m9/components/Header/Header';
import { RoleGuard } from '@/modules/m9/components/Auth/RoleGuard';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils';
import { CartProvider } from '@/modules/shop/context/CartContext';
import { ToastProvider } from '@/modules/shop/context/ToastContext';

export default function BackofficeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isShop = pathname?.startsWith('/backoffice/shop');

    return (
        <RoleGuard>
            <ToastProvider>
                <CartProvider>
                    <div className="min-h-screen bg-slate-50 flex">
                        <Sidebar />
                        <div className="flex-1 flex flex-col min-h-screen ml-64 transition-all duration-300 min-w-0">
                            <Header />
                            <main className={cn(
                                "flex-1 overflow-y-auto overflow-x-hidden",
                                isShop ? "p-0" : "p-6"
                            )}>
                                <div className="animate-in fade-in duration-500">
                                    {children}
                                </div>
                            </main>
                        </div>
                    </div>
                </CartProvider>
            </ToastProvider>
        </RoleGuard>
    );
}
