var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var app = express();

var pokemonControllers = require('./controllers/pokemon_controller');

app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

app.listen(port, function(){
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
});

app.use('/pokemon', pokemonControllers);

app.use('/', function(req, res){
    res.render('./index2');
  });