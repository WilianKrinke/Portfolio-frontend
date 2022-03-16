const getAllBooks = require('../../repository/getBooksRepository/getAllBooks.repository');
const getBooksByCategory = require('../../repository/getBooksRepository/getBooksByCategory.repository');

async function getDataBooks(category){
    if (category === 'all') {
        const response = await getAllBooks()

        if (response[0] !== undefined) {
            return response; 
        } else {
            throw new Error('Server Error - getDataBooks')
        }
        
    } else {
                
        const response = getBooksByCategory(category)

        if (response !== undefined) {
            return response; 
        } else {
            throw new Error('Server Error - getDataBooks')
        } 
    }
}

module.exports = getDataBooks;

