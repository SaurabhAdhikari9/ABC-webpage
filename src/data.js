var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // database: 'premiumdatabase'
    database: 'phptest'
});
connection.connect(function(err){
    if(err) throw err;
    console.log('connected!');
    connection.query("select * from data",function(err,result){
        if(err) throw err;
        console.warn("all results are here",result)
    })
});
module.exports = connection;