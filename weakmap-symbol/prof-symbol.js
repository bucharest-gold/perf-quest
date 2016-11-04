'use strict';

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
  'Symbol1': function () {
    new Product2('foo').getPrivate();
  },
  'Symbol2': function () {
    new Product2('foo').getPrivate();
  }
};

require('bench').runMain();
