'use client';

import { POSProvider } from '@/modules/pos/context/POSContext';

export default function CallCenterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <POSProvider>
            <div className="callcenter-root" style={{ height: '100vh', width: '100vw', overflow: 'hidden', background: '#f8fafc' }}>
                {children}
            </div>
        </POSProvider>
    );
}
