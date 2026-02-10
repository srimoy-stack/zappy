'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pause, Play, Trash2, Clock, Search } from 'lucide-react';
import '../styles/pos-rush.css';

const mockHeldOrders = [
    {
        id: 'H001',
        orderNumber: '#H001',
        customer: 'Alice Brown',
        phone: '+1 (555) 111-2222',
        items: 4,
        total: 52.00,
        heldAt: '10:30 AM',
        heldBy: 'John (Cashier)',
        reason: 'Customer stepped away',
        itemsList: ['Large Pizza', 'Garlic Bread', 'Coke x2']
    },
    {
        id: 'H002',
        orderNumber: '#H002',
        customer: 'Bob Wilson',
        phone: '+1 (555) 333-4444',
        items: 2,
        total: 24.50,
        heldAt: '10:45 AM',
        heldBy: 'Sarah (Cashier)',
        reason: 'Payment issue',
        itemsList: ['Medium Pizza', 'Fries']
    },
    {
        id: 'H003',
        orderNumber: '#H003',
        customer: 'Carol Davis',
        phone: '+1 (555) 555-6666',
        items: 6,
        total: 78.25,
        heldAt: '11:00 AM',
        heldBy: 'Mike (Cashier)',
        reason: 'Waiting for additional items',
        itemsList: ['2x Large Pizza', 'Wings', 'Salad', 'Drinks x2']
    },
];

