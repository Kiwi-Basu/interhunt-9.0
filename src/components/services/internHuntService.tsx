// src/services/internHuntService.ts
import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: backendURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const internHuntService = {
  // Get user's own registration status
  getMyRegistration: async () => {
    try {
      const response = await api.get('/api/internhunt9/');
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        return { success: false, message: "Not registered", data: null };
      }
      throw error;
    }
  },

  // Register for InternHunt (starts payment flow)
  registerForHunt: async () => {
    const response = await api.post('/api/internhunt9/register', {
      registrationMode: "Website"
    });
    return response.data;
  },

  // Admin: Get all registrations
  getAllRegistrations: async () => {
    const response = await api.get('/api/internhunt9/registrations');
    return response.data;
  },

  // Admin: Register another user (offline)
  adminRegisterUser: async (userId: string) => {
    const response = await api.post('/api/internhunt9/', { userId });
    return response.data;
  },

  // Admin: Mark attendance
  markAttendance: async (userId: string) => {
    const response = await api.patch('/api/internhunt9/', { userId });
    return response.data;
  },
};