'use strict';

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

exports.compare = {
  'class': function () {
    new FakeLog('foo').log();
  },
  'prototype': function () {
    new PFakeLog('foo').log();
  }
};

require('bench').runMain();
