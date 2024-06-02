const MatchConfirm = require('../models/matchconfirm.model');


exports.MatchConfirm = async(req, res) => {
    try{
        const new_MatchConfirm = await MatchConfirm.create(req.body);
        res.status(200).json(new_MatchConfirm);

    }catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};