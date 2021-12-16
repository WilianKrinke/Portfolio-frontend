const knex = require('../../connection/connection')

async function getDataBooks(){
    try {
        const datasReceived = await knex.select().from('nodecrud.books')

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

module.exports = {getDataBooks}