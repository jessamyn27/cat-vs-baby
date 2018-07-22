const express = require('express');
const router = express.Router();
const Home = require('../models/home');
// const Photo = require('..models/photos');

router.get('/', (req, res) => {
  // User.find({}, (err, foundUsers) => {
      res.render('home/home.ejs', {
  //       users: foundUsers
  //     });
  });
});

// GET ROUTE
// /user/:id - Page displaying profile information (also our edit page)
router.get('/:id', (req, res) => {
  res.send('page displaying profile info / also our edit page')
});

// /home/index - main

// /home/leaderBoard - Global Leaderboard
router.get('/leaderBoard', (req, res) => {
  res.render('home/leaderBoard.ejs', {

  });
});
// /home/about - about page with description of rules
router.get('/about', (req, res) {
  res.render('home/about.ejs', {
    
  })
})
// / - Main splash page  - goes in server.js


module.exports = router;
