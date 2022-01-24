const knex = require('../../connection/connection')

async function getDataBooks(category){
    if (category === 'all') {        
        const response = await knex.select().from('books')

        if (response[0] !== undefined) {
            return response; 
        } else {
            throw new Error('Server Error - choice of categories')
        }
    } else {        
        const response = await knex('books').select().where('category', category)

        if (response !== undefined) {
            return response; 
        } else {
            throw new Error('Server Error - choice of categories')
        } 
    }
}

module.exports = getDataBooks;

