'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const app = express();
const router = express.Router();


//Connecta ao banco
mongoose.connect('mongodb://daiene:daiene01@ds041167.mlab.com:41167/node_str', { useNewUrlParser: true });

//Carregar Models
const Produto = require('./models/produto');

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const produtoRoute = require('./routes/produtos-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/produto', produtoRoute);

module.exports = app;