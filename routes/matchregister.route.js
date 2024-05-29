const express = require('express');
const router = express.Router();
const controller = require('../controllers/matchregister.controller');

router.post('/match/register', controller.addMatchRegister);

module.exports = router;