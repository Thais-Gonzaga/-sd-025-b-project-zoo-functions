const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => (employees
  .find((names) => names.firstName === employeeName
  || names.lastName === employeeName)
  || {});

module.exports = getEmployeeByName;
