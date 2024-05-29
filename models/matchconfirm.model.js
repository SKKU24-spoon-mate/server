const mongoose = require('mongoose');

const MatchConfirmSchema = mongoose.Schema(
    {
        userId: {
            type: Boolean,
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