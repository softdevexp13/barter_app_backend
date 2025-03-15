const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/auth');
const offersRoutes = require('./routes/offers');
const questsRoutes = require('./routes/quests'); // Yeni əlavə
const coinRoutes = require('./routes/coin');
const profileRoutes = require('./routes/profile');



app.use('/api/asan-login', authRoutes);
app.use('/api/offers', offersRoutes);
app.use('/api/quests', questsRoutes); // Yeni endpoint
app.use('/api/profile', profileRoutes);
// Əvvəlki route-lara əlavə olaraq:

app.use('/api/coin', coinRoutes);


app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda işləyir.`);
});
