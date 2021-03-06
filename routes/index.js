const express = require('express');
const router = express.Router();
const matchSessionController = require('../controllers/matchSessionController');

router.get('/', matchSessionController.homePage);
router.get('/record', matchSessionController.record);
router.post('/record', matchSessionController.save);

module.exports = router;