'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { UserRole } from '@/types';

interface AuthContextType {
    user: any | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    role: UserRole | null;
    tenantId: string | null;
    storeIds: string[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // TEMPORARY: Hardcoded session to bypass authentication without backend
    const value: AuthContextType = {
        user: {
            id: 'user-1',
            name: 'John Doe',
            email: 'admin@zyappy.com',
            role: 'ADMIN',
            tenantId: 'tenant-demo',
            storeIds: ['store-01', 'store-02']
        },
        isAuthenticated: true,
        isLoading: false,
        role: 'ADMIN',
        tenantId: 'tenant-demo',
        storeIds: ['store-01', 'store-02'],
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
