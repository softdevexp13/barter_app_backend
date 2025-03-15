const express = require('express');
const router = express.Router();

// Sadə in-memory istifadəçi profilləri (real tətbiqdə verilənlər bazası istifadə edin)
let users = {
  "user1": { id: "user1", firstName: "Əli", lastName: "Məmmədov", email: "ali@example.com", phone: "+994501234567" },
  // digər istifadəçilər...
};

// GET /api/profile?userId=...
router.get('/', (req, res) => {
  const userId = req.query.userId;
  if (!userId || !users[userId]) {
    return res.status(404).json({ success: false, message: "İstifadəçi tapılmadı" });
  }
  return res.json({ success: true, profile: users[userId] });
});

// POST /api/profile/update - Profil yeniləmə
router.post('/update', (req, res) => {
  const { userId, firstName, lastName, email, phone } = req.body;
  if (!userId || !users[userId]) {
    return res.status(404).json({ success: false, message: "İstifadəçi tapılmadı" });
  }
  // Sadə validasiya: burada əlavə yoxlamalar əlavə etmək olar
  users[userId] = { id: userId, firstName, lastName, email, phone };
  return res.json({ success: true, message: "Profil uğurla yeniləndi", profile: users[userId] });
});

module.exports = router;
