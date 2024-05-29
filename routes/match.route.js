const express = require('express');
const router = express.Router();
const controller = require('../controllers/match.controller');

router.get('/match/list', controller.getMatchList);

module.exports = router;