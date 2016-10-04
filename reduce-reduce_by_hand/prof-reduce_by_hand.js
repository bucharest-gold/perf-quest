'use strict';

const player = [
  { score: 10 },
  { score: 20 },
  { score: 30 },
  { score: 40 },
  { score: 50 }
];

function reduceByHand () {
  let scores = 0; // eslint-disable-line
  for (let i = 0; i < player.length; i++) {
    scores += player[i].score;
  }
}

exports.compare = {
  'reduceByHand1': function () {
    reduceByHand();
  },
  'reduceByHand2': function () {
    reduceByHand();
  }
};

require('bench').runMain();
