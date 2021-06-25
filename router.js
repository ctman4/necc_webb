const multer = require('multer');
const express = require('express');
const pics = require('./controllers/pics');
//allow local stuff to reference env variables
const router = express.Router();

//define storage for the images
const storage = multer.diskStorage({
  //destination for files
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});


const upload = multer({
  storage: storage,
  limits: {
    fieldSize:1024*1024*3,
  }
});

// Handle home-page requests
router.get('/', function(request, response) {
  response.render(__dirname + '/views/index.ejs');
});



router.post('/upload', upload.single('upload'), pics.upload);

router.get('/renovations', pics.imagelists_renovations);

router.get('/kitchens', pics.imagelists_kitchens);

router.get('/baths', pics.imagelists_baths);

router.get('/repair', pics.imagelists_repair);

router.get('/cabinets', pics.imagelists_cabinets);

router.get('/new', pics.imagelists_new);

router.get('/outdoor', pics.imagelists_outdoor);

router.get('/contact', function(request, response) {
  response.render(__dirname + '/views/contact.ejs');
});

router.get('/about', function(request, response) {
  response.render(__dirname + '/views/about.ejs');
});

module.exports = router;
