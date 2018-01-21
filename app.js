const express = require('express');
const router = express.Router();
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');
const sass = require('node-sass');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// router
app.use('/', routes);

sass.render({
  file: './scss/style.scss'
}, function(err, result) {
  console.log("Ran sass");
});

module.exports = app;