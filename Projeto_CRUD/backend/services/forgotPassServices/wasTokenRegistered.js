const knex = require('../../connection/connection')
const datefns = require('date-fns');
const insertTokenInDb = require('../../repository/forgetPassRepository/insertTokenInDb.repository');

async function wasTokenRegistered(userData,token){
    try {
        const {email,idUser} = userData;

        const today = new Date()    
        const todayTimeStamp = datefns.getTime(today)
        const hashExpires = todayTimeStamp + 900000 // 15 minutos

        const response = await insertTokenInDb(idUser, token, hashExpires)

        if (response) {
            const objectResponse = {
                wasRegistered: true,
                email,
                idUser,
                token
            }
            return objectResponse
        } else {
            const objectResponse = {
                wasRegistered: false,
            }
            return objectResponse
        }
    } catch (error) {
        console.log(error)
        const objectResponse = {
            wasRegistered: false,
        }
        return objectResponse
    } 
}

module.exports = wasTokenRegistered;