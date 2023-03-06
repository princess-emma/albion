const alliances = require('../networking/endpoints/alliances');
const Alliance = require('../structures/Alliance');

module.exports = async id => {
    if(!id) return null;
    const alliancedata = await alliances(id);
    if(!alliancedata) return null;
    
    return new Alliance(alliancedata.AllianceName, alliancedata.AllianceId, alliancedata.AllianceTag, alliancedata.NumPlayers, alliancedata.Founded);
}