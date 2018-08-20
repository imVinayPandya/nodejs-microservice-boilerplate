const { describe, it } = require('mocha');
const request = require('superagent');
const should = require('should');

const api = 'http://localhost:9090';

describe('API Test', () => {
  describe('Server is running', () => {
    it('it should work, when server is running', done => {
      request.get(`${api}/`).end((err, res) => {
        should(res.status).equal(200);
        should(res.text).equal('Welcome to the jungle!');
        done();
      });
    });
  });
});
