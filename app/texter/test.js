var chai = require('chai');

var expect = chai.expect;
var should = chai.should;

var texter = require('./index');

describe('texter', function() {
  it('should exist', function() {
    expect(texter).to.exist;
  });
});
