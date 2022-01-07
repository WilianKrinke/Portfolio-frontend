const knex = require('../../connection/connection')

async function getBorrowedBooksActions(userId) {
    try {
        const response = await knex('lendregister').where('idUser', userId);

        if (response !== undefined || null) {
            return response            
        } else {
            return null
        }
        
    } catch (error) {
        console.log(error)
        return null
    }


}

module.exports = getBorrowedBooksActions;