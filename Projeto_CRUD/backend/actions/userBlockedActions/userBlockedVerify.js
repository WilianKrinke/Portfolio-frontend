const knex = require('../../connection/connection')

async function userBlockedVerify(idUser){
    const response = await knex('users').where('idUser', idUser).select('isblock','blocked_days')

    if (response[0] === undefined) {
        throw new Error('Server Error - response is undefined - isUserBlockedVerify')
    } else {
        const {isblock,blocked_days} = response[0]

        if (isblock === 0) {
            const objectResponse = {
                isblock: false,
                blocked_days
            }

            return objectResponse
        } else {
            const objectResponse = {
                isblock: true,
                blocked_days
            }

            return objectResponse
        }
    }
}

module.exports = userBlockedVerify;