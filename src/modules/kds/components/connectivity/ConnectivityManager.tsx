'use client';


import { WifiOff, AlertCircle } from 'lucide-react';
import { useKDSStore } from '../../store/kdsStore';

export const ConnectivityManager: React.FC = () => {
    const { isOnline } = useKDSStore();

    if (isOnline) return null;

    return (
        <div className="bg-red-600 text-white px-6 py-3 flex items-center justify-center gap-3 animate-in slide-in-from-top duration-300 z-[100] shadow-lg border-b border-red-500">
            <WifiOff size={20} className="animate-pulse" />
            <div className="flex flex-col">
                <span className="text-sm font-black uppercase tracking-widest leading-none">Offline Mode Active</span>
                <span className="text-[10px] font-bold opacity-80 uppercase tracking-tighter">
                    Actions will be queued and synced automatically on reconnect
                </span>
            </div>
            <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
                <AlertCircle size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">No Connection</span>
            </div>
        </div>
    );
};
