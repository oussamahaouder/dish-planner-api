const express = require('express');
const router = express.Router();
const authService = require('../domain/services/AuthService');
const { validateRegister, validateLogin } = require('../infrastructure/middleware/validation');

// Create a new user account
router.post('/auth/register', validateRegister, async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const { user, token } = await authService.register(email, password, name);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Authenticate a user and generate a JWT token
router.post('/auth/login', validateLogin, async (req, res) => {
  const { email, password } = req.body;
  try {
    const { user, token } = await authService.login(email, password);
    res.json({ user, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;