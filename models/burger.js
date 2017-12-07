const orm = require('../config/orm.js');

let burger = {
  all: cb => {
    orm.getAll(res => {
      cb(res);
    })
  },

  create: (cols, vals, cb) => {
    orm.createNew(cols, vals, res => {
      cb(res)
    })
  },

  update: (col, vals, cb) => {
    orm.update(col, vals, res => {
      cb(res)
    })
  },

  delete: (val, cb) => {
    orm.delete(val, res => {
      cb(res)
    })
  }
}

module.exports = burger;