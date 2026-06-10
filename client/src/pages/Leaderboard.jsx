import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, User as UserIcon, Loader2 } from 'lucide-react';

const Leaderboard = () => {
  const { getLeaderboard, user } = useAuth();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const data = await getLeaderboard();
      setLeaderboard(data);
      setLoading(false);
    };
    fetchLeaderboard();
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
      <p className="font-black text-gray-400 uppercase tracking-widest">Loading Rankings...</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-3xl mb-6 shadow-lg shadow-yellow-100">
          <Trophy className="w-10 h-10 text-yellow-600" />
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-2">Hall of Fame</h1>
        <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Top 10 Vocabulary Masters</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-100">
                <th className="px-6 py-4 text-left text-xs font-black text-gray-400 uppercase tracking-widest">Rank</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-400 uppercase tracking-widest">Master</th>
                <th className="px-6 py-4 text-center text-xs font-black text-gray-400 uppercase tracking-widest">Level</th>
                <th className="px-6 py-4 text-right text-xs font-black text-gray-400 uppercase tracking-widest">Total XP</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-gray-100">
              {leaderboard.map((entry, index) => {
                const isCurrentUser = user && user._id === entry._id;
                const rank = index + 1;

                return (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={entry._id} 
                    className={`${isCurrentUser ? 'bg-primary-50' : 'hover:bg-gray-50'} transition-colors`}
                  >
                    <td className="px-6 py-6">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg font-black text-sm">
                        {rank === 1 ? <Crown className="w-6 h-6 text-yellow-500" /> :
                         rank === 2 ? <Medal className="w-6 h-6 text-gray-400" /> :
                         rank === 3 ? <Medal className="w-6 h-6 text-amber-600" /> :
                         <span className="text-gray-400">{rank}</span>}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-50 flex-shrink-0">
                          {entry.profilePicture ? (
                            <img src={entry.profilePicture} alt={entry.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-500 font-bold">
                              {entry.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className={`font-black uppercase tracking-tight ${isCurrentUser ? 'text-primary-600' : 'text-gray-900'}`}>
                            {entry.name}
                            {isCurrentUser && <span className="ml-2 text-[10px] bg-primary-500 text-white px-2 py-0.5 rounded-full">YOU</span>}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-black uppercase">
                        {entry.level}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span className="font-black text-xl text-gray-900">{entry.xp.toLocaleString()}</span>
                        <span className="text-[10px] font-black text-primary-500">XP</span>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
          Keep learning to climb the ranks! 🚀
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
