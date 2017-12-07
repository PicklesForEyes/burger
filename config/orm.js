const connection = require('./connection.js');

const orm = {
  getAll: (cb) => {
    let queryStr = `SELECT * FROM burgers;`;
    connection.query(queryStr, (err, res) => {
      if (err) throw err;
      cb(res)
    })
  },
  createNew: (cols, val, cb) => {
    let queryStr = `INSERT INTO burgers(${cols.toString()}) VALUES(?)`

    connection.query(queryStr, val, (err, res) => {
      if (err) throw err;
      cb(res)
    })
  },
  update: (cols, val, cb) => {
    let queryStr = `UPDATE burgers SET ${cols.toString()}=? WHERE id=?`

    connection.query(queryStr, val, (err, res) => {
      if (err) throw err;
      cb(res)
    })
  },
  delete: (val, cb) => {
    let queryStr = `DELETE FROM burgers WHERE id=?`;

    connection.query(queryStr, val, (err, res) => {
      if (err) throw err;
      cb(res)
    })
  }
}

module.exports = orm;