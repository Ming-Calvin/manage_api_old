var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Menu.findAll().then(data => {
    res.json({data: data})
  })
});

module.exports = router;