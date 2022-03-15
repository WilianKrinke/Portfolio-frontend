const returnBook = require('../../repository/returnBookRepository/returnBook.repository')
const incrementCopies = require('../../repository/stockSharesRepository/incrementCopies')

async function returnBookToDb(bookData){
    const {idBook} = bookData
    
    const response = await returnBook(bookData)        
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