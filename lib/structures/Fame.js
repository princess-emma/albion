const FameType = require('./FameType');
const FameTypeExtended = require('./FameTypeExtended');

class PlayerFame {
    constructor(pve = {}, gathering = {}, crafting = {}, fishing = 0, farming = 0) {
        this.pve = new FameTypeExtended(pve.total, pve.royal, pve.outlands, pve.avalon, pve.hellgate, pve.corrupted, pve.mists);
        this.gathering = {
            fiber: new FameType(gathering.fiber.total, gathering.fiber.royal, gathering.fiber.outlands, gathering.fiber.avalon),
            hide: new FameType(gathering.hide.total, gathering.hide.royal, gathering.hide.outlands, gathering.hide.avalon),
            ore: new FameType(gathering.ore.total, gathering.ore.royal, gathering.ore.outlands, gathering.ore.avalon),
            rock: new FameType(gathering.rock.total, gathering.rock.royal, gathering.rock.outlands, gathering.rock.avalon),
            wood: new FameType(gathering.wood.total, gathering.wood.royal, gathering.wood.outlands, gathering.wood.avalon),
            all: new FameType(gathering.all.total, gathering.all.royal, gathering.all.outlands, gathering.all.avalon)
        }
        this.crafting = new FameType(crafting.total, crafting.royal, crafting.outlands, crafting.avalon);
        this.fishing = fishing;
        this.farming = farming;
    }
}

module.exports = PlayerFame;
