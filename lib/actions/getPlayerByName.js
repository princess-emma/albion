const getPlayerById = require('./getPlayerById');
const playerId = require('../networking/methods/playerId');

module.exports = async name => {
    const id = await playerId(name.toLowerCase());
    if(!id) return null;
    return await getPlayerById(id);
}