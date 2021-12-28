const knex = require('../../connection/connection')
const datefns = require('date-fns')

async function persistDatas(userData,token){
    try {
        const {email,idUser} = userData;

        const today = new Date()    
        const todayTimeStamp = datefns.getTime(today)

        const hashExpires = todayTimeStamp + (3600000 * 24)

        const response = await knex('resetpass').insert({
            idUser: idUser,
            hash: token,
            timeExpired: hashExpires
        })

        if (response[0] === undefined) {
            const objectResponse = {
                wasRegistered: false,
            }
            return objectResponse

        } else {
            const objectResponse = {
                wasRegistered: true,
                email,
                idUser,
                token
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

module.exports = persistDatas;