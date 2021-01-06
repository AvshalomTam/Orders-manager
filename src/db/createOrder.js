const Order = require('../models/order');

const createOrder = (mana='', description='', owner='',ownername='', date='') => {
    const order = new Order({
        mana,
        description,
        owner,
        ownername,
        date
    })
    // save order to db
    order.save().then(() => {
    }).catch((error) => {
        console.log('error!', error)
    })
}

module.exports = {
    createOrder
}