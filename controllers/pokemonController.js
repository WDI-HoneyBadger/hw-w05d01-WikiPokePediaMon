var express = require('express');
var router = express.Router();
var pokemon = require('../models/pokemon');

router.get('/' , function(req , res){
    var pokemonVlues ={
        pokemonList = escape.local.pokemon ,
    }
    res.render('./pokemon/index' , pokemonVlues )
});

module.exports= router;