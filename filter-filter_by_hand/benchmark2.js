'use strict';

const Benchmark = require('benchmark');

const games = [
  { name: 'Doom', year: 1993 },
  { name: 'Golden Axe', year: 1989 },
  { name: 'Gauntlet', year: 1985 },
  { name: 'Frostbite', year: 1983 },
  { name: 'Tiger Heli', year: 1985 }
];

function filterByHand () {
  let oldGames = [];
  for (let i = 0; i < games.length; i++) {
    if (games[i].year <= 1985) {
      oldGames.push(games[i]);
    }
  }
}

function a () {
  let weAreOld = games.filter(g => g.year <= 1985); // eslint-disable-line
}

function b () {
  filterByHand();
}

const suite = new Benchmark.Suite();

suite
.add('filterr', a)
.add('filterByHand', b)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => {
  console.log(`Fastest is: ${suite.filter('fastest').map('name')}`);
  console.log(`[${Benchmark.platform.description}]`);
})
.run();
