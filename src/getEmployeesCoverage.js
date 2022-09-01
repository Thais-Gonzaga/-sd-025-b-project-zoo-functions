const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const createLocation = (array) => array.map((animalID) => {
  const { location } = species.find(({ id }) => animalID === id);
  return location;
});

const createSpecies = (array) => array.map((animalID) => {
  const { name } = species.find(({ id }) => animalID === id);
  return name;
});

// const validateValues = () => {
//   if (!['AM', 'PM'].includes(abbreviation)) {
//     throw new Error('The abbreviation must be \'AM\' or \'PM\'');
//   }
// };

const createObj = (values) => {
  const employee = employees.find((emp) => (
    emp.firstName === values
  || emp.id === values
  || emp.lastName === values
  ));
  if (!employee) throw new Error('Informações inválidas');
  const arrayResponsi = employee.responsibleFor;
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: createSpecies(arrayResponsi),
    locations: createLocation(arrayResponsi),
  };
};

const createAll = () => {
  const all = employees.map((emp) => emp.firstName);
  return all.map((names) => createObj(names));
};

const getEmployeesCoverage = (obj) => {
  if (!obj) return createAll();
  const [values] = Object.values(obj);
  return createObj(values);
};

module.exports = getEmployeesCoverage;
