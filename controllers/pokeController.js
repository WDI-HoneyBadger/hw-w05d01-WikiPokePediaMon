var express = require('express');
 var router = express.Router();

 var pok = require('../models/pokemon');

 router.get('/', pok.getAll, function(req, res){
   mustacheVariables = {
     pokemon: res.locals.pokemon
   }

   res.render('./pokemon/index', mustacheVariables);
 })

 module.exports = router;