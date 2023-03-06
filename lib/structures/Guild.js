class Guild {
    constructor(name, id, alliance, memberCount, founded) {
        this.name = name;
        this.id = id;
        this.alliance = alliance;
        this.memberCount = memberCount;
        this.founded = new Date(founded);
    }
}

module.exports = Guild;
