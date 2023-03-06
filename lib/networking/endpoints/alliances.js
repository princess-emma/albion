const request = require('../request');

const endpoint = (id) => `alliances/${id}`;

module.exports = async (id) => await request(endpoint(id));