'use strict';

const Benchmark = require('benchmark');

const foo = function () {
  return 1 + 1;
};

function bar () {
  return 1 + 1;
}

const suite = new Benchmark.Suite();

suite
.add('expression', foo)
.add('statement', bar)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => console.log(`Fastest is: ${suite.filter('fastest').map('name')}`))
.run();
