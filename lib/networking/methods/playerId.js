const search = require('../endpoints/search');

module.exports = async (name) => {
    const data = (await search(name)).players;
    for(const pdata of data) {
        if(pdata.Name.toLowerCase() === name.toLowerCase()) {
            return pdata.Id
        };
    }
    return '';
}