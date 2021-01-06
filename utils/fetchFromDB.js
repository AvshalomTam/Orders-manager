const User = require('../src/models/user');
const Order = require('../src/models/order');
const Sys = require('../src/db/system/system');

async function getRightOrders(id) {
    var orders = [];
    // check if user is admin
    var isAdmin = await isAdminById(id);
    if (isAdmin) {
        orders = await Order.find({});
    } else {
        // get all orders of this user
        orders = await getUserOrdersById(id);
    }
    return orders;
}

async function isAdminById(id) {
    try {
        const user = await User.findOne({_id: id});
        return user.isadmin;
    }
    catch (e) {
        console.log('Problem: ' + e);
    }
}

async function getIdOfCurrUser() {
    try {
        const curr_user = await Sys.findOne({});
        return curr_user.currentId;
        
    } catch (e) {
        console.log('Problem with getting data: ' + e)
    }
}

async function getUserNameById(id) {
    try {
        const user = await User.findOne({_id: id})
        return user.username;
    } catch (e) {
        console.log('Problem with getUserNameById ' + e);
    }
}

async function getUserOrdersById(id) {
    try {
        const orders = await Order.find({
            owner: id
        })
        return orders;
    } catch (e) {
        console.log('Problem with getUserOrdersById ' + e);
    }
}

module.exports = {
    getRightOrders,
    isAdminById,
    getIdOfCurrUser,
    getUserNameById,
    getUserOrdersById
}