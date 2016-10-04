'use strict';

const games = [
  { name: 'Doom', year: 1993 },
  { name: 'Golden Axe', year: 1989 },
  { name: 'Gauntlet', year: 1985 },
  { name: 'Frostbite', year: 1983 },
  { name: 'Tiger Heli', year: 1985 }
];

exports.compare = {
  'filterr1': function () {
    let weAreOld = games.filter(g => g.year <= 1985); // eslint-disable-line
  },
  'filterr2': function () {
    let weAreOld = games.filter(g => g.year <= 1985); // eslint-disable-line
  }
};

require('bench').runMain();
