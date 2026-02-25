'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { ImpersonationProvider } from '@/app/providers/ImpersonationProvider';

export function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <ImpersonationProvider>
                {children}
            </ImpersonationProvider>
        </SessionProvider>
    );
}
