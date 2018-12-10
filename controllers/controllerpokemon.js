var express = require('express');
var router = express.Router();

var pokemon = require('../models/pokemon');


router.get('/', pokemon.getAll, function(req, res){
    mustacheVariables = {
        pokemons : res.locals.pokemons
    }
  
    res.render('./pokemones/index', mustacheVariables);
})

module.exports = router;