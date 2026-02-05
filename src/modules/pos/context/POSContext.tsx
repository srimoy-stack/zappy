'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { POSType, OrderChannel, POSSession, POSContextType, POSStore } from '../types/pos';
import { mockPOSUsers, mockStores, VALID_STORE_PINS, VALID_CALL_CENTER_USERS } from '../mock/posData';
import { useRouter } from 'next/navigation';

const POSContext = createContext<POSContextType | undefined>(undefined);

export const POSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [session, setSession] = useState<POSSession | null>(null);
    const router = useRouter();

    // Persist session to localStorage
    useEffect(() => {
        const savedSession = localStorage.getItem('pos_session');
        if (savedSession) {
            try {
                setSession(JSON.parse(savedSession));
            } catch (e) {
                console.error('Failed to parse POS session', e);
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

    const login = async (type: POSType, credentials: { pin?: string; email?: string; password?: string }) => {
        // Mock authentication
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

        // Logic for store selection
        const accessibleStores = mockStores.filter(s => user.accessibleStores.includes(s.id));

        if (accessibleStores.length === 0) throw new Error('User has no assigned stores');

        const initialSession: POSSession = {
            user,
            posType: type,
            // If user only has ONE store, auto-assign it
            store: accessibleStores.length === 1 ? accessibleStores[0] : (null as any),
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

    const logout = () => {
        updateSession(null);
        router.push('/pos/login');
    };

    return (
        <POSContext.Provider value={{ session, login, setStore, setChannel, logout }}>
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
