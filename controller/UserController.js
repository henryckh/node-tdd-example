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

module.exports = {
    create
}