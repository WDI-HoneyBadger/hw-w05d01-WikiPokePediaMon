var connection = require('../db/dbconfig');

var poke = {};
//when the quiere is done go to the next 
//get all the data from the databse 
poke.getAll = function(req,res,next){
    //method that return many or non data from the db
    connection.manyOrNone("SELECT * FROM pokemon;")
    .then(function(result){
        console.log('done')
        res.locals.poke = result;
        next();
    })
    /*then method it means run code after something is done, 
    it's JS and it's usually uses with promise libraray*/
}

module.exports = poke;

