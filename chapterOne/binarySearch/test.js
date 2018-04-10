'use strict';
var app    = require('./search');
var assert = require('assert');

describe('Able to find a number contained in the array.', () => {
  it('It should be able to return true because the key is contained in the array.', () => {
    assert.equal(true, app.binarySearch([1,2,3,4,5,6,7,8,9,10],1));
  });
});

describe('Validate the uniqueness of characters inside a string.', () => {
    it('It should be able to return false because the key is not contained in the array.', () => {
      assert.equal(false, app.binarySearch([1,2,3,4,5,6,7,8],100));
  });
});

describe('Validate the uniqueness of characters inside a string.', () => {
    it('It should be able to return true because the key is contained in the array.', () => {
      assert.equal(true, app.binarySearch([1],1));
  });
});


describe('Validate the uniqueness of characters inside a string.', () => {
    it('It should be able to return false because the key is not contained in the array.', () => {
      assert.equal(false, app.binarySearch([1],2));
  });
});