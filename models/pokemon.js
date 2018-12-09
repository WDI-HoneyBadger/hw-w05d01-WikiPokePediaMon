// modles file name (best practice) one word and singular 
// we need to make sure we're imorting the data inside our model 

var connection = require('../db/dbconfig');

var pokemon = {}; // start it empty and build it over time 

// creating a  new method

pokemon.getAll = function(req, res, next){ 

    connection.manyOrNone("SELECT * FROM pokemon;") //sets the maount of data we want to get from our query (database) - we do it to make sure we dont make any mistakes 
    .then(function(result){ // calling .then - 
        res.locals.pokemons =  result;  // result fromt the query 
        next(); // when its done go to the next step 
    }) 

}

// the entire goals of this model is the last function 

// we're putting a function in the memory saying dont run it until ?? 
// puttig the function on hold until somehting stops 

// a promise lives a whole diffrent place in javaScript 
// javascript is powerful and dumb bcuz it only handles one command at a time (one process at a time). 
// a memory that lives outside javaScript 

// the entire purpose of server 
// what is res.locals ???? 


// after doing this we need to attach our data in controlelr 


module.exports = pokemon; 