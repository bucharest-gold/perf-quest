'use strict';

const player = [
  { score: 10 },
  { score: 20 },
  { score: 30 },
  { score: 40 },
  { score: 50 }
];

exports.compare = {
  'reducee1': function () {
    let scores = player.reduce((sum, p) => sum + p.score, 0); // eslint-disable-line
  },
  'reducee2': function () {
    let scores = player.reduce((sum, p) => sum + p.score, 0); // eslint-disable-line
  }
};

require('bench').runMain();
