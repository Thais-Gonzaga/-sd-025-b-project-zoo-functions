const { species, hours } = require('../data/zoo_data');

const array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const availabilitys = (string) => {
//   if (typeof string === 'string') {
//     return species.find((names) => (names.name === string)).availability;
//   }
// };
// const teste = () => array.reduce((acc, curr) => {
//   acc[curr] = { officeHour: 'Open from am until pm', exhibition: 'The zoo will be closed!' };
//   return acc;
// }, {});

// const func = (weekday) => {
//   const result = teste();
//   species.forEach(({ availability, name }) => {
//     availability.forEach((day) => {
//       if (Array.isArray(result[day].exhibition)) {
//         return result[day].exhibition.push(name);
//       }
//       result[day].exhibition = [name];
//     });
//   });
//   return result;
// };
const responses = () => species.reduce((resultAcc, { availability, name }) => {
  const result = resultAcc;
  availability.forEach((day) => {
    if (result[day]) return result[day].exhibition.push(name);
    result[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: [name],
    };
  });
  return result;
}, {});
const createObj = (weekday) => {
  const response = responses();
  const faltantes = array.filter((day) => !response[day]);
  faltantes.forEach((day) => {
    response[day] = ({
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    }
    );
  });
  return weekday && array.includes(weekday) ? { [weekday]: response[weekday] } : response;
};

const s = (stringName) => species.find(({ name }) => name === stringName);

const getSchedule = (weekday) => {
  if (s(weekday)) return s(weekday).availability;
  return createObj(weekday);
};

// console.log(func());

// const hoursOpen = (scheduleTarget) => {
//   if (!scheduleTarget) {
//     const obj = {
//       // array.find((day) =>(day === ))
//     };
//   }
//   return obj;
// };

// const getSchedule = (scheduleTarget) => hoursOpen(scheduleTarget);// availabilitys(scheduleTarget) ||

// console.log(getSchedule('lions'));
// console.log(getSchedule());
module.exports = getSchedule;
