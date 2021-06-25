const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

//public folders
app.use('/views', express.static('views'));
app.use('/styles', express.static('styles'));
app.use('/images', express.static('images'));
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs');
});

// Log requests to the console
app.use(function(request, response, next) {
    console.log('--------------------------', new Date().toLocaleTimeString());
    console.log(request.method, request.url);
    console.log('Body =', request.body);
    next();
  });




//_________________Error Handling___________________

// Handle undefined routes
app.use(function(request, response) {
    console.log('Responded with 404');
    response.status(404).end();
  });
  
  // Handle duplicate ID errors
  app.use(function(error, request, response, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
      console.log('Validation error: Duplicate ID');
      response.status(400).send('Duplicate ID');
    } else {
      next(error);
    }
  });
  
  // Handle cast errors
  app.use(function(error, request, response, next) {
    if (error.name === 'CastError') {
      console.log('Validation error:', error.message);
      const start = error.message.indexOf('path') + 6;
      const stop = error.message.length - 1;
      const field = error.message.substring(start, stop);
      response.status(400).send(`Invalid ${field}`);
    } else {
      next(error);
    }
  });
  
  // Handle validation errors
  app.use(function(error, request, response, next) {
    if (error.name === 'ValidationError') {
      const messages = [];
      for (const field in error.errors) {
        console.log('Validation error:', error.errors[field].message);
        messages.push(error.errors[field].message);
      }
      response.status(400).send(messages.join('\n'));
    } else {
      next(error);
    }
  });
  
  
  // Handle other errors
  app.use(function(error, request, response) {
    console.error(error.stack);
    response.status(500).send(error.message);
  });


//________________Starting the server___________________
app.listen(5000, () => {
    console.log('App listening on port 5000!');
});