const User  = require('../models/user');

const createUser = (username='', password='' ,tel='', isadmin=false) => {
    const user = new User({
        username,
        password,
        tel,
        isadmin
    })
    // save user to DB
    user.save().then(() => {
    }).catch((error) => {
        console.log('error!', error)
    })
}

module.exports = {
    createUser
}