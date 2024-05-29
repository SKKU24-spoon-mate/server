const Match = require('../models/match.model');


exports.getMatchList = async(req, res) => {
    try{
        const time = new Date();
        await Match.aggregate([
            {
                $addFields: {
                    deadlineDate: {$add: ["createdAt", { $multiply: ["deadline", 60]}]}
                }
            },
            {
                $match: {
                    deadlineDate: {$gt: time}
                }
            }
        ]).exec((err, match_list) => {
            if(err) {
                res.status(500).json({message: "Internal server error"});
            }
            else {
                res.status(200).json(match_list);
            }
        })

    }catch(error) {
        res.status(404).json({message: "Invalid user name"});
    }
};

