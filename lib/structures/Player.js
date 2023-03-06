const PlayerAvatar = require('./PlayerAvatar');

class Player {
    constructor(name, id, guild, avatar = {}) {
        this.name = name;
        this.id = id;
        this.guild = guild;
        this.avatar = new PlayerAvatar(avatar.code, avatar.ringCode);
    }

    get alliance() {
        return this.guild?.alliance || null;
    }
}

module.exports = Player;
