const knex = require("../../connection/connection");

async function hasFavoriteBooks(dataBooks, idUser){
    const results = await knex('nodecrud.favorites').where('idUser', idUser)

    for (let index = 0; index < results.length; index++) {
        const idBookData = parseInt(results[index].idBook);
        
        dataBooks.forEach(element => {
            if (idBookData === element.idBook){
                element.isFavoriteByUser = true
            } 
        });
    }

    return dataBooks;
}

module.exports = hasFavoriteBooks;