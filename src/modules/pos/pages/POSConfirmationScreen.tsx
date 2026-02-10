'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    CheckCircle2,
    Printer,
    Mail,
    MessageSquare,
    PlusCircle,
    LayoutDashboard,
    Clock,
    Package
} from 'lucide-react';
import { usePOS } from '@/modules/pos/context/POSContext';
import '../styles/pos-rush.css';

export const POSConfirmationScreen: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { session, clearCart, setCustomer, setTable } = usePOS();

    // Recovery of order details from URL
    const orderId = searchParams.get('orderId') || `ORD-${Math.floor(Math.random() * 9000) + 1000}`;
    const fulfillment = searchParams.get('fulfillment') || session?.channel || 'Takeaway';

    const [isPrinting, setIsPrinting] = useState(false);
    const [sentStatus, setSentStatus] = useState<{ sms: boolean; email: boolean }>({ sms: false, email: false });
    const [kitchenStatus, setKitchenStatus] = useState<'ROUTING' | 'SENT' | 'PREPARING'>('ROUTING');

    // Simulate Kitchen Routing Lifecycle
    useEffect(() => {
        const routeTimer = setTimeout(() => setKitchenStatus('SENT'), 1500);
        const prepTimer = setTimeout(() => setKitchenStatus('PREPARING'), 4000);
        return () => {
            clearTimeout(routeTimer);
            clearTimeout(prepTimer);
        };
    }, []);

    // Calculate ETA based on fulfillment
    const getETA = () => {
        const now = new Date();
        let mins = 20;
        if (fulfillment === 'Dine-In') mins = 15;
        if (fulfillment === 'Delivery') mins = 45;

        const etaDate = new Date(now.getTime() + mins * 60000);
        return etaDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    const handlePrint = () => {
        setIsPrinting(true);
        // Simulate printing delay
        setTimeout(() => setIsPrinting(false), 2000);
    };

    const handleSendSMS = () => {
        if (!session?.activeCustomer?.phone && !searchParams.get('phone')) {
            alert('No customer phone number available');
            return;
        }
        setSentStatus(prev => ({ ...prev, sms: true }));
    };

    const handleSendEmail = () => {
        if (!session?.activeCustomer?.email && !searchParams.get('email')) {
            alert('No customer email address available');
            return;
        }
        setSentStatus(prev => ({ ...prev, email: true }));
    };

    const handleNewOrder = () => {
        clearCart();
        setCustomer(null);
        setTable(null);
        router.push('/pos/menu');
    };

    return (
        <div className="pos-screen" style={{
            background: 'var(--pos-bg-surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            overflow: 'hidden'
        }}>
            {/* Celebration Background */}
            <div style={{
                position: 'fixed',
                top: '-10%',
                left: '-10%',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div style={{
                width: '100%',
                maxWidth: '800px',
                zIndex: 1,
                animation: 'posFadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
                {/* Success Icon & Title */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        background: '#10B981',
                        borderRadius: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        margin: '0 auto 24px',
                        boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
                        animation: 'posScaleCheck 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}>
                        <CheckCircle2 size={64} strokeWidth={2.5} />
                    </div>
                    <h1 style={{ fontSize: '48px', fontWeight: 900, color: 'white', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                        Order Successful
                    </h1>
                    <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600 }}>
                        Transaction completed with zero errors
                    </p>
                </div>

                {/* Info Cards Grid */}
                <div className="pos-grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: '24px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '11px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                            Order ID
                        </div>
                        <div style={{ fontSize: '24px', fontWeight: 900, color: 'white' }}>
                            {orderId}
                        </div>
                    </div>

                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: '24px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '11px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                            Fulfillment
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: 900, color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <Package size={20} /> {fulfillment.toUpperCase()}
                        </div>
                    </div>

                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: '24px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '11px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                            Estimated Time
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: 900, color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <Clock size={20} /> {getETA()}
                        </div>
                    </div>
                </div>

                {/* Actions Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                    marginBottom: '48px'
                }}>
                    <button
                        onClick={handlePrint}
                        disabled={isPrinting}
                        className="pos-btn-secondary"
                        style={{ height: '80px', borderRadius: '24px', fontWeight: 900, fontSize: '14px', gap: '12px' }}
                    >
                        {isPrinting ? (
                            <div className="pos-loading-dots">PRINTING...</div>
                        ) : (
                            <>
                                <Printer size={24} /> PRINT RECEIPT
                            </>
                        )}
                    </button>

                    <button
                        onClick={handleSendSMS}
                        disabled={sentStatus.sms}
                        className="pos-btn-secondary"
                        style={{
                            height: '80px',
                            borderRadius: '24px',
                            fontWeight: 900,
                            fontSize: '14px',
                            gap: '12px',
                            background: sentStatus.sms ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                            color: sentStatus.sms ? '#10B981' : 'white',
                            borderColor: sentStatus.sms ? '#10B981' : 'rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        {sentStatus.sms ? <CheckCircle2 size={24} /> : <MessageSquare size={24} />}
                        {sentStatus.sms ? 'SMS SENT' : 'SEND SMS'}
                    </button>

                    <button
                        onClick={handleSendEmail}
                        disabled={sentStatus.email}
                        className="pos-btn-secondary"
                        style={{
                            height: '80px',
                            borderRadius: '24px',
                            fontWeight: 900,
                            fontSize: '14px',
                            gap: '12px',
                            background: sentStatus.email ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                            color: sentStatus.email ? '#10B981' : 'white',
                            borderColor: sentStatus.email ? '#10B981' : 'rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        {sentStatus.email ? <CheckCircle2 size={24} /> : <Mail size={24} />}
                        {sentStatus.email ? 'EMAIL SENT' : 'SEND EMAIL'}
                    </button>
                </div>

                {/* Primary Destination Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <button
                        onClick={handleNewOrder}
                        className="pos-btn-primary"
                        style={{
                            height: '88px',
                            borderRadius: '28px',
                            fontSize: '20px',
                            fontWeight: 900,
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
                        }}
                    >
                        <PlusCircle size={24} /> START NEXT ORDER
                    </button>

                    <button
                        onClick={() => router.push('/pos/dashboard')}
                        className="pos-btn-secondary"
                        style={{
                            height: '72px',
                            borderRadius: '24px',
                            fontWeight: 900,
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        <LayoutDashboard size={20} /> BACK TO DASHBOARD
                    </button>
                </div>
            </div>

            {/* Kitchen Routing Indicator (Section 12) */}
            <div style={{
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '9999px',
                backdropFilter: 'blur(10px)',
                animation: 'posFadeIn 1s ease'
            }}>
                <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: kitchenStatus === 'ROUTING' ? '#3B82F6' : (kitchenStatus === 'SENT' ? '#10B981' : '#F59E0B'),
                    boxShadow: `0 0 10px ${kitchenStatus === 'ROUTING' ? '#3B82F6' : (kitchenStatus === 'SENT' ? '#10B981' : '#F59E0B')}`,
                    animation: kitchenStatus !== 'SENT' ? 'posPulse 2s infinite' : 'none'
                }} />
                <span style={{
                    fontSize: '11px',
                    fontWeight: 900,
                    color: kitchenStatus === 'SENT' ? '#10B981' : 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em'
                }}>
                    {kitchenStatus === 'ROUTING' && 'Routing request to Kitchen KDS...'}
                    {kitchenStatus === 'SENT' && 'Order Routed & Accepted by Kitchen'}
                    {kitchenStatus === 'PREPARING' && 'Kitchen: Now Preparing Your Order'}
                </span>
            </div>

            <style>{`
                @keyframes posFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes posPulse {
                    0% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.2); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes posScaleCheck {
                    from { transform: scale(0); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .pos-loading-dots::after {
                    content: '...';
                    animation: posDots 1s infinite;
                }
                @keyframes posDots {
                    0% { content: ''; }
                    33% { content: '.'; }
                    66% { content: '..'; }
                    100% { content: '...'; }
                }
            `}</style>
        </div>
    );
};

export default POSConfirmationScreen;
