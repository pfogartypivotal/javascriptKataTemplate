var expect = require('chai').expect;
var kata = require('../src/kata.js');

describe("Basic Test", function() {
  it("is true", function() {
    expect(kata.placeholder()).to.be.true;
  });
});
