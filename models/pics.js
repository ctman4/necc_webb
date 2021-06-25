//File for Pics Schema

const mongoose = require('mongoose');

//define the schema
const Pic = new mongoose.Schema({
  _id: String,
  file: String,
  type: String,
  desc: String,
});

//Export the module
module.exports = mongoose.model('Pic', Pic);
