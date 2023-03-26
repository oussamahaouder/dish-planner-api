const express = require('express');
const router = express.Router();
const userService = require('../domain/services/UserService');
const auth = require('../infrastructure/middleware/auth');

// Get the currently authenticated user
router.get('/users/me', auth, async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await userService.getUser(userId);
    res.json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update the currently authenticated user
router.patch('/users/me', auth, async (req, res) => {
  const userId = req.user.id;
  const updates = req.body;
  try {
    const user = await userService.updateUser(userId, updates);
    res.json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;