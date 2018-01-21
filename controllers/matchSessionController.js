const mongoose = require('mongoose');
const matchSession = mongoose.model('matchSession');

exports.homePage = (req, res) => {
    // console.log(req.name);
    res.render('index');
}