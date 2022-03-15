const knex = require("../../connection/connection");

async function getBooksByCategory(category) {
    const response = await knex('books').select().where('category', category)
    return response; 
}

module.exports = getBooksByCategory;