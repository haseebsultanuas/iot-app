// test/app.test.js
const request = require('supertest');
const { expect } = require('chai');
const path = require('path');
const app = require('../app'); // adjust the path if necessary

describe('GET /', () => {
  it('should serve monitoring.html', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        const expectedFilePath = path.join(__dirname, '../monitoring.html');
        const servedFilePath = path.join(__dirname, '../', res.text);

        expect(servedFilePath).to.equal(expectedFilePath);
        done();
      });
  });
});
