const actions = require('../actions');

class Alliance {
    static maxLife = 10 * 60 * 1000;
    static cache = new Map();
    constructor(name, id, tag, memberCount, founded, founderId, guildIds = []) {
        this.name = name;
        this.id = id;
        this.tag = tag;
        this.memberCount = memberCount;
        this.founded = new Date(founded);
        this.founderId = founderId;
        this.guildIds = [];
        for(const id of guildIds) {
            this.guildIds.push(id);
        }
        this.guildCount = this.guildIds.length;

        Alliance.cache.set(this.id, { alliance: this, timestamp: Date.now() });
    }

    async getFounder() {
        return await actions.getPlayerById(this.founderId);
    }

    async getGuilds(max) {
        const m = max && typeof max === 'number' && max > 0 ? max : Infinity;
        const guilds = [];
        for(let i = 0; i < this.guildIds.length && i < m; i++) {
            const id = this.guildIds[i];
            const guild = await actions.getGuildById(id);
            if(guild !== null) guilds.push(guild);
        }
        return guilds;
    }
}

module.exports = Alliance;
