const {
    getPlayerById,
    getPlayerByName,
    getGuildById,
    getGuildByName,
    getAllianceById,

    getPlayerId,
    getGuildId
} = require('./actions');

const Alliance = require('./structures/Alliance');
const Guild = require('./structures/Guild');
const Player = require('./structures/Player');
const PlayerAvatar = require('./structures/PlayerAvatar');

module.exports = {
    getPlayerById,
    getPlayerByName,
    getGuildById,
    getGuildByName,
    getAllianceById,

    getPlayerId,
    getGuildId,

    Alliance,
    Guild,
    Player,
    PlayerAvatar
};
