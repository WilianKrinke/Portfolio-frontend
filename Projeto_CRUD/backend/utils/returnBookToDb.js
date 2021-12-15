const knex = require('../connection/connection')

async function returnBookToDb(bookData){
    console.log(bookData)

    const response = knex('nodecrud.lendregister')
        .where('idBook', bookData.idBook)
        .andWhere('idUser', bookData.userId)
        .del()
    
    
    console.log(response)
}

 module.exports = returnBookToDb;