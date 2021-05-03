var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', async function(req, res, next) {
  var data = await models.Classified.findAll({
    include: [models.ClassifiedLevel2],
  })

  res.json({data: data})
});

module.exports = router;