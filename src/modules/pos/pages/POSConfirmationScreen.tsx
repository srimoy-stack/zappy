'use client';

// Enterprise POS Order Confirmation - v2.0
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Printer, Mail, MessageSquare } from 'lucide-react';
import { usePOS } from '@/modules/pos/context/POSContext';
import '../styles/pos-rush.css';

export const POSConfirmationScreen: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { session, clearCart, setCustomer, setTable } = usePOS();

    // Recovery of order details from URL
    const orderId = searchParams.get('orderId') || `${Math.floor(Math.random() * 900000) + 100000}`;
    const fulfillment = searchParams.get('fulfillment') || session?.channel || 'Pickup';
    const customerName = session?.activeCustomer?.name || searchParams.get('customerName') || null;
    const hasCustomerContact = !!(session?.activeCustomer?.phone || session?.activeCustomer?.email);

    const [isPrinting, setIsPrinting] = useState(false);
    const [sentStatus, setSentStatus] = useState<{ sms: boolean; email: boolean }>({ sms: false, email: false });

    // Calculate ETA based on fulfillment
    const getETA = () => {
        const now = new Date();
        let mins = 18;
        if (fulfillment === 'Dine-In') mins = 15;
        if (fulfillment === 'Delivery') mins = 35;

        const etaDate = new Date(now.getTime() + mins * 60000);
        return {
            time: etaDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase(),
            mins: mins
        };
    };

    const eta = getETA();

    const handlePrint = () => {
        setIsPrinting(true);
        setTimeout(() => {
            setIsPrinting(false);
            console.log(`[REPRINT] Order #${orderId} - Receipt reprinted at ${new Date().toISOString()}`);
        }, 1500);
    };

    const handleSendSMS = () => {
        if (!hasCustomerContact) return;
        setSentStatus(prev => ({ ...prev, sms: true }));
        console.log(`[SMS] Order #${orderId} - ETA: ${eta.mins} mins`);
        setTimeout(() => setSentStatus(prev => ({ ...prev, sms: false })), 3000);
    };

    const handleSendEmail = () => {
        if (!hasCustomerContact) return;
        setSentStatus(prev => ({ ...prev, email: true }));
        console.log(`[EMAIL] Order #${orderId} - Receipt sent`);
        setTimeout(() => setSentStatus(prev => ({ ...prev, email: false })), 3000);
    };

    const handleStartNewOrder = () => {
        // Reset all order state
        clearCart();
        setCustomer(null);
        setTable(null);

        // Navigate directly to menu (no dashboard redirect)
        router.push('/pos/menu');
    };

    // Debug logging
    console.log('[POSConfirmationScreen] Rendering with:', {
        orderId,
        fulfillment,
        customerName,
        hasCustomerContact,
        eta: eta.time
    });

    return (
        <div className="pos-screen" style={{
            background: 'var(--pos-bg-main)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            minHeight: '100vh'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '680px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
            }}>
                {/* ===== TOP SECTION: Order Confirmed + Order Number ===== */}
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: 900,
                        color: '#10B981',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '16px'
                    }}>
                        ORDER CONFIRMED
                    </h1>

                    {/* Large Order Number - Highest Visual Priority */}
                    <div style={{
                        fontSize: '72px',
                        fontWeight: 900,
                        color: 'var(--pos-text-primary)',
                        letterSpacing: '0.02em',
                        marginBottom: '24px',
                        lineHeight: 1,
                        padding: '16px',
                        background: 'var(--pos-bg-card)',
                        borderRadius: '16px',
                        border: '2px solid var(--pos-border-subtle)'
                    }}>
                        ORDER # {orderId}
                    </div>

                    {/* Fulfillment Type & ETA */}
                    <div style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'var(--pos-text-secondary)',
                        marginBottom: '8px'
                    }}>
                        {fulfillment.toUpperCase()}
                    </div>

                    {/* ETA - Improved Formatting */}
                    <div style={{
                        fontSize: '20px',
                        fontWeight: 900,
                        color: '#3B82F6',
                        marginBottom: customerName ? '12px' : '0'
                    }}>
                        Ready at {eta.time}
                    </div>

                    {/* Customer Name */}
                    {customerName && (
                        <div style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: 'var(--pos-text-muted)'
                        }}>
                            {customerName}
                        </div>
                    )}
                </div>

                {/* ===== MIDDLE SECTION: Communication Actions ===== */}
                {hasCustomerContact ? (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '12px'
                    }}>
                        <button
                            onClick={handlePrint}
                            disabled={isPrinting}
                            className="pos-btn-secondary"
                            style={{
                                height: '68px',
                                borderRadius: '14px',
                                fontWeight: 900,
                                fontSize: '13px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                padding: '10px',
                                opacity: isPrinting ? 0.5 : 1,
                                boxShadow: 'none'
                            }}
                        >
                            <Printer size={22} />
                            {isPrinting ? 'PRINTING...' : 'PRINT RECEIPT'}
                        </button>

                        <button
                            onClick={handleSendSMS}
                            disabled={sentStatus.sms}
                            className="pos-btn-secondary"
                            style={{
                                height: '68px',
                                borderRadius: '14px',
                                fontWeight: 900,
                                fontSize: '13px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                padding: '10px',
                                opacity: sentStatus.sms ? 0.5 : 1,
                                background: sentStatus.sms ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                color: sentStatus.sms ? '#10B981' : 'white',
                                borderColor: sentStatus.sms ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
                                boxShadow: 'none'
                            }}
                        >
                            <MessageSquare size={22} />
                            {sentStatus.sms ? 'SMS SENT ✓' : 'SEND SMS'}
                        </button>

                        <button
                            onClick={handleSendEmail}
                            disabled={sentStatus.email}
                            className="pos-btn-secondary"
                            style={{
                                height: '68px',
                                borderRadius: '14px',
                                fontWeight: 900,
                                fontSize: '13px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                padding: '10px',
                                opacity: sentStatus.email ? 0.5 : 1,
                                background: sentStatus.email ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                color: sentStatus.email ? '#10B981' : 'white',
                                borderColor: sentStatus.email ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
                                boxShadow: 'none'
                            }}
                        >
                            <Mail size={22} />
                            {sentStatus.email ? 'EMAIL SENT ✓' : 'SEND EMAIL'}
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button
                            onClick={handlePrint}
                            disabled={isPrinting}
                            className="pos-btn-secondary"
                            style={{
                                height: '68px',
                                borderRadius: '14px',
                                fontWeight: 900,
                                fontSize: '13px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '0 32px',
                                opacity: isPrinting ? 0.5 : 1,
                                boxShadow: 'none'
                            }}
                        >
                            <Printer size={22} />
                            {isPrinting ? 'PRINTING...' : 'PRINT RECEIPT'}
                        </button>
                    </div>
                )}

                {/* ===== BOTTOM SECTION: Primary CTA ===== */}
                <button
                    onClick={handleStartNewOrder}
                    className="pos-btn-primary"
                    style={{
                        height: '88px',
                        borderRadius: '18px',
                        fontSize: '22px',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        boxShadow: '0 16px 32px rgba(0, 0, 0, 0.4)',
                        marginTop: '8px'
                    }}
                >
                    START NEW ORDER
                </button>
            </div>
        </div>
    );
};

export default POSConfirmationScreen;
