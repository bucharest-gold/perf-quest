'use strict';
const Benchmark = require('benchmark');
const util = require('util');

const obj = {
  a: 'a',
  b: 'b',
  c: 'c'
};

function assign () {
  Object.assign(obj, { b: 'B', d: 'D' });
}

function extend () {
  util._extend(obj, { b: 'B', d: 'D' });
}

const suite = new Benchmark.Suite();

suite
.add('Assign', assign)
.add('Extend', extend)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => console.log(`Fastest is: ${suite.filter('fastest').map('name')}`))
.run();
