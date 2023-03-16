const FameType = require('./FameType');

class FameTypeExtended extends FameType {
    constructor(total, royal, outlands, avalon, hellgate, corrupted) {
        super(total, royal, outlands, avalon);
        this.hellgate = hellgate;
        this.corrupted = corrupted;
    }
}

module.exports = FameTypeExtended;
