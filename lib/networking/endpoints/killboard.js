const request = require('../request');

const base = 'https://gameinfo.albiononline.com/api/gameinfo/';

module.exports.search = q => `${base}search?q=${q}`;

module.exports.players = id => `${base}players/${id}`;
module.exports.guilds = id => `${base}guilds/${id}`;
module.exports.alliances = id => `${base}alliances/${id}`;
