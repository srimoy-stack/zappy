'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
    Search,
    ShoppingBag,
    Utensils,
    Truck,
    Tags,
    ChevronLeft,
    User
} from 'lucide-react';
import { usePOS } from '@/modules/pos/context/POSContext';
import { POSProduct } from '@/modules/pos/types/pos';
import POSDiscountModal from '../components/POSDiscountModal';
import { POSVariantModal } from '../components/POSVariantModal';
import { POSModifierModal } from '../components/POSModifierModal';
import { POSComboModal } from '../components/POSComboModal';
import { POSCartPanel } from '../components/POSCartPanel';
import { POSPaymentModal } from '../components/POSPaymentModal';
import { CustomerProfilePanel } from '../components/CustomerProfilePanel';
import '../styles/pos-rush.css';

// Enhanced Mock Data with more metadata
const MOCK_CATEGORIES = [
    { id: 'all', name: 'Trending', icon: <Tags size={20} /> },
    { id: 'pizza', name: 'Pizzas', icon: '🍕' },
    { id: 'burger', name: 'Burgers', icon: '🍔' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' },
    { id: 'sides', name: 'Sides', icon: '🍟' },
    { id: 'dessert', name: 'Desserts', icon: '🍰' },
];

const MOCK_PRODUCTS: POSProduct[] = [
    {
        id: 'p1',
        name: 'Margherita Pizza',
        price: 12.99,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=800&q=80',
        sku: 'PZ-MAR-001',
        hasVariants: true,
        variantGroups: [
            {
                id: 'vg1',
                name: 'Size',
                options: [
                    { id: 'vo1', name: 'Regular 8"', additionalPrice: 0 },
                    { id: 'vo2', name: 'Medium 10"', additionalPrice: 3.50 },
                    { id: 'vo3', name: 'Large 12"', additionalPrice: 6.00 }
                ]
            },
            {
                id: 'vg2',
                name: 'Crust',
                options: [
                    { id: 'vo4', name: 'Classic Thin', additionalPrice: 0 },
                    { id: 'vo5', name: 'Cheese Burst', additionalPrice: 2.50 },
                    { id: 'vo6', name: 'Wheat Crust', additionalPrice: 1.50 }
                ]
            }
        ],
        isVeg: true,
        isAvailable: true,
        isFavorite: true,
        isTopItem: true,
        barcode: '12345678901'
    },
    {
        id: 'p2',
        name: 'Pepperoni Feast',
        price: 14.99,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
        sku: 'PZ-PEP-001',
        hasVariants: true,
        variantGroups: [
            {
                id: 'vg3',
                name: 'Portion Type',
                options: [
                    { id: 'vo7', name: 'Half (2 Slices)', additionalPrice: 0 },
                    { id: 'vo8', name: 'Full (4 Slices)', additionalPrice: 5.50 }
                ]
            }
        ],
        isVeg: false,
        isAvailable: true,
        isTopItem: true,
        barcode: '12345678902'
    },
    {
        id: 'p3',
        name: 'Veggie Supreme',
        price: 13.99,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        sku: 'PZ-VEG-001',
        hasVariants: true,
        isVeg: true,
        isAvailable: true,
        isFavorite: true
    },
    {
        id: 'p4',
        name: 'Classic Burger',
        price: 8.99,
        categoryId: 'burger',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
        sku: 'BG-CLS-001',
        hasVariants: true,
        isVeg: false,
        isAvailable: true,
        barcode: '12345678904'
    },
    {
        id: 'p5',
        name: 'Cheese Burger',
        price: 9.99,
        categoryId: 'burger',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
        sku: 'BG-CHS-001',
        hasVariants: true,
        isVeg: false,
        isAvailable: true,
        barcode: '12345678904'
    },
    {
        id: 'p6',
        name: 'Coca Cola',
        price: 2.50,
        categoryId: 'drinks',
        image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80',
        sku: 'DR-COC-001',
        hasVariants: false,
        isVeg: true,
        isAvailable: true,
        isTopItem: true
    },
    {
        id: 'p7',
        name: 'French Fries',
        price: 3.99,
        categoryId: 'sides',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
        sku: 'SD-FRS-001',
        hasVariants: false,
        isVeg: true,
        isAvailable: true
    },
    {
        id: 'p8',
        name: 'Chocolate Cake',
        price: 5.99,
        categoryId: 'dessert',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
        sku: 'DS-CHC-001',
        hasVariants: false,
        isVeg: true,
        isAvailable: true
    },
    {
        id: 'p9',
        name: 'Spicy Paneer Burger',
        price: 10.99,
        categoryId: 'burger',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        sku: 'BG-PNR-001',
        hasVariants: false,
        isVeg: true,
        isAvailable: true
    },
    {
        id: 'p10',
        name: 'Garlic Bread',
        price: 4.99,
        categoryId: 'sides',
        image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80',
        sku: 'SD-GRL-001',
        hasVariants: false,
        isVeg: true,
        isAvailable: true,
        isOnHold: true
    },
    {
        id: 'p_combo1',
        name: 'Family Feast Combo',
        price: 49.99,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        sku: 'CB-FAM-001',
        isAvailable: true,
        isCombo: true,
        isTopItem: true,
        isVeg: true,
        hasVariants: false,
        slots: [
            {
                id: 'SLOT1',
                name: 'Main Pizza',
                required: true,
                options: [
                    { id: 'P1', name: 'Margherita Pizza', price: 0, image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=800&q=80' },
                    { id: 'P2', name: 'Pepperoni Pizza', price: 2.00, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80' },
                ],
                variantGroups: [
                    {
                        id: 'SIZE1',
                        name: 'Size',
                        required: true,
                        options: [
                            { id: 'S', name: 'Small', additionalPrice: -3.00 },
                            { id: 'M', name: 'Medium', additionalPrice: 0 },
                            { id: 'L', name: 'Large', additionalPrice: 3.00 },
                        ]
                    }
                ]
            },
            {
                id: 'SLOT2',
                name: 'Side Item',
                required: true,
                options: [
                    { id: 'FRIES', name: 'French Fries', price: 0, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80' },
                    { id: 'WINGS', name: 'Chicken Wings', price: 2.50, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80' },
                ]
            },
            {
                id: 'SLOT3',
                name: 'Beverage',
                required: true,
                options: [
                    { id: 'COKE', name: 'Coke', price: 0, image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80' },
                    { id: 'SPRITE', name: 'Sprite', price: 0, image: 'https://images.unsplash.com/photo-1625772290748-39126d794951?auto=format&fit=crop&w=800&q=80' },
                ]
            }
        ]
    }
];

export const POSMenuScreen: React.FC = () => {
    const router = useRouter();
    const {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateCartItem,
        clearCart,
        cartTotal,
        selectedCustomer,
        isOffline,
        session,
        setChannel
    } = usePOS();

    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
    const [customizationProduct, setCustomizationProduct] = useState<POSProduct | null>(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState<'all' | 'favorites' | 'top' | 'hold'>('all');
    const [editingCartItem, setEditingCartItem] = useState<any | null>(null);
    const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);
    const [isModifierModalOpen, setIsModifierModalOpen] = useState(false);
    const [isComboModalOpen, setIsComboModalOpen] = useState(false);
    const [selectedStepVariants, setSelectedStepVariants] = useState<any[]>([]);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    // Pricing States
    const [discounts, setDiscounts] = useState(0);
    const [tip, setTip] = useState(0);

    const searchRef = useRef<HTMLInputElement>(null);

    const {
        incomingCall,
        updateCustomer,
        setDeliveryAddress
    } = usePOS();

    // Auto-open on incoming call for Call Center
    useEffect(() => {
        if (session?.posType === 'CALL_CENTER' && incomingCall && incomingCall.customerId) {
            setIsProfileOpen(true);
        }
    }, [incomingCall, session?.posType]);

    // Barcode Scanner Auto-Focus
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // If not typing in another input, focus the search bar
            if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
                if (e.key.length === 1 || e.key === 'Enter') {
                    searchRef.current?.focus();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleUpdateNotes = (notes: string) => {
        if (selectedCustomer) {
            updateCustomer(selectedCustomer.id, { notes });
        }
    };

    const handleSelectAddress = (addressId: string) => {
        if (selectedCustomer) {
            const addr = selectedCustomer.addresses.find(a => a.id === addressId);
            if (addr) {
                setDeliveryAddress({ id: addr.id, text: addr.text, label: addr.label });
            }
        }
    };

    // Optimized filtering
    const filteredProducts = useMemo(() => {
        return MOCK_PRODUCTS.filter(product => {
            const matchesCategory = activeCategory === 'all' || product.categoryId === activeCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (product.barcode && product.barcode.includes(searchQuery));

            let matchesFilter = true;
            if (activeFilter === 'favorites') matchesFilter = !!product.isFavorite;
            if (activeFilter === 'top') matchesFilter = !!product.isTopItem;
            if (activeFilter === 'hold') matchesFilter = !!product.isOnHold;

            return matchesCategory && matchesSearch && matchesFilter;
        });
    }, [activeCategory, searchQuery, activeFilter]);

    const handleProductClick = (product: any) => {
        if (!product.isAvailable) return;

        if (product.isCombo) {
            setCustomizationProduct(product);
            setIsComboModalOpen(true);
            return;
        }

        if (product.variantGroups && product.variantGroups.length > 0) {
            setCustomizationProduct(product);
            setIsVariantModalOpen(true);
            setIsModifierModalOpen(false);
        } else if (product.modifierGroups && product.modifierGroups.length > 0) {
            setCustomizationProduct(product);
            setIsVariantModalOpen(false);
            setIsModifierModalOpen(true);
        } else {
            addToCart({
                ...product,
                productId: product.id,
                quantity: 1,
                variants: [],
                modifiers: [],
                notes: ''
            });
        }
    };

    const handleCustomizedAddToCart = (cartItem: any) => {
        if (isVariantModalOpen) {
            // This came from Variant Modal
            if (customizationProduct?.modifierGroups && customizationProduct.modifierGroups.length > 0) {
                // Product has modifiers too, move to next step
                setSelectedStepVariants(cartItem.variants);
                setIsVariantModalOpen(false);
                setIsModifierModalOpen(true);
                return;
            }
        }

        if (editingCartItem) {
            updateCartItem(editingCartItem.id, cartItem);
            setEditingCartItem(null);
        } else {
            addToCart(cartItem);
        }
        setCustomizationProduct(null);
        setIsVariantModalOpen(false);
        setIsModifierModalOpen(false);
        setSelectedStepVariants([]);
    };

    const handleEditItem = (item: any) => {
        const product = MOCK_PRODUCTS.find(p => p.id === item.productId);
        if (product) {
            setEditingCartItem(item);
            setCustomizationProduct(product);
            if (product.variantGroups && product.variantGroups.length > 0) {
                setIsVariantModalOpen(true);
                setIsModifierModalOpen(false);
            } else if (product.modifierGroups && product.modifierGroups.length > 0) {
                setIsVariantModalOpen(false);
                setIsModifierModalOpen(true);
            } else {
                setIsVariantModalOpen(false);
                setIsModifierModalOpen(false);
            }
        }
    };

    const handleCheckout = () => {
        setIsPaymentModalOpen(true);
    };

    const handlePaymentComplete = () => {
        setIsPaymentModalOpen(false);
        // Navigate to the processing screen
        router.push('/pos/payment');
    };

    const handleSearchKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && filteredProducts.length > 0) {
            handleProductClick(filteredProducts[0]);
            setSearchQuery('');
        }
    };

    const taxAmount = cartTotal * 0.1;
    const deliveryFee = session?.channel === 'Delivery' ? 5.00 : 0;
    const finalTotal = cartTotal + taxAmount + deliveryFee + tip - discounts;

    return (
        <div className="pos-screen" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

            {/* 1. VERTICAL CATEGORY BAR */}
            <div style={{
                width: '220px',
                background: 'var(--pos-bg-surface)',
                borderRight: '1px solid var(--pos-border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                flexShrink: 0
            }}>
                {/* Back Action */}
                <div style={{ padding: '16px', borderBottom: '1px solid var(--pos-border-subtle)' }}>
                    <button
                        onClick={() => router.push('/pos/dashboard')}
                        style={{
                            width: '100%',
                            height: '56px',
                            background: 'var(--pos-bg-card)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            border: '1px solid var(--pos-border-subtle)',
                            color: 'var(--pos-text-primary)',
                            fontWeight: 800,
                            fontSize: '13px',
                            cursor: 'pointer'
                        }}
                    >
                        <ChevronLeft size={20} />
                        EXIT TO DASH
                    </button>
                </div>

                {/* Category List */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }} className="no-scrollbar">
                    {MOCK_CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            style={{
                                width: '100%',
                                minHeight: '64px',
                                padding: '12px 16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                borderRadius: '16px',
                                transition: 'all 0.2s',
                                background: activeCategory === cat.id ? 'var(--pos-action-primary)' : 'var(--pos-bg-card)',
                                color: activeCategory === cat.id ? 'white' : 'var(--pos-text-primary)',
                                border: '1px solid var(--pos-border-subtle)',
                                cursor: 'pointer',
                                textAlign: 'left'
                            }}
                        >
                            <div style={{
                                fontSize: '20px',
                                minWidth: '40px',
                                height: '40px',
                                background: activeCategory === cat.id ? 'rgba(255,255,255,0.2)' : 'var(--pos-bg-main)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '10px'
                            }}>
                                {cat.icon}
                            </div>
                            <div style={{
                                fontSize: '14px',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.01em',
                                flex: 1,
                                lineHeight: 1.2
                            }}>
                                {cat.name}
                            </div>
                            {activeCategory === cat.id && (
                                <div style={{ width: '4px', height: '24px', background: 'white', borderRadius: '2px' }} />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* 2. PRODUCT ZONE */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--pos-bg-main)' }}>
                {/* Header with Customer & Search */}
                <div style={{
                    padding: '16px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px',
                    borderBottom: '1px solid var(--pos-border-subtle)',
                    background: 'var(--pos-bg-surface)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            padding: '10px 16px',
                            background: 'var(--pos-bg-card)',
                            borderRadius: '10px',
                            border: '1px solid var(--pos-border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'pointer'
                        }} onClick={() => {
                            if (selectedCustomer) {
                                setIsProfileOpen(true);
                            } else {
                                router.push('/pos/customer-lookup');
                            }
                        }}>
                            <User size={20} color="var(--pos-action-primary)" />
                            <div>
                                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--pos-text-muted)', textTransform: 'uppercase' }}>Customer</div>
                                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pos-text-primary)' }}>
                                    {selectedCustomer?.name || 'Walk-in Guest'}
                                </div>
                            </div>
                        </div>
                        {isOffline && (
                            <div className="pos-badge pos-badge-warning">OFFLINE MODE</div>
                        )}
                        {/* Fulfillment Indicator */}
                        <div style={{
                            padding: '10px 16px',
                            background: 'var(--pos-bg-card)',
                            borderRadius: '10px',
                            border: '1px solid var(--pos-border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'pointer'
                        }} onClick={() => router.push('/pos/fulfillment')}>
                            {session?.channel === 'Dine-In' && <Utensils size={20} color="#22C55E" />}
                            {session?.channel === 'Pickup' && <ShoppingBag size={20} color="var(--pos-action-primary)" />}
                            {session?.channel === 'Delivery' && <Truck size={20} color="#F59E0B" />}
                            <div>
                                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--pos-text-muted)', textTransform: 'uppercase' }}>Fulfillment</div>
                                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pos-text-primary)' }}>
                                    {session?.channel || 'Select...'}
                                </div>
                            </div>
                        </div>

                        {session?.deliveryAddress && (
                            <div style={{
                                padding: '10px 16px',
                                background: 'rgba(16, 185, 129, 0.1)',
                                borderRadius: '10px',
                                border: '1px solid rgba(16, 185, 129, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <Truck size={16} color="#10B981" />
                                <div>
                                    <div style={{ fontSize: '10px', fontWeight: 700, color: '#10B981', textTransform: 'uppercase' }}>Delivery To</div>
                                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--pos-text-primary)' }}>{session.deliveryAddress.label}</div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div style={{ flex: 1, maxWidth: '600px', position: 'relative' }}>
                        <Search size={22} color="var(--pos-text-muted)" style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            ref={searchRef}
                            type="text"
                            placeholder="Search by Name / SKU / Barcode"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearchKeyDown}
                            className="pos-input"
                            style={{
                                height: '60px',
                                width: '100%',
                                paddingLeft: '56px',
                                background: 'var(--pos-bg-card)',
                                borderRadius: '14px',
                                border: '1px solid var(--pos-border-subtle)',
                                fontSize: '18px',
                                fontWeight: 600,
                                boxShadow: 'var(--pos-shadow-sm)'
                            }}
                        />
                    </div>
                </div>

                {/* Top-level Filter Tabs */}
                <div style={{
                    padding: '0 24px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'var(--pos-bg-surface)',
                    borderBottom: '1px solid var(--pos-border-subtle)'
                }}>
                    {[
                        { id: 'all', label: 'All Items' },
                        { id: 'favorites', label: 'Favorites' },
                        { id: 'top', label: 'Top Items' },
                        { id: 'hold', label: 'On Hold' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveFilter(tab.id as any)}
                            style={{
                                padding: '12px 24px',
                                borderRadius: '12px',
                                background: activeFilter === tab.id ? 'var(--pos-action-primary)' : 'var(--pos-bg-card)',
                                color: activeFilter === tab.id ? 'white' : 'var(--pos-text-secondary)',
                                border: '1px solid var(--pos-border-subtle)',
                                fontWeight: 800,
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                minWidth: '120px'
                            }}
                            className={activeFilter === tab.id ? '' : 'hover-scale'}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
                    <div className="pos-products-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                        gap: '20px'
                    }}>
                        {filteredProducts.map(product => {
                            const isOutOfStock = !product.isAvailable;
                            return (
                                <button
                                    key={product.id}
                                    disabled={isOutOfStock}
                                    onClick={() => handleProductClick(product)}
                                    className={`pos-card ${!isOutOfStock ? 'hover-scale' : ''}`}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        background: isOutOfStock ? 'rgba(0,0,0,0.1)' : 'var(--pos-bg-surface)',
                                        border: '1px solid var(--pos-border-subtle)',
                                        borderRadius: '24px',
                                        textAlign: 'left',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        cursor: isOutOfStock ? 'not-allowed' : 'pointer',
                                        opacity: isOutOfStock ? 0.6 : 1,
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        padding: 0
                                    }}
                                >
                                    {/* Product Image */}
                                    <div style={{
                                        width: '100%',
                                        height: '140px',
                                        background: 'var(--pos-bg-card)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                filter: isOutOfStock ? 'grayscale(100%)' : 'none'
                                            }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '12px',
                                            right: '12px',
                                            padding: '6px 10px',
                                            background: 'rgba(0,0,0,0.6)',
                                            backdropFilter: 'blur(8px)',
                                            borderRadius: '10px',
                                            color: 'white',
                                            fontSize: '15px',
                                            fontWeight: 800
                                        }}>
                                            ${product.price.toFixed(2)}
                                        </div>
                                        {isOutOfStock && (
                                            <div style={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'rgba(0,0,0,0.4)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontWeight: 900,
                                                fontSize: '14px',
                                                textTransform: 'uppercase'
                                            }}>
                                                Out of Stock
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                            <div style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '3px',
                                                border: `2px solid ${product.isVeg ? '#10B981' : '#EF4444'}`,
                                                marginTop: '4px'
                                            }} />
                                            <div style={{
                                                fontSize: '16px',
                                                fontWeight: 800,
                                                color: 'var(--pos-text-primary)',
                                                lineHeight: 1.2
                                            }}>
                                                {product.name}
                                            </div>
                                        </div>
                                        <div style={{
                                            fontSize: '11px',
                                            color: 'var(--pos-text-muted)',
                                            fontWeight: 700,
                                            marginTop: 'auto',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <span>{product.sku}</span>
                                            {product.hasVariants && (
                                                <span style={{ color: 'var(--pos-action-primary)', fontSize: '10px' }}>
                                                    OPTIONS+
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 2.4 ORDER TYPE TOGGLE BAR */}
                <div style={{
                    padding: '16px 24px',
                    background: 'var(--pos-bg-surface)',
                    borderTop: '1px solid var(--pos-border-subtle)',
                    display: 'flex',
                    gap: '16px',
                    boxShadow: '0 -4px 20px rgba(0,0,0,0.1)'
                }}>
                    {[
                        { id: 'Dine-In', label: 'Dine-In', icon: <Utensils size={20} /> },
                        { id: 'Pickup', label: 'Takeaway', icon: <ShoppingBag size={20} /> },
                        { id: 'Delivery', label: 'Delivery', icon: <Truck size={20} /> }
                    ].map(type => (
                        <button
                            key={type.id}
                            onClick={() => {
                                setChannel(type.id as any);
                                // If delivery selected and no address, we'll handle re-validation in a real flow
                                // For now, we update the state instantly as requested
                            }}
                            style={{
                                flex: 1,
                                height: '64px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                borderRadius: '18px',
                                background: session?.channel === type.id ? 'var(--pos-action-primary)' : 'var(--pos-bg-card)',
                                color: session?.channel === type.id ? 'white' : 'var(--pos-text-secondary)',
                                border: '1px solid var(--pos-border-subtle)',
                                fontWeight: 800,
                                fontSize: '15px',
                                cursor: 'pointer',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                boxShadow: session?.channel === type.id ? '0 8px 25px rgba(31, 164, 169, 0.3)' : 'none'
                            }}
                            className={session?.channel === type.id ? '' : 'hover-scale'}
                        >
                            {type.icon}
                            {type.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3. CART/ORDER PANEL */}
            <POSCartPanel
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
                onEditItem={handleEditItem}
                onClearCart={clearCart}
                onHoldOrder={() => {
                    // Logic to save order to 'Held' state would go here
                    clearCart();
                    router.push('/pos/dashboard');
                }}
                onAddDiscount={() => setIsDiscountModalOpen(true)}
                onRemoveDiscount={() => setDiscounts(0)}
                activeRules={[
                    'Happy Hour Pricing active (2 PM - 5 PM)',
                    session?.channel === 'Delivery' ? 'Standard Delivery Surcharge applied' : ''
                ].filter(Boolean)}
                subtotal={cartTotal}
                tax={taxAmount}
                discounts={discounts}
                deliveryFee={deliveryFee}
                tip={tip}
                onUpdateTip={setTip}
                total={finalTotal}
                onCheckout={handleCheckout}
            />

            {/* Modals */}
            <POSDiscountModal
                isOpen={isDiscountModalOpen}
                onClose={() => setIsDiscountModalOpen(false)}
                subtotal={cartTotal}
                onApplyDiscount={(type, value) => {
                    const discountAmt = type === 'percentage' ? (cartTotal * value / 100) : value;
                    setDiscounts(discountAmt);
                    setIsDiscountModalOpen(false);
                }}
            />

            <POSVariantModal
                isOpen={!!customizationProduct && isVariantModalOpen}
                product={customizationProduct}
                initialItem={editingCartItem}
                onClose={() => {
                    setCustomizationProduct(null);
                    setEditingCartItem(null);
                    setIsVariantModalOpen(false);
                }}
                onAddToCart={handleCustomizedAddToCart}
            />
            <POSModifierModal
                isOpen={!!customizationProduct && isModifierModalOpen}
                product={customizationProduct}
                variants={selectedStepVariants}
                initialItem={editingCartItem}
                onClose={() => {
                    setCustomizationProduct(null);
                    setEditingCartItem(null);
                    setIsModifierModalOpen(false);
                    setSelectedStepVariants([]);
                }}
                onAddToCart={handleCustomizedAddToCart}
            />
            <POSComboModal
                isOpen={!!customizationProduct && isComboModalOpen}
                product={customizationProduct}
                onClose={() => {
                    setCustomizationProduct(null);
                    setEditingCartItem(null);
                    setIsComboModalOpen(false);
                }}
                onAddToCart={handleCustomizedAddToCart}
            />
            <CustomerProfilePanel
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
                customer={selectedCustomer || null}
                onUpdateNotes={handleUpdateNotes}
                onSelectAddress={handleSelectAddress}
            />

            <POSPaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                total={finalTotal}
                onSelectMethod={handlePaymentComplete}
                disabledMethods={session?.channel === 'Delivery' ? ['cash'] : []}
            />
        </div>
    );
};

export default POSMenuScreen;
