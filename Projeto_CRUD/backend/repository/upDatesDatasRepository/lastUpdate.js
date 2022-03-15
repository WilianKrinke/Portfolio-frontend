const knex = require("../../connection/connection");

async function lastUpdate(idUser, last_update){
    const response = await knex('users').where('idUser', idUser).update({
        last_update: last_update
    })

    if (response !== 1) {
        throw new Error('Server Error - lastUpdate')
    }
}

module.exports = lastUpdate;