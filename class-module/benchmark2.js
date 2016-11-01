'use strict';

const Benchmark = require('benchmark');

class Game {
  constructor () {
    this.score = 0;
  }

  play () {
    this.score = this.score + 1;
    return this.score;
  }
}

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

function a () {
  new Game().play();
}

function b () {
  new Gamee().play();
}

const suite = new Benchmark.Suite();

suite
.add('class', a)
.add('module', b)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => {
  console.log(`Fastest is: ${suite.filter('fastest').map('name')}`);
  console.log(`[${Benchmark.platform.description}]`);
})
.run();
