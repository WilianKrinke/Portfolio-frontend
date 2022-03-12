const knex = require("../../connection/connection");
const deleteTokenFromDb = require("./deleteTokenFromDb");

async function compareToken(objectDatas){          
    const {token, idUser, todayTimeStamp} = objectDatas;
    const response = await knex('resetpass').where('idUser', idUser).select('hash', 'timeExpired')
    
    if(response[0] === undefined){
        throw new Error('Token Not Valid')
    } else{
        const hash = response[0].hash
        const timeExpired = response[0].timeExpired    
    
        if (token === hash && todayTimeStamp <= timeExpired) {            
            deleteTokenFromDb(objectDatas)  
            return true;
        } else {      
            return false;
        }
    }
}

module.exports = compareToken;