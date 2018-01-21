const mongoose = require('mongoose');
const matchSession = mongoose.model('MatchSession');

exports.homePage = (req, res) => {
    // console.log(req.name);
    res.render('layout');
}