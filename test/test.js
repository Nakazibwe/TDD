/* eslint-disable no-undef */
// Test First TDD
// Multiply
// First Cycle
const { assert } = require('chai');
const { describe } = require('mocha');
const multiply = require('./multiply');

describe('Multiply TDD Test', () => {
  // First Test.
  it('TTD Test 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
  // Second Test.
  it('TTD Test 2', () => {
    assert.equal(multiply(2, 2), 4);
  });
  // Third Test.
  it('TTD Test 3', () => {
    assert.equal(multiply(3, 3), 9);
  });
  // Fourth Test.
  it('TTD Test 4', () => {
    assert.equal(multiply(4, 4), 16);
  });
  // Fifth Test
  it('TTD Test 5', () => {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});