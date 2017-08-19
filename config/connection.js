//setup connection from node to mysql
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: 'localhost',
    user: 'root',
    password: '',
    database: 'project2_db'
    });
};

//connecting mysql
connection.connect(function(err){
    if(err){
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

//export mysql connection to orm for usage
module.exports = connectoin;