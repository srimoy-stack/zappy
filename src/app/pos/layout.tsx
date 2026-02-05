'use client';

import React from 'react';
import { POSProvider } from '@/modules/pos/context/POSContext';
import { ToastProvider } from '@/modules/shop/context/ToastContext';

export default function POSLayout({ children }: { children: React.ReactNode }) {
    return (
        <ToastProvider>
            <POSProvider>
                <div className="min-h-screen bg-slate-900 overflow-x-hidden">
                    {children}
                </div>
            </POSProvider>
        </ToastProvider>
    );
}
