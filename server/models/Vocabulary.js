import mongoose from 'mongoose';

const vocabularySchema = new mongoose.Schema({
  word: {
    type: String,
    required: [true, 'Please add a word'],
    trim: true,
    unique: true
  },
  meaning: {
    type: String,
    required: [true, 'Please add a meaning']
  },
  synonym: {
    type: String,
    required: [true, 'Please add a synonym']
  },
  antonym: {
    type: String,
    required: [true, 'Please add an antonym']
  },
  example: {
    type: String,
    required: [true, 'Please add an example sentence']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Business English', 'Daily Conversation', 'Interview Preparation', 'IELTS', 'TOEFL', 'Competitive Exams', 'Slang & Idioms', 'Academic English', 'Technology & IT']
  },
  difficulty: {
    type: String,
    required: [true, 'Please add difficulty'],
    enum: ['Easy', 'Medium', 'Hard']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Vocabulary', vocabularySchema);
