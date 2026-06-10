import express from 'express';
import { registerUser, loginUser, getUserProfile, updateUserStats, updateUserProfile, addHistory, getUserHistory, getLeaderboard, requestOTP, verifyOTP } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/request-otp', requestOTP);
router.post('/verify-otp', verifyOTP);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/stats', protect, updateUserStats);
router.post('/history', protect, addHistory);
router.get('/history', protect, getUserHistory);
router.get('/leaderboard', getLeaderboard);

export default router;
