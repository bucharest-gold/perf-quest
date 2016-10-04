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

exports.compare = {
  'class1': function () {
    new Game(1).play();
  },
  'class2': function () {
    new Game(1).play();
  }
};

require('bench').runMain();
