// configure postgres to connect our db to our express app

var pgpromise = require('pg-promise');
var pgInstance = pgpromise();


var config = {
    host: 'localhost',
    port: 5432,
    database: 'poke_pedia',
    user: 'hnanalshmry' // your username here
}

var connection = pgInstance(config);

module.exports= connection;