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

exports.compare = {
  'WeakMap': function () {
    new Product('foo').getPrivate();
  },
  'Symbol': function () {
    new Product2('foo').getPrivate();
  }
};

require('bench').runMain();
