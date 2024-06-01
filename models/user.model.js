const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true },
    sex: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    age: { type: Number, required: true }
}, {
    timestamps: true,
});

// We have to make it singular because mongoose will automatically look for the plural, lowercased version of our model name.
const User = mongoose.model('User', UserSchema);

module.exports = User;
