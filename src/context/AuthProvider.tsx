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
    const [hasPurchased, setHasPurchased] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasSelected, setHasSelected] = useState(false);

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    // Refetch user data (exposed to components)w
    const refetchUserData = useCallback(async () => {
        try {
            const { user: userData, hasPurchased: purchased, hasSelected: selected } = await fetchCompleteUserData(backendURL);
            setUser(userData);
            setHasProfile(!!(userData?.name));
            setHasPurchased(purchased);
            setHasSelected(selected);
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
            setHasProfile(false);
            setHasSelected(false);
        }
    };

    // Check auth status on mount
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const { isAuthenticated: authStatus, user: userData, hasPurchased: purchased, hasSelected: selected } = await fetchCompleteUserData(backendURL);

                setIsAuthenticated(authStatus);
                setUser(userData);
                setHasProfile(!!(userData?.name));
                setHasPurchased(purchased);
                setHasSelected(selected)
            } catch (error) {
                console.error('Error verifying auth status:', error);
                setIsAuthenticated(false);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthStatus();
    }, [backendURL]);

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, hasProfile, setHasProfile, hasPurchased, setHasPurchased, isLoading, logout, refetchUserData, hasSelected, setHasSelected }}>
            {children}
        </AuthContext.Provider>
    );
};
