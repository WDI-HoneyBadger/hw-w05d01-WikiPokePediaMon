var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var app = express();

var pokemon = require('./controllers/pokemon_controller.js');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//route controllers
app.use('/pokemon', pokemon);

app.use('/', function(req, res){
    res.render('./index');
});

//start app
app.listen(port, function(){
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
});