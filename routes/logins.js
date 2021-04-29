var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', async function (req, res, next) {
  var logins = await models.Login.findAll();
  res.json({ logins: logins });
});

module.exports = router;