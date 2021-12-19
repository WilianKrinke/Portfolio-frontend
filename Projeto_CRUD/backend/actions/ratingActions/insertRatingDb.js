const knex = require("../../connection/connection");

async function insertRatingDb(newRating, idBook){

    try {
        const response = await knex('books')
        .where({idBook: idBook})
        .update({
            rating: newRating
        })
    
        if (response != 1) {
            return false
        } else {
            return true
        }
    } catch (error) {
        return error;
    }
    
}

module.exports = insertRatingDb;