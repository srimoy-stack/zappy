'use client';

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';

export const ShopCartTrigger: React.FC = () => {
    const { cartCount } = useCart();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 text-slate-400 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition-all flex items-center justify-center"
            >
                <div className="relative">
                    <ShoppingBag className="w-5 h-5" />
                    {cartCount > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-emerald-600 text-white text-[8px] font-black rounded-full border-2 border-white flex items-center justify-center animate-in zoom-in-50 duration-300">
                            {cartCount}
                        </span>
                    )}
                </div>
            </button>
            <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};
