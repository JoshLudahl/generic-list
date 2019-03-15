const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

//  Parse form data
app.use(bodyParser.urlencoded({ extended: false }));

//  Custom logging
const logger = require('./utils/logger');

//  Custom Logging
app.use(logger);

//  Security
app.use(helmet());

//  CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

//  Database Connection
//  Connect to MongoDB (You will need to provide a username, password, and url to the database.)
const connectionURL = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PW + process.env.MONGO_URI;
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on('error', error => console.log(error));
mongoose.Promise = global.Promise;

//  Static Files
app.use('/static', express.static(path.join(__dirname, 'static')))

//  Controllers
app.use(require('./api/controllers'));

module.exports = app;