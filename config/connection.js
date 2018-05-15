// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: process.env.PORT || 8080,
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "b38fc5b994761a",
  password: "92d8756c",
  database: "heroku_190344a3d12f790"
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
