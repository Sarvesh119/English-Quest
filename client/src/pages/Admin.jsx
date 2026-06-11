import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { PlusCircle, Upload, FileText, Database, Trash2, Edit } from 'lucide-react';

const Admin = () => {
  const { user } = useAuth();
  const [newWord, setNewWord] = useState({
    word: '',
    meaning: '',
    synonym: '',
    antonym: '',
    example: '',
    category: 'Daily Conversation',
    difficulty: 'Easy'
  });

  const categories = ['Business English', 'Daily Conversation', 'Interview Preparation', 'IELTS', 'TOEFL', 'Competitive Exams'];
  const difficulties = ['Easy', 'Medium', 'Hard'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://english-quest-fn74.onrender.com/api';
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      await axios.post(`${API_URL}/vocabulary`, newWord, config);
      toast.success('Word added successfully!');
      setNewWord({
        word: '',
        meaning: '',
        synonym: '',
        antonym: '',
        example: '',
        category: 'Daily Conversation',
        difficulty: 'Easy'
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add word');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 flex items-center gap-3">
          <Database className="text-primary-500" />
          Admin Control Center
        </h1>
        <p className="text-gray-600 font-medium">Manage vocabulary and application content</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form to add new word */}
        <div className="lg:col-span-2 card">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <PlusCircle className="text-green-500 w-5 h-5" />
            Add New Vocabulary
          </h3>
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase">Word</label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-primary-500 transition-all font-bold"
                value={newWord.word}
                onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase">Meaning</label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-primary-500 transition-all font-bold"
                value={newWord.meaning}
                onChange={(e) => setNewWord({ ...newWord, meaning: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase">Synonym</label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-primary-500 transition-all font-bold"
                value={newWord.synonym}
                onChange={(e) => setNewWord({ ...newWord, synonym: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase">Antonym</label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-primary-500 transition-all font-bold"
                value={newWord.antonym}
                onChange={(e) => setNewWord({ ...newWord, antonym: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2 space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase">Example Sentence</label>
              <textarea
                required
                rows="3"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-primary-500 transition-all font-bold"
                value={newWord.example}
                onChange={(e) => setNewWord({ ...newWord, example: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase">Category</label>
              <select
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-primary-500 transition-all font-bold cursor-pointer"
                value={newWord.category}
                onChange={(e) => setNewWord({ ...newWord, category: e.target.value })}
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-black text-gray-400 uppercase">Difficulty</label>
              <select
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-primary-500 transition-all font-bold cursor-pointer"
                value={newWord.difficulty}
                onChange={(e) => setNewWord({ ...newWord, difficulty: e.target.value })}
              >
                {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full btn-primary py-4 uppercase tracking-widest">
                Save to Database
              </button>
            </div>
          </form>
        </div>

        {/* Bulk Upload / Stats */}
        <div className="space-y-8">
          <div className="card">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Upload className="text-blue-500 w-5 h-5" />
              Bulk Import (CSV)
            </h3>
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-primary-500 transition-all cursor-pointer group">
              <FileText className="w-10 h-10 text-gray-300 mx-auto mb-4 group-hover:text-primary-500 transition-colors" />
              <p className="text-sm font-bold text-gray-500">Click to upload or drag & drop</p>
              <p className="text-[10px] text-gray-400 uppercase mt-2">Max file size: 5MB</p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50">
                <p className="text-2xl font-black text-gray-900">210</p>
                <p className="text-[10px] font-black text-gray-400 uppercase">Words</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
                <p className="text-2xl font-black text-gray-900">1.2k</p>
                <p className="text-[10px] font-black text-gray-400 uppercase">Users</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
                <p className="text-2xl font-black text-gray-900">450</p>
                <p className="text-[10px] font-black text-gray-400 uppercase">Quizzes</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
                <p className="text-2xl font-black text-gray-900">98%</p>
                <p className="text-[10px] font-black text-gray-400 uppercase">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
