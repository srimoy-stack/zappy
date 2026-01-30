import React, { useState } from 'react';
import {
    ChevronLeft, Save, Globe, Info, Clock, ShieldCheck,
    Layers, Settings2, DollarSign, Package,
    Plus, Trash2, GripVertical, ChevronDown, Check,
    CircleDot, Radio, ArrowRight
} from 'lucide-react';
import {
    Item, Category, ItemType, ItemVariantGroup, ItemVariant,
    ModifierGroup, ModifierOption, SubOption
} from '../../types/items';
import { cn } from '@/utils';

/* --- SUB-COMPONENTS (Defined above main component to ensure initialization) --- */

const PlacementBtn = ({ icon: Icon, label, active }: { icon: any, label: string, active: boolean }) => (
    <div className={cn(
        "flex-1 h-full flex flex-col items-center justify-center gap-2 rounded-[24px] border-3 transition-all cursor-pointer group/pb shadow-sm",
        active ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200 scale-105" : "bg-slate-50 border-transparent text-slate-300 hover:border-slate-200 hover:bg-white"
    )}>
        <Icon size={30} strokeWidth={3} className={cn("transition-transform", active ? "scale-110" : "group-hover/pb:scale-110")} />
        <span className="text-[10px] font-black uppercase tracking-widest leading-none">{label}</span>
    </div>
);

const HalfIconLeft = (props: any) => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22V2Z" fill="currentColor" fillOpacity="0.4" />
        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22V12V2Z" fill="currentColor" />
    </svg>
);

const HalfIconRight = (props: any) => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180" {...props}>
        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22V2Z" fill="currentColor" fillOpacity="0.4" />
        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22V12V2Z" fill="currentColor" />
    </svg>
);

const RuleToggle = ({ label, checked, onChange, color = 'emerald' }: any) => {
    const colorClasses: any = {
        blue: "bg-blue-600 border-blue-600 shadow-blue-100",
        purple: "bg-purple-600 border-purple-600 shadow-purple-100",
        amber: "bg-amber-500 border-amber-500 shadow-amber-100",
        emerald: "bg-emerald-600 border-emerald-600 shadow-emerald-100"
    };

    return (
        <div
            onClick={() => onChange(!checked)}
            className={cn(
                "flex items-center gap-5 cursor-pointer select-none group/tgl px-8 py-4 rounded-[30px] border-3 transition-all",
                checked ? `${colorClasses[color]} text-white shadow-2xl scale-[1.02]` : "bg-white border-slate-100 hover:border-slate-300 text-slate-500 hover:text-slate-900"
            )}
        >
            <div className={cn(
                "w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all",
                checked ? "bg-white border-white scale-110" : "bg-slate-50 border-slate-200"
            )}>
                {checked && <Check size={20} className={cn(color === 'amber' ? 'text-amber-500' : color === 'blue' ? 'text-blue-600' : color === 'purple' ? 'text-purple-600' : 'text-emerald-600')} strokeWidth={4} />}
            </div>
            <span className="font-black uppercase tracking-widest text-[11px] whitespace-nowrap">{label}</span>
        </div>
    );
};

/* --- TAB SECTIONS --- */

