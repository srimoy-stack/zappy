'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Store, ShoppingBag, Utensils, Truck, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { mockStores } from '@/modules/pos/mock/posData';
import { usePOS } from '@/modules/pos/context/POSContext';
import { OrderChannel } from '@/modules/pos/types/pos';
import '../styles/pos-rush.css';

// Channel definitions with icons and metadata
const CHANNEL_CONFIGS = [
    {
        id: 'Dine-In' as OrderChannel,
        label: 'In-Store',
        icon: Utensils,
        emoji: '🍽️',
        description: 'Customer dining at restaurant',
        color: '#22C55E',
        showInStore: true,
        showInCallCenter: false
    },
    {
        id: 'Pickup' as OrderChannel,
        label: 'Pickup',
        icon: ShoppingBag,
        emoji: '🥡',
        description: 'Customer collecting order',
        color: '#3B82F6',
        showInStore: true,
        showInCallCenter: false
    },
    {
        id: 'Delivery' as OrderChannel,
        label: 'Delivery',
        icon: Truck,
        emoji: '🛵',
        description: 'Deliver to customer address',
        color: '#8B5CF6',
        showInStore: true,
        showInCallCenter: false
    },
    {
        id: 'Phone Order' as OrderChannel,
        label: 'Phone Order',
        icon: Phone,
        emoji: '📞',
        description: 'Taking order via call center',
        color: '#F59E0B',
        showInStore: false,
        showInCallCenter: true
    }
];

