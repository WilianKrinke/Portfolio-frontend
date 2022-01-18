const knex = require("../../connection/connection");

async function insertRatingDb(newRating, idBook){
    try {
        const response = await knex('books')
        .where({idBook: idBook})
        .update({
            rating: newRating
        })
    
        if (response !== 0) {
            return true
        } else {
            return null
        }
    } catch (e) {
        const error = new Error(e)
        console.log(error.message)
        return error;
    }
    
}

module.exports = insertRatingDb;