'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RotateCcw, AlertCircle, CheckCircle2, DollarSign } from 'lucide-react';
import '../styles/pos-rush.css';

const mockOrder = {
    id: 'ORD-1234',
    orderNumber: '#1234',
    total: 79.30,
    paymentMethod: 'CARD',
    cardLast4: '4242',
    items: [
        { id: 'I1', name: 'Large Pepperoni Pizza', quantity: 2, price: 47.98, refundable: true },
        { id: 'I2', name: 'Chicken Wings', quantity: 1, price: 12.99, refundable: true },
        { id: 'I3', name: 'Coca Cola', quantity: 2, price: 5.00, refundable: true }
    ]
};

export const RefundPage: React.FC = () => {
    const router = useRouter();
    const [refundType, setRefundType] = useState<'FULL' | 'PARTIAL'>('FULL');
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
    const [refundReason, setRefundReason] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    const calculateRefundAmount = () => {
        if (refundType === 'FULL') {
            return mockOrder.total;
        }
        if (customAmount) {
            return parseFloat(customAmount) || 0;
        }
        return mockOrder.items
            .filter(item => selectedItems.has(item.id))
            .reduce((sum, item) => sum + item.price, 0);
    };

    const handleItemToggle = (itemId: string) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(itemId)) {
            newSelected.delete(itemId);
        } else {
            newSelected.add(itemId);
        }
        setSelectedItems(newSelected);
    };

    const handleProcessRefund = async () => {
        if (!refundReason) {
            alert('Please provide a refund reason');
            return;
        }

        setProcessing(true);
        // Simulate API call
        setTimeout(() => {
            setProcessing(false);
            setSuccess(true);
            setTimeout(() => {
                router.push('/pos/dashboard');
            }, 2000);
        }, 2000);
    };

    const refundAmount = calculateRefundAmount();
    const canProcess = refundAmount > 0 && refundReason.trim().length > 0;

    if (success) {
        return (
            <div className="pos-screen">
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px'
                }}>
                    <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                        <div style={{
                            width: '120px',
                            height: '120px',
                            background: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 32px',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                        }}>
                            <CheckCircle2 size={70} color="#10B981" />
                        </div>
                        <h1 style={{ fontSize: '48px', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
                            Refund Processed
                        </h1>
                        <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 600, marginBottom: '32px' }}>
                            ${refundAmount.toFixed(2)} has been refunded to the customer
                        </p>
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '16px',
                            padding: '24px',
                            fontSize: '14px',
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontWeight: 600
                        }}>
                            Redirecting to dashboard...
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pos-screen">
            {/* Header */}
            <div className="pos-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{
                        width: '56px',
                        height: '56px',
                        background: 'white',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <RotateCcw size={28} color="#1E3A8A" />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'white', marginBottom: '4px' }}>
                            Process Refund
                        </h1>
                        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                            Order {mockOrder.orderNumber}
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => router.back()}
                    className="pos-btn pos-btn-secondary"
                >
                    Cancel
                </button>
            </div>

            <div className="pos-split-layout">
                {/* LEFT: Refund Configuration */}
                <div className="pos-left-panel">
                    {/* Warning */}
                    <div style={{ padding: '20px', borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                        <div style={{
                            background: 'rgba(239, 68, 68, 0.2)',
                            border: '2px solid #EF4444',
                            borderRadius: '16px',
                            padding: '16px',
                            display: 'flex',
                            gap: '12px'
                        }}>
                            <AlertCircle size={24} color="#FCA5A5" style={{ flexShrink: 0 }} />
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 700, color: '#FCA5A5', marginBottom: '4px' }}>
                                    Refund Warning
                                </div>
                                <div style={{ fontSize: '13px', color: 'rgba(252, 165, 165, 0.9)', fontWeight: 600 }}>
                                    This action cannot be undone. Please verify the refund details before processing.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Refund Type */}
                    <div style={{ padding: '20px', borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Refund Type
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            <button
                                onClick={() => setRefundType('FULL')}
                                style={{
                                    padding: '20px',
                                    borderRadius: '16px',
                                    border: refundType === 'FULL' ? '2px solid white' : '2px solid rgba(255, 255, 255, 0.2)',
                                    background: refundType === 'FULL' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
                                    Full Refund
                                </div>
                                <div style={{ fontSize: '24px', fontWeight: 800, color: 'white' }}>
                                    ${mockOrder.total.toFixed(2)}
                                </div>
                            </button>

                            <button
                                onClick={() => setRefundType('PARTIAL')}
                                style={{
                                    padding: '20px',
                                    borderRadius: '16px',
                                    border: refundType === 'PARTIAL' ? '2px solid white' : '2px solid rgba(255, 255, 255, 0.2)',
                                    background: refundType === 'PARTIAL' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
                                    Partial Refund
                                </div>
                                <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)' }}>
                                    Select items
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Partial Refund Options */}
                    {refundType === 'PARTIAL' && (
                        <div style={{ padding: '20px', borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Select Items to Refund
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                                {mockOrder.items.map(item => (
                                    <label
                                        key={item.id}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '16px',
                                            background: selectedItems.has(item.id) ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '12px',
                                            border: selectedItems.has(item.id) ? '2px solid white' : '2px solid rgba(255, 255, 255, 0.1)',
                                            cursor: 'pointer',
                                            transition: 'all 0.15s'
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.has(item.id)}
                                            onChange={() => handleItemToggle(item.id)}
                                            style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                        />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: '15px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>
                                                {item.quantity}x {item.name}
                                            </div>
                                            <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                                                ${item.price.toFixed(2)}
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>

                            <div style={{ marginTop: '20px' }}>
                                <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Or Enter Custom Amount
                                </h4>
                                <div style={{ position: 'relative' }}>
                                    <DollarSign size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.5)' }} />
                                    <input
                                        type="number"
                                        step="0.01"
                                        max={mockOrder.total}
                                        value={customAmount}
                                        onChange={(e) => {
                                            setCustomAmount(e.target.value);
                                            setSelectedItems(new Set());
                                        }}
                                        placeholder="0.00"
                                        className="pos-input"
                                        style={{ paddingLeft: '48px', fontSize: '20px', textAlign: 'center' }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Refund Reason */}
                    <div style={{ padding: '20px', flex: 1 }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Refund Reason <span style={{ color: '#F59E0B' }}>*</span>
                        </h3>
                        <textarea
                            value={refundReason}
                            onChange={(e) => setRefundReason(e.target.value)}
                            placeholder="Enter reason for refund..."
                            className="pos-input"
                            style={{ minHeight: '120px', resize: 'vertical' }}
                        />
                        <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, marginTop: '8px' }}>
                            This will be recorded in the order history
                        </div>
                    </div>
                </div>

                {/* RIGHT: Refund Summary */}
                <div className="pos-right-panel">
                    <div style={{ padding: '24px', borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'white', marginBottom: '4px' }}>
                            Refund Summary
                        </h2>
                        <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                            Review before processing
                        </p>
                    </div>

                    <div style={{ flex: 1, padding: '24px' }}>
                        {/* Order Info */}
                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Order Details
                            </h3>
                            <div className="pos-card" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>Order Number</span>
                                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'white' }}>{mockOrder.orderNumber}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>Original Total</span>
                                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'white' }}>${mockOrder.total.toFixed(2)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>Payment Method</span>
                                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'white' }}>
                                        {mockOrder.paymentMethod} •••• {mockOrder.cardLast4}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Refund Amount */}
                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Refund Amount
                            </h3>
                            <div style={{
                                background: 'rgba(239, 68, 68, 0.2)',
                                border: '2px solid #EF4444',
                                borderRadius: '16px',
                                padding: '24px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '14px', color: '#FCA5A5', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Amount to Refund
                                </div>
                                <div style={{ fontSize: '56px', fontWeight: 800, color: '#FCA5A5', lineHeight: 1 }}>
                                    ${refundAmount.toFixed(2)}
                                </div>
                            </div>
                        </div>

                        {/* Selected Items */}
                        {refundType === 'PARTIAL' && selectedItems.size > 0 && (
                            <div style={{ marginBottom: '32px' }}>
                                <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Items to Refund
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {mockOrder.items
                                        .filter(item => selectedItems.has(item.id))
                                        .map(item => (
                                            <div key={item.id} className="pos-card" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                                <div style={{ fontSize: '14px', fontWeight: 700, color: 'white' }}>
                                                    {item.quantity}x {item.name}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {/* Reason Preview */}
                        {refundReason && (
                            <div>
                                <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Reason
                                </h3>
                                <div className="pos-card" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                    <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>
                                        {refundReason}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Process Button */}
                    <div style={{ padding: '24px', borderTop: '2px solid rgba(255, 255, 255, 0.1)' }}>
                        <button
                            onClick={handleProcessRefund}
                            disabled={!canProcess || processing}
                            className="pos-btn pos-btn-primary"
                            style={{
                                width: '100%',
                                background: canProcess ? '#EF4444' : 'rgba(255, 255, 255, 0.1)',
                                color: canProcess ? 'white' : 'rgba(255, 255, 255, 0.5)',
                                cursor: canProcess ? 'pointer' : 'not-allowed'
                            }}
                        >
                            <RotateCcw size={20} />
                            {processing ? 'Processing Refund...' : `Process Refund - $${refundAmount.toFixed(2)}`}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
