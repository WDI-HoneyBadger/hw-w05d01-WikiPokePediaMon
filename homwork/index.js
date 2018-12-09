var express = require('express');
var mustache = require('mustache-express');

var app = express();
var port = 3001;
var pokiController = require('./controllers/poke_controller');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('./index');
})

app.use('/pokemon', pokiController);


app.listen(port, function() {
    console.log(`App is listening on port ${port}`);
});



