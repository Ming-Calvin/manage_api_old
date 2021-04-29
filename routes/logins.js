var express = require('express');
var router = express.Router();
var models = require('../models');
var Op = models.Sequelize.Op

router.get('/', async function (req, res, next) {
  // 搜索
  var where = {};

  // 查询用户名
  var username = req.query.username;
  if (username) {
    where.username = {
      [Op.like]: username
    }
  }

  var logins = await models.Login.findAll({
    where: where
  });

  res.json({ date: logins });
});

router.post('/', async function (req, res, next) {
  var register = await models.Login.create(req.body);
  res.json({ date: register});
});

module.exports = router;