var express = require('express');
var mustache = require('mustache-express');

var app = express();
var port = 3000;
var pokemonController = require('./controller/pokimonController');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('./home');
})

app.use('/pokemon', pokemonController);


app.listen(port, function() {
    console.log(`App is listening on port ${port}`);
});