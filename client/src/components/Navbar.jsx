import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { Trophy, Flame, Coins, User as UserIcon, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { stats } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b-2 border-gray-200 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-2">
          <div className="bg-primary-500 p-2 rounded-lg">
            <Trophy className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black text-primary-500 tracking-tight">ENGLISH QUEST</span>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-1 font-bold text-orange-500">
                  <Flame className="w-5 h-5 fill-current" />
                  <span>{stats.streak}</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-yellow-500">
                  <Coins className="w-5 h-5 fill-current" />
                  <span>{stats.coins}</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-blue-500">
                  <div className="bg-blue-100 px-2 py-0.5 rounded text-sm uppercase">
                    {stats.level}
                  </div>
                </div>
                <Link to="/leaderboard" className="text-gray-400 hover:text-primary-500 transition-colors" title="Leaderboard">
                  <Trophy className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-center gap-4 border-l-2 border-gray-100 pl-6">
                <Link to="/profile" className="flex items-center gap-2 hover:bg-gray-50 p-1 rounded-lg transition-colors">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-primary-100">
                    {user.profilePicture ? (
                      <img src={user.profilePicture} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <span className="font-bold text-gray-700 hidden sm:block">{user.name}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="font-bold text-gray-500 hover:text-gray-700 uppercase text-sm">Log In</Link>
              <Link to="/register" className="btn-primary uppercase text-sm tracking-wider">Get Started</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
