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

exports.compare = {
  'class1': function () {
    new Game().play();
  },
  'class2': function () {
    new Game().play();
  }
};

require('bench').runMain();
