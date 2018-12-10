var connection = require('../db/dbconfig');

var pokemons = {};

// create a method that gets all the data from the "pokemon" table
pokemons.getAll = function(req, res, next) {
  connection.manyOrNone("SELECT * FROM pokemon;")  // query the database
    .then(function(result){   // return the data as a javascript object "result"
      console.log('done');
      res.locals.pokemon = result;  // save that javascript object to the response object in res.locals.pokemons
      next();  // move on to the next command
    })
}

module.exports = pokemons;