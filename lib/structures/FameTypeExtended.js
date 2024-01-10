const FameType = require('./FameType');

class FameTypeExtended extends FameType {
    constructor(total, royal, outlands, avalon, hellgate, corrupted, mists = 0) {
        super(total, royal, outlands, avalon);
        this.hellgate = hellgate;
        this.corrupted = corrupted;
        this.mists = mists;
    }
}

module.exports = FameTypeExtended;
