const knex = require("../connection/connection");

async function insertLendBookInDb(bookDatas){
    try {
        const {idBook,bookName,userId,userName} = bookDatas;

        const insertion = await knex('nodecrud.lendregister').insert({
            idUser: userId,
            userName: userName,
            idBook: idBook,
            bookName: bookName
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = insertLendBookInDb;