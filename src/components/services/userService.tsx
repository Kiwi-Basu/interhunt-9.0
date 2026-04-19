import axios from 'axios';
import type { User } from '../../context/AuthContext';

/**
 * Verifies the authentication status of the current user
 * @param backendURL - The backend API URL
 * @returns Authentication response data or null if not authenticated
 */
export const verifyAuthStatus = async (backendURL: string) => {
    try {
        const response = await axios.get(`${backendURL}/api/auth/verifyAuthStatus`, {
            withCredentials: true,
        });

        // console.log("Verify auth response:", response.data);

        // ✅ Handle root level userInfo
        const userInfo = response.data?.data?.userInfo || response.data?.userInfo;
        
        if (response.status === 200 && userInfo) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error verifying auth status:', error);
        return null;
    }
};

/**
 * Fetches comprehensive user data including student profile
 * @param backendURL - The backend API URL
 * @returns User object with all profile data, or null if fetch fails
 */
export const fetchUserData = async (backendURL: string): Promise<User | null> => {
    try {
        const studentResponse = await axios.get(`${backendURL}/api/students`, {
            withCredentials: true,
        });

        // console.log("Student response:", studentResponse.data);

        // Handle both response structures
        const studentData = studentResponse.data?.data?.studentData || studentResponse.data?.studentData;
        
        if (studentResponse.status === 200 && studentData) {
            return {
                id: studentData._id || studentData.id,
                email: studentData.email,
                name: studentData.name,
                phoneNumber: studentData.phoneNumber,
                college: studentData.collageName || studentData.college,
                course: studentData.course,
                year: studentData.year,
                profileImage: studentData.profileImage
            };
        }

        return null;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};

/**
 * Fetches complete user authentication and profile data
 * @param backendURL - The backend API URL
 * @returns Object containing authentication status and user data
 */
export const fetchCompleteUserData = async (backendURL: string): Promise<{
    isAuthenticated: boolean;
    user: User | null;
}> => {
    // First, verify authentication
    const authData = await verifyAuthStatus(backendURL);

    // console.log("AuthData:", authData);

    // Handle both response structures
    const userInfo = authData?.data?.userInfo || authData?.userInfo;

    if (!authData || !userInfo) {
        return {
            isAuthenticated: false,
            user: null
        };
    }

    // Fetch full user data
    const userData = await fetchUserData(backendURL);

    if (userData) {
        return {
            isAuthenticated: true,
            user: userData
        };
    }

    // If user data fetch fails, return basic info from auth
    return {
        isAuthenticated: true,
        user: {
            id: userInfo.userId,
            email: userInfo.gmail || userInfo.email,
            name: userInfo.name || "",
        }
    };
};