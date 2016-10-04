'use strict';

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

exports.compare = {
  'mapByHand1': function () {
    mapByHand();
  },
  'mapByHand2': function () {
    mapByHand();
  }
};

require('bench').runMain();
