# Albion API
NodeJS module to interact with the [Albion Online API](https://www.tools4albion.com/api_info.php).<br>
Currenly limited in scope, aiming at nearly full (known, see [this](https://www.tools4albion.com/api_info.php)) coverage.<br>
This project is **not recomended for production** in this stage of developement, a lot of breaking-changes are expected in the following versions.<br>
*Note: **Not affiliated with neither Albion Online nor Sandbox Interactive.***
## Instalation
```sh
npm install albion
```
## Example
```js
const AlbionAPI = require('.');

const playerName = 'aurora60';

AlbionAPI.getPlayerByName(playerName).then(player => {
    if(player === null) return console.log('Player not found!');

    if(player.guild !== null) console.log(`The name of ${player.name}'s guild is ${player.guild.name}.`);
    else console.log(`${player.name} doesn't have a guild.`);
});
```
## Docs
Not ready yet! But you can try these functions while you wait:
- `AlbionAPI.getPlayerById(id);`
- `AlbionAPI.getPlayerByName(name);`
- `AlbionAPI.getGuildById(id);`
- `AlbionAPI.getGuildByName(name);`
- `AlbionAPI.getAllianceById(id);`

*hint: loot at [this file](./typings/index.d.ts)*