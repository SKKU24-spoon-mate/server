const express = require('express');
const router = express.Router();
const controller = require('../controllers/appointment.controller');

router.post('/appointment', controller.addAppointment);

module.exports = router;