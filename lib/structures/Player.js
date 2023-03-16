const Fame = require('./Fame');

class Player {
    static maxLife = 10 * 60 * 1000;
    static cache = new Map();
    constructor(name, id, guild = null, avatar = {}, fame = {}) {
        this.name = name;
        this.id = id;
        this.guild = guild;
        this.avatar = {
            code: avatar.code ?? "",
            ringCode: avatar.ringCode ?? ""
        }
        this.fame = new Fame(...Object.values(fame));

        Player.cache.set(this.id, { player: this, timestamp: Date.now() });
    }

    get alliance() {
        return this.guild?.alliance || null;
    }
}

module.exports = Player;
