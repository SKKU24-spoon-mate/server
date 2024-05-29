const Appointment = require('../models/appointment.model');
const MatchNotice = require('../models/matchnotice.model');
const User = require('../models/user.model');

exports.addAppointment = async(req, res) => {
    try{
        let appointment_info = req.body;
        const new_appointment = await Appointment.create(req.body);

        const user_info = await User.findOne({'id':appointment_info.from});
        let notice = {};

        notice.to = appointment_info.target;
        notice.userImage = user_info.userImage;
        notice.userId = user_info.id;

        await MatchNotice.create(notice);

        res.status(200).json(new_appointment);

    }catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};