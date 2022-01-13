const knex = require('../../connection/connection')

async function removeFavoriteFromDb(bookData){

    const response = await knex('favorites')
        .where('idUser', bookData.idUser)
        .andWhere('idBook', bookData.idBook)
        .del()
        
    try {
        if (response != undefined) {
            const objectResponse = {
                isRemoved: true,
                message: 'Book removed from favorites'
            }
    
            return objectResponse
        } else {
            const objectResponse = {
                isRemoved: false,
                message: 'Book not removed from favorites'
            }
    
            return objectResponse
        }
    } catch (error) {
        const objectResponse = {
            isRemoved: false,
            message: error
        }

        return objectResponse
    }
    
}

module.exports = removeFavoriteFromDb;