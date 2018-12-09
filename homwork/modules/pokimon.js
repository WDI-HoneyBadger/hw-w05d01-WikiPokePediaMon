var connection = require('../db/');

var pokimon = {};

// create a method that gets all the data from the "cheeses" table
pokimon.getAll = function(req, res, next) {
  connection.manyOrNone("SELECT * FROM pokemon;")  // query the database
    .then(function(result){   // return the data as a javascript object "result"
      console.log('done');
      res.locals.pokemon = result;  // save that javascript object to the response object in res.locals.cheeses
      next();  // move on to the next command
    })
}

module.exports = pokimon;