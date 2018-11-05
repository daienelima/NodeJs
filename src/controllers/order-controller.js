'use strict';

const repository = require('../repositories/order-repository');
const guid = require('guid');
const authService = require('../services/auth-service');

exports.get = async (req, res, next) =>{
    try{
        var data = await repository.get();
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisiçaõ'
        });
    }
}

exports.post = async(req, res, next) => {
    try{
        //Recuperar o token
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        
        //Decodificar token
        const data = await authService.decodeToken(token);

        await repository.create({
            customer: req.body.customer,
            //Gerando numero de ordem automaticamente
            number: guid.raw().substring(0,6), 
            items: req.body.items
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'});
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: 'Falha ao cadastrar pedido'
        }); 
    }
}