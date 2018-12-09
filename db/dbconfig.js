// this file has one task only - configure pstgress to connect our database to our express app 

var pgPromise = require('pg-promise'); // from npm 
var pgInsatnce = pgPromise();

var config = { 
    host: 'localhost',
    port: 5432, // this is claimed by postgres - making our app configure the postgtes (data)
    database: 'poke_pedia',
    user: 'layalkashgari' // username on my comp 
} // 4 imp feilds that should be here 

// the final step - telling it hey this is the data u need to connect our app so plz do it 

var conncetion = pgInsatnce(config); // this is configuered instance 

// we're borrwing this function -  this function(connection) takes our instance and it passes it to our data base 

module.exports = conncetion; 

// now we can start using this 
// models represent all the data that we want for our pirtcular page 
// what is the cycle?

