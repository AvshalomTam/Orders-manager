require('../../db/mongoose');
const Sys  = require('./system'); 

const createSys = (
    currentId = '0',
    isAdmin = false
    ) => {
    const sys = new Sys({
        currentId,
        isAdmin
    })
    // save user to DB
    sys.save().then(() => {
    }).catch((error) => {
        console.log('error!', error)
    })
}

createSys('0', false);