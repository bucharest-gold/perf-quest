'use strict';

const Benchmark = require('benchmark');

const games = [
  { name: 'Doom', year: 1993 },
  { name: 'Golden Axe', year: 1989 },
  { name: 'Gauntlet', year: 1985 },
  { name: 'Frostbite', year: 1983 },
  { name: 'Tiger Heli', year: 1985 }
];

function mapByHand () {
  let names = [];
  for (let i = 0; i < games.length; i++) {
    names.push(games[i].name);
  }
}

function a () {
  let names = games.map(g => g.name); // eslint-disable-line
}

function b () {
  mapByHand();
}

const suite = new Benchmark.Suite();

suite
.add('map', a)
.add('mapByHand', b)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => {
  console.log(`Fastest is: ${suite.filter('fastest').map('name')}`);
  console.log(`[${Benchmark.platform.description}]`);
})
.run();
