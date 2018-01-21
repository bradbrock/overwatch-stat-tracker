const express = require('express');
const router = express.Router();
const matchSessionController = require('../controllers/matchSessionController');

router.get('/', matchSessionController.homePage);
router.get('/record', matchSessionController.foo);

module.exports = router;