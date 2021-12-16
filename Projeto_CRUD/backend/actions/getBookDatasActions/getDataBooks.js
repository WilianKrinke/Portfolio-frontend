const knex = require('../../connection/connection')

async function getDataBooks(){
    try {
        const datasReceived = await knex.select().from('nodecrud.books')
        return datasReceived;
        
    } catch (error) {
        console.log(error)
        return null;
    }  
}

module.exports = {getDataBooks}