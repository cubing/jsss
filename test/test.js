var Assert = require('assert');
var Scrambo = require('../lib/scrambo.js');

// Constructor
var test = new Scrambo();
Assert.equal(test.type(), '333', 'Default type should be 333');

// Type
var test = new Scrambo();
test.type('333');
Assert.equal(test.type(), '333', 'Type should be set to 333');
var test = new Scrambo();
test.type('444');
Assert.equal(test.type(), '444', 'Type should be set to 444');
var test = new Scrambo();
test.type('555');
Assert.equal(test.type(), '555', 'Type should be set to 555');

// Chaining
var test = new Scrambo().get(1);
var test = new Scrambo().seed(10).get(2);
var test = new Scrambo().type('444').get(2);
var test = new Scrambo().seed(1).type('444').get();
var test = new Scrambo().type('444').seed(1).get(1);

// Seeding
var test = new Scrambo();
var seeded_scramble = test.seed(1).get();
for (var i = 100; i >= 0; i--) {
	Assert.equal(seeded_scramble, test.seed(1).get(), 'Seeded scrambles should return the same [' + i + ']');
}
var test = new Scrambo();
var seeded_scramble = test.seed(50).type('444').get();
for (var i = 100; i >= 0; i--) {
	Assert.equal(seeded_scramble, test.seed(50).type('444').get(), 'Complex seeded scrambles should return the same [' + i + ']');
}

// Minx
var test = new Scrambo('minx');
test.get();
var test = new Scrambo().type('minx');
test.get();
var test = new Scrambo().type('minx').get();

// Pyram
var test = new Scrambo('pyram');
test.get();
var test = new Scrambo().type('pyram');
test.get();
var test = new Scrambo().type('pyram').get();

// Clock
var test = new Scrambo('clock');
test.get();
var test = new Scrambo().type('clock');
test.get();
var test = new Scrambo().type('clock').get();

// SQ1
var test = new Scrambo('sq1');
test.get();
var test = new Scrambo().type('sq1');
test.get();
var test = new Scrambo().type('sq1').get();