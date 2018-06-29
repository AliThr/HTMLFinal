// var expect = require("chai").expect;
var tools = require("../HTMLFinal/tools");
var assert = require('assert');

// Successful Email - Correct format
describe('ValidateEmailSuccess', function() {
    it('should return true', function() {
      let results = tools.ValidateEmail("alister.thrush@dootrix.com");
      assert.equal(results, true);
    });
  });

// Failed Email - No Full Stop
describe('ValidateEmailFailureNoFullStop', function() {
  it('should return false', function() {
    let results = tools.ValidateEmail("alister.thrush@dootrixcom");
    assert.equal(results, false);
  });
});

// Failed Email - No @ Symbol
describe('ValidateEmailFailureNo@Symbol', function() {
  it('should return false', function() {
    let results = tools.ValidateEmail("alister.thrushdootrix.com");
    assert.equal(results, false);
  });
});

// Failed Email - No Input
describe('ValidateEmailFailureNoInput', function() {
  it('should return false', function() {
    let results = tools.ValidateEmail();
    assert.equal(results, false);
  });
});

// Failed Email - Empty String
describe('ValidateEmailFailureEmptyString', function() {
  it('should return false', function() {
    let results = tools.ValidateEmail("");
    assert.equal(results, false);
  });
});

// Successful Name - Field Not Empty 
describe('ValidateNameFieldNotEmpty', function(){
  it('should return true', function(){
    let results = tools.ValidateName("b");
    assert.equal(results, true);
  })
});

// Failed Name - Field Is Empty String
describe('ValidateNameFieldEmptyString', function(){
  it('should return false', function(){
    let results = tools.ValidateName("");
    assert.equal(results, false);
  })
});

// Failed Name - Field Has No Input
describe('ValidateNameFieldNoInput', function(){
  it('should return false', function(){
    let results = tools.ValidateName();
    assert.equal(results, false);
  })
});