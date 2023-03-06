# Albion API
NodeJS module to interact with the [Albion Online API](https://www.tools4albion.com/api_info.php).<br>
Currenly limited in scoope, aiming at nearly full (known, see [this](https://www.tools4albion.com/api_info.php)) coverage.<br>
*Note: **Not affiliated with neither Albion Online nor Sandbox Interactive.***
## Instalation
```sh
npm install albion
```
## Example
```js
const AlbionAPI = require('albion');

const playerName = 'Aurora60';

AlbionAPI.getPlayerByName(playerName).then(player => {
    if(player.alliance !== null) console.log(`${player.name}'s alliance has ${player.alliance.memberCount} members.`);
    else console.log(`${player.name} doesn't have an alliance.`);
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