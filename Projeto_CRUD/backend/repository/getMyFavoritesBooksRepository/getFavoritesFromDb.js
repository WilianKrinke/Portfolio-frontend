const knex = require('../../connection/connection')

async function getFavoritesFromDb(idUser){    
    const response = await knex('favorites').where('idUser', idUser)
    return response
}

module.exports = getFavoritesFromDb;