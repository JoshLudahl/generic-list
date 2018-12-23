const express = require('express');
const app = express();
const ejs = require('ejs');

//  Set views
app.set('view engine', 'ejs');
app.set('views', './view');

//  Index Controller
app.use('/', require('./routes/index'));

//  Login Controller
app.use('/list', require('./routes/list'));


//  Export for use
module.exports = app;