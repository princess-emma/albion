const getGuildById = require('./getGuildById');
const guildId = require('../networking/methods/guildId');

module.exports = async name => {
    const id = await guildId(name.toLowerCase());
    if(!id) return null;
    return await getGuildById(id);
}