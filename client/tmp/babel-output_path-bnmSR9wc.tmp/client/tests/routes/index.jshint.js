define('client/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 15, col 24, \'data\' is defined but never used.\nroutes/index.js: line 17, col 9, Missing semicolon.\nroutes/index.js: line 23, col 21, \'id\' is defined but never used.\nroutes/index.js: line 9, col 7, \'$\' is not defined.\n\n4 errors');
  });
});