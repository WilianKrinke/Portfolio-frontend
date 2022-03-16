const knex = require("../../connection/connection");

async function getAllBooks() {
    const response = await knex.select().from('nodecrud.books')

    return response;     
}

module.exports = getAllBooks;