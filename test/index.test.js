'use strict';

var assert = require('proclaim');
var fmt = require('../lib');

// IE7
var supportsJSON = !!global.JSON;

describe('fmt', function() {
  it('%d', function() {
    assert.strictEqual(fmt('number: %d', '0'), 'number: 0');
  });

  it('%o', function() {
    if (supportsJSON) {
      assert.strictEqual(fmt('object: %o', {}), 'object: {}');
    } else {
      assert.strictEqual(fmt('object: %o', {}), 'object: [object Object]');
    }
  });

  it('%o', function() {
    if (supportsJSON) {
      assert.strictEqual(fmt('array: %o', []), 'array: []');
    } else {
      assert.strictEqual(fmt('array: %o', []), 'array: ');
    }
  });

  it('%o', function() {
    if (supportsJSON) {
      assert.strictEqual(fmt('array: %o', [{ a: 'b' }]), 'array: [{"a":"b"}]');
    } else {
      assert.strictEqual(fmt('array: %o', [{ a: 'b' }]), 'array: [object Object]');
    }
  });

  it('%d %s %o', function() {
    if (supportsJSON) {
      assert.strictEqual(fmt('%d %s %o', '0number', 'string', {}), '0 string {}');
    } else {
      assert.strictEqual(fmt('%d %s %o', '0number', 'string', {}), '0 string [object Object]');
    }
  });

  it('should be extensible', function() {
    fmt.f = format;
    assert.strictEqual(fmt('floats: %f', 1), 'floats: 1.00');

    function format(s) {
      return Number(s || 0).toFixed(2);
    }
  });
});
