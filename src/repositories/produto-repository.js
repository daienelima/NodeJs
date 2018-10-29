'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = () =>{
    return Produto.find({
        active: true },
       'title price slug'); 
}

exports.getBySlug = (slug) => {
    return Produto.findOne({
        slug: slug,
        active: true }, 
        'title description price slug tags');   
}

exports.getById = (id) =>{
    return Produto.findById(id);
}

exports.getByTag = (tag) =>{
    return Produto.find({
        tags: tag,
        active: true }, 
        'title description price slug tags');  
}

exports.create = (data) => {
    var produto = new Produto(data);
    return produto.save();
}

exports.update = (id ,data) =>{
    return Produto.findByIdAndUpdate(id , {
        $set:{
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    });
}

exports.delete = (id) =>{
    return Produto.findOneAndRemove(id);
}