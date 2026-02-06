'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Construction } from 'lucide-react';

export const POSPlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 bg-brand/10 rounded-3xl flex items-center justify-center text-brand mb-8 animate-bounce">
                <Construction size={40} />
            </div>
            <h1 className="text-4xl font-black text-brand tracking-tight mb-3">{title || 'Under Construction'}</h1>
            <p className="text-gray-500 max-w-md mx-auto font-medium leading-relaxed mb-8">
                This section of the POS system is currently being developed. Please check back soon or navigate to another area.
            </p>
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 px-8 py-4 bg-white text-brand rounded-2xl font-black hover:bg-gray-50 transition-all border-2 border-brand/20 shadow-lg shadow-brand/10"
            >
                <ArrowLeft size={18} />
                BACK TO DASHBOARD
            </button>
        </div>
    );
};
