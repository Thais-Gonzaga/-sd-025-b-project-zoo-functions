const data = require('../data/zoo_data');

const { species } = data;

const teste = (animal) => {
  const { specie, sex } = animal;
  const qtd = Object.keys(animal).length;
  if (qtd === 1) return (species.find((e) => (e.name === specie))).residents.length;
  return (species.find((e) => (e.name === specie))).residents.filter((j) => j.sex === sex).length;
};

const teste1 = () => species.reduce((acc, curr) => {
  acc[curr.name] = curr.residents.length;
  return acc;
}, {});

const countAnimals = (animal) => ((!animal) ? teste1() : teste(animal));

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
