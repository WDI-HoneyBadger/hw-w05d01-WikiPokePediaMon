var express = require('express');
var router = express.Router();

var pokemon = require('../model/pokemon');

router.get('/', pokemon.getAll, renderIndex);
router.get('/:id', pokemon.find, renderShow);



function renderIndex(req, res){
  mustacheVariables = {
    pokemon: res.locals.pokemon
  }
  console.log(mustacheVariables)
  res.render('./pokemon/index', mustacheVariables);
}

function renderShow(req,res){
  mustacheVariables = res.locals.pokemon;
  res.render('./pokemon/show', mustacheVariables);
}


module.exports = router;