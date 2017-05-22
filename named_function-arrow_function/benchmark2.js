'use strict';

const Benchmark = require('benchmark');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const foo = (x) => x;

function namedFoo (x) {
  return x;
}

function a () {
  namedFoo(1);
  array.forEach(function (a) {
    return a;
  });
  array.filter(function (a) {
    return a % 2 === 0;
  });
}

function b () {
  foo(1);
  array.forEach(a => a);
  array.filter(a => a % 2 === 0);
}

const suite = new Benchmark.Suite();

suite
.add('named', a)
.add('arrow', b)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => console.log(`Fastest is: ${suite.filter('fastest').map('name')}`))
.run();
