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

// Tools image

module.exports.tools_imagelists_renovations = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('tools-galleries/renovations.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.tools_imagelists_kitchens = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('tools-galleries/kitchens.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.tools_imagelists_baths = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('tools-galleries/baths.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.tools_imagelists_cabinets = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('tools-galleries/cabinets.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.tools_imagelists_new = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('tools-galleries/new.ejs', {pics: pics}))
    .catch(error => console.log(error));
};


module.exports.tools_imagelists_outdoor = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('tools-galleries/outdoor.ejs', {pics: pics}))
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

module.exports.deleteImage = function(request, response, next) {
  Pic.findByIdAndRemove(request.params.id)
    .then(result => {
      if (!result) {
        return response.status(404).send('Image not found.');
      }
      console.log("Pic deleted");
      response.sendStatus(204);
    })
    .catch(error => {
      // Pass the error to the next middleware
      next(error);
    });
};