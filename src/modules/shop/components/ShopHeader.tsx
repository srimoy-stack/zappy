'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingCart, User, Package, X } from 'lucide-react';
import { CATEGORIES, SHOP_ITEMS } from '../mock/data';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';
import { formatCurrency } from '@/utils';
import { ShopItem } from '../types';

export const ShopHeader: React.FC = () => {
    const pathname = usePathname();
    const { cartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<ShopItem[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    useEffect(() => {
        if (searchQuery.length > 1) {
            const results = SHOP_ITEMS.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 5);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    return (
        <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
            {/* Top Bar */}
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-8">
                {/* Logo */}
                <Link href="/shop" className="flex items-center gap-2 group shrink-0">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:scale-105 transition-transform">
                        <Package className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">RestoPack</span>
                </Link>

                {/* Search Bar */}
                <div className="flex-1 max-w-2xl relative group hidden md:block">
                    <div className="relative z-10">
                        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${isSearchFocused ? 'text-emerald-600' : 'text-slate-400'}`} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                            placeholder="Search supplies, packaging, modules..."
                            className="w-full h-12 pl-12 pr-12 bg-slate-100 rounded-2xl border-none font-medium text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-600/20 focus:bg-white transition-all outline-none"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>

                    {/* Search Results Dropdown */}
                    {isSearchFocused && searchResults.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[2rem] border border-slate-100 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recommended Products</span>
                                <span className="text-[10px] font-bold text-emerald-600 uppercase">{searchResults.length} Found</span>
                            </div>
                            <div className="p-2">
                                {searchResults.map(item => (
                                    <Link
                                        key={item.id}
                                        href={`/shop/${item.category}/${item.id}`}
                                        className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                                            <img src={item.image} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-black text-slate-900 truncate group-hover:text-emerald-600 transition-colors">{item.name}</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.category}</p>
                                        </div>
                                        <p className="text-sm font-black text-slate-900">{formatCurrency(item.price)}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Icons */}
                <div className="flex items-center gap-2 shrink-0">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="p-3 hover:bg-slate-100 rounded-2xl text-slate-600 transition-colors relative group"
                    >
                        <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        {cartCount > 0 && (
                            <span className="absolute top-2 right-2 w-4 h-4 bg-emerald-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <Link href="/shop/admin" className="p-3 hover:bg-slate-100 rounded-2xl text-slate-600 transition-colors group">
                        <User className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="max-w-7xl mx-auto px-4 flex items-center border-t border-slate-50 overflow-x-auto no-scrollbar">
                {CATEGORIES.map((cat) => {
                    const isActive = pathname === `/shop/${cat.id}` || (pathname === '/shop' && cat.id === 'packaging');
                    return (
                        <Link
                            key={cat.id}
                            href={`/shop/${cat.id}`}
                            className={`px-8 py-4 text-sm font-black uppercase tracking-widest transition-all relative shrink-0 ${isActive
                                ? 'text-emerald-600'
                                : 'text-slate-400 hover:text-slate-700'
                                }`}
                        >
                            {cat.name}
                            {isActive && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-600 rounded-full mx-6 animate-in slide-in-from-bottom-1" />
                            )}
                        </Link>
                    )
                })}
            </div>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </header>
    );
};