const GeneralTab = ({ formData, setFormData, categories, isExisting }: any) => (
    <div className="space-y-16 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-600">
        <div className="space-y-10">
            <div className="flex items-center gap-4 border-l-[6px] border-slate-900 pl-6 h-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-[0.15em]">Core Configuration</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <div className="flex items-center justify-between ml-1">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Product Type (Locked after save)</label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {(['SINGLE', 'COMBO'] as ItemType[]).map(type => (
                            <button
                                key={type}
                                disabled={isExisting}
                                onClick={() => setFormData({ ...formData, productType: type })}
                                className={cn(
                                    "px-6 py-5 rounded-[22px] border-2 text-[11px] font-black uppercase tracking-widest transition-all",
                                    formData.productType === type
                                        ? "bg-slate-900 text-white border-slate-900 shadow-2xl shadow-slate-200 scale-[1.02]"
                                        : "bg-white text-slate-400 border-slate-100 hover:border-slate-300",
                                    isExisting && formData.productType !== type && "opacity-30 cursor-not-allowed"
                                )}
                            >
                                {type} PRODUCT
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Menu Category</label>
                    <div className="relative">
                        <select
                            value={formData.categoryId}
                            onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                            className="w-full px-8 py-5 bg-slate-50 border-2 border-slate-100 rounded-[22px] text-sm font-black text-slate-900 focus:border-slate-900 focus:bg-white transition-all outline-none appearance-none"
                        >
                            <option value="">Select Catalog Pool</option>
                            {categories.map((c: any) => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                    </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Merchant Display Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-10 py-6 bg-slate-50 border-2 border-slate-100 rounded-[30px] text-2xl font-black text-slate-900 focus:border-slate-900 focus:bg-white transition-all outline-none shadow-sm"
                        placeholder="e.g. Traditional Sicilian Pepperoni"
                    />
                </div>

                <div className="md:col-span-2 space-y-4">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Public Story</label>
                    <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={5}
                        className="w-full px-10 py-8 bg-slate-50 border-2 border-slate-100 rounded-[30px] text-sm font-bold text-slate-600 focus:border-slate-900 focus:bg-white transition-all outline-none resize-none leading-relaxed"
                        placeholder="Public-facing description..."
                    />
                </div>
            </div>
        </div>
    </div>
);

const VariantGroupCard = ({ group, updateGroup, removeGroup, isCombo }: any) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const addVariant = () => {
        const newVariant: ItemVariant = {
            id: 'v-' + Date.now(),
            name: 'New Option',
            basePrice: 0,
            isAvailable: true
        };
        updateGroup({ ...group, variants: [...group.variants, newVariant] });
    };

    return (
        <div className="bg-white border-2 border-slate-100 rounded-[44px] shadow-sm overflow-hidden transition-all hover:shadow-2xl hover:border-slate-200">
            <div className="px-10 py-10 bg-slate-50/80 flex items-center justify-between border-b-2 border-slate-100">
                <div className="flex items-center gap-8">
                    <div className="cursor-grab p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-300">
                        <GripVertical size={24} />
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-4">
                            <input
                                value={group.name}
                                onChange={(e) => updateGroup({ ...group, name: e.target.value.toUpperCase() })}
                                className="bg-transparent text-lg font-black text-slate-900 uppercase tracking-widest outline-none border-b-2 border-transparent focus:border-slate-900 w-[450px] h-12 transition-all"
                                placeholder={isCombo ? "COMPONENT NAME (e.g. PIZZA 1)" : "GROUP NAME (e.g. SIZE)"}
                            />
                            <span className="px-5 py-1.5 bg-slate-900 text-white text-[10px] font-black rounded-xl uppercase tracking-widest shadow-lg shadow-slate-200 italic">Mandatory</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="p-4 text-slate-400 hover:text-slate-900 transition-all bg-white rounded-3xl border-2 border-slate-100 shadow-sm"
                    >
                        <ChevronDown size={24} className={cn("transition-transform duration-500", isExpanded && "rotate-180")} />
                    </button>
                    <button onClick={removeGroup} className="p-4 text-slate-200 hover:text-rose-500 transition-colors">
                        <Trash2 size={24} />
                    </button>
                </div>
            </div>

            {isExpanded && (
                <div className="p-12 space-y-10 animate-in slide-in-from-top-6 duration-700">
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                        {group.variants.map((v: ItemVariant) => {
                            const isDefault = group.defaultVariantId === v.id;
                            return (
                                <div
                                    key={v.id}
                                    onClick={() => updateGroup({ ...group, defaultVariantId: v.id })}
                                    className={cn(
                                        "relative group/v flex flex-col items-center bg-slate-50 border-4 rounded-[40px] p-8 transition-all cursor-pointer hover:border-slate-300",
                                        isDefault ? "border-slate-900 bg-white scale-[1.05] z-10 shadow-3xl shadow-slate-200" : "border-transparent"
                                    )}
                                >
                                    {isDefault && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-emerald-500 text-white text-[9px] font-black rounded-full uppercase shadow-xl shadow-emerald-100 z-20">
                                            Default
                                        </div>
                                    )}

                                    <div className={cn(
                                        "w-24 h-24 bg-white rounded-[32px] flex items-center justify-center border-2 mb-6 transition-transform group-hover:scale-110",
                                        isDefault ? "border-emerald-500" : "border-slate-100"
                                    )}>
                                        <Radio size={40} className={isDefault ? "text-emerald-500" : "text-slate-100"} strokeWidth={1} />
                                    </div>

                                    <div className="text-center space-y-4 w-full">
                                        <input
                                            value={v.name}
                                            onClick={(e) => e.stopPropagation()}
                                            onChange={(e) => {
                                                const newVariants = group.variants.map((vnt: any) => vnt.id === v.id ? { ...vnt, name: e.target.value } : vnt);
                                                updateGroup({ ...group, variants: newVariants });
                                            }}
                                            className="w-full bg-transparent text-sm font-black text-slate-900 text-center outline-none"
                                            placeholder="Label"
                                        />
                                        <div className="flex items-center justify-center gap-1.5 px-6 py-3 bg-white rounded-2xl border-2 border-slate-100 inline-flex mx-auto shadow-sm">
                                            <span className="text-[10px] font-black text-slate-300">$</span>
                                            <input
                                                type="number"
                                                value={v.basePrice}
                                                onClick={(e) => e.stopPropagation()}
                                                onChange={(e) => {
                                                    const newVariants = group.variants.map((vnt: any) => vnt.id === v.id ? { ...vnt, basePrice: parseFloat(e.target.value) || 0 } : vnt);
                                                    updateGroup({ ...group, variants: newVariants });
                                                }}
                                                className="w-20 bg-transparent text-xs font-black text-slate-900 outline-none text-center tabular-nums"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            updateGroup({
                                                ...group,
                                                variants: group.variants.filter((vnt: any) => vnt.id !== v.id),
                                                defaultVariantId: isDefault ? '' : group.defaultVariantId
                                            });
                                        }}
                                        className="absolute -top-3 -right-3 p-3 bg-white text-slate-200 hover:text-rose-500 rounded-2xl shadow-xl border border-slate-100 transition-all opacity-0 group-hover/v:opacity-100"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            );
                        })}
                        <button
                            onClick={addVariant}
                            className="border-4 border-dashed border-slate-100 rounded-[40px] bg-slate-50/50 p-10 flex flex-col items-center justify-center gap-4 hover:border-slate-300 hover:bg-white transition-all group/add"
                        >
                            <div className="w-20 h-20 bg-white rounded-[32px] flex items-center justify-center shadow-xl border-2 border-slate-50 group-hover/add:scale-125 transition-all">
                                <Plus size={40} className="text-slate-200" />
                            </div>
                            <span className="text-[11px] font-black uppercase text-slate-300">New Option</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const ModifierOptionRow = ({ opt, group, updateOption, removeOption }: any) => {
    return (
        <div className="p-12 bg-slate-50/50 border-3 border-slate-100 rounded-[50px] flex flex-col gap-12 transition-all hover:bg-white hover:border-slate-200 hover:shadow-3xl animate-in scale-in duration-500">
            <div className="flex items-center gap-12">
                <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center border-2 border-slate-100 shadow-inner shrink-0">
                    <Package size={44} className="text-slate-100" />
                </div>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Option Name</label>
                        <input
                            value={opt.name}
                            onChange={(e) => updateOption({ ...opt, name: e.target.value })}
                            className="w-full bg-white border-2 border-slate-100 rounded-[28px] px-8 py-5 text-lg font-black text-slate-900 outline-none focus:border-slate-900 shadow-sm"
                            placeholder="e.g. Extra Cheese"
                        />
                    </div>
                    <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 text-center block">Surcharge</label>
                        <div className="relative">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 font-black">$</span>
                            <input
                                type="number"
                                value={opt.price}
                                onChange={(e) => updateOption({ ...opt, price: parseFloat(e.target.value) || 0 })}
                                className="w-full bg-white border-2 border-slate-100 rounded-[28px] pl-12 pr-6 py-5 text-lg font-black text-slate-900 outline-none focus:border-slate-900 shadow-sm text-center tabular-nums"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-8 pt-10">
                        {group.isPremiumRuleEnabled && (
                            <label className="flex items-center gap-4 cursor-pointer p-4 bg-white border-2 border-slate-100 rounded-[24px] shadow-sm select-none">
                                <div className={cn(
                                    "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                                    opt.isPremium ? "bg-amber-500 border-amber-500" : "bg-slate-50 border-slate-200"
                                )}>
                                    {opt.isPremium && <Check size={18} className="text-white" strokeWidth={4} />}
                                </div>
                                <span className="text-[10px] font-black uppercase text-slate-400">Premium</span>
                                <input type="checkbox" checked={opt.isPremium} onChange={(e) => updateOption({ ...opt, isPremium: e.target.checked })} className="hidden" />
                            </label>
                        )}
                        <button onClick={removeOption} className="ml-auto p-4 text-slate-200 hover:text-rose-500 transition-all">
                            <Trash2 size={28} />
                        </button>
                    </div>
                </div>

                {group.isToppingGroup && (
                    <div className="w-80 p-8 bg-white border-2 border-slate-100 rounded-[40px] shadow-sm shrink-0 space-y-5">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center block">Visual Scope</span>
                        <div className="flex items-center justify-center gap-3 h-20">
                            <PlacementBtn icon={CircleDot} label="Full" active />
                            <PlacementBtn icon={HalfIconLeft} label="Left" active={false} />
                            <PlacementBtn icon={HalfIconRight} label="Right" active={false} />
                        </div>
                    </div>
                )}
            </div>

            {/* Sub-Options System */}
            <div className="ml-20 pl-16 border-l-4 border-slate-100 space-y-10">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <ArrowRight size={24} strokeWidth={4} className="text-emerald-500" />
                        <h5 className="text-[14px] font-black text-slate-900 uppercase">Nested Prep Choices (Sauce Model)</h5>
                    </div>
                    <button
                        onClick={() => {
                            const newSub: SubOption = { id: 'sub-' + Date.now(), name: 'New Intensity', price: 0 };
                            updateOption({ ...opt, subOptions: [...(opt.subOptions || []), newSub] });
                        }}
                        className="px-8 py-3 bg-white border-2 border-slate-100 rounded-[22px] text-[10px] font-black text-slate-400 uppercase hover:border-emerald-500"
                    >
                        + Add Sub-choice
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
                    {(opt.subOptions || []).map((sub: any, sidx: number) => (
                        <div key={sub.id} className="flex items-center gap-8 bg-white p-8 rounded-[36px] border-2 border-slate-100 shadow-sm group/sub transition-all hover:border-emerald-300">
                            <Radio size={28} className="text-emerald-200" strokeWidth={3} />
                            <div className="flex-1 space-y-2">
                                <input
                                    value={sub.name}
                                    onChange={(e) => {
                                        const subOpts = [...(opt.subOptions || [])];
                                        subOpts[sidx] = { ...sub, name: e.target.value };
                                        updateOption({ ...opt, subOptions: subOpts });
                                    }}
                                    className="w-full text-base font-black text-slate-700 bg-transparent outline-none focus:text-emerald-500"
                                    placeholder="Prep level"
                                />
                                <div className="flex items-center gap-3 text-slate-400 font-bold">
                                    <span>$</span>
                                    <input
                                        type="number"
                                        value={sub.price}
                                        onChange={(e) => {
                                            const subOpts = [...(opt.subOptions || [])];
                                            subOpts[sidx] = { ...sub, price: parseFloat(e.target.value) || 0 };
                                            updateOption({ ...opt, subOptions: subOpts });
                                        }}
                                        className="w-24 bg-transparent outline-none tabular-nums"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => updateOption({ ...opt, subOptions: opt.subOptions.filter((s: any) => s.id !== sub.id) })}
                                className="p-3 text-slate-200 hover:text-rose-500 transition-all opacity-0 group-hover/sub:opacity-100"
                            >
                                <Trash2 size={24} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ModifierGroupCard = (props: any) => {
    const { group, variantGroups, updateGroup, removeGroup, isCombo } = props;
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="bg-white border-2 border-slate-100 rounded-[50px] shadow-sm overflow-hidden transition-all hover:shadow-2xl">
            <div className="px-12 py-12 bg-slate-50/80 border-b-2 border-slate-100 flex flex-col gap-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        <div className="p-4 bg-white rounded-3xl shadow-sm border border-slate-100 text-slate-300">
                            <GripVertical size={28} />
                        </div>
                        <div className="space-y-5">
                            <input
                                value={group.name}
                                onChange={(e) => updateGroup({ ...group, name: e.target.value.toUpperCase() })}
                                className="bg-transparent text-xl font-black text-slate-900 uppercase tracking-widest outline-none border-b-3 border-transparent focus:border-slate-900 w-[600px] h-14 transition-all"
                            />
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-4 px-6 py-3 bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
                                    <span className="text-[10px] font-black text-slate-400 uppercase">Min</span>
                                    <input
                                        type="number"
                                        value={group.minSelection}
                                        onChange={(e) => updateGroup({ ...group, minSelection: parseInt(e.target.value) || 0 })}
                                        className="w-12 text-center text-sm font-black text-slate-900 bg-transparent outline-none tabular-nums"
                                    />
                                </div>
                                <div className="flex items-center gap-4 px-6 py-3 bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
                                    <span className="text-[10px] font-black text-slate-400 uppercase">Max</span>
                                    <input
                                        type="number"
                                        value={group.maxSelection}
                                        onChange={(e) => updateGroup({ ...group, maxSelection: parseInt(e.target.value) || 0 })}
                                        className="w-12 text-center text-sm font-black text-slate-900 bg-transparent outline-none tabular-nums"
                                    />
                                </div>
                                {isCombo && (
                                    <div className="flex items-center gap-6 pl-10 border-l-3 border-slate-200">
                                        <span className="text-[10px] font-black text-emerald-600 uppercase">Bind Component:</span>
                                        <select
                                            value={group.linkedVariantGroupId || ''}
                                            onChange={(e) => updateGroup({ ...group, linkedVariantGroupId: e.target.value })}
                                            className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none"
                                        >
                                            <option value="">Choose Component...</option>
                                            {variantGroups.map((vg: any) => <option key={vg.id} value={vg.id}>{vg.name}</option>)}
                                        </select>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsExpanded(!isExpanded)} className="p-5 text-slate-400 hover:text-slate-900 transition-all bg-white rounded-[32px] border-2 border-slate-100 shadow-sm">
                            <ChevronDown size={32} className={cn("transition-transform", isExpanded && "rotate-180")} />
                        </button>
                        <button onClick={removeGroup} className="p-5 text-slate-200 hover:text-rose-500 transition-colors">
                            <Trash2 size={32} />
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-12 pl-16 pt-2 border-t-2 border-slate-100/50">
                    <RuleToggle label="Placement Logic" checked={group.isToppingGroup} onChange={(v: any) => updateGroup({ ...group, isToppingGroup: v })} color="blue" />
                    <RuleToggle label="Half & Half" checked={group.isHalfAndHalfEnabled} onChange={(v: any) => updateGroup({ ...group, isHalfAndHalfEnabled: v })} color="purple" />
                    <RuleToggle label="Premium Rule" checked={group.isPremiumRuleEnabled} onChange={(v: any) => updateGroup({ ...group, isPremiumRuleEnabled: v })} color="amber" />
                </div>
            </div>

            {isExpanded && (
                <div className="p-16 space-y-12">
                    <div className="grid grid-cols-1 gap-12">
                        {group.options.map((opt: ModifierOption, optIdx: number) => (
                            <ModifierOptionRow
                                key={opt.id}
                                opt={opt}
                                group={group}
                                updateOption={(updated: any) => {
                                    const newOptions = [...group.options];
                                    newOptions[optIdx] = updated;
                                    updateGroup({ ...group, options: newOptions });
                                }}
                                removeOption={() => updateGroup({ ...group, options: group.options.filter((o: any) => o.id !== opt.id) })}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => {
                            const newOption: ModifierOption = { id: 'opt-' + Date.now(), name: 'New Choice', price: 1.00, subOptions: [] };
                            updateGroup({ ...group, options: [...group.options, newOption] });
                        }}
                        className="w-full py-16 border-6 border-dashed border-slate-50 rounded-[60px] bg-slate-50/20 flex flex-col items-center justify-center gap-8 group transition-all hover:bg-white hover:border-slate-200"
                    >
                        <Plus size={48} className="text-emerald-500" strokeWidth={4} />
                        <span className="text-[16px] font-black uppercase text-slate-300">Add Choice variant</span>
                    </button>
                </div>
            )}
        </div>
    );
};

/* --- MAIN COMPONENT --- */

export const ItemEditScreen: React.FC<ItemEditScreenProps> = ({ item, onClose, categories }) => {
    const [activeTab, setActiveTab] = useState<TabId>('GENERAL');
    const [formData, setFormData] = useState<Item>(() => {
        if (item) return JSON.parse(JSON.stringify(item));
        return {
            id: 'new-' + Date.now(),
            productType: 'SINGLE',
            name: '',
            description: '',
            categoryId: '',
            isAvailable: true,
            variantGroups: [],
            modifierGroups: [],
            storeOverrides: [],
            auditLog: []
        };
    });

    const isExisting = item !== null;

    const tabs: { id: TabId, label: string, icon: any }[] = [
        { id: 'GENERAL', label: 'General', icon: Info },
        { id: 'VARIANTS', label: 'Variants', icon: Layers },
        { id: 'MODIFIERS', label: 'Modifiers', icon: Settings2 },
        { id: 'PRICING', label: 'Pricing', icon: DollarSign },
        { id: 'INVENTORY', label: 'Inventory', icon: Package },
        { id: 'AVAILABILITY', label: 'Availability', icon: Clock },
        { id: 'OVERRIDES', label: 'Overrides', icon: Globe },
        { id: 'AUDIT', label: 'Audit Log', icon: ShieldCheck },
    ];

    const handleSave = () => {
        if (!formData.name) return alert('Name is required');
        if (formData.productType === 'COMBO' && formData.variantGroups.length === 0) return alert('Combo must have components');
        if (formData.variantGroups.some(vg => vg.variants.length > 0 && !vg.defaultVariantId)) return alert('Missing default selection in variant group');
        if (formData.productType === 'COMBO' && formData.modifierGroups.some(mg => !mg.linkedVariantGroupId)) return alert('Combo modifiers must be bound to a component');

        console.log('Saving Configuration:', formData);
        onClose();
    };

    return (
        <div className="bg-slate-50/50 -mx-4 -mt-6 px-4 pt-6 min-h-screen">
            {/* Header */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 -mx-4 px-8 py-5 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-6">
                    <button
                        onClick={onClose}
                        className="p-2.5 text-slate-400 hover:text-slate-900 transition-all bg-slate-50 rounded-2xl border border-slate-100"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-black text-slate-900 tracking-tight">
                                {isExisting ? `Edit: ${formData.name}` : 'Setup Offering'}
                            </h2>
                            <span className={cn(
                                "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                                formData.productType === 'SINGLE' ? "bg-blue-50 text-blue-700 border-blue-100" : "bg-purple-50 text-purple-700 border-purple-100"
                            )}>
                                {formData.productType} PRODUCT
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-10 py-3.5 bg-slate-900 text-white rounded-[22px] text-xs font-black uppercase tracking-widest hover:bg-emerald-600 shadow-xl shadow-slate-200 transition-all"
                    >
                        <Save size={16} className="text-emerald-400" />
                        Save Product
                    </button>
                </div>
            </div>

            {/* Layout */}
            <div className="max-w-[1550px] mx-auto py-10 flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full lg:w-72 shrink-0 space-y-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "w-full flex items-center gap-4 px-6 py-4 rounded-[22px] text-[11px] font-black uppercase tracking-widest transition-all",
                                activeTab === tab.id
                                    ? "bg-slate-900 text-white shadow-2xl scale-[1.03]"
                                    : "text-slate-500 hover:bg-white/80 hover:text-slate-900"
                            )}
                        >
                            <tab.icon size={18} strokeWidth={activeTab === tab.id ? 3 : 2.5} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Editor Area */}
                <div className="flex-1 bg-white rounded-[44px] border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden min-h-[850px]">
                    <div className="p-16 h-full overflow-y-auto max-h-[calc(100vh-200px)]">
                        {activeTab === 'GENERAL' && <GeneralTab formData={formData} setFormData={setFormData} categories={categories} isExisting={isExisting} />}
                        {activeTab === 'VARIANTS' && (
                            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                <div className="flex items-center justify-between border-l-[6px] border-slate-900 pl-6 h-12">
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-[0.15em]">Variant Structure</h3>
                                    <button
                                        onClick={() => {
                                            const newGroup: ItemVariantGroup = { id: 'vg-' + Date.now(), name: 'NEW GROUP', isRequired: true, defaultVariantId: '', variants: [], sortOrder: formData.variantGroups.length + 1 };
                                            setFormData({ ...formData, variantGroups: [...formData.variantGroups, newGroup] });
                                        }}
                                        className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-[20px] text-[11px] font-black uppercase tracking-widest"
                                    >
                                        <Plus size={18} strokeWidth={4} /> Add Group
                                    </button>
                                </div>
                                <div className="space-y-8">
                                    {formData.variantGroups.map((group, idx) => (
                                        <VariantGroupCard
                                            key={group.id}
                                            group={group}
                                            isCombo={formData.productType === 'COMBO'}
                                            updateGroup={(updated: any) => {
                                                const newGroups = [...formData.variantGroups];
                                                newGroups[idx] = updated;
                                                setFormData({ ...formData, variantGroups: newGroups });
                                            }}
                                            removeGroup={() => setFormData({ ...formData, variantGroups: formData.variantGroups.filter((_, i) => i !== idx) })}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'MODIFIERS' && (
                            <ModifiersTab formData={formData} setFormData={setFormData} />
                        )}
                        {activeTab === 'PRICING' && <PlaceholderTab icon={DollarSign} label="Pricing Logic" description="Financial overrides and fee structures appear here." />}
                        {activeTab === 'INVENTORY' && <PlaceholderTab icon={Package} label="Recipe / BOM" description="Link variants and modifier choices to raw ingredients." />}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ItemEditScreenProps {
    item: Item | null;
    onClose: () => void;
    categories: Category[];
}

type TabId = 'GENERAL' | 'VARIANTS' | 'MODIFIERS' | 'PRICING' | 'INVENTORY' | 'AVAILABILITY' | 'OVERRIDES' | 'AUDIT';

const ModifiersTab = (props: any) => {
    const { formData, setFormData } = props;
    const isCombo = formData.productType === 'COMBO';

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center justify-between border-l-[6px] border-slate-900 pl-6 h-12">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-[0.15em]">Modifier Pools</h3>
                <button
                    onClick={() => {
                        const newGroup: ModifierGroup = { id: 'mg-' + Date.now(), name: 'NEW POOL', isRequired: false, minSelection: 0, maxSelection: 10, isToppingGroup: true, isHalfAndHalfEnabled: true, isPremiumRuleEnabled: true, options: [] };
                        setFormData({ ...formData, modifierGroups: [...formData.modifierGroups, newGroup] });
                    }}
                    className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-[20px] text-[11px] font-black uppercase tracking-widest"
                >
                    <Plus size={18} strokeWidth={4} /> New Pool
                </button>
            </div>

            <div className="space-y-12">
                {formData.modifierGroups.map((group: any, idx: number) => (
                    <ModifierGroupCard
                        key={group.id}
                        group={group}
                        variantGroups={formData.variantGroups}
                        updateGroup={(updated: any) => {
                            const newGroups = [...formData.modifierGroups];
                            newGroups[idx] = updated;
                            setFormData({ ...formData, modifierGroups: newGroups });
                        }}
                        removeGroup={() => setFormData({ ...formData, modifierGroups: formData.modifierGroups.filter((_: any, i: number) => i !== idx) })}
                        isCombo={isCombo}
                    />
                ))}
            </div>
        </div>
    );
};
const PlaceholderTab = ({ icon: Icon, label, description }: any) => (
    <div className="flex flex-col items-center justify-center py-40 text-center space-y-6 animate-in fade-in duration-700">
        <div className="p-10 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center shadow-inner">
            <Icon size={64} className="text-slate-200" strokeWidth={1} />
        </div>
        <div className="max-w-sm">
            <h4 className="text-xl font-black text-slate-800 uppercase tracking-[0.2em]">{label}</h4>
            <p className="text-xs font-bold text-slate-400 mt-3 uppercase leading-relaxed tracking-widest">{description}</p>
        </div>
    </div>
);
