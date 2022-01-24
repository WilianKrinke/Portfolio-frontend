const knex = require('../../connection/connection')
const incrementCopies = require('../copiesActions/incrementCopies')
async function returnBookToDb(bookData){
    const {userId,idBook} = bookData
    
    const response = await knex('lendregister')
        .where('idUser',userId)
        .andWhere('idBook',idBook)
        .del()
        
    const responseIncrementCopies = await incrementCopies(idBook)

    if (response === 1 && responseIncrementCopies === true) {
        const objectResponse = {
            isReturnTheBook: true,
            message: 'The book was returned successfully'
        }
        return objectResponse

    } else {
        throw new Error('Server Error - returnBookToDb')
    }    
}

 module.exports = returnBookToDb;