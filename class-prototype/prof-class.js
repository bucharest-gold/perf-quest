'use strict';

class FakeLog {
  constructor (msg) {
    this.message = msg;
  }

  log () {
    return this.message;
  }
}

exports.compare = {
  'class1': function () {
    new FakeLog('foo').log();
  },
  'class2': function () {
    new FakeLog('foo').log();
  }
};

require('bench').runMain();
