const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) => (species
  .find((element) => (element.name === animal)))
  .residents.every((e) => e.age >= age);

module.exports = getAnimalsOlderThan;
