const mongoose = require('mongoose');


const MatchRegisterSchema = mongoose.Schema(
    {
        nickname: {
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

const MatchRegister = mongoose.model('Match', MatchRegisterSchema);

module.exports = MatchRegister;