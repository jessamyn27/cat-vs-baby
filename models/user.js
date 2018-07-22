const mongoose = require('mongoose');
  
const userSchema = mongoose.Schema({
  userName = {type: String, required: true, unique: true},
  password = {type: String, required: true},
  photos = [Photos.Schema],
  profilePicture = String,
  bio = {type: String, maxlength: 150},
  socialMedia: [{twitter:String, facbook:String, intagram: String}]
})

module.exports = mongoose.model('User', userSchema);