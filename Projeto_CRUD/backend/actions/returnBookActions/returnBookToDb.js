const knex = require('../../connection/connection')
async function returnBookToDb(bookData){
    try {
        const {userId,idBook} = bookData
        
        const response = await knex('lendregister')
            .where('idUser',userId)
            .andWhere('idBook',idBook)
            .del()        

            if (response === 1) {
                const objectResponse = {
                    isReturnTheBook: true,
                    message: 'The book was returned successfully'
                }
                return objectResponse

            } else {
                const objectResponse = {
                    isReturnTheBook: false,
                    message: 'An error has occurred, contact the administrator'
                }
               return objectResponse
            }
    } catch (error) {
        const objectResponse = {
            isReturnTheBook: false,
            message: error
        }
        console.log(error)
        return objectResponse
    }   
}

 module.exports = returnBookToDb;