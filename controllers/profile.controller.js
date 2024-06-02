const User = require('../models/user.model');

// Get User Profile
exports.getProfile = async (req, res) => {
    try {
        const userId = req.params.user_id || req.user.id; // Use user_id if provided, otherwise use authenticated user's ID

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
