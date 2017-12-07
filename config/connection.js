const mysql = require('mysql');

const connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'nope',
  database: 'burgers_db'
})

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected as id ${connection.threadId}`)
})

module.exports = connection;