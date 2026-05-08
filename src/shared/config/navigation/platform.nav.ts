import { Building2, Users, Settings, FileText } from 'lucide-react';
import type { NavItem } from './backoffice.nav';

/**
 * Platform Sidebar Navigation — Phase 1
 *
 * Active:
 *   Tenants         → /platform/tenants
 *   Platform Users  → /platform/users
 *   Audit Center    → /platform/audit
 *   Settings        → /platform/settings
 *
 * Phase 2 (uncomment when operational modules are ready):
 *   Dashboard       → /platform/dashboard
 *   Roles           → /platform/roles
 *   Modules         → /platform/modules
 *   Comm Services   → /platform/communication
 */
export const platformNavigation: NavItem[] = [
    { id: 'platform-tenants', label: 'Tenants', href: '/platform/tenants', icon: Building2 },
    { id: 'platform-users', label: 'Platform Users', href: '/platform/users', icon: Users },
    { id: 'platform-audit', label: 'Audit Center', href: '/platform/audit', icon: FileText },
    { id: 'platform-settings', label: 'Platform Settings', href: '/platform/settings', icon: Settings },
    // ── Phase 2: Uncomment when operational modules are ready ──
    // { id: 'platform-dashboard', label: 'Dashboard', href: '/platform/dashboard', icon: BarChart3 },
    // { id: 'platform-roles', label: 'Roles & Permissions', href: '/platform/roles', icon: Shield },
    // { id: 'platform-modules', label: 'Modules Registry', href: '/platform/modules', icon: LayoutGrid },
    // { id: 'platform-communication', label: 'Comm Services', href: '/platform/communication', icon: MessageSquare },
];

