const knex = require("../../connection/connection");

async function returnBook(bookData) {
    const {userId,idBook} = bookData

    const response = await knex('lendregister')
        .where('idUser',userId)
        .andWhere('idBook',idBook)
        .del()
        
   
    return response;
}

module.exports = returnBook;