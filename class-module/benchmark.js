'use strict';

class Game {
  constructor () {
    this.score = 0;
  }

  play () {
    this.score = this.score + 1;
    return this.score;
  }
}

const Gamee = (function () {
  let score = 0;
  const play = function () {
    score = score + 1;
    return score;
  };

  return {
    play: play
  };
})();

exports.compare = {
  'class': function () {
    new Game().play();
  },
  'module': function () {
    Gamee.play();
  }
};

require('bench').runMain();
