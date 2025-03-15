const express = require('express');
const router = express.Router();

// Nümunə elanlar siyahısı üçün statik məlumat
let offers = [
  { id: 1, title: "Xidmət 1", description: "Ətraflı məlumat 1" },
  { id: 2, title: "Xidmət 2", description: "Ətraflı məlumat 2" }
];

// GET /api/offers - Elanların siyahısı
router.get('/', (req, res) => {
  res.json({ success: true, offers });
});

// POST /api/offers - Yeni elan əlavə et
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newOffer = { id: offers.length + 1, title, description };
  offers.push(newOffer);
  res.json({ success: true, message: "Elan əlavə olundu", offer: newOffer });
});

module.exports = router;
