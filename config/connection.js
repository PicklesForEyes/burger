const mysql = require('mysql');

const connection = mysql.createConnection({
  port: 3306,
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'bfc76c0550fc89',
  password: '8832914f',
  database: 'burgers_db'
})

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected as id ${connection.threadId}`)
})

module.exports = connection;