import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    xp: user?.xp || 0,
    streak: user?.streak || 0,
    coins: user?.coins || 0,
    level: user?.level || 'Beginner'
  });

  useEffect(() => {
    if (user) {
      setStats({
        xp: user.xp,
        streak: user.streak,
        coins: user.coins,
        level: user.level
      });
    }
  }, [user]);

  const updateStats = (newStats) => {
    setStats(prev => ({ ...prev, ...newStats }));
  };

  return (
    <AppContext.Provider value={{ stats, updateStats }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
