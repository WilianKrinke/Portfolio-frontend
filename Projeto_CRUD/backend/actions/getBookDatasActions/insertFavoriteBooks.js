const knex = require("../../connection/connection");

async function insertFavoriteBooks(dataBooks, idUser){
    const results = await knex('favorites').where({
        idUser: idUser
    })

    for (let index = 0; index < results.length; index++) {
        const idBookData = results[index];
        
        dataBooks.forEach(element => {
            if (idBookData.idBook == element.idBook) element.isFavoriteByUser = true
        });
    }

    return dataBooks;
}

module.exports = insertFavoriteBooks;