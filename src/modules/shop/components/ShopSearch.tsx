'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { SHOP_ITEMS } from '../mock/data';
import { formatCurrency } from '@/utils';
import { ShopItem } from '../types';

export const ShopSearch: React.FC = () => {
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
        <div className="flex-1 max-w-xl relative group">
            <div className="relative z-10">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${isSearchFocused ? 'text-emerald-600' : 'text-slate-400'}`} />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    placeholder="Search restaurant supplies..."
                    className="w-full h-9 pl-10 pr-10 bg-slate-100 rounded-lg border-none font-medium text-xs text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-600/20 focus:bg-white transition-all outline-none"
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            {/* Search Results Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 z-[60]">
                    <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Recommended Products</span>
                        <span className="text-[9px] font-bold text-emerald-600 uppercase">{searchResults.length} Found</span>
                    </div>
                    <div className="p-1">
                        {searchResults.map(item => (
                            <Link
                                key={item.id}
                                href={`/backoffice/shop/${item.category}/${item.id}`}
                                className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg transition-all group"
                            >
                                <div className="w-10 h-10 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-slate-900 truncate group-hover:text-emerald-600 transition-colors">{item.name}</p>
                                    <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">{item.category}</p>
                                </div>
                                <p className="text-xs font-bold text-slate-900">{formatCurrency(item.price)}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
