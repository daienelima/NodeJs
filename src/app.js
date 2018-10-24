'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const produtoRoute = require('./routes/produtos-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/produto', produtoRoute);

module.exports = app;