const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller.js');

// Get User Profile
router.get('/:user_id?', profileController.getProfile);

module.exports = router;
