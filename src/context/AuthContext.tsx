import { createContext , useContext } from "react";

export interface User {
    email? : string;
    id? : string;
    name? : string;
    phoneNumber?: string;
    college?: string;
    course?: string;
    year?: string;
    // company?: string;  // change this company or something according to that
    profileImage?: string;
}

export interface AuthContextType {
    user : User | null;
    setUser : (user : User | null) => void;
    isAuthenticated : boolean;
    setIsAuthenticated : (isAuthenticated : boolean) => void;
    /** True when user has completed onboarding (has a student profile on the platform) */
    hasProfile : boolean;
    setHasProfile : (hasProfile : boolean) => void;
    /** True when user has paid and registered for the InternHunt event (session-only) */
    hasPurchased : boolean;
    setHasPurchased : (hasPurchased : boolean) => void;

    hasSelected : boolean;
    setHasSelected : (hasSelected : boolean)=> void;

    isLoading : boolean;
    logout : () => void;
    refetchUserData : () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}