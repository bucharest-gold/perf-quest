'use strict';

const sarray = [1, 2, 3];
const marray = Array.from({length: 30000}, () => Math.floor(Math.random() * 9));
const larray = Array.from({length: 64001}, () => Math.floor(Math.random() * 9));

function each () {
  sarray.forEach(e => {
    e + 1;
  });
  marray.forEach(e => {
    e + 1;
  });
  larray.forEach(e => {
    e + 1;
  });
}

exports.compare = {
  'forEach1': function () {
    each();
  },
  'forEach2': function () {
    each();
  }
};

require('bench').runMain();
