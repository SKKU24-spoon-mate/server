const User = require('../models/user.model');

// Get User Profile
exports.getProfile = async (req, res) => {
    try {
        const userId = req.params.user_id || req.body.id || req.user.id;// Use user_id if provided, otherwise use authenticated user's ID

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({
            status_message: user.status_message,
            age: user.age,
            nickname: user.nickname,
            profile_image: user.profile_image,
            favorite_food: user.favorite_food,
            average_spoons: user.average_spoons,
            total_mates: user.total_mates,
            reviews: user.reviews
        });
    } catch (error) {
        res.status(500).send(error.message);
    }


};


// Edit My Profile
exports.editProfile = async (req, res) => {
    try {
        const { userId, status_message, age, favorite_food } = req.body;

        // Validate input
        if (!userId || !status_message || !age || !favorite_food) {
            return res.status(400).json({ error: 'Missing required fields or invalid data' });
        }

        // Find the user to update
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update the user's profile
        user.status_message = status_message;
        user.age = age;
        user.favorite_food = favorite_food;

        // Save the updated user
        await user.save();

        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
