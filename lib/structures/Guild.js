const actions = require('../actions');

class Guild {
    static maxLife = 10 * 60 * 1000;
    static cache = new Map();
    constructor(name, id, alliance, memberCount, founded, founderId) {
        this.name = name;
        this.id = id;
        this.alliance = alliance;
        this.memberCount = memberCount;
        this.founded = new Date(founded);
        this.founderId = founderId

        Guild.cache.set(this.id, { guild: this, timestamp: Date.now() });
    }

    async getFounder() {
        return await actions.getPlayerById(this.founderId);
    }
}

module.exports = Guild;
