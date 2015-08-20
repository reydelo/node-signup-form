var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('<form method="post" action="/submit"><input name="email" type="email" required><input type="submit"></form>');
});

router.post('/submit', function(req, res) {
  // res.send(req.body.email);

    res.redirect('/success');
  }
);

router.get('/success', function(req, res) {
  res.send("Success!");
});

module.exports = router;
