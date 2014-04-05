#!/usr/bin/env node

var Scramble = require('./scramble.js');
var cli = require('commander');

cli
  .version('0.0.1')
  .option('-t, --type [string]', 'set the scramble type', '333')
  .parse(process.argv);

var test = new Scramble(cli.type);
console.log(test.get());