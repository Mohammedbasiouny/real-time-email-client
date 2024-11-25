const express = require('express');
const { sendEmail, getInbox } = require('../controllers/emailController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/send', authMiddleware, sendEmail);
router.get('/inbox', authMiddleware, getInbox);

module.exports = router;
