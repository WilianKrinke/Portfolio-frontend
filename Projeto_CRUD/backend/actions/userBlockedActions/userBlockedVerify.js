const knex = require('../../connection/connection')

async function userBlockedVerify(idUser){
    const response = await knex('users').where('idUser', idUser).select('isblock')

    if (response[0] === undefined) {
        throw new Error('Server Error - response is undefined - isUserBlockedVerify')
    } else {
        const {isblock} = response[0]

        if (isblock === 0) {
            return false
        } else {
            return true
        }
    }
}

module.exports = userBlockedVerify;