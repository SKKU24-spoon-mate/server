const express = require('express');
const router = express.Router();
const controller = require('../controllers/chat.controller');


router.get('/chat/user/:id', controller.getMessage);

router.post('/chat/user/:id/to/:to', controller.addMessage);

module.exports = router;