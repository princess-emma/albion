const players = require('../networking/endpoints/players');
const Player = require('../structures/Player');
const getGuildById = require('./getGuildById');

module.exports = async id => {
    const playerdata = await players(id);
    const guild = await getGuildById(playerdata.GuildId);
    return new Player(playerdata.Name, playerdata.Id, guild, { code: playerdata.Avatar, ringCode: playerdata.AvatarRing });
}