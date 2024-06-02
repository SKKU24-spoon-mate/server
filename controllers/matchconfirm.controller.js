const MatchConfirm = require('../models/matchconfirm.model');


exports.MatchConfirm = async(req, res) => {
    try{
        const new_MatchConfirm = await MatchConfirm.create(req.body);
        res.redirect('/chat/id/'+req.body.userId);

    }catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};