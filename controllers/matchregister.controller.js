const MatchRegister = require('../models/matchregister.model');


exports.AddMatchRegister = async(req, res) => {
    try{
        const new_match = await MatchRegister.create(req.body);
        res.status(200).json(new_match);

    }catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};

