const MatchNotice = require('../models/matchnotice.model');
const MatchRegister = require('../models/matchregister.model');
const Appointment = require('../models/appointment.model');

//WIP
exports.getMessage = async(req, res) => {
    try{


    }catch(error) {
        res.status(404).json({message: "Invalid user name"});
    }
};