const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');

// Get My Profile
router.get('/my', profileController.getMyProfile);

module.exports = router;
