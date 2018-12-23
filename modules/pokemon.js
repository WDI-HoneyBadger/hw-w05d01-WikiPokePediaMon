
var db = require('../db/config');
var pokemon = {};

pokemon.getAll = function(req, res, next){
  db.manyOrNone('SELECT * FROM "pokemon";')
    .then(function(result){
        console.log(result)
        res.locals.pokemon = result;
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

pokemon.byid = function (req, res, next) {
    db.one('SELECT * FROM "pokemon" WHERE id = $1;', [req.params.id])
      .then(function (result) {
        res.locals.pokemon = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }
  

module.exports = pokemon;




