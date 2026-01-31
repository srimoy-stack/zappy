import React from 'react';
import { useRouter } from 'next/navigation';
;
import {
    Package,
    FileText,
    List,
    ChefHat,
    RotateCcw,
    Users,
    Plus,
    TrendingUp,
    AlertTriangle
} from 'lucide-react';
import { useRouteAccess } from '@/hooks/useRouteAccess';
import { mockInventoryItems, mockInventoryEntries } from '../mock/inventory';

/**
 * Inventory Module - Main Dashboard
 * Top-level navigation hub for all inventory operations
 * 
 * Role-based access:
 * - Admin: Full access
 * - Inventory Manager: Full Inventory + View/Add Vendors
 * - Store Manager: Add/View Inventory + View Vendors
 * - Staff: No access
 */
export const InventoryPage: React.FC = () => {
    const router = useRouter();
    const { role } = useRouteAccess();

    // Calculate quick stats
    const lowStockItems = mockInventoryItems.filter(item => item.currentStock <= item.lowStockThreshold);
    const totalInventoryValue = mockInventoryItems.reduce((sum, item) => sum + (item.currentStock * item.averageCost), 0);
    const pendingEntries = mockInventoryEntries.filter(entry => entry.inventoryStatus === 'Draft' || entry.inventoryStatus === 'Ordered');

    // Permission checks
    const canAddInventory = role === 'ADMIN' || role === 'STORE_MANAGER';
    const canViewVendors = role === 'ADMIN' || role === 'STORE_MANAGER';

    return (
        <div className="max-w-[1600px] mx-auto space-y-6 pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Inventory Management</h1>
                    <p className="text-sm text-slate-500 font-medium">
                        System of record for stock movement, recipes, and vendor management
                    </p>
                </div>

                {canAddInventory && (
                    <button
                        onClick={() => router.push('/backoffice/inventory/add')}
                        className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95"
                    >
                        <Plus size={16} strokeWidth={3} />
                        Add Inventory
                    </button>
                )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-3xl border border-emerald-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-200">
                            <Package size={20} className="text-white" />
                        </div>
                        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Total Value</span>
                    </div>
                    <div className="text-3xl font-black text-emerald-900 tracking-tight">
                        ${totalInventoryValue.toFixed(2)}
                    </div>
                    <div className="text-xs text-emerald-600 font-bold mt-1">
                        {mockInventoryItems.length} Active Items
                    </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-3xl border border-amber-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-amber-600 rounded-2xl shadow-lg shadow-amber-200">
                            <AlertTriangle size={20} className="text-white" />
                        </div>
                        <span className="text-xs font-black text-amber-600 uppercase tracking-widest">Low Stock</span>
                    </div>
                    <div className="text-3xl font-black text-amber-900 tracking-tight">
                        {lowStockItems.length}
                    </div>
                    <div className="text-xs text-amber-600 font-bold mt-1">
                        Items Below Threshold
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-3xl border border-blue-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">
                            <TrendingUp size={20} className="text-white" />
                        </div>
                        <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Pending</span>
                    </div>
                    <div className="text-3xl font-black text-blue-900 tracking-tight">
                        {pendingEntries.length}
                    </div>
                    <div className="text-xs text-blue-600 font-bold mt-1">
                        Draft/Ordered Entries
                    </div>
                </div>
            </div>

            {/* Navigation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Add Inventory */}
                {canAddInventory && (
                    <NavigationCard
                        icon={Plus}
                        title="Add Inventory"
                        description="Create new stock inward entries"
                        color="emerald"
                        onClick={() => router.push('/backoffice/inventory/add')}
                    />
                )}

                {/* Entries */}
                <NavigationCard
                    icon={FileText}
                    title="Entries"
                    description="View all stock inward transactions"
                    color="blue"
                    onClick={() => router.push('/backoffice/inventory/entries')}
                />

                {/* List Inventory */}
                <NavigationCard
                    icon={List}
                    title="List Inventory"
                    description="Canonical list of inventory items (ingredients)"
                    color="violet"
                    onClick={() => router.push('/backoffice/inventory/list')}
                />

                {/* Recipes */}
                <NavigationCard
                    icon={ChefHat}
                    title="Recipes"
                    description="Bill of Materials (BOM) and costing"
                    color="orange"
                    onClick={() => router.push('/backoffice/inventory/recipes')}
                />

                {/* List Returns */}
                <NavigationCard
                    icon={RotateCcw}
                    title="List Returns"
                    description="View returns, wastage, and adjustments"
                    color="rose"
                    onClick={() => router.push('/backoffice/inventory/returns')}
                />

                {/* Vendors */}
                {canViewVendors && (
                    <NavigationCard
                        icon={Users}
                        title="Vendors"
                        description="Manage suppliers and vendor relationships"
                        color="slate"
                        onClick={() => router.push('/backoffice/inventory/vendors')}
                    />
                )}
            </div>

            {/* Low Stock Alert */}
            {lowStockItems.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-amber-600 rounded-2xl shadow-lg shadow-amber-200">
                            <AlertTriangle size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-black text-amber-900 tracking-tight mb-2">
                                Low Stock Alert
                            </h3>
                            <p className="text-sm text-amber-700 font-medium mb-4">
                                The following items are below their low stock threshold:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {lowStockItems.slice(0, 6).map(item => (
                                    <div key={item.id} className="bg-white p-3 rounded-xl border border-amber-200">
                                        <div className="text-sm font-black text-slate-900">{item.name}</div>
                                        <div className="text-xs text-slate-500 font-medium mt-1">
                                            Stock: {item.currentStock} {item.baseUnit} (Threshold: {item.lowStockThreshold})
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {lowStockItems.length > 6 && (
                                <button
                                    onClick={() => router.push('/backoffice/inventory/list')}
                                    className="mt-4 text-xs font-black text-amber-600 uppercase tracking-widest hover:text-amber-700 transition-colors"
                                >
                                    View All {lowStockItems.length} Items →
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Navigation Card Component
interface NavigationCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    color: 'emerald' | 'blue' | 'violet' | 'orange' | 'rose' | 'slate';
    onClick: () => void;
}

const NavigationCard: React.FC<NavigationCardProps> = ({ icon: Icon, title, description, color, onClick }) => {
    const colorClasses = {
        emerald: 'from-emerald-50 to-emerald-100 border-emerald-200 hover:border-emerald-400',
        blue: 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400',
        violet: 'from-violet-50 to-violet-100 border-violet-200 hover:border-violet-400',
        orange: 'from-orange-50 to-orange-100 border-orange-200 hover:border-orange-400',
        rose: 'from-rose-50 to-rose-100 border-rose-200 hover:border-rose-400',
        slate: 'from-slate-50 to-slate-100 border-slate-200 hover:border-slate-400'
    };

    const iconColorClasses = {
        emerald: 'bg-emerald-600 shadow-emerald-200',
        blue: 'bg-blue-600 shadow-blue-200',
        violet: 'bg-violet-600 shadow-violet-200',
        orange: 'bg-orange-600 shadow-orange-200',
        rose: 'bg-rose-600 shadow-rose-200',
        slate: 'bg-slate-600 shadow-slate-200'
    };

    return (
        <button
            onClick={onClick}
            className={`bg-gradient-to-br ${colorClasses[color]} p-6 rounded-3xl border shadow-sm transition-all hover:shadow-lg hover:scale-105 active:scale-100 text-left group`}
        >
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 ${iconColorClasses[color]} rounded-2xl shadow-lg`}>
                    <Icon size={20} className="text-white" />
                </div>
                <svg
                    className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
            <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2">{title}</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">{description}</p>
        </button>
    );
};
