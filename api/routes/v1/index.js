const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

// const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
// const teacher = require('./teacher.route');
// const paystack = require('./paystack.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => {
  console.log('status');
  res.send('OK');
});

router.use('/auth', authRoutes);

module.exports = router;
