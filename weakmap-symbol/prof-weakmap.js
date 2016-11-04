'use strict';

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

exports.compare = {
  'WeakMap1': function () {
    new Product('foo').getPrivate();
  },
  'WeakMap2': function () {
    new Product('foo').getPrivate();
  }
};

require('bench').runMain();
