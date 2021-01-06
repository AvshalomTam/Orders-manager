const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tel: {
        type: String
    },
    isadmin: {
        type: Boolean,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;