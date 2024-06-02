const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        statusMessage: {
            type: String,
            required: true,
            trim: true
        },
        age: {
            type: Number,
            required: true
        },
        nickname: {
            type: String,
            required: true,
            trim: true
        },
        profileImage: {
            type: String,
            required: true,
            trim: true
        },
        favoriteFood: {
            type: String,
            required: true,
            trim: true
        },
        averageSpoons: {
            type: Number,
            required: true,
            min: 0
        },
        totalMates: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
