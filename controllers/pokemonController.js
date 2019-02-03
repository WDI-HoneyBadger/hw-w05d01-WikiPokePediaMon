var express = require('express');
var router = express.Router();
var pokemon = require('../models/pokemon');

router.get('/', pokemon.getAll, function(req, res){
    pokemonVariables = {
        pokemonList: res.locals.pokemon
    };
    res.render('./pokemons/index.html', pokemonVariables);
});

module.exports = router;