export const StoreSelectionPage: React.FC = () => {
    const router = useRouter();
    const { session, setStore, setChannel } = usePOS();

    // Get user's accessible stores
    const userStores = session?.user
        ? mockStores.filter(s => session.user.accessibleStores.includes(s.id))
        : mockStores;

    // Check if user has multi-store access
    const hasMultiStoreAccess = userStores.length > 1;

    // Get last selected store from localStorage
    const getLastSelectedStore = (): string => {
        const lastStoreId = localStorage.getItem(`pos_last_store_${session?.user.id}`);
        if (lastStoreId && userStores.find(s => s.id === lastStoreId)) {
            return lastStoreId;
        }
        return userStores[0]?.id ?? '';
    };

    const [selectedStoreId, setSelectedStoreId] = useState<string>(getLastSelectedStore());
    const [selectedChannelId, setSelectedChannelId] = useState<OrderChannel | null>(null);
    const [showStoreDropdown, setShowStoreDropdown] = useState(false);

    // Auto-select store if only one available
    useEffect(() => {
        if (!hasMultiStoreAccess && userStores.length === 1) {
            const firstStore = userStores[0];
            if (firstStore) {
                setSelectedStoreId(firstStore.id);
            }
        }
    }, [hasMultiStoreAccess, userStores]);

    // Filter channels based on POS type
    const availableChannels = CHANNEL_CONFIGS.filter(channel =>
        session?.posType === 'STORE' ? channel.showInStore : channel.showInCallCenter
    );

    const handleStoreSelect = (storeId: string) => {
        setSelectedStoreId(storeId);
        setShowStoreDropdown(false);
        // Persist selection
        if (session?.user?.id) {
            localStorage.setItem(`pos_last_store_${session.user.id}`, storeId);
        }
    };

    const handleChannelSelect = (channelId: OrderChannel) => {
        setSelectedChannelId(channelId);
    };

    const handleConfirm = () => {
        const store = userStores.find(s => s.id === selectedStoreId);
        if (store && selectedChannelId) {
            setStore(store);
            setChannel(selectedChannelId);
            router.push('/pos/dashboard');
        }
    };

    const selectedStore = userStores.find(s => s.id === selectedStoreId);
    const isFormValid = selectedStoreId && selectedChannelId;

    if (!session) {
        router.push('/pos/login');
        return null;
    }

    return (
        <div className="pos-screen" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '24px'
        }}>
            <div style={{ maxWidth: '900px', width: '100%' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'var(--pos-action-primary)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px'
                    }}>
                        <Store size={40} color="white" strokeWidth={2.5} />
                    </div>
                    <h1 style={{
                        fontSize: '32px',
                        fontWeight: 800,
                        color: 'var(--pos-text-primary)',
                        marginBottom: '12px',
                        letterSpacing: '-0.02em'
                    }}>
                        Setup POS Session
                    </h1>
                    <p style={{
                        fontSize: '16px',
                        color: 'var(--pos-text-secondary)',
                        fontWeight: 600
                    }}>
                        Select your store location and order channel
                    </p>
                </div>

                {/* Store Selection - Show only if multi-store access */}
                {hasMultiStoreAccess && (
                    <div style={{
                        marginBottom: '40px',
                        padding: '24px',
                        background: 'var(--pos-bg-surface)',
                        borderRadius: '12px',
                        border: '1px solid var(--pos-border-subtle)'
                    }}>
                        <label style={{
                            display: 'block',
                            fontSize: '12px',
                            fontWeight: 700,
                            color: 'var(--pos-text-secondary)',
                            marginBottom: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            <Store size={16} style={{ display: 'inline', marginRight: '8px' }} />
                            Select Store
                        </label>

                        {/* Custom Dropdown */}
                        <div style={{ position: 'relative' }}>
                            <button
                                onClick={() => setShowStoreDropdown(!showStoreDropdown)}
                                className="pos-input"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    height: '64px',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    background: 'var(--pos-bg-card)',
                                    border: showStoreDropdown ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)'
                                }}
                            >
                                <div>
                                    <div style={{
                                        fontSize: '16px',
                                        fontWeight: 700,
                                        color: 'var(--pos-text-primary)',
                                        marginBottom: '4px'
                                    }}>
                                        {selectedStore?.name || 'Select a store'}
                                    </div>
                                    {selectedStore && (
                                        <div style={{
                                            fontSize: '13px',
                                            color: 'var(--pos-text-muted)'
                                        }}>
                                            {selectedStore.address}
                                        </div>
                                    )}
                                </div>
                                <ChevronDown
                                    size={24}
                                    color="var(--pos-text-muted)"
                                    style={{
                                        transform: showStoreDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.2s'
                                    }}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {showStoreDropdown && (
                                <div style={{
                                    position: 'absolute',
                                    top: '72px',
                                    left: 0,
                                    right: 0,
                                    background: 'var(--pos-bg-card)',
                                    border: '1px solid var(--pos-border-subtle)',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    zIndex: 10,
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                                }}>
                                    {userStores.map((store) => (
                                        <button
                                            key={store.id}
                                            onClick={() => handleStoreSelect(store.id)}
                                            style={{
                                                width: '100%',
                                                padding: '16px',
                                                textAlign: 'left',
                                                background: selectedStoreId === store.id ? 'var(--pos-action-primary)' : 'transparent',
                                                color: selectedStoreId === store.id ? 'white' : 'var(--pos-text-primary)',
                                                border: 'none',
                                                borderBottom: '1px solid var(--pos-border-subtle)',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (selectedStoreId !== store.id) {
                                                    e.currentTarget.style.background = 'var(--pos-bg-surface)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (selectedStoreId !== store.id) {
                                                    e.currentTarget.style.background = 'transparent';
                                                }
                                            }}
                                        >
                                            <div style={{
                                                fontSize: '15px',
                                                fontWeight: 700,
                                                marginBottom: '4px'
                                            }}>
                                                {store.name}
                                            </div>
                                            <div style={{
                                                fontSize: '12px',
                                                opacity: 0.7
                                            }}>
                                                {store.address}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Single Store Display - Show if only one store */}
                {!hasMultiStoreAccess && selectedStore && (
                    <div style={{
                        marginBottom: '40px',
                        padding: '20px 24px',
                        background: 'var(--pos-bg-surface)',
                        borderRadius: '12px',
                        border: '1px solid var(--pos-border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'var(--pos-action-primary)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Store size={24} color="white" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: 'var(--pos-text-muted)',
                                marginBottom: '4px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Active Store
                            </div>
                            <div style={{
                                fontSize: '16px',
                                fontWeight: 700,
                                color: 'var(--pos-text-primary)',
                                marginBottom: '2px'
                            }}>
                                {selectedStore.name}
                            </div>
                            <div style={{
                                fontSize: '13px',
                                color: 'var(--pos-text-secondary)'
                            }}>
                                {selectedStore.address}
                            </div>
                        </div>
                    </div>
                )}

                {/* Channel Selection */}
                <div style={{ marginBottom: '40px' }}>
                    <div style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--pos-text-secondary)',
                        marginBottom: '16px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <ShoppingBag size={16} />
                        Select Order Channel
                    </div>

                    <div className="pos-grid-2" style={{ gap: '16px' }}>
                        {availableChannels.map((channel) => {
                            const Icon = channel.icon;
                            const isSelected = selectedChannelId === channel.id;

                            return (
                                <button
                                    key={channel.id}
                                    onClick={() => handleChannelSelect(channel.id)}
                                    style={{
                                        padding: '24px',
                                        background: isSelected ? 'var(--pos-bg-card)' : 'var(--pos-bg-surface)',
                                        border: isSelected ? '2px solid var(--pos-action-primary)' : '1px solid var(--pos-border-subtle)',
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        textAlign: 'left',
                                        minHeight: '140px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    className="pos-card"
                                >
                                    {/* Selection indicator */}
                                    {isSelected && (
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: 'var(--pos-action-primary)'
                                        }} />
                                    )}

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        marginBottom: '16px'
                                    }}>
                                        <div style={{
                                            width: '56px',
                                            height: '56px',
                                            background: isSelected ? 'var(--pos-action-primary)' : 'var(--pos-bg-main)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.2s'
                                        }}>
                                            <Icon
                                                size={28}
                                                color={isSelected ? 'white' : 'var(--pos-text-secondary)'}
                                                strokeWidth={2}
                                            />
                                        </div>
                                        <div style={{ fontSize: '40px' }}>{channel.emoji}</div>
                                    </div>

                                    <div style={{
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        color: 'var(--pos-text-primary)',
                                        marginBottom: '8px'
                                    }}>
                                        {channel.label}
                                    </div>

                                    <div style={{
                                        fontSize: '13px',
                                        color: 'var(--pos-text-secondary)',
                                        lineHeight: 1.4
                                    }}>
                                        {channel.description}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Confirm Button */}
                <button
                    onClick={handleConfirm}
                    disabled={!isFormValid}
                    className="pos-btn pos-btn-primary"
                    style={{
                        width: '100%',
                        height: '72px',
                        fontSize: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px'
                    }}
                >
                    Start POS Session
                    <ArrowRight size={24} />
                </button>

                {/* Context Info */}
                <div style={{
                    marginTop: '24px',
                    padding: '16px',
                    background: 'var(--pos-bg-surface)',
                    borderRadius: '8px',
                    border: '1px solid var(--pos-border-subtle)',
                    fontSize: '12px',
                    color: 'var(--pos-text-muted)',
                    textAlign: 'center'
                }}>
                    <strong style={{ color: 'var(--pos-text-primary)' }}>
                        {session.posType === 'STORE' ? 'Store POS' : 'Call Center POS'}
                    </strong>
                    {' • '}
                    Operator: {session.user.name}
                    {' • '}
                    Device: {session.deviceId}
                </div>
            </div>
        </div>
    );
};

export default StoreSelectionPage;
