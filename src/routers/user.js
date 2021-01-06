const express = require('express');
const User = require('../models/user');
const Sys = require('../db/system/system');
const {createUser} = require('../db/createUser');
const router = new express.Router();

router.post('/user', async (req, res) => {
    // save user to DB
    if (req.body.username === '' || req.body.password === '') {
        res.send({msg: 'You must provide Username and Password!'});
    } 
    // save user to DB
    createUser(req.body.username, req.body.password, req.body.tel);
    // get its id
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    // log the new user automatically
    changeLoginUser(user._id, user.isadmin);
    res.send({msg: 'Welcome ' + req.body.username + '!'});
});

router.post('/loginuser', async (req, res) => {
    try {
        const logged_user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        });
        if (!logged_user) {
            return res.send({msg: 'Username or Password are incorrect!'});
        }
        // change the login user
        changeLoginUser(logged_user._id, logged_user.isadmin)
        res.send({msg: 'Welcome ' + req.body.username + '!'});
    } catch(e) {
        res.status(400).send()
        console.log('Problem with logging: ' + e)
    }
});

router.patch('/logout', async (req, res) => {
    try {
        // change to sys id
        changeLoginUser('0', false);
    } catch (e) {
        res.status(400).send()
        console.log('Problem with logging out: ' + e)
    }
    res.send({msg : 'You Logged out!'});
});

async function changeLoginUser(user_id, isAdmin) {
    try {
        const curr_user = await Sys.findOne({});
        // change id of current user
        curr_user['currentId'] = user_id
        curr_user['isAdmin'] = isAdmin
        await curr_user.save();
    } catch (e) {
        res.status(400).send();
        console.log('Problem with getting data: ' + e);
    }
};

module.exports = router