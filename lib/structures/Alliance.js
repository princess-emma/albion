class Alliance {
    constructor(name, id, tag, memberCount, founded) {
        this.name = name;
        this.id = id;
        this.tag = tag;
        this.memberCount = memberCount;
        this.founded = new Date(founded);
    }
}

module.exports = Alliance;
