const knex = require('../../connection/connection')

async function removeFavoriteFromDb(bookData){
    const response = await knex('favorites')
        .where('idUser', bookData.idUser)
        .andWhere('idBook', bookData.idBook)
        .del()        
    
        if (response != undefined) {
            const objectResponse = {
                isRemoved: true,
                message: 'Book removed from favorites'
            }
    
            return objectResponse
        } else {
            throw new Error('Server Error - removeFavoriteFromDb')
        }
}

module.exports = removeFavoriteFromDb;