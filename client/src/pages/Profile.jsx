import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { User as UserIcon, Settings, Award, History, TrendingUp, Save, X } from 'lucide-react';

const Profile = () => {
  const { user, updateUserProfile, getUserHistory } = useAuth();
  const { stats } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [editPic, setEditPic] = useState(user?.profilePicture || '');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getUserHistory();
      setHistory(data);
      setHistoryLoading(false);
    };
    fetchHistory();
  }, []);

  const avatars = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Midnight',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Casper',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Willow',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper',
  ];

  const handleUpdateProfile = async () => {
    setLoading(true);
    const result = await updateUserProfile({ name: editName, profilePicture: editPic });
    if (result.success) {
      setIsEditing(false);
    } else {
      alert(result.message);
    }
    setLoading(false);
  };

  const achievementsList = [
    { title: 'Early Bird', desc: 'Login for 5 days straight', icon: '🌅', color: 'bg-orange-100', met: (user.streak || 0) >= 5 },
    { title: 'Word Master', desc: 'Learn 50 words', icon: '📚', color: 'bg-blue-100', met: (user.wordsLearned || 0) >= 50 },
    { title: 'Quiz King', desc: 'Score 100% on 5 quizzes', icon: '👑', color: 'bg-yellow-100', met: (user.quizzesTaken || 0) >= 5 },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - User Info */}
        <div className="md:w-1/3 space-y-6">
          <div className="card text-center">
            <div className="relative group">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-primary-100 overflow-hidden">
                {user.profilePicture || editPic ? (
                  <img src={isEditing ? editPic : user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <UserIcon className="w-12 h-12 text-gray-400" />
                )}
              </div>
            </div>

            {isEditing && (
              <div className="mb-6">
                <p className="text-xs font-black text-gray-400 uppercase mb-3 tracking-widest">Select Avatar</p>
                <div className="grid grid-cols-3 gap-2 px-4">
                  {avatars.map((url, i) => (
                    <button
                      key={i}
                      onClick={() => setEditPic(url)}
                      className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${editPic === url ? 'border-primary-500 scale-110 shadow-lg' : 'border-transparent hover:border-gray-200'}`}
                    >
                      <img src={url} alt={`Avatar ${i}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
            {isEditing ? (
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full p-2 mb-2 border-2 border-primary-200 rounded-lg text-center font-bold"
                placeholder="Enter your name"
                autoFocus
              />
            ) : (
              <h2 className="text-2xl font-black text-gray-900 uppercase">{user.name}</h2>
            )}
            <p className="text-gray-500 font-bold mb-4">{user.email}</p>
            <div className="flex justify-center gap-2">
              <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-xs font-black uppercase">
                {stats.level}
              </span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-black uppercase">
                STUDENT
              </span>
            </div>
            
            <div className="flex gap-2 mt-6">
              {isEditing ? (
                <>
                  <button 
                    onClick={handleUpdateProfile}
                    disabled={loading}
                    className="flex-1 btn-primary py-2 flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    {loading ? 'Saving...' : 'Save'}
                  </button>
                  <button 
                    onClick={() => {
                      setIsEditing(false);
                      setEditName(user.name);
                      setEditPic(user.profilePicture || '');
                    }}
                    className="px-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="w-full btn-secondary py-2 flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="font-black text-gray-400 uppercase text-xs mb-4 tracking-widest">Statistics</h3>
            <div className="space-y-4">
              <StatItem label="Daily Streak" value={user.streak || 0} unit="Days" icon="🔥" />
              <StatItem label="Total XP" value={user.xp || 0} unit="XP" icon="✨" />
              <StatItem label="Words Learned" value={user.wordsLearned || 0} unit="Words" icon="📖" />
              <StatItem label="Quizzes Taken" value={user.quizzesTaken || 0} unit="Tests" icon="📝" />
            </div>
          </div>
        </div>

        {/* Right Column - Activity & Achievements */}
        <div className="md:w-2/3 space-y-8">
          <div className="card">
            <h3 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
              <Award className="text-yellow-500" />
              Achievements
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {achievementsList.map((ach, i) => (
                <div 
                  key={i} 
                  className={`text-center p-4 rounded-2xl bg-gray-50 border-2 transition-all group relative ${ach.met ? 'border-gray-100 hover:border-primary-200 cursor-help' : 'border-gray-100 opacity-60 grayscale'}`}
                >
                  {!ach.met && (
                    <div className="absolute top-2 right-2">
                      <Settings className="w-3 h-3 text-gray-400" />
                    </div>
                  )}
                  <div className={`w-16 h-16 ${ach.met ? ach.color : 'bg-gray-200'} rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                    {ach.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">{ach.title}</h4>
                  <p className="text-[10px] text-gray-500 font-bold leading-tight uppercase">
                    {ach.met ? ach.desc : 'Locked'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
              <History className="text-blue-500" />
              Learning History
            </h3>
            <div className="space-y-4">
              {historyLoading ? (
                <p className="text-center py-4 text-gray-400 font-bold uppercase text-xs tracking-widest">Loading History...</p>
              ) : history.length > 0 ? (
                history.map((item, index) => (
                  <HistoryItem 
                    key={index} 
                    title={item.title} 
                    date={new Date(item.createdAt).toLocaleDateString()} 
                    score={item.score} 
                    xp={item.xp} 
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-2">No History Yet</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Complete a quiz to see your progress!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ label, value, unit, icon }) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <span className="text-xl">{icon}</span>
      <span className="text-gray-600 font-bold">{label}</span>
    </div>
    <span className="font-black text-gray-900">{value} <span className="text-[10px] text-gray-400 uppercase">{unit}</span></span>
  </div>
);

const HistoryItem = ({ title, date, score, xp }) => (
  <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border-2 border-transparent hover:border-gray-100 transition-all">
    <div className="flex items-center gap-4">
      <div className="bg-white p-2 rounded-lg shadow-sm">
        <TrendingUp className="w-5 h-5 text-green-500" />
      </div>
      <div>
        <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
        <p className="text-xs text-gray-400 font-bold">{date}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-black text-gray-900">{score}</p>
      <p className="text-xs font-black text-primary-500">{xp} XP</p>
    </div>
  </div>
);

export default Profile;
