var connection = require('../db/dpconfig');

var pokemon = {};

pokemon.getAll = function (req, res, next){
    connection.ManyOrNon("SELECT * FROM pokemon;")
    .then(function(result){
        console.log('done');
        res.locals.pokemons = result;
        next();
        //^ the last function is the most important (dymn bl25eer, 3shan l.functions tmshi bl order eley nb'3ah)
    })
}
module.exports = pokemon;