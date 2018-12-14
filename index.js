var express = require('express');
var mustache = require('mustache-express');
var port = 3000;

var app = express();

// mustache set up
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//app.use('/static', express.static(__dirname + '/public'));


// import our controllers
app.get('/', function(req, res){
  res.render('./index');
})
var pokemonController = require('./controller/pokemonController');

//route controllers
app.use('/pokemon', pokemonController);

// start the server!
app.listen(port, function () {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});

