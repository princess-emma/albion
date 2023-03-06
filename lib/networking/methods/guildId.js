const search = require('../endpoints/search');

module.exports = async (name) => {
    const data = (await search(name)).guilds;
    for(const pdata of data) {
        if(pdata.Name.toLowerCase() === name.toLowerCase()) {
            return pdata.Id
        };
    }
    return '';
}