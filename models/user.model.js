const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},
    {
        timestamps: true,
    }
);

// We have to make it singular because mongoose will automatically look for the plural, lowercased version of our model name.
const User = mongoose.model('User', UserSchema);

module.exports = User;
