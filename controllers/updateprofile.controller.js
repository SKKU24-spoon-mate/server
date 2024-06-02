const Users = require('../models/users.model');
const Review = require('../models/review.model');

exports.getUserProfile = async(req, res) => {
    try {
        const userId = req.params.user_id;
        
        const user = await User.findOne({ 'id': userId });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

    
        const reviews = await Review.find({ 'userId': userId });

        const userProfile = {
            status_message: user.statusMessage,
            age: user.age,
            nickname: user.nickname,
            profile_image: user.profileImage,
            favorite_food: user.favoriteFood,
            average_spoons: user.averageSpoons,
            total_mates: user.totalMates,
            reviews: reviews.map(review => ({
                message: review.message,
                rating: review.rating
            }))
        };

        res.status(200).json(userProfile);

    } catch (error) {
        res.status(500).json({ message: "Error while fetching user profile" });
    }
};
