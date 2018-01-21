const express = require('express');
const router = express.Router();
// const matchSessionController = require('../controllers/matchSessionController');

router.get('/', (req, res) => {
    // const foo = {
    //     name: 'Brad',
    //     age: 34,
    //     cool: true
    // };
    // res.send("A route!");
    res.render('layout');
});

router.get('/foo', (req, res) => {
    res.send("A second route!");
});

module.exports = router;