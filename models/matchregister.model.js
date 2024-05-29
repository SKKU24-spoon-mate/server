const mongoose = require('mongoose');


const MatchRegisterSchema = mongoose.Schema(
    {
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

        comment: {
            type: String,
            required: true
        },

        userId: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
);

const MatchRegister = mongoose.model('Match', MatchRegisterSchema);

module.exports = MatchRegister;
