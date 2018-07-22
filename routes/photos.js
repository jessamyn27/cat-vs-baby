const express = require('express');

const router = express.Router();

const Photos = require('../models/photo');

router.get('/babies/showall', async(req,res,err)=>{
  // try {
  //   const allBabies = await Photos.find({babyPhotos: {$exists: true}});

  //   res.render('/photos/allBabies.ejs', {
  //     babyPhotos: allBabies
  //   })
  // } catch (err) {
  //   res.send(err);
  // }
  res.render('photos/allBabies.ejs')
});

router.get('/cats/showall', (req,res)=>{
  res.send('show all cats routes')
});

router.post('/', (req,res)=>{
  res.send('Post route for photos')
})

router.delete('/delete/:id', (req,res)=>{
  res.send('delete route')
})

module.exports = router;

