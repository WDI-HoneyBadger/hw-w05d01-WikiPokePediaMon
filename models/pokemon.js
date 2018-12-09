
var connection = require('../db/dbconfig');

var pokemon = {};

pokemon.getAll = function(req,res,next){
    connection.ManyOrNone("SELECT * FROM pokemon;")
    .then(function(result){
console.log('');
res.locals.pokemon = result;
next();
    })
}