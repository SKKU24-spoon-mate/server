const express = require('express');
const router = express.Router();
const controller = require('../controllers/matchnotice.controller');

router.get('/confirm/user/:userid', controller.getNotice);

module.exports = router;