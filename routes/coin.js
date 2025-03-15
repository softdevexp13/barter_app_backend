const express = require('express');
const router = express.Router();

// Sadə in-memory coin balansı saxlanması (həqiqi tətbiqdə DB istifadə edin)
let userCoins = {}; // Məsələn: { "user1": 1000, "user2": 500 }

// GET /api/coin/balance?userId=...
router.get('/balance', (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    return res.status(400).json({ success: false, message: 'UserId tələb olunur' });
  }
  const balance = userCoins[userId] || 0;
  return res.json({ success: true, balance });
});

// POST /api/coin/update
// Body: { userId: "user1", amount: 50 }  => coin balansını artırır (müsbət) və ya azaldır (mənfi)
router.post('/update', (req, res) => {
  const { userId, amount } = req.body;
  if (!userId || amount === undefined) {
    return res.status(400).json({ success: false, message: 'UserId və amount tələb olunur' });
  }
  userCoins[userId] = (userCoins[userId] || 0) + amount;
  return res.json({ success: true, balance: userCoins[userId] });
});

module.exports = router;
