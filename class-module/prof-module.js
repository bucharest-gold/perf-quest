'use strict';

const Gamee = function () {
  let score = 0;
  const play = function () {
    score = score + 1;
    return score;
  };

  return {
    play: play
  };
};

exports.compare = {
  'module1': function () {
    new Gamee().play();
  },
  'module2': function () {
    new Gamee().play();
  }
};

require('bench').runMain();
