const express = require('express');
const app = express();
var router = express.Router();

app.set('view engine', 'ejs');

app.use('/', routes);

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs');
});

app.listen(5000, () => {
    console.log('App listening on port 5000!');
});