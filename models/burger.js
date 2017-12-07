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
  }
}

module.exports = burger;