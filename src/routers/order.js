const express = require('express');
const Order = require('../models/order');
const Sys = require('../db/system/system');
const User = require('../models/user');

const {createOrder} = require('../db/createOrder');
const {organizeMsg} = require('../../utils/organizeMsg');
const {generateDate} = require('../../utils/getTheDate');
const { getRightOrders,
    getIdOfCurrUser,
    getUserNameById } = require('../../utils/fetchFromDB');

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
            const orders = await getRightOrders(id_current);
            // check if user have orders
            if (orders.length === 0) {
                res.send({orderOne: 'There are no orders yet'})
            } else {
            res.send(organizeMsg(...orders));
            }
        }
    } catch (e) {
        console.log('Problem: ' + e);
        res.status(400).send();
    }
});

module.exports = router