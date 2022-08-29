const data = require('../data/zoo_data');

const ageGroup = (entrants, condition) => entrants.filter(condition).map((e) => e.age).length;

const countEntrants = (entrants) => ({
  adult: ageGroup(entrants, (ages) => ages.age >= 18 && ages.age < 50),
  child: ageGroup(entrants, (ages) => ages.age < 18),
  senior: ageGroup(entrants, (ages) => ages.age >= 50),
});

const calculateEntry = (entrants) => {
  if (!Array.isArray(entrants) || (!entrants)) return 0;
  return (([countEntrants(entrants)].map((obj) => obj.adult) * 49.99)
  + ([countEntrants(entrants)].map((obj) => obj.child) * 20.99)
  + ([countEntrants(entrants)].map((obj) => obj.senior) * 24.99));
};

module.exports = { calculateEntry, countEntrants };
