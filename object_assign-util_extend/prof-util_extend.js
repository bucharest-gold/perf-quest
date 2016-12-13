'use strict';
const util = require('util');

const obj = {
  a: 'a',
  b: 'b',
  c: 'c'
};

exports.compare = {
  'Extend1': function () {
    util._extend(obj, { b: 'B', d: 'D' });
  },
  'Extend2': function () {
    util._extend(obj, { b: 'B', d: 'D' });
  }
};

require('bench').runMain();
