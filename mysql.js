var mysql = require('mysql');

var dbconfig   = require('./password.js');
var connection = mysql.createConnection(dbconfig);
connection.connect();

connection.query('SELECT * FROM topic',function(error,results,fields){
    if(error){
        console.log(error);
    }
    console.log(results);
});

connection.end();