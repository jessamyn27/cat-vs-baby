const express = require('express');
const router = express.Router();
const User = require('../models/users');
// const Photo = require('..models/photos');

router.get('/', (req, res) => {
  // User.find({}, (err, foundUsers) => {
      res.render('users/users.ejs', {
  //       users: foundUsers
  //     });
  });
});

// GET ROUTE
// /user/:id - Page displaying profile information (also our edit page)
router.get('/:id', (req, res) => {
  res.send('page displaying profile info / also our edit page')
})

// PUT ROUTE
// /user/:id/update - (photos are not included in the update request , only profile information);


// DELETE ROUTE
// /user/delete/:id - Delete user account ( Removes all photos owned)





module.exports = router;
