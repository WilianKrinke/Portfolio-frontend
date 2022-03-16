const knex = require('../../connection/connection')

async function userIsBlocked(idUser){
    const response = await knex('nodecrud.users').where('idUser', idUser).select('isblock')

    if (response[0] === undefined) {
        throw new Error('Server Error - response is undefined - userIsBlocked')
    } else {
        const {isblock} = response[0]

        if (isblock === 1) {
            return true
        } else {
            return false
        }
    }
}

module.exports = userIsBlocked;