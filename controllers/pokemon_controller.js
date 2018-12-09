var express = require('express');
var router = express.Router();

var pokemon = require('../model/main');

router.get('/', pokemon.getAll, function(req, res){
    mustacheVariables = {
        pokemon: res.locals.pokemon
    }
  
    res.render('./pokemons/index', mustacheVariables);
  })
  

module.exports = router;