[![Build Status](https://travis-ci.org/nickcolley/scrambo.svg?branch=master)](https://travis-ci.org/nickcolley/scrambo)
# Scrambo - Puzzle Scramble Generator
![scrambo](http://rawgithub.com/nickcolley/scrambo/master/scrambo.svg)

## Usage
```javascript
// Generate a new 4x4 scramble with the seed of 1
var seeded_scramble = new Scrambo().type('444').seed(1).get();
console.log(seeded_scramble);

// Generate 5 scrambles (defaults to 3x3)
var multiple_scrambles = new Scrambo().get(5);
console.log(multiple_scrambles);
```

## Cli
```bash
npm install -g scrambo
scrambo
```

## Node.js
```bash
npm install scrambo
```
```javascript
var Scrambo = require('scrambo');

var threebythree = new Scrambo(); // Defaults to 3x3
console.log(threebythree.get(5)); // Returns 5 scrambles
```

## Browser
```html
<script src="scrambo.js"></script>

<script>
  var threebythree = new Scrambo(); // Defaults to 3x3
  console.log(threebythree.get(5)); // Returns 5 scrambles
</script>
```

## API
```javascript
.get(num); // Returns a number of scrambles, defaults to 1.
.type(str); // Sets the scramble type, defaults to 333.
.seed(num); // Repeatable scrambles.
.length(num); // Set scramble length, currently only for NNN, minx scrambles.
```

## Current status
Alpha, but works!

## Credits
This is a fork of [jsss](https://github.com/cubing/jsss)
