'use strict';

function Player (name, points) {
  this.name = name;
  this.points = points;
}

exports.compare = {
  'hidden1': function () {
    let elf = new Player('Elf', 100); // eslint-disable-line
    let mage = new Player('Foo', 200);
    mage.mana = 8; // extra here.
  },
  'hidden2': function () {
    let elf = new Player('Elf', 100); // eslint-disable-line
    let mage = new Player('Foo', 200);
    mage.mana = 8; // extra here.
  }
};

require('bench').runMain();
