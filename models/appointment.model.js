const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema(
    {
        from: {
            type: String,
            required: true
        },

        target: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;