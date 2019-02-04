var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var pokemonController = require('./controllers/pokemonController');
app.use('/pokemon', pokemonController);

app.use('/', function(req, res){
    res.render("./index");
}); 

 app.listen(port, function(){
   console.log(`This app works on ${port}`);
});

 // not complete 