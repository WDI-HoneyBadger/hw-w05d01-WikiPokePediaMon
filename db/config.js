var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
  host: 'localhost',
  port: 5432,
  database: 'poke_pedia',
  user: 'postgres',
  password: 8899253 // your username here!!
}

var connection = pgInstance(config);

module.exports = connection;