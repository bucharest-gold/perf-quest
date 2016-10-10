'use strict';

const foo = function () {
  return 1 + 1;
};

function bar () {
  return 1 + 1;
}

exports.compare = {
  'expression': function () {
    foo();
  },
  'statement': function () {
    bar();
  }
};

require('bench').runMain();
