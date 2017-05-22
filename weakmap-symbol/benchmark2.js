'use strict';

const Benchmark = require('benchmark');

const privates = new WeakMap();

class Product {
  constructor (name) {
    this.name = name;
    privates.set(this, {
      id: 2340847
    });
  }

  getPrivate () {
    return privates.get(this).id;
  }
}

const ID = Symbol('id');
class Product2 {
  constructor (name) {
    this.name = name;
    this[ID] = 2340847;
  }

  getPrivate () {
    return this[ID];
  }
}

const suite = new Benchmark.Suite();

function a () {
  new Product('foo').getPrivate();
}

function b () {
  new Product2('foo').getPrivate();
}

suite
.add('WeakMap', a)
.add('Symbol', b)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => console.log(`Fastest is: ${suite.filter('fastest').map('name')}`))
.run();
