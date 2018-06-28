var expect = require("chai").expect;
var tools = require("../HTMLFinal/tools");
var assert = require('assert');

describe('ValidateEmailSuccess', function() {
    it('should return true', function() {
      let results = tools.ValidateEmail("alister.thrush@dootrix.com");
      assert.equal(results, true);
    });
  });


describe('ValidateEmailFailureNoFullStop', function() {
  it('should return false', function() {
    let results = tools.ValidateEmail("alister.thrush@dootrixcom");
    assert.equal(results, false);
  });
});



describe('ValidateEmailFailureNo@Symbol', function() {
  it('should return false', function() {
    let results = tools.ValidateEmail("alister.thrushdootrix.com");
    assert.equal(results, false);
  });
});
