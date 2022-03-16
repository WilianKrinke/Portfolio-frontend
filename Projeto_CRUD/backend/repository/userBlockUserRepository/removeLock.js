const knex = require("../../connection/connection");

async function removeLock(idUser){
    const response = await knex('nodecrud.users').where('idUser', idUser).update({isblock: 0, blocked_day: null})

    if (response !== 1) {
        throw new Error('Server Error - removeLock')
    }
}

module.exports = removeLock;