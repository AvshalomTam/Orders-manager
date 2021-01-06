require('../../db/mongoose');
const mongoose = require('mongoose');
const Sys  = require('./system'); 
// loggeduser: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true
// }
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