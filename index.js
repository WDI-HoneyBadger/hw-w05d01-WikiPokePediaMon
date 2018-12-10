var express = require('express');
var mustache = require('mustache-express');
var port = 3000;

//app-level config
var app = express();
var controllerpokemon = require('./controllers/controllerpokemon');

app.engine('html', mustache());
app.set('view engine', 'html');

//app-level routing
app.set('views', __dirname + '/views');

//start app
app.listen(port, function(){
   
    console.log('Express listening on localhost:' + port);
    
});

app.use('/pokemones', controllerpokemon);

app.use('/', function(req, res){
  res.send('./index!')
});