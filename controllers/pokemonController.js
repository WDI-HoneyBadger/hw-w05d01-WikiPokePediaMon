var express = require('express');
var router = express.Router();

var pokemon = require('../modules/pokemon');

router.get('/', pokemon.getAll, function(req, res){
  mustacheVariables = {
    pokemon_id: res.locals.pokemon
  }

  res.render('./pokemons/pokemon', mustacheVariables);
})

module.exports = router;