var express = require('express');
var router = express.Router();

var pokemons = require('../models/pokemons');

router.get('/', pokemons.getAll, function(req, res){
  mustacheVariables = {
    pokemon: res.locals.pokemon
  }

  res.render('./pokemon/index', mustacheVariables);
})

module.exports = router;