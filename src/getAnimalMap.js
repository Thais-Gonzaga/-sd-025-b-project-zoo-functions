const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const arrayLocation = ['NE', 'NW', 'SE', 'SW'];

const locationAnimals = () => arrayLocation.reduce((acc, curr) => {
  const arrayAnimals = species.filter(({ location }) => curr === location);
  acc[curr] = arrayAnimals.map((e) => e.name);
  return acc;
}, {});

const teste = (animals, options) => {
  const obj = {};
  let { residents } = species.find((e) => e.name === animals);
  if (options.sex) residents = residents.filter(({ sex }) => sex === options.sex);
  const names = residents.map((f) => f.name);
  if (options.sorted) names.sort();
  obj[animals] = names;
  return obj;
};

const getAnimalMap = (options) => {
  const locations = locationAnimals();
  if (!options || !options.includeNames) return locations;
  return arrayLocation.reduce(((result, key) => ({
    ...result, [key]: locations[key].map((animals) => teste(animals, options)),
  })), {});
};

module.exports = getAnimalMap;
