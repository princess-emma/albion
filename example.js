const AlbionAPI = require('albion');

const playerName = 'aurora60';

AlbionAPI.getPlayerByName(playerName).then(player => {
    if(player === null) return console.log('Player not found!');

    if(player.guild !== null) console.log(`The name of ${player.name}'s guild is ${player.guild.name}.`);
    else console.log(`${player.name} doesn't have a guild.`);
});