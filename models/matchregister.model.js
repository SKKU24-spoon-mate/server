const mongoose = require('mongoose');


const MatchRegisterSchema = new mongoose.Schema(
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

const MatchRegister = mongoose.model('MatchRegister', MatchRegisterSchema);

module.exports = MatchRegister;
