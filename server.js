const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const routes = require('./controllers/burger.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

// app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})