const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res, next) => {
  async function getWeather() {
    let weather = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&appid=e5b292ae2f9dae5f29e11499c2d82ece'
    );

    let weatherData = await weather.json();
    return weatherData;
  }

  const data = await getWeather();

  res.render('index', { page: 'home', weather: data });
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
