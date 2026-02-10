'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePOS } from '@/modules/pos/context/POSContext';
import {
    Plus,
    Clock,
    Pause,
    History,
    Printer,
    User,
    Phone,
    LogOut,
    Settings,
    Store,
    RotateCcw,
    CheckCircle2,
    AlertCircle,
    WifiOff,
    Wifi
} from 'lucide-react';
import { mockPOSCustomers } from '../mock/posData';
import '../styles/pos-rush.css';

// Mock data for dashboard
const mockOpenOrders = [
    { id: 'ORD-5501', customer: 'John Doe', status: 'PREPARING', time: '5m', amount: 45.50 },
    { id: 'ORD-5502', customer: 'Sarah Smith', status: 'READY', time: '2m', amount: 32.00 },
    { id: 'ORD-5503', customer: 'Mike Johnson', status: 'PREPARING', time: '8m', amount: 68.25 },
];

const mockHeldOrders = [
    { id: 'ORD-5498', customer: 'Alice Brown', heldAt: '15m', isWarning: false },
    { id: 'ORD-5497', customer: 'Bob Wilson', heldAt: '1h 20m', isWarning: true },
];

const mockRecentOrders = [
    { id: 'ORD-5500', amount: 45.50, time: '11:20 AM', customer: 'Walk-in' },
    { id: 'ORD-5499', amount: 32.00, time: '11:15 AM', customer: 'Sarah Parker' },
    { id: 'ORD-5498', amount: 28.75, time: '11:10 AM', customer: 'James Miller' },
];

