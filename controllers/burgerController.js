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
    'burger_name'
    ], [
      req.body.burger_name,
      req.body.devoured
    ], data => {
      res.json({ id: data.insertId })
    })
})

router.put('/api/burgers', (req, res) => {
  Burger.update([
    'devoured'
    ], [
      req.body.devoured,
      req.body.id
    ], data => {
      res.json(data)
    })
})

router.delete('/api/burgers/:id', (req, res) => {
  var id = req.params.id;
  Burger.delete(id, data => {
    res.json(data)
  })
})


module.exports = router;