var express = require('express');
var router = express.Router();

var pokemon = require('../models/pokimon');

router.get('/', pokemon.getAll, function(req, res){
  mustacheVariables = {
    pokimon: res.locals.pokemon
  }

  res.render('./pokimon/hidex.html', mustacheVariables);
})

module.exports = router;