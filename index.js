var express = require('express');
	var mustache = require('mustache-express');
	
	var app = express();
	var port = 3000;
	var wikiController = require('./controller/wiki_controller');
	
	app.engine('html', mustache());
	app.set('view engine', 'html');
	
	app.set('views', __dirname + '/views');
	
	app.get('/', function(request, response){
	  response.render('./index');
	})
	
	app.use('/pokemon', wikiController);
	
	app.listen(port, function() {
	  console.log(`App is listening on port ${port}`);
	}) 