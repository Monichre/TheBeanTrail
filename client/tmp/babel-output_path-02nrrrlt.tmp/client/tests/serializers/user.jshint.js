define('client/tests/serializers/user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | serializers/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/user.js should pass jshint.');
  });
});