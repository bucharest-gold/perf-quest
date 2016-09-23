'use strict';

function Player (name, points) {
  this.name = name;
  this.points = points;
}

exports.compare = {
  'no_extra_hidden1': function () {
    let orc = new Player('Orc', 95); // eslint-disable-line
    let goblin = new Player('Goblin', 15); // eslint-disable-line
  },
  'no_extra_hidden2': function () {
    let orc = new Player('Orc', 95); // eslint-disable-line
    let goblin = new Player('Goblin', 15); // eslint-disable-line
  }
};

require('bench').runMain();

