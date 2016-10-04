'use strict';

function gamee (s) {
  let score = s;
  const play = function () {
    score = score + 1;
    return score;
  };

  return Object.freeze({
    play
  });
}

exports.compare = {
  'classless1': function () {
    gamee(1).play();
  },
  'classless2': function () {
    gamee(1).play();
  }
};

require('bench').runMain();
