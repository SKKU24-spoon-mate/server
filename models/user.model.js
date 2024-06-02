const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    message: { type: String, required: true },
    rating: { type: Number, required: true }
}, {
    timestamps: true,
});

const UserSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true },
    sex: { type: String, required: true, enum: ['male', 'female'] },
    age: { type: Number, required: true },
    status_message: { type: String, default: '' },
    favorite_food: { type: String, default: '' },
    profile_image: { type: String, default: '' },
    mbti: { type: String, default: '' },
    average_spoons: { type: Number, default: 0 },
    total_mates: { type: Number, default: 0 },
    reviews: [ReviewSchema]
}, {
    timestamps: true,
});

Object.assign(UserSchema.statics, {
    SexEnum: {
        Male: 'male',
        Female: 'female'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
