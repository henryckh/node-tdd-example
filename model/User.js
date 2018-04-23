const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name: 'string',
    size: 'string'
});
let User = mongoose.model('User', UserSchema);

module.exports = User;