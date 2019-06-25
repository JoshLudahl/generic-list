//import * as myModule from '/modules/my-module.js';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { page: 'home' });
});

router.get('/about', (req, res, next) => {
  res.render('index', { page: 'about' });
});

router.get('/li', (req, res, next) => {
  res.render('list', { page: 'home' });
});

router.get('/work', (req, res, next) => {
  res.render('work', { page: 'home' });
});

module.exports = router;
