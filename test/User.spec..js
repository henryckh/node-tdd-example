const mongoose = require('mongoose');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const winston = require('winston');
const logger = new winston.Logger({
    transports: [
        new (winston.transports.Console)()
    ]
});
chai.use(chaiAsPromised);
chai.use(sinonChai);
const expect = chai.expect;

const db = require('../db');
const userController = require('../controller/UserController');

// user module chai promised
describe('User Promised module', () => {
    describe('Create new user', () => {

        // clean database
        before(function (done) {
            db.connect(()=> {
                done();
            });
            userController.deleteAll();
        });

        // create user document
        it('should show the user document', () => {
            return expect(userController.create()).to.eventually.has.property('name');
        });

        // delete user document
        // after(function () {
        //     userController.deleteAll();
        // })
    })
});

// test internal methods
describe('Test internal winston logger', () => {
    describe('Logger info', () => {
        it('should call winston if name is all lowercase', () => {
            sinon.spy(logger, 'info');
            logger.info('hello world');
            expect(logger.info).to.have.been.calledWith('hello world');
        });
    })
});
