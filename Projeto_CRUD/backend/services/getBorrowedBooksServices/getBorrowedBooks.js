const knex = require('../../connection/connection')

async function getBorrowedBooksActions(idUser) {    
        const response = await knex('lendregister').where('idUser', idUser);
        return response
}

module.exports = getBorrowedBooksActions;