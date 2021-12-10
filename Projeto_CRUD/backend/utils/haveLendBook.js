const knex = require("../connection/connection");

async function haveLendBook(bookDatas){
    console.log(bookDatas)

    const idUserData = bookDatas.userId;
    const idBookData = bookDatas.idBook

    try {
        const haveLendThisBook = await knex('nodecrud.lendregister').where({
            idUser: idUserData,
            last_name:  idBookData
          }).select('idlendRegister')

        console.log(haveLendBook)
    } catch (error) {
        console.log(error)
    }
}

module.exports = haveLendBook;