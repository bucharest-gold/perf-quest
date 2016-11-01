'use strict';

const Benchmark = require('benchmark');

class FakeLog {
  constructor (msg) {
    this.message = msg;
  }

  log () {
    return this.message;
  }
}

function PFakeLog (message) {
  this.message = message;
}

PFakeLog.prototype.log = function () {
  return this.message;
};

function a () {
  new FakeLog('foo').log();
}

function b () {
  new PFakeLog('foo').log();
}

const suite = new Benchmark.Suite();

suite
.add('class', a)
.add('prototype', b)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => {
  console.log(`Fastest is: ${suite.filter('fastest').map('name')}`);
  console.log(`[${Benchmark.platform.description}]`);
})
.run();
