import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole, Session } from '@/types';

interface AuthContextType extends Session {
    // Read-only role from session
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

/**
 * AuthProvider
 * Provides production-grade role-based context.
 * Role is read-only and derived from session.
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // In a real app, this would be fetched from /api/session
    const [session, setSession] = useState<Session>({
        user: null,
        isAuthenticated: false,
        isLoading: true,
    });

    useEffect(() => {
        // Simulate session fetch
        const fetchSession = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 500));

                // MOCK SESSION - Change this to test different roles
                // To change role in production, one would log in as a different user
                const mockUser: User = {
                    id: 'user-1',
                    name: 'John Doe',
                    role: 'ADMIN', // Test other roles: 'STORE_MANAGER', 'EMPLOYEE'
                    storeIds: ['store-01', 'store-02'],
                    tenantId: 'tenant-demo',
                    avatarUrl: undefined
                };

                setSession({
                    user: mockUser,
                    isAuthenticated: true,
                    isLoading: false
                });
            } catch (error) {
                setSession({
                    user: null,
                    isAuthenticated: false,
                    isLoading: false
                });
            }
        };

        fetchSession();
    }, []);

    const value: AuthContextType = {
        ...session,
        role: session.user?.role || null,
        tenantId: session.user?.tenantId || null,
        storeIds: session.user?.storeIds || [],
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
