import Vocabulary from '../models/Vocabulary.js';

// @desc    Get all vocabulary
// @route   GET /api/vocabulary
// @access  Public
const getVocabulary = async (req, res) => {
  try {
    const { category, difficulty } = req.query;
    let query = {};
    
    if (category) query.category = category;
    if (difficulty) query.difficulty = difficulty;

    const vocabulary = await Vocabulary.find(query);
    res.json(vocabulary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get random vocabulary for quiz
// @route   GET /api/vocabulary/random
// @access  Public
const getRandomVocabulary = async (req, res) => {
  try {
    const count = parseInt(req.query.count) || 10;
    const vocabulary = await Vocabulary.aggregate([{ $sample: { size: count } }]);
    res.json(vocabulary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add new vocabulary
// @route   POST /api/vocabulary
// @access  Private/Admin
const addVocabulary = async (req, res) => {
  try {
    const vocabulary = await Vocabulary.create(req.body);
    res.status(201).json(vocabulary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getVocabulary, getRandomVocabulary, addVocabulary };
