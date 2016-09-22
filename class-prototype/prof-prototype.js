'use strict';

function PFakeLog (message) {
  this.message = message;
}

PFakeLog.prototype.log = function () {
  return this.message;
};

exports.compare = {
  'prototype1': function () {
    new PFakeLog('foo').log();
  },
  'prototype2': function () {
    new PFakeLog('foo').log();
  }
};

require('bench').runMain();
