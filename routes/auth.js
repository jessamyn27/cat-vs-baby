var express = require('express');
var router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/', (req,res)=>{
  res.send('test')
})

module.exports = router;


