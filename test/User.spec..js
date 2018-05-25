const mongoose = require('mongoose');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const winston = require('winston');
const logger = new winston.Logger({
    transports: [
        new (winston.transports.Console)()
    ]
});
chai.use(chaiAsPromised);
const expect = chai.expect;
const sinon = require('sinon');

const db = require('../db');
const userController = require('../controller/UserController');

// user module chai promised
describe('User Promised module', () => {
    describe('Create new user', () => {
        before(function (done) {
            db.connect(()=> {
                done();
            });
            userController.deleteAll();
        });

        it('should show the user document', () => {
            return expect(userController.create()).to.eventually.has.property('name');
        })
    })
});

// test internal methods
describe('Test internal winston logger', () => {
    describe('Logger info', () => {
        it('should call winston if name is all lowercase', () => {
            sinon.spy(logger, 'info');
        });
    })
});
