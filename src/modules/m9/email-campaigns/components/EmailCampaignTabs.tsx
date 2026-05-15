'use client';

import React, { useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Mail, FileText, BarChart3, Users, LayoutDashboard, Contact2, ShieldAlert, Settings, ScrollText } from 'lucide-react';

const TAB_DEFS = [
    { id: 'dashboard',  label: 'Dashboard',   segment: 'dashboard',  icon: LayoutDashboard },
    { id: 'campaigns',  label: 'Campaigns',   segment: 'campaigns',  icon: Mail },
    { id: 'segments',   label: 'Segments',     segment: 'segments',   icon: Users },
    { id: 'templates',  label: 'Templates',    segment: 'templates',  icon: FileText },
    { id: 'contacts',   label: 'Contacts',     segment: 'contacts',   icon: Contact2 },
    { id: 'suppression',label: 'Suppression',  segment: 'suppression',icon: ShieldAlert },
    { id: 'analytics',  label: 'Analytics',    segment: 'analytics',  icon: BarChart3 },
    { id: 'settings',   label: 'Settings',     segment: 'settings',   icon: Settings },
    { id: 'audit',      label: 'Audit Log',    segment: 'audit',      icon: ScrollText },
] as const;

export const EmailCampaignTabs: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Dynamically resolve the base path from the current URL
    // Works for both /backoffice/email-campaigns and /{slug}/email-campaigns
    const basePath = useMemo(() => {
        const idx = pathname.indexOf('/email-campaigns');
        if (idx === -1) return '/backoffice/email-campaigns';
        return pathname.substring(0, idx) + '/email-campaigns';
    }, [pathname]);

    return (
        <nav className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-2xl w-fit overflow-x-auto">
            {TAB_DEFS.map((tab) => {
                const href = `${basePath}/${tab.segment}`;
                const isActive = pathname === href || pathname.startsWith(href + '/');
                const Icon = tab.icon;

                return (
                    <button
                        key={tab.id}
                        onClick={() => router.push(href)}
                        className={`
                            flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap
                            ${isActive
                                ? 'bg-white text-indigo-700 shadow-sm shadow-slate-200/50 ring-1 ring-slate-200/60'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                            }
                        `}
                    >
                        <Icon size={16} className={isActive ? 'text-indigo-600' : 'text-slate-400'} />
                        {tab.label}
                    </button>
                );
            })}
        </nav>
    );
};
