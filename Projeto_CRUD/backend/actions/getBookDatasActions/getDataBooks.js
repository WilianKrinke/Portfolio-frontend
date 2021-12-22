const knex = require('../../connection/connection')

async function getDataBooks(category){
    if (category === 'all') {
        try {
            const datasReceived = await knex.select().from('books')
    
            if (datasReceived != null || []) {
                return datasReceived; 
            } else {
                return null;
            }
              
        } catch (error) {
            console.log(error)
            return null;
        } 
    } else {
        try {
            const datasReceived = await knex('books').select().where('category', category)
    
            if (datasReceived != null || []) {
                return datasReceived; 
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

