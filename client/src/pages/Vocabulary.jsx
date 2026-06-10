import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Volume2, ChevronRight, Loader2 } from 'lucide-react';

const Vocabulary = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchVocabulary = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://english-quest-kf0e.onrender.com/api';
      const { data } = await axios.get(`${API_URL}/vocabulary`);
      setWords(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching words:', error);
      setLoading(false);
    }
  };

  // Get dynamic categories from data
  const categories = ['All', ...new Set(words.map(w => w.category))];

  const filteredWords = words.filter(word => {
    const matchesSearch = word.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         word.meaning.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || word.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || word.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar - Categories */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-xs font-black text-gray-400 uppercase mb-4 tracking-widest pl-2">Categories</h3>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                    selectedCategory === cat 
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-100 scale-[1.02]' 
                    : 'text-gray-500 hover:bg-white hover:text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t-2 border-gray-100">
              <h3 className="text-xs font-black text-gray-400 uppercase mb-4 tracking-widest pl-2">Difficulty</h3>
              <div className="flex flex-wrap gap-2 px-2">
                {difficulties.map(diff => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-3 py-1 rounded-lg text-xs font-black uppercase border-2 transition-all ${
                      selectedDifficulty === diff 
                      ? 'border-primary-500 bg-primary-50 text-primary-600' 
                      : 'border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          <header className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">Vocabulary Bank</h1>
              <p className="text-gray-600 font-medium">
                {selectedCategory === 'All' ? 'All words' : selectedCategory} • {filteredWords.length} words
              </p>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search words..."
                className="bg-white border-2 border-gray-100 rounded-2xl py-3 pl-10 pr-4 outline-none focus:border-primary-500 w-full sm:w-64 shadow-sm focus:shadow-md transition-all font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </header>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredWords.map((word) => (
                  <WordCard key={word._id} word={word} />
                ))}
              </AnimatePresence>
            </div>
          )}

          {!loading && filteredWords.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-300" />
              </div>
              <p className="text-gray-500 font-bold text-xl">No words found matching your filters.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSelectedDifficulty('All'); setSearchTerm(''); }}
                className="mt-4 text-primary-500 font-black uppercase text-sm hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const FilterSelect = ({ options, value, onChange, label }) => (
  <select
    className="bg-white border-2 border-gray-200 rounded-xl px-4 py-2 text-sm font-bold text-gray-600 outline-none focus:border-primary-500 transition-all cursor-pointer"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map(opt => <option key={opt} value={opt}>{opt === 'All' ? label : opt}</option>)}
  </select>
);

const WordCard = ({ word }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const speak = (e) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for better clarity
    window.speechSynthesis.speak(utterance);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`card cursor-pointer group hover:border-primary-300 transition-all ${isExpanded ? 'ring-2 ring-primary-500' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-black text-gray-900 group-hover:text-primary-600 transition-colors uppercase tracking-tight">
            {word.word}
          </h3>
          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
            word.difficulty === 'Easy' ? 'bg-green-100 text-green-600' : 
            word.difficulty === 'Medium' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
          }`}>
            {word.difficulty}
          </span>
        </div>
        <button 
          onClick={speak}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors group/btn"
          title="Listen"
        >
          <Volume2 className="w-5 h-5 text-gray-400 group-hover/btn:text-primary-500" />
        </button>
      </div>

      <p className="text-gray-600 font-medium mb-4 line-clamp-2 italic">"{word.meaning}"</p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-400 font-bold">{word.category}</span>
        <ChevronRight className={`w-5 h-5 text-primary-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-6 pt-6 border-t-2 border-gray-100 space-y-4"
          >
            <div>
              <span className="text-xs font-black text-gray-400 uppercase">Synonym</span>
              <p className="font-bold text-gray-800">{word.synonym}</p>
            </div>
            <div>
              <span className="text-xs font-black text-gray-400 uppercase">Antonym</span>
              <p className="font-bold text-gray-800">{word.antonym}</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-xl">
              <span className="text-xs font-black text-primary-600 uppercase">Example Sentence</span>
              <p className="text-gray-700 font-medium italic mt-1 leading-relaxed">"{word.example}"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Vocabulary;
