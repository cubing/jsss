//TODO use Mocha, Jasmine or sumin

var Assert = require('assert');
var Scramble = require('./scramble.js');

var test = new Scramble();
test.type('333');
Assert.equal(test.type(), '333', 'Type should be set to 333');

var test = new Scramble();
Assert.equal(test.type(), '333', 'Default type should be 333');