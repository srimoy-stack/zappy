'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, Package, CheckCircle2, AlertCircle, Search, Eye, Printer, RefreshCw } from 'lucide-react';
import '../styles/pos-rush.css';

const mockOpenOrders = [
    {
        id: 'O001',
        orderNumber: '#1001',
        customer: 'John Doe',
        phone: '+1 (555) 123-4567',
        fulfillmentType: 'DINE_IN',
        tableNumber: '12',
        items: 3,
        total: 45.50,
        status: 'PREPARING',
        placedAt: '11:30 AM',
        estimatedReady: '11:45 AM',
        itemsList: ['Large Pizza', 'Garlic Bread', 'Coke'],
        payment: 'CARD'
    },
    {
        id: 'O002',
        orderNumber: '#1002',
        customer: 'Sarah Smith',
        phone: '+1 (555) 234-5678',
        fulfillmentType: 'TAKEAWAY',
        items: 2,
        total: 28.00,
        status: 'READY',
        placedAt: '11:35 AM',
        estimatedReady: '11:50 AM',
        itemsList: ['Medium Pizza', 'Fries'],
        payment: 'CASH'
    },
    {
        id: 'O003',
        orderNumber: '#1003',
        customer: 'Mike Johnson',
        phone: '+1 (555) 345-6789',
        fulfillmentType: 'DELIVERY',
        address: '123 Main St, New York',
        items: 5,
        total: 67.25,
        status: 'PREPARING',
        placedAt: '11:40 AM',
        estimatedReady: '12:00 PM',
        itemsList: ['2x Large Pizza', 'Wings', 'Salad', 'Drinks'],
        payment: 'CARD'
    },
    {
        id: 'O004',
        orderNumber: '#1004',
        customer: 'Emma Davis',
        phone: '+1 (555) 456-7890',
        fulfillmentType: 'DINE_IN',
        tableNumber: '8',
        items: 4,
        total: 52.75,
        status: 'COMPLETED',
        placedAt: '11:20 AM',
        estimatedReady: '11:35 AM',
        completedAt: '11:38 AM',
        itemsList: ['Large Pizza', 'Pasta', 'Salad', 'Wine'],
        payment: 'CARD'
    },
];

