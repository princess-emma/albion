const getAllianceById = require('./actions/getAllianceById');
const getGuildById = require('./actions/getGuildById');
const getGuildByName = require('./actions/getGuildByName');
const getPlayerById = require('./actions/getPlayerById');
const getPlayerByName = require('./actions/getPlayerByName');

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
