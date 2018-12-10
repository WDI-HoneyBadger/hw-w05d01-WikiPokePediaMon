var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
  host: 'localhost',
  port: 5432,
  database: 'poke_pedia',
  user: 'postgres',
  password: 123456
};


var connection = pgInstance(config);

module.exports = connection;
