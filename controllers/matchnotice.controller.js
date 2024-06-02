const MatchNotice = require('../models/matchnotice.model');

exports.getNotice = async(req, res) => {
    try{
        const userId = req.params.userId;
        
        const notice = await MatchNotice.find({ "targetUserId": userId });
        notice.sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
        });
        res.status(200).json(notice);

    }catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};