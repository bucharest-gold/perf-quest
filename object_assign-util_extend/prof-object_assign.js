'use strict';

const obj = {
  a: 'a',
  b: 'b',
  c: 'c'
};

exports.compare = {
  'Assign1': function () {
    Object.assign(obj, { b: 'B', d: 'D' });
  },
  'Assign2': function () {
    Object.assign(obj, { b: 'B', d: 'D' });
  }
};

require('bench').runMain();
