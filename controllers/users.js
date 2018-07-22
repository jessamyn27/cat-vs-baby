const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', (req, res, next) => {
  User.find({}, (err, foundUsers) => {
      res.render('users/users.ejs', {
        users: foundUsers
      });
  });

});


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
