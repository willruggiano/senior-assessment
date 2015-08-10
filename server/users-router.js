var express = require('express');
var router = express.Router();
var User = require('./models/user-model');
module.exports = router;

router.get('/', function(req, res, next) {
  return User.find().exec()
    .then(function(users) {
      res.status(200).json(users)
    })
    .then(null, next)
})

router.put('/:id', function(req, res, next) {
  console.log(req.body)
  return User.findOneAndUpdate({ '_id': req.params.id }, req.body).exec()
    .then(function(user) {
      res.status(201).json(user)
    })
})
