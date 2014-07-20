'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var fs = require('fs'); // filesystem

exports.fbx_conv = {
  setUp: function(done) {
    done();
  },
  task: function(test) {
    test.expect(2);

    var model1Path = 'test/g3db_models/cube.g3db';
    var model1Exists = fs.existsSync(model1Path);
    test.equal(model1Exists, true, 'cube g3db file should exist');

    var model2Path = 'test/g3db_models/monkey.g3db';
    var model2Exists = fs.existsSync(model2Path);
    test.equal(model2Exists, true, 'monkey g3db file should exist');

    test.done();
  }
};
