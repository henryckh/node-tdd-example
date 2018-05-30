const User = require('../model/User');

function create(user) {
    return user.save()
        .then((user)=> {
            return user;
        })
        .catch((err) => {
            return err;
        })
}

function deleteAll() {
    User.remove()
        .then(function (user) {
        })
        .catch(function (err) {
            console.log('error removed');
        })
}

module.exports = {
    create,
    deleteAll
};