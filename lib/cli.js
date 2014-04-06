#!/usr/bin/env node

var Scrambo = require('./scrambo.js');
var cli = require('commander');

cli
  .version('0.0.1')
  .option('-n, --number [num]', 'amount of scrambles to generate')
  .option('-t, --type [string]', 'set the scramble type', '333')
  .option('-s, --seed [num]', 'set seed')
  .parse(process.argv);

var out = new Scrambo();
out.type(cli.type);
if (cli.seed) out.seed(cli.seed);
if (cli.number) {
	console.log(out.get(cli.number));
} else {
	console.log(out.get());
}