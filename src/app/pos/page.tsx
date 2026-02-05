'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function POSRoot() {
    const router = useRouter();

    useEffect(() => {
        router.push('/pos/login');
    }, [router]);

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
