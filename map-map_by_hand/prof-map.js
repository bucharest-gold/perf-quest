'use strict';

const games = [
  { name: 'Doom', year: 1993 },
  { name: 'Golden Axe', year: 1989 },
  { name: 'Gauntlet', year: 1985 },
  { name: 'Frostbite', year: 1983 },
  { name: 'Tiger Heli', year: 1985 }
];

exports.compare = {
  'mapp1': function () {
    let names = games.map(g => g.name); // eslint-disable-line
  },
  'mapp2': function () {
    let names = games.map(g => g.name); // eslint-disable-line
  }
};

require('bench').runMain();
