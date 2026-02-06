'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { useRouter } from 'next/navigation';
import {
    ShoppingCart,
    Plus,
    Minus,
    Trash2,
    Clock,
    ArrowRight,
    Search as SearchIcon,
    Scan,
    Star,
    Check,
    X,
    Tag,
    Settings as SettingsIcon,
    List,
    ChevronLeft,
    Box,
    Coffee,
    Pizza as PizzaIcon,
    IceCream,
    CupSoda,
    TicketPercent,
    Layers,
    History,
    LayoutGrid,
    LayoutList
} from 'lucide-react';
import { mockPOSProducts, mockPOSCategories } from '../mock/posData';
import { POSProduct, POSCartItem, OrderChannel } from '../types/pos';
import { formatCurrency, cn } from '@/utils';
import { POSDiscountModal } from '../components/POSDiscountModal';
import { POSQuickSettings } from '../components/POSQuickSettings';

export const POSMenuScreen: React.FC = () => {
    const { cart, setCart } = usePOS();
    const [activeCategory, setActiveCategory] = useState<string>(mockPOSCategories[0]?.id || 'all');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'ALL' | 'FAVORITES' | 'TOP' | 'HOLD'>('ALL');
    const [selectedProduct, setSelectedProduct] = useState<POSProduct | null>(null);
    const [showDiscountModal, setShowDiscountModal] = useState(false);
    const [showQuickSettings, setShowQuickSettings] = useState(false);
    const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
    const [orderType, setOrderType] = useState<OrderChannel>('Dine-In');
    const [viewMode, setViewMode] = useState<'GRID' | 'COMPACT'>('GRID');
    const [currentTime, setCurrentTime] = useState<string>('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        return () => clearInterval(timer);
    }, []);

    // Main Product Customization State
    const [selectedVariants, setSelectedVariants] = useState<{ [groupId: string]: string }>({});
    const [selectedModifiers, setSelectedModifiers] = useState<{ [optionId: string]: { name: string; price: number; quantity: number } }>({});

    // Combo Specific State
    const [comboSelections, setComboSelections] = useState<{ [slotId: string]: POSCartItem }>({});
    const [activeComboSlot, setActiveComboSlot] = useState<string | null>(null);
    const [slotToCustomize, setSlotToCustomize] = useState<string | null>(null);

    const router = useRouter();

    // Icon Mapping for Categories
    const categoryIcons: { [key: string]: any } = {
        'all': List,
        'cat1': PizzaIcon,
        'cat5': Layers,
        'cat2': Coffee,
        'cat3': CupSoda,
        'cat4': IceCream,
        'cat6': TicketPercent
    };

    const filteredProducts = useMemo(() => {
        return mockPOSProducts.filter(p =>
            (p.categoryId === activeCategory || activeCategory === 'all') &&
            (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.sku.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [activeCategory, searchQuery]);

    const handleProductClick = (product: POSProduct) => {
        if (product.hasVariants || product.isCombo || (product.modifierGroups && product.modifierGroups.length > 0)) {
            setSelectedProduct(product);
            const defaults: { [key: string]: string } = {};
            product.variantGroups?.forEach(g => {
                if (g.options?.[0]) defaults[g.id] = g.options[0].id;
            });
            setSelectedVariants(defaults);
            setSelectedModifiers({});
            setComboSelections({});
            setSlotToCustomize(null);

            const slots = product.comboSlots;
            if (product.isCombo && slots && slots.length > 0) {
                const firstSlot = slots[0];
                setActiveComboSlot(firstSlot ? firstSlot.id : null);
            } else {
                setActiveComboSlot(null);
            }
        } else {
            addToCart(product);
        }
    };

    const addToCart = (product: POSProduct, customizedData?: Partial<POSCartItem>) => {
        const item: POSCartItem = {
            id: Math.random().toString(36).substr(2, 9),
            productId: product.id,
            name: product.name,
            price: customizedData?.price ?? product.price,
            quantity: 1,
            variants: customizedData?.variants ?? [],
            modifiers: customizedData?.modifiers ?? [],
            comboSelections: customizedData?.comboSelections
        };
        setCart([...(cart || []), item]);
    };

    const updateQuantity = (id: string, delta: number) => {
        setCart(cart?.map(item => {
            if (item.id === id) return { ...item, quantity: Math.max(1, item.quantity + delta) };
            return item;
        }) || []);
    };

    const removeFromCart = (id: string) => {
        setCart(cart?.filter(item => item.id !== id) || []);
    };

    const subtotal = cart?.reduce((acc, item) => acc + (item.price * item.quantity), 0) || 0;
    const discountAmount = appliedDiscount > 0 ? (appliedDiscount < 1 ? subtotal * appliedDiscount : appliedDiscount) : 0;
    const tax = (subtotal - discountAmount) * 0.1;
    const total = subtotal - discountAmount + tax;

    const currentCustomPrice = useMemo(() => {
        if (!selectedProduct) return 0;
        let base = selectedProduct.price;
        Object.entries(selectedVariants).forEach(([gid, oid]) => {
            const group = selectedProduct.variantGroups?.find(g => g.id === gid);
            const opt = group?.options.find(o => o.id === oid);
            if (opt) base += opt.additionalPrice;
        });
        Object.values(selectedModifiers).forEach(mod => { base += mod.price * mod.quantity; });
        Object.values(comboSelections).forEach(sel => {
            const baseProd = mockPOSProducts.find(p => p.id === sel.productId);
            const basePrice = baseProd?.price || 0;
            if (sel.price > basePrice) base += (sel.price - basePrice);
        });
        return base;
    }, [selectedProduct, selectedVariants, selectedModifiers, comboSelections]);

    const handleAddCustomized = () => {
        if (!selectedProduct) return;
        if (selectedProduct.isCombo && selectedProduct.comboSlots) {
            const missing = selectedProduct.comboSlots.find(s => !comboSelections[s.id]);
            if (missing) return;
        }

        const variantsArr = Object.entries(selectedVariants).map(([gid, oid]) => ({
            groupId: gid,
            optionId: oid,
            name: selectedProduct.variantGroups?.find(g => g.id === gid)?.options.find(o => o.id === oid)?.name || ''
        }));

        const modifiersArr = Object.entries(selectedModifiers).map(([oid, data]) => ({
            optionId: oid,
            ...data
        }));

        addToCart(selectedProduct, {
            price: currentCustomPrice,
            variants: variantsArr,
            modifiers: modifiersArr,
            comboSelections: selectedProduct.isCombo ? comboSelections : undefined
        });
        setSelectedProduct(null);
    };

    const handleSlotItemSelection = (slotId: string, product: POSProduct) => {
        const item: POSCartItem = {
            id: Math.random().toString(36).substr(2, 9),
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            variants: product.variantGroups?.map(g => ({
                groupId: g.id,
                optionId: g.options[0]?.id || '',
                name: g.options[0]?.name || ''
            })) || [],
            modifiers: []
        };
        setComboSelections({ ...comboSelections, [slotId]: item });
    };

    const updateSlotItemCustomization = (slotId: string, updates: Partial<POSCartItem>) => {
        const current = comboSelections[slotId];
        if (!current) return;
        let newPrice = mockPOSProducts.find(p => p.id === current.productId)?.price || 0;
        const variants = updates.variants ?? current.variants;
        const modifiers = updates.modifiers ?? current.modifiers;
        const prod = mockPOSProducts.find(p => p.id === current.productId);
        variants.forEach(v => {
            const add = prod?.variantGroups?.find(g => g.id === v.groupId)?.options.find(o => o.id === v.optionId)?.additionalPrice || 0;
            newPrice += add;
        });
        modifiers.forEach(m => { newPrice += m.price * m.quantity; });
        setComboSelections({ ...comboSelections, [slotId]: { ...current, ...updates, price: newPrice } });
    };

    const customizingItem = useMemo(() => {
        if (!slotToCustomize) return selectedProduct;
        const slotItem = comboSelections[slotToCustomize];
        if (!slotItem) return null;
        return mockPOSProducts.find(p => p.id === slotItem.productId);
    }, [slotToCustomize, comboSelections, selectedProduct]);

    return (
        <div className="flex h-screen bg-[#F1F5F9] text-[#1E293B] font-sans overflow-hidden">
            {/* LEFT: ELEGANT SIDEBAR (WIDER & CLEARER) */}
            <aside className="w-28 md:w-36 bg-white border-r-2 border-slate-200 flex flex-col items-center py-10 gap-2 flex-shrink-0 overflow-y-auto custom-scrollbar z-30 shadow-sm">
                <button
                    onClick={() => setActiveCategory('all')}
                    className={cn(
                        "w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex flex-col items-center justify-center gap-2 transition-all mb-6 transform active:scale-95 group",
                        activeCategory === 'all' ? "bg-brand text-white shadow-xl shadow-brand/20 scale-105" : "text-slate-400 hover:bg-slate-50 hover:text-brand"
                    )}
                >
                    <div className={cn("p-2.5 rounded-2xl transition-all", activeCategory === 'all' ? "bg-white/20" : "bg-slate-50 group-hover:bg-brand/5")}>
                        <List size={24} strokeWidth={2.5} />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest leading-none">Menu</div>
                </button>

                <div className="w-12 h-0.5 bg-slate-100 rounded-full mb-8" />

                {mockPOSCategories.map(cat => {
                    const Icon = categoryIcons[cat.id] || Box;
                    const isActive = activeCategory === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex flex-col items-center justify-center gap-2 transition-all p-2 text-center transform active:scale-95 group mb-2",
                                isActive ? "bg-brand text-white shadow-xl shadow-brand/20 scale-105" : "text-slate-400 hover:bg-slate-50 hover:text-brand"
                            )}
                        >
                            <div className={cn("p-2.5 rounded-2xl transition-all", isActive ? "bg-white/20" : "bg-slate-50 group-hover:bg-brand/5")}>
                                <Icon size={26} strokeWidth={isActive ? 3 : 2} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-tight leading-tight px-1">{cat.name}</span>
                        </button>
                    );
                })}
            </aside>

            {/* CENTER: PRODUCTS GRID (CLEANER & BOLDER) */}
            <main className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">
                {/* Modern Status Header */}
                <div className="bg-white border-b border-slate-200 px-8 h-20 flex items-center justify-between flex-shrink-0 shadow-sm z-20">
                    <div className="flex items-center gap-3">
                        <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                            {['ALL', 'FAVORITES', 'TOP'].map(tabId => (
                                <button
                                    key={tabId}
                                    onClick={() => setActiveTab(tabId as any)}
                                    className={cn(
                                        "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2",
                                        activeTab === tabId ? "bg-white text-brand shadow-md" : "text-slate-400 hover:text-slate-600"
                                    )}
                                >
                                    {tabId === 'ALL' ? 'Everything' : tabId === 'TOP' ? 'Hot' : 'Favs'}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-6 px-6 py-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-brand" />
                                <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">{isClient ? currentTime : '--:--'}</span>
                            </div>
                            <div className="w-px h-4 bg-slate-200" />
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">Store Online</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowQuickSettings(true)}
                            className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/20 transition-all shadow-sm active:scale-95"
                        >
                            <SettingsIcon size={20} />
                        </button>
                    </div>
                </div>

                {/* Search & Layout Toggle */}
                <header className="h-24 bg-white border-b border-slate-100 px-10 flex items-center justify-between gap-10 flex-shrink-0">
                    <div className="flex-1 relative">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300">
                            <SearchIcon size={24} strokeWidth={3} />
                        </div>
                        <input
                            type="text"
                            placeholder="Find products by name, category or SKU..."
                            className="w-full h-16 bg-slate-50/50 border-2 border-slate-100 rounded-3xl pl-16 pr-8 text-lg font-bold text-slate-700 placeholder:text-slate-300 outline-none transition-all focus:bg-white focus:border-brand/40 shadow-inner"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                            <button
                                onClick={() => setViewMode('GRID')}
                                className={cn("p-3 rounded-xl transition-all", viewMode === 'GRID' ? "bg-white text-brand shadow-sm" : "text-slate-300")}
                            >
                                <LayoutGrid size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode('COMPACT')}
                                className={cn("p-3 rounded-xl transition-all", viewMode === 'COMPACT' ? "bg-white text-brand shadow-sm" : "text-slate-300")}
                            >
                                <LayoutList size={20} />
                            </button>
                        </div>
                        <button className="flex items-center gap-3 px-10 h-16 bg-brand text-white rounded-3xl font-black uppercase text-xs tracking-widest shadow-xl shadow-brand/20 hover:shadow-brand/40 active:scale-95 transition-all">
                            <Scan size={22} strokeWidth={3} /> Scan Barcode
                        </button>
                    </div>
                </header>

                {/* Product Grid (CLEANER, LARGER TYPOGRAPHY) */}
                <div className={cn(
                    "flex-1 overflow-y-auto p-10 custom-scrollbar scroll-smooth",
                    viewMode === 'GRID' ? "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-start" : "flex flex-col gap-6"
                )}>
                    {filteredProducts.map((product, idx) => (
                        <button
                            key={product.id}
                            onClick={() => handleProductClick(product)}
                            style={{ animationDelay: `${idx * 50}ms` }}
                            className={cn(
                                "group bg-white rounded-[3.5rem] border-2 transition-all duration-300 ease-out active:scale-[0.98] text-left relative overflow-hidden shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] animate-in fade-in slide-in-from-bottom-8",
                                viewMode === 'GRID' ? "p-8 border-slate-100 flex flex-col hover:border-brand/20 hover:-translate-y-2 h-auto" : "p-6 border-slate-50 flex items-center gap-8 hover:border-brand/20 hover:-translate-x-2 min-h-[160px]"
                            )}
                        >
                            {/* Image Container */}
                            <div className={cn(
                                "bg-slate-50 rounded-[2.5rem] overflow-hidden relative shadow-inner flex-shrink-0 transition-transform duration-700 ease-out",
                                viewMode === 'GRID' ? "aspect-[4/3] mb-8" : "w-32 h-32"
                            )}>
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                                {/* Status Badges */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <div className={cn(
                                        "px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-xl text-[9px] font-black uppercase tracking-widest border shadow-lg",
                                        product.isVeg ? "text-emerald-600 border-emerald-100" : "text-rose-600 border-rose-100"
                                    )}>
                                        {product.isVeg ? 'Veg' : 'Non-Veg'}
                                    </div>
                                </div>

                                {!product.isAvailable && (
                                    <div className="absolute inset-0 bg-white/90 backdrop-blur-md flex items-center justify-center">
                                        <div className="px-6 py-2 bg-slate-900 text-white rounded-2xl shadow-2xl skew-x-[-12deg]">
                                            <span className="text-[10px] font-black uppercase tracking-widest">Sold Out</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col min-w-0">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex-1 min-w-0">
                                        <h4 className={cn(
                                            "font-black text-[#1E293B] uppercase tracking-tight leading-tight line-clamp-2",
                                            viewMode === 'GRID' ? "text-xl mb-2" : "text-lg"
                                        )}>
                                            {product.name}
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{product.sku}</span>
                                            {product.isCombo && <div className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-50 text-amber-600 text-[9px] font-black rounded-lg uppercase tracking-widest border border-amber-100"><Star size={10} fill="currentColor" /> Bundle</div>}
                                        </div>
                                    </div>
                                    {viewMode === 'GRID' && (
                                        <div className="w-16 h-16 rounded-[2rem] bg-slate-50 text-slate-300 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all shadow-inner group-hover:shadow-xl group-hover:shadow-brand/20 group-hover:rotate-12">
                                            <Plus size={28} strokeWidth={3.5} />
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <span className={cn("font-black tracking-tighter text-brand", viewMode === 'GRID' ? "text-3xl" : "text-2xl")}>
                                        ${product.price.toFixed(2)}
                                    </span>
                                    {viewMode === 'COMPACT' && (
                                        <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center shadow-lg active:scale-75">
                                            <Plus size={20} strokeWidth={4} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Modern Context Controls */}
                <div className="px-10 py-6 bg-white border-t-2 border-slate-100 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-4">
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Channel:</span>
                        <div className="flex bg-slate-100 p-1.5 rounded-[1.8rem]">
                            {['Dine-In', 'Takeaway', 'Delivery'].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setOrderType(type as OrderChannel)}
                                    className={cn(
                                        "px-10 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all transform active:scale-95",
                                        orderType === type ? "bg-white text-brand shadow-lg scale-105" : "text-slate-400 hover:text-slate-600"
                                    )}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => router.push('/pos/tables')} className="flex items-center gap-3 px-10 h-16 bg-slate-50 border-2 border-slate-100 rounded-3xl font-black text-slate-500 hover:text-brand hover:border-brand/20 transition-all uppercase text-[11px] tracking-widest">
                            <History size={18} /> Order History
                        </button>
                    </div>
                </div>
            </main>

            {/* RIGHT SIDEBAR: HIGH-PRECISION CART */}
            <aside className="w-[480px] bg-slate-900 flex flex-col flex-shrink-0 text-white shadow-2xl z-40">
                <div className="p-10 border-b border-white/5 flex items-center justify-between bg-white/[0.03]">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-brand rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-brand/40">
                            <ShoppingCart size={28} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black uppercase tracking-tight mb-1">Ticket #452</h3>
                            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none">Admin Shift • Active</span>
                            </div>
                        </div>
                    </div>
                    <button className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/20 hover:text-rose-500 hover:bg-rose-500/10 transition-all active:scale-90">
                        <Trash2 size={24} />
                    </button>
                </div>

                {/* High-Readability Cart List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-6 space-y-4">
                    {cart?.map(item => (
                        <div key={item.id} className="group relative">
                            <div className="bg-white/[0.04] border border-white/5 p-8 rounded-[3rem] flex flex-col gap-5 transition-all hover:bg-white/[0.08]">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-lg font-black uppercase tracking-tight text-white mb-2 leading-tight">{item.name}</h5>
                                        {item.variants.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {item.variants.map(v => (
                                                    <span key={v.optionId} className="px-3 py-1 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-lg">{v.name}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="w-10 h-10 bg-white/5 text-white/20 rounded-xl flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all active:scale-75">
                                        <X size={18} strokeWidth={3} />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                                    <div className="flex items-center bg-black/40 rounded-2xl border border-white/5 p-1.5 shadow-inner">
                                        <button onClick={() => updateQuantity(item.id, -1)} className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-all active:scale-75"><Minus size={18} strokeWidth={3} /></button>
                                        <span className="w-12 text-center text-lg font-black">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-all active:scale-75"><Plus size={18} strokeWidth={3} /></button>
                                    </div>
                                    <span className="text-2xl font-black tracking-tighter text-white">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>

                                {item.modifiers.length > 0 && (
                                    <div className="space-y-2 mt-2">
                                        {item.modifiers.map(mod => (
                                            <div key={mod.optionId} className="flex justify-between items-center text-[11px] font-bold text-white/30 uppercase tracking-widest">
                                                <span className="flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-brand" /> {mod.name} {mod.quantity > 1 ? `x${mod.quantity}` : ''}
                                                </span>
                                                <span>+${(mod.price * mod.quantity).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {(!cart || cart.length === 0) && (
                        <div className="h-full flex flex-col items-center justify-center py-40 text-center opacity-[0.03]">
                            <Box size={160} strokeWidth={0.5} />
                            <p className="text-xl font-black uppercase tracking-[0.8em] mt-10">Scan Bag</p>
                        </div>
                    )}
                </div>

                {/* Ticket Summary Console */}
                <footer className="p-10 bg-slate-950 space-y-10 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-y-5 px-4 font-black">
                        <div className="text-[11px] text-white/30 uppercase tracking-[0.4em]">Subtotal</div>
                        <div className="text-lg text-right tracking-tight">{formatCurrency(subtotal)}</div>

                        {appliedDiscount > 0 && (
                            <>
                                <div className="text-[11px] text-emerald-400 uppercase tracking-[0.4em]">Discount</div>
                                <div className="text-lg text-right text-emerald-400">-{formatCurrency(discountAmount)}</div>
                            </>
                        )}

                        <div className="text-[11px] text-white/30 uppercase tracking-[0.4em]">Tax (10%)</div>
                        <div className="text-lg text-right tracking-tight">{formatCurrency(tax)}</div>
                    </div>

                    <div className="pt-10 border-t-4 border-white/5">
                        <div className="flex flex-col mb-10">
                            <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em] mb-4">Final Payable Amount</div>
                            <div className="flex items-center justify-between">
                                <div className="text-7xl lg:text-8xl font-black text-brand tracking-tighter leading-none">
                                    {formatCurrency(total)}
                                </div>
                                <div className="px-6 py-3 bg-brand text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-brand/30 flex items-center gap-2">
                                    <Check size={14} strokeWidth={4} /> Verified
                                </div>
                            </div>
                        </div>

                        {/* QUICK ACCESS CASH TOOLS */}
                        <div className="grid grid-cols-4 gap-4 mb-10">
                            {[10, 20, 50, 100].map(cash => (
                                <button
                                    key={`cash-${cash}`}
                                    className="h-20 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center transition-all hover:bg-brand hover:text-white group active:scale-95"
                                >
                                    <span className="text-sm font-black tracking-tighter mb-1">${cash}</span>
                                    <span className="text-[8px] font-black opacity-30 uppercase tracking-widest group-hover:opacity-100">Exact</span>
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <button
                                onClick={() => setShowDiscountModal(true)}
                                className="h-24 rounded-[2.5rem] bg-white/5 border-2 border-white/10 flex items-center justify-center gap-4 text-white/40 hover:text-brand hover:border-brand/40 transition-all active:scale-95 group"
                            >
                                <Tag size={28} />
                                <span className="text-xs font-black uppercase tracking-widest group-hover:text-brand">Promo</span>
                            </button>
                            <button
                                onClick={() => router.push('/pos/payment')}
                                className="h-24 rounded-[2.5rem] bg-brand text-white flex items-center justify-center px-10 font-black uppercase text-sm tracking-[0.4em] gap-6 shadow-[0_20px_80px_rgba(var(--brand-rgb),0.5)] transform active:scale-90 transition-all"
                            >
                                Checkout <ArrowRight size={32} strokeWidth={4} />
                            </button>
                        </div>
                    </div>
                </footer>
            </aside>

            {/* PRODUCT CUSTOMIZATION MODAL (LEANER, REFINED) */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-7xl h-full max-h-[85vh] rounded-[3.5rem] shadow-2xl overflow-hidden border-[8px] border-white flex flex-col animate-in zoom-in-95 duration-300 ease-out">
                        {/* Modal Header */}
                        <div className="px-16 py-12 border-b-2 border-slate-50 flex items-center justify-between">
                            <div className="flex items-center gap-10">
                                <div className="w-32 h-32 bg-slate-50 rounded-[3rem] overflow-hidden shadow-2xl p-2 border border-slate-100 -rotate-2">
                                    <img src={selectedProduct.image} className="w-full h-full object-cover rounded-[2.5rem]" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="px-5 py-2 bg-slate-100 text-slate-500 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl">Base ${selectedProduct.price.toFixed(2)}</div>
                                        <span className="text-slate-300 text-[11px] font-black uppercase tracking-widest">{selectedProduct.sku}</span>
                                    </div>
                                    <h3 className="text-6xl font-black text-[#1E293B] uppercase tracking-tighter leading-none">{selectedProduct.name}</h3>
                                </div>
                            </div>
                            <button onClick={() => setSelectedProduct(null)} className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-[3rem] flex items-center justify-center text-slate-300 hover:text-brand hover:border-brand/20 transition-all active:scale-75">
                                <X size={44} strokeWidth={3} />
                            </button>
                        </div>

                        <div className="flex-1 flex overflow-hidden">
                            <div className="flex-1 overflow-y-auto overflow-x-hidden p-16 custom-scrollbar bg-slate-50/20 scroll-smooth">
                                {slotToCustomize ? (
                                    <div className="animate-in slide-in-from-right duration-500">
                                        <button
                                            onClick={() => setSlotToCustomize(null)}
                                            className="flex items-center gap-4 text-slate-400 hover:text-brand font-black uppercase text-[11px] tracking-[0.3em] mb-12 transition-all p-4 bg-white rounded-2xl shadow-sm inline-flex border border-slate-100"
                                        >
                                            <ChevronLeft size={20} /> Bundle Selection
                                        </button>
                                        <h4 className="text-3xl font-black text-[#1E293B] uppercase tracking-tight mb-14 px-4 border-l-8 border-brand">Customising {customizingItem?.name}</h4>
                                        <div className="space-y-20">
                                            {customizingItem?.variantGroups?.map(group => (
                                                <section key={group.id}>
                                                    <h5 className="text-xs font-black text-slate-300 uppercase tracking-[0.5em] mb-10 ml-4">Select {group.name}</h5>
                                                    <div className="grid grid-cols-4 gap-8">
                                                        {group.options.map(opt => {
                                                            const isSel = comboSelections[slotToCustomize]?.variants.find(v => v.groupId === group.id)?.optionId === opt.id;
                                                            return (
                                                                <button
                                                                    key={opt.id}
                                                                    onClick={() => {
                                                                        const cur = comboSelections[slotToCustomize];
                                                                        if (cur) {
                                                                            const nextVar = cur.variants.map(v => v.groupId === group.id ? { ...v, optionId: opt.id, name: opt.name } : v);
                                                                            updateSlotItemCustomization(slotToCustomize, { variants: nextVar });
                                                                        }
                                                                    }}
                                                                    className={cn(
                                                                        "py-12 rounded-[3rem] border-4 text-center transition-all",
                                                                        isSel ? "bg-[#1E293B] border-[#1E293B] text-white shadow-2xl scale-110 z-10" : "bg-white border-slate-100 text-slate-400 hover:border-brand/40 shadow-xl shadow-brand/5"
                                                                    )}
                                                                >
                                                                    <div className="text-base font-black uppercase tracking-widest">{opt.name}</div>
                                                                    {opt.additionalPrice > 0 && <div className="text-xs font-bold mt-2 opacity-50">+${opt.additionalPrice.toFixed(2)}</div>}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </section>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-24">
                                        {selectedProduct.isCombo && selectedProduct.comboSlots && (
                                            <section>
                                                <h4 className="text-xs font-black text-slate-300 uppercase tracking-[0.6em] mb-14 text-center">Step 1: Build the Ticket Bundle</h4>
                                                <div className="grid grid-cols-4 gap-10">
                                                    {selectedProduct.comboSlots.map(slot => (
                                                        <div key={slot.id} className="relative group/slot">
                                                            <div
                                                                className={cn(
                                                                    "p-10 rounded-[4rem] border-4 flex flex-col transition-all relative overflow-hidden h-[340px] shadow-sm",
                                                                    activeComboSlot === slot.id ? "border-brand bg-brand shadow-brand/40 scale-105 z-10" : "border-slate-100 bg-white hover:border-brand/20"
                                                                )}
                                                            >
                                                                <button
                                                                    onClick={() => setActiveComboSlot(slot.id)}
                                                                    className="flex-1 text-center flex flex-col items-center justify-center p-4"
                                                                >
                                                                    <div className={cn("text-[10px] font-black uppercase tracking-[0.4em] mb-8", activeComboSlot === slot.id ? "text-white/40" : "text-slate-300")}>{slot.name}</div>
                                                                    <div className={cn("text-3xl font-black tracking-tight leading-tight", activeComboSlot === slot.id ? "text-white" : "text-[#1E293B]")}>
                                                                        {comboSelections[slot.id]?.name || `Tap to Pick`}
                                                                    </div>
                                                                    {!comboSelections[slot.id] && <div className={cn("mt-10 w-16 h-16 rounded-3xl border-2 border-dashed flex items-center justify-center", activeComboSlot === slot.id ? "border-white/20 text-white" : "border-slate-100 text-slate-300")}><Plus size={28} /></div>}
                                                                </button>
                                                                {comboSelections[slot.id] && (
                                                                    <button
                                                                        onClick={() => setSlotToCustomize(slot.id)}
                                                                        className={cn(
                                                                            "py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-2xl",
                                                                            activeComboSlot === slot.id ? "bg-white text-brand" : "bg-[#1E293B] text-white"
                                                                        )}
                                                                    >
                                                                        <SettingsIcon size={16} /> Mod Item
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {activeComboSlot && (
                                                    <div className="mt-16 bg-white rounded-[5rem] p-16 shadow-2xl border-4 border-slate-50 animate-in slide-in-from-bottom-16 duration-700">
                                                        <h5 className="text-[11px] font-black uppercase tracking-[0.5em] mb-12 text-slate-300 text-center">Available options for <span className="text-brand">{selectedProduct.comboSlots.find(s => s.id === activeComboSlot)?.name}</span></h5>
                                                        <div className="grid grid-cols-4 gap-8">
                                                            {mockPOSProducts
                                                                .filter(p => selectedProduct.comboSlots?.find(s => s.id === activeComboSlot)?.allowedCategoryIds.includes(p.categoryId))
                                                                .map(p => (
                                                                    <button
                                                                        key={p.id}
                                                                        onClick={() => {
                                                                            handleSlotItemSelection(activeComboSlot, p);
                                                                            const idx = selectedProduct.comboSlots?.findIndex(s => s.id === activeComboSlot) ?? -1;
                                                                            const nextSlot = selectedProduct.comboSlots?.[idx + 1];
                                                                            if (idx !== -1 && nextSlot) setActiveComboSlot(nextSlot.id);
                                                                            else setActiveComboSlot(null);
                                                                        }}
                                                                        className={cn(
                                                                            "group p-8 rounded-[3rem] border-4 transition-all flex flex-col items-center gap-6 text-center shadow-sm hover:shadow-xl",
                                                                            comboSelections[activeComboSlot]?.productId === p.id ? "bg-[#1E293B] border-[#1E293B] text-white scale-105" : "bg-slate-50 border-transparent hover:border-brand/40 text-slate-600"
                                                                        )}
                                                                    >
                                                                        <div className="w-28 h-28 rounded-[2rem] overflow-hidden shadow-2xl group-hover:scale-110 transition-transform bg-white">
                                                                            <img src={p.image} className="w-full h-full object-cover" />
                                                                        </div>
                                                                        <div className="text-sm font-black uppercase tracking-tight leading-tight">{p.name}</div>
                                                                    </button>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                )}
                                            </section>
                                        )}

                                        {!selectedProduct.isCombo && (
                                            <div className="space-y-32">
                                                {selectedProduct.variantGroups?.map(group => (
                                                    <section key={group.id}>
                                                        <h4 className="text-xs font-black text-slate-300 uppercase tracking-[0.6em] mb-14 ml-4">Step: Select {group.name}</h4>
                                                        <div className="grid grid-cols-4 gap-10">
                                                            {group.options.map(opt => (
                                                                <button
                                                                    key={opt.id}
                                                                    onClick={() => setSelectedVariants({ ...selectedVariants, [group.id]: opt.id })}
                                                                    className={cn(
                                                                        "py-10 rounded-[2.5rem] border-4 text-center transition-all shadow-sm active:scale-95",
                                                                        selectedVariants[group.id] === opt.id ? "bg-[#1E293B] border-[#1E293B] text-white shadow-xl scale-105 z-10" : "bg-white border-slate-100 text-slate-400 hover:border-brand/40"
                                                                    )}
                                                                >
                                                                    <div className="text-xl font-black uppercase tracking-[0.05em]">{opt.name}</div>
                                                                    {opt.additionalPrice > 0 && <div className="text-xs font-bold mt-2 opacity-50 uppercase">+${opt.additionalPrice.toFixed(2)}</div>}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </section>
                                                ))}

                                                {selectedProduct.modifierGroups?.map(group => (
                                                    <section key={group.id}>
                                                        <h4 className="text-xs font-black text-slate-300 uppercase tracking-[0.6em] mb-14 ml-4">Optional: {group.name} Add-ons</h4>
                                                        <div className="grid grid-cols-1 gap-6">
                                                            {group.options.map(opt => {
                                                                const qty = selectedModifiers[opt.id]?.quantity || 0;
                                                                return (
                                                                    <div key={opt.id} className={cn("p-6 rounded-[2.5rem] border-2 flex items-center justify-between transition-all", qty > 0 ? "bg-slate-50 border-brand/20 shadow-inner" : "bg-white border-slate-100 shadow-sm")}>
                                                                        <div className="px-6">
                                                                            <div className="text-2xl font-black uppercase text-[#1E293B] tracking-tight mb-2">{opt.name}</div>
                                                                            <div className="text-xs font-black text-slate-300 uppercase tracking-widest">+${opt.price.toFixed(2)} Each</div>
                                                                        </div>
                                                                        <div className="flex items-center gap-10">
                                                                            <button onClick={() => {
                                                                                if (qty > 0) {
                                                                                    const next = { ...selectedModifiers };
                                                                                    if (qty === 1) delete next[opt.id];
                                                                                    else {
                                                                                        const current = next[opt.id];
                                                                                        if (current) next[opt.id] = { ...current, quantity: qty - 1 };
                                                                                    }
                                                                                    setSelectedModifiers(next);
                                                                                }
                                                                            }} className={cn("w-16 h-16 rounded-3xl flex items-center justify-center transition-all", qty > 0 ? "bg-white border-2 border-slate-200 shadow-md" : "bg-slate-50 text-slate-200")}>
                                                                                <Minus size={24} strokeWidth={4} />
                                                                            </button>
                                                                            <span className="w-10 text-center text-4xl font-black text-[#1E293B] tracking-tighter">{qty}</span>
                                                                            <button onClick={() => {
                                                                                setSelectedModifiers({ ...selectedModifiers, [opt.id]: { name: opt.name, price: opt.price, quantity: qty + 1 } });
                                                                            }} className="w-16 h-16 bg-[#1E293B] text-white rounded-3xl flex items-center justify-center shadow-xl transform active:scale-75">
                                                                                <Plus size={24} strokeWidth={4} />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </section>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Summary Rail */}
                            <div className="w-[420px] flex-shrink-0 bg-white border-l-2 border-slate-100 flex flex-col p-6 overflow-hidden relative z-20">
                                <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] mb-8 text-center pt-4">Checkout Draft</h4>
                                <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar space-y-12">
                                    {!selectedProduct.isCombo && (
                                        <div className="space-y-10">
                                            {Object.entries(selectedVariants).map(([gid, oid]) => (
                                                <div key={gid} className="group p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100/50">
                                                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">{selectedProduct.variantGroups?.find(g => g.id === gid)?.name}</div>
                                                    <div className="text-sm font-black text-[#1E293B] uppercase tracking-tight">{selectedProduct.variantGroups?.find(g => g.id === gid)?.options.find(o => o.id === oid)?.name}</div>
                                                </div>
                                            ))}
                                            {Object.values(selectedModifiers).map(mod => (
                                                <div key={mod.name} className="flex justify-between items-center p-6 bg-brand/5 rounded-[2.5rem] border border-brand/10">
                                                    <span className="text-xs font-black uppercase text-brand tracking-widest">{mod.name} (x{mod.quantity})</span>
                                                    <span className="text-sm font-black text-brand">+${(mod.price * mod.quantity).toFixed(2)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {selectedProduct.isCombo && selectedProduct.comboSlots?.map(slot => {
                                        const sel = comboSelections[slot.id];
                                        return (
                                            <div key={slot.id} className={cn("p-10 rounded-[3rem] border transition-all", sel ? "bg-white border-brand/20 shadow-xl shadow-brand/5" : "bg-slate-50 border-slate-100 opacity-40")}>
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{slot.name}</span>
                                                    {sel && <Check size={16} className="text-emerald-500" strokeWidth={3} />}
                                                </div>
                                                <div className="text-lg font-black text-[#1E293B] uppercase tracking-tight">{sel?.name || '-- pending --'}</div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="pt-8 mt-auto">
                                    <div className="flex flex-col items-center mb-8">
                                        <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-2">New Item Total</div>
                                        <div className="text-6xl font-black text-[#1E293B] tracking-tighter leading-none">${currentCustomPrice.toFixed(2)}</div>
                                    </div>
                                    <button
                                        onClick={handleAddCustomized}
                                        className="w-full h-20 bg-brand text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] shadow-xl shadow-brand/30 transform active:scale-95 transition-all flex items-center justify-center gap-6 group hover:shadow-2xl hover:shadow-brand/40"
                                    >
                                        Add to Ticket <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={4} size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <POSDiscountModal
                isOpen={showDiscountModal}
                onClose={() => setShowDiscountModal(false)}
                onApply={(type, val) => {
                    if (type === 'PERCENT') setAppliedDiscount(val / 100);
                    else setAppliedDiscount(val);
                    setShowDiscountModal(false);
                }}
            />

            <POSQuickSettings
                isOpen={showQuickSettings}
                onClose={() => setShowQuickSettings(false)}
            />
        </div>
    );
};
