'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { ProductCard } from '@/modules/shop/components/ProductCard';
import { shopService } from '@/modules/shop/services/shopService';
import { ShopItem, Category } from '@/modules/shop/types';
import { Loader2, Plus, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function CategoryListingPage() {
    const params = useParams();
    const categoryId = params.category as string;

    const [items, setItems] = useState<ShopItem[]>([]);
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMoreLoading, setIsMoreLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(8);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            const [catInfo, catItems] = await Promise.all([
                shopService.getCategoryById(categoryId),
                shopService.getItems(categoryId)
            ]);
            setCategory(catInfo || null);
            setItems(catItems);
            setLoading(false);
        };
        load();
    }, [categoryId]);

    const handleLoadMore = useCallback(async () => {
        setIsMoreLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setVisibleCount(prev => prev + 4);
        setIsMoreLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[500px] gap-6">
                <Loader2 className="animate-spin text-emerald-600 w-12 h-12" />
                <div className="space-y-2 text-center">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Initializing Catalog</p>
                    <p className="text-[8px] font-bold text-slate-300 uppercase">Synchronizing inventory assets...</p>
                </div>
            </div>
        );
    }

    if (!category) {
        return (
            <div className="text-center py-40 border-2 border-dashed border-slate-100 rounded-[4rem] max-w-4xl mx-auto">
                <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Collection Not Available</h1>
                <p className="text-slate-500 font-medium mb-8">This collection is currently undergoing seasonal updates.</p>
                <Link href="/shop" className="text-emerald-600 text-xs font-black uppercase tracking-widest hover:underline">Browse Active Categories</Link>
            </div>
        );
    }

    const itemsToShow = items.slice(0, visibleCount);
    const hasMore = visibleCount < items.length;

    return (
        <div className="space-y-16 animate-in fade-in duration-1000 pb-20">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-3xl space-y-6">
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                        <span>Catalog</span>
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                        <span className="text-slate-900">{category.name} Edition</span>
                    </div>
                    <h1 className="text-7xl font-black text-slate-900 tracking-tighter leading-[0.85]">
                        {category.title}
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                        {category.subtitle}
                    </p>
                </div>

                {/* Filter / Sort UI */}
                <div className="flex items-center gap-3">
                    <button className="h-14 px-8 bg-white border border-slate-100 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-900 hover:border-emerald-600 transition-all shadow-sm">
                        <SlidersHorizontal size={16} />
                        Filter
                    </button>
                    <button className="h-14 px-8 bg-white border border-slate-100 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-900 hover:border-emerald-600 transition-all shadow-sm">
                        Sort By
                        <ChevronDown size={16} className="text-slate-400" />
                    </button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {itemsToShow.map((item, idx) => (
                    <div key={item.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 50}ms` }}>
                        <ProductCard item={item} />
                    </div>
                ))}
            </div>

            {/* Load More Section */}
            {hasMore && (
                <div className="flex flex-col items-center pt-20">
                    <button
                        onClick={handleLoadMore}
                        disabled={isMoreLoading}
                        className="group flex items-center gap-4 px-12 py-5 bg-slate-900 text-white rounded-[2.5rem] text-sm font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-2xl shadow-slate-200/50 disabled:opacity-50"
                    >
                        {isMoreLoading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <>
                                Explore More
                                <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                            </>
                        )}
                    </button>
                    <p className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Showing {itemsToShow.length} of {items.length} Products</p>
                </div>
            )}
        </div>
    );
}

// Internal Link helper
import Link from 'next/link';
