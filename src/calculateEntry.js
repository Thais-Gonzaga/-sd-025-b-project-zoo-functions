const data = require('../data/zoo_data');

const childs = (entrants) => entrants.filter((ages) => ages.age < 18).map((e) => e.age).length;
const adults = (entrants) => (
  entrants.filter((ages) => ages.age >= 18 && ages.age < 50).map((e) => e.age).length);
const seniors = (entrants) => entrants.filter((ages) => ages.age >= 50).map((e) => e.age).length;
const countEntrants = (entrants) => ({
  adult: adults(entrants),
  child: childs(entrants),
  senior: seniors(entrants),
});

const calculateEntry = (entrants) => {
  if (!Array.isArray(entrants) || (!entrants)) return 0;
  return (([countEntrants(entrants)].map((obj) => obj.adult) * 49.99)
  + ([countEntrants(entrants)].map((obj) => obj.child) * 20.99)
  + ([countEntrants(entrants)].map((obj) => obj.senior) * 24.99));
};

module.exports = { calculateEntry, countEntrants };
