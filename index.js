var express = require('express');
var mustache = require('mustache-express');
var port = 3000;

var app = express();
var pokeController = require('./controllers/pokeController');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.listen(port, function(){
    console.log('App listening on port:' + port);
});

app.use('/pokemons', pokeController);

app.use('/', function(req, res){
  res.render('./homepage')
});