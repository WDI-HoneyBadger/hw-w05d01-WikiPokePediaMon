var express = require("express");
var router = express.Router();

var pokemon = require("../models/pokemon");

router.get('/', pokemon.getAll, function(req, res){
    var mustacheData = {
        
        pokemonList: res.locals.pokemons
    }
    res.render('./pokemon_index', mustacheData);
})

router.get("/:id", pokemon.getAll, function(req, res){
    var pokemonId = req.params.id;
    pokemonId = parseInt(pokemonId) - 1;
    var pokemonList = res.locals.pokemons;
    var mustacheData = {
        name: pokemonList[pokemonId].name,
        primary: pokemonList[pokemonId].type1,
        secondary: pokemonList[pokemonId].type2,
        hp: pokemonList[pokemonId].hitpoints,
        attack: pokemonList[pokemonId].attack,
        defense: pokemonList[pokemonId].defense,
        speed: pokemonList[pokemonId].speed,
        legendary: pokemonList[pokemonId].legendary,
        img: pokemonList[pokemonId].img
    }
    res.render("./pokemon_show", mustacheData);
})

module.exports = router;