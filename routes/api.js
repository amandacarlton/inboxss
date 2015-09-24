var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/inbox');
var Messages = db.get('messages');
/* GET home page. */
router.get('/messages', function(req, res, next) {
Messages.find({}).then(function (response) {
console.log(response);
res.json(response);
});
});

router.post('/starred', function (req, res, next) {
Messages.update({_id: req.body._id}, {$set: {starred:!req.body.starred}}).then(function () {
  Messages.find({}).then(function (response) {
  res.json(response);
  });
 });
});

router.post('/read', function (req, res, next) {
  console.log(req.body._id);
Messages.update({_id: req.body._id}, {$set: {read:req.body.read}});
});

router.post('/delete', function (req, res, next) {
  console.log(req.body._id);
Messages.remove({_id: req.body._id});
});

router.post('/labels', function (req, res, next) {
  console.log(req.body._id);
Messages.update({_id: req.body._id}, {$set:{filters:req.body.filters}});
});

module.exports = router;
