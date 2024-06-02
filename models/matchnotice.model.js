const mongoose = require('mongoose');

const MatchNoticeSchema = mongoose.Schema(
    {
        targetUserId: {
            type: String,
            required: true
        },

        reqUserImage: {
            type: String,
            required: true
        },

        reqUserId: {
            type: String,
            required: true
        },

        reqUserNickname: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
);

const MatchNotice = mongoose.model('MatchNotice', MatchNoticeSchema);

module.exports = MatchNotice;