export const POSDashboardPage: React.FC = () => {
    const router = useRouter();
    const { session, logout, isOffline, setCustomer, setIncomingCall } = usePOS();
    const [currentTime, setCurrentTime] = useState<string>('');
    const [showIncomingCall, setShowIncomingCall] = useState(false);

    const isCallCenter = session?.posType === 'CALL_CENTER';

    // Clock
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);
        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        return () => clearInterval(timer);
    }, []);

    // Simulated incoming call for Call Center demo
    // Simulated incoming call for Call Center demo
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isCallCenter) {
            timer = setTimeout(() => {
                setShowIncomingCall(true);
                setIncomingCall({
                    number: '+1 (555) 012-3456',
                    caller: 'Jessica Pearson',
                    location: 'New York, NY',
                    customerId: 'CUST-001'
                });
            }, 3000);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isCallCenter, setIncomingCall]);

    // Keyboard shortcut for New Order (Ctrl+N or F1)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey && e.key === 'n') || e.key === 'F1') {
                e.preventDefault();
                router.push('/pos/fulfillment');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [router]);

    const handleNewOrder = () => {
        router.push('/pos/fulfillment');
    };

    const handleAttachCall = () => {
        // Find existing customer from mock data for full profile
        const customer = mockPOSCustomers.find(c => c.id === 'CUST-001');
        if (customer) {
            setCustomer(customer);
        } else {
            setCustomer({
                id: 'CUST-001',
                name: 'Jessica Pearson',
                phone: '+1 (555) 012-3456',
                email: 'jessica@pearsonhardman.com',
                loyaltyPoints: 1250,
                tier: 'GOLD',
                notes: 'VIP Customer - Incoming call',
                addresses: [],
                recentOrders: []
            });
        }
        setShowIncomingCall(false);
        router.push('/pos/fulfillment');
    };

    if (!session) {
        router.push('/pos/login');
        return null;
    }

    return (
        <div className="pos-screen" style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* HEADER BAR */}
            <header style={{
                height: '64px',
                background: 'var(--pos-bg-surface)',
                borderBottom: '1px solid var(--pos-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
                flexShrink: 0
            }}>
                {/* Left: Store Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--pos-action-primary)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Store size={22} color="white" strokeWidth={2.5} />
                    </div>
                    <div>
                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--pos-text-primary)', lineHeight: 1.2 }}>
                            {session.store?.name || 'POS Dashboard'}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--pos-text-muted)', fontWeight: 600 }}>
                            {session.channel || 'No Channel'} • {session.user.name}
                        </div>
                    </div>
                </div>

                {/* Right: Status, Time, Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    {/* Online/Offline Status */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {isOffline ? (
                            <>
                                <WifiOff size={16} color="var(--pos-state-warning)" />
                                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--pos-state-warning)' }}>OFFLINE</span>
                            </>
                        ) : (
                            <>
                                <Wifi size={16} color="var(--pos-state-success)" />
                                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--pos-state-success)' }}>ONLINE</span>
                            </>
                        )}
                    </div>

                    {/* Clock */}
                    <div style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        color: 'var(--pos-text-primary)',
                        fontFamily: 'monospace',
                        background: 'var(--pos-bg-main)',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--pos-border-subtle)'
                    }}>
                        {currentTime}
                    </div>

                    {/* Settings & Logout */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                            onClick={() => router.push('/pos/settings')}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                background: 'var(--pos-bg-card)',
                                border: '1px solid var(--pos-border-subtle)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Settings size={20} color="var(--pos-text-secondary)" />
                        </button>
                        <button
                            onClick={logout}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                background: 'var(--pos-bg-card)',
                                border: '1px solid var(--pos-border-subtle)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            <LogOut size={20} color="var(--pos-text-secondary)" />
                        </button>
                    </div>
                </div>
            </header>

            {/* CALL CENTER INCOMING CALL BANNER (Fixed at top, doesn't block content) */}
            {isCallCenter && showIncomingCall && (
                <div style={{
                    height: '72px',
                    background: 'linear-gradient(135deg, var(--pos-state-success) 0%, #059669 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 24px',
                    color: 'white',
                    flexShrink: 0,
                    borderBottom: '2px solid #059669',
                    animation: 'pulse 2s infinite'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            animation: 'pulse 1.5s infinite'
                        }}>
                            <Phone size={22} color="var(--pos-state-success)" />
                        </div>
                        <div>
                            <div style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '0.02em' }}>INCOMING CALL</div>
                            <div style={{ fontSize: '13px', opacity: 0.95, fontWeight: 600 }}>
                                +1 (555) 012-3456 • Jessica Pearson • VIP Customer
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            onClick={handleAttachCall}
                            className="pos-btn"
                            style={{
                                background: 'white',
                                color: 'var(--pos-state-success)',
                                border: 'none',
                                height: '48px',
                                fontSize: '14px',
                                fontWeight: 700
                            }}
                        >
                            <Phone size={18} />
                            ATTACH TO ORDER
                        </button>
                        <button
                            onClick={() => setShowIncomingCall(false)}
                            className="pos-btn"
                            style={{
                                background: 'rgba(255,255,255,0.2)',
                                color: 'white',
                                border: 'none',
                                height: '48px',
                                fontSize: '14px',
                                fontWeight: 700
                            }}
                        >
                            IGNORE
                        </button>
                    </div>
                </div>
            )}

            {/* MAIN CONTENT */}
            <div style={{
                flex: 1,
                padding: '24px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
            }}>
                <div style={{ maxWidth: '1600px', margin: '0 auto', width: '100%' }}>

                    {/* PRIMARY ACTION: NEW ORDER (Hero CTA) */}
                    <button
                        onClick={handleNewOrder}
                        className="pos-btn pos-btn-primary"
                        style={{
                            width: '100%',
                            height: '120px',
                            background: 'linear-gradient(135deg, var(--pos-action-primary) 0%, #178B8F 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            marginBottom: '24px',
                            boxShadow: '0 8px 24px rgba(31, 164, 169, 0.3)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Decorative element */}
                        <div style={{
                            position: 'absolute',
                            top: '-30%',
                            right: '-5%',
                            width: '250px',
                            height: '250px',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '50%'
                        }} />

                        <div style={{
                            width: '72px',
                            height: '72px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Plus size={40} color="white" strokeWidth={3} />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '32px', fontWeight: 800, color: 'white', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                                NEW ORDER
                            </div>
                            <div style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>
                                Start taking customer order
                            </div>
                        </div>

                        {/* Keyboard shortcut hint */}
                        <div style={{
                            position: 'absolute',
                            bottom: '12px',
                            right: '20px',
                            background: 'rgba(0, 0, 0, 0.2)',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            color: 'rgba(255,255,255,0.95)',
                            fontWeight: 700,
                            letterSpacing: '0.05em'
                        }}>
                            F1 or Ctrl+N
                        </div>
                    </button>

                    {/* SECONDARY ACTIONS: 3-Column Grid */}
                    <div className="pos-grid-3" style={{ gap: '20px', marginBottom: '24px' }}>

                        {/* OPEN ORDERS */}
                        <div style={{
                            background: 'var(--pos-bg-surface)',
                            border: '1px solid var(--pos-border-subtle)',
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                padding: '16px 20px',
                                borderBottom: '1px solid var(--pos-border-subtle)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'var(--pos-bg-card)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Clock size={20} color="var(--pos-state-error)" />
                                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pos-text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Open Orders
                                    </h3>
                                </div>
                                <div style={{
                                    background: 'var(--pos-state-error)',
                                    color: 'white',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    fontSize: '13px',
                                    fontWeight: 800
                                }}>
                                    {mockOpenOrders.length}
                                </div>
                            </div>
                            <div style={{ padding: '8px 0', minHeight: '180px' }}>
                                {mockOpenOrders.slice(0, 3).map((order, idx) => (
                                    <div key={idx} style={{
                                        padding: '12px 20px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderBottom: idx < 2 ? '1px solid var(--pos-border-subtle)' : 'none',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }}>
                                        <div>
                                            <div style={{ fontWeight: 700, color: 'var(--pos-text-primary)', fontSize: '14px', marginBottom: '4px' }}>
                                                {order.id}
                                            </div>
                                            <div style={{ fontSize: '12px', color: 'var(--pos-text-muted)' }}>
                                                {order.customer} • {order.time}
                                            </div>
                                        </div>
                                        <span className="pos-badge pos-badge-warning" style={{ fontSize: '10px' }}>
                                            {order.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => router.push('/pos/open-orders')}
                                className="pos-btn pos-btn-secondary"
                                style={{
                                    width: '100%',
                                    borderRadius: '0',
                                    borderTop: '1px solid var(--pos-border-subtle)',
                                    fontSize: '12px',
                                    height: '48px'
                                }}
                            >
                                View All →
                            </button>
                        </div>

                        {/* HELD ORDERS */}
                        <div style={{
                            background: 'var(--pos-bg-surface)',
                            border: '1px solid var(--pos-border-subtle)',
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                padding: '16px 20px',
                                borderBottom: '1px solid var(--pos-border-subtle)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'var(--pos-bg-card)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Pause size={20} color="var(--pos-state-warning)" />
                                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pos-text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Held Orders
                                    </h3>
                                </div>
                                <div style={{
                                    background: 'var(--pos-state-warning)',
                                    color: 'white',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    fontSize: '13px',
                                    fontWeight: 800
                                }}>
                                    {mockHeldOrders.length}
                                </div>
                            </div>
                            <div style={{ padding: '8px 0', minHeight: '180px' }}>
                                {mockHeldOrders.map((order, idx) => (
                                    <div key={idx} style={{
                                        padding: '12px 20px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderBottom: idx < mockHeldOrders.length - 1 ? '1px solid var(--pos-border-subtle)' : 'none',
                                        cursor: 'pointer'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ fontWeight: 700, color: 'var(--pos-text-primary)', fontSize: '14px' }}>
                                                {order.id}
                                            </div>
                                            {order.isWarning && <AlertCircle size={16} color="var(--pos-state-error)" />}
                                        </div>
                                        <div style={{ fontSize: '12px', color: 'var(--pos-text-muted)', fontWeight: 600 }}>
                                            {order.heldAt}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => router.push('/pos/held-orders')}
                                className="pos-btn pos-btn-secondary"
                                style={{
                                    width: '100%',
                                    borderRadius: '0',
                                    borderTop: '1px solid var(--pos-border-subtle)',
                                    fontSize: '12px',
                                    height: '48px'
                                }}
                            >
                                View All →
                            </button>
                        </div>

                        {/* RECENT ORDERS */}
                        <div style={{
                            background: 'var(--pos-bg-surface)',
                            border: '1px solid var(--pos-border-subtle)',
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                padding: '16px 20px',
                                borderBottom: '1px solid var(--pos-border-subtle)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'var(--pos-bg-card)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <History size={20} color="var(--pos-text-secondary)" />
                                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pos-text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Recent Orders
                                    </h3>
                                </div>
                            </div>
                            <div style={{ padding: '8px 0', minHeight: '180px' }}>
                                {mockRecentOrders.map((order, idx) => (
                                    <div key={idx} style={{
                                        padding: '12px 20px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderBottom: idx < mockRecentOrders.length - 1 ? '1px solid var(--pos-border-subtle)' : 'none',
                                        cursor: 'pointer'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <CheckCircle2 size={16} color="var(--pos-state-success)" />
                                            <div style={{ fontWeight: 700, color: 'var(--pos-text-primary)', fontSize: '14px' }}>
                                                {order.id}
                                            </div>
                                        </div>
                                        <div style={{ fontWeight: 700, color: 'var(--pos-text-primary)', fontSize: '14px' }}>
                                            ${order.amount.toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => router.push('/pos/orders')}
                                className="pos-btn pos-btn-secondary"
                                style={{
                                    width: '100%',
                                    borderRadius: '0',
                                    borderTop: '1px solid var(--pos-border-subtle)',
                                    fontSize: '12px',
                                    height: '48px'
                                }}
                            >
                                View All →
                            </button>
                        </div>
                    </div>

                    {/* QUICK ACTIONS BAR (Always Visible) */}
                    <div style={{
                        background: 'var(--pos-bg-surface)',
                        border: '1px solid var(--pos-border-subtle)',
                        borderRadius: '12px',
                        padding: '20px',
                        display: 'flex',
                        gap: '16px',
                        justifyContent: 'flex-start'
                    }}>
                        <button
                            onClick={() => router.push('/pos/refund')}
                            className="pos-btn pos-btn-secondary"
                            style={{
                                height: '64px',
                                minWidth: '180px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                fontSize: '15px'
                            }}
                        >
                            <RotateCcw size={20} />
                            Refund
                        </button>
                        <button
                            onClick={() => router.push('/pos/orders')}
                            className="pos-btn pos-btn-secondary"
                            style={{
                                height: '64px',
                                minWidth: '200px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                fontSize: '15px'
                            }}
                        >
                            <Printer size={20} />
                            Reprint Receipt
                        </button>
                        <button
                            onClick={() => router.push('/pos/customer-search')}
                            className="pos-btn pos-btn-secondary"
                            style={{
                                height: '64px',
                                minWidth: '200px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                fontSize: '15px'
                            }}
                        >
                            <User size={20} />
                            Customer Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POSDashboardPage;
