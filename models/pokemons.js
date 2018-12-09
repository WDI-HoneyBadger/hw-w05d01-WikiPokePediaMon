var connection = require('../db/dbconfig');

var pokemons = {};

pokemons.getAll= function (req, res , next) { //method
    connection.manyOrNone("SELECT * FROM pokemon;")
    .then(function(result){
        console.log('done');
        res.locals.pokemon = result;
        next();
    })
}

module.exports = pokemons;