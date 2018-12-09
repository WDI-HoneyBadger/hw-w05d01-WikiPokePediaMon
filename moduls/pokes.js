var connection = require('../db/dbconfig');

var poke = {};

poke.getAll = function(req, res, next) {
  connection.manyOrNone("SELECT * FROM pokemon;")
    .then(function(result){
      res.locals.pokemon = result;
      next();
    })
}

module.exports = poke;