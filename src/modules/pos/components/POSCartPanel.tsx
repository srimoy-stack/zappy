import React from 'react';
import { ShoppingBag, Trash, Minus, Plus, Edit2, Package, Pause, CreditCard } from 'lucide-react';
import { POSCartItem } from '../types/pos';
import '../styles/pos-rush.css';

interface POSCartPanelProps {
    cart: POSCartItem[];
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemoveItem: (id: string) => void;
    onEditItem: (item: POSCartItem) => void;
    onClearCart: () => void;
    onHoldOrder: () => void;
    onAddDiscount: () => void;
    onRemoveDiscount: () => void;
    activeRules?: string[];
    subtotal: number;
    tax: number;
    discounts: number;
    deliveryFee: number;
    tip: number;
    onUpdateTip: (tip: number) => void;
    total: number;
    onCheckout: () => void;
}

export const POSCartPanel: React.FC<POSCartPanelProps> = ({
    cart,
    onUpdateQuantity,
    onRemoveItem,
    onEditItem,
    onClearCart,
    onHoldOrder,
    onAddDiscount,
    onRemoveDiscount,
    activeRules = [],
    subtotal,
    tax,
    discounts,
    deliveryFee,
    tip,
    onUpdateTip,
    total,
    onCheckout
}) => {
    const [isConfirmingClear, setIsConfirmingClear] = React.useState(false);

    return (
        <div style={{
            width: '440px',
            background: 'var(--pos-bg-surface)',
            borderLeft: '1px solid var(--pos-border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.4)',
            zIndex: 10,
            height: '100%'
        }}>
            {/* Header */}
            <div style={{
                padding: '24px',
                borderBottom: '1px solid var(--pos-border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, rgba(31, 164, 169, 0.2) 0%, rgba(31, 164, 169, 0.05) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(31, 164, 169, 0.2)'
                    }}>
                        <ShoppingBag size={22} color="var(--pos-action-primary)" strokeWidth={2.5} />
                    </div>
                    <div>
                        <div style={{ fontSize: '18px', fontWeight: 900, color: 'var(--pos-text-primary)' }}>Order Cart</div>
                        <div style={{ fontSize: '12px', color: 'var(--pos-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {cart.length} {cart.length === 1 ? 'Item' : 'Items'} Selected
                        </div>
                    </div>
                </div>
            </div>

            {/* Items List */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }} className="no-scrollbar">
                {cart.length === 0 ? (
                    <div style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--pos-text-muted)',
                        gap: '20px',
                        padding: '40px'
                    }}>
                        <div style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: 'var(--pos-bg-card)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px dashed var(--pos-border-subtle)',
                            opacity: 0.5
                        }}>
                            <ShoppingBag size={48} strokeWidth={1} />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '20px', fontWeight: 900, color: 'var(--pos-text-primary)' }}>Empty Cart</div>
                            <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: 600 }}>Start adding items to build an order</div>
                        </div>
                    </div>
                ) : (
                    cart.map((item, idx) => (
                        <div key={`${item.id}-${idx}`} style={{
                            padding: '20px',
                            background: 'var(--pos-bg-card)',
                            border: '1px solid var(--pos-border-subtle)',
                            borderRadius: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                            position: 'relative',
                            animation: 'posFadeInUp 0.3s ease-out forwards'
                        }}>
                            {/* Item Top Info */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                        {item.isCombo && <Package size={14} color="var(--pos-action-primary)" />}
                                        <div style={{ fontSize: '17px', fontWeight: 900, color: 'var(--pos-text-primary)', letterSpacing: '-0.01em' }}>
                                            {item.name}
                                        </div>
                                    </div>

                                    {/* Configured Options */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {item.variants?.map(v => (
                                            <span key={v.groupId} style={{
                                                fontSize: '10px',
                                                color: 'var(--pos-action-primary)',
                                                fontWeight: 900,
                                                textTransform: 'uppercase',
                                                background: 'rgba(31, 164, 169, 0.1)',
                                                padding: '3px 8px',
                                                borderRadius: '6px',
                                                border: '1px solid rgba(31, 164, 169, 0.1)'
                                            }}>
                                                {v.name}
                                            </span>
                                        ))}
                                        {item.modifiers?.map(m => (
                                            <span key={m.optionId} style={{
                                                fontSize: '10px',
                                                color: 'var(--pos-text-muted)',
                                                fontWeight: 800,
                                                background: 'rgba(255,255,255,0.03)',
                                                padding: '3px 8px',
                                                borderRadius: '6px',
                                                border: '1px solid rgba(255,255,255,0.05)'
                                            }}>
                                                {m.name} {m.quantity > 1 ? `x${m.quantity}` : ''}
                                            </span>
                                        ))}
                                        {item.isCombo && item.slots?.map((slot: any) => (
                                            <div key={slot.slotId} style={{ width: '100%', fontSize: '11px', color: 'var(--pos-text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                                                <div style={{ width: '4px', height: '4px', background: 'var(--pos-border-subtle)', borderRadius: '50%' }} />
                                                <span style={{ color: 'var(--pos-text-secondary)' }}>{slot.slotName}:</span> {slot.option.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ fontSize: '18px', fontWeight: 900, color: 'var(--pos-text-primary)', letterSpacing: '-0.02em' }}>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>

                            {/* Controls */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button
                                        onClick={() => onEditItem(item)}
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: 'var(--pos-bg-surface)',
                                            border: '1px solid var(--pos-border-subtle)',
                                            color: 'var(--pos-text-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                        className="hover-scale"
                                    >
                                        <Edit2 size={18} strokeWidth={2.5} />
                                    </button>
                                    <button
                                        onClick={() => onRemoveItem(item.id)}
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: 'rgba(239, 68, 68, 0.05)',
                                            border: '1px solid rgba(239, 68, 68, 0.15)',
                                            color: '#EF4444',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                        className="hover-scale"
                                    >
                                        <Trash size={18} strokeWidth={2.5} />
                                    </button>
                                </div>

                                <div style={{
                                    background: 'var(--pos-bg-surface)',
                                    height: '48px',
                                    borderRadius: '16px',
                                    border: '1px solid var(--pos-border-subtle)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '4px'
                                }}>
                                    <button
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            border: 'none',
                                            background: 'transparent',
                                            color: 'var(--pos-text-primary)',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                    >
                                        <Minus size={20} strokeWidth={3} />
                                    </button>
                                    <span style={{ fontSize: '18px', minWidth: '40px', textAlign: 'center', fontWeight: 900, color: 'var(--pos-text-primary)' }}>
                                        {item.quantity}
                                    </span>
                                    <button
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            border: 'none',
                                            background: 'transparent',
                                            color: 'var(--pos-text-primary)',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <Plus size={20} strokeWidth={3} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Pricing Summary & Actions */}
            <div style={{
                padding: '32px',
                background: 'var(--pos-bg-card)',
                borderTop: '1px solid var(--pos-border-subtle)',
                boxShadow: '0 -10px 30px rgba(0,0,0,0.2)'
            }}>
                {/* Dynamic Pricing Visibility */}
                {activeRules.length > 0 && (
                    <div style={{
                        padding: '12px 16px',
                        background: 'rgba(31, 164, 169, 0.03)',
                        border: '1px solid rgba(31, 164, 169, 0.1)',
                        borderRadius: '16px',
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                    }}>
                        <div style={{
                            fontSize: '10px',
                            color: 'var(--pos-action-primary)',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <Package size={12} strokeWidth={3} /> Active Pricing Rules
                        </div>
                        {activeRules.map((rule, idx) => (
                            <div key={idx} style={{ fontSize: '12px', color: 'var(--pos-text-secondary)', fontWeight: 600 }}>
                                • {rule}
                            </div>
                        ))}
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', color: 'var(--pos-text-muted)', fontWeight: 700 }}>
                        <span>Subtotal</span>
                        <span style={{ color: 'var(--pos-text-secondary)' }}>${subtotal.toFixed(2)}</span>
                    </div>

                    {discounts > 0 && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', color: '#EF4444', fontWeight: 700 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span>Discount</span>
                                <button
                                    onClick={onRemoveDiscount}
                                    style={{
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        border: 'none',
                                        color: '#EF4444',
                                        padding: '2px 6px',
                                        borderRadius: '4px',
                                        fontSize: '10px',
                                        cursor: 'pointer',
                                        fontWeight: 900
                                    }}
                                >
                                    REMOVE
                                </button>
                            </div>
                            <span>-${discounts.toFixed(2)}</span>
                        </div>
                    )}

                    {discounts === 0 && cart.length > 0 && (
                        <button
                            onClick={onAddDiscount}
                            style={{
                                alignSelf: 'flex-start',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--pos-action-primary)',
                                fontSize: '13px',
                                fontWeight: 800,
                                cursor: 'pointer',
                                padding: '4px 0',
                                textDecoration: 'underline'
                            }}
                        >
                            + Apply Discount
                        </button>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', color: 'var(--pos-text-muted)', fontWeight: 700 }}>
                        <span>Tax (8%)</span>
                        <span style={{ color: 'var(--pos-text-secondary)' }}>${tax.toFixed(2)}</span>
                    </div>

                    {deliveryFee > 0 && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', color: 'var(--pos-text-muted)', fontWeight: 700 }}>
                            <span>Delivery Fee</span>
                            <span style={{ color: 'var(--pos-text-secondary)' }}>${deliveryFee.toFixed(2)}</span>
                        </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', color: 'var(--pos-action-primary)', fontWeight: 700 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span>Tip</span>
                            <span style={{ fontSize: '10px', background: 'rgba(31, 164, 169, 0.1)', padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>Optional</span>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            {tip === 0 ? (
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    {[10, 15, 20].map(pct => (
                                        <button
                                            key={pct}
                                            onClick={() => onUpdateTip(subtotal * pct / 100)}
                                            style={{
                                                background: 'rgba(31, 164, 169, 0.05)',
                                                border: '1px solid rgba(31, 164, 169, 0.1)',
                                                borderRadius: '6px',
                                                padding: '2px 8px',
                                                fontSize: '11px',
                                                color: 'var(--pos-action-primary)',
                                                fontWeight: 900,
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {pct}%
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span>${tip.toFixed(2)}</span>
                                    <button
                                        onClick={() => onUpdateTip(0)}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#EF4444',
                                            fontSize: '11px',
                                            fontWeight: 900,
                                            cursor: 'pointer',
                                            textDecoration: 'underline'
                                        }}
                                    >
                                        Clear
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div style={{ height: '1px', background: 'var(--pos-border-subtle)', margin: '8px 0' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '4px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 900, color: 'var(--pos-action-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total Amount</span>
                        <span style={{ fontSize: '42px', fontWeight: 900, color: 'var(--pos-text-primary)', lineHeight: 1, letterSpacing: '-0.04em' }}>
                            ${total.toFixed(2)}
                        </span>
                    </div>
                </div>

                {/* Secondary Actions */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                    <button
                        onClick={onHoldOrder}
                        disabled={cart.length === 0}
                        style={{
                            flex: 1,
                            height: '56px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--pos-border-subtle)',
                            color: cart.length > 0 ? 'var(--pos-text-primary)' : 'var(--pos-text-muted)',
                            borderRadius: '16px',
                            fontSize: '13px',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            opacity: cart.length > 0 ? 1 : 0.5
                        }}
                        className={cart.length > 0 ? "hover-scale" : ""}
                    >
                        <Pause size={18} /> Hold Order
                    </button>

                    <div style={{ flex: 1.2, position: 'relative' }}>
                        {!isConfirmingClear ? (
                            <button
                                onClick={() => setIsConfirmingClear(true)}
                                disabled={cart.length === 0}
                                style={{
                                    width: '100%',
                                    height: '56px',
                                    background: 'rgba(239, 68, 68, 0.05)',
                                    border: '1px solid rgba(239, 68, 68, 0.15)',
                                    color: cart.length > 0 ? '#EF4444' : 'var(--pos-text-muted)',
                                    borderRadius: '16px',
                                    fontSize: '13px',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    opacity: cart.length > 0 ? 1 : 0.5
                                }}
                                className={cart.length > 0 ? "hover-scale" : ""}
                            >
                                <Trash size={18} /> Clear Cart
                            </button>
                        ) : (
                            <div style={{ display: 'flex', gap: '6px', height: '56px' }}>
                                <button
                                    onClick={() => {
                                        onClearCart();
                                        setIsConfirmingClear(false);
                                    }}
                                    style={{
                                        flex: 1,
                                        background: '#EF4444',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontSize: '12px',
                                        fontWeight: 900,
                                        cursor: 'pointer'
                                    }}
                                >
                                    Confirm
                                </button>
                                <button
                                    onClick={() => setIsConfirmingClear(false)}
                                    style={{
                                        flex: 1,
                                        background: 'var(--pos-bg-surface)',
                                        color: 'var(--pos-text-muted)',
                                        border: '1px solid var(--pos-border-subtle)',
                                        borderRadius: '12px',
                                        fontSize: '12px',
                                        fontWeight: 900,
                                        cursor: 'pointer'
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Primary Action */}
                <button
                    onClick={onCheckout}
                    disabled={cart.length === 0}
                    style={{
                        width: '100%',
                        height: '80px',
                        background: cart.length > 0
                            ? 'linear-gradient(135deg, var(--pos-action-primary) 0%, #178d91 100%)'
                            : 'var(--pos-bg-surface)',
                        color: cart.length > 0 ? 'white' : 'var(--pos-text-muted)',
                        border: 'none',
                        borderRadius: '24px',
                        fontSize: '22px',
                        fontWeight: 900,
                        cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                        boxShadow: cart.length > 0 ? '0 20px 40px -10px rgba(31, 164, 169, 0.4)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        letterSpacing: '0.02em',
                        opacity: cart.length > 0 ? 1 : 0.5
                    }}
                    className={cart.length > 0 ? "hover-scale" : ""}
                >
                    <CreditCardContent total={total} disabled={cart.length === 0} />
                </button>
            </div>

            <style>{`
                @keyframes posFadeInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

const CreditCardContent = ({ total, disabled }: { total: number, disabled?: boolean }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: disabled ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <CreditCard size={22} color={disabled ? 'var(--pos-text-muted)' : 'white'} strokeWidth={2.5} />
        </div>
        <span>{disabled ? 'EMPTY CART' : `PROCEED TO PAYMENT ($${total.toFixed(2)})`}</span>
    </div>
);
