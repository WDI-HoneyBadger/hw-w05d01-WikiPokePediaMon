var express = require('express');
var router = express.Router();

var pokemon = require('../models/pokemon');

var getAll =  pokemon.getAll;
router.get('/', pokemon.getAll, function(req, res){
    mustacheVariables = {
        pokemons: res.locals.pokemons
    }
    res.render('./pokemon/index', mustacheVariables);
});

router.get('/:id', pokemon.getAll,function(req, res){
    var getId = req.params.id;
    mustacheVariables = {
        pokemons: res.locals.pokemons[getId]
    }
    res.render('./pokemon/show', mustacheVariables);
});


module.exports = router;