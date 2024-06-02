const mongoose = require('mongoose');

const MatchConfirmSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },

        reqUserId: {
            type: String,
            required: true
        },

        isConfirm: {
            type: Boolean,
            required: true
        }

    }
);

const MatchConfirm = mongoose.model('MatchConfirm', MatchConfirmSchema);

module.exports = MatchConfirm;