'use client';

import React, { useEffect } from 'react';
import { RoleGuard } from '@/modules/m9/components/Auth/RoleGuard';
import { KDSWebSocketProvider } from '@/modules/kds/context/KDSWebSocketContext';
import { useAuth } from '@/app/providers/AuthProvider';
import { isKDSModuleActive } from '@/modules/kds/utils/kdsModuleFlags';
import { useKDSStore } from '@/modules/kds/store/kdsStore';
import '@/modules/kds/styles/kds-master.css';

export default function KDSLayout({ children }: { children: React.ReactNode }) {
    const { enabledModules } = useAuth();
    const { setOnlineStatus } = useKDSStore();
    const isActive = isKDSModuleActive({ module1A: enabledModules.includes('kds') });

    useEffect(() => {
        const handleOnline = () => setOnlineStatus(true);
        const handleOffline = () => setOnlineStatus(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [setOnlineStatus]);

    useEffect(() => {
        // Prevent body scroll and set KDS background
        document.body.classList.add('kds-body');
        return () => {
            document.body.classList.remove('kds-body');
        };
    }, []);

    if (!isActive) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6 text-center">
                <div className="max-w-md w-full bg-slate-900 p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl">
                    <h1 className="text-3xl font-black text-white mb-4">Module Inactive</h1>
                    <p className="text-slate-400 font-medium leading-relaxed">
                        The Kitchen Display System (KDS) module is not active for this store. Please contact your administrator.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <RoleGuard allowedRoles={['KDS_USER', 'STORE_MANAGER', 'PLATFORM_SUPER_ADMIN']} mode="403">
            <KDSWebSocketProvider>
                <div className="kds-root">
                    {children}
                </div>
            </KDSWebSocketProvider>
        </RoleGuard>
    );
}
