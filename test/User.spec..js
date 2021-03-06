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
const User = require('../model/User');

// test User Controller
describe('User Controller', () => {
    describe('Create a new user', () => {

        before(() => {
            db.connect(()=> {
            });
        });

        it('should return saved document with property "name"', () => {
            let tom = new User({
                name: "Tom"
            });
            return expect(userController.create(tom)).to.eventually.has.property('name');
        });
    })
});

// test logging method without calling
describe('Winston Log', () => {
    describe('Log an info level message', () => {
        it('should logged "hello world"', () => {
            sinon.stub(logger, 'info');
            logger.info('hello world');
            expect(logger.info).to.have.been.calledWith('hello world');
            logger.info.restore();
        });
    })
});


// test logging with sandbox
describe('Sanbox Winston Log', () => {
    describe('Log an info level message in sandbox', () => {

        beforeEach(() => {
            this.sandbox = sinon.createSandbox();
        });
        it('should logged "hello world"', () => {
            sinon.stub(logger, 'info');
            logger.info('hello world');
            expect(logger.info).to.have.been.calledWith('hello world');
        });
        afterEach(() => {
            this.sandbox.restore()
        });
    })
});
