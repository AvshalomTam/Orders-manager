const express = require('express');
const Order = require('../models/order');
const Sys = require('../db/system/system');

const {createOrder} = require('../db/createOrder');
const {organizeMsg} = require('../../utils/organizeMsg');
const {generateDate} = require('../../utils/getTheDate')
const User = require('../models/user');

const router = new express.Router();

router.post('/saveorder', async (req, res) => {
    // save order to DB to current logged user
    try {
        // get id of curr
        const id_current = await getIdOfCurrUser();
        // check if someone logged in
        if (id_current === '0') {
            res.send({msg: 'You should logIn first!'});
        } else {
            const username = await getUserNameById(id_current);
            // create order in DB - id_current in owner of mana
            createOrder(req.body.mana, req.body.description, id_current, username, generateDate());
            res.send({msg: 'We saved your order!'});
        }   
    } catch (e) {
        console.log('Problem: ' + e);
        res.status(400).send();
    }
});

router.get('/orders', async (req, res) => {
    try {
        const id_current = await getIdOfCurrUser();
        // check if someone logged in 
        if (id_current === '0') {
            res.send({orderOne: 'You should logIn first!'});
        } else {
            var orders = []
            if (id_current === '5ff441364650cf226ccd5dba') {
                orders = await Order.find({});
            } else {
                // get all orders of this user
                orders = await getUserOrdersById(id_current);
            }
            // check if user have orders
            if (orders.length === 0) {
                const msg = {
                    orderOne: 'There are no orders yet'
                }
                res.send(msg)
            } else {
            // organize data
            const msg = organizeMsg(...orders);
            res.send(msg);
            }
        }
    } catch (e) {
        console.log('Problem: ' + e);
        res.status(400).send();
    }
});

async function getIdOfCurrUser() {
    try {
        const curr_user = await Sys.findOne({});
        return curr_user.currentId;
        
    } catch (e) {
        console.log('Problem with getting data: ' + e)
    }
}

async function getUserNameById(id_current) {
    try {
        const user = await User.findOne({
            _id: id_current
        })

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

module.exports = router