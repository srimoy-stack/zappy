'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, PhoneCall, Bell } from 'lucide-react';

const TAB_DEFINITIONS = [
    { id: 'dashboard', label: 'Dashboard', segment: 'dashboard', icon: LayoutDashboard },
    { id: 'calls', label: 'Calls', segment: 'calls', icon: PhoneCall },
    { id: 'alerts', label: 'Alerts', segment: 'alerts', icon: Bell },
] as const;

/**
 * Tab navigation for the AI Call Analytics module.
 * Dynamically builds URLs using the current tenant slug from the pathname.
 */
export const CallAnalyticsTabs: React.FC = () => {
    const pathname = usePathname();

    // Extract base path: /{slug}/call-analytics
    const basePath = pathname?.match(/^(\/[^/]+\/call-analytics)/)?.[1] || '/backoffice/call-analytics';

    return (
        <nav className="flex items-center gap-1 border-b border-slate-200 pb-2 mb-6" role="tablist">
            {TAB_DEFINITIONS.map((tab) => {
                const href = `${basePath}/${tab.segment}`;
                const isActive = pathname?.includes(`/call-analytics/${tab.segment}`);
                const Icon = tab.icon;

                return (
                    <Link
                        key={tab.id}
                        href={href}
                        role="tab"
                        aria-selected={isActive}
                        id={`tab-${tab.id}`}
                        className={`
                            inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200
                            ${isActive
                                ? 'bg-emerald-600 text-white shadow-sm'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }
                        `}
                    >
                        <Icon className="h-4 w-4" />
                        {tab.label}
                    </Link>
                );
            })}
        </nav>
    );
};
