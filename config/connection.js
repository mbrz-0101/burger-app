// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "s0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306",
  user: "yfg9x0j09uun0vfs",
  password: "y23kvj9fmpysopou",
  database: "pjdkqduucxab30d6"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
