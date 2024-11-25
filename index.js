const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const emailRoutes = require('./routes/email');

const app = express();
const PORT = 3000;

app.use(express.json());

// تسجيل المسارات
app.use('/api/auth', authRoutes);
app.use('/api/emails', emailRoutes);

// بدء الخادم
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
})();
