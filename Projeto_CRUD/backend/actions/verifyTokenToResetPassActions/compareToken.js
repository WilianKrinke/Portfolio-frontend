const knex = require("../../connection/connection");
const deleteTokenFromDb = require('../resetPassActions/deleteTokenFromDb')

async function compareToken(objectDatas){
    try {
        
        const {token, idUser, todayTimeStamp} = objectDatas;
        const response = await knex('resetpass').where('idUser', idUser).select('hash', 'timeExpired')
    
        const hash = response[0].hash
        const timeExpired = response[0].timeExpired
    
        if (token === hash && todayTimeStamp <= timeExpired) {
           await deleteTokenFromDb(objectDatas)  
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