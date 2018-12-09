var express = require('express');
var mustache = require('mustache-express');
var port = 3000;

var app = express();

var pokemonController = require('./controllers/pokemonsController');
app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

app.use('/pokemon',pokemonController);
app.get('/',function(req,res){
    res.render('./index');
})








app.listen(port,function(){

    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
})
