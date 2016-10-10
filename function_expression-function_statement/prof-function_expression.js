'use strict';

const foo = function () {
  return 1 + 1;
};

exports.compare = {
  'expression1': function () {
    foo();
  },
  'expression2': function () {
    foo();
  }
};

require('bench').runMain();
