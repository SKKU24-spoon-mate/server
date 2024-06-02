const User = require('../models/user.model');

// Submit a review
exports.submitReview = async (req, res) => {
    try {
        const { userId, message, rating } = req.body;

        // Validate input
        if (!userId || !message || !rating) {
            return res.status(400).json({ error: 'Missing required fields or invalid data' });
        }

        // Validate rating
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ error: 'Rating must be between 1 and 5' });
        }

        // Find the user to review
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Add the new review
        user.reviews.push({ message, rating });

        // Recalculate the average spoons
        const totalReviews = user.reviews.length;
        const totalRating = user.reviews.reduce((sum, review) => sum + review.rating, 0);
        user.average_spoons = totalRating / totalReviews;

        // Save the updated user
        await user.save();

        res.status(200).json({ message: 'Review submitted successfully', average_spoons: user.average_spoons });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
