'use strict';

const Benchmark = require('benchmark');

function Player (name, points) {
  this.name = name;
  this.points = points;
}

function a () {
  let elf = new Player('Elf', 100); // eslint-disable-line
  let mage = new Player('Foo', 200);
  mage.mana = 8; // extra here.
}

function b () {
  let orc = new Player('Orc', 95); // eslint-disable-line
  let goblin = new Player('Goblin', 15); // eslint-disable-line
}

const suite = new Benchmark.Suite();

suite
.add('hidden', a)
.add('no_extra_hidden', b)
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', () => console.log(`Fastest is: ${suite.filter('fastest').map('name')}`))
.run();
