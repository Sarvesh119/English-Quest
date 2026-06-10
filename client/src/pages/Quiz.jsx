import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, Trophy, ArrowRight, Loader2, Sparkles } from 'lucide-react';

import { useAuth } from '../context/AuthContext';

const Quiz = () => {
  const { updateUserStats, addHistory } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://localhost:5000/api/vocabulary/random?count=10');
      
      // Transform vocabulary into questions
      const formattedQuestions = data.map(word => {
        // Find valid question types (where answer is not N/A or None)
        const validTypes = [];
        if (word.meaning && !['N/A', 'None', 'none', 'n/a'].includes(word.meaning)) validTypes.push(0);
        if (word.synonym && !['N/A', 'None', 'none', 'n/a'].includes(word.synonym)) validTypes.push(1);
        if (word.antonym && !['N/A', 'None', 'none', 'n/a'].includes(word.antonym)) validTypes.push(2);

        // Default to Meaning if no valid types found (shouldn't happen with schema)
        const type = validTypes.length > 0 
          ? validTypes[Math.floor(Math.random() * validTypes.length)]
          : 0;

        let questionText = '';
        let correctAnswer = '';

        if (type === 0) {
          questionText = `What is the meaning of "${word.word}"?`;
          correctAnswer = word.meaning;
        } else if (type === 1) {
          questionText = `What is a synonym for "${word.word}"?`;
          correctAnswer = word.synonym;
        } else {
          questionText = `What is an antonym for "${word.word}"?`;
          correctAnswer = word.antonym;
        }

        // Generate distractors from other words, filtering out N/A and ensuring uniqueness
        const distractors = data
          .filter(w => w._id !== word._id)
          .map(w => type === 0 ? w.meaning : type === 1 ? w.synonym : w.antonym)
          .filter(val => val && !['N/A', 'None', 'none', 'n/a'].includes(val) && val !== correctAnswer);

        // Shuffle distractors and pick 3
        const uniqueDistractors = [...new Set(distractors)].sort(() => 0.5 - Math.random()).slice(0, 3);

        // Combine and shuffle using Fisher-Yates
        const options = [...uniqueDistractors, correctAnswer];
        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }

        return { word: word.word, questionText, correctAnswer, options, id: word._id };
      });

      setQuestions(formattedQuestions);
      setCurrentIndex(0);
      setScore(0);
      setShowResult(false);
      setSelectedOption(null);
      setIsCorrect(null);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to load quiz');
      setLoading(false);
    }
  };

  const handleOptionClick = (option) => {
    if (selectedOption) return;

    setSelectedOption(option);
    const correct = option === questions[currentIndex].correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
      toast.success('Correct!', { icon: '👏', duration: 1000 });
    } else {
      toast.error('Incorrect', { icon: '😢', duration: 1000 });
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
      
      // Save to history
      addHistory({
        title: 'Vocabulary Quest',
        score: `${score}/${questions.length}`,
        xp: `+${score * 10}`
      });

      // Update stats on backend
      updateUserStats({
        xp: score * 10,
        coins: score * 5,
        wordsLearned: score, // Assuming each correct answer means a word learned
        quizzesTaken: 1
      });

      if (score >= 7) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#58cc02', '#1cb0f6', '#ffc800']
        });
      }
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
      <p className="font-black text-gray-400 uppercase tracking-widest">Preparing Quest...</p>
    </div>
  );

  if (questions.length === 0) return (
    <div className="max-w-2xl mx-auto mt-20 px-4 text-center">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="card py-12"
      >
        <Sparkles className="w-16 h-16 mx-auto mb-6 text-gray-300" />
        <h2 className="text-3xl font-black text-gray-900 mb-4">No Questions Found</h2>
        <p className="text-gray-600 font-bold mb-8">
          It looks like the vocabulary database is empty. 
          Please make sure to run the seeder script (<code className="bg-gray-100 px-2 py-1 rounded">npm run data:import</code>) to add some words!
        </p>
        <button onClick={startNewQuiz} className="btn-primary px-10 py-4">RETRY</button>
      </motion.div>
    </div>
  );

  if (showResult) return (
    <div className="max-w-2xl mx-auto mt-20 px-4 text-center">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="card py-12"
      >
        <Trophy className={`w-24 h-24 mx-auto mb-6 ${score >= 7 ? 'text-yellow-500' : 'text-gray-300'}`} />
        <h2 className="text-4xl font-black text-gray-900 mb-2">Quest Completed!</h2>
        <p className="text-gray-600 font-bold text-xl mb-8">You scored {score} out of {questions.length}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-primary-50 p-4 rounded-2xl border-2 border-primary-100">
            <span className="text-primary-600 font-black text-2xl">+{score * 10}</span>
            <p className="text-primary-600 text-xs font-bold uppercase">XP Earned</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-2xl border-2 border-yellow-100">
            <span className="text-yellow-600 font-black text-2xl">+{score * 5}</span>
            <p className="text-yellow-600 text-xs font-bold uppercase">Coins Earned</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={startNewQuiz} className="btn-primary px-10 py-4">TRY AGAIN</button>
          <Link to="/leaderboard" className="btn-secondary px-10 py-4 uppercase">View Leaderboard</Link>
        </div>
      </motion.div>
    </div>
  );

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      {/* Progress Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-gray-200 h-4 flex-grow rounded-full overflow-hidden border-2 border-gray-100">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            className="h-full bg-primary-500"
          />
        </div>
        <span className="font-black text-gray-400">{currentIndex + 1}/{questions.length}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider border-2 border-blue-100">
              <Sparkles className="w-4 h-4" />
              Question Challenge
            </div>
            <h2 className="text-3xl font-black text-gray-800 leading-tight">
              {currentQuestion.questionText}
            </h2>
          </div>

          <div className="grid gap-4">
            {currentQuestion.options.map((option, i) => (
              <button
                key={i}
                disabled={selectedOption !== null}
                onClick={() => handleOptionClick(option)}
                className={`
                  w-full text-left p-6 rounded-2xl border-2 font-bold text-lg transition-all
                  ${selectedOption === option 
                    ? (isCorrect ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700') 
                    : (selectedOption !== null && option === currentQuestion.correctAnswer ? 'bg-green-100 border-green-500 text-green-700' : 'bg-white border-gray-200 hover:bg-gray-50 active:translate-y-1')
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {selectedOption === option && (
                    isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />
                  )}
                  {selectedOption !== null && option === currentQuestion.correctAnswer && option !== selectedOption && (
                    <CheckCircle2 className="w-6 h-6" />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="pt-6">
            <button
              disabled={selectedOption === null}
              onClick={nextQuestion}
              className={`
                w-full py-5 rounded-2xl font-black text-xl tracking-widest flex justify-center items-center gap-3 transition-all
                ${selectedOption === null ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'btn-primary'}
              `}
            >
              {currentIndex < questions.length - 1 ? 'CONTINUE' : 'FINISH'}
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
