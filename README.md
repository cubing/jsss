# Scrambo
![scrambo](http://rawgithub.com/nickcolley/scrambo/master/logo.svg)


# Cli
```bash
npm install -g scrambo
scrambo
```

# Node.js
```bash
npm install scrambo
```
```javascript
var Scramble = require('scrambo');

var threebythree = new Scrambo(); // Defaults to 3x3
console.log(threebythree.get(5)); // Returns 5 scrambles
```

# Browser
```html
<script src="scrambo.js"></script>
<script>
  var threebythree = new Scrambo(); // Defaults to 3x3
  console.log(threebythree.get(5)); // Returns 5 scrambles
</script>
```

# API
```javascript
.get(num); // Returns a number of scrambles, defaults to 1.
.type(str); // Sets the scramble type, defaults to 333.
```

# Current status
Currently only works with [3x3](https://github.com/nickcolley/scrambo/issues/6), and there's no [browser](https://github.com/nickcolley/scrambo/issues/1) build yet.  

# Credits
This is a fork of [jsss](https://github.com/cubing/jsss)
