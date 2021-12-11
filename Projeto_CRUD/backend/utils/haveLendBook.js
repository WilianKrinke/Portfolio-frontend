const knex = require("../connection/connection");

async function haveLendBook(bookDatas){
    
    const idUserData = bookDatas.userId;
    const idBookData = bookDatas.idBook

    try {
        const haveLendThisBook = await knex('nodecrud.lendregister').where({
            idUser: idUserData,
            idBook:  idBookData
          }).select('idlendRegister')        
          
       if (haveLendThisBook.length == 0) {
           const response = {
               findSomeRegister: false,
               message: 'User has not borrowed this book previously.'
           }

           return response;

       } else {
        const response = {
            findSomeRegister: true,
            message: 'You have already borrowed this book!'
        }

        return response;
       }
    } catch (error) {
        console.log(error)
    }
}

module.exports = haveLendBook;