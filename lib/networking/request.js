const request = require('./http');

const BASE = 'https://gameinfo.albiononline.com/api/gameinfo/';

module.exports = async (url, params = {}) => {
    let path = BASE + url + '?';
    for(const key in params) {
        path += `${key}=${params[key]}&`;
    }
    path = path.substring(0, path.length - 1);
    return await request(path);
}