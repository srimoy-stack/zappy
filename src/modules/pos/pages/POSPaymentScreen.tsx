'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    CreditCard, Banknote, Terminal, Wallet, Gift,
    ArrowLeft, Check, Plus, Trash2, Printer, AlertCircle
} from 'lucide-react';
import { usePOS } from '@/modules/pos/context/POSContext';
import '../styles/pos-rush.css';

interface Transaction {
    id: string;
    method: string;
    amount: number;
    tip: number;
    status: 'SUCCESS' | 'FAILED';
    timestamp: Date;
}

const PAYMENT_METHODS = [
    { id: 'cash', label: 'Cash', icon: Banknote, color: '#10B981' },
    { id: 'card', label: 'Card', icon: CreditCard, color: '#3B82F6' },
    { id: 'terminal', label: 'Terminal', icon: Terminal, color: '#8B5CF6' },
    { id: 'wallet', label: 'Wallet', icon: Wallet, color: '#F59E0B' },
    { id: 'gift_card', label: 'Gift Card', icon: Gift, color: '#EC4899' },
];

export const POSPaymentScreen: React.FC = () => {
    const router = useRouter();
    const { cartTotal, clearCart } = usePOS();

    // Derived values
    const taxAmount = cartTotal * 0.1;
    const totalDue = cartTotal + taxAmount;

    // State
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [currentMethod, setCurrentMethod] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [tipValue, setTipValue] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);
    const [isComplete, setIsComplete] = useState(false);
    const [activeTab, setActiveTab] = useState<'AMOUNT' | 'TIP'>('AMOUNT');

    const amountPaid = transactions
        .filter(t => t.status === 'SUCCESS')
        .reduce((sum, t) => sum + t.amount, 0);

    const remainingBalance = Math.max(0, totalDue - amountPaid);
    const changeDue = Math.max(0, (amountPaid + (parseFloat(inputValue) || 0)) - totalDue);

    // Auto-fill remaining balance
    useEffect(() => {
        if (remainingBalance > 0 && !inputValue) {
            setInputValue(remainingBalance.toFixed(2));
        }
    }, [remainingBalance, currentMethod]);

    const handleNumpadClick = (val: string) => {
        setPaymentError(null);
        const target = activeTab === 'AMOUNT' ? inputValue : tipValue;
        const setter = activeTab === 'AMOUNT' ? setInputValue : setTipValue;

        if (val === 'C') {
            setter('');
        } else if (val === '.') {
            if (!target.includes('.')) setter(prev => prev + val);
        } else {
            setter(prev => prev + val);
        }
    };

    const processTransaction = async () => {
        if (!currentMethod) return;
        const amount = parseFloat(inputValue);
        if (isNaN(amount) || amount <= 0) {
            setPaymentError('Please enter a valid amount');
            return;
        }

        setIsProcessing(true);
        setPaymentError(null);

        // Simulate network/terminal latency
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock failure for demonstration (e.g., if amount is exactly 13)
        if (amount === 13) {
            setIsProcessing(false);
            router.push(`/pos/payment-confirmation?status=failure&method=${currentMethod}&amount=${amount}&reason=${encodeURIComponent('Transaction Declined: Insufficient Funds')}`);
            return;
        }

        const newTransaction: Transaction = {
            id: Math.random().toString(36).substr(2, 9),
            method: currentMethod,
            amount: amount,
            tip: parseFloat(tipValue) || 0,
            status: 'SUCCESS',
            timestamp: new Date()
        };

        const updatedTransactions = [...transactions, newTransaction];
        setTransactions(updatedTransactions);

        const totalPaidNow = updatedTransactions
            .filter(t => t.status === 'SUCCESS')
            .reduce((sum, t) => sum + t.amount, 0);

        setIsProcessing(false);

        if (totalPaidNow >= totalDue) {
            const orderId = `ORD-${Math.floor(Math.random() * 9000) + 1000}`;
            router.push(`/pos/payment-confirmation?status=success&method=${currentMethod}&amount=${amount}&change=${changeDue.toFixed(2)}&orderId=${orderId}`);
        } else {
            // Partial payment success
            setCurrentMethod(null);
            setInputValue('');
            setTipValue('');
        }
    };

    const removeTransaction = (id: string) => {
        setTransactions(prev => prev.filter(t => t.id !== id));
        setIsComplete(false);
    };

    const handleFinalize = () => {
        clearCart();
        router.push('/pos/dashboard');
    };

    if (isComplete) {
        return (
            <div className="pos-screen" style={{ background: 'var(--pos-bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    width: '500px',
                    background: 'var(--pos-bg-card)',
                    borderRadius: '32px',
                    padding: '48px',
                    textAlign: 'center',
                    border: '1px solid var(--pos-border-subtle)',
                    boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)',
                    animation: 'posFadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'rgba(16, 185, 129, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 32px',
                        color: '#10B981'
                    }}>
                        <Check size={64} strokeWidth={3} />
                    </div>
                    <h1 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '16px', color: 'var(--pos-text-primary)' }}>Payment Successful</h1>
                    <p style={{ color: 'var(--pos-text-muted)', fontSize: '18px', marginBottom: '40px', fontWeight: 600 }}>
                        Order #{Math.floor(Math.random() * 9000) + 1000} has been finalized.
                    </p>

                    <div style={{ background: 'var(--pos-bg-surface)', borderRadius: '24px', padding: '24px', marginBottom: '40px', border: '1px solid var(--pos-border-subtle)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px', fontWeight: 700, color: 'var(--pos-text-muted)' }}>
                            <span>TOTAL PAID</span>
                            <span style={{ color: 'var(--pos-text-primary)' }}>${totalDue.toFixed(2)}</span>
                        </div>
                        {transactions.map(t => (
                            <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px', fontWeight: 600 }}>
                                <span style={{ textTransform: 'uppercase', color: 'var(--pos-text-secondary)' }}>{t.method}</span>
                                <span style={{ color: 'var(--pos-text-primary)' }}>${t.amount.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <button className="pos-btn-secondary" style={{ height: '64px', borderRadius: '16px', fontWeight: 900 }} onClick={() => window.print()}>
                            <Printer size={20} style={{ marginRight: '10px' }} /> RECEIPT
                        </button>
                        <button className="pos-btn-primary" style={{ height: '64px', borderRadius: '16px', fontWeight: 900 }} onClick={handleFinalize}>
                            DONE
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pos-screen" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--pos-bg-surface)' }}>
                {/* Header */}
                <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--pos-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <button
                            onClick={() => router.back()}
                            style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--pos-bg-card)', border: '1px solid var(--pos-border-subtle)', color: 'var(--pos-text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--pos-text-primary)' }}>Checkout Selection</div>
                            <div style={{ fontSize: '13px', color: 'var(--pos-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Split or Single Payment Flow</div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                    {/* Processing Column */}
                    <div style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
                        {isProcessing ? (
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
                                <div style={{ width: '80px', height: '80px', border: '8px solid rgba(31, 164, 169, 0.1)', borderTopColor: 'var(--pos-action-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--pos-text-primary)', marginBottom: '8px' }}>Processing {currentMethod?.toUpperCase()}...</div>
                                    <div style={{ color: 'var(--pos-text-muted)', fontWeight: 600 }}>Please wait for terminal response</div>
                                </div>
                            </div>
                        ) : (
                            <>
                                {!currentMethod ? (
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                                        {PAYMENT_METHODS.map(m => (
                                            <button
                                                key={m.id}
                                                onClick={() => setCurrentMethod(m.id)}
                                                style={{
                                                    height: '140px',
                                                    background: 'var(--pos-bg-card)',
                                                    border: '1px solid var(--pos-border-subtle)',
                                                    borderRadius: '24px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '12px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s'
                                                }}
                                                className="hover-scale"
                                            >
                                                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${m.color}15`, color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <m.icon size={32} />
                                                </div>
                                                <span style={{ fontSize: '18px', fontWeight: 900, color: 'var(--pos-text-primary)', textTransform: 'uppercase' }}>{m.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ maxWidth: '440px', margin: '0 auto' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{ padding: '8px', background: 'rgba(31, 164, 169, 0.1)', borderRadius: '10px', color: 'var(--pos-action-primary)' }}>
                                                    <Plus size={20} />
                                                </div>
                                                <h3 style={{ fontSize: '20px', fontWeight: 900, color: 'var(--pos-text-primary)' }}>Payment: {currentMethod.toUpperCase()}</h3>
                                            </div>
                                            <button onClick={() => setCurrentMethod(null)} style={{ border: 'none', background: 'transparent', color: 'var(--pos-text-muted)', fontWeight: 800, cursor: 'pointer' }}>CHANGE</button>
                                        </div>

                                        {/* Input Box */}
                                        <div style={{ display: 'flex', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--pos-border-subtle)', marginBottom: '32px', height: '80px' }}>
                                            <button
                                                onClick={() => setActiveTab('AMOUNT')}
                                                style={{ flex: 1, background: activeTab === 'AMOUNT' ? 'var(--pos-bg-card)' : 'var(--pos-bg-surface)', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px' }}
                                            >
                                                <span style={{ fontSize: '10px', fontWeight: 900, color: 'var(--pos-text-muted)', textTransform: 'uppercase' }}>Amount to Pay</span>
                                                <span style={{ fontSize: '24px', fontWeight: 900, color: activeTab === 'AMOUNT' ? 'var(--pos-action-primary)' : 'var(--pos-text-secondary)' }}>${inputValue || '0.00'}</span>
                                            </button>
                                            <button
                                                onClick={() => setActiveTab('TIP')}
                                                style={{ flex: 1, background: activeTab === 'TIP' ? 'var(--pos-bg-card)' : 'var(--pos-bg-surface)', border: 'none', borderLeft: '1px solid var(--pos-border-subtle)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px' }}
                                            >
                                                <span style={{ fontSize: '10px', fontWeight: 900, color: 'var(--pos-text-muted)', textTransform: 'uppercase' }}>Tip Entry</span>
                                                <span style={{ fontSize: '24px', fontWeight: 900, color: activeTab === 'TIP' ? 'var(--pos-action-primary)' : 'var(--pos-text-secondary)' }}>${tipValue || '0.00'}</span>
                                            </button>
                                        </div>

                                        <div className="pos-numpad" style={{ gap: '12px', marginBottom: '32px' }}>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'C'].map(v => (
                                                <button key={v} className="pos-numpad-btn" style={{ height: '70px', borderRadius: '16px', fontSize: '22px' }} onClick={() => handleNumpadClick(v.toString())}>{v}</button>
                                            ))}
                                        </div>

                                        {paymentError && (
                                            <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '16px', color: '#EF4444', fontSize: '14px', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <AlertCircle size={20} /> {paymentError}
                                            </div>
                                        )}

                                        <button
                                            onClick={processTransaction}
                                            className="pos-btn-primary"
                                            style={{ width: '100%', height: '72px', borderRadius: '20px', fontSize: '18px', fontWeight: 900 }}
                                        >
                                            {remainingBalance > 0 && parseFloat(inputValue) < remainingBalance ? 'PARTIAL PAYMENT' : 'PROCESS PAYMENT'}
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Summary Column */}
                    <div style={{ width: '440px', background: 'var(--pos-bg-card)', borderLeft: '1px solid var(--pos-border-subtle)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '12px', fontWeight: 900, color: 'var(--pos-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Total Amount Due</div>
                            <div style={{ fontSize: '48px', fontWeight: 900, color: 'var(--pos-text-primary)', letterSpacing: '-0.03em' }}>${totalDue.toFixed(2)}</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'var(--pos-bg-surface)', borderRadius: '16px', border: '1px solid var(--pos-border-subtle)' }}>
                                <span style={{ fontWeight: 800, color: 'var(--pos-text-muted)' }}>PAID</span>
                                <span style={{ fontWeight: 900, color: '#10B981' }}>${amountPaid.toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'var(--pos-bg-surface)', borderRadius: '16px', border: '1px solid var(--pos-border-subtle)' }}>
                                <span style={{ fontWeight: 800, color: 'var(--pos-text-muted)' }}>REMAINING</span>
                                <span style={{ fontWeight: 900, color: remainingBalance > 0 ? '#F59E0B' : 'var(--pos-text-muted)' }}>${remainingBalance.toFixed(2)}</span>
                            </div>
                            {currentMethod === 'cash' && changeDue > 0 && (
                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                    <span style={{ fontWeight: 800, color: '#10B981' }}>CHANGE</span>
                                    <span style={{ fontWeight: 900, color: '#10B981' }}>${changeDue.toFixed(2)}</span>
                                </div>
                            )}
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--pos-text-muted)', textTransform: 'uppercase', marginBottom: '16px' }}>Transactions</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {transactions.length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '24px', color: 'var(--pos-text-muted)', border: '1px dashed var(--pos-border-subtle)', borderRadius: '20px' }}>
                                        No payments recorded yet.
                                    </div>
                                ) : (
                                    transactions.map(t => (
                                        <div key={t.id} style={{ padding: '16px', background: 'var(--pos-bg-surface)', borderRadius: '16px', border: '1px solid var(--pos-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{ color: '#10B981' }}><Check size={18} /></div>
                                                <div>
                                                    <div style={{ fontSize: '14px', fontWeight: 900, textTransform: 'uppercase' }}>{t.method}</div>
                                                    {t.tip > 0 && <div style={{ fontSize: '11px', color: 'var(--pos-text-muted)' }}>Tip: ${t.tip.toFixed(2)}</div>}
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <span style={{ fontWeight: 800 }}>${t.amount.toFixed(2)}</span>
                                                <button onClick={() => removeTransaction(t.id)} style={{ border: 'none', background: 'transparent', color: '#EF4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button className="pos-btn-secondary" style={{ flex: 1, borderRadius: '16px' }} onClick={() => router.back()}>CANCEL</button>
                            <button className="pos-btn-danger" style={{ flex: 1, borderRadius: '16px' }} onClick={() => setTransactions([])} disabled={transactions.length === 0}>VOID ALL</button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes posFadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
};

export default POSPaymentScreen;
