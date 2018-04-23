const mongoose = require('mongoose');
const config = require('./config');

function connect(callback) {
    mongoose.connect(config.mongodb, callback);
}

module.exports = {
    connect
}