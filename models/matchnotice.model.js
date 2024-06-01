const mongoose = require('mongoose');

const MatchNoticeSchema = mongoose.Schema(
    {
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

    }
);

const MatchNotice = mongoose.model('MatchNotice', MatchNoticeSchema);

module.exports = MatchNotice;