const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema(
    {
        from: {
            type: String,
            required: true
        },

        to: {
            type: String,
            required: true
        },

        content: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
);

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;