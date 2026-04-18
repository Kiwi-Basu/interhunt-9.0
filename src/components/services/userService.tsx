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

        if (response.status === 200 && response.data.userInfo) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error verifying auth status:', error);
        return null;
    }
};

/**
 * Fetches comprehensive user data including student profile and committee information
 * @param backendURL - The backend API URL
 * @returns User object with all profile and committee data, or null if fetch fails
 */
export const fetchUserData = async (backendURL: string): Promise<User | null> => {
    try {
        const [studentResponse, committeeResponse] = await Promise.all([
            axios.get(`${backendURL}/api/students`, {
                withCredentials: true,
            }),
            axios.get(`${backendURL}/api/umung4`, {
                withCredentials: true,
            })
        ]);

        if (studentResponse.status === 200 && studentResponse.data.studentData) {
            const student = studentResponse.data.studentData;

            // Get committee name from umung4 API if registered
            const committeeName = committeeResponse.data?.registered
                ? committeeResponse.data.committeeName
                : undefined;

            return {
                id: student._id || student.id,
                email: student.email,
                name: student.name,
                phoneNumber: student.phoneNumber,
                college: student.college || student.collageName,
                course: student.course,
                year: student.year,
                // committee: committeeName,
                profileImage: student.profileImage
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

    if (!authData || !authData.userInfo) {
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
            id: authData.userInfo.userId,
            email: authData.userInfo.email
        }
    };
};