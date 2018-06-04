const expect = require('chai').expect;
const supertest = require('supertest');

const api = supertest('http://localhost:3000/api');
require('../');

describe('Feed API', () => {
    describe('Get Image list', () => {
        it('should return images of link in array', (done) => {
            api.get('/images')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err);

                    expect(res.body).to.have.property('images');
                    expect(res.body.images).to.be.an('array');
                    done();
                });
        })
    });
});