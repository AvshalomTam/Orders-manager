const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    mana: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    owner: {
        type: String,
        required: true
    },
    ownername: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;