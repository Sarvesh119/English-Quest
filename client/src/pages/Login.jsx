import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Mail, ArrowRight, Smartphone, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import NumericPad from '../components/NumericPad';

const Login = () => {
  const [step, setStep] = useState(1); // 1: Identifier, 2: PIN
  const [identifier, setIdentifier] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleIdentifierSubmit = (e) => {
    e.preventDefault();
    if (!identifier) return setError('Please enter your Email or Mobile');
    setStep(2);
    setError('');
  };

  const handleNumberAdd = (num) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 4) {
        handleLogin(newPin);
      }
    }
  };

  const handleLogin = async (finalPin) => {
    setLoading(true);
    setError('');
    const result = await login(identifier, finalPin);
    if (result.success) {
      toast.success('Login successful!');
      navigate('/dashboard');
    } else {
      setError(result.message);
      setPin('');
      toast.error(result.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-20 px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="card py-10 px-8"
      >
        <div className="text-center mb-8">
          <div className="bg-primary-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-100">
            <ShieldCheck className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Security Login</h1>
          <p className="text-gray-500 font-bold mt-2">
            {step === 1 ? 'Welcome back! Please identify yourself.' : `Hello! Enter your PIN for ${identifier}`}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.form
              key="step1"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              onSubmit={handleIdentifierSubmit}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Email or Mobile</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter email or mobile"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary-500 transition-all font-bold"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-50 p-3 rounded-xl">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <button type="submit" className="btn-primary w-full py-4 flex justify-center items-center gap-2">
                CONTINUE
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="step2"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              className="flex flex-col items-center"
            >
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

              {loading ? (
                <div className="h-64 flex items-center justify-center">
                  <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
                </div>
              ) : (
                <NumericPad
                  onNumberAdd={handleNumberAdd}
                  onBackspace={() => setPin(pin.slice(0, -1))}
                  onClear={() => setPin('')}
                />
              )}

              <button
                onClick={() => setStep(1)}
                className="mt-8 text-gray-400 font-bold text-sm uppercase hover:text-primary-500 transition-colors"
              >
                Change Email/Mobile
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center mt-10 text-gray-500 font-medium">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-500 font-black uppercase text-sm hover:underline">
            Register Now
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
