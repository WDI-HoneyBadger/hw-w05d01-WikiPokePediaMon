
var express = require('express');
	var router = express.Router();
	
	var pokemons = require('../modules/pokemon');
	
	// // routes
	
	router.get('/', pokemons.getAll, function(req, res){
	  var mustacheData ={
	    pokemons:res.locals.pokemon
	  } 
	  console.log(mustacheData)
	  res.render('./pokemon/index', mustacheData);
	})
	
	router.get('/:id', pokemons.byid, function(req, res){
	  var mustacheData ={
	    pokemons:res.locals.pokemon
	  } 
	  console.log(mustacheData)
	  res.render('./pokemon/show', mustacheData);
	})

	
	module.exports = router;
