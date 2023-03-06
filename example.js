const AlbionAPI = require('albion');

const playerName = 'Aurora60';

AlbionAPI.getPlayerByName(playerName).then(player => {
    if(player === null) return console.log('Player not found!');

    if(player.alliance !== null) console.log(`${player.name}'s alliance has ${player.alliance.memberCount} members.`);
    else console.log(`${player.name} doesn't have an alliance.`);
});