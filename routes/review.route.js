const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');

// Submit a review
router.post('/submit', reviewController.submitReview);

module.exports = router;
