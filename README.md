# node-tdd-example
Project example using Mocha, chai to do test driven development for Node.js. 

## Prerequisites
Install Mocha globally by running:
```sh
$ npm install -g mocha
```

Install mongodb and run at port 27017

During filling npm init, input mocha for "test command", 
Your package.json file should contain the following field:
```js
"script": {
    "test": "mocha"
}
````

## Test http request
Use supertest to test api from express
```js
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
```

## Test function execution
Test logging with sandbox
```js
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
```

## Test writing to Database
```js
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
```