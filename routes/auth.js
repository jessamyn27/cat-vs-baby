var express = require('express');
var router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Login page 
router.get('/login', (req,res)=>{
  res.send('Login page')
});

// Register Page
router.get('/register', (req,res)=>{
  res.send('Reg page')
})

// Login Request 
router.post('/login', (req,res)=>{
  res.send('Req to sign in')
});

router.post('/register', (req,res)=>{
  res.send('Req to sign up');
})





module.exports = router;


