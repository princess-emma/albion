const request = require('../request');

const endpoint = 'search';

module.exports = async (q) => await request(endpoint, { q });