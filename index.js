//top-level config
var express = require('express');
var mustache = require('mustache-express');
var port = 3000;

//app-level config
var app = express();
var pokemonsController = require('./controllers/pokemon_controller');

app.engine('html', mustache());
app.set('view engine', 'html');

//app-level routing
app.set('views', __dirname + '/views');


//route controllers
app.use('/pokemon', pokemonsController);

app.use('/', function(req, res){
  res.render('./index');
});

app.listen(port, function(){
    console.log('Express listening on localhost:' + port);
});