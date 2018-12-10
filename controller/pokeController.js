var express = require('express');
var router = express.Router();

var pokemon = require('../models/poke');

router.get('/', pokemon.getAll, function(req, res){
  mustacheVariables = {
    pokemon: res.locals.pokemon
  }

  res.render('./pokemon', mustacheVariables);
})

module.exports = router;
