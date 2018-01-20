const express = require('express');
const router = express.Router();
const matchSessionController = require('../controllers/matchSessionController');

router.get('/', homePage);

module.exports = router;