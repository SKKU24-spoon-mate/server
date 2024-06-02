const MatchRegister = require('../models/matchregister.model');
const Match = require('../models/match.model');
const User = require('../models/user.model')

exports.addMatchRegister = async(req, res) => {
    try{
        let reg_info = req.body;
        const new_match = await MatchRegister.create(req.body);
        const user_info = await User.findOne({'id': reg_info.userId});
        
        reg_info.objectId = user_info._id;
        reg_info.userId = reg_info.userId;
        reg_info.userName = user_info.nickname;
        reg_info.userImage = "testuserImageURL";
        reg_info.age = user_info.age;
        reg_info.sex = user_info.sex;
        reg_info.distance = 0;

        await Match.create(reg_info);

        const time = new Date();
        const matchList = await Match.aggregate([
            {
                $addFields: {
                    deadlineDate: { $add: ["$createdAt", { $multiply: ["$deadline", 60 * 1000] }] }
                }
            },
            {
                $match: {
                    deadlineDate: { $gt: time }
                }
            }
        ]);
        
        res.status(200).json(matchList);

    }catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};

