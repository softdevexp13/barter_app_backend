const express = require('express');
const router = express.Router();

// Nümunə quest məlumatları
let quests = [
  { id: 1, title: "Quest 1", description: "Bu questi yerinə yetirərək 50 coin qazan", reward: 50 },
  { id: 2, title: "Quest 2", description: "Bu questi yerinə yetirərək 100 coin qazan", reward: 100 }
];

// GET /api/quests - Bütün questləri qaytarır
router.get('/', (req, res) => {
  res.json({ success: true, quests });
});

// POST /api/quests - Yeni quest əlavə edir
router.post('/', (req, res) => {
  const { title, description, reward } = req.body;
  const newQuest = { id: quests.length + 1, title, description, reward };
  quests.push(newQuest);
  res.json({ success: true, message: "Quest əlavə olundu", quest: newQuest });
});

// POST /api/quests/complete - Questi tamamlayır və mükafatı qaytarır
router.post('/complete', (req, res) => {
    const { questId } = req.body;
    // Quest ID əsasında quest tapılır (nümunə üçün statik array istifadə olunur)
    const quest = quests.find(q => q.id === questId);
    if (!quest) {
      return res.status(404).json({ success: false, message: "Quest tapılmadı" });
    }
    // Burada quest tamamlanması və coin mükafatının hesablanması mexanizmi əlavə oluna bilər.
    // Nümunə olaraq, questin reward dəyəri qaytarılır:
    res.json({ success: true, reward: quest.reward });
  });
  

module.exports = router;
