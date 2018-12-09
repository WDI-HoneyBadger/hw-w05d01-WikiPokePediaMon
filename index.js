var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;


app.use(express.static('public'));




app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
var pokemonController = require('./controllers/pokemonController');
app.get('/', function(req, res){
    res.render('./index');
})

app.use('/pokemon', pokemonController);



app.listen(port, function() {
    console.log(`App is listening on port ${port}`);
});
