var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/sagitta', function (req, res, next) {
  res.render('sagitta', { title: 'Sagitta' });
});

router.get('/media', function (req, res, next) {
  res.render('media', { title: 'Media' });
});

router.get('/careers', function (req, res, next) {
  res.render('careers', { title: 'Careers' });
});

router.get('/investor', function (req, res, next) {
  res.render('investor', { title: 'Investor' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
