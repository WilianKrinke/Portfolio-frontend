const knex = require("../../connection/connection");

async function compareToken(objectDatas){
    try {
        const {token, idUser, todayTimeStamp} = objectDatas;
        const response = await knex('resetpass').where('idUser', idUser).select('hash', 'timeExpired')
    
        const {hash, timeExpired} = response[0]
    
        if (token === hash && todayTimeStamp <= timeExpired) {       
            return true;
        } else {       
            return false;
        }        
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = compareToken;