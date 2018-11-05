'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');


exports.get = async(data) => {
    var res = await Order.find({})
    .find({}, 'number status customer items')
    .populate('customer', 'name')
    .populate('Items.produto', 'title');
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}