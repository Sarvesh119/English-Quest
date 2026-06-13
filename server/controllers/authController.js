import User from '../models/User.js';
import History from '../models/History.js';
import OTP from '../models/OTP.js';
import generateToken from '../utils/generateToken.js';
import sendEmail from '../utils/sendEmail.js';
import sendSMS from '../utils/sendSMS.js';


// @desc    Request OTP for registration/verification
// @route   POST /api/auth/request-otp
// @access  Public
const requestOTP = async (req, res) => {
  let { mobileNumber } = req.body;

  if (!mobileNumber) {
    return res.status(400).json({ message: 'Please provide a mobile number for verification' });
  }

  mobileNumber = mobileNumber.trim();

  try {
    // Generate 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log(`[OTP REQUEST] Starting OTP generation for ${mobileNumber}`);

    // 1. Store OTP FIRST in the database
    await OTP.findOneAndUpdate(
      { mobileNumber },
      { otp: generatedOtp, createdAt: new Date() },
      { upsert: true, new: true }
    );

    console.log(`[DATABASE] ✅ OTP for ${mobileNumber} saved: ${generatedOtp}`);

    // 2. Prepare SMS Content
    const message = `Your English Quest verification code is: ${generatedOtp}. It expires in 10 minutes.`;

    // 3. SEND SMS & Await result
    console.log(`[SMS] 📱 Attempting to send to ${mobileNumber}`);
    
    const smsResult = await sendSMS({
      mobileNumber,
      message
    });

    if (!smsResult.success) {
      console.error(`[SMS] ❌ FAILED for ${mobileNumber}:`, smsResult.error);
      res.status(500).json({ 
        success: false,
        message: 'Failed to send SMS OTP: ' + smsResult.error
      });
      return;
    }

    console.log(`[SMS] ✅ Successfully sent to ${mobileNumber}`, smsResult.messageId);

    // 4. Respond successfully
    res.json({ 
      success: true,
      message: 'OTP sent successfully to your mobile number'
    });

  } catch (error) {
    console.error('❌ requestOTP Error:', error);
    res.status(500).json({ message: 'Server error generating OTP' });
  }
};


// @desc    Verify OTP
// @route   POST /api/auth/verify-otp
// @access  Public
const verifyOTP = async (req, res) => {
  const { mobileNumber, otp } = req.body;

  // FAST BYPASS: Always allow 123456 for quick registration
  if (otp === '123456') {
    return res.json({ success: true, message: 'Verified' });
  }

  try {
    const otpRecord = await OTP.findOne({ mobileNumber, otp });

    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    // OTP is valid, delete it so it can't be used again
    await OTP.deleteOne({ _id: otpRecord._id });

    res.json({ success: true, message: 'OTP verified successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during OTP verification' });
  }
};


// @desc    Register a new user with PIN
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, mobileNumber, pin } = req.body;

  const query = { email };
  if (mobileNumber) {
    query.$or = [{ email }, { mobileNumber }];
  }

  const userExists = await User.findOne(mobileNumber ? { $or: [{ email }, { mobileNumber }] } : { email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({
    name,
    email,
    mobileNumber: mobileNumber || undefined,
    pin
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobileNumber: user.mobileNumber,
      role: user.role,
      token: generateToken(user._id)
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};


// @desc    Authenticate a user via PIN & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { identifier, pin } = req.body; // identifier can be email or mobile

  const user = await User.findOne({ 
    $or: [{ email: identifier }, { mobileNumber: identifier }] 
  }).select('+pin');

  if (user && (await user.matchPin(pin))) {
    // Update last login and check streak
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let diffDays = 0;
    if (user.lastLoginDate) {
      const lastLogin = new Date(user.lastLoginDate);
      lastLogin.setHours(0, 0, 0, 0);

      const diffTime = Math.abs(today - lastLogin);
      diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        user.streak += 1;
      } else if (diffDays > 1) {
        user.streak = 1;
      }
    } else {
      user.streak = 1;
    }

    user.lastLoginDate = Date.now();
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobileNumber: user.mobileNumber,
      profilePicture: user.profilePicture,
      role: user.role,
      xp: user.xp,
      level: user.level,
      streak: user.streak,
      coins: user.coins,
      token: generateToken(user._id)
    });
  } else {
    res.status(401).json({ message: 'Invalid identifier or PIN' });
  }
};


// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture,
      role: user.role,
      xp: user.xp,
      level: user.level,
      streak: user.streak,
      coins: user.coins,
      wordsLearned: user.wordsLearned,
      quizzesTaken: user.quizzesTaken
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};


// @desc    Update user stats (XP, coins, words learned, etc.)
// @route   PUT /api/auth/stats
// @access  Private
const updateUserStats = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { xp, coins, wordsLearned, quizzesTaken } = req.body;

    if (xp) user.xp += xp;
    if (coins) user.coins += coins;
    if (wordsLearned) user.wordsLearned += wordsLearned;
    if (quizzesTaken) user.quizzesTaken += quizzesTaken;

    // Simple level logic
    if (user.xp >= 1000) user.level = 'Expert';
    else if (user.xp >= 500) user.level = 'Advanced';
    else if (user.xp >= 200) user.level = 'Intermediate';
    else user.level = 'Beginner';

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      xp: updatedUser.xp,
      level: updatedUser.level,
      streak: updatedUser.streak,
      coins: updatedUser.coins,
      wordsLearned: updatedUser.wordsLearned,
      token: generateToken(updatedUser._id)
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};


// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.profilePicture = req.body.profilePicture !== undefined ? req.body.profilePicture : user.profilePicture;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      profilePicture: updatedUser.profilePicture,
      role: updatedUser.role,
      xp: updatedUser.xp,
      level: updatedUser.level,
      streak: updatedUser.streak,
      coins: updatedUser.coins,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};


// @desc    Add quiz history
// @route   POST /api/auth/history
// @access  Private
const addHistory = async (req, res) => {
  const { title, score, xp } = req.body;

  const history = await History.create({
    user: req.user._id,
    title,
    score,
    xp
  });

  if (history) {
    res.status(201).json(history);
  } else {
    res.status(400).json({ message: 'Invalid history data' });
  }
};


// @desc    Get user history
// @route   GET /api/auth/history
// @access  Private
const getUserHistory = async (req, res) => {
  const history = await History.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(history);
};


// @desc    Get leaderboard (top users by XP)
// @route   GET /api/auth/leaderboard
// @access  Public
const getLeaderboard = async (req, res) => {
  try {
    const topUsers = await User.find({})
      .select('name profilePicture xp level')
      .sort({ xp: -1 })
      .limit(10);
    res.json(topUsers);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching leaderboard' });
  }
};


export { registerUser, loginUser, getUserProfile, updateUserStats, updateUserProfile, addHistory, getUserHistory, getLeaderboard, requestOTP, verifyOTP };