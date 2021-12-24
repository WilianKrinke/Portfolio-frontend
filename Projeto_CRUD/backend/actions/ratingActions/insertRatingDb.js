const knex = require("../../connection/connection");

async function insertRatingDb(newRating, idBook){

    try {
        const response = await knex('books')
        .where({idBook: idBook})
        .update({
            rating: newRating
        })
    
        if (response != undefined) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return error;
    }
    
}

module.exports = insertRatingDb;