'use strict';

const Benchmark = require('benchmark');

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

function a () {
  let scores = player.reduce((sum, p) => sum + p.score, 0); // eslint-disable-line
}

function b () {
  reduceByHand();
}

const suite = new Benchmark.Suite();

suite
.add('reduce', a)
.add('reduceByHand', b)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => {
  console.log(`Fastest is: ${suite.filter('fastest').map('name')}`);
  console.log(`[${Benchmark.platform.description}]`);
})
.run();
