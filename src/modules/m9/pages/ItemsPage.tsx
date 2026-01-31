'use client';

import React, { useState } from 'react';
import { Package, Layers, Settings2, Plus, Search, ChevronRight, Edit3 } from 'lucide-react';
import { Item, Category } from '../types/items';
import { mockItems, mockCategories } from '../mock/items';
import { ItemEditScreen } from '../components/Items/ItemEditScreen';
import { useRouteAccess } from '@/hooks/useRouteAccess';
import { cn } from '@/utils';

type SubView = 'LIST' | 'CATEGORIES' | 'MODIFIERS' | 'EDIT';

export const ItemsPage: React.FC = () => {
    const [currentView, setCurrentView] = useState<SubView>('LIST');
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const { role } = useRouteAccess();

    const isAdmin = role === 'ADMIN';

    const handleEditItem = (item: Item) => {
        setSelectedItem(item);
        setCurrentView('EDIT');
    };

    const handleCreateItem = () => {
        setSelectedItem(null);
        setCurrentView('EDIT');
    };

    return (
        <div className="max-w-[1600px] mx-auto space-y-6 pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Catalog Management</h1>
                    <p className="text-sm text-slate-500 font-medium">Manage items, variants, and modifiers with hierarchical configuration.</p>
                </div>

                {isAdmin && currentView === 'LIST' && (
                    <button
                        onClick={handleCreateItem}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95"
                    >
                        <Plus size={16} strokeWidth={3} />
                        Add New Item
                    </button>
                )}
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl w-fit">
                <button
                    onClick={() => setCurrentView('LIST')}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                        currentView === 'LIST' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:bg-white/50"
                    )}
                >
                    <Package size={14} />
                    Item List
                </button>
                <button
                    onClick={() => setCurrentView('CATEGORIES')}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                        currentView === 'CATEGORIES' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:bg-white/50"
                    )}
                >
                    <Layers size={14} />
                    Categories
                </button>
                <button
                    onClick={() => setCurrentView('MODIFIERS')}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                        currentView === 'MODIFIERS' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:bg-white/50"
                    )}
                >
                    <Settings2 size={14} />
                    Global Modifiers
                </button>
            </div>

            {/* View Content */}
            <div className="min-h-[400px]">
                {currentView === 'LIST' && (
                    <ItemListView onEdit={handleEditItem} items={mockItems} />
                )}
                {currentView === 'CATEGORIES' && (
                    <CategoryListView categories={mockCategories} />
                )}
                {currentView === 'MODIFIERS' && (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                        <Settings2 size={48} strokeWidth={1} />
                        <p className="mt-4 font-black uppercase tracking-widest text-xs tracking-[0.2em]">Global Modifier Management Coming Soon</p>
                        <p className="mt-2 text-[10px] font-bold uppercase tracking-tight">Currently, modifiers are configured per item.</p>
                    </div>
                )}
                {currentView === 'EDIT' && (
                    <ItemEditScreen
                        item={selectedItem}
                        onClose={() => setCurrentView('LIST')}
                        categories={mockCategories}
                    />
                )}
            </div>
        </div>
    );
};

const ItemListView: React.FC<{ items: Item[], onEdit: (item: Item) => void }> = ({ items, onEdit }) => {
    return (
        <div className="space-y-4">
            {/* Search & Filter Bar */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search items by name, SKU or ID..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-slate-900 transition-all font-bold"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                            <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Item Identity</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Architecture</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Base Range</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {items.map((item) => {
                            const allVariants = item.variantGroups.flatMap(vg => vg.variants);
                            const minPrice = allVariants.length > 0 ? Math.min(...allVariants.map(v => v.basePrice)) : 0;
                            const maxPrice = allVariants.length > 0 ? Math.max(...allVariants.map(v => v.basePrice)) : 0;

                            return (
                                <tr
                                    key={item.id}
                                    className="group hover:bg-slate-50 transition-colors cursor-pointer"
                                    onClick={() => onEdit(item)}
                                >
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex-shrink-0 flex items-center justify-center">
                                                {item.imageUrl ? (
                                                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <Package size={20} className="text-slate-200" />
                                                )}
                                            </div>
                                            <div>
                                                <div className="text-sm font-black text-slate-900 tracking-tight">{item.name}</div>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className={cn(
                                                        "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border",
                                                        item.productType === 'SINGLE' ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-purple-50 text-purple-600 border-purple-100"
                                                    )}>
                                                        {item.productType}
                                                    </span>
                                                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">ID: {item.id}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-1">
                                            <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{item.variantGroups.length} Variant Groups</div>
                                            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">{item.modifierGroups.length} Modifier Pools</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
                                            {mockCategories.find(c => c.id === item.categoryId)?.name || 'Unassigned'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right tabular-nums">
                                        <div className="text-sm font-black text-slate-900">
                                            ${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className={cn(
                                            "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-all",
                                            item.isAvailable ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-slate-50 text-slate-400 border-slate-100"
                                        )}>
                                            {item.isAvailable ? 'Active' : 'Offline'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center justify-end">
                                            <div className="p-2 text-slate-300 hover:text-slate-900 group-hover:bg-white rounded-xl transition-all shadow-sm">
                                                <Edit3 size={16} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const CategoryListView: React.FC<{ categories: Category[] }> = ({ categories }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
                <div key={cat.id} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:border-slate-900 transition-all cursor-pointer group flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200">
                                <Layers size={20} className="text-emerald-400" />
                            </div>
                        </div>
                        <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase tracking-widest">{cat.name}</h3>
                        <p className="text-xs text-slate-500 font-bold mt-2 leading-relaxed uppercase tracking-tighter">
                            {cat.description || 'No description provided for this category.'}
                        </p>
                    </div>
                    <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">View Catalog Items</span>
                        <ChevronRight size={16} className="text-slate-200 group-hover:translate-x-1 transition-all group-hover:text-slate-900" />
                    </div>
                </div>
            ))}
        </div>
    );
};