export const OpenOrdersPage: React.FC = () => {
    const router = useRouter();
    const [selectedOrder, setSelectedOrder] = useState<typeof mockOpenOrders[0] | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<'ALL' | 'PREPARING' | 'READY' | 'COMPLETED'>('ALL');

    const filteredOrders = mockOpenOrders.filter(order => {
        const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.phone.includes(searchQuery);
        const matchesStatus = filterStatus === 'ALL' || order.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'PREPARING':
                return { bg: 'rgba(245, 158, 11, 0.2)', border: '#F59E0B', text: '#FCD34D' };
            case 'READY':
                return { bg: 'rgba(16, 185, 129, 0.2)', border: '#10B981', text: '#6EE7B7' };
            case 'COMPLETED':
                return { bg: 'rgba(59, 130, 246, 0.2)', border: '#3B82F6', text: '#93C5FD' };
            default:
                return { bg: 'rgba(255, 255, 255, 0.1)', border: 'rgba(255, 255, 255, 0.2)', text: 'white' };
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'PREPARING':
                return Clock;
            case 'READY':
                return Package;
            case 'COMPLETED':
                return CheckCircle2;
            default:
                return AlertCircle;
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
                        <Clock size={28} color="#1E3A8A" />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'white', marginBottom: '4px' }}>
                            Open Orders
                        </h1>
                        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                            {mockOpenOrders.length} active orders
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="pos-btn pos-btn-secondary">
                        <RefreshCw size={20} />
                        Refresh
                    </button>
                    <button
                        onClick={() => router.push('/pos/dashboard')}
                        className="pos-btn pos-btn-secondary"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>

            <div className="pos-split-layout">
                {/* LEFT: Orders List */}
                <div className="pos-left-panel">
                    {/* Search & Filter */}
                    <div style={{ padding: '20px', borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                        <div style={{ position: 'relative', marginBottom: '16px' }}>
                            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.5)' }} />
                            <input
                                type="text"
                                placeholder="Search orders..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pos-input"
                                style={{ paddingLeft: '48px' }}
                            />
                        </div>

                        {/* Status Filter */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                            {['ALL', 'PREPARING', 'READY', 'COMPLETED'].map(status => (
                                <button
                                    key={status}
                                    onClick={() => setFilterStatus(status as any)}
                                    style={{
                                        padding: '10px',
                                        borderRadius: '10px',
                                        border: 'none',
                                        background: filterStatus === status ? 'white' : 'rgba(255, 255, 255, 0.1)',
                                        color: filterStatus === status ? '#1E3A8A' : 'white',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        cursor: 'pointer',
                                        transition: 'all 0.15s'
                                    }}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Orders List */}
                    <div style={{ flex: 1, overflow: 'auto', padding: '20px' }} className="pos-scroll">
                        {filteredOrders.length > 0 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {filteredOrders.map(order => {
                                    const statusColor = getStatusColor(order.status);
                                    const StatusIcon = getStatusIcon(order.status);

                                    return (
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
                                                        {order.fulfillmentType} {order.tableNumber && `• Table ${order.tableNumber}`}
                                                    </div>
                                                </div>
                                                <div style={{
                                                    padding: '8px 12px',
                                                    background: statusColor.bg,
                                                    border: `2px solid ${statusColor.border}`,
                                                    borderRadius: '10px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                }}>
                                                    <StatusIcon size={14} color={statusColor.text} />
                                                    <span style={{ fontSize: '11px', fontWeight: 700, color: statusColor.text, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                        {order.status}
                                                    </span>
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
                                                    <div>Placed: {order.placedAt}</div>
                                                    <div>Ready: {order.estimatedReady}</div>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="pos-empty">
                                <Clock className="pos-empty-icon" />
                                <div className="pos-empty-text">No Orders Found</div>
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
                                    <div style={{ fontSize: '48px', fontWeight: 800, color: 'white', marginBottom: '12px', lineHeight: 1 }}>
                                        {selectedOrder.orderNumber}
                                    </div>
                                    {(() => {
                                        const statusColor = getStatusColor(selectedOrder.status);
                                        const StatusIcon = getStatusIcon(selectedOrder.status);
                                        return (
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                padding: '12px 20px',
                                                background: statusColor.bg,
                                                border: `2px solid ${statusColor.border}`,
                                                borderRadius: '12px'
                                            }}>
                                                <StatusIcon size={20} color={statusColor.text} />
                                                <span style={{ fontSize: '14px', fontWeight: 700, color: statusColor.text, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                    {selectedOrder.status}
                                                </span>
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Customer & Fulfillment Info */}
                                <div className="pos-grid-2" style={{ gap: '16px' }}>
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '16px',
                                        padding: '16px'
                                    }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            Customer
                                        </div>
                                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>
                                            {selectedOrder.customer}
                                        </div>
                                        <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 600 }}>
                                            {selectedOrder.phone}
                                        </div>
                                    </div>

                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '16px',
                                        padding: '16px'
                                    }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            Fulfillment
                                        </div>
                                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>
                                            {selectedOrder.fulfillmentType}
                                        </div>
                                        <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 600 }}>
                                            {selectedOrder.tableNumber ? `Table ${selectedOrder.tableNumber}` : selectedOrder.address || 'Pickup'}
                                        </div>
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

                                {/* Timeline */}
                                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Timeline
                                </h3>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    marginBottom: '24px'
                                }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 700, marginBottom: '4px' }}>
                                            Placed At
                                        </div>
                                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'white' }}>
                                            {selectedOrder.placedAt}
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: selectedOrder.completedAt ? '16px' : 0 }}>
                                        <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 700, marginBottom: '4px' }}>
                                            Estimated Ready
                                        </div>
                                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'white' }}>
                                            {selectedOrder.estimatedReady}
                                        </div>
                                    </div>
                                    {selectedOrder.completedAt && (
                                        <div>
                                            <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 700, marginBottom: '4px' }}>
                                                Completed At
                                            </div>
                                            <div style={{ fontSize: '16px', fontWeight: 700, color: '#10B981' }}>
                                                {selectedOrder.completedAt}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Total */}
                                <div style={{
                                    background: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: '16px',
                                    padding: '20px'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 700 }}>
                                            Payment Method
                                        </div>
                                        <div style={{ fontSize: '14px', fontWeight: 700, color: 'white' }}>
                                            {selectedOrder.payment}
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '16px', borderTop: '2px solid rgba(255, 255, 255, 0.1)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                Total
                                            </div>
                                            <div style={{ fontSize: '36px', fontWeight: 800, color: 'white', lineHeight: 1 }}>
                                                ${selectedOrder.total.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div style={{ padding: '24px', borderTop: '2px solid rgba(255, 255, 255, 0.1)' }}>
                                <div className="pos-grid-2" style={{ gap: '12px' }}>
                                    <button className="pos-btn pos-btn-secondary">
                                        <Eye size={20} />
                                        View Details
                                    </button>
                                    <button className="pos-btn pos-btn-secondary">
                                        <Printer size={20} />
                                        Print Receipt
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="pos-empty" style={{ height: '100%' }}>
                            <Clock className="pos-empty-icon" />
                            <div className="pos-empty-text">Select an Order</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
