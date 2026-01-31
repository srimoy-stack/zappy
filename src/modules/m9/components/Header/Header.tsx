import React from 'react';
import { StoreSelector } from './StoreSelector';
import { DateRangePicker } from './DateRangePicker';
import { Search, Bell } from 'lucide-react';
import { useRouteAccess } from '@/hooks/useRouteAccess';
import { cn } from '@/utils';

/**
 * Header Component (Production Grade)
 * Adapts to user role, shows user profile, and removes dev-only controls.
 */
export const Header: React.FC = () => {
    const { user, role } = useRouteAccess();

    const getRoleBadgeColor = () => {
        switch (role) {
            case 'ADMIN': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
            case 'STORE_MANAGER': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'EMPLOYEE': return 'bg-slate-100 text-slate-800 border-slate-200';
            default: return 'bg-slate-100 text-slate-600 border-slate-200';
        }
    };

    return (
        <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 sticky top-0 z-40">
            {/* Left: Store Context & Role Badge */}
            <div className="flex items-center gap-4">
                <StoreSelector />
                <div className="h-6 w-[1px] bg-slate-200 mx-1" />
                <span className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border",
                    getRoleBadgeColor()
                )}>
                    {role?.replace('_', ' ')}
                </span>
            </div>

            {/* Center: Global Date Filter */}
            <div className="flex-1 flex justify-center max-w-xl">
                <DateRangePicker />
            </div>

            {/* Right: User Actions & Profile */}
            <div className="flex items-center gap-3">
                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                    <Search className="w-4 h-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="h-4 w-[1px] bg-slate-200 mx-1" />

                {/* User Profile Info */}
                <div className="flex items-center gap-3 ml-2 pl-2 border-l border-slate-100">
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-bold text-slate-900 leading-none">{user?.name}</span>
                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tight mt-0.5">Tenant: {user?.tenantId}</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 uppercase">
                        {user?.name?.split(' ').map((n: string) => n[0]).join('') || '?'}
                    </div>
                </div>
            </div>
        </header>
    );
};
