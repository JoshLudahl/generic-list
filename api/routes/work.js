//import * as myModule from '/modules/my-module.js';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('work', { page: 'home' });
});

module.exports = router;
