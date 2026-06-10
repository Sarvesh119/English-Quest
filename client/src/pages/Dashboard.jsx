import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { Book, PlayCircle, Trophy, TrendingUp, Clock, Target } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const { stats } = useApp();

  const categories = [
    { name: 'Daily Conversation', count: 45, icon: <Clock className="text-blue-500" /> },
    { name: 'Business English', count: 32, icon: <Target className="text-purple-500" /> },
    { name: 'IELTS/TOEFL', count: 58, icon: <Trophy className="text-yellow-500" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-3xl font-black text-gray-900">Welcome back, {user.name}! 👋</h1>
        <p className="text-gray-600 font-medium">Ready for your daily English quest?</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Actions */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Link to="/vocabulary" className="card group hover:border-primary-500 transition-all">
              <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Learn Vocabulary</h3>
              <p className="text-gray-600 text-sm">Explore 200+ curated words across different categories.</p>
            </Link>

            <Link to="/quiz" className="card group hover:border-orange-500 transition-all">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Take a Quiz</h3>
              <p className="text-gray-600 text-sm">Test your knowledge and earn XP and coins.</p>
            </Link>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="text-primary-500" />
              Recent Progress
            </h3>
            <div className="space-y-4">
              <ProgressItem label="Vocabulary Mastered" value={stats.wordsLearned || 12} total={200} color="bg-green-500" />
              <ProgressItem label="XP to next level" value={stats.xp % 100} total={100} color="bg-blue-500" />
            </div>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-8">
          <div className="card bg-gradient-to-br from-primary-500 to-primary-600 text-white border-none">
            <h3 className="text-lg font-bold mb-4 opacity-90">Daily Challenge</h3>
            <p className="text-2xl font-black mb-4">Complete 3 Quizzes</p>
            <div className="bg-white/20 rounded-full h-3 w-full mb-4">
              <div className="bg-white rounded-full h-3 w-1/3"></div>
            </div>
            <p className="text-sm font-bold opacity-80 text-right">1/3 Done</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold mb-4">Top Categories</h3>
            <div className="space-y-4">
              {categories.map((cat, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border-2 border-transparent hover:border-gray-200 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">{cat.icon}</div>
                    <span className="font-bold text-gray-700 text-sm">{cat.name}</span>
                  </div>
                  <span className="text-xs font-black text-gray-400">{cat.count} Words</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressItem = ({ label, value, total, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm font-bold">
      <span className="text-gray-600">{label}</span>
      <span className="text-gray-900">{value}/{total}</span>
    </div>
    <div className="bg-gray-100 rounded-full h-4 w-full overflow-hidden border-2 border-gray-200">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${(value / total) * 100}%` }}
        className={`h-full ${color} rounded-full`}
      />
    </div>
  </div>
);

export default Dashboard;
