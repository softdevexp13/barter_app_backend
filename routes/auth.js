const express = require('express');
const router = express.Router();

// Sadə Asan Login endpointi
router.post('/', (req, res) => {
  const { idCard, token } = req.body;
  // Gələcəkdə Asan Login API inteqrasiyası burda olacaq.
  res.json({ success: true, message: "Asan Login uğurlu tamamlandı." });
});

module.exports = router;
