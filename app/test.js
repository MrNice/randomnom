var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;
var should = chai.should;

var app = require('./index');

describe('the app', function() {
  describe('scaffolding', function() {
    it('should select a port', function() {
      expect(app.get('port')).to.exist;
    });
  });

  describe('default routes', function() {
    it('should deliver html from \'/\'', function(done) {
      request(app)
        .get('/')
        .expect('Content-Type', /html/i)
        .expect(200)
        .end(done);
    });
  });
});
