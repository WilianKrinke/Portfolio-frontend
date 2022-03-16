const knex = require("../../connection/connection");

async function hasborrowBooksFromUser (dataBooks, idUser){
    const results = await knex('nodecrud.lendregister').where('idUser', idUser);

    for (let index = 0; index < results.length; index++) {
        
        const idBookData = parseInt(results[index].idBook);
        dataBooks.forEach(element => {            
            if (idBookData === element.idBook){
                element.isBorrowedByUser = true;
            }
        })   
    }

    return dataBooks;
}

module.exports = hasborrowBooksFromUser;
