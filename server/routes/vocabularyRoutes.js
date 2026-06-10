import express from 'express';
import { getVocabulary, getRandomVocabulary, addVocabulary } from '../controllers/vocabularyController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getVocabulary)
  .post(protect, admin, addVocabulary);

router.get('/random', getRandomVocabulary);

export default router;
