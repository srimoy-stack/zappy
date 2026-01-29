import React, { useState } from 'react';
import { Package, Layers, Settings2, Plus, Search, Filter, ChevronRight, Edit3, Trash2 } from 'lucide-react';
import { Item, Category, ModifierGroup } from '../types/items';
import { mockItems, mockCategories, mockModifierGroups } from '../mock/items';
import { ItemEditScreen } from '../components/Items/ItemEditScreen';
import { useRouteAccess } from '@/hooks/useRouteAccess';

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
                    <p className="text-sm text-slate-500 font-medium">Manage items, variants, recipes and store overrides.</p>
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
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${currentView === 'LIST' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <Package size={14} />
                    Item List
                </button>
                <button
                    onClick={() => setCurrentView('CATEGORIES')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${currentView === 'CATEGORIES' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <Layers size={14} />
                    Categories
                </button>
                <button
                    onClick={() => setCurrentView('MODIFIERS')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${currentView === 'MODIFIERS' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <Settings2 size={14} />
                    Modifier Groups
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
                    <ModifierListView groups={mockModifierGroups} />
                )}
                {currentView === 'EDIT' && (
                    <ItemEditScreen
                        item={selectedItem}
                        onClose={() => setCurrentView('LIST')}
                        categories={mockCategories}
                        modifierGroups={mockModifierGroups}
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
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-slate-900 transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-white transition-all">
                    <Filter size={14} />
                    Filters
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Item Details</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Price Range</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {items.map((item) => (
                            <tr
                                key={item.id}
                                className="group hover:bg-slate-50/50 transition-colors cursor-pointer"
                                onClick={() => onEdit(item)}
                            >
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
                                            {item.imageUrl ? (
                                                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                                    <Package size={20} />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-slate-900">{item.name}</div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">ID: {item.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-wider border border-slate-200">
                                        {item.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm font-bold text-slate-600">
                                    {mockCategories.find(c => c.id === item.categoryId)?.name || 'Unassigned'}
                                </td>
                                <td className="px-6 py-4 text-right tabular-nums">
                                    <div className="text-sm font-black text-slate-900">
                                        ${Math.min(...item.variants.map(v => v.basePrice))} - ${Math.max(...item.variants.map(v => v.basePrice))}
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{item.variants.length} Variants</div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black border uppercase tracking-widest ${item.isAvailable ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-100 text-slate-400 border-slate-200'}`}>
                                        {item.isAvailable ? 'Active' : 'Hidden'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                                            <Edit3 size={16} />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-rose-600 transition-colors">
                                            <Trash2 size={16} />
                                        </button>
                                        <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const CategoryListView: React.FC<{ categories: Category[] }> = ({ categories }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
                <div key={cat.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-900 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-slate-900 rounded-2xl shadow-lg shadow-slate-200">
                            <Layers size={20} className="text-emerald-400" />
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                                <Edit3 size={14} />
                            </button>
                        </div>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight">{cat.name}</h3>
                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                        {cat.description || 'No description provided for this category.'}
                    </p>
                    <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Menu Grouping</span>
                        <ChevronRight size={14} className="text-slate-300 group-hover:translate-x-1 transition-all" />
                    </div>
                </div>
            ))}
            <button className="border-2 border-dashed border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:border-slate-400 hover:bg-slate-50 transition-all">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                    <Plus size={20} className="text-slate-400" />
                </div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Create New Category</span>
            </button>
        </div>
    );
};

const ModifierListView: React.FC<{ groups: ModifierGroup[] }> = ({ groups }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {groups.map((group) => (
                <div key={group.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col group hover:border-slate-900 transition-all cursor-pointer">
                    <div className="p-6 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-500">
                                <Settings2 size={16} />
                            </div>
                            <div>
                                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">{group.name}</h3>
                                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">ID: {group.id}</div>
                            </div>
                        </div>
                        <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="p-6 flex-1 space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Min Selection</span>
                                <span className="text-base font-black text-slate-900">{group.minSelection}</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Max Selection</span>
                                <span className="text-base font-black text-slate-900">{group.maxSelection}</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {group.isHalfAndHalfEnabled && (
                                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[9px] font-black uppercase tracking-tighter border border-blue-100">Half-and-Half</span>
                            )}
                            {group.isPremiumRuleEnabled && (
                                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[9px] font-black uppercase tracking-tighter border border-emerald-100">Premium Rules</span>
                            )}
                        </div>
                        <div className="pt-4 space-y-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Modifier Options ({group.options.length})</span>
                            <div className="flex flex-wrap gap-1.5">
                                {group.options.slice(0, 3).map(opt => (
                                    <span key={opt.id} className="text-xs font-bold text-slate-600 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                                        {opt.name}
                                    </span>
                                ))}
                                {group.options.length > 3 && (
                                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">
                                        +{group.options.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <button className="border-2 border-dashed border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:border-slate-400 hover:bg-slate-50 transition-all min-h-[300px]">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                    <Plus size={20} className="text-slate-400" />
                </div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest text-center">Define Global<br />Modifier Group</span>
            </button>
        </div>
    );
};
