var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  models.Classified.findAll().then(data => {
    res.json({data: data})
  })
});

module.exports = router;