const mongoose = require('mongoose');

const SexEnum = Object.freeze({
    Male: 'male',
    Female: 'female'
});

const UserSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true },
    sex: { type: String, required: true, enum: Object.values(SexEnum) },
    age: { type: Number, required: true }
}, {
    timestamps: true,
});

Object.assign(UserSchema.statics, { SexEnum });

const User = mongoose.model('User', UserSchema);

module.exports = User;
