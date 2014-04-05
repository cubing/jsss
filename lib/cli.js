#!/usr/bin/env node

var Scrambo = require('scrambo');
var cli = require('commander');

cli
  .version('0.0.1')
  .option('-t, --type [string]', 'set the scramble type', '333')
  .parse(process.argv);

var test = new Scrambo(cli.type);
console.log(test.get());