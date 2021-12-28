const knex = require('../../connection/connection')

async function getDataBooks(category){

    if (category === 'all') {
        try {
            const response = await knex.select().from('books')
    
            if (response[0] != undefined) {
                return response; 
            } else {
                return null;
            }
              
        } catch (error) {
            console.log(error)
            return null;
        } 
    } else {
        try {
            const response = await knex('books').select().where('category', category)
    
            if (response != undefined) {
                return response; 
            } else {
                return null;
            }
              
        } catch (error) {
            console.log(error)
            return null;
        }  
    }
}

module.exports = getDataBooks;

