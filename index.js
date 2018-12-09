

var express = require('express');
var mustache = require('mustache-express');
var port = 3000;


var app = express();
var pokemonController = require('./controllers/pokemonController');

app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/views');


app.listen(port,function(){
    console.log(`App is listening on ${port}`);
})

app.use('/pokemon', pokemonController);

app.use('/', function(req,res){
res.send('homepage!');
});