const express = require('express');
const router = express.Router();
// const matchSessionController = require('../controllers/matchSessionController');

router.get('/', (req, res) => {
    res.send("foo");
});

module.exports = router;