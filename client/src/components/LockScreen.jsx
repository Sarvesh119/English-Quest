import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import NumericPad from './NumericPad';
import { Lock, ShieldCheck, AlertCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';

const LockScreen = () => {
  const { isLocked, unlockSession, user, logout } = useAuth();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNumberAdd = (num) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 4) {
        handleUnlock(newPin);
      }
    }
  };

  const handleUnlock = async (finalPin) => {
    setLoading(true);
    const result = await unlockSession(finalPin);
    if (result.success) {
      setPin('');
      setError('');
      toast.success('Welcome back!');
    } else {
      setError('Incorrect PIN');
      setPin('');
      toast.error('Invalid PIN');
    }
    setLoading(false);
  };

  if (!isLocked) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <div className="max-w-md w-full px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-primary-500" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">App Locked</h1>
          <p className="text-gray-500 font-bold">Hello, {user?.name}. Please enter your 4-digit PIN to continue.</p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-10">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                pin.length > i ? 'bg-primary-500 border-primary-500 scale-125' : 'bg-transparent border-gray-200'
              }`}
            />
          ))}
        </div>

        {error && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-center gap-2 text-red-500 font-bold mb-6 text-sm"
          >
            <AlertCircle className="w-4 h-4" />
            {error}
          </motion.div>
        )}

        <NumericPad
          onNumberAdd={handleNumberAdd}
          onBackspace={() => setPin(pin.slice(0, -1))}
          onClear={() => setPin('')}
        />

        <button
          onClick={logout}
          className="mt-12 text-gray-400 font-black text-xs uppercase tracking-widest hover:text-red-500 transition-colors"
        >
          Logout & Exit
        </button>
      </div>
    </div>
  );
};

export default LockScreen;
