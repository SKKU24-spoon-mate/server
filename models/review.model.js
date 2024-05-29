const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        },

        rating: {
            type: Number,
            required: true
        }

    }
);

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;