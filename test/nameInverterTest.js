const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {

  it("return an empty string when passed an empty string", function() { // 1
    const input = "";
    const output = nameInverter(input);
    assert.equal(input,output);
  });

  it("return a single name when passed a single name", function() { // 2
    // const input = "name";
    const output = nameInverter("name");
    assert.equal("name",output);
  });

  it("return a single name when passed a single name with extra spaces", function() { // 3
    const output = nameInverter(" name ");
    assert.equal("name",output);
  });

  it("return a last-name, first-name when passed a first and last-name", function() { // 4
    const output = nameInverter("first last");
    assert.deepEqual(['last', 'first'],output);
  });

  it("return a last-name, first-name when passed a first and last-name with extra spaces around the names", function() { // 5
    const output = nameInverter(" first last");
    assert.deepEqual(["last", "first"],output);
  });

  it("return an empty string when passed a single honorific", function() { // 6
    const output = nameInverter("Dr. ");
    assert.equal('',output);
  });

  it("return honorific first-name when passed honorific first-name", function() { // 7
    const output = nameInverter("Dr. first");
    assert.deepEqual(['Dr.', 'first'],output);
  });

  it("return a honorific last-name, first-name when passed honorific first-name last-name", function() { // 8
    const output = nameInverter("Dr. first-name last-name");
    assert.deepEqual(["Dr.", "last-name", "first-name"],output);
  });

  it("return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function() { // 9
    const output = nameInverter(" Dr. first-name last-name ");
    assert.deepEqual(["Dr.", "last-name", "first-name"],output);
  });

  it("throw an error when name is undefined", function() { // 10
    const input = undefined;
    const output = nameInverter(input);
    assert.equal("Error",output);
  });

});