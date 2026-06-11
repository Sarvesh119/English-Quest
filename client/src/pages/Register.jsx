import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Mail, User, Smartphone, Lock, ShieldCheck, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import NumericPad from '../components/NumericPad';

const Register = () => {
  const [step, setStep] = useState(1); // 1: Basic Info, 2: OTP, 3: Set PIN, 4: Confirm PIN
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
  });
  const [otp, setOtp] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { register, requestOTP, verifyOTP } = useAuth();
  const navigate = useNavigate();

  const handleInfoSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      return setError('Please provide your Name and Email Address');
    }
    
    setLoading(true);
    const result = await requestOTP(formData.email);
    if (result.success) {
      setStep(2);
      setError('');
      toast.success('Verification code sent to your email');
      console.log('Verification flow started. If you are in a test environment, you can use the bypass code: 123456');
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await verifyOTP(formData.email, otp);
    if (result.success) {
      setStep(3);
      setError('');
    } else {
      setError(result.message || 'Invalid OTP');
    }
    setLoading(false);
  };

  const handlePinAdd = (num) => {
    if (step === 3) {
      if (pin.length < 4) {
        const newPin = pin + num;
        setPin(newPin);
        if (newPin.length === 4) setStep(4);
      }
    } else if (step === 4) {
      if (confirmPin.length < 4) {
        const newConfirm = confirmPin + num;
        setConfirmPin(newConfirm);
        if (newConfirm.length === 4) {
          if (newConfirm === pin) {
            handleFinalRegister(newConfirm);
          } else {
            toast.error('PINs do not match');
            setConfirmPin('');
          }
        }
      }
    }
  };

  const handleFinalRegister = async (finalPin) => {
    setLoading(true);
    const result = await register({ ...formData, pin: finalPin });
    if (result.success) {
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } else {
      setError(result.message);
      toast.error(result.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-12 px-4 mb-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="card py-10 px-8"
      >
        <div className="text-center mb-8">
          <div className="bg-primary-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-100">
            <UserPlus className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Join the Quest</h1>
          <p className="text-gray-500 font-bold mt-2">
            {step === 1 ? 'Start your journey today' : 
             step === 2 ? 'Verify your identity' :
             step === 3 ? 'Set your security PIN' : 'Confirm your PIN'}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.form
              key="step1"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              onSubmit={handleInfoSubmit}
              className="space-y-5"
            >
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input-field pl-12"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="input-field pl-12"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Mobile Number (Optional)</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="input-field pl-12"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  />
                </div>
              </div>

              {error && <div className="text-red-500 text-xs font-bold bg-red-50 p-3 rounded-lg flex items-center gap-2"><AlertCircle className="w-4 h-4" />{error}</div>}

              <button disabled={loading} type="submit" className="btn-primary w-full py-4 flex justify-center items-center gap-2">
                {loading ? <Loader2 className="animate-spin" /> : 'GET OTP'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form
              key="step2"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              onSubmit={handleOtpSubmit}
              className="space-y-6"
            >
              <p className="text-center text-sm font-medium text-gray-600">Enter the 6-digit code sent to your email.</p>
              <input
                type="text"
                maxLength="6"
                placeholder="0 0 0 0 0 0"
                className="w-full text-center text-3xl font-black tracking-[1em] py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-primary-500"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                autoFocus
              />
              {error && <div className="text-red-500 text-xs font-bold bg-red-50 p-3 rounded-lg flex items-center gap-2"><AlertCircle className="w-4 h-4" />{error}</div>}
              <button type="submit" className="btn-primary w-full py-4">VERIFY OTP</button>
              <button onClick={() => setStep(1)} type="button" className="w-full text-gray-400 font-bold text-xs uppercase hover:text-primary-500 transition-colors">Change Details</button>
            </motion.form>
          )}

          {(step === 3 || step === 4) && (
            <motion.div
              key="pin-step"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="flex justify-center gap-4 mb-10">
                {[0, 1, 2, 3].map((i) => {
                  const currentPin = step === 3 ? pin : confirmPin;
                  return (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                        currentPin.length > i ? 'bg-primary-500 border-primary-500 scale-125' : 'bg-transparent border-gray-200'
                      }`}
                    />
                  );
                })}
              </div>

              {loading ? (
                <div className="h-64 flex items-center justify-center">
                  <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
                </div>
              ) : (
                <NumericPad
                  onNumberAdd={handlePinAdd}
                  onBackspace={() => step === 3 ? setPin(pin.slice(0, -1)) : setConfirmPin(confirmPin.slice(0, -1))}
                  onClear={() => step === 3 ? setPin('') : setConfirmPin('')}
                />
              )}

              <button
                onClick={() => { setStep(step === 4 ? 3 : 2); setPin(''); setConfirmPin(''); }}
                className="mt-8 text-gray-400 font-bold text-sm uppercase hover:text-primary-500 transition-colors"
              >
                Go Back
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center mt-10 text-gray-500 font-medium">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-500 font-black uppercase text-sm hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
