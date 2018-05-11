const User = require('../model/User');

function create() {
    let user = new User({
        name: 'hello'
    });
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