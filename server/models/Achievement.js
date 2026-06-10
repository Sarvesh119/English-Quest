import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  badge: {
    type: String, // URL or Icon name
    required: true
  },
  requirementType: {
    type: String,
    enum: ['xp', 'streak', 'words', 'quiz'],
    required: true
  },
  requirementValue: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Achievement', achievementSchema);
