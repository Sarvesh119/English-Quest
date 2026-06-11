import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

let raw_url = (import.meta.env.VITE_API_URL || 'https://english-quest-kf0e.onrender.com/api').trim();
// Remove trailing slash if present to normalize
raw_url = raw_url.replace(/\/+$/, '');
// Ensure it ends with /api
const API_BASE_URL = raw_url.endsWith('/api') ? raw_url : `${raw_url}/api`;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    console.log('--- AUTH SYSTEM INITIALIZED ---');
    console.log('Target API:', API_BASE_URL);
  }, []);
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')) || null);
  const [loading, setLoading] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [lastActive, setLastActive] = useState(Date.now());

  const TIMEOUT_DURATION = 5 * 60 * 1000; // 5 minutes
  const TAB_GRACE_PERIOD = 30 * 1000; // 30 seconds

  useEffect(() => {
    if (!user) return;

    // Inactivity check
    const inactivityInterval = setInterval(() => {
      if (Date.now() - lastActive > TIMEOUT_DURATION && !isLocked) {
        lockSession();
      }
    }, 10000);

    // Tab switch check
    let tabSwitchTimer;
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        tabSwitchTimer = setTimeout(() => {
          lockSession();
        }, TAB_GRACE_PERIOD);
      } else {
        clearTimeout(tabSwitchTimer);
      }
    };

    const handleActivity = () => {
      setLastActive(Date.now());
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);
    window.addEventListener('click', handleActivity);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(inactivityInterval);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
      window.removeEventListener('click', handleActivity);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(tabSwitchTimer);
    };
  }, [user, lastActive, isLocked]);

  const lockSession = () => {
    if (user) setIsLocked(true);
  };

  const unlockSession = async (pin) => {
    try {
      const identifier = user.email || user.mobileNumber;
      const { data } = await axios.post(`${API_BASE_URL}/auth/login`, { identifier, pin });
      if (data) {
        setIsLocked(false);
        setLastActive(Date.now());
        return { success: true };
      }
    } catch (error) {
      return { success: false, message: 'Invalid PIN' };
    }
  };

  const requestOTP = async (email) => {
    try {
      console.log(`Requesting OTP for ${email} at ${API_BASE_URL}/auth/request-otp`);
      const response = await axios.post(`${API_BASE_URL}/auth/request-otp`, { email });
      console.log('OTP Request Success:', response.data);
      return { success: true, message: response.data.message };
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to send OTP';
      console.error('OTP Request Error Detailed:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        url: error.config?.url
      });
      return { success: false, message: errorMessage };
    }
  };

  const verifyOTP = async (email, otp) => {
    try {
      console.log(`Verifying OTP for ${email}`);
      const response = await axios.post(`${API_BASE_URL}/auth/verify-otp`, { email, otp });
      console.log('OTP Verify Success:', response.data);
      return { success: true, message: response.data.message };
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Invalid OTP';
      console.error('OTP Verify Error:', error.response?.data || error.message);
      return { success: false, message: errorMessage };
    }
  };

  const login = async (identifier, pin) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${API_BASE_URL}/auth/login`, { identifier, pin });
      setUser(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      setIsLocked(false);
      setLastActive(Date.now());
      return { success: true };
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      setLoading(false);
      return { success: false, message: error.response?.data?.message || 'Login failed' };
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      console.log('Attempting final registration...');
      const { data } = await axios.post(`${API_BASE_URL}/auth/register`, userData);
      console.log('Registration Success:', data);
      setUser(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      setIsLocked(false);
      setLastActive(Date.now());
      return { success: true };
    } catch (error) {
      console.error('Registration Error Detailed:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      setLoading(false);
      return { success: false, message: error.response?.data?.message || 'Registration failed' };
    }
  };

  const logout = () => {
    setUser(null);
    setIsLocked(false);
    sessionStorage.removeItem('user');
  };

  const updateUserStats = async (stats) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const { data } = await axios.put(`${API_BASE_URL}/auth/stats`, stats, config);
      setUser(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Update failed' };
    }
  };

  const updateUserProfile = async (userData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const { data } = await axios.put(`${API_BASE_URL}/auth/profile`, userData, config);
      setUser(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Update failed' };
    }
  };

  const addHistory = async (historyData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      await axios.post(`${API_BASE_URL}/auth/history`, historyData, config);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Failed to save history' };
    }
  };

  const getUserHistory = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const { data } = await axios.get(`${API_BASE_URL}/auth/history`, config);
      return data;
    } catch (error) {
      console.error('Failed to fetch history', error);
      return [];
    }
  };

  const getLeaderboard = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/auth/leaderboard`);
      return data;
    } catch (error) {
      console.error('Failed to fetch leaderboard', error);
      return [];
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUserStats, updateUserProfile, addHistory, getUserHistory, getLeaderboard, loading, isLocked, unlockSession, requestOTP, verifyOTP }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
