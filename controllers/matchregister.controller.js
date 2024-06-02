const MatchRegister = require('../models/matchregister.model');
const Match = require('../models/match.model');
const User = require('../models/user.model')

exports.addMatchRegister = async(req, res) => {
    try{
        let reg_info = req.body;
        const new_match = await MatchRegister.create(req.body);
        const user_info = await User.findOne({'id': reg_info.userId});
        
        reg_info.userImage = user_info.userImage;
        reg_info.age = user_info.age;
        reg_info.sex = user_info.sex;

        await Match.create(reg_info);

        res.status(200).json(reg_info);

    }catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};

