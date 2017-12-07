const express = require('express');
const router = express.Router();
const Burger = require('../models/burger.js');

router.get('/', (req, res) => {
  Burger.all(data => {
    res.render('index', { burgers: data})
  })
})

router.post('/api/burgers', (req, res) => {
  Burger.create([
    'burger_name', 'devoured'
    ], [
      req.body.burger_name, req.body.devoured
    ], data => {
      res.json({ id: data.insertId })
    })
})


module.exports = router;