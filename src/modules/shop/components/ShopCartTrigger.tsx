'use client';

import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';

export const ShopCartTrigger: React.FC = () => {
    const { cartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all relative group"
            >
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full border-2 border-white"></span>
                )}
            </button>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};
