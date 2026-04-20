import { useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import type { User } from './AuthContext';
import { fetchCompleteUserData } from '../components/services/userService';

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [hasProfile, setHasProfile] = useState(false);
    // hasPurchased is session-only — no backend field exists for it.
    // It is set to true only when payment polling resolves as 'completed'.
    const [hasPurchased, setHasPurchased] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    // Verify authentication status and fetch student data
    const checkAuthStatus = useCallback(async () => {
        try {
            const { isAuthenticated: authStatus, user: userData, hasPurchased: purchased } = await fetchCompleteUserData(backendURL);

            setIsAuthenticated(authStatus);
            setUser(userData);
            setHasProfile(!!(userData?.name));
            setHasPurchased(purchased);
        } catch (error) {
            console.error('Error verifying auth status:', error);
            setIsAuthenticated(false);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }, [backendURL]);

    // Refetch user data (exposed to components)
    const refetchUserData = useCallback(async () => {
        try {
            const { user: userData, hasPurchased: purchased } = await fetchCompleteUserData(backendURL);
            setUser(userData);
            setHasProfile(!!(userData?.name));
            setHasPurchased(purchased);
        } catch (error) {
            console.error('Error refetching user data:', error);
        }
    }, [backendURL]);

    // Logout function
    const logout = async () => {
        try {
            const axios = (await import('axios')).default;
            await axios.delete(`${backendURL}/api/auth/logout`, {
                withCredentials: true
            });
        } catch (error) {
            console.error('Error during logout:', error);
        } finally {
            setUser(null);
            setIsAuthenticated(false);
            setHasPurchased(false);
        }
    };

    // Check auth status on mount
    useEffect(() => {
        checkAuthStatus();
    }, [checkAuthStatus]);

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, hasProfile, setHasProfile, hasPurchased, setHasPurchased, isLoading, logout, refetchUserData }}>
            {children}
        </AuthContext.Provider>
    );
};
