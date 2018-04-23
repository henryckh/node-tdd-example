const mongoose = require('mongoose');
const db = require('../db');

const userController = require('../controller/UserController');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

// user module chai promised
describe('User Promised module', () => {
    describe('Create new user', () => {

        beforeEach(function (done) {
            db.connect(()=> {
                done();
            })
        });

        it('should show the user document', (done) => {
            expect(userController.create()).to.eventually.be.a('string');
            done();
        })
    })
})