var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
    host: 'localhost',
    port: 5432,
    database: 'poke_db',
    user: 'hamoudbinaboud'
};

var connection = pgInstance(config);

module.exports = connection;