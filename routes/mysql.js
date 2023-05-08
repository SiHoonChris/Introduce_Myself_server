const mysql = require('mysql');
const connection = mysql.createConnection({
  database: "introduce_myself",
  host: "127.0.0.1",
  user: "sihoonchris",
  password: "dltlgns^0426"
});

module.exports = connection;