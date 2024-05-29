const mongoose = require('mongoose');

const MatchNoticeSchema = mongoose.Schema(
    {
        userImage: {
            type: String,
            required: true
        },

        userId: {
            type: Boolean,
            required: true
        }

    }
);

const MatchNotice = mongoose.model('MatchNotice', MatchNoticeSchema);

module.exports = MatchNotice;