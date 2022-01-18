const knex = require('../../connection/connection')

async function incrementCopies(idBook) {
    try {
        const response = await knex('books').where('idBook', idBook).increment('amount', 1);
    
        if (response !== 1) {
            return false
        } else {
            return true
        }
        
    } catch (e) {
        const error = new Error(e)
        console.log(error.message)
        return false
    }
}

module.exports = incrementCopies;