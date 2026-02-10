'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { POSType, OrderChannel, POSSession, POSContextType, POSStore, POSTable, POSCartItem } from '../types/pos';
import { POSCustomer, mockPOSUsers, mockStores, VALID_STORE_PINS, VALID_CALL_CENTER_USERS, mockPOSTables } from '../mock/posData';
import { useRouter } from 'next/navigation';

const POSContext = createContext<POSContextType | undefined>(undefined);

export const POSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [session, setSession] = useState<POSSession | null>(null);
    const [tables, setTables] = useState<POSTable[]>([]);
    const [cart, setCart] = useState<POSCartItem[]>([]);
    const [isOffline, setIsOffline] = useState(false);
    const [deviceId, setDeviceId] = useState('');
    const router = useRouter();

    // Check online status
    useEffect(() => {
        const updateStatus = () => setIsOffline(!navigator.onLine);
        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);
        updateStatus();
        return () => {
            window.removeEventListener('online', updateStatus);
            window.removeEventListener('offline', updateStatus);
        };
    }, []);

    // Get or generate Device ID and persist session to localStorage
    useEffect(() => {
        let savedDeviceId = localStorage.getItem('pos_device_id');
        if (!savedDeviceId) {
            savedDeviceId = `POS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
            localStorage.setItem('pos_device_id', savedDeviceId);
        }
        setDeviceId(savedDeviceId);

        const savedSession = localStorage.getItem('pos_session');
        const savedTables = localStorage.getItem('pos_tables');
        const savedCart = localStorage.getItem('pos_cart');

        if (savedSession) {
            try {
                setSession(JSON.parse(savedSession));
            } catch (e) {
                console.error('Failed to parse POS session', e);
            }
        }

        if (savedTables) {
            try {
                setTables(JSON.parse(savedTables));
            } catch (e) {
                console.error('Failed to parse POS tables', e);
            }
        } else {
            setTables(mockPOSTables as POSTable[]);
        }

        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to parse POS cart', e);
            }
        }
    }, []);

    const updateSession = useCallback((newSession: POSSession | null) => {
        setSession(newSession);
        if (newSession) {
            localStorage.setItem('pos_session', JSON.stringify(newSession));
        } else {
            localStorage.removeItem('pos_session');
        }
    }, []);

    const updateTables = useCallback((newTables: POSTable[]) => {
        setTables(newTables);
        localStorage.setItem('pos_tables', JSON.stringify(newTables));
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('pos_cart', JSON.stringify(cart));
        } else {
            localStorage.removeItem('pos_cart');
        }
    }, [cart]);

    const login = async (type: POSType, credentials: { pin?: string; email?: string; password?: string; deviceId: string }) => {
        // Offline logic
        if (!navigator.onLine) {
            const savedSessionStr = localStorage.getItem('pos_session');
            if (savedSessionStr) {
                const savedSession = JSON.parse(savedSessionStr);
                // Check if it's the same device and type
                if (type === 'STORE' && credentials.pin) {
                    const userId = VALID_STORE_PINS[credentials.pin];
                    if (userId === savedSession.user.id) {
                        setSession({ ...savedSession, isOffline: true });
                        return;
                    }
                }
            }
            throw new Error('Offline: No previous session found on this device');
        }

        // Online authentication
        let userId: string | undefined;

        if (type === 'STORE') {
            if (!credentials.pin) throw new Error('PIN is required');
            userId = VALID_STORE_PINS[credentials.pin];
        } else {
            if (!credentials.email || !credentials.password) throw new Error('Email and Password are required');
            const userAuth = VALID_CALL_CENTER_USERS[credentials.email];
            if (userAuth && userAuth.password === credentials.password) {
                userId = userAuth.userId;
            }
        }

        if (!userId) {
            throw new Error('Invalid credentials');
        }

        const user = mockPOSUsers.find(u => u.id === userId);
        if (!user) throw new Error('User not found');

        const accessibleStores = mockStores.filter(s => user.accessibleStores.includes(s.id));
        if (accessibleStores.length === 0) throw new Error('User has no assigned stores');

        const initialSession: POSSession = {
            user,
            posType: type,
            store: accessibleStores.length === 1 ? accessibleStores[0] : (null as any),
            deviceId: credentials.deviceId,
            isOffline: false
        };

        updateSession(initialSession);
    };

    const setStore = (store: POSStore) => {
        if (!session) return;
        updateSession({ ...session, store });
    };

    const setChannel = (channel: OrderChannel) => {
        if (!session) return;
        updateSession({ ...session, channel });
    };

    const setTable = (table: POSTable | null) => {
        if (!session) return;
        updateSession({ ...session, activeTable: table || undefined });

        if (table) {
            const updatedTables = tables.map(t =>
                t.id === table.id ? { ...t, status: 'OCCUPIED' as const, orderId: t.orderId || `ORD-${Math.floor(Math.random() * 9000) + 1000}` } : t
            );
            updateTables(updatedTables);
        }
    };

    const moveTable = (sourceTableId: string, targetTableId: string) => {
        if (!session) return;

        const sourceTable = tables.find(t => t.id === sourceTableId);
        if (!sourceTable) return;

        const updatedTables = tables.map(t => {
            if (t.id === sourceTableId) {
                return { ...t, status: 'FREE' as const, orderId: undefined };
            }
            if (t.id === targetTableId) {
                return { ...t, status: 'OCCUPIED' as const, orderId: sourceTable.orderId };
            }
            return t;
        });

        updateTables(updatedTables);

        if (session.activeTable?.id === sourceTableId) {
            const targetTable = updatedTables.find(t => t.id === targetTableId);
            updateSession({ ...session, activeTable: targetTable });
        }
    };

    const setCustomer = (customer: POSCustomer | null) => {
        if (!session) return;
        updateSession({ ...session, activeCustomer: customer || undefined });
    };

    const logout = () => {
        updateSession(null);
        router.push('/pos/login');
    };

    const addToCart = (product: any) => {
        setCart(prev => {
            const existing = prev.find(item => item.productId === product.id);
            if (existing) {
                return prev.map(item =>
                    item.productId === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, {
                id: Math.random().toString(36).substr(2, 9),
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                variants: [],
                modifiers: []
            }];
        });
    };

    const removeFromCart = (itemId: string) => {
        setCart(prev => prev.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
            return;
        }
        setCart(prev => prev.map(item => item.id === itemId ? { ...item, quantity } : item));
    };

    const updateCartItem = (itemId: string, updates: Partial<POSCartItem>) => {
        setCart(prev => prev.map(item => item.id === itemId ? { ...item, ...updates } : item));
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const [incomingCall, setIncomingCall] = useState<{ number: string; caller: string; location: string; customerId?: string } | null>(null);

    const updateCustomer = useCallback((customerId: string, data: Partial<POSCustomer>) => {
        if (session?.activeCustomer?.id === customerId) {
            updateSession({ ...session, activeCustomer: { ...session.activeCustomer, ...data } });
        }
    }, [session, updateSession]);

    const setDeliveryAddress = useCallback((address: { id: string; text: string; label: string } | null) => {
        if (!session) return;
        updateSession({ ...session, deliveryAddress: address || undefined });
    }, [session, updateSession]);

    return (
        <POSContext.Provider value={{
            session, isOffline, deviceId, login, setStore, setChannel, setTable, moveTable, setCustomer, logout,
            cart, setCart, addToCart, removeFromCart, updateQuantity, updateCartItem, clearCart, cartTotal,
            selectedCustomer: session?.activeCustomer,
            deliveryAddress: session?.deliveryAddress,
            setDeliveryAddress,
            incomingCall, setIncomingCall, updateCustomer
        }}>
            {children}
        </POSContext.Provider>
    );
};

export const usePOS = () => {
    const context = useContext(POSContext);
    if (!context) {
        throw new Error('usePOS must be used within a POSProvider');
    }
    return context;
};
