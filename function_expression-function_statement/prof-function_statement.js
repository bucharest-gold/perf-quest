'use strict';

function bar () {
  return 1 + 1;
}

exports.compare = {
  'statement1': function () {
    bar();
  },
  'statement2': function () {
    bar();
  }
};

require('bench').runMain();
