const guilds = require('../networking/endpoints/guilds');
const Guild = require('../structures/Guild');
const getAllianceById = require('./getAllianceById');

module.exports = async id => {
    if(!id) return null;
    const guilddata = await guilds(id);
    if(!guilddata) return null;
    const alliance = await getAllianceById(guilddata.AllianceId);
    
    return new Guild(guilddata.Name, guilddata.Id, alliance, guilddata.MemberCount, guilddata.Founded);
}