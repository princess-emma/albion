const request = require('../request');

const endpoint = (id) => `guilds/${id}`;

module.exports = async (id) => await request(endpoint(id));