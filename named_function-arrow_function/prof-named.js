'use strict';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function namedFoo (x) {
  return x;
}

exports.compare = {
  'named1': function () {
    namedFoo(1);
    array.forEach(function (a) {
      return a;
    });
    array.filter(function (a) {
      return a % 2 === 0;
    });
  },
  'named2': function () {
    namedFoo(1);
    array.forEach(function (a) {
      return a;
    });
    array.filter(function (a) {
      return a % 2 === 0;
    });
  }
};

require('bench').runMain();

//  [Summary]:
//    ticks  total  nonlib   name
//    7277   76.4%   76.9%  JavaScript
//    2183   22.9%   23.1%  C++
//     961   10.1%   10.2%  GC
//      67    0.7%          Shared libraries
