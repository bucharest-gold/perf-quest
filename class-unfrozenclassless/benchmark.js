'use strict';

class Game {
  constructor (score) {
    this.score = score;
  }

  play () {
    this.score = this.score + 1;
    return this.score;
  }
}

function gamee (s) {
  let score = s;
  const play = function () {
    score = score + 1;
    return score;
  };

  return {
    play
  };
}

exports.compare = {
  'class': function () {
    new Game(1).play();
  },
  'classless': function () {
    gamee(1).play();
  }
};

require('bench').runMain();
