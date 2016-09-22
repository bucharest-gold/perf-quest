'use strict';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const foo = (x) => x;

exports.compare = {
  'arrow1': function () {
    foo(1);
    array.forEach(a => a);
    array.filter(a => a % 2 === 0);
  },
  'arrow2': function () {
    foo(1);
    array.forEach(a => a);
    array.filter(a => a % 2 === 0);
  }
};

require('bench').runMain();

//  [Summary]:
//    ticks  total  nonlib   name
//    7184   75.4%   76.2%  JavaScript
//    2250   23.6%   23.8%  C++
//     964   10.1%   10.2%  GC
//      92    1.0%          Shared libraries
