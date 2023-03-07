const PlayerAvatar = require('./PlayerAvatar');

class Player {
    static maxLife = 10 * 60 * 1000;
    static cache = new Map();
    constructor(name, id, guild, avatar = {}) {
        this.name = name;
        this.id = id;
        this.guild = guild;
        this.avatar = new PlayerAvatar(avatar.code, avatar.ringCode);

        Player.cache.set(this.id, { player: this, timestamp: Date.now() });
    }

    get alliance() {
        return this.guild?.alliance || null;
    }
}

module.exports = Player;
