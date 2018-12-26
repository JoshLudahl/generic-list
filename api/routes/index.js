const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {page: 'home'});
});

router.get('/about', (req, res, next) => {
    res.render('index', {page: 'about'});
});

module.exports = router;