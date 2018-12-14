var db = require('../db/config');
var pokemon = {};


pokemon.getAll = function (req, res, next) {
  db.manyOrNone("SELECT * FROM pokemon;")  
    .then(function (result) {  
      res.locals.pokemon = result;  
      next(); 
    })
    .catch(function(error){ 
      console.log(error); 
      next(); 
    })
}

pokemon.find = function (req, res, next) {
  var id = req.params.id;
  db.oneOrNone("SELECT * FROM pokemon WHERE id = $1;", [id])
    .then(function(result){
      res.locals.pokemon = result;
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

module.exports = pokemon;