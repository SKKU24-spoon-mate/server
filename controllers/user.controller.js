const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { id, pw, nickname, sex, age } = req.body;

        // Validate input
        if (!id || !pw || !nickname || !sex || !age) {
            return res.status(400).json({ error: 'Missing required fields or invalid data' });
        }

        // Validate sex
        if (!Object.values(User.SexEnum).includes(sex)) {
            return res.status(400).json({ error: 'Invalid sex value' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pw, salt);

        const newUser = new User({ id, password: hashedPassword, nickname, sex, age });
        await newUser.save();
        // Respond with all user registration values
        res.status(200).json({
            message: 'Registration successful',
            user: {
                id: newUser.id,
                pw: pw, // Note: For security reasons, it is generally not recommended to return passwords, even if hashed.
                nickname: newUser.nickname,
                sex: newUser.sex,
                age: newUser.age
            }
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.login = async (req, res) => {
    try {
        const { id, pw } = req.body;
        const user = await User.findOne({ id });

        if (user && await bcrypt.compare(pw, user.password)) {
            const token = jwt.sign({ userId: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' });
            res.status(200).json({
                message: 'Login successful',
                token,
                userId: user.id,
                userNickname: user.nickname,
                userAge: user.age,
                userSex: user.sex,
                _id: user._id
            });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
