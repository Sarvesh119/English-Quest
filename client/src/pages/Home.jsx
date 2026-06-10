import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Award, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-gray-900 leading-tight"
          >
            The free, fun, and effective way to learn <span className="text-primary-500">English!</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-lg"
          >
            Master 200+ words with interactive quizzes, track your progress, and compete for the top spot on the leaderboard.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            {user ? (
              <Link to="/dashboard" className="btn-primary text-center py-4 px-8 text-lg">CONTINUE LEARNING</Link>
            ) : (
              <>
                <Link to="/register" className="btn-primary text-center py-4 px-8 text-lg">GET STARTED</Link>
                <Link to="/login" className="btn-secondary text-center py-4 px-8 text-lg uppercase font-black tracking-widest">I ALREADY HAVE AN ACCOUNT</Link>
              </>
            )}
          </motion.div>
        </div>
        <div className="flex-1 flex justify-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 10 }}
            className="relative"
          >
            <div className="w-64 h-64 bg-primary-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-32 h-32 text-primary-500" />
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 p-4 rounded-2xl rotate-12 shadow-lg">
              <Zap className="text-white w-8 h-8 fill-current" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em] mb-4">How it Works</h2>
            <h3 className="text-4xl font-black text-gray-900">Your Journey to Fluency</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <StepCard number="01" title="Create Account" description="Join our community of 10,000+ learners." />
            <StepCard number="02" title="Daily Quests" description="Take bite-sized quizzes to build habits." />
            <StepCard number="03" title="Earn Rewards" description="Collect coins and XP as you progress." />
            <StepCard number="04" title="Master English" description="Reach 'Expert' level and unlock rewards." />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<CheckCircle className="text-green-500 w-10 h-10" />}
            title="Effective Quizzes"
            description="Our smart engine focuses on Synonyms, Antonyms, and real-world usage to test your depth of knowledge."
          />
          <FeatureCard 
            icon={<Zap className="text-orange-500 w-10 h-10" />}
            title="XP & Streaks"
            description="Stay motivated with daily streaks. Miss a day, and your streak resets—just like the world's top language apps!"
          />
          <FeatureCard 
            icon={<Award className="text-yellow-500 w-10 h-10" />}
            title="Vocabulary Bank"
            description="Access 200+ hand-picked words categorized by difficulty, from Business English to TOEFL prep."
          />
        </div>
      </section>
    </div>
  );
};

const StepCard = ({ number, title, description }) => (
  <div className="text-center space-y-4">
    <div className="text-5xl font-black text-gray-200">{number}</div>
    <h4 className="text-xl font-bold text-gray-900">{title}</h4>
    <p className="text-gray-600 font-medium">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-all">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
