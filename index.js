const mongoose = require('mongoose');
const config = require('./config');
const User = require('./model/User');
const userController = require('./controller/UserController');
const express = require('express');
const db = require('./db');

let app = express();

app.get('/hello', (req, res) => {
        res.send({
            hello: 'hello'
        })
    });

app.listen(3000, function () {
});