export const HeldOrdersPage: React.FC = () => {
    const router = useRouter();
    const [selectedOrder, setSelectedOrder] = useState<typeof mockHeldOrders[0] | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredOrders = mockHeldOrders.filter(order =>
        order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.phone.includes(searchQuery)
    );

    const handleResumeOrder = (_order: typeof mockHeldOrders[0]) => {
        // Load order into cart and navigate to menu
        router.push('/pos/menu');
    };

    const handleDeleteOrder = (_orderId: string) => {
        if (confirm('Are you sure you want to delete this held order?')) {
            // Delete logic here
            alert('Order deleted');
        }
    };

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
                        <Pause size={28} color="#1E3A8A" />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'white', marginBottom: '4px' }}>
                            Held Orders
                        </h1>
                        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                            {mockHeldOrders.length} orders on hold
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => router.push('/pos/dashboard')}
                    className="pos-btn pos-btn-secondary"
                >
                    Back to Dashboard
                </button>
            </div>

            <div className="pos-split-layout">
                {/* LEFT: Held Orders List */}
                <div className="pos-left-panel">
                    {/* Search */}
                    <div style={{ padding: '20px', borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.5)' }} />
                            <input
                                type="text"
                                placeholder="Search held orders..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pos-input"
                                style={{ paddingLeft: '48px' }}
                            />
                        </div>
                    </div>

                    {/* Orders List */}
                    <div style={{ flex: 1, overflow: 'auto', padding: '20px' }} className="pos-scroll">
                        {filteredOrders.length > 0 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {filteredOrders.map(order => (
                                    <button
                                        key={order.id}
                                        onClick={() => setSelectedOrder(order)}
                                        className="pos-card"
                                        style={{
                                            background: selectedOrder?.id === order.id ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                                            border: selectedOrder?.id === order.id ? '2px solid white' : '1px solid rgba(255, 255, 255, 0.15)',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            transition: 'all 0.15s'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                            <div>
                                                <div style={{ fontSize: '20px', fontWeight: 800, color: 'white', marginBottom: '4px' }}>
                                                    {order.orderNumber}
                                                </div>
                                                <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, marginBottom: '4px' }}>
                                                    {order.customer}
                                                </div>
                                                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                                                    {order.phone}
                                                </div>
                                            </div>
                                            <div className="pos-badge pos-badge-warning">
                                                ON HOLD
                                            </div>
                                        </div>

                                        <div style={{
                                            padding: '12px',
                                            background: 'rgba(0, 0, 0, 0.2)',
                                            borderRadius: '12px',
                                            marginBottom: '12px'
                                        }}>
                                            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600, marginBottom: '4px' }}>
                                                Reason: {order.reason}
                                            </div>
                                            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600 }}>
                                                By: {order.heldBy}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div>
                                                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                                                    {order.items} items
                                                </div>
                                                <div style={{ fontSize: '24px', fontWeight: 800, color: 'white' }}>
                                                    ${order.total.toFixed(2)}
                                                </div>
                                            </div>
                                            <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, textAlign: 'right' }}>
                                                <Clock size={14} style={{ display: 'inline', marginRight: '6px' }} />
                                                Held at {order.heldAt}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="pos-empty">
                                <Pause className="pos-empty-icon" />
                                <div className="pos-empty-text">No Held Orders</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT: Order Details */}
                <div className="pos-right-panel">
                    {selectedOrder ? (
                        <>
                            {/* Order Header */}
                            <div style={{ padding: '24px', borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ fontSize: '48px', fontWeight: 800, color: 'white', marginBottom: '8px', lineHeight: 1 }}>
                                        {selectedOrder.orderNumber}
                                    </div>
                                    <div className="pos-badge pos-badge-warning" style={{ fontSize: '13px', padding: '8px 16px' }}>
                                        ON HOLD SINCE {selectedOrder.heldAt}
                                    </div>
                                </div>

                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '16px',
                                    padding: '20px'
                                }}>
                                    <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Customer
                                    </div>
                                    <div style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
                                        {selectedOrder.customer}
                                    </div>
                                    <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 600 }}>
                                        {selectedOrder.phone}
                                    </div>
                                </div>
                            </div>

                            {/* Order Items */}
                            <div style={{ flex: 1, overflow: 'auto', padding: '24px' }} className="pos-scroll">
                                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Order Items ({selectedOrder.items})
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                                    {selectedOrder.itemsList.map((item, idx) => (
                                        <div key={idx} className="pos-card" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                            <div style={{ fontSize: '15px', fontWeight: 700, color: 'white' }}>
                                                {item}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{
                                    background: 'rgba(245, 158, 11, 0.2)',
                                    border: '2px solid #F59E0B',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    marginBottom: '24px'
                                }}>
                                    <div style={{ fontSize: '13px', color: '#FCD34D', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Hold Reason
                                    </div>
                                    <div style={{ fontSize: '16px', color: '#FCD34D', fontWeight: 600, marginBottom: '12px' }}>
                                        {selectedOrder.reason}
                                    </div>
                                    <div style={{ fontSize: '13px', color: 'rgba(252, 211, 77, 0.8)', fontWeight: 600 }}>
                                        Held by: {selectedOrder.heldBy}
                                    </div>
                                </div>

                                <div style={{
                                    background: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: '16px',
                                    padding: '20px'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            Total Amount
                                        </div>
                                        <div style={{ fontSize: '36px', fontWeight: 800, color: 'white', lineHeight: 1 }}>
                                            ${selectedOrder.total.toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div style={{ padding: '24px', borderTop: '2px solid rgba(255, 255, 255, 0.1)' }}>
                                <button
                                    onClick={() => handleResumeOrder(selectedOrder)}
                                    className="pos-btn pos-btn-primary"
                                    style={{ width: '100%', marginBottom: '12px', background: '#10B981', color: 'white' }}
                                >
                                    <Play size={20} />
                                    Resume Order
                                </button>
                                <button
                                    onClick={() => handleDeleteOrder(selectedOrder.id)}
                                    className="pos-btn pos-btn-secondary"
                                    style={{ width: '100%', background: 'rgba(239, 68, 68, 0.2)', border: '2px solid #EF4444', color: '#FCA5A5' }}
                                >
                                    <Trash2 size={20} />
                                    Delete Order
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="pos-empty" style={{ height: '100%' }}>
                            <Pause className="pos-empty-icon" />
                            <div className="pos-empty-text">Select a Held Order</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
