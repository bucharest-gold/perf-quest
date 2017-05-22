'use strict';

const Benchmark = require('benchmark');

const sarray = [1, 2, 3];
const marray = Array.from({length: 30000}, () => Math.floor(Math.random() * 9));
const larray = Array.from({length: 64001}, () => Math.floor(Math.random() * 9));

function each () {
  sarray.forEach(e => {
    e + 1;
  });
  marray.forEach(e => {
    e + 1;
  });
  larray.forEach(e => {
    e + 1;
  });
}

function forr () {
  for (let i = 0; i < sarray.length; i++) {
    sarray[i] + 1;
  }
  for (let i = 0; i < marray.length; i++) {
    marray[i] + 1;
  }
  for (let i = 0; i < larray.length; i++) {
    larray[i] + 1;
  }
}

const suite = new Benchmark.Suite();

suite
.add('forEach', each)
.add('for', forr)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => console.log(`Fastest is: ${suite.filter('fastest').map('name')}`))
.run();
