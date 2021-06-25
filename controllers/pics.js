const mongoose = require('mongoose');
const Pic = require(__dirname + '../models/pics');

module.exports.imagelists_renovations = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('https://necoastalcontractors/views/galleries/renovations.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.imagelists_kitchens = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('https://necoastalcontractors/views/galleries/kitchens.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.imagelists_baths = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('https://necoastalcontractors/views/galleries/baths.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.imagelists_repair = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('https://necoastalcontractors/views/galleries/repair.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.imagelists_cabinets = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('https://necoastalcontractors/views/galleries/cabinets.ejs', {pics: pics}))
    .catch(error => console.log(error));
};

module.exports.imagelists_new = function(request, response, next) {
  Pic.find().sort()
    .then(pics => response.render('https://necoastalcontractors/views/galleries/new.ejs', {pics: pics}))
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
