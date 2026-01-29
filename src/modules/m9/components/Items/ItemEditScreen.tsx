import React, { useState } from 'react';
import { ChevronLeft, Save, Globe, Info, Clock, ShieldCheck, Layers, Settings2, DollarSign, Package, AlertCircle, Plus, Trash2 } from 'lucide-react';
import { Item, Category, ModifierGroup, Ingredient, RecipeEntry, ModifierIngredientMapping, ItemVariant } from '../../types/items';
import { mockIngredients } from '../../mock/ingredients';

interface ItemEditScreenProps {
    item: Item | null;
    onClose: () => void;
    categories: Category[];
    modifierGroups: ModifierGroup[];
}

type TabId = 'GENERAL' | 'VARIANTS' | 'MODIFIERS' | 'PRICING' | 'INVENTORY' | 'AVAILABILITY' | 'OVERRIDES' | 'AUDIT';

export const ItemEditScreen: React.FC<ItemEditScreenProps> = ({ item, onClose, categories, modifierGroups }) => {
    const [activeTab, setActiveTab] = useState<TabId>('GENERAL');
    const [formData, setFormData] = useState<Partial<Item>>(item || {
        type: 'PIZZA',
        name: '',
        description: '',
        categoryId: '',
        isAvailable: true,
        variants: [],
        modifierGroupIds: [],
        storeOverrides: [],
        modifierMappings: []
    });

    const tabs: { id: TabId, label: string, icon: any }[] = [
        { id: 'GENERAL', label: 'General', icon: Info },
        { id: 'VARIANTS', label: 'Variants', icon: Layers },
        { id: 'MODIFIERS', label: 'Modifier Groups', icon: Settings2 },
        { id: 'PRICING', label: 'Pricing', icon: DollarSign },
        { id: 'INVENTORY', label: 'Inventory / Recipe', icon: Package },
        { id: 'AVAILABILITY', label: 'Availability', icon: Clock },
        { id: 'OVERRIDES', label: 'Store Overrides', icon: Globe },
        { id: 'AUDIT', label: 'Audit Log', icon: ShieldCheck },
    ];

    const handleSave = () => {
        console.log('Saving Item Configuration:', formData);
        onClose();
    };

    return (
        <div className="bg-slate-50/50 -mx-4 -mt-6 px-4 pt-6 min-h-screen">
            {/* Context Header */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 -mx-4 px-6 py-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 rounded-xl"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-black text-slate-900 tracking-tight">
                                {item ? `Edit: ${item.name}` : 'New Pizza Setup'}
                            </h2>
                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[9px] font-black uppercase tracking-widest border border-emerald-100">
                                Item Type: Pizza
                            </span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em] mt-0.5 opacity-80">
                            Central Catalog Source of Truth
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        Discard
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 shadow-lg shadow-slate-200 transition-all active:scale-95"
                    >
                        <Save size={14} className="text-emerald-400" />
                        Save Item
                    </button>
                </div>
            </div>

            {/* Tabbed Layout Container */}
            <div className="max-w-[1400px] mx-auto py-8 flex flex-col lg:flex-row gap-8">
                {/* Left Sidebar Tabs */}
                <div className="w-full lg:w-64 shrink-0 space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' : 'text-slate-500 hover:bg-white hover:text-slate-900'}`}
                        >
                            <tab.icon size={16} strokeWidth={activeTab === tab.id ? 3 : 2.5} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Right Content Area */}
                <div className="flex-1 bg-white rounded-[32px] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden min-h-[600px]">
                    <div className="p-10">
                        {activeTab === 'GENERAL' && <GeneralTab formData={formData} setFormData={setFormData} categories={categories} />}
                        {activeTab === 'VARIANTS' && <VariantsTab formData={formData} setFormData={setFormData} />}
                        {activeTab === 'MODIFIERS' && <ModifierGroupsTab formData={formData} setFormData={setFormData} modifierGroups={modifierGroups} />}
                        {activeTab === 'PRICING' && <PricingTab formData={formData} setFormData={setFormData} />}
                        {activeTab === 'INVENTORY' && <InventoryTab formData={formData} setFormData={setFormData} modifierGroups={modifierGroups} />}
                        {activeTab === 'AVAILABILITY' && <AvailabilityTab formData={formData} setFormData={setFormData} />}
                        {activeTab === 'OVERRIDES' && <StoreOverridesTab formData={formData} setFormData={setFormData} />}
                        {activeTab === 'AUDIT' && <AuditLogTab auditLog={item?.auditLog || []} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Tab Components ---

const GeneralTab: React.FC<{ formData: any, setFormData: any, categories: Category[] }> = ({ formData, setFormData, categories }) => (
    <div className="space-y-8 max-w-2xl">
        <div className="space-y-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-4">Base Identity</h3>

            <div className="space-y-4">
                <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Pizza Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Veggie Supreme"
                        className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:border-slate-900 transition-all shadow-sm"
                    />
                </div>

                <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Menu Category</label>
                    <select
                        value={formData.categoryId}
                        onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                        className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:border-slate-900 transition-all shadow-sm appearance-none"
                    >
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Public Description</label>
                    <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={4}
                        placeholder="Describe your pizza for the customers..."
                        className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:border-slate-900 transition-all shadow-sm resize-none"
                    />
                </div>
            </div>
        </div>
    </div>
);

const VariantsTab: React.FC<{ formData: any, setFormData: any }> = ({ formData, setFormData: _setFormData }) => (
    <div className="space-y-8">
        <div className="flex items-center justify-between border-l-4 border-slate-900 pl-4">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Size & Crust Variants</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-slate-200">
                <Plus size={14} /> Add Variant
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.variants.map((v: any, idx: number) => (
                <div key={v.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 group hover:bg-white hover:border-slate-900 transition-all shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Variant #{idx + 1}</span>
                        <div className="flex items-center gap-2">
                            <button className="p-1.5 text-slate-300 hover:text-rose-500 transition-colors"><Trash2 size={14} /></button>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <input
                            type="text"
                            value={v.name}
                            placeholder="Variant Name (e.g. Medium)"
                            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold"
                        />
                        <div className="flex items-center gap-3">
                            <div className="relative flex-1">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                <input
                                    type="number"
                                    value={v.basePrice}
                                    className="w-full pl-8 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold font-mono"
                                />
                            </div>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" checked={v.isAvailable} className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                                <span className="text-[10px] font-black text-slate-400 uppercase">Live</span>
                            </label>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ModifierGroupsTab: React.FC<{ formData: any, setFormData: any, modifierGroups: ModifierGroup[] }> = ({ formData, setFormData, modifierGroups }) => (
    <div className="space-y-8">
        <div className="flex items-center justify-between border-l-4 border-slate-900 pl-4">
            <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Assigned Modifiers</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-1 items-center flex gap-1">
                    <AlertCircle size={10} /> Select from global reusable pools
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
            {modifierGroups.map(group => {
                const isSelected = formData.modifierGroupIds.includes(group.id);
                return (
                    <div
                        key={group.id}
                        onClick={() => {
                            const newIds = isSelected
                                ? formData.modifierGroupIds.filter((id: string) => id !== group.id)
                                : [...formData.modifierGroupIds, group.id];
                            setFormData({ ...formData, modifierGroupIds: newIds });
                        }}
                        className={`p-6 rounded-3xl border transition-all cursor-pointer flex items-center justify-between ${isSelected ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-900 group'}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-2xl ${isSelected ? 'bg-white/10' : 'bg-slate-50 group-hover:bg-slate-100'}`}>
                                <Settings2 size={20} className={isSelected ? 'text-emerald-400' : 'text-slate-400'} />
                            </div>
                            <div>
                                <h4 className="text-sm font-black uppercase tracking-widest">{group.name}</h4>
                                <p className={`text-[10px] font-medium mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                                    {group.options.length} Options • Min {group.minSelection} / Max {group.maxSelection}
                                </p>
                            </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-emerald-500 border-emerald-500 text-slate-900' : 'border-slate-200'}`}>
                            {isSelected && <Save size={14} strokeWidth={4} />}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

const PricingTab: React.FC<{ formData: any, setFormData: any }> = ({ formData: _formData, setFormData: _setFormData }) => (
    <div className="space-y-8 py-10 text-center">
        <div className="inline-block p-6 bg-slate-50 rounded-full mb-4">
            <DollarSign size={48} className="text-slate-200" strokeWidth={1} />
        </div>
        <div className="max-w-md mx-auto">
            <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase tracking-widest">Global Pricing Model</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2 uppercase tracking-wide">
                Primary pricing is defined at the Variant level. Unified tax rates and service charges applies globally unless overridden at the store level.
            </p>
        </div>
        <div className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 max-w-sm mx-auto">
            <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Default Tax Rate</span>
                <span className="text-sm font-black text-slate-900">13%</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Currency</span>
                <span className="text-sm font-black text-slate-900">USD ($)</span>
            </div>
        </div>
    </div>
);

const InventoryTab: React.FC<{ formData: any, setFormData: any, modifierGroups: ModifierGroup[] }> = ({ formData, setFormData, modifierGroups }) => {

    // Helper: Find ingredient details
    const getIngredient = (id: string): Ingredient | undefined => mockIngredients.find(i => i.id === id);

    // --- Actions ---

    const handleVariantRecipeChange = (variantId: string, newRecipe: RecipeEntry[]) => {
        const newVariants = formData.variants.map((v: ItemVariant) =>
            v.id === variantId ? { ...v, recipe: newRecipe } : v
        );
        setFormData({ ...formData, variants: newVariants });
    };

    const handleAddIngredientToRecipe = (variantId: string, ingredientId: string) => {
        if (!ingredientId) return;
        const variant = formData.variants.find((v: ItemVariant) => v.id === variantId);
        if (!variant) return;

        const currentRecipe = variant.recipe || [];
        if (currentRecipe.find((r: RecipeEntry) => r.ingredientId === ingredientId)) return; // Already exists

        const newEntry: RecipeEntry = { ingredientId, quantity: 0 };
        handleVariantRecipeChange(variantId, [...currentRecipe, newEntry]);
    };

    const handleRemoveIngredientFromRecipe = (variantId: string, ingredientId: string) => {
        const variant = formData.variants.find((v: ItemVariant) => v.id === variantId);
        if (!variant) return;
        const newRecipe = (variant.recipe || []).filter((r: RecipeEntry) => r.ingredientId !== ingredientId);
        handleVariantRecipeChange(variantId, newRecipe);
    };

    const handleUpdateRecipeQuantity = (variantId: string, ingredientId: string, qty: number) => {
        const variant = formData.variants.find((v: ItemVariant) => v.id === variantId);
        if (!variant) return;
        const newRecipe = (variant.recipe || []).map((r: RecipeEntry) =>
            r.ingredientId === ingredientId ? { ...r, quantity: qty } : r
        );
        handleVariantRecipeChange(variantId, newRecipe);
    };

    const handleModifierMappingChange = (modifierOptionId: string, ingredientId: string, quantity: number) => {
        const currentMappings = (formData.modifierMappings || []) as ModifierIngredientMapping[];

        // Remove existing mapping for this option
        const filtered = currentMappings.filter(m => m.modifierOptionId !== modifierOptionId);

        if (ingredientId) {
            // Add new mapping
            const newMapping: ModifierIngredientMapping = { modifierOptionId, ingredientId, quantity };
            setFormData({ ...formData, modifierMappings: [...filtered, newMapping] });
        } else {
            // Just removed
            setFormData({ ...formData, modifierMappings: filtered });
        }
    };

    return (
        <div className="space-y-12 pb-24">
            {/* Header */}
            <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-4 mb-2">Inventory Logic Setup</h3>
                <p className="text-xs text-slate-500 font-medium pl-5 max-w-2xl">
                    Define the precise Bill of Materials (BOM) for each variant and map modifier options to ingredients.
                    <br />
                    <span className="text-emerald-600 font-bold">Note:</span> All input quantities are deducted from <span className="font-bold text-slate-900">Inventory &gt; Ingredients</span> automatically upon sale.
                </p>
            </div>

            {/* PART 1: Variant Recipes */}
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <Layers size={16} className="text-slate-400" />
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">A. Base Recipe (Per Variant)</h4>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {formData.variants.map((variant: ItemVariant) => (
                        <div key={variant.id} className="p-6 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                            <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-4">
                                <div>
                                    <div className="text-sm font-black text-slate-900">{variant.name}</div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Base Variant</div>
                                </div>
                                <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <Package size={16} className="text-slate-400" />
                                </div>
                            </div>

                            {/* Ingredients List */}
                            <div className="space-y-2">
                                {(variant.recipe || []).length === 0 && (
                                    <div className="text-center py-6 text-slate-400 text-xs italic bg-white rounded-xl border border-dashed border-slate-200">
                                        No ingredients mapped yet.
                                    </div>
                                )}
                                {(variant.recipe || []).map((entry: RecipeEntry) => {
                                    const ing = getIngredient(entry.ingredientId);
                                    if (!ing) return null;
                                    return (
                                        <div key={entry.ingredientId} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                            <div className="flex-1">
                                                <div className="text-xs font-bold text-slate-700">{ing.name}</div>
                                                <div className="text-[9px] text-slate-400 uppercase tracking-wide">Unit: {ing.unit}</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="number"
                                                    min="0"
                                                    step="0.001"
                                                    value={entry.quantity || ''}
                                                    onChange={(e) => handleUpdateRecipeQuantity(variant.id, entry.ingredientId, parseFloat(e.target.value))}
                                                    placeholder="Qty"
                                                    className="w-20 px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-right focus:border-slate-900"
                                                />
                                                <span className="text-[10px] font-bold text-slate-400 w-8">{ing.unit}</span>
                                                <button
                                                    onClick={() => handleRemoveIngredientFromRecipe(variant.id, entry.ingredientId)}
                                                    className="p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Add Ingredient Footer */}
                            <div className="mt-4 pt-4 border-t border-slate-200">
                                <select
                                    onChange={(e) => {
                                        handleAddIngredientToRecipe(variant.id, e.target.value);
                                        e.target.value = '';
                                    }}
                                    className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 focus:border-slate-900 hover:border-slate-300 transition-all cursor-pointer"
                                >
                                    <option value="">+ Add Ingredient to Recipe...</option>
                                    {mockIngredients
                                        .filter(ing => !(variant.recipe || []).find((r: RecipeEntry) => r.ingredientId === ing.id))
                                        .map(ing => (
                                            <option key={ing.id} value={ing.id}>{ing.name} ({ing.unit})</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* PART 2: Modifier Mappings */}
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <Settings2 size={16} className="text-slate-400" />
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">B. Topping & Modifier Mapping</h4>
                </div>

                <div className="space-y-6">
                    {formData.modifierGroupIds.map((groupId: string) => {
                        const group = modifierGroups.find(g => g.id === groupId);
                        if (!group) return null;

                        return (
                            <div key={groupId} className="border border-slate-200 rounded-[28px] overflow-hidden">
                                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                                    <div>
                                        <div className="text-sm font-black text-slate-900">{group.name}</div>
                                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">
                                            {group.options.length} Options • Half/Half: {group.isHalfAndHalfEnabled ? 'Yes' : 'No'}
                                        </div>
                                    </div>
                                    {group.isPremiumRuleEnabled && (
                                        <span className="px-2 py-1 bg-amber-50 text-amber-700 text-[9px] font-black uppercase tracking-widest rounded border border-amber-100">
                                            Premium Rules Active
                                        </span>
                                    )}
                                </div>

                                <div className="divide-y divide-slate-100 bg-white">
                                    {group.options.map(opt => {
                                        const mapping: ModifierIngredientMapping | undefined = (formData.modifierMappings || []).find((m: ModifierIngredientMapping) => m.modifierOptionId === opt.id);
                                        const linkedIng = mapping ? getIngredient(mapping.ingredientId) : null;

                                        return (
                                            <div key={opt.id} className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors group">
                                                <div className="w-1/3 shrink-0">
                                                    <div className="text-xs font-black text-slate-800">{opt.name}</div>
                                                    <div className="text-[10px] text-slate-400 font-medium">Price: +${opt.price}</div>
                                                </div>

                                                <div className="flex-1 flex items-center gap-4">
                                                    {/* Ingredient Selector */}
                                                    <div className="flex-1">
                                                        <select
                                                            value={mapping?.ingredientId || ''}
                                                            onChange={(e) => handleModifierMappingChange(opt.id, e.target.value, mapping?.quantity || 0)}
                                                            className={`w-full px-3 py-2 rounded-xl text-xs font-bold border transition-all ${mapping ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-200 text-slate-400'}`}
                                                        >
                                                            <option value="">No Ingredient Mapped (Non-Inventory)</option>
                                                            {mockIngredients.map(ing => (
                                                                <option key={ing.id} value={ing.id}>{ing.name} ({ing.unit})</option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    {/* Quantity Input */}
                                                    {mapping && linkedIng && (
                                                        <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                                                            <div className="flex flex-col items-end">
                                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">Base Qty (Full)</span>
                                                                <div className="flex items-center">
                                                                    <input
                                                                        type="number"
                                                                        step="0.001"
                                                                        min="0"
                                                                        value={mapping.quantity}
                                                                        onChange={(e) => handleModifierMappingChange(opt.id, mapping.ingredientId, parseFloat(e.target.value))}
                                                                        className="w-20 px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-black text-right focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                                                                    />
                                                                    <span className="ml-2 text-[10px] font-bold text-slate-500 w-8">{linkedIng.unit}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Info Footer */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3">
                <Info size={16} className="text-slate-400 mt-0.5" />
                <div>
                    <h5 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Logic Explanation</h5>
                    <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                        • <strong>Variant Recipe:</strong> Deducted 100% every time this variant is sold.
                        <br />
                        • <strong>Modifier Mapping:</strong> Deducted based on selection. If placement is "Left/Right" (Half), the system automatically deducts 50% of the Base Qty.
                    </p>
                </div>
            </div>
        </div>
    );
};

const AvailabilityTab: React.FC<{ formData: any, setFormData: any }> = ({ formData, setFormData }) => (
    <div className="space-y-8 max-w-lg">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-4 mb-6">Channel Visibility</h3>

        <div className="space-y-4">
            <label className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:border-slate-900 transition-all">
                <input
                    type="checkbox"
                    checked={formData.isAvailable}
                    onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                    className="w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                />
                <div>
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Main Public Switch</span>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">Global visibility across ALL channels and stores.</p>
                </div>
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                {['POS', 'Online', 'Uber Eats'].map(channel => (
                    <div key={channel} className="p-4 bg-white border border-slate-100 rounded-2xl text-center shadow-sm">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">{channel}</span>
                        <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Live</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const StoreOverridesTab: React.FC<{ formData: any, setFormData: any }> = ({ formData: _formData, setFormData: _setFormData }) => (
    <div className="space-y-8">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-4 mb-6">Localized Adaptations</h3>

        <div className="bg-slate-50/50 rounded-3xl border border-slate-100 overflow-hidden">
            <table className="w-full text-left">
                <thead>
                    <tr className="bg-white border-b border-slate-100">
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Store Branch</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Override Type</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    {[
                        { name: 'Downtown Branch', type: 'Custom Price', status: 'Active' },
                        { name: 'Westside Mall', type: 'Availability', status: 'Global' },
                        { name: 'Airport Kiosk', type: 'Premium Rules', status: 'Overridden' }
                    ].map(store => (
                        <tr key={store.name} className="hover:bg-white transition-all cursor-pointer group uppercase tracking-tight">
                            <td className="px-6 py-4 text-xs font-black text-slate-900">{store.name}</td>
                            <td className="px-6 py-4 text-[10px] font-bold text-slate-500">{store.type}</td>
                            <td className="px-6 py-4 text-right">
                                <span className={`text-[9px] font-black px-2 py-0.5 rounded-lg border ${store.status === 'Global' ? 'text-slate-400 bg-slate-100 border-slate-200' : 'text-emerald-600 bg-emerald-50 border-emerald-100'}`}>
                                    {store.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const AuditLogTab: React.FC<{ auditLog: any[] }> = ({ auditLog }) => (
    <div className="space-y-8">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-4 mb-6">Immutable Governance Trail</h3>

        <div className="space-y-4">
            {auditLog.length > 0 ? auditLog.map((log, idx) => (
                <div key={idx} className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors group">
                    <div className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center text-white text-[10px] font-black shrink-0">
                        {log.user.charAt(0)}
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-black text-slate-900">{log.user}</span>
                            <span className="text-[10px] font-bold text-slate-400 italic">
                                {new Date(log.timestamp).toLocaleString()}
                            </span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium bg-white px-3 py-1.5 rounded-xl border border-slate-100 inline-block shadow-sm">
                            {log.action}
                        </p>
                    </div>
                </div>
            )) : (
                <div className="text-center py-20 text-slate-300 italic">No activity recorded for this session.</div>
            )}
        </div>
    </div>
);


