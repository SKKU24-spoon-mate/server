const express = require('express');
const router = express.Router();
const controller = require('../controllers/matchconfirm.controller');

router.post('/confirm', controller.MatchConfirm);

module.exports = router;