const mongoose = require('mongoose');


const MatchListSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },

        menu: {
            type: String,
            required: true
        },
        
        deadline: {
            type: Number,
            required: true
        },

        isAge: {
            type: Boolean,
            required: true
        },

        age: {
            type: Number,
            required: true
        },

        comment: {
            type: String,
            required: true
        },

        sex: {
            type: String,
            required: true
        },

        distance: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const MatchList = mongoose.model('Match', MatchListSchema);

module.exports = MatchList;