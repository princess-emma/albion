const https = require('https');

module.exports = (url) => {
    return new Promise((resolve, reject) => {
        try{
            https.get(url, (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });
            
            }).on("error", (err) => {
                reject(err);
            });
        } catch (err) {
            reject(err);
        }
    })
}