var express = require('express');
var router = express.Router();

var pooki = require('../modules/pokimon');

router.get('/' , pooki.getAll, function(req, res){

pokiVar = {
    pokemons: req.locals.pokemon
}

res.render('./allpoki', pokiVar );


})
module.exports = router;