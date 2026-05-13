import { Building2, Users, Settings, FileText, BarChart3 } from 'lucide-react';
import type { NavItem } from './backoffice.nav';

/**
 * Platform Sidebar Navigation
 *
 * Active:
 *   Dashboard       → /platform/dashboard
 *   Tenants         → /platform/tenants
 *   Platform Users  → /platform/users
 *   Audit Center    → /platform/audit
 *   Settings        → /platform/settings
 */
export const platformNavigation: NavItem[] = [
    { id: 'platform-dashboard', label: 'Dashboard', href: '/platform/dashboard', icon: BarChart3 },
    { id: 'platform-tenants', label: 'Tenants', href: '/platform/tenants', icon: Building2 },
    { id: 'platform-users', label: 'Platform Users', href: '/platform/users', icon: Users },
    { id: 'platform-audit', label: 'Audit Center', href: '/platform/audit', icon: FileText },
    { id: 'platform-settings', label: 'Platform Settings', href: '/platform/settings', icon: Settings },
];

