'use strict';

const Benchmark = require('benchmark');

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

  return Object.freeze({
    play
  });
}

function a () {
  new Game(1).play();
}

function b () {
  gamee(1).play();
}

const suite = new Benchmark.Suite();

suite
.add('class', a)
.add('classless', b)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => console.log(`Fastest is: ${suite.filter('fastest').map('name')}`))
.run();
