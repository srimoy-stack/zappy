'use client';

import React from 'react';
import { X, Banknote, CreditCard, Terminal, Wallet, Gift, Columns, AlertCircle } from 'lucide-react';
import '../styles/pos-rush.css';

interface POSPaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    total: number;
    onSelectMethod: (method: string) => void;
    disabledMethods?: string[];
}

const paymentMethods = [
    { id: 'cash', label: 'Cash', icon: Banknote, color: '#10B981', description: 'Take physical currency' },
    { id: 'card', label: 'Card', icon: CreditCard, color: '#3B82F6', description: 'Swipe or Dip card' },
    { id: 'terminal', label: 'Terminal', icon: Terminal, color: '#8B5CF6', description: 'External device' },
    { id: 'wallet', label: 'Wallet', icon: Wallet, color: '#F59E0B', description: 'Apple Pay, G-Pay, etc.' },
    { id: 'gift_card', label: 'Gift Card', icon: Gift, color: '#EC4899', description: 'Redeem store credit' },
    { id: 'split', label: 'Split Payment', icon: Columns, color: '#6366F1', description: 'Multiple methods' },
];

export const POSPaymentModal: React.FC<POSPaymentModalProps> = ({
    isOpen,
    onClose,
    total,
    onSelectMethod,
    disabledMethods = []
}) => {
    if (!isOpen) return null;

    return (
        <div className="pos-modal-overlay">
            <div className="pos-modal" style={{ width: '800px', maxWidth: '95vw' }}>
                <div className="pos-modal-header" style={{ padding: '32px' }}>
                    <div>
                        <div className="pos-title-md" style={{ fontSize: '24px', fontWeight: 900 }}>Select Payment Method</div>
                        <div style={{ fontSize: '14px', color: 'var(--pos-text-muted)', fontWeight: 600, marginTop: '4px' }}>
                            Order Total: <span style={{ color: 'var(--pos-action-primary)', fontWeight: 900 }}>${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <button
                        className="pos-btn-secondary"
                        onClick={onClose}
                        style={{ width: '48px', height: '48px', padding: 0, borderRadius: '16px' }}
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="pos-modal-body" style={{ padding: '0 32px 32px' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '20px'
                    }}>
                        {paymentMethods.map((method) => {
                            const isDisabled = disabledMethods.includes(method.id);
                            const Icon = method.icon;

                            return (
                                <button
                                    key={method.id}
                                    onClick={() => !isDisabled && onSelectMethod(method.id)}
                                    disabled={isDisabled}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '32px 24px',
                                        background: isDisabled ? 'rgba(255,255,255,0.02)' : 'var(--pos-bg-card)',
                                        border: isDisabled ? '1px solid rgba(255,255,255,0.05)' : '1px solid var(--pos-border-subtle)',
                                        borderRadius: '28px',
                                        cursor: isDisabled ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        gap: '16px',
                                        opacity: isDisabled ? 0.4 : 1
                                    }}
                                    className={!isDisabled ? "hover-scale" : ""}
                                >
                                    <div style={{
                                        width: '72px',
                                        height: '72px',
                                        borderRadius: '22px',
                                        background: isDisabled ? 'rgba(255,255,255,0.05)' : `${method.color}15`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: isDisabled ? 'var(--pos-text-muted)' : method.color,
                                        border: `1px solid ${isDisabled ? 'transparent' : `${method.color}30`}`
                                    }}>
                                        <Icon size={36} strokeWidth={2.5} />
                                    </div>

                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: '18px',
                                            fontWeight: 900,
                                            color: isDisabled ? 'var(--pos-text-muted)' : 'var(--pos-text-primary)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.02em',
                                            marginBottom: '4px'
                                        }}>
                                            {method.label}
                                        </div>
                                        <div style={{
                                            fontSize: '12px',
                                            color: 'var(--pos-text-muted)',
                                            fontWeight: 600,
                                            lineHeight: 1.4
                                        }}>
                                            {isDisabled ? 'Method Unavailable' : method.description}
                                        </div>
                                    </div>

                                    {isDisabled && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '12px',
                                            right: '12px'
                                        }}>
                                            <AlertCircle size={16} color="var(--pos-text-muted)" />
                                        </div>
                                    )}

                                    {!isDisabled && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: method.color,
                                            opacity: 0.3
                                        }} />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    <div style={{
                        marginTop: '32px',
                        padding: '20px',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '20px',
                        border: '1px solid var(--pos-border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px'
                    }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--pos-action-primary)' }} />
                        <span style={{ fontSize: '13px', color: 'var(--pos-text-muted)', fontWeight: 600 }}>
                            All payments are securely processed and recorded for this session.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POSPaymentModal;
