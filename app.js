const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const app = express();

require('dotenv').config({ path: 'variables.env' });

app.get('/', function (req, res) {
  res.send('FOO');
});


module.exports = app;