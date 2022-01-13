const knex = require('../../connection/connection')

async function getFavoritesFromDb(idUser){
    try {
        const response = await knex('favorites').where('idUser', idUser)

        if (response[0] === undefined) {
            return null
        } else {
            return response
        }
        
    } catch (e) {
        const error = new Error(e)
        console.log(error.message)
        return null
    } 
}

module.exports = getFavoritesFromDb;