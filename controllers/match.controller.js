const Match = require('../models/match.model');


exports.getMatchList = async(req, res) => {
    try{
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

