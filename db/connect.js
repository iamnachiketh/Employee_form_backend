const mysql=require('mysql2');

let dbConnection = mysql.createConnection({
     user:"root",
     host:"localhost",
     password:"123456789",
     database:"Employee"
})

dbConnection.connect();

module.exports=dbConnection;