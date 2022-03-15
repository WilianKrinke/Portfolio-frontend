const getChangePassToken = require("../../repository/verifyTokenRepository/getChangePassToken.repository");
const deleteTokenFromDb = require("./deleteTokenFromDb");

async function compareToken(objectDatas){
    const {token, todayTimeStamp} = objectDatas
    const response =  await getChangePassToken(objectDatas)        
    
    const hash = response[0].hash
    const timeExpired = response[0].timeExpired    

    if (token === hash && todayTimeStamp <= timeExpired) {            
        deleteTokenFromDb(objectDatas)  
        return true;
    } else {      
        return false;
    }
    
}

module.exports = compareToken;