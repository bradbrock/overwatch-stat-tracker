const mongoose = require('mongoose');
const SessionData = mongoose.model('MatchSession')

exports.homePage = (req, res) => {
    res.render('home');
}

exports.record = (req, res) => {
    res.render('record');
}

exports.save = async (req, res) => {
    const sessionData = new SessionData(req.body);
    // save to mongoDB
    await sessionData.save();

    // console.log(req.body);
    // res.json(req.body);
}