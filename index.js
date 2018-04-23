const mongoose = require('mongoose');
const config = require('./config');
const User = require('./model/User');
const userController = require('./controller/User.controller');
const express = require('express');
const dbHelper = require('./dbHelper');

let app = express();

app.get('/hello', (req, res) => {
        res.send({
            hello: 'hello'
        })
    });

app.listen(3000, function () {
});

dbHelper.connect((err) => {
    if (err) console.log('Failed to connect mongodb');
    console.log('connected to mongodb');
});
