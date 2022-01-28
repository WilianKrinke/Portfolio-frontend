const knex = require('../../connection/connection')

async function userAccess(idUser){
    const response = await knex('users').where('idUser', idUser).select('email')

    if (response[0] !== undefined) {
        return response[0];
    } else {
        throw new Error('Server Error - userAccess')
    }
}

module.exports = userAccess;