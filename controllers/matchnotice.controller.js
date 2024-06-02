const MatchNotice = require('../models/matchnotice.model');
const MatchRegister = require('../models/matchregister.model');
const Appointment = require('../models/appointment.model');

exports.getNotice = async(req, res) => {
    try{
        const userId = req.params.userid;

        const notice = await MatchNotice.find({"targetUserId":userId}).sort((a,b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
        });
        
        res.status(200).json(notice);

    }catch(error) {
        res.status(404).json({message: "Invalid user name"});
    }
};