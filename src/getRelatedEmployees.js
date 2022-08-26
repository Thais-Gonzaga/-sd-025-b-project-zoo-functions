const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => (employees.some((e) => (e.managers).find((j) => (j === id))));

const teste = (managerId) => (employees
  .filter((e) => (e.managers).find((j) => (j === managerId))))
  .map((el) => `${el.firstName} ${el.lastName}`);

const getRelatedEmployees = (managerId) => {
  console.log(teste(managerId));
  if (teste(managerId).length !== 0) return teste(managerId);
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
