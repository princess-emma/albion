const Player = require('./structures/Player');
const Guild = require('./structures/Guild');
const Alliance = require('./structures/Alliance');

const endpoints = require('./networking/endpoints/killboard');
const request = require('./networking/request');

async function getPlayerById(id) {
    const cache = Player.cache.get(id);
    if(cache) {
        const now = Date.now();
        const diff = now - cache.timestamp;
        if(diff < Player.maxLife) {
            return cache.player;
        }
    }
    const playerdata = await request(endpoints.players(id));
    const guild = await getGuildById(playerdata.GuildId);
    return new Player(playerdata.Name, playerdata.Id, guild, { code: playerdata.Avatar, ringCode: playerdata.AvatarRing });
}
async function getPlayerByName(name) {
    const id = await getPlayerId(name.toLowerCase());
    if(!id) return null;
    return await getPlayerById(id);
}
async function getGuildById(id) {
    const cache = Guild.cache.get(id);
    if(cache) {
        const now = Date.now();
        const diff = now - cache.timestamp;
        if(diff < Guild.maxLife) {
            return cache.guild;
        }
    }
    if(!id) return null;
    const guilddata = await request(endpoints.guilds(id));
    if(!guilddata) return null;
    const alliance = await getAllianceById(guilddata.AllianceId);
    
    return new Guild(guilddata.Name, guilddata.Id, alliance, guilddata.MemberCount, guilddata.Founded, guilddata.FounderId);
}
async function getGuildByName(name) {
    const id = await getGuildId(name.toLowerCase());
    if(!id) return null;
    return await getGuildById(id);
}
async function getAllianceById(id) {
    const cache = Alliance.cache.get(id);
    if(cache) {
        const now = Date.now();
        const diff = now - cache.timestamp;
        if(diff < Alliance.maxLife) {
            return cache.alliance;
        }
    }
    if(!id) return null;
    const alliancedata = await request(endpoints.alliances(id));
    if(!alliancedata) return null;
    const guildIds = [];
    for(const guilddata of alliancedata.Guilds) {
        guildIds.push(guilddata.Id);
    }
    
    return new Alliance(alliancedata.AllianceName, alliancedata.AllianceId, alliancedata.AllianceTag, alliancedata.NumPlayers, alliancedata.Founded, alliancedata.FounderId, guildIds);
}

async function getPlayerId(name) {
    const data = (await request(endpoints.search(name))).players;
    for(const pdata of data) {
        if(pdata.Name.toLowerCase() === name.toLowerCase()) {
            return pdata.Id
        };
    }
    return '';
}
async function getGuildId(name) {
    const data = (await request(endpoints.search(name))).guilds;
    for(const pdata of data) {
        if(pdata.Name.toLowerCase() === name.toLowerCase()) {
            return pdata.Id
        };
    }
    return '';
}

module.exports.getPlayerById = getPlayerById;
module.exports.getPlayerByName = getPlayerByName;
module.exports.getGuildById = getGuildById;
module.exports.getGuildByName = getGuildByName;
module.exports.getAllianceById = getAllianceById;

module.exports.getPlayerId = getPlayerId;
module.exports.getGuildId = getGuildId;
