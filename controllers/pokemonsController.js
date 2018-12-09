var express = require('express');
var router = express.Router();

var pokemon = require('../models/pokemons');

router.get('/', pokemon.getAll, function(req, res){
  mustacheVariables = {
    pokemon : res.locals.pokemon
  }
  res.render('./pokemon/index', mustacheVariables);
})

module.exports = router;