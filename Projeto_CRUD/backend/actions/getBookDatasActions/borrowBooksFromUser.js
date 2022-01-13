const knex = require("../../connection/connection");

async function borrowBooksFromUser (dataBooks, idUser){

    const results = await knex('nodecrud.lendregister').where({
        idUser: idUser
    })

    for (let index = 0; index < results.length; index++) {
        const idBookData = results[index];

        dataBooks.forEach(element => {
            if (idBookData.idBook == element.idBook) element.isBorrowedByUser = true
        })   
    }

    return dataBooks;
}

module.exports = borrowBooksFromUser;