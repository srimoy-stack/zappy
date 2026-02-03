import React from 'react';
import { ShopHeader } from '@/modules/shop/components/ShopHeader';
import { ShopFooter } from '@/modules/shop/components/ShopFooter';
import { CartProvider } from '@/modules/shop/context/CartContext';
import { ToastProvider } from '@/modules/shop/context/ToastContext';

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ToastProvider>
            <CartProvider>
                <div className="min-h-screen bg-slate-50/30 font-sans selection:bg-emerald-100 selection:text-emerald-900">
                    <ShopHeader />
                    <main className="max-w-7xl mx-auto px-4 py-12">
                        {children}
                    </main>
                    <ShopFooter />
                </div>
            </CartProvider>
        </ToastProvider>
    );
}
