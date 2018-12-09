var express = require('express');
var mustache = require('mustache-express');
var port = 3000;

//app-level config
var app = express();
var pokemonsController = require('./controllers/pokemonsController');

app.engine('html', mustache());
app.set('view engine', 'html');

//app-level routing
app.set('views', __dirname + '/views');

//start app
app.listen(port, function(){
    // console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    // console.log('---------------------------------------');
});

//route controllers
app.use('/pokemon', pokemonsController); // maybe here

app.use('/', function(req, res){
  res.render("./index");
});