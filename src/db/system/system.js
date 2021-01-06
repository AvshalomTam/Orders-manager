const mongoose = require('mongoose');

const systemSchema = new mongoose.Schema({
    currentId: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
});

const Sys = mongoose.model('Sys', systemSchema);

module.exports = Sys;