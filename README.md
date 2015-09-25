# Javascript Solver/Scrambler Suite

This directory contains several scramblers used for Mark 2 that can be used in any Javascript project.

## Example Usage

Say you want 2x2x2 scrambles in your project. Include the 2x2x2 scrambler:

    <script src="scramble_222.js"></script>

Then call:

    scramblers["222"].getRandomScramble().scramble_string

(If you want to initialize before generating any scrambles, call `scramblers["222"].initialize()` before `getRandomScramble()`. However, `getRandomScramble()` will also initialize for you if needed.)

See [example.htm](./example.htm) for a slightly more thorough example with images.

## Mark 2 Scrambler Organization

Each scrambler is implemented in a Javascript file that creates a `scramblers` object (if it doesn't exist) and sets a property like `scramblers[eventID]`, where `eventID` is a string with the WCA event ID.

As of December 2011, the supported events are:

- `scramble_222.js`: "222"
- `scramble_333.js`: "333", "333bf", "333oh", "333fm", "333ft"
- `scramble_NNN.js`: "444", "555", "666", "777", "444bf", "555bf"
- `scramble_minx.js`: "minx"
- `scramble_pyram.js`: "pyram"
- `scramble_sq1.js`: "sq1"
- `scramble_clock.js`: "clock"

## Mark 2 Scrambler API

Each `scramblers[eventID]` object supports the following methods:

- `version`:
  - A string like "December 25, 2011" that reports the last significant modification date of the scrambler.
- `initialize(callback, null, statusCallback)`
  - This method must be called before generating or drawing any scrambles.
  - `callback`: Some scramblers are not instant to initialize (e.g. `333` takes about a second, `sq1` about 5 seconds). If a bunch of these are called in a row, the browser will not have a chance to be responsive. In order to support continuation-passing, you can provide a method to be called when the initialization is done. You can also pass in `null` and the initialization will simply return control to the caller when it is done.
  - `null`: Deprecated argument (randomSource). Pass `null` if you need to pass `statusCallback`.
  - `statusCallback`: Some scramblers take a while to initialize. If you'd like to have it report back to you on progress, provide a `statusCallback` method that takes a string.
- `getRandomScramble()`
  - Get a random scramble. This returns an object `{scramble_string: string, state: object}`. Note that `initialize(...)` needs to have been called earlier.
  - The `scramble_string` is a string represenation of the scrambling moves to be done.
  - The `state` object is an object whose structure depends on the scrambler implementation. It is useful for drawing.
- `drawScramble(parentElement, state, width, height)`
  - The source for the Raphael.js library must be included before this method can be called.
  - `parentElement` is an HTML element. This method will append a new SVG element to the `parentElement` and draw the scramble in it.
  - `state` is a valid puzzle state, as returned by `getRandomScramble()`
  - `width` and `height` are the width and height of the desired SVG canvas to be drawn, in pixels.

