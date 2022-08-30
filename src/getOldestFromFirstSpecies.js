const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (ids) => {
  const [arrayResponsi] = employees.find(({ id }) => id === ids).responsibleFor;
  const { residents } = species.find(({ id }) => id === arrayResponsi);
  const [old] = residents.sort((a, b) => b.age - a.age);
  return Object.values(old);
};

module.exports = getOldestFromFirstSpecies;
