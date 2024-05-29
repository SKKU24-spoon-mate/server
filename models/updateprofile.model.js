const mongoose = require('mongoose');


const UpdateProfileSchema = mongoose.Schema(
    {
        nickname: {
            type: String,
            required: true
        },

        profile_image: {
            type: String,
            required: true
        },
        
        average_spoons: {
            type: Number,
            required: true
        },

        isAge: {
            type: Boolean,
            required: true
        },

        comment: {
            type: String,
            required: true
        },

        userId: {
            type: String,
            required: true
        },
        
        total_mates: {
            type: Number,
            required: true
        }

    },
    {
        timestamps: true
    }
);

const UpdateProfile = mongoose.model('Match', UpdateProfileSchema);

module.exports = UpdateProfile;