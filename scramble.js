/**
 * A scramble generator
 * @constructor
 * @param {string} t scramble type
 */
var Scramble = function(t) {
	this.t = '333';
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
Scramble.prototype.type = function(type) {
	if (!arguments.length) return this.t;
	this.t = type;
	scramblers[this.t].initialize(null, this.s);
	return this;
};

/**
 * Return a scramble
 * @param {number} num number of scrambles
 * @returns {string} generated scramble
 */
Scramble.prototype.get = function(num) {
	var stack = '';
	if (!arguments.length) return scramblers[this.t].getRandomScramble().scramble_string;
	for(i = 0; i < num; i++) {
		stack += scramblers[this.t].getRandomScramble().scramble_string + "\n";
	}
	return stack;
};

/**
 * Sets the random source
 * @param {src} random source
 */
Scramble.prototype.setRandomSource = function(src) {
	this.s = src;
};