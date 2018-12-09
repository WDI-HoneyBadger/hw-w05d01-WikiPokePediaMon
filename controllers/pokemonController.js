var express = require ('express');
var router = express.Router();

var pokemon = require('../models/pokemon');

  router.get('/', pokemon.getAll, function(req, res){
    mustacheVariables = {
      pokemons: res.locals.pokemons
    }
  
    res.render('./pokemon/index', mustacheVariables);
  })


module.exports =  router;


// router.get('/', cheese.getAll, function(req, res){
//     // res.send(res.locals.cheeses); // send that to the user 

//     mustahceVariables = { 
//         cheeses: res.locals.cheeses // passing data we got from our database
//         res.render('./cheeses/index', mustahceVariables);
//     }
//   })

