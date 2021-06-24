const mongoose = require('mongoose');
const Pic = require('../models/pics');

module.exports.imagelists_renovations = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('galleries/renovations.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.imagelists_kitchens = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('galleries/kitchens.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.imagelists_baths = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('galleries/baths.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.imagelists_repair = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('galleries/repair.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.imagelists_cabinets = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('galleries/cabinets.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.imagelists_new = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('galleries/new.ejs', {pics: pics}))
    .catch(error => console.log(error));
};


module.exports.imagelists_outdoor = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('galleries/outdoor.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

//upload an image to mongoDB
module.exports.upload = function(req, res, next) {
  console.log(req.file);
  var picModel = new Pic({
    _id: new mongoose.Types.ObjectId(),
    file: req.file.filename,
    type: req.body.type,
    desc: req.body.desc
  });
  picModel.save();
  Pic.find().sort()
    .then(pics => {
      res.render('necc-tools.ejs');
      res.status(201).end();
    })
    .catch(error => next(error));
};

module.exports.findByType = function(cb) {
    return this.find({ type: type }, cb);
};
