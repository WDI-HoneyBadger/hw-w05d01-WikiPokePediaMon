var express = require('express');
var router = express.Router();

var poke = require('../moduls/pokes');

router.get('/', poke.getAll, function(req, res){
  mustacheVariables = {
    pokes: res.locals.pokemon
  }

  res.render('./index', mustacheVariables);
})

module.exports = router;