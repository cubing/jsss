var scramblers = {}
scramblers = require('./scramblers/NNN.js');
// scramblers['222'] = require('./scramblers/222.js');
// scramblers['333'] = require('./scramblers/333.js');
scramblers['clock'] = require('./scramblers/clock.js');
scramblers['minx'] = require('./scramblers/minx.js');
scramblers['pyram'] = require('./scramblers/pyram.js');
scramblers['sq1'] = require('./scramblers/sq1.js');

/**
 * A scramble generator
 * @constructor
 * @param {string} t scramble type
 */
var Scrambo = function(t) {
	this.t = t || '333';
	this.s = {};
	this.setRandomSource(Math);
	this.type(this.t);
	return this;
};

/**
 * Gets/Sets scramble type
 * @param {string} type scramble type
 * @returns {string} set type
 */
Scrambo.prototype.type = function(type) {
	if (!arguments.length) return this.t;

	// Check the scrambler exists.
	if(!scramblers.hasOwnProperty(this.t)){
		throw new Error('Invalid scrambler, allowed: ' + Object.keys(scramblers));
		return;
	}

	this.t = type;

	scramblers[this.t].initialize(null, this.s);

	return this;
};

/**
 * Return a scramble
 * @param {number} num number of scrambles
 * @returns {string} generated scramble
 */
Scrambo.prototype.get = function(num) {
	var stack = '';
	if (!arguments.length) return scramblers[this.t].getRandomScramble().scramble_string;
	for(i = 0; i < num; i++) {
		stack += scramblers[this.t].getRandomScramble().scramble_string + "\n";
	}
	return stack;
};

/**
 * Sets the seed
 * @param {num|Math} random source
 */
Scrambo.prototype.seed = function(seed) {
	// http://stackoverflow.com/a/19303725
	this.setRandomSource({
		random: function() {
			var x = Math.sin(seed++) * 10000;
    		return x - Math.floor(x);
		}
	});

	scramblers[this.t].initialize(null, this.s);
};

/**
 * Sets the random source
 * @param {src} random source
 */
Scrambo.prototype.setRandomSource = function(src) {
	this.s = src;
};

module.exports = Scrambo;