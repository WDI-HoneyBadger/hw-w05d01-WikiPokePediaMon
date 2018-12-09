var express = require('express');
var router = express.Router();
var pokemon = require('../models/pokemon');

router.get('/', pokemon.getAll, function(req, res){
    mustacheData = {
        pokemon : res.locals.pokemon
    }

    res.render('./pokemons/pokemon', mustacheData)
})

module.exports = router;
