const express = require('express');
const app = express();
var router = express.Router();

app.use('/', routes);

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Express'});
});

app.listen(5000, () => {
    console.log('App listening on port 5000!');
});