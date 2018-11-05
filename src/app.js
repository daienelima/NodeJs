'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const config = require('./config');

const app = express();
const router = express.Router();


//Connecta ao banco
mongoose.connect( config.connectionString , {
    useCreateIndex: true , 
    useNewUrlParser: true 
}).then(()=> console.log('Conectado ao mongoDB'))
.catch(err => consele.error('Erro ao conectar'));

//Carregar Models
const Produto = require('./models/produto');
const Customer = require('./models/customer');
const Order = require('./models/order');


// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const produtoRoute = require('./routes/produtos-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/produto', produtoRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;