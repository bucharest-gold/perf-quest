'use strict';

const util = require('util');

const obj = {
  a: 'a',
  b: 'b',
  c: 'c'
};

exports.compare = {
  'Assign': function () {
    Object.assign(obj, { b: 'B', d: 'D' });
  },
  'Extend': function () {
    util._extend(obj, { b: 'B', d: 'D' });
  }
};

require('bench').runMain();
