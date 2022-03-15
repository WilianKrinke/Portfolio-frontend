const knex = require('../../connection/connection')

async function getBorrowedBooks(idUser) {    
        const response = await knex('lendregister').where('idUser', idUser);
        return response
}

module.exports = getBorrowedBooks;