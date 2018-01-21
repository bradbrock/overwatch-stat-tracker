const express = require('express');
// const router = express.Router();
const session = require('express-session');
const mongoose = require('mongoose');
// const path = require('path');
const routes = require('./routes/index');

const app = express();

require('dotenv').config({ path: 'variables.env' });

app.get('/', function (req, res) {
  res.send('bar');
});


module.exports = app;