import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppProvider } from './context/AppContext';
import { Toaster } from 'react-hot-toast';

// Components
import Navbar from './components/Navbar';

// Pages (to be created)
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Vocabulary from './pages/Vocabulary';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Leaderboard from './pages/Leaderboard';
import LockScreen from './components/LockScreen';

const PrivateRoute = ({ children }) => {
  const { user, isLocked } = useAuth();
  
  if (!user) return <Navigate to="/" />;
  
  return (
    <div className={isLocked ? 'blur-md pointer-events-none transition-all duration-500' : 'transition-all duration-500'}>
      {children}
    </div>
  );
};

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  return user && user.role === 'admin' ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <LockScreen />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route path="/dashboard" element={
                  <PrivateRoute><Dashboard /></PrivateRoute>
                } />
                <Route path="/vocabulary" element={
                  <PrivateRoute><Vocabulary /></PrivateRoute>
                } />
                <Route path="/quiz" element={
                  <PrivateRoute><Quiz /></PrivateRoute>
                } />
                <Route path="/profile" element={
                  <PrivateRoute><Profile /></PrivateRoute>
                } />
                <Route path="/leaderboard" element={
                  <PrivateRoute><Leaderboard /></PrivateRoute>
                } />
                
                <Route path="/admin" element={
                  <AdminRoute><Admin /></AdminRoute>
                } />
              </Routes>
            </main>
            <Toaster position="bottom-right" />
          </div>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
