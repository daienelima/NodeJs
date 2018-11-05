'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = async() =>{
    const res = await Produto.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Produto.findOne({
        slug: slug,
        active: true 
    },  'title description price slug tags'); 
    return res;  
}

exports.getById = async(id) => {
    const res = await Produto.findById(id);
    return res;
}

exports.getByTag = async (tag) =>{
    const res = await Produto.find({
        tags: tag,
        active: true 
    }, 'title description price slug tags'); 
    return res; 
}

exports.create = async(data) => {
    var produto = new Produto(data);
    await produto.save();
}

exports.update = async(id ,data) =>{
    await Produto.findByIdAndUpdate(id , {
        $set:{
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    });
}

exports.delete = async(id) =>{
    await Produto.findOneAndRemove(id);
}