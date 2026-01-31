'use client';

import React from 'react';
import { Sidebar } from '@/modules/m9/components/Sidebar/Sidebar';
import { Header } from '@/modules/m9/components/Header/Header';
import { RoleGuard } from '@/modules/m9/components/Auth/RoleGuard';

export default function BackofficeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RoleGuard>
            <div className="min-h-screen bg-slate-50 flex">
                <Sidebar />
                <div className="flex-1 flex flex-col min-h-screen ml-64 transition-all duration-300">
                    <Header />
                    <main className="flex-1 p-6 overflow-y-auto">
                        <div className="animate-in fade-in duration-500">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </RoleGuard>
    );
}
