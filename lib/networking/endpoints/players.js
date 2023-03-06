const request = require('../request');

const endpoint = (id) => `players/${id}`;

module.exports = async (id) => await request(endpoint(id));