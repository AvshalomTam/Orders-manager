const Order = require('../models/order');
// mana: {
//     type: String,
//     required: true
// },
// description: {
//     type: String
// },
// owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'User'
// },
// date: {
//     type: String,
//     required: true
// }
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