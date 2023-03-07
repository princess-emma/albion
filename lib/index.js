const {
    getPlayerById,
    getPlayerByName,
    getGuildById,
    getGuildByName,
    getAllianceById
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

    Alliance,
    Guild,
    Player,
    PlayerAvatar
};
