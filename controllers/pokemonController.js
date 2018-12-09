var express = require('express');
var router = express.Router();

var cheese = require('../models/pokemon');

router.get('/', cheese.getAll, function(req, res){
  mustacheVariables = {
    pokemon: res.locals.pokemon
  }

  res.render('./pokemon/index', mustacheVariables);
})

module.exports = router;