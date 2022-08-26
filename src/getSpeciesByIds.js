const data = require('../data/zoo_data');

const { species } = data;

const callback = (ids) => (species.find((element) => element.id === ids) || []);

const getSpeciesByIds = (...ids) => ids.map(callback).filter((obj) => obj);

module.exports = getSpeciesByIds;
