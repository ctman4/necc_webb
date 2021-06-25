//file with function for connecting to the database
const mongoose = require('mongoose');

module.exports = function() {


  // Avoid warnings
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  // Start connecting
  mongoose.connect('mongodb+srv://yoda:lightsaber@cluster0.c6pkg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  console.log("Connected to database");

  // Log errors
  mongoose.connection.on('error', function(error) {
    console.error(error.stack);
  });
};
